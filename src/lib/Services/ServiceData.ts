// lib/Services/ServiceData.js
import Papa from 'papaparse';

/**
 * Fetches and parses service data from a Google Sheets CSV export
 * @param {string} sheets_url - The URL to the Google Sheets CSV export
 * @returns {Promise<Array>} The parsed data from the Google Sheets
 */
interface ServiceDataItem {
    name: string;
    description: string;
    imageUrl: string;
    [key: string]: string | number | boolean | null; // To allow additional properties with specific types
}

export async function fetchServiceData(sheets_url: string): Promise<ServiceDataItem[]> {
    if (!sheets_url) {
        throw new Error("The URL for the service data is not defined.");
    }

    try {
        const response = await fetch(sheets_url);

        if (!response.ok) {
            throw new Error(`Failed to fetch category info: ${response.statusText}`);
        }

        const csvText = await response.text();
        const parsedData = Papa.parse<ServiceDataItem>(csvText, { 
            header: true,
            skipEmptyLines: true 
        });

        // Ensure we always return an array
        return parsedData.data || [];
    } catch (error) {
        console.error("Error fetching category info:", error);
        return []; // Return empty array on error instead of throwing
    }
}