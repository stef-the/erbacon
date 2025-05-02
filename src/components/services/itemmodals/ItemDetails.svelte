<!-- src/components/services/itemmodals/ItemDetails.svelte -->
<script lang="ts">
	import type { ItemData } from './types';

	export let item: ItemData;
	export let showPrices: boolean;
	export let toTitleCase: (text: string) => string;
	export let togglePdfViewer: () => void;
	export let showPdfViewer: boolean;
</script>

<div class="flex-1 p-6 lg:p-8 overflow-y-auto max-h-[58vh] flex flex-col">
	<div class="flex-grow">
		<div class="mb-4 flex flex-wrap items-center gap-3">
			<!-- Icon, itle and category -->
			<img src="/icons/RED_LOGO_fix.bmp" alt="Logo" class="h-12 rounded">
			<h2 id="modal-title" class="text-2xl font-bold dark:text-slate-50">
				{item.name}
			</h2>

			{#if item.category}
				<span class="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-zinc-700 dark:text-slate-300 translate-y-[2px] mr-2">
					{toTitleCase(item.category)}
				</span>
			{/if}
		</div>

		{#if showPrices && item.price}
			<p class="mb-4 font-mono text-xl font-bold text-gray-800 dark:text-slate-300">
				{item.price}
			</p>
		{/if}

		<div class="mb-6 prose max-w-none dark:prose-invert">
			<p class="text-gray-700 dark:text-slate-300">
				{item.description}
			</p>
		</div>

		<div class="mt-6 border-t border-gray-200 pt-6 dark:border-zinc-700">
			<h3 class="mb-4 text-lg font-semibold dark:text-slate-50">Specifications</h3>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				{#if item.brand}
					<div>
						<span class="font-semibold dark:text-slate-50">Brand:</span>
						<span class="dark:text-slate-300">{item.brand}</span>
					</div>
				{/if}
				{#if item.model}
					<div>
						<span class="font-semibold dark:text-slate-50">Model:</span>
						<span class="dark:text-slate-300">{item.model}</span>
					</div>
				{/if}
				{#if item.availability}
					<div>
						<span class="font-semibold dark:text-slate-50">Availability:</span>
						<span class="dark:text-slate-300">{item.availability}</span>
					</div>
				{/if}
			</div>

			{#if item.features}
				<div class="mt-4">
					<span class="font-semibold dark:text-slate-50">Features:</span>
					<p class="dark:text-slate-300">{item.features}</p>
				</div>
			{/if}
			{#if item.details}
				<div class="mt-4">
					<span class="font-semibold dark:text-slate-50">Details:</span>
					<p class="dark:text-slate-300">{item.details}</p>
				</div>
			{/if}
		</div>

		{#if item.contactInfo}
			<div class="mt-6">
				<p class="font-semibold dark:text-slate-50">Contact Information:</p>
				<p class="dark:text-slate-300">{item.contactInfo}</p>
			</div>
		{/if}
	</div>

	<div class="mt-6 pt-4 border-t border-gray-200 dark:border-zinc-700 flex flex-wrap items-center justify-end gap-4">
		<a
			href="/contact"
			class="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
		>
			Inquire About This Item
		</a>
		
		{#if item.pdf}
			<button 
				on:click={togglePdfViewer}
				class="rounded-lg bg-gray-200 px-6 py-2 font-semibold text-gray-800 transition-colors hover:bg-gray-300 dark:bg-zinc-700 dark:text-slate-100 dark:hover:bg-zinc-600"
			>
				{showPdfViewer ? 'Show Image' : 'View Documentation'}
			</button>
		{/if}
	</div>
</div>