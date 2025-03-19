<!-- src/routes/products/parts/+page.svelte -->
<script lang="ts">
  import GenericServicePage from '$lib/Services/GenericServicePage.svelte';

  export let data;

  const introText = 'Edward R. Bacon Company maintains an extensive inventory of high-quality parts and accessories for all types of equipment. From common wear items to specialized components, we have what you need to keep your equipment running at peak performance.';

  const features = [
	{
	  title: 'Genuine OEM Parts',
	  description: 'We offer genuine OEM parts that meet manufacturer specifications, ensuring optimal performance, reliability, and longevity for your equipment.'
	},
	{
	  title: 'Extensive Inventory',
	  description: 'With thousands of parts in stock and quick access to many more, we can help minimize downtime and keep your operations running smoothly.'
	},
	{
	  title: 'Expert Guidance',
	  description: 'Our knowledgeable staff can help identify the exact parts you need, saving you time and ensuring you get the right components for your specific equipment.'
	}
  ];
</script>

<GenericServicePage 
  {data} 
  {introText} 
  {features}
  featuresTitle="Why Choose ERBCO for Parts?"
  ctaText="Can't find the part you're looking for? We can help source even hard-to-find components."
  ctaButtonText="Contact Our Parts Department"
/>