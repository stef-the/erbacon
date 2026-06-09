// Single source of truth for which Google Sheet tab feeds each catalog page.
//
// The site reads each tab as a CSV export, so editing ROWS in the sheet updates the
// site within a few minutes — no code change or redeploy needed. You only edit THIS
// file if a page needs to point at a DIFFERENT tab.
//
// SHEET_ID  = the long id in the sheet URL: docs.google.com/spreadsheets/d/<THIS>/edit
// gid       = the number after "gid=" in a tab's URL. A tab's gid stays the same when
//             you RENAME it, but CHANGES if you delete & recreate the tab — if that
//             happens, update the value here and redeploy.
//
// The sheet must be shared: File → Share → Anyone with the link → Viewer.

export const SHEET_ID = '1dr9z9kMk1IGSe7f-DpdL8iqLmuTkUdP1mmwjlcC03Og';

export const SHEET_GIDS = {
	// NOT CURRENTLY USED: the New Equipment page (/products/construction) is now a static
	// category list, not sheet-driven. This GID (the old manufacturer-lineup tab) is kept
	// here only in case New Equipment is ever switched back to a sheet.
	newEquipment: '151770928',

	// Truck & Mobile Equipment page — Stellar Industries cranes, mechanic trucks, hooklifts, etc.
	truckEquipment: '1070688118',

	// Used Equipment page — empty for now; add real used inventory to this tab.
	usedEquipment: '1947450164',

	// Fencing page (not linked in the menu; the Fence Rental page is separate static content).
	fencing: '480174975'
};
