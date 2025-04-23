<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';

	// Site configuration - easily expandable
	const data: {
		siteTitle: string;
		siteSubtitle: string;
		companyName: string;
		heroImage: string | null;
		heroVideo: string | Array<string> | null;
		navItems: { label: string; href: string; children?: { label: string; href: string }[] }[];
		socialLinks: { icon: string; href: string; target?: string }[];
		footerLinks: { title: string; links: { icon: string; label: string; href: string }[] }[];
	} = {
		siteTitle: 'Edward R. Bacon Company',
		siteSubtitle: 'Serving the California construction industry since 1910',
		companyName: 'Edward R. Bacon Company',
		heroImage: null,
		heroVideo: ['/video/1040370164-preview.mp4', '/video/1111075171-preview.mp4'],
		navItems: [
			{ label: 'Home', href: '/' },
			{
				label: 'Products',
				href: '/products',
				children:[
					{ label: 'Construction Products', href: '/products/construction' },
					{ label: 'Used Equipment', href: '/products/used' },
					{ label: 'Truck Equipment', href: '/products/trucks' },
					{ label: 'Parts and Miscellaneous', href: '/products/parts' }
				]
			},
			{
				label: 'Services',
				href: '/services',
				children: [
					{ label: 'Generators and Power Solutions', href: '/products/construction?category=Generators' },
					//{ label: 'Temporary Fencing', href: '/services/fencing' },
					{ label: 'Project Site Services', href: '/services/project-site' }
				]
			},
			{ label: 'About', href: '/about' },
		],
		socialLinks: [
			{ icon: 'Twitter', href: 'https://twitter.com' },
			{ icon: 'Facebook', href: 'https://facebook.com' },
			{ icon: 'Instagram', href: 'https://instagram.com' },
			{ icon: 'LinkedIn', href: 'http://linkedin.com/in/erbco' }
		],
		footerLinks: [
			{
				title: 'Company',
				links: [
					{ icon: 'Info', label: 'About', href: '/about' },
					{ icon: 'eBay', label: 'eBay', href: 'https://www.ebay.com', target: '_blank' }
				]
			}
		]
	};

// Define dark mode colours
	const zinc_900 = 'oklch(0.21 0.006 285.885)';
	const gray_900 = 'oklch(0.21 0.034 264.665)';

	// Reactive variable for theme color
	let themeColor = gray_900;

	// Parallax function
	onMount(() => {
		const parallaxEl = document.getElementById('parallax');

		function handleScroll() {
			if (parallaxEl) {
				const scrollPosition = window.scrollY;
				const parallaxSpeed = 0.35;
				parallaxEl.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
			}
		}

		// Dark mode detection and theme color update
		const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		function updateThemeColor() {
			themeColor = darkModeMediaQuery.matches ? zinc_900 : gray_900;
		}

		// Initial check
		updateThemeColor();

		// Listen for changes in color scheme
		darkModeMediaQuery.addEventListener('change', updateThemeColor);

		window.addEventListener('scroll', handleScroll);

		// Clean up event listeners
		return () => {
			window.removeEventListener('scroll', handleScroll);
			darkModeMediaQuery.removeEventListener('change', updateThemeColor);
		};
	});
</script>

<svelte:head>
	<title>{data.siteTitle}</title>
	<meta name="description" content={data.siteSubtitle} />
	<meta name="theme-color" content={themeColor} /><!-- Dynamic theme color -->
</svelte:head>

<div class="flex min-h-screen flex-col">
	<!-- Hero image area -->
	<div class="h-[70vh] w-full">
		<!-- Hero image overlay text -->
		<div id="parallax" class="absolute h-[70vh] left-0 flex w-full px-8 items-center justify-center">
			<div>
				<h1 class="pt-4 text-center text-6xl font-bold text-white">
					{data.siteTitle}
				</h1>
				<h2 class="pt-2 text-center text-3xl text-white">
					{data.siteSubtitle}
				</h2>
				<h2 class="pt-6 text-center text-4xl text-white hover:text-red-500 hover:underline transition duration-150 ease-in-out"><a href="tel:+19163838250">+1 (916) 383-8250</a></h2>
			</div>
		</div>
		<!-- Hero image overlay gradient -->
		<div class="absolute top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-transparent to-black opacity-50 -z-40"></div>
		<!-- Hero image area -->
		<div class="fixed -z-50 flex h-[70vh] w-full items-center justify-center bg-gray-200">
			{#if data.heroImage}
				<img src={data.heroImage} alt="Hero section" class="h-full w-full object-cover" />
			{:else if data.heroVideo !== null}
				<video class="h-full w-full object-cover" autoplay loop muted playsinline>
					{#if typeof data.heroVideo === 'string'}
						<source src={data.heroVideo} type="video/mp4" />
					{:else}
						<!-- Play random hero video -->
						<source
							src={data.heroVideo[Math.floor(Math.random() * data.heroVideo.length)]}
							type="video/mp4"
						/>
					{/if}
				</video>
			{:else}
				<div class="text-gray-500">Featured Image Area</div>
			{/if}
		</div>
	</div>

	<!-- Navbar -->
	<Navbar navItems={data.navItems} />

	<!-- Main content area -->
	<div id="content" class="w-full bg-slate-50 dark:bg-zinc-800 pt-8">
		<main class="container mx-auto flex-grow px-4 py-8">
			<slot />
		</main>
	</div>

	<!-- Footer -->
	<Footer
		companyName={data.companyName}
		socialLinks={data.socialLinks}
		footerLinks={data.footerLinks}
	/>
</div>
