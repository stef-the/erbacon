<!-- src/components/services/itemmodals/ItemModal.svelte -->
<script lang="ts">
	import type { ItemData } from './types';
	import ImageView from './ImageView.svelte';
	import PdfViewer from './PdfViewer.svelte';
	import ItemDetails from './ItemDetails.svelte';

	export let item: ItemData;
	export let showPrices: boolean;
	export let closeModal: () => void;
	export let toTitleCase: (text: string) => string;

	// State to control PDF viewer visibility
	let showPdfViewer = false;

	/**
	 * Toggle PDF viewer visibility
	 */
	function togglePdfViewer() {
		showPdfViewer = !showPdfViewer;
	}

	/**
	 * Handle modal content click to prevent closing
	 */
	function handleModalContentClick(event: Event) {
		event.stopPropagation();
	}
</script>

<!-- Wrapper with keyboard handling -->
<div 
	class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
	role="dialog"
	aria-modal="true"
	on:click={closeModal}
	on:keydown={(e) => e.key === 'Escape' && closeModal()}
	tabindex="0"
	aria-hidden="true"
>
	<!-- Modal dialog with proper role -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- To fix later -->
	<div
		class="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white shadow-2xl dark:bg-zinc-900"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		on:click={handleModalContentClick}
		tabindex="0"
	>
		<button
			class="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-600 backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900 dark:bg-zinc-800/80 dark:text-gray-300 dark:hover:bg-zinc-800 dark:hover:text-white"
			on:click={closeModal}
			aria-label="Close modal"
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
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<div class="flex flex-col lg:flex-row">
			<!-- Left side - Image or PDF viewer -->
			<div class="lg:w-1/2">
				{#if showPdfViewer && item.pdf}
					<div class="h-64 lg:h-full">
						<PdfViewer pdfUrl={item.pdf} />
					</div>
				{:else}
					<ImageView 
						imageUrl={item.imageUrl} 
						imageAlt={item.imageAlt || item.name} 
					/>
				{/if}
			</div>

			<!-- Right side - Item details -->
			<ItemDetails 
				{item} 
				{showPrices} 
				{toTitleCase} 
				{togglePdfViewer}
				{showPdfViewer}
			/>
		</div>
	</div>
</div>