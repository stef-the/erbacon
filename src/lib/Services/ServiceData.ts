// lib/Services/ServiceData.js
import Papa from 'papaparse';

/**
 * Interface for service data items
 */
export interface ServiceDataItem {
    name: string;
    description: string;
    imageurl: string;
    imagealt?: string;
    price?: string;
    details?: string;
    brand?: string;
    model?: string;
    features?: string;
    availability?: string;
    contactInfo?: string;
    category?: string;
    [key: string]: string | number | boolean | null | undefined; // To allow additional properties
}

/**
 * Fetches and parses service data from a Google Sheets CSV export
 * @param {string} sheets_url - The URL to the Google Sheets CSV export
 * @returns {Promise<Array>} The parsed data from the Google Sheets
 */
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
            skipEmptyLines: true,
            transformHeader: (header) => {
                // Normalize header names by trimming whitespace and converting to lowercase
                return header.trim().toLowerCase();
            }
        });

        // Process the data to ensure all expected fields are present
        const processedData = parsedData.data.map(item => {
            // Ensure required fields are present
            if (!item.name || !item.description || !item.imageUrl) {
                console.warn('Item missing required fields:', item);
            }
            
            // Ensure category is properly formatted if present
            if (item.category) {
                item.category = item.category.trim();
            }
            
            return item;
        });

        return processedData;
    } catch (error) {
        console.error("Error fetching category info:", error);
        return []; // Return empty array on error instead of throwing
    }
}