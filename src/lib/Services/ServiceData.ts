// src/lib/Services/ServiceData.ts
import Papa from 'papaparse';

// Top-level folders under static/. A sheet path beginning with one of these is treated
// as site-root-relative; any other bare path is assumed to live under /products/.
const ASSET_TOP_LEVEL_DIRS = ['products', 'truck-equipment', 'services', 'icons', 'video'];

/**
 * Turn a sheet-supplied asset path into a usable URL.
 * - Full URLs (http/https) pass through unchanged.
 * - Paths under a known static folder (e.g. "truck-equipment/cranes/x.pdf") are rooted with "/".
 * - Bare category paths (e.g. "air-tools/x.pdf") are placed under "/products/".
 */
function resolveAssetPath(path: string): string {
	const trimmed = path.trim();
	if (!trimmed) return trimmed;
	if (/^https?:\/\//i.test(trimmed)) return trimmed;
	const clean = trimmed.replace(/^\/+/, '');
	const firstSegment = clean.split('/')[0];
	return ASSET_TOP_LEVEL_DIRS.includes(firstSegment) ? `/${clean}` : `/products/${clean}`;
}

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
	pdf?: string;
	[key: string]: string | number | boolean | null | undefined; // To allow additional properties
}

/**
 * Fetches and parses service data from a Google Sheets CSV export
 * @param {string} sheets_url - The URL to the Google Sheets CSV export
 * @returns {Promise<Array>} The parsed data from the Google Sheets
 */
export async function fetchServiceData(sheets_url: string): Promise<ServiceDataItem[]> {
	if (!sheets_url) {
		throw new Error('Service data URL is empty — a sheet ID/GID is probably missing.');
	}

	// Fetch (network-level failures get a clear message instead of a blank page).
	let response: Response;
	try {
		response = await fetch(sheets_url);
	} catch (error) {
		const detail = error instanceof Error ? error.message : String(error);
		throw new Error(`Could not reach the Google Sheet (${sheets_url}): ${detail}`, {
			cause: error
		});
	}

	if (!response.ok) {
		throw new Error(
			`Google Sheet request failed: HTTP ${response.status} ${response.statusText}. ` +
				`Check the GID is correct and the sheet is shared "Anyone with the link → Viewer". URL: ${sheets_url}`
		);
	}

	const csvText = await response.text();

	// When a sheet isn't publicly readable, Google returns an HTML sign-in page
	// (HTTP 200) instead of CSV. Detect it so the page shows a clear error.
	if (/^\s*<(!doctype|html)/i.test(csvText)) {
		throw new Error(
			`Google returned a web page instead of CSV — the sheet is likely not shared publicly. URL: ${sheets_url}`
		);
	}

	const parsedData = Papa.parse<ServiceDataItem>(csvText, {
		header: true,
		skipEmptyLines: true,
		transformHeader: (header) => {
			// Normalize header names by trimming whitespace and converting to lowercase
			return header.trim().toLowerCase();
		}
	});

	if (parsedData.errors.length > 0) {
		console.warn(`CSV parse warnings for ${sheets_url}:`, parsedData.errors);
	}

	// Process the data to ensure all expected fields are present
	const processedData = parsedData.data.map((item) => {
		// Ensure required fields are present
		if (!item.name || !item.description || !item.imageurl) {
			console.warn('Item missing required fields:', item);
		}

		// Ensure category is properly formatted if present
		if (item.category) {
			item.category = item.category.trim();
		}

		// Resolve a relative PDF path (e.g. "air-tools/sullivan.pdf") against the
		// /products/ folder where the spec sheets live. Full URLs ("http(s)://…")
		// and paths that are already absolute ("/…") are left untouched.
		if (item.pdf) item.pdf = resolveAssetPath(item.pdf);
		if (item.imageurl) item.imageurl = resolveAssetPath(item.imageurl);

		return item;
	});

	return processedData;
}
