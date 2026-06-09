// src/routes/products/trucks/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { SHEET_ID, SHEET_GIDS } from '$lib/sheets';

export async function load() {
	return loadServicePageData({
		serviceType: 'trucks',
		dataSheetId: SHEET_ID,
		dataSheetGid: SHEET_GIDS.truckEquipment,
		defaultInfo: {
			title: 'Truck & Mobile Equipment',
			description: 'Stellar Industries truck and mobile equipment',
			contactCta: 'Contact us for more information',
			showPrices: true
		}
	});
}
