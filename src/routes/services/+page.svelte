<!-- src/routes/services/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	// Services directory
	const services = [
		{
			title: 'Generators, Pumps & Power Solutions',
			description: 'We offer a wide range of generators, pumps and power solutions.',
			imageUrl: 'https://media.istockphoto.com/id/637880716/photo/mobile-diesel-generator-for-emergency-electric-power.jpg?s=612x612&w=0&k=20&c=5xYDeMomrILpTDtdeurKKJOsFKfiHOlhZdJeFakSvtY=',
			imageAlt: 'Generators and power solutions',
			href: '/services/generators'
		},
		{
			title: 'Temporary Fencing',
			description: 'We offer temporary fencing services for your needs.',
			imageUrl: 'https://media.istockphoto.com/id/1405879247/photo/temporary-metallic-portable-fence-with-concrete-base-blocks-to-limit-the-territory.jpg?s=612x612&w=0&k=20&c=ihpJaz8wq4GF-M2aOWQW7ACLKHzEQHsy2buHlkMcVOc=',
			imageAlt: 'Temporary fencing',
			href: '/services/fencing'
		},
		{
			title: 'Project Site Services',
			description: 'We offer a wide range of project site services for your needs.',
			imageUrl: 'https://i0.wp.com/www.smbceo.com/wp-content/uploads/2023/01/construction-workers-500-rawpixel.jpg?resize=500%2C333&ssl=1',
			imageAlt: 'Project site services',
			href: '/services/project-site'
		}
	];

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<svelte:head>
	<title>Our Services | Edward R. Bacon Company</title>
	<meta
		name="description"
		content="Explore ERBCO's comprehensive range of services including construction products, generators, used equipment, and temporary fencing solutions."
	/>
</svelte:head>

<div class="prose lg:prose-lg mx-auto mb-20">
	<h1 class="text-center text-4xl font-bold">Our Services</h1>
</div>

<div class="mx-auto max-w-6xl">
	<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
		{#each services as service, index}
			<a href={service.href} class="group no-underline h-full">
				<div
					class="transform h-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
					style="transition-delay: {index * 100}ms"
				>
					<div class="h-64 overflow-hidden">
						<!-- Image placeholder - replace with actual images when available -->
						<div
							class="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400 transition-all duration-300 group-hover:bg-gray-300"
						>
							<span class="text-xl">{service.title} Image</span>
						</div>
					</div>
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-bold text-gray-900">{service.title}</h2>
						<p class="mb-4 text-gray-700">{service.description}</p>
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

	<div class="mb-12 rounded-lg bg-gray-100 p-8">
		<h2 class="mb-4 text-2xl font-bold">Why Choose ERBCO?</h2>

		<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="rounded-lg bg-white p-6 shadow-md">
				<h3 class="mb-3 text-xl font-semibold">Century of Experience</h3>
				<p>
					With over 100 years in the industry, we bring unmatched expertise and knowledge to every
					service we provide.
				</p>
			</div>

			<div class="rounded-lg bg-white p-6 shadow-md">
				<h3 class="mb-3 text-xl font-semibold">Family-Owned Values</h3>
				<p>
					As a family-owned business since 1910, we maintain strong values of integrity, quality,
					and exceptional customer service.
				</p>
			</div>

			<div class="rounded-lg bg-white p-6 shadow-md">
				<h3 class="mb-3 text-xl font-semibold">Comprehensive Solutions</h3>
				<p>
					From equipment to power to site security, we offer a complete range of services to support
					your construction needs.
				</p>
			</div>
		</div>
	</div>

	<div class="mb-12 text-center">
		<h2 class="mb-4 text-2xl font-bold">Need a Custom Solution?</h2>
		<p class="mx-auto mb-6 max-w-2xl">
			Our team of experts can help design a customized solution for your specific project
			requirements. Contact us today to discuss your unique needs.
		</p>
		<a
			href="/contact"
			class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
		>
			Contact Our Team
		</a>
	</div>
</div>

<style>
	/* Add page-specific styles here */
</style>
