<!-- src/routes/+page.svelte -->
<script lang="ts">
</script>

<svelte:head>
	<title>Edward R. Bacon Company | Construction Equipment Since 1910</title>
	<meta
		name="description"
		content="Edward R. Bacon Company has been serving the California construction industry since 1910. Quality construction equipment, truck equipment, parts, and project site services."
	/>
	<meta property="og:title" content="Edward R. Bacon Company | Construction Equipment Since 1910" />
	<meta property="og:description" content="Serving the California construction industry since 1910. Quality construction equipment, truck equipment, parts, and project site services." />
</svelte:head>

<!-- Welcome section below the cards:
     - Same responsive prose width and scroll padding as above
     - Vertical margin spacing
     - Dark mode text color -->
<section
	class="prose lg:prose-lg mx-auto mt-6 mb-24 scroll-pt-28 text-slate-800 dark:text-slate-50"
>
	<!-- Section heading with larger text and dark mode styling -->
	<h2 class="text-center text-6xl font-bold dark:text-slate-50">Welcome to our Website</h2>

	<!-- Content wrapper with vertical margin -->
	<div class="my-6">
		<!-- Mission statement paragraph with top margin -->
		<p class="mt-4">
			Our mission is to provide customers with the right equipment that best meets their specific
			equipment application. Our experienced staff understand the industry, and we are committed to
			making our customers job easier and more profitable, with creative solutions and over 120
			years of experience. Visit our <a href="/about" class="text-red-600 underline hover:text-red-500 dark:text-red-400 dark:hover:text-red-300">About page</a> to take a look into our rich history.
		</p>
	</div>
</section>

<style lang="css">
	/* Responsive md: */
	@media (min-width: 48rem) {
		:global(.prose) {
			max-width: 42rem;
		}
	}

	/* Responsive lg: */
	@media (min-width: 64rem) {
		:global(.prose) {
			max-width: 56rem;
		}
	}
</style>
