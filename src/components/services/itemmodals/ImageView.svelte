<!-- src/components/services/itemmodals/ImageView.svelte -->
<script lang="ts">
	export let imageurl: string;
	export let imagealt: string = '';

	let containerEl: HTMLDivElement;
	let isHovering = false;
	// Mouse position as 0-1 ratio within the container
	let mouseX = 0.5;
	let mouseY = 0.5;

	// Scale factor — larger = more of the cropped image is explorable
	const scale = 1.35;
	// Max translation: the image overflows by (scale-1) of its size.
	// Divide by scale because translate % is applied before the scale visually amplifies it.
	const maxShift = ((scale - 1) / (2 * scale)) * 100;

	$: translateX = isHovering ? (0.5 - mouseX) * maxShift * 2 : 0;
	$: translateY = isHovering ? (0.5 - mouseY) * maxShift * 2 : 0;

	function handleMouseMove(e: MouseEvent) {
		if (!containerEl) return;
		const rect = containerEl.getBoundingClientRect();
		mouseX = (e.clientX - rect.left) / rect.width;
		mouseY = (e.clientY - rect.top) / rect.height;
	}

	function handleMouseEnter() {
		isHovering = true;
	}

	function handleMouseLeave() {
		isHovering = false;
		mouseX = 0.5;
		mouseY = 0.5;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative h-full w-full overflow-hidden"
	bind:this={containerEl}
	on:mousemove={handleMouseMove}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<img
		src={imageurl}
		alt={imagealt}
		class="h-full w-full object-cover transition-transform duration-300 ease-out"
		style="transform: scale({isHovering ? scale : 1}) translate({translateX}%, {translateY}%);"
	/>
</div>
