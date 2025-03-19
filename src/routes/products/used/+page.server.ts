// src/routes/services/used/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { USED_EQUIPMENT_SHEET_ID, USED_EQUIPMENT_SHEET_GID } from '$env/static/private';

export async function load() {
  return loadServicePageData({
	serviceType: 'used',
	dataSheetId: USED_EQUIPMENT_SHEET_ID,
	dataSheetGid: USED_EQUIPMENT_SHEET_GID,
	defaultInfo: {
		title: 'Used Equipment',
		description: 'Quality pre-owned construction equipment at competitive prices.',
		contactCta: 'Contact us to check availability',
		showPrices: 'true'
	}
  });
}