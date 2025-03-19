// src/lib/Services/ServicePageLoader.ts
import { fetchServiceData, fetchServiceCategoryInfo } from '$lib/Services/ServiceData';
import { SERVICES_INFO_SHEET_ID, SERVICES_INFO_SHEET_GID } from '$env/static/private';

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
	// Fetch category information from the services info sheet
	const categoryInfoUrl = `https://docs.google.com/spreadsheets/d/${SERVICES_INFO_SHEET_ID}/export?format=csv&gid=${SERVICES_INFO_SHEET_GID}`;
	const allCategories = await fetchServiceCategoryInfo(categoryInfoUrl);

	// Find the specific category info
	const categoryInfo = Array.isArray(allCategories)
	  ? allCategories.find((cat) => cat.serviceType === config.serviceType)
	  : config.defaultInfo;

	// Convert string "true"/"false" to boolean
	categoryInfo.showPrices = categoryInfo.showPrices === 'true' || categoryInfo.showPrices === true;

	// Fetch service/product data
	const dataUrl = `https://docs.google.com/spreadsheets/d/${config.dataSheetId}/export?format=csv&gid=${config.dataSheetGid}`;
	const items = await fetchServiceData(dataUrl);

	return {
	  items,
	  categoryInfo
	};
  } catch (error) {
	console.error(`Error loading ${config.serviceType} data:`, error);
	return {
	  items: [],
	  categoryInfo: {
		...config.defaultInfo,
		showPrices: typeof config.defaultInfo.showPrices === 'string' 
		  ? config.defaultInfo.showPrices === 'true'
		  : config.defaultInfo.showPrices
	  },
	  error: error instanceof Error ? error.message : 'An unknown error occurred'
	};
  }
}