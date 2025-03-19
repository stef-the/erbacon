// src/routes/services/fencing/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { TEMPORARY_FENCING_SHEET_ID, TEMPORARY_FENCING_SHEET_GID } from '$env/static/private';

export async function load() {
  return loadServicePageData({
	serviceType: 'project-site',
	dataSheetId: TEMPORARY_FENCING_SHEET_ID,
	dataSheetGid: TEMPORARY_FENCING_SHEET_GID,
	defaultInfo: {
	  title: 'Project Site Services',
	  description: 'Comprehensive services for managing and supporting your project sites',
	  contactCta: 'Contact us to discuss your project site needs',
	  showPrices: 'false'
	}
  });
}