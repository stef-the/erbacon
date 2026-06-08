<!-- src/routes/services/generators/+page.svelte — on-site viewer for the generator brochure -->
<script lang="ts">
	import { COMPANY_PHONE_TEL } from '$lib/constants';

	const pdf = '/services/generator-services.pdf';
</script>

<svelte:head>
	<title>Generators & Power Services | Edward R. Bacon Company</title>
	<meta
		name="description"
		content="Generator maintenance, standby power, load bank testing, and turnkey installations from Edward R. Bacon Company — a licensed California general engineering and C-10 electrical contractor."
	/>
	<meta property="og:title" content="Generators & Power Services | Edward R. Bacon Company" />
	<meta
		property="og:description"
		content="Generator maintenance, standby power, and turnkey installs — licensed C-10 & general engineering contractor."
	/>
</svelte:head>

<div class="mx-auto max-w-5xl">
	<div class="prose lg:prose-lg mx-auto mb-6">
		<h1 class="text-center text-4xl font-bold dark:text-slate-50">
			Generators &amp; Power Services
		</h1>
		<p class="text-center text-lg text-gray-600 dark:text-slate-300">
			Maintenance, standby power, load bank testing, and turnkey installations — a licensed
			California general engineering &amp; C-10 electrical contractor.
		</p>
	</div>

	<!-- Action buttons -->
	<div class="mb-4 flex flex-wrap items-center justify-end gap-3">
		<a
			href={pdf}
			target="_blank"
			rel="noopener noreferrer"
			class="rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-300 dark:bg-zinc-700 dark:text-slate-100 dark:hover:bg-zinc-600"
		>
			Open full screen
		</a>
		<a
			href={pdf}
			download
			class="rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-300 dark:bg-zinc-700 dark:text-slate-100 dark:hover:bg-zinc-600"
		>
			Download PDF
		</a>
	</div>

	<!-- Embedded PDF viewer -->
	<div
		class="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-md dark:border-zinc-700 dark:bg-zinc-800"
	>
		<iframe
			src={pdf}
			title="Generator & Power Services brochure"
			class="h-[80vh] min-h-[480px] w-full"
		></iframe>
	</div>

	<!-- Mobile / unsupported-viewer fallback -->
	<p class="mt-3 text-center text-sm text-gray-500 dark:text-slate-400">
		Trouble viewing the brochure?
		<a href={pdf} target="_blank" rel="noopener noreferrer" class="text-red-600 hover:underline">
			Open it in a new tab
		</a>.
	</p>

	<div class="mt-10 mb-12 text-center dark:text-slate-50">
		<p class="mx-auto mb-6 max-w-2xl text-lg">
			Need generator service, a rental, or a new install? Our own technicians handle it all.
		</p>
		<a
			href={COMPANY_PHONE_TEL}
			class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
		>
			Contact Us Today
		</a>
	</div>
</div>
