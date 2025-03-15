<!-- src/routes/services/fencing/+page.svelte -->
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

	// Use list layout for fencing
	let layout = 'list';

	// Show details
	let showDetails = true;

	// Set page-specific metadata
	const pageTitle = data.categoryInfo?.title || 'Temporary Fencing';
	const pageDescription =
		data.categoryInfo?.description ||
		'Secure your site with our durable temporary fencing solutions.';
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
		ERBCO offers comprehensive temporary fencing solutions to secure construction sites, events, and
		other areas requiring temporary security and access control. Our fencing options are durable,
		easy to install, and available for short or long-term rental.
	</p>
</div>

<ServiceCatalog items={data.products} categoryInfo={data.categoryInfo} {layout} {showDetails} />

<div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
	<div class="rounded-lg bg-gray-100 p-8">
		<h2 class="mb-4 text-2xl font-bold">Rental Options</h2>
		<p class="mb-4">
			Our temporary fencing is available for both short and long-term rental periods to accommodate
			projects of any duration. We offer flexible terms with competitive pricing.
		</p>
		<ul class="list-disc space-y-2 pl-5">
			<li>Daily, weekly, and monthly rental rates</li>
			<li>Delivery and pickup services available</li>
			<li>Professional installation upon request</li>
			<li>Discounts for long-term rentals</li>
		</ul>
	</div>

	<div class="rounded-lg bg-gray-100 p-8">
		<h2 class="mb-4 text-2xl font-bold">Custom Solutions</h2>
		<p class="mb-4">
			We understand that every project has unique security needs. Our team can design custom fencing
			solutions to address specific requirements for your site.
		</p>
		<ul class="list-disc space-y-2 pl-5">
			<li>Site security assessments</li>
			<li>Custom layout planning</li>
			<li>Integration with access control systems</li>
			<li>Specialized gates and entry points</li>
		</ul>
	</div>
</div>

<div class="mt-16 rounded-lg bg-red-600 p-8 text-white">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-4 text-2xl font-bold">Need Temporary Fencing for Your Project?</h2>
		<p class="mb-6">
			Contact our team today to discuss your temporary fencing needs. We can provide a custom quote
			based on your specific requirements and project timeline.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="inline-block rounded-lg bg-white px-8 py-3 font-bold text-red-600 transition-colors duration-300 hover:bg-gray-100"
			>
				Request a Quote
			</a>
			<a
				href="tel:+19163838250"
				class="inline-block rounded-lg bg-red-700 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-800"
			>
				Call Us: (916) 383-8250
			</a>
		</div>
	</div>
</div>

<div class="mt-16">
	<h2 class="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>

	<div class="space-y-4">
		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-2 text-xl font-semibold">
				How quickly can you deliver and install temporary fencing?
			</h3>
			<p>
				In most cases, we can deliver and install temporary fencing within 24-48 hours of order
				confirmation, depending on project size and location.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-2 text-xl font-semibold">What is the minimum rental period?</h3>
			<p>
				Our standard minimum rental period is one week, but we can accommodate shorter terms for
				special circumstances.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-2 text-xl font-semibold">Do you offer installation services?</h3>
			<p>
				Yes, we provide professional installation services to ensure your fencing is properly
				secured and meets your site requirements.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-2 text-xl font-semibold">What types of sites do you service?</h3>
			<p>
				We provide temporary fencing for construction sites, events, schools, industrial locations,
				residential properties, and more throughout the West Coast region.
			</p>
		</div>
	</div>
</div>
