// src/routes/services/fencing/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { SHEET_ID, SHEET_GIDS } from '$lib/sheets';

export async function load() {
	return loadServicePageData({
		serviceType: 'fencing',
		dataSheetId: SHEET_ID,
		dataSheetGid: SHEET_GIDS.fencing,
		defaultInfo: {
			title: 'Temporary Fencing',
			description: 'Temporary fencing solutions for construction sites and events',
			contactCta: 'Contact us to discuss your fencing needs',
			showPrices: false
		}
	});
}
