<!-- src/components/services/CategoryFilters.svelte -->
<script lang="ts">
	export let availableCategories: string[];
	export let selectedCategory: string | null;
	export let setCategory: (category: string | null) => void;
	export let toTitleCase: (text: string) => string;
</script>

<div class="mb-6">
	<div class="flex flex-wrap items-center justify-center gap-2">
		<button
			class="rounded-full px-4 py-2 text-sm font-medium transition-colors {selectedCategory === null
				? 'bg-red-600 text-white'
				: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600'}"
			on:click={() => setCategory(null)}
		>
			All
		</button>
		{#each availableCategories as category}
			<button
				class="rounded-full px-4 py-2 text-sm font-medium transition-colors {selectedCategory === category
					? 'bg-red-600 text-white'
					: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-600'}"
				on:click={() => setCategory(category)}
			>
				{toTitleCase(category)}
			</button>
		{/each}
	</div>
</div>