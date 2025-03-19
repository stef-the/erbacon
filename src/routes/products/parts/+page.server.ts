// src/routes/products/parts/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { PARTS_SHEET_ID, PARTS_SHEET_GID } from '$env/static/private';

export async function load() {
  return loadServicePageData({
	serviceType: 'parts',
	dataSheetId: PARTS_SHEET_ID,
	dataSheetGid: PARTS_SHEET_GID,
	defaultInfo: {
	  title: 'Parts and Miscellaneous',
	  description: 'Quality parts and accessories for all your equipment needs',
	  contactCta: 'Contact us for parts availability',
	  showPrices: 'true'
	}
  });
}