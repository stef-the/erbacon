<!-- src/routes/services/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import WhyChooseErbco from '../../components/WhyChooseErbco.svelte';

	// Services directory
	const services = [
		{
			title: 'Generators & Power Services',
			description:
				'Generator maintenance, standby power, and turnkey installs — see our full services brochure.',
			imageUrl:
				'https://media.istockphoto.com/id/637880716/photo/mobile-diesel-generator-for-emergency-electric-power.jpg?s=612x612&w=0&k=20&c=5xYDeMomrILpTDtdeurKKJOsFKfiHOlhZdJeFakSvtY=',
			imageAlt: 'Generators and power services',
			href: '/services/generators'
		},
		{
			title: 'Site Services – Fence Rental',
			description: 'Site services and temporary fence rental for your project needs.',
			imageUrl:
				'https://i0.wp.com/www.smbceo.com/wp-content/uploads/2023/01/construction-workers-500-rawpixel.jpg?resize=500%2C333&ssl=1',
			imageAlt: 'Site services and fence rental',
			href: '/services/project-site'
		}
	];

	let isVisible = false;
	let delay = 1;

	onMount(() => {
		isVisible = true;
		setTimeout(() => {
			delay = 0;
		}, services.length * 100);
	});
</script>

<svelte:head>
	<title>Our Services | Edward R. Bacon Company</title>
	<meta
		name="description"
		content="Explore ERBCO's comprehensive range of services including generators, power solutions, and project site services for the California construction industry."
	/>
	<meta property="og:title" content="Our Services | Edward R. Bacon Company" />
	<meta
		property="og:description"
		content="Comprehensive construction services including generators, power solutions, and project site management."
	/>
</svelte:head>

<div class="prose lg:prose-lg mx-auto mb-20">
	<h1 class="text-center text-4xl font-bold dark:text-slate-50">Our Services</h1>
</div>

<div class="mx-auto max-w-6xl">
	<div class="mb-12 grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
		{#each services as service, index}
			<a href={service.href} class="group h-full no-underline">
				<div
					class="h-full transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900/70 {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
					style="transition-delay: {index * 100 * delay}ms"
				>
					<div class="h-64 overflow-hidden shadow-sm">
						<img
							src={service.imageUrl}
							alt={service.imageAlt}
							loading="lazy"
							class="flex h-full w-full items-center justify-center bg-gray-200 object-cover text-gray-400 transition-all duration-300 group-hover:bg-gray-300"
						/>
					</div>
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-bold text-gray-900 dark:text-slate-50">
							{service.title}
						</h2>
						<p class="mb-4 text-gray-700 dark:text-slate-300">{service.description}</p>
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

	<WhyChooseErbco noun="services" />
</div>
