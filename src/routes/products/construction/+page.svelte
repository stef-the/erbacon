<!-- src/routes/services/construction/+page.svelte -->
<script lang="ts">
  import GenericServicePage from '$lib/Services/GenericServicePage.svelte';

  export let data;

  const introText = 'At Edward R. Bacon Company, we offer a comprehensive range of construction products to meet the needs of projects of all sizes. Our equipment is selected for reliability, durability, and performance in demanding environments.';

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

<GenericServicePage 
  {data} 
  {introText} 
  {features}
  featuresTitle="Why Choose ERBCO Construction Products?"
  ctaText="Don't see what you're looking for? We have access to many more products."
/>