<!-- src/components/services/ContactCta.svelte -->
<script lang="ts">
	export let cta: string;
</script>

<div class="mt-12 mb-6 text-center">
	<a
		href="tel:+19163838250"
		class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white shadow-lg transition-colors duration-300 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
	>
		{cta}
	</a>
</div>
