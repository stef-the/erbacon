<!-- src/lib/Services/GenericServicePage.svelte -->
<script lang="ts">
	import ServiceCatalog from '$lib/Services/ServiceCatalog.svelte';
	import type { ServiceDataItem } from '$lib/Services/ServiceData';

	/**
	 * @type {{
	 *   items: ServiceDataItem[],
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

	/**
	 * @type {string}
	 */
	export let introText = '';

	/**
	 * @type {{title: string, description: string}[]}
	 */
	export let features: { title: string, description: string }[] = [];

	/**
	 * @type {string}
	 */
	export let ctaText = "Don't see what you're looking for? We have access to many more options.";

	/**
	 * @type {string}
	 */
	export let ctaButtonText = 'Contact Us Today';

	/**
	 * @type {string}
	 */
	export let featuresTitle = 'Why Choose ERBCO?';

	// Default to grid layout
	let layout = 'grid';
	// Show details (specs, features, etc.)
	let showDetails = true;
	// Set page-specific metadata
	const pageTitle = data.categoryInfo?.title || 'Products & Services';
	const pageDescription =
		data.categoryInfo?.description || 'Browse our high-quality products and services.';
</script>

<svelte:head>
	<title>{pageTitle} | Edward R. Bacon Company</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

{#if data.error}
	<div
		class="relative mb-6 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700 dark:border-red-500 dark:bg-red-800 dark:text-red-100"
		role="alert"
	>
		<strong class="font-bold">Error loading data:</strong>
		<span class="block sm:inline">{data.error}</span>
	</div>
{/if}

<div class="prose lg:prose-lg mx-auto mb-8">
	<p class="lead text-lg dark:text-slate-50">
		{introText}
	</p>
</div>

<ServiceCatalog items={data.items} categoryInfo={data.categoryInfo} {layout} {showDetails} />

<div class="mt-16 rounded-lg bg-gray-100 p-8 dark:bg-zinc-900/40 dark:text-slate-50">
	<h2 class="mb-4 text-2xl font-bold">{featuresTitle}</h2>
	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
		{#each features as feature}
			<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900/70">
				<h3 class="mb-3 text-xl font-semibold">{feature.title}</h3>
				<p>{feature.description}</p>
			</div>
		{/each}
	</div>
</div>

<div class="mt-12 text-center dark:text-slate-50">
	<p class="mb-4 text-lg">{ctaText}</p>
	<a
		href="/contact"
		class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
	>
		{ctaButtonText}
	</a>
</div>
