<!-- lib/Services/ServiceCatalog.svelte -->
<script lang="ts">
	/**
	 * Array of service items to display
	 * @type {Array<{
	 *   name: string,
	 *   description: string,
	 *   imageUrl: string,
	 *   imageAlt?: string,
	 *   price?: string,
	 *   details?: string,
	 *   brand?: string,
	 *   model?: string,
	 *   features?: string,
	 *   availability?: string,
	 *   contactInfo?: string,
	 *   category?: string
	 * }>}
	 */
	export let items: Array<{
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
	}> = [];

	/**
	 * Category information
	 * @type {{
	 *   title: string,
	 *   description: string,
	 *   contactCta?: string,
	 *   showPrices?: boolean
	 * }}
	 */
	export let categoryInfo = {
		title: 'Product Catalog',
		description: 'Browse our available services and products',
		contactCta: 'Contact us for more information',
		showPrices: false
	};

	/**
	 * Layout style: 'grid' or 'list'
	 * @type {'grid' | 'list'}
	 */
	export let layout = 'grid';

	/**
	 * Flag to show detailed information when available
	 * @type {boolean}
	 */
	// svelte-ignore export_let_unused
	// Element is used in GenericServicePage.svelte
	export let showDetails: boolean = false;

	/**
	 * Currently expanded item index
	 * @type {number | null}
	 */
	let expandedIndex: number | null = null;

	/**
	 * Whether the modal view is open
	 * @type {boolean}
	 */
	let isModalOpen = false;

	/**
	 * Currently viewed item in the modal
	 * @type {number | null}
	 */
	let modalItemIndex: number | null = null;

	/**
	 * Available categories extracted from items
	 * @type {string[]}
	 */
	let availableCategories: string[] = [];

	/**
	 * Currently selected category filter
	 * @type {string | null}
	 */
	let selectedCategory: string | null = null;

	/**
	 * Filtered items based on category selection
	 * @type {Array}
	 */
	$: filteredItems = selectedCategory
		? items.filter(item => item.category === selectedCategory)
		: items;

	/**
	 * Extract unique categories from items
	 */
	$: {
		const categories = new Set<string>();
		items.forEach(item => {
			if (item.category) {
				categories.add(item.category);
			}
		});
		availableCategories = Array.from(categories).sort();
	}

	/**
	 * Toggle expanded state of an item
	 * @param {number} index - The index of the item to toggle
	 */
	function toggleExpand(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
	}

	/**
	 * Open the modal for an item
	 * @param {number} index - The index of the item to display
	 */
	function openModal(index: number) {
		modalItemIndex = index;
		isModalOpen = true;
		document.body.classList.add('overflow-hidden');
	}

	/**
	 * Close the modal
	 */
	function closeModal() {
		isModalOpen = false;
		modalItemIndex = null;
		document.body.classList.remove('overflow-hidden');
	}

	/**
	 * Set the category filter
	 * @param {string | null} category - The category to filter by
	 */
	function setCategory(category: string | null) {
		selectedCategory = category;
	}
	
	/**
	 * Handle modal content click to prevent closing
	 * @param {Event} event - The click event
	 */
	function handleModalContentClick(event: Event) {
		event.stopPropagation();
	}
</script>

<div class="service-catalog pt-4">
	<!-- Category header -->
	<div class="mb-8 text-center">
		<h1 class="mb-4 text-3xl font-bold dark:text-slate-50">{categoryInfo.title}</h1>
		<p class="mx-auto max-w-3xl text-lg dark:text-slate-50">{categoryInfo.description}</p>
	</div>

	<!-- Category filters -->
	{#if availableCategories.length > 0}
		<div class="mb-6">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<button
					class="rounded-full px-4 py-2 text-sm font-medium transition-colors {selectedCategory === null
						? 'bg-red-600 text-white'
						: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600'}"
					on:click={() => setCategory(null)}
				>
					All
				</button>
				{#each availableCategories as category}
					<button
						class="rounded-full px-4 py-2 text-sm font-medium transition-colors {selectedCategory === category
							? 'bg-red-600 text-white'
							: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600'}"
						on:click={() => setCategory(category)}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Layout Toggle -->
	<div class="mb-4 hidden sm:flex justify-end">
		<div class="inline-flex rounded-lg bg-gray-200 dark:bg-zinc-700">
			<button
				class="rounded-lg px-4 py-2 transition-colors duration-200 dark:text-gray-500 {layout === 'grid'
					? 'bg-white shadow-sm dark:bg-zinc-900 dark:text-slate-50'
					: ''}"
				on:click={() => (layout = 'grid')}
				aria-label="Switch to grid layout"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
					/>
				</svg>
			</button>
			<button
				class="rounded-lg px-4 py-2 transition-colors duration-200 dark:text-gray-500 {layout === 'list'
					? 'bg-white shadow-sm dark:bg-zinc-900 dark:text-slate-50'
					: ''}"
				on:click={() => (layout = 'list')}
				aria-label="Switch to list layout"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>

	{#if filteredItems.length === 0}
		<div class="py-12 text-center">
			<p class="text-xl text-gray-500 dark:text-slate-300">
				{items.length === 0 ? 'Loading service information...' : 'No items found for the selected category.'}
			</p>
		</div>
	{:else}
		<!-- Grid Layout -->
		{#if layout === 'grid'}
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{#each filteredItems as item, index}
					<button
						class="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-zinc-900/70 text-left"
						on:click={() => openModal(items.indexOf(item))}
						type="button"
						aria-label="View details for {item.name}"
					>
						<div class="h-40 overflow-hidden">
							<img
								src={item.imageUrl}
								alt={item.imageAlt || item.name}
								class="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-[1.05]"
							/>
						</div>
						<div class="p-4">
							<h2 class="mb-2 text-lg font-semibold dark:text-slate-50">{item.name}</h2>

							{#if item.category}
								<div class="mb-2">
									<span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700 dark:bg-zinc-700 dark:text-slate-300">
										{item.category}
									</span>
								</div>
							{/if}

							<p class="mb-3 text-sm text-gray-700 dark:text-slate-300">
								{#if item.description.length > 80}
									{item.description.substring(0, 80)}...
								{:else}
									{item.description}
								{/if}
							</p>

							{#if categoryInfo.showPrices && item.price}
								<p class="font-mono text-base font-bold text-gray-800 dark:text-slate-300">{item.price}</p>
							{/if}
						</div>
					</button>
				{/each}
			</div>

			<!-- List Layout -->
		{:else}
			<div class="space-y-6">
				{#each filteredItems as item, index}
					<button
						class="group cursor-pointer relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg sm:flex dark:bg-zinc-900/70 w-full text-left"
						on:click={() => openModal(items.indexOf(item))}
						type="button"
						aria-label="View details for {item.name}"
					>
						<div class="overflow-hidden sm:w-1/3 lg:w-1/4">
							<img
								src={item.imageUrl}
								alt={item.imageAlt || item.name}
								class="h-48 w-full transform object-cover transition-transform duration-300 group-hover:scale-[1.05] sm:h-full"
							/>
						</div>
						<div class="p-5 sm:w-2/3 lg:w-3/4">
							<div class="flex flex-wrap items-center justify-between gap-2">
								<h2 class="text-xl font-semibold dark:text-slate-50">{item.name}</h2>
								
								{#if item.category}
									<span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700 dark:bg-zinc-700 dark:text-slate-300">
										{item.category}
									</span>
								{/if}
							</div>
							
							<p class="my-3 text-gray-700 dark:text-slate-300">{item.description}</p>

							{#if categoryInfo.showPrices && item.price}
								<p class="font-mono text-lg font-bold text-gray-800 dark:text-slate-300">{item.price}</p>
							{/if}
						</div>
					</button>
				{/each}
			</div>
		{/if}
	{/if}

	<!-- Contact CTA -->
	{#if categoryInfo.contactCta}
		<div class="mt-12 mb-6 text-center">
			<a
				href="/contact"
				class="inline-block shadow-lg rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
			>
				{categoryInfo.contactCta}
			</a>
		</div>
	{/if}

	<!-- Modal View -->
	{#if isModalOpen && modalItemIndex !== null && items[modalItemIndex]}
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
					<div class="lg:w-1/2">
						<div class="relative h-64 lg:h-full">
							<img
								src={items[modalItemIndex].imageUrl}
								alt={items[modalItemIndex].imageAlt || items[modalItemIndex].name}
								class="h-full w-full object-cover"
							/>
						</div>
					</div>

					<div class="flex-1 p-6 lg:p-8">
						<div class="mb-4 flex flex-wrap items-center gap-3">
							<h2 id="modal-title" class="text-2xl font-bold dark:text-slate-50">
								{items[modalItemIndex].name}
							</h2>
							
							{#if items[modalItemIndex].category}
								<span class="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-zinc-700 dark:text-slate-300">
									{items[modalItemIndex].category}
								</span>
							{/if}
						</div>

						{#if categoryInfo.showPrices && items[modalItemIndex].price}
							<p class="mb-4 font-mono text-xl font-bold text-gray-800 dark:text-slate-300">
								{items[modalItemIndex].price}
							</p>
						{/if}

						<div class="mb-6 prose max-w-none dark:prose-invert">
							<p class="text-gray-700 dark:text-slate-300">
								{items[modalItemIndex].description}
							</p>
						</div>

						<div class="mt-6 border-t border-gray-200 pt-6 dark:border-zinc-700">
							<h3 class="mb-4 text-lg font-semibold dark:text-slate-50">Specifications</h3>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								{#if items[modalItemIndex].brand}
									<div>
										<span class="font-semibold dark:text-slate-50">Brand:</span>
										<span class="dark:text-slate-300">{items[modalItemIndex].brand}</span>
									</div>
								{/if}
								{#if items[modalItemIndex].model}
									<div>
										<span class="font-semibold dark:text-slate-50">Model:</span>
										<span class="dark:text-slate-300">{items[modalItemIndex].model}</span>
									</div>
								{/if}
								{#if items[modalItemIndex].availability}
									<div>
										<span class="font-semibold dark:text-slate-50">Availability:</span>
										<span class="dark:text-slate-300">{items[modalItemIndex].availability}</span>
									</div>
								{/if}
							</div>

							{#if items[modalItemIndex].features}
								<div class="mt-4">
									<span class="font-semibold dark:text-slate-50">Features:</span>
									<p class="dark:text-slate-300">{items[modalItemIndex].features}</p>
								</div>
							{/if}
							{#if items[modalItemIndex].details}
								<div class="mt-4">
									<span class="font-semibold dark:text-slate-50">Details:</span>
									<p class="dark:text-slate-300">{items[modalItemIndex].details}</p>
								</div>
							{/if}
						</div>

						{#if items[modalItemIndex].contactInfo}
							<div class="mt-6">
								<p class="font-semibold dark:text-slate-50">Contact Information:</p>
								<p class="dark:text-slate-300">{items[modalItemIndex].contactInfo}</p>
							</div>
						{/if}

						<div class="mt-8 flex justify-end">
							<a
								href="/contact"
								class="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
							>
								Inquire About This Item
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	/* Modal scrollbar styling */
	:global(body.overflow-hidden) {
		overflow: hidden;
	}
</style>