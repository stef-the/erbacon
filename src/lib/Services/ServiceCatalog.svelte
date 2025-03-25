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
	 *   contactInfo?: string
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
		title: 'Service Catalog',
		description: 'Browse our available services and products',
		contactCta: 'Contact us for more information',
		showPrices: true
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
	export let showDetails = false;

	/**
	 * Currently expanded item index
	 * @type {number | null}
	 */
	let expandedIndex: number | null = null;

	/**
	 * Toggle expanded state of an item
	 * @param {number} index - The index of the item to toggle
	 */
	function toggleExpand(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
	}
</script>

<div class="service-catalog pt-4">
	<!-- Category header -->
	<div class="mb-8 text-center">
		<h1 class="mb-4 text-3xl font-bold dark:text-slate-50">{categoryInfo.title}</h1>
		<p class="mx-auto max-w-3xl text-lg dark:text-slate-50">{categoryInfo.description}</p>
	</div>

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

	{#if items.length === 0}
		<div class="py-12 text-center">
			<p class="text-xl text-gray-500 dark:text-slate-300">Loading service information...</p>
		</div>
	{:else}
		<!-- Grid Layout -->
		{#if layout === 'grid'}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each items as item, index}
					<div
						class="group overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-zinc-900/70"
					>
						<div class="h-48 overflow-hidden">
							<img
								src={item.imageUrl}
								alt={item.imageAlt || item.name}
								class="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-[1.05]"
							/>
						</div>
						<div class="p-5">
							<h2 class="mb-2 text-xl font-semibold dark:text-slate-50">{item.name}</h2>

							<p class="mb-4 text-gray-700 dark:text-slate-300">
								{#if item.description.length > 120}
									{item.description.substring(0, 120)}...
								{:else}
									{item.description}
								{/if}
							</p>

							{#if categoryInfo.showPrices && item.price}
								<p class="font-mono text-lg font-bold text-gray-800 dark:text-slate-300">{item.price}</p>
							{/if}

							{#if showDetails && (item.details || item.features || item.brand || item.model)}
								<button
									class="mt-3 flex items-center font-medium text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
									on:click={() => toggleExpand(index)}
								>
									{expandedIndex === index ? 'Show less' : 'Show details'}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="ml-1 h-5 w-5 transition-transform duration-200 {expandedIndex === index
											? 'rotate-180'
											: ''}"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>

								{#if expandedIndex === index}
									<div class="mt-3 border-t border-gray-200 pt-3 dark:border-zinc-700 dark:text-slate-400">
										{#if item.brand}
											<p class="mb-2"><span class="font-semibold">Brand:</span> {item.brand}</p>
										{/if}
										{#if item.model}
											<p class="mb-2"><span class="font-semibold">Model:</span> {item.model}</p>
										{/if}
										{#if item.features}
											<p class="mb-2">
												<span class="font-semibold">Features:</span>
												{item.features}
											</p>
										{/if}
										{#if item.details}
											<p class="mb-2">{item.details}</p>
										{/if}
										{#if item.availability}
											<p class="mb-2">
												<span class="font-semibold">Availability:</span>
												{item.availability}
											</p>
										{/if}
									</div>
								{/if}
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<!-- List Layout -->
		{:else}
			<div class="space-y-6">
				{#each items as item, index}
					<div
						class="group relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg sm:flex dark:bg-zinc-900/70"
					>
						<div class="overflow-hidden sm:w-1/3 lg:w-1/4">
							<img
								src={item.imageUrl}
								alt={item.imageAlt || item.name}
								class="h-48 w-full transform object-cover transition-transform duration-300 group-hover:scale-[1.05] sm:h-full"
							/>
						</div>
						<div class="p-5 sm:w-2/3 lg:w-3/4">
							<h2 class="mb-2 text-xl font-semibold dark:text-slate-50">{item.name}</h2>
							<p class="mb-4 text-gray-700 dark:text-slate-300">{item.description}</p>

							{#if categoryInfo.showPrices && item.price}
								<p class="font-mono text-lg font-bold text-gray-800 dark:text-slate-300">{item.price}</p>
							{/if}

							{#if showDetails && (item.details || item.features || item.brand || item.model)}
								<button
									class="mt-3 flex items-center font-medium text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
									on:click={() => toggleExpand(index)}
								>
									{expandedIndex === index ? 'Show less' : 'Show details'}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="ml-1 h-5 w-5 transition-transform duration-200 {expandedIndex === index
											? 'rotate-180'
											: ''}"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>

								{#if expandedIndex === index}
									<div class="mt-3 border-t border-gray-200 pt-3 dark:border-zinc-700 dark:text-slate-400">
										<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
											{#if item.brand}
												<p><span class="font-semibold">Brand:</span> {item.brand}</p>
											{/if}
											{#if item.model}
												<p><span class="font-semibold">Model:</span> {item.model}</p>
											{/if}
											{#if item.availability}
												<p><span class="font-semibold">Availability:</span> {item.availability}</p>
											{/if}
										</div>
										{#if item.features}
											<p class="mt-2">
												<span class="font-semibold">Features:</span>
												{item.features}
											</p>
										{/if}
										{#if item.details}
											<p class="mt-2">{item.details}</p>
										{/if}
									</div>
								{/if}
							{/if}
						</div>
					</div>
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
</div>

<style>
	/* Add component-specific styles here */
</style>
