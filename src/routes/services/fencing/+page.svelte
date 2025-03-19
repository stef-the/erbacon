<!-- src/routes/services/fencing/+page.svelte -->
<script lang="ts">
  import GenericServicePage from '$lib/Services/GenericServicePage.svelte';
  
  export let data;
  
  const introText = 'Edward R. Bacon Company provides high-quality temporary fencing solutions for construction sites, events, and other applications requiring secure perimeter control. Our fencing systems are designed for quick installation, durability, and reliable security to protect your site and meet compliance requirements.';
  
  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Our temporary fencing systems are designed for quick and efficient installation, allowing you to secure your site quickly with minimal disruption to your operations.'
    },
    {
      title: 'Durable Construction',
      description: 'Built to withstand challenging conditions and environments, our temporary fencing provides reliable perimeter security throughout your project duration.'
    },
    {
      title: 'Customizable Solutions',
      description: 'We offer various fencing options and accessories to meet your specific site security needs, including privacy screens, gates, and specialized access control systems.'
    }
  ];
</script>
<GenericServicePage 
  {data} 
  {introText} 
  {features}
  featuresTitle="Why Choose ERBCO Temporary Fencing?"
  ctaText="Contact us today to discuss your temporary fencing requirements and receive a customized solution."
/>