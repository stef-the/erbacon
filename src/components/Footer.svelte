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

<footer class="bg-gray-800 py-8 text-white dark:bg-zinc-900">
	<div class="container mx-auto px-4">
		<div class="px-6 sm:px-0 sm:grid sm:grid-cols-4">
			<!-- Company info -->
			<div class="sm:px-4 sm:col-span-2 pb-2">
				<h3 class="mb-4 text-xl font-bold">{companyName}</h3>
				<p class="mb-4">Family values working for you since 1910.</p>
				<!-- Social media links -->
				<div class="flex space-x-4 pt-1">
					{#each socialLinks as link}
						<a href={link.href} class="transition duration-150 hover:text-blue-400 dark:hover:text-blue-500">
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
			{#each footerLinks as section}
				<div class="inline mt-4 sm:mt-0 px-4">
					<h4 class="mb-4 font-bold">{section.title}</h4>
					<ul>
						{#each section.links as link}
							<li class="mb-2">
								<a
									href={link.href}
									class="flex items-center transition duration-150 hover:text-blue-400 dark:hover:text-blue-500"
									target={link.target ? link.target : '_self'}
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
		<div class="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400 dark:border-zinc-700 dark:text-zinc-300">
			<p>&copy; {currentYear} {companyName}. All rights reserved.</p>
		</div>
	</div>
</footer>
