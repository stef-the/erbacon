// src/routes/services/used/+page.server.js
import { fetchServiceData, fetchServiceCategoryInfo } from "$lib/Services/ServiceData";
import { SERVICES_INFO_SHEET_ID, USED_EQUIPMENT_SHEET_ID } from "$env/static/private";

export async function load() {
  try {
    // Fetch category information from the services info sheet
    const categoryInfoUrl = `https://docs.google.com/spreadsheets/d/${SERVICES_INFO_SHEET_ID}/export?format=csv`;
    const allCategories = await fetchServiceCategoryInfo(categoryInfoUrl);
    
    // Find the used equipment category info
    const categoryInfo = Array.isArray(allCategories) 
      ? allCategories.find(cat => cat.serviceType === 'used') 
      : {
      title: "Used Equipment",
      description: "Quality pre-owned construction equipment at competitive prices.",
      contactCta: "Contact us to check availability",
      showPrices: "true"
    };
    
    // Convert string "true"/"false" to boolean
    categoryInfo.showPrices = categoryInfo.showPrices === "true";
    
    // Fetch used equipment data
    const usedEquipmentUrl = `https://docs.google.com/spreadsheets/d/${USED_EQUIPMENT_SHEET_ID}/export?format=csv`;
    const usedEquipment = await fetchServiceData(usedEquipmentUrl);
    
    return {
      products: usedEquipment,
      categoryInfo
    };
  } catch (error) {
    console.error("Error loading used equipment data:", error);
    return {
      products: [],
      categoryInfo: {
        title: "Used Equipment",
        description: "Quality pre-owned construction equipment at competitive prices.",
        contactCta: "Contact us to check availability",
        showPrices: true
      },
      error: error instanceof Error ? error.message : "An unknown error occurred"
    };
  }
}