<!-- src/components/services/LayoutToggle.svelte -->
<script lang="ts">
	export let layout: 'grid' | 'list';
</script>

<div class="mb-4 hidden sm:flex justify-end">
	<div class="inline-flex rounded-lg bg-gray-200 dark:bg-zinc-700">
		<button
			class="rounded-lg px-4 py-2 transition-colors duration-200 dark:text-gray-500 {layout === 'grid'
				? 'bg-white shadow-sm dark:bg-zinc-900 dark:text-slate-50'
				: ''}"
			on:click={() => (layout = 'grid')}
			aria-label="Switch to grid layout"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
				/>
			</svg>
		</button>
		<button
			class="rounded-lg px-4 py-2 transition-colors duration-200 dark:text-gray-500 {layout === 'list'
				? 'bg-white shadow-sm dark:bg-zinc-900 dark:text-slate-50'
				: ''}"
			on:click={() => (layout = 'list')}
			aria-label="Switch to list layout"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</div>