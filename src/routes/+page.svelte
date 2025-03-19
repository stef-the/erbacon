<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	
	const data: {
		cards: {
			title: string;
			description: string;
			imageUrl: string;
			imageAlt: string;
			href: string;
		}[];
		features: { title: string; description: string }[];
	} = {
		cards: [
			{
				title: 'Construction Products',
				description: 'High-quality products for all your construction needs.',
				imageUrl:
					'https://editorial.pxcrush.net/constructionsales/general/editorial/used-excavator-yard-goh7.jpg',
				imageAlt: 'Construction products',
				href: '/products/construction'
			},
			{
				title: 'Generators, Pumps & Power Solutions',
				description: 'We offer a wide range of generators, pumps and power solutions.',
				imageUrl:
					'https://media.istockphoto.com/id/637880716/photo/mobile-diesel-generator-for-emergency-electric-power.jpg?s=612x612&w=0&k=20&c=5xYDeMomrILpTDtdeurKKJOsFKfiHOlhZdJeFakSvtY=',
				imageAlt: 'Generators and power solutions',
				href: '/services/generators'
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
				title: 'Temporary Fencing',
				description: 'We offer temporary fencing services for your needs.',
				imageUrl:
					'https://media.istockphoto.com/id/1405879247/photo/temporary-metallic-portable-fence-with-concrete-base-blocks-to-limit-the-territory.jpg?s=612x612&w=0&k=20&c=ihpJaz8wq4GF-M2aOWQW7ACLKHzEQHsy2buHlkMcVOc=',
				imageAlt: 'Temporary fencing',
				href: '/services/fencing'
			},
			{
				title: 'Truck Equipment',
				description: 'We offer a wide range of truck equipment for your needs.',
				imageUrl: 'https://www.stellarindustries.com/wp-content/uploads/2021/09/BlogPost_16K.webp',
				imageAlt: 'Truck equipment',
				href: '/products/trucks'
			},
			{
				title: 'Project Site Services',
				description: 'We offer a wide range of project site services for your needs.',
				imageUrl:
					'https://i0.wp.com/www.smbceo.com/wp-content/uploads/2023/01/construction-workers-500-rawpixel.jpg?resize=500%2C333&ssl=1',
				imageAlt: 'Project site services',
				href: '/services/project-site'
			},
			{
				title: 'Parts and Miscellaneous',
				description: 'We offer a wide range of parts and miscellaneous services for your needs.',
				imageUrl:
					'https://media.istockphoto.com/id/999389842/photo/spare-parts-chassis-of-construction-machinery.jpg?s=612x612&w=0&k=20&c=4_2ILXTxfcL6ZvkiQF1soisfm6KIxMByKB4tlbOUAm0=',
				imageAlt: 'Parts and miscellaneous',
				href: '/products/parts'
			}
		],

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

	let isVisible = false;
	let delay = 1;

	onMount(() => {
		isVisible = true;
		setTimeout(() => {
			delay = 0;
		}, data.cards.length * 100)
	});
</script>

<section class="prose lg:prose-lg mx-auto scroll-pt-28">
	<h1 class="my-4 text-center text-4xl font-bold text-slate-800">Our Products and Services</h1>
	<div class="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
		{#each data.cards as card, index}
			<a href={card.href} class="h-full text-slate-800 no-underline hover:text-red-500">
				<div
					class="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-md shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl {isVisible
					   ? 'translate-y-0 opacity-100'
					   : 'translate-y-10 opacity-0'}"
					style="transition-delay: {index * 100 * delay}ms"
				>
					<img
						src={card.imageUrl}
						alt={card.imageAlt}
						class="h-36 w-full rounded-t-lg object-cover"
						style="margin:0;"
					/>
					<div class="flex h-24 items-center">
						<p class="px-2 text-center text-xl font-bold">{card.title}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<section class="prose lg:prose-lg mx-auto mt-16 scroll-pt-28">
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
