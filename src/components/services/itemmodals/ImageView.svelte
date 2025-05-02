<!-- src/components/services/itemmodals/ImageView.svelte -->
<script lang="ts">
	export let imageurl: string;
	export let imagealt: string = '';
</script>

<div class="relative h-64 lg:h-full min-h-full">
	<img
		src={imageurl}
		alt={imagealt}
		class="h-full w-full object-cover object-center"
	/>
</div>