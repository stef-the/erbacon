<!-- src/components/services/NoData.svelte — friendly empty-state shown when a page has no items -->
<script lang="ts">
	export let title = 'No Data Available';
	export let message = 'There are no items to display here yet. Please check back soon.';
</script>

<div class="flex flex-col items-center justify-center px-4 py-20 text-center">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="mb-4 h-14 w-14 text-gray-300 dark:text-zinc-600"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="1.5"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m0-10L4 7"
		/>
	</svg>
	<h3 class="mb-2 text-xl font-semibold text-gray-700 dark:text-slate-200">{title}</h3>
	<p class="max-w-md text-gray-500 dark:text-slate-400">{message}</p>
</div>
