<!-- src/components/Navbar.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	/**
	 * @type {Array<{label: string, href: string, children?: Array<{label: string, href: string}>}>}
	 */
	export let navItems: Array<{
		label: string;
		href: string;
		children?: Array<{ label: string; href: string }>;
	}> = [];

	/** @type {HTMLElement[]} */
	let navItemRefs = [];
	/** @type {Array<{open: boolean}>} */
	let dropdowns: Array<{ open: boolean }> = [];
	/** @type {boolean} */
	let mobileMenuOpen = false;
	/** @type {boolean} */
	let logoFixed = true;
	/** @type {HTMLElement | null} */
	let navElement: HTMLElement | null = null;

	// Initialize dropdowns and scroll listener
	onMount(() => {
		dropdowns = navItems.map(() => ({ open: false }));
		navItemRefs = navItems.map(() => null) as unknown as HTMLElement[];

		// Handle scroll to toggle logo position based on collision with navbar
		const handleScroll = () => {
			if (!navElement) return;

			const navRect = navElement.getBoundingClientRect();
			const logoTopPosition = 16; // top-4 = 1rem = 16px

			// Logo becomes fixed when navbar top is below logo position
			// Logo rejoins navbar when they collide (navbar top <= logo bottom)
			logoFixed = navRect.top > logoTopPosition + 64; // 64px is logo height (h-16)
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check

		return () => window.removeEventListener('scroll', handleScroll);
	});

	/**
	 * Toggle dropdown menu
	 * @param {number} index
	 * @param {MouseEvent} event
	 */
	function toggleDropdown(index: number, event: MouseEvent) {
		if (event.type === 'mouseenter') {
			dropdowns[index].open = true;
		} else if (event.type === 'mouseleave') {
			dropdowns[index].open = false;
		}
		dropdowns = [...dropdowns];
	}

	/**
	 * Toggle mobile menu open/closed
	 */
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	/**
	 * Toggle mobile submenu open/closed
	 * @param {number} index
	 */
	function toggleMobileSubmenu(index: number) {
		dropdowns[index].open = !dropdowns[index].open;
		dropdowns = [...dropdowns];
	}

	/**
	 * Close nav and all submenus
	 */
	function closeNav() {
		mobileMenuOpen = false;
		dropdowns = navItems.map(() => ({ open: false }));
		dropdowns = [...dropdowns];
	}

	// Logo colour (hex)
	const logoColour = '#f62220';
</script>

<nav
	bind:this={navElement}
	class="sticky top-0 z-10 h-16 bg-gray-800 text-white shadow-lg dark:bg-zinc-900"
>
	<!-- Logo - positioned fixed when at top, rejoins navbar on scroll -->
	<a
		href="/"
		class="overflow-hidden transition-all duration-300 ease-in-out"
		class:fixed={logoFixed}
		class:top-4={logoFixed}
		class:left-4={logoFixed}
		class:z-20={logoFixed}
		class:absolute={!logoFixed}
		class:top-0={!logoFixed}
		class:left-0={!logoFixed}
		class:rounded={logoFixed}
		style="background-color: {logoColour};"
	>
		<img
			src="/icons/RED_LOGO_fix.bmp"
			alt="ERBCO"
			class:h-24={logoFixed}
			class:h-16={!logoFixed}
			class="scale-100 transition duration-150 ease-in-out hover:scale-105"
		/>
	</a>

	<div class="flex h-full w-full items-center justify-between pl-20">
		<!-- Desktop navigation -->
		<div class="hidden flex-grow sm:flex">
			<ul class="flex h-16 flex-1 flex-wrap justify-evenly sm:ml-8">
				{#each navItems as item, index}
					<li
						bind:this={navItemRefs[index]}
						class="flex h-full cursor-pointer items-center transition duration-150 ease-in-out hover:bg-gray-600 dark:hover:bg-zinc-700"
						on:mouseenter={item.children && item.children.length > 0
							? (e) => toggleDropdown(index, e)
							: null}
						on:mouseleave={item.children && item.children.length > 0
							? (e) => toggleDropdown(index, e)
							: null}
					>
						{#if item.children && item.children.length > 0}
							<!-- Dropdown menu item -->
							<a href={item.href} class="h-full"
								><button
									class="flex h-full cursor-pointer items-center px-5 text-lg hover:bg-gray-600 dark:hover:bg-zinc-700"
								>
									{item.label}
								</button></a
							>
							{#if dropdowns[index] && dropdowns[index].open}
								<ul class="absolute top-16 z-10 bg-gray-800 shadow-lg dark:bg-zinc-900">
									{#each item.children as child}
										<li>
											<a
												href={child.href}
												title={child.label}
												class="nav-hover-effect dar:hover:bg-zinc-700 block px-5 py-3 text-lg transition duration-150 ease-in-out hover:bg-gray-600 hover:font-bold"
											>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						{:else}
							<!-- Regular menu item -->
							<a href={item.href} class="flex h-full items-center px-5 text-lg">
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<!-- Image on right side -->
		<div class="ml-auto h-16 sm:flex">
			<div class="flex h-16 cursor-pointer items-center overflow-hidden">
				<img
					src="/icons/ERBCO_get_it_from_bacon.avif"
					alt="ERBCO - Get it from Bacon"
					class="h-full w-auto object-contain transition duration-150 ease-in-out hover:scale-105"
				/>
			</div>
		</div>

		<!-- Mobile menu button -->
		<button
			class="h-16 cursor-pointer px-4 text-white hover:bg-gray-600 focus:outline-none sm:hidden dark:hover:bg-zinc-700"
			on:click={toggleMobileMenu}
			aria-label="Toggle mobile menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
				/>
			</svg>
		</button>
	</div>

	<!-- Mobile navigation drawer -->
	{#if mobileMenuOpen}
		<div
			class="w-full border-t border-gray-700 bg-gray-800 shadow-xl sm:hidden dark:border-zinc-700 dark:bg-zinc-800"
		>
			<ul class="w-full">
				{#each navItems as item, index}
					<li class="border-b border-gray-700 dark:border-zinc-700">
						{#if item.children && item.children.length > 0}
							<!-- Mobile dropdown item -->
							<button
								class="dar:hover:bg-zinc-700 flex w-full cursor-pointer items-center justify-between px-5 py-3 hover:bg-gray-600"
								on:click={() => toggleMobileSubmenu(index)}
							>
								<span>{item.label}</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 transition-transform duration-200"
									class:transform={dropdowns[index].open}
									class:rotate-180={dropdowns[index].open}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							{#if dropdowns[index].open}
								<ul class="bg-gray-700 dark:bg-zinc-700">
									{#each item.children as child}
										<button
											on:click={closeNav}
											class="block w-full border-t border-gray-600 px-8 py-2 text-left hover:bg-gray-600 dark:border-zinc-600 dark:hover:bg-zinc-800"
										>
											<a href={child.href} class="block w-full">
												{child.label}
											</a>
										</button>
									{/each}
								</ul>
							{/if}
						{:else}
							<!-- Mobile regular item -->
							<a
								href={item.href}
								class="block w-full px-5 py-3 hover:bg-gray-600 dark:hover:bg-zinc-800"
								on:click={closeNav}
							>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style>
	:global(.nav-hover-effect::after) {
		display: block;
		content: attr(title);
		font-weight: bold;
		height: 1px;
		color: transparent;
		overflow: hidden;
		visibility: hidden;
	}
</style>
