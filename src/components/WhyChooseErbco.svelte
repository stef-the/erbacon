<!-- src/components/WhyChooseErbco.svelte -->
<script lang="ts">
	import { COMPANY_PHONE_TEL } from '$lib/constants';

	export let noun: 'products' | 'services' = 'products';
</script>

<div class="mb-12 rounded-lg bg-gray-100 p-8 dark:bg-zinc-900/40 dark:text-slate-50">
	<h2 class="mb-4 text-2xl font-bold">Why Choose ERBCO?</h2>

	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
		<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900/70">
			<h3 class="mb-3 text-xl font-semibold">Century of Experience</h3>
			<p>
				With over 100 years in the industry, we bring unmatched expertise and knowledge to every
				{noun === 'products' ? 'product' : 'service'} we provide.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900/70">
			<h3 class="mb-3 text-xl font-semibold">Family-Owned Values</h3>
			<p>
				As a family-owned business since 1910, we maintain strong values of integrity, quality, and
				exceptional customer service.
			</p>
		</div>

		<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900/70">
			<h3 class="mb-3 text-xl font-semibold">Comprehensive Solutions</h3>
			<p>
				From equipment to power to site security, we offer a complete range of {noun} to support your
				construction needs.
			</p>
		</div>
	</div>
</div>

<div class="mb-12 text-center dark:text-slate-50">
	<h2 class="mb-4 text-2xl font-bold">Need a Custom Solution?</h2>
	<p class="mx-auto mb-6 max-w-2xl">
		Our team of experts can help design a customized solution for your specific project
		requirements. Contact us today to discuss your unique needs.
	</p>
	<a
		href={COMPANY_PHONE_TEL}
		class="inline-block rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-red-700"
	>
		Contact Us Today
	</a>
</div>
