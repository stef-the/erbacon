<!-- src/routes/products/construction/+page.svelte — New Equipment (categorized lineup) -->
<script lang="ts">
	import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '$lib/constants';

	// Partial list of equipment categories ERBCO carries (mirrors erbacon.com).
	const categories = [
		'Air Compressors',
		'Air Tools',
		'Arrow / Message Boards',
		'Asphalt Crack Melters',
		'Asphalt Rollers',
		'Burm / Curb Machines',
		'Concrete Cut-Off Saws',
		'Concrete Diamond Blades',
		'Concrete Mixers (Conc / Mortar)',
		'Cranes / Mini',
		'Dewatering Pumps',
		'Drilling Equipment',
		'Dustless Blasting',
		'Emulsion Sprayers',
		'Excavators / Mini',
		'Hydraulic Breakers',
		'Hydraulic Tools',
		'Light Towers',
		'Road Brooms',
		'Sandblast Equipment',
		'Sand Spreaders',
		'Sealcoat Machines',
		'Skid Steer Loaders',
		'Soda Blasting',
		'Steam Cleaners',
		'Street Sweepers',
		'Tailgate Spreaders'
	];
</script>

<svelte:head>
	<title>New Equipment | Edward R. Bacon Company</title>
	<meta
		name="description"
		content="New construction equipment from the 50+ manufacturer lines Edward R. Bacon Company represents — air compressors, rollers, light towers, pumps, sweepers, and much more. Don't see it? We'll source it."
	/>
	<meta property="og:title" content="New Equipment | Edward R. Bacon Company" />
	<meta
		property="og:description"
		content="A partial list of the new construction equipment ERBCO carries and can source."
	/>
</svelte:head>

<div class="mx-auto max-w-5xl px-4">
	<!-- Heading + gold underline -->
	<h1
		class="text-center text-4xl font-bold tracking-wide text-gray-400 sm:text-5xl lg:text-6xl dark:text-zinc-500"
	>
		NEW EQUIPMENT
	</h1>
	<div class="mx-auto mt-3 mb-8 h-1.5 w-56 max-w-full rounded bg-amber-400"></div>

	<!-- Intro -->
	<p class="mx-auto max-w-3xl text-gray-600 dark:text-slate-300">
		This list is just a partial list of what we sell. We network with many different manufacturers
		of construction equipment, so if you don't see what you are looking for here,
		<a href={COMPANY_PHONE_TEL} class="font-semibold text-red-600 hover:underline dark:text-red-400"
			>call us</a
		> and we can source it for you.
	</p>
	<p class="mt-4 text-lg font-bold tracking-wide text-gray-800 dark:text-slate-100">
		GET IT FROM BACON
	</p>

	<!-- Category list: flows down each column like the source site -->
	<ul class="mt-8 columns-1 gap-8 sm:columns-2 lg:columns-3">
		{#each categories as category}
			<li class="mb-3 flex break-inside-avoid items-start gap-3">
				<span class="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-[1px] bg-amber-400"></span>
				<span class="font-medium tracking-wide text-gray-700 uppercase dark:text-slate-300"
					>{category}</span
				>
			</li>
		{/each}
	</ul>

	<!-- Contact CTA -->
	<div class="mt-12 mb-12 text-center dark:text-slate-50">
		<p class="mb-4 text-lg">Don't see what you need? We represent 50+ lines and can source more.</p>
		<a
			href={COMPANY_PHONE_TEL}
			class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
		>
			Call {COMPANY_PHONE}
		</a>
	</div>
</div>
