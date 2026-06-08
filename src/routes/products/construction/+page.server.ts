// src/routes/services/construction/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { SHEET_ID, SHEET_GIDS } from '$lib/sheets';

export async function load() {
	return loadServicePageData({
		serviceType: 'construction',
		dataSheetId: SHEET_ID,
		dataSheetGid: SHEET_GIDS.newEquipment,
		defaultInfo: {
			title: 'New Equipment',
			description: 'New equipment from the manufacturer lines we represent',
			contactCta: 'Contact us for more information',
			showPrices: true
		}
	});
}
