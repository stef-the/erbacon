<!-- src/routes/products/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import WhyChooseErbco from '../../components/WhyChooseErbco.svelte';

	// products directory
	const products = [
		{
			title: 'New Equipment',
			description: 'New equipment from the 50+ manufacturer lines we represent.',
			imageUrl:
				'https://editorial.pxcrush.net/constructionsales/general/editorial/used-excavator-yard-goh7.jpg',
			imageAlt: 'New equipment',
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
			title: 'Truck & Mobile Equipment',
			description:
				'Stellar Industries truck and mobile equipment — service cranes, mechanic trucks, hooklifts, toolboxes, fuel & lube trailers, and more.',
			imageUrl: 'https://www.stellarindustries.com/wp-content/uploads/2021/09/BlogPost_16K.webp',
			imageAlt: 'Truck and mobile equipment',
			href: '/products/trucks'
		}
	];

	let isVisible = false;
	let delay = 1;

	onMount(() => {
		isVisible = true;
		setTimeout(() => {
			delay = 0;
		}, products.length * 100);
	});
</script>

<svelte:head>
	<title>Our Products | Edward R. Bacon Company</title>
	<meta
		name="description"
		content="Explore ERBCO's comprehensive range of construction products, used equipment, and truck equipment. Over 100 years of industry experience."
	/>
	<meta property="og:title" content="Our Products | Edward R. Bacon Company" />
	<meta
		property="og:description"
		content="Explore ERBCO's comprehensive range of construction products, used equipment, and truck equipment."
	/>
</svelte:head>

<div class="prose lg:prose-lg mx-auto mb-20">
	<h1 class="text-center text-4xl font-bold dark:text-slate-50">Our Products</h1>
</div>

<div class="mx-auto max-w-6xl">
	<div class="mb-12 grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
		{#each products as product, index}
			<a href={product.href} class="group h-full no-underline">
				<div
					class="h-full transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900/70 {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
					style="transition-delay: {index * 100 * delay}ms"
				>
					<div class="h-64 overflow-hidden shadow-sm">
						<img
							src={product.imageUrl}
							alt={product.imageAlt}
							loading="lazy"
							class="flex h-full w-full items-center justify-center bg-gray-200 object-cover text-gray-400 transition-all duration-300 group-hover:bg-gray-300"
						/>
					</div>
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-bold text-gray-900 dark:text-slate-50">
							{product.title}
						</h2>
						<p class="mb-4 text-gray-700 dark:text-slate-300">{product.description}</p>
						<div
							class="flex items-center font-semibold text-red-600 group-hover:text-red-700 dark:text-red-400 dark:group-hover:text-red-300"
						>
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

	<WhyChooseErbco noun="products" />
</div>
