<!-- src/components/services/ItemModal.svelte -->
<script lang="ts">
	export let item: {
		name: string;
		description: string;
		imageUrl: string;
		imageAlt?: string;
		price?: string;
		details?: string;
		brand?: string;
		model?: string;
		features?: string;
		availability?: string;
		contactInfo?: string;
		category?: string;
		pdf?: string;
	};
	export let showPrices: boolean;
	export let closeModal: () => void;
	export let toTitleCase: (text: string) => string;

	// State to control PDF viewer visibility
	let showPdfViewer = false;
	let searchTerm = '';
	let showSearchBar = false;
	
	// Reference to the PDF viewer element
	let pdfViewerElement: HTMLEmbedElement;
	let searchButtonElement: HTMLButtonElement;

	/**
	 * Toggle PDF viewer visibility
	 */
	function togglePdfViewer() {
		showPdfViewer = !showPdfViewer;
	}

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
	 * Handle modal content click to prevent closing
	 */
	function handleModalContentClick(event: Event) {
		event.stopPropagation();
	}
	
	/**
	 * Print only the PDF document
	 */
	function printPdf() {
		if (item.pdf) {
			// Open the PDF in a new window and print it directly
			const printWindow = window.open(item.pdf, '_blank');
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
	 * This will update the embedded PDF with the search term if possible
	 * Or open in a new window as fallback
	 */
	function searchPdf() {
		if (!item.pdf || !searchTerm.trim()) return;
		
		try {
			// Try to update the existing embed element with search param
			if (pdfViewerElement) {
				const pdfUrl = `${item.pdf}#search=${encodeURIComponent(searchTerm)}`;
				pdfViewerElement.src = pdfUrl;
			}
		} catch (error) {
			// Fallback to opening in new window if embed manipulation failed
			window.open(`${item.pdf}#search=${encodeURIComponent(searchTerm)}`, '_blank');
		}
	}

	/**
	 * Handle keyboard events for search
	 */
	function handleSearchKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			searchPdf();
		} else if (event.key === 'Escape') {
			toggleSearchBar();
		}
	}

	/**
	 * Handle search input focus to also visually focus search button
	 */
	function handleSearchInputFocus() {
		// Add a visual active class to the search button when input is focused
		if (searchButtonElement) {
			searchButtonElement.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2');
		}
	}

	/**
	 * Handle search input blur to remove focus from search button
	 */
	function handleSearchInputBlur(event: FocusEvent) {
		// Check if focus is moving to the search button before removing the visual focus
		// This prevents the focus ring from disappearing when clicking the button
		if (event.relatedTarget !== searchButtonElement) {
			if (searchButtonElement) {
				searchButtonElement.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2');
			}
		}
	}
</script>

<!-- Wrapper with keyboard handling -->
<div 
	class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
	role="dialog"
	aria-modal="true"
	on:click={closeModal}
	on:keydown={(e) => e.key === 'Escape' && closeModal()}
	tabindex="0"
	aria-hidden="true"
>
	<!-- Modal dialog with proper role -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- To fix later -->
	<div
		class="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white shadow-2xl dark:bg-zinc-900"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		on:click={handleModalContentClick}
		tabindex="0"
	>
		<button
			class="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-600 backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900 dark:bg-zinc-800/80 dark:text-gray-300 dark:hover:bg-zinc-800 dark:hover:text-white"
			on:click={closeModal}
			aria-label="Close modal"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<div class="flex flex-col lg:flex-row">
			<!-- Left side - Image or PDF viewer -->
			<div class="lg:w-1/2">
				{#if showPdfViewer && item.pdf}
					<div class="h-64 lg:h-full">
						<div class="flex h-full flex-col">
							{#if showSearchBar}
								<div class="flex items-center bg-gray-100 p-2 dark:bg-zinc-800">
									<input
										id="pdf-search-input"
										type="text"
										placeholder="Search in PDF..."
										class="flex-grow rounded-l-lg border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
										bind:value={searchTerm}
										on:keydown={handleSearchKeydown}
										on:focus={handleSearchInputFocus}
										on:blur={handleSearchInputBlur}
									/>
									<button
										bind:this={searchButtonElement}
										class="rounded-r-lg bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-zinc-800"
										on:click={searchPdf}
									>
										Search
									</button>
									<button
										class="ml-2 rounded-lg bg-gray-300 px-2 py-1 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-zinc-600 dark:text-gray-300 dark:hover:bg-zinc-500 dark:focus:ring-offset-zinc-800"
										on:click={toggleSearchBar}
									>
										Close
									</button>
								</div>
							{/if}
							<div class="flex-grow overflow-hidden p-2">
								<embed 
									src={item.pdf} 
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
									on:click={() => window.open(item.pdf, '_blank')}
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
					</div>
				{:else}
					<div class="relative h-64 lg:h-full">
						<img
							src={item.imageUrl}
							alt={item.imageAlt || item.name}
							class="h-full w-full object-cover"
						/>
					</div>
				{/if}
			</div>

			<!-- Right side - Item details -->
			<div class="flex-1 p-6 lg:p-8">
				<div class="mb-4 flex flex-wrap items-center gap-3">
					<h2 id="modal-title" class="text-2xl font-bold dark:text-slate-50">
						{item.name}
					</h2>

					{#if item.category}
						<span class="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-zinc-700 dark:text-slate-300">
							{toTitleCase(item.category)}
						</span>
					{/if}
				</div>

				{#if showPrices && item.price}
					<p class="mb-4 font-mono text-xl font-bold text-gray-800 dark:text-slate-300">
						{item.price}
					</p>
				{/if}

				<div class="mb-6 prose max-w-none dark:prose-invert">
					<p class="text-gray-700 dark:text-slate-300">
						{item.description}
					</p>
				</div>

				<div class="mt-6 border-t border-gray-200 pt-6 dark:border-zinc-700">
					<h3 class="mb-4 text-lg font-semibold dark:text-slate-50">Specifications</h3>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						{#if item.brand}
							<div>
								<span class="font-semibold dark:text-slate-50">Brand:</span>
								<span class="dark:text-slate-300">{item.brand}</span>
							</div>
						{/if}
						{#if item.model}
							<div>
								<span class="font-semibold dark:text-slate-50">Model:</span>
								<span class="dark:text-slate-300">{item.model}</span>
							</div>
						{/if}
						{#if item.availability}
							<div>
								<span class="font-semibold dark:text-slate-50">Availability:</span>
								<span class="dark:text-slate-300">{item.availability}</span>
							</div>
						{/if}
					</div>

					{#if item.features}
						<div class="mt-4">
							<span class="font-semibold dark:text-slate-50">Features:</span>
							<p class="dark:text-slate-300">{item.features}</p>
						</div>
					{/if}
					{#if item.details}
						<div class="mt-4">
							<span class="font-semibold dark:text-slate-50">Details:</span>
							<p class="dark:text-slate-300">{item.details}</p>
						</div>
					{/if}
				</div>

				{#if item.contactInfo}
					<div class="mt-6">
						<p class="font-semibold dark:text-slate-50">Contact Information:</p>
						<p class="dark:text-slate-300">{item.contactInfo}</p>
					</div>
				{/if}

				<div class="mt-8 flex flex-wrap items-center justify-end gap-4">
					<a
						href="/contact"
						class="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
					>
						Inquire About This Item
					</a>
					
					{#if item.pdf}
						<button 
							on:click={togglePdfViewer}
							class="rounded-lg bg-gray-200 px-6 py-2 font-semibold text-gray-800 transition-colors hover:bg-gray-300 dark:bg-zinc-700 dark:text-slate-100 dark:hover:bg-zinc-600"
						>
							{showPdfViewer ? 'Show Image' : 'View Documentation'}
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>