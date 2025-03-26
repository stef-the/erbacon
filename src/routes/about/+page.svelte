<!-- src/routes/about/+page.svelte -->
<script lang="ts">
	const features = [
			{
				title: 'One hundred years of history',
				description:
					'The Edward R. Bacon Company was founded in 1910. We’ve witnessed firsthand the evolution of the construction equipment industry. We’ve also seen many companies come and go. All this time, we’ve continued to offer great products and services to our customers. When you do business with us, you can count on our history to know that we’ll be there for you.'
			},
			{
				title: 'Family values work for you',
				description:
					'The Edward R. Bacon Company, Inc. has been family owned and run since its inception. The family values and business principles upon which the company was founded are still practiced today by its owners and employees. We appreciate our customers and it shows when you work with us.'
			}
		]
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

<section class="prose lg:prose-lg mx-auto mt-16 scroll-pt-28 text-slate-800 dark:text-slate-50">
	<div class="my-8 grid grid-cols-1 gap-6 2xl:grid-cols-2">
		{#each features as feature}
			<div class="rounded-lg bg-gray-100 p-6 shadow dark:bg-zinc-900/70">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-50">{feature.title}</h3>
				<p>{feature.description}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	/* Add any page-specific styles here */
	:global(.prose) {
		max-width: 1200px;
	}
</style>
