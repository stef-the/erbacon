<!-- src/routes/products/trucks/+page.svelte -->
<script lang="ts">
  import GenericServicePage from '$lib/Services/GenericServicePage.svelte';
  
  export let data;
  
  const introText = 'Edward R. Bacon Company offers a comprehensive range of truck equipment solutions designed to enhance productivity, safety, and efficiency in your transportation and logistics operations. Our equipment is selected for reliability, durability, and performance in demanding environments.';
  
  const features = [
    {
      title: 'Performance & Reliability',
      description: 'Our truck equipment is engineered to deliver exceptional performance and reliability in challenging conditions, ensuring your operations run smoothly and efficiently.'
    },
    {
      title: 'Customization Options',
      description: 'We offer a variety of customization options to ensure our truck equipment meets your specific operational requirements and enhances your productivity.'
    },
    {
      title: 'Expert Support',
      description: 'Our knowledgeable team provides comprehensive support from equipment selection through installation and maintenance, ensuring you get the most from your investment.'
    }
  ];
</script>

<GenericServicePage 
  {data} 
  {introText} 
  {features}
  featuresTitle="Why Choose ERBCO Truck Equipment?"
  ctaText="Don't see what you're looking for? We have access to many more truck equipment options."
/>