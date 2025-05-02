<!-- src/components/services/itemmodals/ImageView.svelte -->
<script lang="ts">
	export let imageUrl: string;
	export let imageAlt: string = '';
</script>

<div class="relative h-64 lg:h-full min-h-full">
	<img
		src={imageUrl}
		alt={imageAlt}
		class="h-full w-full object-cover object-center"
	/>
</div>