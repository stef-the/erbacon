// src/lib/utils/stringUtils.ts
/**
 * Convert text to Title Case
 * @param {string} text - The text to convert
 * @returns {string} - The converted text
 */
export function toTitleCase(text: string): string {
	// First convert the entire string to lowercase
	let result = text.toLowerCase();

	// Capitalize the first letter of each word
	result = result.replace(
		/\w\S*/g,
		word => word.charAt(0).toUpperCase() + word.substring(1)
	);

	// Additionally capitalize any letter that follows a slash
	result = result.replace(
		/\/\w/g, 
		match => match.charAt(0) + match.charAt(1).toUpperCase()
	);

	return result;
}