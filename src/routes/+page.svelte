<!-- src/routes/+page.svelte -->
<script lang="ts">
	const data: {
		features: { title: string; description: string }[];
	} = {
		features: [
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
	};
</script>

<section class="prose lg:prose-lg mx-auto scroll-pt-28">
	<h2 class="text-2xl font-bold">Welcome to our Website</h2>
	<div class="my-6">
		<p class="mt-4">
			Our mission is to offer our customers unparalleled service. We are committed to helping your
			business run more smoothly. That’s why we offer more choices in equipment, an experienced
			staff that understands the industry and a complete inventory of parts to give you what you
			need when you need it.
		</p>
	</div>
	{#if data.features}
		<div class="my-8 grid grid-cols-1 gap-6 2xl:grid-cols-2">
			{#each data.features as feature}
				<div class="rounded-lg bg-gray-100 p-6 shadow">
					<h3 class="mb-2 text-xl font-semibold">{feature.title}</h3>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	{/if}
</section>
