<!-- src/components/services/ItemGrid.svelte -->
<script lang="ts">
	export let items: Array<{
		name: string;
		description: string;
		imageurl?: string;
		imagealt?: string;
		price?: string;
		category?: string;
		[key: string]: any;
	}>;
	export let allItems: Array<any>; // Full item array for index reference
	export let showPrices: boolean;
	export let openModal: (index: number) => void;
	export let toTitleCase: (text: string) => string;
	console.log(items)
</script>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each items as item}
		<button
			class="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-zinc-900/70 text-left"
			on:click={() => openModal(allItems.indexOf(item))}
			type="button"
			aria-label="View details for {item.name}"
		>
			<div class="h-40 overflow-hidden">
				{#if item.imageurl === undefined || item.imageurl === ''}
					<div class="h-full w-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center"></div>
				{:else}
					<img
						src={item.imageurl}
						alt={item.imagealt || item.name}
						class="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-[1.05]"
					/>
				{/if}
			</div>
			<div class="p-4">
				<h2 class="mb-2 text-lg font-semibold dark:text-slate-50">{item.name}</h2>

				{#if item.category}
					<div class="mb-2">
						<span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700 dark:bg-zinc-700 dark:text-slate-300">
							{toTitleCase(item.category)}
						</span>
					</div>
				{/if}

				<p class="mb-3 text-sm text-gray-700 dark:text-slate-300">
					{#if item.description.length > 80}
						{item.description.substring(0, 80)}...
					{:else}
						{item.description}
					{/if}
				</p>

				{#if showPrices && item.price}
					<p class="font-mono text-base font-bold text-gray-800 dark:text-slate-300">{item.price}</p>
				{/if}
			</div>
		</button>
	{/each}
</div>