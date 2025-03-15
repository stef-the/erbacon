// src/routes/services/fencing/+page.server.js
import { fetchServiceData, fetchServiceCategoryInfo } from '$lib/Services/ServiceData';
import { SERVICES_INFO_SHEET_ID, TEMPORARY_FENCING_SHEET_ID } from '$env/static/private';

export async function load() {
	try {
		// Fetch category information from the services info sheet
		const categoryInfoUrl = `https://docs.google.com/spreadsheets/d/${SERVICES_INFO_SHEET_ID}/export?format=csv`;
		const allCategories = await fetchServiceCategoryInfo(categoryInfoUrl);

		// Find the fencing category info
		const categoryInfo = Array.isArray(allCategories)
			? allCategories.find((cat) => cat.serviceType === 'fencing')
			: {
					title: 'Temporary Fencing',
					description: 'Secure your site with our durable temporary fencing solutions.',
					contactCta: 'Request a quote today',
					showPrices: 'true'
				};

		// Convert string "true"/"false" to boolean
		categoryInfo.showPrices = categoryInfo.showPrices === 'true';

		// Fetch fencing products data
		const fencingUrl = `https://docs.google.com/spreadsheets/d/${TEMPORARY_FENCING_SHEET_ID}/export?format=csv`;
		const fencing = await fetchServiceData(fencingUrl);

		return {
			products: fencing,
			categoryInfo
		};
	} catch (error) {
		console.error('Error loading fencing data:', error);
		return {
			products: [],
			categoryInfo: {
				title: 'Temporary Fencing',
				description: 'Secure your site with our durable temporary fencing solutions.',
				contactCta: 'Request a quote today',
				showPrices: true
			},
			error: error instanceof Error ? error.message : 'An unknown error occurred'
		};
	}
}
