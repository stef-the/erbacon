<!-- src/routes/products/used/+page.svelte -->
<script lang="ts">
  import GenericServicePage from '$lib/Services/GenericServicePage.svelte';
  
  export let data;
  
  const introText = 'Edward R. Bacon Company offers a wide selection of quality used equipment, providing cost-effective solutions for your project needs. Our used equipment undergoes thorough inspection and maintenance to ensure reliability and performance, giving you confidence in your investment.';
  
  const features = [
    {
      title: 'Quality Assurance',
      description: 'All our used equipment is thoroughly inspected, tested, and refurbished when necessary to ensure it meets our high standards for reliability and performance.'
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Our used equipment provides excellent value, allowing you to acquire the tools you need at a fraction of the cost of new equipment without compromising on quality.'
    },
    {
      title: 'Diverse Inventory',
      description: 'We maintain a diverse inventory of used equipment for various applications, from construction and excavation to material handling and site preparation.'
    }
  ];
</script>
<GenericServicePage 
  {data} 
  {introText} 
  {features}
  featuresTitle="Why Choose ERBCO Used Equipment?"
  ctaText="Don't see what you're looking for? Contact us about our constantly updating inventory of used equipment."
/>