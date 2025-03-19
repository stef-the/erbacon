<!-- src/routes/services/project-site/+page.server.ts -->
<script lang="ts">
  import GenericServicePage from '$lib/Services/GenericServicePage.svelte';

  export let data;

  const introText = 'Edward R. Bacon Company delivers comprehensive project site services designed to support the complex needs of construction and industrial projects. From site preparation to ongoing support, our experienced team ensures your project runs smoothly and efficiently.';

  const features = [
	{
	  title: 'End-to-End Solutions',
	  description: 'From initial site assessment to ongoing maintenance, we provide comprehensive solutions that address all aspects of project site management and support.'
	},
	{
	  title: 'Experienced Team',
	  description: 'Our team brings decades of experience to every project, with the expertise to anticipate challenges and implement effective solutions that keep your project on track.'
	},
	{
	  title: 'Customized Approach',
	  description: 'We understand that every project is unique, which is why we tailor our services to meet your specific requirements, timeline, and budget constraints.'
	}
  ];
</script>

<GenericServicePage 
  {data} 
  {introText} 
  {features}
  featuresTitle="The ERBCO Project Site Services Advantage"
  ctaText="Looking for a specific service not listed here? We offer customized solutions for unique project needs."
  ctaButtonText="Discuss Your Project Needs"
/>