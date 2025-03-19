// src/routes/services/project-site/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { PROJECT_SITE_SERVICES_SHEET_ID, PROJECT_SITE_SERVICES_SHEET_GID } from '$env/static/private';

export async function load() {
  return loadServicePageData({
	serviceType: 'project-site',
	dataSheetId: PROJECT_SITE_SERVICES_SHEET_ID,
	dataSheetGid: PROJECT_SITE_SERVICES_SHEET_GID,
	defaultInfo: {
	  title: 'Project Site Services',
	  description: 'Comprehensive services for managing and supporting your project sites',
	  contactCta: 'Contact us to discuss your project site needs',
	  showPrices: 'false'
	}
  });
}