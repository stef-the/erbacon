<!-- src/components/services/ItemList.svelte -->
<script lang="ts">
	export let items: Array<{
		name: string;
		description: string;
		imageurl: string;
		imagealt?: string;
		price?: string;
		category?: string;
		[key: string]: any;
	}>;
	export let allItems: Array<any>; // Full item array for index reference
	export let showPrices: boolean;
	export let openModal: (index: number) => void;
	export let toTitleCase: (text: string) => string;
</script>

<div class="space-y-6">
	{#each items as item}
		<button
			class="group cursor-pointer relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg sm:flex dark:bg-zinc-900/70 w-full text-left h-24 sm:h-48"
			on:click={() => openModal(allItems.indexOf(item))}
			type="button"
			aria-label="View details for {item.name}"
		>
			<div class="overflow-hidden sm:w-1/3 lg:w-1/4">
				<img
					src={item.imageurl}
					alt={item.imagealt || item.name}
					class="h-48 w-full transform object-cover transition-transform duration-300 group-hover:scale-[1.05] sm:h-full"
				/>
			</div>
			<div class="p-5 sm:w-2/3 lg:w-3/4">
				<div class="flex flex-wrap items-center justify-between gap-2">
					<h2 class="text-xl font-semibold dark:text-slate-50">{item.name}</h2>

					{#if item.category}
						<span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700 dark:bg-zinc-700 dark:text-slate-300">
							{toTitleCase(item.category)}
						</span>
					{/if}
				</div>

				<p class="my-3 text-gray-700 dark:text-slate-300">{item.description}</p>

				{#if showPrices && item.price}
					<p class="font-mono text-lg font-bold text-gray-800 dark:text-slate-300">{item.price}</p>
				{/if}
			</div>
		</button>
	{/each}
</div>