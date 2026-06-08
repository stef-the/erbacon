// src/routes/services/used/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { SHEET_ID, SHEET_GIDS } from '$lib/sheets';

export async function load() {
	return loadServicePageData({
		serviceType: 'used',
		dataSheetId: SHEET_ID,
		dataSheetGid: SHEET_GIDS.usedEquipment,
		defaultInfo: {
			title: 'Used Equipment',
			description: 'Quality pre-owned construction equipment at competitive prices.',
			contactCta: 'Contact us to check availability',
			showPrices: true
		}
	});
}
