<!-- src/components/services/ProductImage.svelte — renders a product image, falling back to
     a formatted placeholder when the image is missing OR fails to load (e.g. a dead/blocked
     external URL). -->
<script lang="ts">
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	export let src: string | undefined = '';
	export let alt = '';
	export let label = '';
	export let imgClass = '';

	let failed = false;
	// Reset the failed flag whenever the source changes (components are reused across items).
	$: if (src) failed = false;
</script>

{#if src && !failed}
	<img {src} {alt} loading="lazy" class={imgClass} on:error={() => (failed = true)} />
{:else}
	<ImagePlaceholder {label} />
{/if}
