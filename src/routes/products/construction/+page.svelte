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

<!-- Used Equipment Button Section -->
<section class="py-12 bg-gray-100 dark:bg-zinc-800">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-slate-50">Looking for Cost-Effective Solutions?</h2>
    <p class="text-lg mb-8 text-gray-700 dark:text-slate-300">Browse through our used equipment offerings for quality machinery at competitive prices.</p>
    <a 
      href="/products/used" 
      class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
    >
      View Used Equipment
    </a>
  </div>
</section>