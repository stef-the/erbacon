<!-- src/routes/services/project-site/+page.svelte — Site Services: Fence Rental -->
<script lang="ts">
	import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '$lib/constants';

	const services = [
		{
			title: 'Stanchion Mounted Fence Panels',
			description:
				'Fast, flexible deployment for any job site. Easy to reposition as your project evolves.'
		},
		{
			title: 'Post Driven Panels & Chain Link',
			description:
				'Solid, durable perimeter fencing for sites that need long-term or high-security setups.'
		},
		{
			title: 'Sandbags — 40 lb. (Caltrans Approved)',
			description:
				'Double-stacked ballast sandbags to anchor your fence panels against wind and impact.'
		},
		{
			title: 'Privacy Screening',
			description:
				'Custom-fit privacy screen panels to shield your site from the street or neighboring properties.'
		},
		{
			title: 'Custom & Permanent Fencing',
			description:
				'Decorative and permanent fence builds crafted to your exact specs — residential or commercial.'
		},
		{
			title: 'Generator Rentals & More',
			description:
				'We also supply job site generators and miscellaneous equipment — one call for everything you need.'
		}
	];
</script>

<svelte:head>
	<title>Site Services – Fence Rental | Edward R. Bacon Company</title>
	<meta
		name="description"
		content="Temporary fence rental and installation from Edward R. Bacon Company — stanchion and post-driven panels, chain link, privacy screening, sandbags, custom fencing, and generator rentals."
	/>
	<meta property="og:title" content="Site Services – Fence Rental | Edward R. Bacon Company" />
	<meta
		property="og:description"
		content="Temporary fence rental & installation — fast response, flexible rates, licensed & insured."
	/>
</svelte:head>

<!-- Hero: logo + tagline + phone -->
<section class="py-8">
	<div class="flex flex-wrap items-center justify-center gap-4">
		<img src="/icons/erbco-logo-red.png" alt="ERBCO" class="h-20 w-auto" />
		<img
			src="/icons/erbco-get-it-from-bacon.avif"
			alt="Get it from Bacon!"
			class="h-16 w-auto object-contain"
		/>
	</div>
	<div class="mt-4 text-center">
		<a
			href={COMPANY_PHONE_TEL}
			class="text-xl font-bold text-gray-800 transition duration-150 ease-in-out hover:text-red-500 hover:underline sm:text-3xl dark:text-slate-50"
		>
			{COMPANY_PHONE}
		</a>
	</div>
</section>

<div class="prose lg:prose-lg mx-auto mb-8">
	<h1 class="text-center text-4xl font-bold dark:text-slate-50">
		Temporary Fence Rental &amp; Installation
	</h1>
	<p class="text-center text-lg font-semibold text-gray-600 dark:text-slate-300">
		Fast Response · Flexible Rates · Licensed &amp; Insured
	</p>
	<p class="mt-4 text-lg dark:text-slate-50">
		We stock a large inventory of temporary fence panels ready to secure your project site. Whether
		you need a quick setup or a long-term perimeter solution, we've got you covered with affordable
		rates and dependable service.
	</p>
</div>

<div class="mx-auto max-w-6xl">
	<h2 class="mb-6 text-center text-2xl font-bold dark:text-slate-50">Our Services</h2>
	<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each services as service}
			<div class="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-md dark:bg-zinc-900/70">
				<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-slate-50">
					{service.title}
				</h3>
				<p class="text-gray-700 dark:text-slate-300">{service.description}</p>
			</div>
		{/each}
	</div>

	<div class="mb-12 text-center dark:text-slate-50">
		<p class="mx-auto mb-6 max-w-2xl text-lg">
			Need a fence on site quickly, or a custom perimeter solution? Call us and we'll get you set
			up.
		</p>
		<a
			href={COMPANY_PHONE_TEL}
			class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
		>
			Contact Us Today
		</a>
	</div>
</div>
