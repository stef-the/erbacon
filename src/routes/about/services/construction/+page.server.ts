// src/routes/services/construction/+page.server.js
import { fetchServiceData, fetchServiceCategoryInfo } from '$lib/Services/ServiceData';
import { SERVICES_INFO_SHEET_ID, CONSTRUCTION_PRODUCTS_SHEET_ID } from '$env/static/private';

export async function load() {
	try {
		// Fetch category information from the services info sheet
		const categoryInfoUrl = `https://docs.google.com/spreadsheets/d/${SERVICES_INFO_SHEET_ID}/export?format=csv`;
		const allCategories = await fetchServiceCategoryInfo(categoryInfoUrl);

		// Find the construction category info
		const categoryInfo = Array.isArray(allCategories) 
			? allCategories.find((cat) => cat.serviceType === 'construction') 
			: {
			title: 'Construction Products',
			description: 'High-quality construction equipment for professionals',
			contactCta: 'Contact us for more information',
			showPrices: 'true'
		};

		// Convert string "true"/"false" to boolean
		categoryInfo.showPrices = categoryInfo.showPrices === 'true';

		// Fetch construction products data
		const productsUrl = `https://docs.google.com/spreadsheets/d/${CONSTRUCTION_PRODUCTS_SHEET_ID}/export?format=csv`;
		const products = await fetchServiceData(productsUrl);

		return {
			products,
			categoryInfo
		};
	} catch (error) {
		console.error('Error loading construction products data:', error);
		return {
			products: [],
			categoryInfo: {
				title: 'Construction Products',
				description: 'High-quality construction equipment for professionals',
				contactCta: 'Contact us for more information',
				showPrices: true
			},
			error: error instanceof Error ? error.message : 'An unknown error occurred'
		};
	}
}
