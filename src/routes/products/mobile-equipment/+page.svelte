<!-- src/routes/products/mobile-equipment/+page.svelte -->
<script lang="ts">
	import GenericServicePage from '$lib/Services/GenericServicePage.svelte';
	import {
		COMPANY_PHONE,
		COMPANY_PHONE_TEL,
		COMPANY_EMAIL,
		COMPANY_EMAIL_MAILTO
	} from '$lib/constants';
	export let data;
	const features = [
		{
			title: 'Stellar Industries Partnership',
			description:
				'As an authorized dealer, we offer the full line of Stellar Industries mobile equipment backed by factory support and local expertise.'
		},
		{
			title: 'Custom Configurations',
			description:
				'Every operation is different. We work with you to configure the right equipment setup for your specific application and workflow.'
		},
		{
			title: 'Service & Support',
			description:
				'From initial consultation to delivery and beyond, our team provides hands-on support to keep your mobile equipment running at peak performance.'
		}
	];
</script>

<section class="py-8">
	<div class="flex items-center justify-center gap-4">
		<h3
			class="text-center text-xl font-bold text-gray-800 transition duration-150 ease-in-out hover:text-red-500 hover:underline sm:text-4xl lg:text-5xl dark:text-slate-50"
		>
			<a href={COMPANY_PHONE_TEL}>{COMPANY_PHONE}</a>
		</h3>
		<img
			src="/icons/erbco-get-it-from-bacon.avif"
			alt="Get it from Bacon!"
			class="h-16 rounded-md"
		/>
	</div>
	<p class="mt-2 text-center text-gray-600 dark:text-slate-400">
		<a href={COMPANY_EMAIL_MAILTO} class="hover:text-red-500 hover:underline">{COMPANY_EMAIL}</a>
	</p>
</section>

<GenericServicePage
	{data}
	introText=""
	{features}
	featuresTitle="Why Choose ERBCO for Mobile Equipment?"
	ctaText="Don't see what you're looking for? We have access to the full Stellar Industries product line."
/>
