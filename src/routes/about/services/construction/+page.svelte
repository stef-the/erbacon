<!-- src/routes/services/construction/+page.svelte -->
<script lang="ts">
	import ServiceCatalog from '$lib/Services/ServiceCatalog.svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {{
	 *   products: Array,
	 *   categoryInfo: {
	 *     title: string,
	 *     description: string,
	 *     contactCta: string,
	 *     showPrices: boolean
	 *   },
	 *   error?: string
	 * }}
	 */
	export let data;

	// Default to grid layout
	let layout = 'grid';

	// Show details (specs, features, etc.)
	let showDetails = true;

	// Set page-specific metadata
	const pageTitle = data.categoryInfo?.title || 'Construction Products';
	const pageDescription =
		data.categoryInfo?.description ||
		'Browse our high-quality construction equipment offering reliability and performance for professionals.';
</script>

<svelte:head>
	<title>{pageTitle} | Edward R. Bacon Company</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

{#if data.error}
	<div
		class="relative mb-6 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
		role="alert"
	>
		<strong class="font-bold">Error loading data:</strong>
		<span class="block sm:inline">{data.error}</span>
	</div>
{/if}

<div class="prose lg:prose-lg mx-auto mb-8">
	<p class="lead text-lg">
		At Edward R. Bacon Company, we offer a comprehensive range of construction products to meet the
		needs of projects of all sizes. Our equipment is selected for reliability, durability, and
		performance in demanding environments.
	</p>
</div>

<ServiceCatalog items={data.products} categoryInfo={data.categoryInfo} {layout} {showDetails} />

<div class="mt-16 rounded-lg bg-gray-100 p-8">
	<h2 class="mb-4 text-2xl font-bold">Why Choose ERBCO Construction Products?</h2>

	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Quality Equipment</h3>
			<p>
				We partner with leading manufacturers to offer only the highest quality construction
				equipment that stands up to the toughest job sites.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Expert Support</h3>
			<p>
				Our knowledgeable team can help you select the right equipment for your specific needs and
				provide ongoing support throughout your project.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Complete Inventory</h3>
			<p>
				With our extensive inventory of equipment and parts, you'll find everything you need to keep
				your project moving forward efficiently.
			</p>
		</div>
	</div>
</div>

<div class="mt-12 text-center">
	<p class="mb-4 text-lg">
		Don't see what you're looking for? We have access to many more products.
	</p>
	<a
		href="/contact"
		class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
	>
		Contact Us Today
	</a>
</div>
