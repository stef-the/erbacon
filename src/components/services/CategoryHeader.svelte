<!-- src/components/services/CategoryHeader.svelte -->
<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="mb-8 text-center">
	<h1 class="mb-4 text-3xl font-bold dark:text-slate-50">{title}</h1>
	<p class="mx-auto max-w-3xl text-lg dark:text-slate-50">{description}</p>
</div>