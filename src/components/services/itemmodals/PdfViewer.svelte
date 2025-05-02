<!-- src/components/services/itemmodals/PdfViewer.svelte -->
<script lang="ts">
	import PdfSearchBar from './PdfSearchBar.svelte';

	export let pdfUrl: string;

	// State for PDF viewer
	let pdfViewerElement: HTMLEmbedElement;
	let searchTerm = '';
	let showSearchBar = false;

	/**
	 * Toggle search bar visibility
	 */
	function toggleSearchBar() {
		showSearchBar = !showSearchBar;
		if (showSearchBar) {
			// Focus on the search input when shown
			setTimeout(() => {
				const searchInput = document.getElementById('pdf-search-input');
				if (searchInput) {
					searchInput.focus();
				}
			}, 100);
		}
	}

	/**
	 * Print only the PDF document
	 */
	function printPdf() {
		if (pdfUrl) {
			// Open the PDF in a new window and print it directly
			const printWindow = window.open(pdfUrl, '_blank');
			// Wait for the window to load before printing
			if (printWindow) {
				printWindow.onload = function() {
					printWindow.print();
				};
			}
		}
	}

	/**
	 * Search in the PDF
	 */
	function searchPdf() {
		if (!pdfUrl || !searchTerm.trim()) return;

		try {
			// Try to update the existing embed element with search param
			if (pdfViewerElement) {
				const pdfUrlWithSearch = `${pdfUrl}#search=${encodeURIComponent(searchTerm)}`;
				pdfViewerElement.src = pdfUrlWithSearch;
			}
		} catch (error) {
			// Fallback to opening in new window if embed manipulation failed
			window.open(`${pdfUrl}#search=${encodeURIComponent(searchTerm)}`, '_blank');
		}
	}
</script>

<div class="flex h-full flex-col">
	{#if showSearchBar}
		<PdfSearchBar 
			bind:searchTerm={searchTerm} 
			onSearch={searchPdf} 
			onClose={toggleSearchBar} 
		/>
	{/if}

	<div class="flex-grow overflow-hidden p-2">
		<embed 
			src={pdfUrl} 
			type="application/pdf" 
			width="100%" 
			height="100%" 
			class="rounded-md" 
			id="pdf-viewer"
			bind:this={pdfViewerElement}
		/>
	</div>

	<div class="flex flex-wrap gap-2 bg-gray-50 p-2 dark:bg-zinc-800">
		<button 
			on:click={() => window.open(pdfUrl, '_blank')}
			class="rounded-lg bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600 dark:focus:ring-offset-zinc-800"
		>
			<span class="flex items-center gap-1">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
				</svg>
				Download
			</span>
		</button>

		<button 
			on:click={printPdf}
			class="rounded-lg bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600 dark:focus:ring-offset-zinc-800"
		>
			<span class="flex items-center gap-1">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
				</svg>
				Print
			</span>
		</button>

		<button 
			on:click={toggleSearchBar}
			class="rounded-lg bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600 dark:focus:ring-offset-zinc-800"
		>
			<span class="flex items-center gap-1">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				Search
			</span>
		</button>
	</div>
</div>