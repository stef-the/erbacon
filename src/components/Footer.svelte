<!-- src/components/Footer.svelte -->
<script>
	import SocialIcons from './icons/SocialIcons.svelte';

	/**
	 * @type {string}
	 */
	export const companyName = 'Edward R. Bacon Company';

	/**
	 * @type {any[]}
	 */
	export let socialLinks = [];

	/**
	 * @type {any[]}
	 */
	export let footerLinks = [];

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-800 py-8 text-white">
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap">
			<!-- Company info -->
			<div class="mb-6 w-full md:mb-0 md:w-1/3">
				<h3 class="mb-4 text-xl font-bold">{companyName}</h3>
				<p class="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo eget urna commodo
					bibendum.
				</p>
				<!-- Social media links -->
				<div class="flex space-x-4">
					{#each socialLinks as link}
						<a href={link.href} class="transition duration-150 hover:text-blue-400">
							<SocialIcons
								name={link.icon}
								size={20}
								customClass="hover:scale-110 transition-transform"
							/>
						</a>
					{/each}
				</div>
			</div>
			<!-- Footer links -->
			<div class="flex w-full flex-wrap md:w-2/3">
				{#each footerLinks as section}
					<div class="mb-6 w-1/2 md:w-1/3">
						<h4 class="mb-4 font-bold">{section.title}</h4>
						<ul>
							{#each section.links as link}
								<li class="mb-2">
									<a
										href={link.href}
										class="flex items-center transition duration-150 hover:text-blue-400"
									>
										<SocialIcons name={link.icon} size={16} customClass="mr-2" />
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
		<div class="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400">
			<p>&copy; {currentYear} {companyName}. All rights reserved.</p>
		</div>
	</div>
</footer>
