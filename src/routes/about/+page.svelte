<!-- src/routes/about/+page.svelte -->
<script lang="ts">
	const offerings = [
		{
			title: 'Equipment Sales',
			description:
				'We carry a wide range of construction equipment and work with customers to match the right machine to the job.'
		},
		{
			title: 'Service & Repair',
			description:
				'Our shop and field technicians handle routine maintenance through major repairs, keeping equipment productive.'
		},
		{
			title: 'Equipment Rental',
			description:
				'For customers who need a machine for a specific project, we offer flexible rental options without the overhead of ownership.'
		}
	];
</script>

<svelte:head>
	<title>About Us | Edward R. Bacon Company</title>
	<meta
		name="description"
		content="Edward R. Bacon Company (ERBCO) is a family-owned construction equipment business operating out of Sacramento since 1910 — selling, servicing, and renting equipment across California and the West Coast."
	/>
	<meta property="og:title" content="About Us | Edward R. Bacon Company" />
	<meta
		property="og:description"
		content="ERBCO is a family-owned construction equipment business in Sacramento since 1910 — sales, service, rental, and generator maintenance."
	/>
</svelte:head>

<section class="prose lg:prose-lg mx-auto mb-16 scroll-pt-28">
	<h1 class="mb-8 text-4xl font-bold dark:text-slate-300">About Edward R. Bacon Company</h1>

	<div class="my-6">
		<p class="mt-4 text-lg dark:text-slate-50">
			Edward R. Bacon Company — known as ERBCO — is a family-owned construction equipment business
			that has been operating out of Sacramento since 1910. That makes us one of the oldest
			continuously operating, family-owned equipment distributors on the West Coast. We sell,
			service, and rent construction equipment, and over the past 115 years we have built most of
			our business on repeat customers and word of mouth.
		</p>
	</div>
</section>

<section class="prose lg:prose-lg mx-auto mt-16 scroll-pt-28 text-slate-800 dark:text-slate-50">
	<h2 class="text-2xl font-bold dark:text-slate-50">What We Offer</h2>
	<p class="mt-2">
		We work with contractors, municipalities, and state agencies across California and the West
		Coast. Our core business covers three areas:
	</p>

	<div class="my-8 grid grid-cols-1 gap-6 2xl:grid-cols-3">
		{#each offerings as offering}
			<div class="rounded-lg bg-gray-100 p-6 shadow dark:bg-zinc-900/70">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-50">{offering.title}</h3>
				<p>{offering.description}</p>
			</div>
		{/each}
	</div>
</section>

<section class="prose lg:prose-lg mx-auto mt-16 scroll-pt-28 text-slate-800 dark:text-slate-50">
	<h2 class="text-2xl font-bold dark:text-slate-50">Generator Maintenance &amp; Standby Power</h2>
	<p class="mt-2">
		In recent years we have grown a construction services division focused on generator maintenance
		and turnkey standby power solutions, primarily for state and municipal customers. We currently
		maintain over 100 generators under multi-year service contracts. It has been a good fit for us —
		the work is steady, it deepens relationships with long-term customers, and it often leads to
		equipment sales and service work we otherwise would not see.
	</p>
</section>

<section
	class="prose lg:prose-lg mx-auto mt-16 mb-16 scroll-pt-28 text-slate-800 dark:text-slate-50"
>
	<h2 class="text-2xl font-bold dark:text-slate-50">Why Customers Work With Us</h2>
	<p class="mt-2">
		We are not a big box equipment dealer. Our staff knows the industry, knows the equipment, and
		has usually seen the problem a customer is calling about before. When someone needs a piece of
		equipment to do a specific job, we focus on getting them the right solution — not the most
		expensive one. That approach has kept customers coming back for generations, and it is the same
		approach we bring to every new customer we work with.
	</p>
</section>

<style>
	:global(.prose) {
		max-width: 1200px;
	}
</style>
