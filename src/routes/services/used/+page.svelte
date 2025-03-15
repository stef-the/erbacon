<!-- src/routes/services/used/+page.svelte -->
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

	// Default to grid layout but allow toggle
	let layout = 'grid';

	// Show details (specs, features, etc.) for used equipment
	let showDetails = true;

	// Set page-specific metadata
	const pageTitle = data.categoryInfo?.title || 'Used Equipment';
	const pageDescription =
		data.categoryInfo?.description ||
		'Quality pre-owned construction equipment at competitive prices.';

	// Current inventory notification
	let inventoryNotice =
		'Our used equipment inventory changes frequently. Contact us to confirm current availability.';
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
		ERBCO offers a wide selection of quality pre-owned construction equipment at significant savings
		compared to new models. All our used equipment undergoes thorough inspection and servicing to
		ensure reliability and performance.
	</p>

	<div class="my-6 border-l-4 border-yellow-400 bg-yellow-50 p-4">
		<p class="text-yellow-700">
			<strong>Note:</strong>
			{inventoryNotice}
		</p>
	</div>
</div>

<ServiceCatalog items={data.products} categoryInfo={data.categoryInfo} {layout} {showDetails} />

<div class="mt-16 rounded-lg bg-gray-100 p-8">
	<h2 class="mb-4 text-2xl font-bold">Why Choose Used Equipment from ERBCO?</h2>

	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Quality Assurance</h3>
			<p>
				Every piece of used equipment undergoes a comprehensive inspection and necessary maintenance
				to ensure it meets our high standards.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Cost Savings</h3>
			<p>
				Our pre-owned equipment offers significant savings compared to new models while still
				delivering reliable performance for your projects.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Ongoing Support</h3>
			<p>
				When you purchase used equipment from ERBCO, you get our full parts and service support to
				keep your equipment running efficiently.
			</p>
		</div>
	</div>
</div>

<div class="mt-16">
	<h2 class="mb-6 text-2xl font-bold">Equipment Trade-Ins</h2>
	<p class="mb-4">
		Looking to upgrade your equipment? ERBCO also accepts trade-ins on qualifying equipment. Contact
		us to discuss your current equipment and explore trade-in options toward your next purchase.
	</p>

	<div class="mt-8 text-center">
		<a
			href="/contact"
			class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
		>
			Inquire About Current Inventory
		</a>
	</div>
</div>
