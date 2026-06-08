// src/routes/products/trucks/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { SHEET_ID, SHEET_GIDS } from '$lib/sheets';

export async function load() {
	return loadServicePageData({
		serviceType: 'trucks',
		dataSheetId: SHEET_ID,
		dataSheetGid: SHEET_GIDS.truckEquipment,
		defaultInfo: {
			title: 'Truck Equipment',
			description: 'High-quality truck equipment for transportation and logistics',
			contactCta: 'Contact us for more information',
			showPrices: true
		}
	});
}
