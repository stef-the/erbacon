// src/routes/services/generators/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { GENERATORS_POWER_SHEET_ID, GENERATORS_POWER_SHEET_GID } from '$env/static/private';

export async function load() {
  return loadServicePageData({
	serviceType: 'generators',
	dataSheetId: GENERATORS_POWER_SHEET_ID,
	dataSheetGid: GENERATORS_POWER_SHEET_GID,
	defaultInfo: {
		title: 'Generators and Power Solutions',
		description: 'Reliable power solutions for any job site or emergency situation.',
		contactCta: 'Request a quote today',
		showPrices: 'true'
	}
  });
}