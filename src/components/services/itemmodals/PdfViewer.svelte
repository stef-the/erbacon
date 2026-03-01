<!-- src/components/services/itemmodals/PdfViewer.svelte -->
<script lang="ts">
	import PdfSearchBar from './PdfSearchBar.svelte';

	export let pdfUrl: string;

	let pdfViewerElement: HTMLIFrameElement;
	let searchTerm = '';
	let showSearchBar = false;

	/**
	 * Ensure the PDF URL starts with a leading slash
	 */
	$: resolvedUrl = pdfUrl.startsWith('/') ? pdfUrl : `/${pdfUrl}`;

	/**
	 * Toggle search bar visibility
	 */
	function toggleSearchBar() {
		showSearchBar = !showSearchBar;
		if (showSearchBar) {
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
		if (resolvedUrl) {
			const printWindow = window.open(resolvedUrl, '_blank');
			if (printWindow) {
				printWindow.onload = function () {
					printWindow.print();
				};
			}
		}
	}

	/**
	 * Search in the PDF
	 */
	function searchPdf() {
		if (!resolvedUrl || !searchTerm.trim()) return;

		try {
			if (pdfViewerElement) {
				pdfViewerElement.src = `${resolvedUrl}#search=${encodeURIComponent(searchTerm)}`;
			}
		} catch {
			window.open(`${resolvedUrl}#search=${encodeURIComponent(searchTerm)}`, '_blank');
		}
	}
</script>

<div class="flex h-full flex-col">
	{#if showSearchBar}
		<PdfSearchBar bind:searchTerm onSearch={searchPdf} onClose={toggleSearchBar} />
	{/if}

	<div class="flex-grow overflow-hidden p-2" style="min-height: 50vh;">
		<iframe
			src={resolvedUrl}
			title="PDF document viewer"
			class="h-full w-full rounded-md border-0"
			style="min-height: 50vh;"
			id="pdf-viewer"
			bind:this={pdfViewerElement}
		></iframe>
	</div>

	<div class="flex flex-wrap gap-2 bg-gray-50 p-2 dark:bg-zinc-800">
		<button
			on:click={() => window.open(resolvedUrl, '_blank')}
			class="rounded-lg bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600 dark:focus:ring-offset-zinc-800"
		>
			<span class="flex items-center gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
					/>
				</svg>
				Download
			</span>
		</button>

		<button
			on:click={printPdf}
			class="rounded-lg bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600 dark:focus:ring-offset-zinc-800"
		>
			<span class="flex items-center gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
					/>
				</svg>
				Print
			</span>
		</button>

		<button
			on:click={toggleSearchBar}
			class="rounded-lg bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600 dark:focus:ring-offset-zinc-800"
		>
			<span class="flex items-center gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
				Search
			</span>
		</button>
	</div>
</div>
