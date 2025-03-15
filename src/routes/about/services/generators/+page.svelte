<!-- src/routes/services/generators/+page.svelte -->
<script lang="ts">
	import ServiceCatalog from '$lib/Services/ServiceCatalog.svelte';

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

	// Use list layout for generators
	let layout = 'list';

	// Show details (specs, features, etc.)
	let showDetails = true;

	// Set page-specific metadata
	const pageTitle = data.categoryInfo?.title || 'Generators and Power Solutions';
	const pageDescription =
		data.categoryInfo?.description ||
		'Reliable power solutions for any job site or emergency situation.';
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
		ERBCO provides dependable power solutions for construction sites, events, emergency situations,
		and more. Our generator range includes various power outputs to meet your specific requirements,
		from small portable units to large industrial generators.
	</p>
</div>

<ServiceCatalog items={data.products} categoryInfo={data.categoryInfo} {layout} {showDetails} />

<div class="mt-16 rounded-lg bg-gray-100 p-8">
	<h2 class="mb-4 text-2xl font-bold">Power Solutions for Every Need</h2>

	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Rental Options</h3>
			<p>
				Our flexible rental programs allow you to access the power you need for short-term projects
				or emergencies without the capital investment of purchasing equipment.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Sales & Service</h3>
			<p>
				For ongoing power needs, we offer sales of new and used generators backed by our
				comprehensive service and maintenance programs to keep your equipment running reliably.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Emergency Response</h3>
			<p>
				When you need power quickly, our emergency response team can deliver and set up generators
				to get you back up and running with minimal downtime.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-3 text-xl font-semibold">Custom Solutions</h3>
			<p>
				Our power experts can design custom solutions for unique power requirements, including load
				calculations, distribution planning, and backup systems.
			</p>
		</div>
	</div>
</div>

<div class="mt-12 text-center">
	<p class="mb-4 text-lg">Need help determining the right power solution for your application?</p>
	<a
		href="/contact"
		class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
	>
		Contact Our Power Specialists
	</a>
</div>
