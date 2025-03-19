<!-- src/routes/services/generators/+page.svelte -->
<script lang="ts">
  import GenericServicePage from '$lib/Services/GenericServicePage.svelte';
  
  export let data;
  
  const introText = 'Edward R. Bacon Company offers reliable generators, pumps, and power solutions designed to provide consistent performance in demanding environments. From construction sites to emergency backup power, our equipment ensures your operations continue uninterrupted regardless of location or power availability.';
  
  const features = [
    {
      title: 'Reliable Performance',
      description: 'Our generators and pumps are engineered to deliver consistent, dependable power and fluid management in challenging conditions, ensuring operational continuity when you need it most.'
    },
    {
      title: 'Diverse Capacity Options',
      description: 'We offer equipment in various sizes and capacities to match your specific power and pumping requirements, from small portable units to large industrial solutions.'
    },
    {
      title: 'Expert Support & Service',
      description: 'Our team provides comprehensive support from equipment selection through deployment and maintenance, ensuring optimal performance and minimal downtime for your operations.'
    }
  ];
</script>
<GenericServicePage 
  {data} 
  {introText} 
  {features}
  featuresTitle="Why Choose ERBCO Power Solutions?"
  ctaText="Don't see what you're looking for? Contact us to discuss your specific power and pumping requirements."
/>