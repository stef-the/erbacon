// src/lib/Services/ServicePageLoader.ts
import { fetchServiceData } from '$lib/Services/ServiceData';

type ServiceConfig = {
	serviceType: string;
	dataSheetId: string;
	dataSheetGid: string;
	defaultInfo: {
		title: string;
		description: string;
		contactCta: string;
		showPrices: boolean;
	};
};

/**
 * Shared loader function for service and product pages
 */
export async function loadServicePageData(config: ServiceConfig) {
	try {
		// Fail loudly if the page's sheet env vars are unset/empty, rather than
		// silently building a broken URL and showing an empty page.
		if (!config.dataSheetId || !config.dataSheetGid) {
			throw new Error(
				`Missing sheet configuration for "${config.serviceType}". ` +
					`Set the corresponding *_SHEET_ID and *_SHEET_GID environment variables ` +
					`(locally in .env, in production in the Cloudflare Pages dashboard).`
			);
		}

		// Fetch service/product data
		const dataUrl = `https://docs.google.com/spreadsheets/d/${config.dataSheetId}/export?format=csv&gid=${config.dataSheetGid}`;
		const items = await fetchServiceData(dataUrl);

		// Include categoryInfo on success so the page shows its real title/description
		// (not the generic fallback).
		return {
			items,
			categoryInfo: config.defaultInfo
		};
	} catch (error) {
		console.error(`Error loading ${config.serviceType} data:`, error);
		return {
			items: [],
			categoryInfo: config.defaultInfo,
			error: error instanceof Error ? error.message : 'An unknown error occurred'
		};
	}
}
