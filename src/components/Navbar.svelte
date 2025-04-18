<!-- src/components/Navbar.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	/**
	 * @type {Array<{label: string, href: string, children?: Array<{label: string, href: string}>}>}
	 */
	export let navItems: Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }> = [];

	/** @type {HTMLElement[]} */
	let navItemRefs = [];
	/** @type {Array<{open: boolean}>} */
	let dropdowns: Array<{ open: boolean }> = [];
	/** @type {boolean} */
	let mobileMenuOpen = false;

	// Initialize dropdowns
	onMount(() => {
		dropdowns = navItems.map(() => ({ open: false }));
		navItemRefs = navItems.map(() => null) as unknown as HTMLElement[];
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

<nav class="sticky top-0 z-10 flex h-16 flex-wrap bg-gray-800 text-white shadow-lg dark:bg-zinc-900">
	<div class="flex w-full items-center justify-between">
		<!-- Logo -->
		<a href="/" class="overflow-hidden" style="background-color: {logoColour};">
			<img src="/icons/RED_LOGO_fix.bmp" alt="ERBCO" class="h-16 transition duration-150 ease-in-out scale-100 hover:scale-105" />
		</a>

		<!-- Desktop navigation -->
		<div class="hidden flex-grow sm:flex">
			<ul class="flex h-16 flex-wrap sm:ml-8">
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
							<a href={item.href} class="h-full"><button class="flex h-full items-center px-5 cursor-pointer hover:bg-gray-600 dark:hover:bg-zinc-700">
								{item.label}
							</button></a>
							{#if dropdowns[index] && dropdowns[index].open}
								<ul class="absolute top-16 z-10 bg-gray-800 shadow-lg dark:bg-zinc-900">
									{#each item.children as child}
										<li>
											<a
												href={child.href}
												title={child.label}
												class="nav-hover-effect block px-5 py-3 transition duration-150 ease-in-out hover:bg-gray-600 hover:font-bold dar:hover:bg-zinc-700"
											>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						{:else}
							<!-- Regular menu item -->
							<a href={item.href} class="flex h-full items-center px-5">
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<!-- Phone number -->
		<div class="h-16 sm:flex ml-auto">
			<a
				href="tel:+19163838250"
				class="text-lg flex h-16 w-max items-center p-4 transition duration-150 ease-in-out hover:bg-gray-600 sm:ml-4 dark:hover:bg-zinc-700"
				><b>+1 (916) 383-8250</b></a
			>
		</div>

		<!-- Mobile menu button -->
		<button
			class="px-4 h-16 text-white cursor-pointer hover:bg-gray-600 focus:outline-none sm:hidden dark:hover:bg-zinc-700"
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
		<div class="w-full shadow-xl border-t border-gray-700 bg-gray-800 sm:hidden dark:border-zinc-700 dark:bg-zinc-800">
			<ul class="w-full">
				{#each navItems as item, index}
					<li class="border-b border-gray-700 dark:border-zinc-700">
						{#if item.children && item.children.length > 0}
							<!-- Mobile dropdown item -->
							<button
								class="flex w-full items-center justify-between px-5 py-3 cursor-pointer hover:bg-gray-600 dar:hover:bg-zinc-700"
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
											class="block w-full text-left border-t border-gray-600 px-8 py-2 hover:bg-gray-600 dark:border-zinc-600 dark:hover:bg-zinc-800"
										>
											<a href={child.href} class="w-full block">
												{child.label}
											</a>
										</button>
									{/each}
								</ul>
							{/if}
						{:else}
							<!-- Mobile regular item -->
							<a href={item.href} class="block w-full px-5 py-3 hover:bg-gray-600 dark:hover:bg-zinc-800" on:click={closeNav}>
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
