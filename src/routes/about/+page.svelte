<!-- src/routes/about/+page.svelte -->
<script lang="ts">
</script>

<svelte:head>
	<title>About Us | Edward R. Bacon Company</title>
	<meta
		name="description"
		content="Learn about Edward R. Bacon Company's rich history serving the West Coast construction industry since 1910, our experienced team, and our commitment to unparalleled service."
	/>
</svelte:head>

<section class="prose lg:prose-lg mx-auto mb-16 scroll-pt-28">
	<!-- Company Introduction -->
	<h1 class="mb-8 text-4xl font-bold">About Edward R. Bacon Company</h1>

	<div class="my-6">
		<p class="mt-4 text-lg">
			Since 1910, the Edward R. Bacon Company has been a trusted partner to the West Coast
			construction industry. As a family-owned business spanning three generations, we've maintained
			our commitment to exceptional service while adapting to the evolving needs of our customers.
		</p>
		<p class="mt-4 text-lg">
			Our mission is to offer our customers unparalleled service. We are committed to helping your
			business run more smoothly by providing more equipment choices, expert guidance from our
			experienced staff, and a complete inventory of parts to give you what you need when you need
			it.
		</p>
	</div>
</section>

<style>
	/* Add any page-specific styles here */
	:global(.prose) {
		max-width: 1200px;
	}
</style>
