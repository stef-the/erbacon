<!-- src/lib/Services/ServiceCatalog.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import CategoryHeader from '../../components/services/CategoryHeader.svelte';
	import CategoryFilters from '../../components/services/CategoryFilters.svelte';
	import LayoutToggle from '../../components/services/LayoutToggle.svelte';
	import ItemGrid from '../../components/services/ItemGrid.svelte';
	import ItemList from '../../components/services/ItemList.svelte';
	import ItemModal from '../../components/services/ItemModal.svelte';
	import ContactCta from '../../components/services/ContactCta.svelte';
	import LoadingIndicator from '../../components/services/LoadingIndicator.svelte';
	import { toTitleCase } from '../../lib/utils/stringUtils';

	/**
	 * Array of service items to display
	 */
	export let items: Array<{
		name: string;
		description: string;
		imageUrl: string;
		imageAlt?: string;
		price?: string;
		details?: string;
		brand?: string;
		model?: string;
		features?: string;
		availability?: string;
		contactInfo?: string;
		category?: string;
	}> = [];

	/**
	 * Category information
	 */
	export let categoryInfo = {
		title: 'Product Catalog',
		description: 'Browse our available services and products',
		contactCta: 'Contact us for more information',
		showPrices: false
	};

	/**
	 * Layout style: 'grid' or 'list'
	 */
	export let layout = 'grid';

	/**
	 * Flag to show detailed information when available
	 */
	// svelte-ignore export_let_unused
	// Element is used in GenericServicePage.svelte
	export let showDetails: boolean = false;

	/**
	 * Currently expanded item index
	 */
	let expandedIndex: number | null = null;

	/**
	 * Whether the modal view is open
	 */
	let isModalOpen = false;

	/**
	 * Currently viewed item in the modal
	 */
	let modalItemIndex: number | null = null;

	/**
	 * Available categories extracted from items
	 */
	let availableCategories: string[] = [];

	/**
	 * Currently selected category filter
	 */
	let selectedCategory: string | null = null;

	/**
	 * Filtered items based on category selection
	 */
	$: filteredItems = selectedCategory
		? items.filter(item => item.category && item.category.toLowerCase() === selectedCategory)
		: items;

	/**
	 * Extract unique categories from items and store them in lowercase
	 */
	$: {
		const categories = new Set<string>();
		items.forEach(item => {
			if (item.category) {
				categories.add(item.category.toLowerCase());
			}
		});
		availableCategories = Array.from(categories).sort();
	}

	// Timer variables for loading state
	let elapsedTime = 2;
	let timerInterval: ReturnType<typeof setInterval> | null = null;
	let showTimer = false;

	/**
	 * Initialize component and check for URL parameters
	 */
	onMount(() => {
		// Start the timer
		const startTime = Date.now();
		
		// Check if there's a category parameter in the URL
		const urlParams = new URLSearchParams(window.location.search);
		const categoryParam = urlParams.get('category');
		
		if (categoryParam && availableCategories.includes(categoryParam.toLowerCase())) {
			selectedCategory = categoryParam.toLowerCase();
		}

		// Start the timer if items are still loading
		if (items.length === 0) {
			// Set a timeout to display the timer after 2 seconds
			setTimeout(() => {
				showTimer = true;
				timerInterval = setInterval(() => {
					elapsedTime = ((Date.now() - startTime) / 1000).toFixed(1);
				}, 100); // Update every 100ms for smooth decimal increments
			}, 2000);
		}

		return () => {
			// Clean up the timer when component is destroyed
			if (timerInterval) {
				clearInterval(timerInterval);
			}
		};
	});

	// Watch for items loading completion and stop the timer
	$: if (items.length > 0 && timerInterval) {
		clearInterval(timerInterval);
		timerInterval = null;
	}

	/**
	 * Toggle expanded state of an item
	 */
	function toggleExpand(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
	}

	/**
	 * Open the modal for an item
	 */
	function openModal(index: number) {
		modalItemIndex = index;
		isModalOpen = true;
		document.body.classList.add('overflow-hidden');
	}

	/**
	 * Close the modal
	 */
	function closeModal() {
		isModalOpen = false;
		modalItemIndex = null;
		document.body.classList.remove('overflow-hidden');
	}

	/**
	 * Set the category filter
	 */
	function setCategory(category: string | null) {
		selectedCategory = category;
		
		// Update URL to reflect category selection without page reload
		const url = new URL(window.location.href);
		if (category) {
			url.searchParams.set('category', category.toLowerCase());
		} else {
			url.searchParams.delete('category');
		}
		
		history.replaceState(null, '', url.toString());
	}
</script>

<div class="service-catalog pt-4">
	<!-- Category header -->
	<CategoryHeader title={categoryInfo.title} description={categoryInfo.description} />

	<!-- Category filters -->
	{#if availableCategories.length > 0}
		<CategoryFilters
			{availableCategories}
			{selectedCategory}
			{setCategory}
			{toTitleCase}
		/>
	{/if}

	<!-- Layout Toggle -->
	<LayoutToggle bind:layout />

	{#if filteredItems.length === 0}
		<LoadingIndicator 
			isLoading={items.length === 0} 
			{showTimer} 
			{elapsedTime} 
		/>
	{:else}
		<!-- Grid or List Layout -->
		{#if layout === 'grid'}
			<ItemGrid 
				items={filteredItems} 
				allItems={items}
				showPrices={categoryInfo.showPrices} 
				{openModal}
				{toTitleCase}
			/>
		{:else}
			<ItemList 
				items={filteredItems} 
				allItems={items}
				showPrices={categoryInfo.showPrices} 
				{openModal}
				{toTitleCase}
			/>
		{/if}
	{/if}

	<!-- Contact CTA -->
	{#if categoryInfo.contactCta}
		<ContactCta cta={categoryInfo.contactCta} />
	{/if}

	<!-- Modal View -->
	{#if isModalOpen && modalItemIndex !== null && items[modalItemIndex]}
		<ItemModal 
			item={items[modalItemIndex]} 
			showPrices={categoryInfo.showPrices}
			{closeModal}
			{toTitleCase}
		/>
	{/if}
</div>

<style>
	:global(body.overflow-hidden) {
		overflow: hidden;
	}
</style>