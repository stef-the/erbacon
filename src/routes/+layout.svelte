<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	// Site configuration - easily expandable
	const data: {
		siteTitle: string;
		siteSubtitle: string;
		companyName: string;
		heroImage: string | null;
		heroVideo: string | null;
		navItems: { label: string; href: string }[];
		socialLinks: { label: string; href: string }[];
		footerLinks: { label: string; href: string }[];
	} = {
		siteTitle: 'Edward R. Bacon Company',
		siteSubtitle: 'Servicing the West Coast construction industry since 1910',
		companyName: 'Your Company',
		heroImage: null,
		heroVideo: '1111090611-preview.mp4',
		navItems: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Services', href: '/services' },
			{ label: 'Contact', href: '/contact' }
		],
		socialLinks: [
			{ label: 'Twitter', href: 'https://twitter.com' },
			{ label: 'Facebook', href: 'https://facebook.com' },
			{ label: 'Instagram', href: 'https://instagram.com' }
		],
		footerLinks: [
			{ label: 'Privacy Policy', href: '/privacy' },
			{ label: 'Terms of Service', href: '/terms' }
		]
	};
</script>

<svelte:head>
	<title>{data.siteTitle}</title>
	<meta name="description" content={data.siteSubtitle} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<div class="w-full">
		<!-- Hero image overlay text -->
		<div class="absolute top-0 left-0 flex h-[50%] w-full items-center justify-center">
			<div class="rounded-lg bg-[#000000CC] p-4">
				<h1 class="text-center text-4xl font-bold text-white">
					{data.siteTitle}
				</h1>
				<h2 class="text-center text-2xl text-white pt-2">
					{data.siteSubtitle}
				</h2>
			</div>
		</div>
		<!-- Hero image area -->
		<div class="flex h-[70vh] w-full items-center justify-center bg-gray-200">
			{#if data.heroImage}
				<img src={data.heroImage} alt="Hero section" class="h-full w-full object-cover" />
			{:else if data.heroVideo}
				<video
					class="h-full w-full object-cover"
					autoplay
					loop
					muted
					playsinline
					src={data.heroVideo}
				></video>
			{:else}
				<div class="text-gray-500">Featured Image Area</div>
			{/if}
		</div>
	</div>

	<Navbar navItems={data.navItems} />

	<main class="container mx-auto flex-grow px-4 py-8">
		<slot />
	</main>

	<Footer
		companyName={data.companyName}
		socialLinks={data.socialLinks}
		footerLinks={data.footerLinks}
	/>
</div>
