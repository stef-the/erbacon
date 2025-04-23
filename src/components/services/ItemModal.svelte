<!-- src/components/services/ItemModal.svelte -->
<script lang="ts">
	export let item: {
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
	};
	export let showPrices: boolean;
	export let closeModal: () => void;
	export let toTitleCase: (text: string) => string;

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
			<div class="lg:w-1/2">
				<div class="relative h-64 lg:h-full">
					<img
						src={item.imageUrl}
						alt={item.imageAlt || item.name}
						class="h-full w-full object-cover"
					/>
				</div>
			</div>

			<div class="flex-1 p-6 lg:p-8">
				<div class="mb-4 flex flex-wrap items-center gap-3">
					<h2 id="modal-title" class="text-2xl font-bold dark:text-slate-50">
						{item.name}
					</h2>

					{#if item.category}
						<span class="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-zinc-700 dark:text-slate-300">
							{toTitleCase(item.category)}
						</span>
					{/if}
				</div>

				{#if showPrices && item.price}
					<p class="mb-4 font-mono text-xl font-bold text-gray-800 dark:text-slate-300">
						{item.price}
					</p>
				{/if}

				<div class="mb-6 prose max-w-none dark:prose-invert">
					<p class="text-gray-700 dark:text-slate-300">
						{item.description}
					</p>
				</div>

				<div class="mt-6 border-t border-gray-200 pt-6 dark:border-zinc-700">
					<h3 class="mb-4 text-lg font-semibold dark:text-slate-50">Specifications</h3>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						{#if item.brand}
							<div>
								<span class="font-semibold dark:text-slate-50">Brand:</span>
								<span class="dark:text-slate-300">{item.brand}</span>
							</div>
						{/if}
						{#if item.model}
							<div>
								<span class="font-semibold dark:text-slate-50">Model:</span>
								<span class="dark:text-slate-300">{item.model}</span>
							</div>
						{/if}
						{#if item.availability}
							<div>
								<span class="font-semibold dark:text-slate-50">Availability:</span>
								<span class="dark:text-slate-300">{item.availability}</span>
							</div>
						{/if}
					</div>

					{#if item.features}
						<div class="mt-4">
							<span class="font-semibold dark:text-slate-50">Features:</span>
							<p class="dark:text-slate-300">{item.features}</p>
						</div>
					{/if}
					{#if item.details}
						<div class="mt-4">
							<span class="font-semibold dark:text-slate-50">Details:</span>
							<p class="dark:text-slate-300">{item.details}</p>
						</div>
					{/if}
				</div>

				{#if item.contactInfo}
					<div class="mt-6">
						<p class="font-semibold dark:text-slate-50">Contact Information:</p>
						<p class="dark:text-slate-300">{item.contactInfo}</p>
					</div>
				{/if}

				<div class="mt-8 flex justify-end">
					<a
						href="/contact"
						class="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
					>
						Inquire About This Item
					</a>
				</div>
			</div>
		</div>
	</div>
</div>