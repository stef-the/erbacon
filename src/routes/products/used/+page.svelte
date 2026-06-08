<!-- src/routes/products/used/+page.svelte -->
<script lang="ts">
	import GenericServicePage from '$lib/Services/GenericServicePage.svelte';
	import { MARKETPLACE_URL } from '$lib/constants';

	export let data;

	const introText =
		'Edward R. Bacon Company offers a wide selection of quality used equipment, providing cost-effective solutions for your project needs. Our used equipment undergoes thorough inspection and maintenance to ensure reliability and performance, giving you confidence in your investment.';

	const features = [
		{
			title: 'Quality Assurance',
			description:
				'All our used equipment is thoroughly inspected, tested, and refurbished when necessary to ensure it meets our high standards for reliability and performance.'
		},
		{
			title: 'Cost-Effective Solutions',
			description:
				'Our used equipment provides excellent value, allowing you to acquire the tools you need at a fraction of the cost of new equipment without compromising on quality.'
		},
		{
			title: 'Diverse Inventory',
			description:
				'We maintain a diverse inventory of used equipment for various applications, from construction and excavation to material handling and site preparation.'
		}
	];
</script>

{#if MARKETPLACE_URL}
	<section class="mb-8 text-center">
		<a
			href={MARKETPLACE_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0f63d6]"
		>
			<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path
					d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
				/>
			</svg>
			Browse our Facebook Marketplace
		</a>
	</section>
{/if}

<GenericServicePage
	{data}
	{introText}
	{features}
	featuresTitle="Why Choose ERBCO Used Equipment?"
	ctaText="Don't see what you're looking for? Contact us about our constantly updating inventory of used equipment."
/>
