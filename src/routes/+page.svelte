<!-- src/routes/+page.svelte -->
<script lang="ts">
	const data: {
    features: { title: string; description: string }[];
  } = {
    features: [
      {
        title: "Feature 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
      },
      {
        title: "Feature 2",
        description: "Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
      },
      {
        title: "Feature 3",
        description: "Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor."
      }
    ]
  };
</script>

<div class="prose lg:prose-xl mx-auto">
	<h2 class="mb-4 text-2xl font-bold">Welcome to our Website</h2>

	<div class="my-6">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus
			hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
			porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl
			tempor.
		</p>

		<p class="mt-4">
			Suspendisse in orci enim. Donec sed ligula in purus vehicula tempus. Praesent hendrerit eros
			in nisi sollicitudin varius. Aliquam erat volutpat. Donec blandit est ut elementum aliquam.
			Quisque euismod tortor ac purus mollis scelerisque.
		</p>
	</div>

	{#if data.features}
		<div class="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each data.features as feature}
				<div class="rounded-lg bg-gray-100 p-6">
					<h3 class="mb-2 text-xl font-semibold">{feature.title}</h3>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	{/if}
</div>
