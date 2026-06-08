<!-- src/lib/Services/ServiceCatalog.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import CategoryHeader from '../../components/services/CategoryHeader.svelte';
	import CategoryFilters from '../../components/services/CategoryFilters.svelte';
	import LayoutToggle from '../../components/services/LayoutToggle.svelte';
	import ItemGrid from '../../components/services/ItemGrid.svelte';
	import ItemList from '../../components/services/ItemList.svelte';
	import ItemModal from '../../components/services/itemmodals/ItemModal.svelte';
	import ContactCta from '../../components/services/ContactCta.svelte';
	import NoData from '../../components/services/NoData.svelte';
	import { toTitleCase } from '../../lib/utils/stringUtils';

	/**
	 * Array of service items to display
	 */
	export let items: Array<{
		name: string;
		description: string;
		imageurl: string;
		imagealt?: string;
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
	export let layout: 'grid' | 'list' = 'grid';

	/**
	 * Error message from the data loader, if loading failed
	 */
	export let error: string | undefined = undefined;

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
		? items.filter((item) => item.category && item.category.toLowerCase() === selectedCategory)
		: items;

	/**
	 * Extract unique categories from items and store them in lowercase
	 */
	$: availableCategories = [
		...new Set(items.filter((item) => item.category).map((item) => item.category!.toLowerCase()))
	].sort();

	/**
	 * On mount, honor a ?category= filter from the URL
	 */
	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const categoryParam = urlParams.get('category');

		if (categoryParam && availableCategories.includes(categoryParam.toLowerCase())) {
			selectedCategory = categoryParam.toLowerCase();
		}
	});

	/**
	 * Open the modal for an item
	 */
	function openModal(index: number) {
		modalItemIndex = index;
		isModalOpen = true;
	}

	/**
	 * Close the modal
	 */
	function closeModal() {
		isModalOpen = false;
		modalItemIndex = null;
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
		<CategoryFilters {availableCategories} {selectedCategory} {setCategory} {toTitleCase} />
	{/if}

	<!-- Layout Toggle -->
	<LayoutToggle bind:layout />

	{#if error}
		<!-- The data loader failed; the parent shows a detailed error banner above. -->
		<NoData
			title="Data could not be loaded"
			message="We couldn't load this list right now. Please try again later."
		/>
	{:else if items.length === 0}
		<NoData />
	{:else if filteredItems.length === 0}
		<NoData title="No Matches" message="No items match the selected category." />
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
