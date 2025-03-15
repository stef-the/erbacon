// src/routes/services/generators/+page.server.js
import { fetchServiceData, fetchServiceCategoryInfo } from '$lib/Services/ServiceData';
import { SERVICES_INFO_SHEET_ID, GENERATORS_POWER_SHEET_ID } from '$env/static/private';

export async function load() {
	try {
		// Fetch category information from the services info sheet
		const categoryInfoUrl = `https://docs.google.com/spreadsheets/d/${SERVICES_INFO_SHEET_ID}/export?format=csv`;
		const allCategories = await fetchServiceCategoryInfo(categoryInfoUrl);

		// Find the generators category info
		const categoryInfo = Array.isArray(allCategories)
			? allCategories.find((cat) => cat.serviceType === 'generators')
			: {
					title: 'Generators and Power Solutions',
					description: 'Reliable power solutions for any job site or emergency situation.',
					contactCta: 'Request a quote today',
					showPrices: 'true'
				};

		// Convert string "true"/"false" to boolean
		categoryInfo.showPrices = categoryInfo.showPrices === 'true';

		// Fetch generators products data
		const generatorsUrl = `https://docs.google.com/spreadsheets/d/${GENERATORS_POWER_SHEET_ID}/export?format=csv`;
		const generators = await fetchServiceData(generatorsUrl);

		return {
			products: generators,
			categoryInfo
		};
	} catch (error) {
		console.error('Error loading generators data:', error);
		return {
			products: [],
			categoryInfo: {
				title: 'Generators and Power Solutions',
				description: 'Reliable power solutions for any job site or emergency situation.',
				contactCta: 'Request a quote today',
				showPrices: true
			},
			error: error instanceof Error ? error.message : 'An unknown error occurred'
		};
	}
}
