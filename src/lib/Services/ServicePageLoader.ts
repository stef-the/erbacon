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
		showPrices: string | boolean;
	};
};

/**
 * Shared loader function for service and product pages
 */
export async function loadServicePageData(config: ServiceConfig) {
	try {
		// Fetch service/product data
		const dataUrl = `https://docs.google.com/spreadsheets/d/${config.dataSheetId}/export?format=csv&gid=${config.dataSheetGid}`;
		const items = await fetchServiceData(dataUrl);

		return {
			items
		};
	} catch (error) {
		console.error(`Error loading ${config.serviceType} data:`, error);
		return {
			items: [],
			categoryInfo: {
				...config.defaultInfo,
				showPrices:
					typeof config.defaultInfo.showPrices === 'string'
						? config.defaultInfo.showPrices === 'true'
						: config.defaultInfo.showPrices
			},
			error: error instanceof Error ? error.message : 'An unknown error occurred'
		};
	}
}
