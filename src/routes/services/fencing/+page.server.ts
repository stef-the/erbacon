// src/routes/services/fencing/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { TEMPORARY_FENCING_SHEET_ID, TEMPORARY_FENCING_SHEET_GID } from '$env/static/private';

export async function load() {
	return loadServicePageData({
		serviceType: 'fencing',
		dataSheetId: TEMPORARY_FENCING_SHEET_ID,
		dataSheetGid: TEMPORARY_FENCING_SHEET_GID,
		defaultInfo: {
			title: 'Temporary Fencing',
			description: 'Temporary fencing solutions for construction sites and events',
			contactCta: 'Contact us to discuss your fencing needs',
			showPrices: false
		}
	});
}
