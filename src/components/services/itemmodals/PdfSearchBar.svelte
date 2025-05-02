<!-- src/components/services/itemmodals/PdfSearchBar.svelte -->
<script lang="ts">
	export let searchTerm: string;
	export let onSearch: () => void;
	export let onClose: () => void;

	// Reference to the search button
	let searchButtonElement: HTMLButtonElement;

	/**
	 * Handle keyboard events for search
	 */
	function handleSearchKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			onSearch();
		} else if (event.key === 'Escape') {
			onClose();
		}
	}

	/**
	 * Handle search input focus to also visually focus search button
	 */
	function handleSearchInputFocus() {
		if (searchButtonElement) {
			searchButtonElement.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2');
		}
	}

	/**
	 * Handle search input blur to remove focus from search button
	 */
	function handleSearchInputBlur(event: FocusEvent) {
		// Check if focus is moving to the search button before removing the visual focus
		if (event.relatedTarget !== searchButtonElement) {
			if (searchButtonElement) {
				searchButtonElement.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2');
			}
		}
	}
</script>

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
		on:click={onSearch}
	>
		Search
	</button>
	<button
		class="ml-2 rounded-lg bg-gray-300 px-2 py-1 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-zinc-600 dark:text-gray-300 dark:hover:bg-zinc-500 dark:focus:ring-offset-zinc-800"
		on:click={onClose}
	>
		Close
	</button>
</div>