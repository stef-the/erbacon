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

<!-- Main content section with responsive prose styling and scroll padding -->
<section class="prose lg:prose-lg mx-auto scroll-pt-28">
    <!-- Grid container that creates a responsive card layout:
         - auto-rows-fr: All rows have equal fractional height
         - 2 columns on mobile, 3 on tablet (md), 4 on desktop (lg)
         - Gap spacing increases from 4 to 8 on large screens -->
    <div class="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        
        <!-- Loop through each card in the data.cards array with index -->
        {#each data.cards as card, index}
            <!-- Wrapper link that makes entire card clickable, removes underline, adds hover color -->
            <a href={card.href} class="h-full no-underline hover:text-red-500">
                <!-- Card container with:
                     - Flexbox column layout to stack image and text vertically
                     - Rounded corners and shadow for depth
                     - Smooth transitions for hover effects (moves up, increases shadow)
                     - Dark mode background
                     - Conditional visibility classes based on isVisible state
                     - Staggered animation delay based on card index (each card animates 100ms * delay after the previous) -->
                <div
                    class="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-md shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900/70 {isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'}"
                    style="transition-delay: {index * 100 * delay}ms"
                >
                    <!-- Card image:
                         - Fixed height of 36 (9rem/144px)
                         - Full width with object-cover to maintain aspect ratio
                         - Rounded top corners to match card
                         - Margin override to 0 -->
                    <img
                        src={card.imageUrl}
                        alt={card.imageAlt}
                        class="h-36 w-full rounded-t-lg object-cover"
                        style="margin:0;"
                    />
                    
                    <!-- Card text container:
                         - Fixed height of 24 (6rem/96px) for consistent card sizing
                         - Centers content vertically -->
                    <div class="flex h-24 items-center">
                        <!-- Card title: large, bold, centered text with horizontal padding and dark mode styling -->
                        <p class="px-2 text-center text-xl font-bold dark:text-slate-50">{card.title}</p>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</section>

<!-- Welcome section below the cards:
     - Same responsive prose width and scroll padding as above
     - Vertical margin spacing
     - Dark mode text color -->
<section class="prose lg:prose-lg mx-auto my-16 scroll-pt-28 text-slate-800 dark:text-slate-50">
    <!-- Section heading with larger text and dark mode styling -->
    <h2 class="text-2xl font-bold dark:text-slate-50">Welcome to our Website</h2>
    
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
