<!-- src/routes/products/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	// products directory
	const products = [
		{
			title: 'Construction Products',
			description: 'High-quality products for all your construction needs.',
			imageUrl:
				'https://editorial.pxcrush.net/constructionsales/general/editorial/used-excavator-yard-goh7.jpg',
			imageAlt: 'Construction products',
			href: '/products/construction'
		},
		{
			title: 'Used Equipment',
			description: 'We offer a wide range of used equipment for your needs.',
			imageUrl:
				'https://bluesafe.net.au/wp-content/uploads/2022/12/6367ae4f67d7c3f453becacc_Jack-Hammer-Safe-Work-Method-Statement.jpg',
			imageAlt: 'Used equipment',
			href: '/products/used'
		},
		{
			title: 'Truck Equipment',
			description: 'We offer a wide range of truck equipment for your needs.',
			imageUrl: 'https://www.stellarindustries.com/wp-content/uploads/2021/09/BlogPost_16K.webp',
			imageAlt: 'Truck equipment',
			href: '/products/trucks'
		},
		{
			title: 'Parts and Miscellaneous',
			description: 'We offer a wide range of parts and miscellaneous products for your needs.',
			imageUrl:
				'https://media.istockphoto.com/id/999389842/photo/spare-parts-chassis-of-construction-machinery.jpg?s=612x612&w=0&k=20&c=4_2ILXTxfcL6ZvkiQF1soisfm6KIxMByKB4tlbOUAm0=',
			imageAlt: 'Parts and miscellaneous',
			href: '/products/parts'
		}
	];

	let isVisible = false;
	let delay = 1;

	onMount(() => {
		isVisible = true;
		setTimeout(() => {
			delay = 0;
		}, products.length * 100)
	});
</script>

<svelte:head>
	<title>Our Products | Edward R. Bacon Company</title>
	<meta
		name="description"
		content="Explore ERBCO's comprehensive range of products in construction, used equipment, truck equipment and parts"
	/>
</svelte:head>

<div class="prose lg:prose-lg mx-auto mb-20">
	<h1 class="text-center text-4xl font-bold dark:text-slate-50">Our Products</h1>
</div>

<div class="mx-auto max-w-6xl">
	<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
		{#each products as product, index}
			<a href={product.href} class="group no-underline h-full">
				<div
					class="transform h-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900/70 {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
					style="transition-delay: {index * 100 * delay}ms"
				>
					<div class="h-64 overflow-hidden shadow-sm">
						<img
							src={product.imageUrl}
							alt= {product.imageAlt}
							class="flex h-full w-full items-center justify-center object-cover bg-gray-200 text-gray-400 transition-all duration-300 group-hover:bg-gray-300"
						>
					</div>
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-bold text-gray-900 dark:text-slate-50">{product.title}</h2>
						<p class="mb-4 text-gray-700 dark:text-slate-300">{product.description}</p>
						<div class="flex items-center font-semibold text-red-600 group-hover:text-red-700">
							Learn more
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="mb-12 rounded-lg bg-gray-100 p-8 dark:bg-zinc-900/40 dark:text-slate-50">
		<h2 class="mb-4 text-2xl font-bold">Why Choose ERBCO?</h2>

		<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900/70">
				<h3 class="mb-3 text-xl font-semibold">Century of Experience</h3>
				<p>
					With over 100 years in the industry, we bring unmatched expertise and knowledge to every
					product we provide.
				</p>
			</div>

			<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900/70">
				<h3 class="mb-3 text-xl font-semibold">Family-Owned Values</h3>
				<p>
					As a family-owned business since 1910, we maintain strong values of integrity, quality,
					and exceptional customer product.
				</p>
			</div>

			<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900/70">
				<h3 class="mb-3 text-xl font-semibold">Comprehensive Solutions</h3>
				<p>
					From equipment to power to site security, we offer a complete range of products to support
					your construction needs.
				</p>
			</div>
		</div>
	</div>

	<div class="mb-12 text-center dark:text-slate-50">
		<h2 class="mb-4 text-2xl font-bold">Need a Custom Solution?</h2>
		<p class="mx-auto mb-6 max-w-2xl">
			Our team of experts can help design a customized solution for your specific project
			requirements. Contact us today to discuss your unique needs.
		</p>
		<a
			href="/contact"
			class="inline-block rounded-lg bg-red-500 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-600"
		>
			Contact Our Team
		</a>
	</div>
</div>

<style>
	/* Add page-specific styles here */
</style>
