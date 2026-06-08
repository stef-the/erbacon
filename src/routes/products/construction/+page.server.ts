// src/routes/services/construction/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import {
	CONSTRUCTION_PRODUCTS_SHEET_ID,
	CONSTRUCTION_PRODUCTS_SHEET_GID
} from '$env/static/private';

export async function load() {
	return loadServicePageData({
		serviceType: 'construction',
		dataSheetId: CONSTRUCTION_PRODUCTS_SHEET_ID,
		dataSheetGid: CONSTRUCTION_PRODUCTS_SHEET_GID,
		defaultInfo: {
			title: 'New Equipment',
			description: 'New equipment from the manufacturer lines we represent',
			contactCta: 'Contact us for more information',
			showPrices: true
		}
	});
}
