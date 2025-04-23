<!-- src/components/services/LoadingIndicator.svelte -->
<script lang="ts">
	export let isLoading: boolean;
	export let showTimer: boolean;
	export let elapsedTime: string | number;
</script>

<div class="py-12 text-center">
	<p class="text-xl text-gray-500 dark:text-slate-300">
		{#if isLoading}
			Loading data<span class="loading-dots"></span>
			{#if showTimer}
				<span class="timer">({elapsedTime}s)</span>
			{/if}
		{:else}
			No items found for the selected category.
		{/if}
	</p>
</div>

<style>
	.loading-dots::after {
		content: "";
		animation: ellipsis 1.5s infinite;
	}

	@keyframes ellipsis {
		0% {
			content: "";
		}
		25% {
			content: ".";
		}
		50% {
			content: "..";
		}
		75% {
			content: "...";
		}
	}

	.timer {
		margin-left: 0.5rem;
		font-size: 0.9em;
		opacity: 0.8;
	}
</style>