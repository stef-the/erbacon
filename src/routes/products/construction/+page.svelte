<!-- src/routes/services/construction/+page.svelte -->
<script lang="ts">
  import GenericServicePage from '$lib/Services/GenericServicePage.svelte';

  export let data;

  const introText = '';

  const features = [
	{
	  title: 'Quality Equipment',
	  description: 'We partner with leading manufacturers to offer only the highest quality construction equipment that stands up to the toughest job sites.'
	},
	{
	  title: 'Expert Support',
	  description: 'Our knowledgeable team can help you select the right equipment for your specific needs and provide ongoing support throughout your project.'
	},
	{
	  title: 'Complete Inventory',
	  description: 'With our extensive inventory of equipment and parts, you\'ll find everything you need to keep your project moving forward efficiently.'
	}
  ];
</script>

<section class="py-8">
	<div class="flex justify-center">
		<h3 class="text-xl font-bold text-center text-gray-800 dark:text-slate-50 sm:text-4xl lg:text-5xl h-16 flex justify-center"><a href="tel:+19163838250">+1 (916) 383 8250</a></h3>
		<img src="/icons/ERBCO_get_it_from_bacon.avif" alt="get it from bacon!" class="h-16 px-4" />
	</div>
</section>

<GenericServicePage 
  {data} 
  {introText} 
  {features}
  featuresTitle="Why Choose ERBCO Construction Products?"
  ctaText="Don't see what you're looking for? We have access to many more products."
/>