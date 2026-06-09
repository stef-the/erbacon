<!-- src/components/services/CategoryHeader.svelte -->
<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="mb-8 text-center">
	<h1 class="mb-4 text-4xl font-bold dark:text-slate-50">{title}</h1>
	<p class="mx-auto max-w-3xl text-lg text-gray-600 dark:text-slate-300">{description}</p>
</div>
