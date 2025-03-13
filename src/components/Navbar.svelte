<!-- src/components/Navbar.svelte -->
<script>
	/**
	 * @type {any[]}
	 */
	export let navItems = [];

	// Track which dropdown menus are open
	/**
	 * @type {Record<number, boolean>}
	 */
	let openDropdowns = {};

	// Toggle dropdown visibility
	/**
	 * @param {number} itemId
	 */
	function toggleDropdown(itemId) {
		openDropdowns = {
			...openDropdowns,
			[itemId]: !openDropdowns[itemId]
		};
	}
</script>

<nav class="sticky top-0 z-10 flex h-16 bg-gray-800 text-white">
	<img src="/ERBCO_main.gif" alt="ERBCO" class="m-0k h-16" />
	<div class="container">
		<ul class="flex h-16 flex-wrap ml-8">
			{#each navItems as item, index}
				<li
					class=" flex h-full items-center px-5 transition duration-150 ease-in-out hover:bg-gray-600"
				>
					{#if item.children && item.children.length > 0}
						<!-- Dropdown menu item -->
						<button on:click={() => toggleDropdown(index)} class="flex items-center">
							{item.label}
							<svg
								class="ml-1 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								></path>
							</svg>
						</button>

						{#if openDropdowns[index]}
							<ul class="absolute left-0 z-10 mt-0 w-48 bg-gray-700 py-1 shadow-lg">
								{#each item.children as child}
									<li>
										<a href={child.href} class="block">
											{child.label}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					{:else}
						<!-- Regular menu item -->
						<a href={item.href} class="">
							{item.label}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex h-16 flex-wrap items-center" >
		<a href="tel:+19163838250" class="w-max mr-8">Call Us: <b>+1 (916) 383-8250</b></a>
	</div>
	<img src="/ERBCO_get_it_from_bacon.avif" alt="ERBCO" class="">
</nav>
