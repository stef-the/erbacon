<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
	import SocialIcons from '../../components/icons/SocialIcons.svelte';
</script>

<section class="prose lg:prose-lg mx-auto">
	<h1 class="text-3xl font-bold">Contact Us</h1>

	<div class="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
		<div>
			<h2 class="text-2xl font-semibold">Get in Touch</h2>
			<p class="mb-6">
				We're here to answer any questions about our products and services. Reach out to us and
				we'll respond as soon as we can.
			</p>

			<div class="mb-4 flex items-start">
				<SocialIcons name="Location" size={24} customClass="mt-1 mr-2 h-5 w-5 text-gray-600" />
				<div>
					<h3 class="text-lg font-medium">Address</h3>
					<p>
						123 Construction Way<br />
						San Francisco, CA 94103
					</p>
				</div>
			</div>

			<div class="mb-4 flex items-start">
				<SocialIcons name="Phone" size={24} customClass="mt-1 mr-2 h-5 w-5 text-gray-600" />
				<div>
					<h3 class="text-lg font-medium">Phone</h3>
					<p>(415) 555-1234</p>
				</div>
			</div>

			<div class="mb-4 flex items-start">
				<SocialIcons name="Mail" size={24} customClass="mt-1 mr-2 h-5 w-5 text-gray-600" />
				<div>
					<h3 class="text-lg font-medium">Email</h3>
					<p>info@erbacon.com</p>
				</div>
			</div>
		</div>

		<div class="rounded-lg bg-white p-6 shadow">
			<h2 class="mb-4 text-2xl font-semibold">Send Us a Message</h2>
			<form>
				<div class="mb-4">
					<label for="name" class="mb-2 block font-medium">Name</label>
					<input
						type="text"
						id="name"
						class="w-full rounded-md border border-gray-300 p-2"
						placeholder="Your Name"
						required
					/>
				</div>

				<div class="mb-4">
					<label for="email" class="mb-2 block font-medium">Email</label>
					<input
						type="email"
						id="email"
						class="w-full rounded-md border border-gray-300 p-2"
						placeholder="Your Email"
						required
					/>
				</div>

				<div class="mb-4">
					<label for="subject" class="mb-2 block font-medium">Subject</label>
					<input
						type="text"
						id="subject"
						class="w-full rounded-md border border-gray-300 p-2"
						placeholder="Subject"
					/>
				</div>

				<div class="mb-4">
					<label for="message" class="mb-2 block font-medium">Message</label>
					<textarea
						id="message"
						rows="4"
						class="w-full rounded-md border border-gray-300 p-2"
						placeholder="Your Message"
						required
					></textarea>
				</div>

				<button
					type="submit"
					class="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
				>
					Send Message
				</button>
			</form>
		</div>
	</div>

	<div class="mt-8">
		<h2 class="text-2xl font-semibold">Our Location</h2>
		<div class="mt-4 h-64 w-full rounded-lg bg-gray-200">
			<!-- Replace with actual map implementation if desired -->
			<div class="flex h-full items-center justify-center">
				<p class="text-gray-500">
					Map placeholder - integrate Google Maps or other map service here
				</p>
			</div>
		</div>
	</div>
</section>
