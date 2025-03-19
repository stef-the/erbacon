// src/routes/products/trucks/+page.server.ts
import { loadServicePageData } from '$lib/Services/ServicePageLoader';
import { TRUCK_EQUIPMENT_SHEET_ID, TRUCK_EQUIPMENT_SHEET_GID } from '$env/static/private';

export async function load() {
  return loadServicePageData({
	serviceType: 'trucks',
	dataSheetId: TRUCK_EQUIPMENT_SHEET_ID,
	dataSheetGid: TRUCK_EQUIPMENT_SHEET_GID,
	defaultInfo: {
	  title: 'Truck Equipment',
	  description: 'High-quality truck equipment for transportation and logistics',
	  contactCta: 'Contact us for more information',
	  showPrices: 'true'
	}
  });
}