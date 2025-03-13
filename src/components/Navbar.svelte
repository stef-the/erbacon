<!-- src/components/Navbar.svelte -->
<script lang="ts">
	// Site navigation items
	/**
	 * @type {any[]}
	 */
	export let navItems: {
		label: string;
		href?: string;
		children?: { label: string; href: string }[];
	}[] = [];

	// Track which dropdown menus are open
	/**
	 * @type {Record<number, { open: boolean }>}
	 */
	let dropdowns: Record<number, { open: boolean }> = {};

	// Reference to each navigation item
	/**
	 * @type {HTMLElement[]}
	 */
	let navItemRefs: HTMLElement[] = [];

	// Toggle dropdown visibility
	/**
	 * @param {number} itemId
	 * @param {MouseEvent} event
	 */
	function toggleDropdown(itemId: number, event: MouseEvent) {
		if (!dropdowns[itemId]) {
			// Initialize dropdown state (true for mouseenter, false for mouseleave)
			dropdowns[itemId] = { open: event.type === 'mouseenter' };
		} else {
			dropdowns[itemId].open = !dropdowns[itemId].open;
		}
	}
</script>

<nav class="sticky top-0 z-10 flex h-16 bg-gray-800 text-white">
	<img src="/ERBCO_main.gif" alt="ERBCO" class="hidden h-16 sm:block" />
	<div class="container">
		<ul class="flex h-16 flex-wrap sm:ml-8">
			{#each navItems as item, index}
				<li
					bind:this={navItemRefs[index]}
					class="flex h-full cursor-pointer items-center transition duration-150 ease-in-out hover:bg-gray-600"
					on:mouseenter={item.children && item.children.length > 0
						? (e) => toggleDropdown(index, e)
						: null}
					on:mouseleave={item.children && item.children.length > 0
						? (e) => toggleDropdown(index, e)
						: null}
				>
					{#if item.children && item.children.length > 0}
						<!-- Dropdown menu item -->
						<button class="flex h-full items-center px-5">
							{item.label}
						</button>

						{#if dropdowns[index] && dropdowns[index].open}
							<ul class="absolute top-16 z-10 bg-gray-800 shadow-lg">
								{#each item.children as child}
									<li>
										<a
											href={child.href}
											title={child.label}
											class="nav-hover-effect block px-5 py-3 transition duration-150 ease-in-out hover:bg-gray-600 hover:font-bold"
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
	<div class="h-16">
		<a
			href="tel:+19163838250"
			class="flex h-16 w-max items-center p-4 transition duration-150 ease-in-out hover:bg-gray-600 sm:mx-4"
			><span class="hidden md:inline">Call Us:</span>&nbsp;<b>+1 (916) 383-8250</b></a
		>
	</div>
	<img src="/ERBCO_get_it_from_bacon.avif" alt="ERBCO" class="hidden md:block" />
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
