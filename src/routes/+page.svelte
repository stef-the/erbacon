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
			/*{
				title: 'Temporary Fencing',
				description: 'We offer temporary fencing services for your needs.',
				imageUrl:
					'https://media.istockphoto.com/id/1405879247/photo/temporary-metallic-portable-fence-with-concrete-base-blocks-to-limit-the-territory.jpg?s=612x612&w=0&k=20&c=ihpJaz8wq4GF-M2aOWQW7ACLKHzEQHsy2buHlkMcVOc=',
				imageAlt: 'Temporary fencing',
				href: '/services/fencing'
			},*/
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



<!-- Welcome section below the cards:
     - Same responsive prose width and scroll padding as above
     - Vertical margin spacing
     - Dark mode text color -->
<section class="prose lg:prose-lg mx-auto mt-6 mb-24 scroll-pt-28 text-slate-800 dark:text-slate-50">
    <!-- Section heading with larger text and dark mode styling -->
    <h2 class="text-6xl font-bold text-center dark:text-slate-50">Welcome to our Website</h2>
    
    <!-- Content wrapper with vertical margin -->
    <div class="my-6">
        <!-- Mission statement paragraph with top margin -->
        <p class="mt-4">
            Our mission is to offer our customers unparalleled service. We are committed to helping your
            business run more smoothly. That's why we offer more choices in equipment, an experienced
            staff that understands the industry and a complete inventory of parts to give you what you
            need when you need it.
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
