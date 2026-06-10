<!-- src/routes/guide/+page.svelte
     Hidden, unlinked staff tutorial (not in the nav, noindex). Share the URL /guide with
     ERBCO staff who maintain the catalog. Mirrors docs/EDITING-THE-WEBSITE.md. -->
<script lang="ts">
	import { COMPANY_PHONE } from '$lib/constants';

	const columns = [
		['name', 'The product name shown on the card (e.g. WANCO Light Towers). Required.'],
		[
			'category',
			'A group name (e.g. AIR TOOLS). Items in the same category get grouped with a filter button.'
		],
		['imageUrl', 'A link to a photo (see "Adding a photo" below). Blank = "Photo coming soon".'],
		['imageAlt', 'A few words describing the photo (helps Google find you).'],
		['brand', 'Manufacturer (e.g. WACKER NEUSON).'],
		['price', 'Shows on Used Equipment. Leave blank to hide.'],
		['description', 'A sentence or two about the product.'],
		['pdf', 'A link to a spec-sheet PDF — adds a "View Docs" button.'],
		['marketplace', 'A Facebook Marketplace listing link — adds a "Marketplace" button.']
	];
</script>

<svelte:head>
	<title>Staff Guide | Edward R. Bacon Company</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="prose lg:prose-lg dark:prose-invert mx-auto max-w-3xl">
	<p class="text-sm font-semibold tracking-wide text-red-600 uppercase dark:text-red-400">
		Staff guide — not linked in the menu
	</p>
	<h1 class="dark:text-slate-50">How to Update the Website</h1>
	<p class="lead text-gray-600 dark:text-slate-300">
		You don't need to know any code. The equipment listings come from one <strong
			>Google Sheet</strong
		>. You edit the sheet, and the website updates itself within a few minutes. Nothing here can
		break the site permanently — if you get stuck, call your developer.
	</p>

	<hr class="dark:border-zinc-700" />

	<h2 class="dark:text-slate-50">The big idea</h2>
	<ul>
		<li>Each <strong>tab</strong> at the bottom of the sheet feeds <strong>one page</strong>.</li>
		<li>Each <strong>row</strong> becomes <strong>one product</strong> on that page.</li>
		<li>The <strong>top row</strong> is the column headings — don't edit or delete it.</li>
	</ul>
	<p>
		Add a row → a product appears. Edit a row → it changes. Delete a row → it disappears. Changes
		show up in a few minutes (refresh the page; a hard refresh — <code>Ctrl/Cmd + Shift + R</code> — helps).
	</p>

	<h2 class="dark:text-slate-50">Which tab feeds which page</h2>
	<ul>
		<li>
			<strong>Truck &amp; Mobile Equipment</strong> → the tab with the Stellar items (Service Cranes,
			TMAX, hooklifts…)
		</li>
		<li><strong>Used Equipment</strong> → the "used" tab; add your used machines here</li>
	</ul>
	<p class="text-sm text-gray-500 dark:text-slate-400">
		New Equipment, About, Fence Rental, and Generators are fixed pages — ask your developer to
		change those.
	</p>

	<h2 class="dark:text-slate-50">What each column means</h2>
	<p>Fill a row left to right. <strong>Only "name" is required.</strong></p>
	<div class="overflow-x-auto">
		<table>
			<thead>
				<tr><th>Column</th><th>What to put</th></tr>
			</thead>
			<tbody>
				{#each columns as [col, meaning]}
					<tr>
						<td><code>{col}</code></td>
						<td>{meaning}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<h2 class="dark:text-slate-50">Adding a product photo</h2>
	<p><strong>Option A — borrow the manufacturer's photo (fastest):</strong></p>
	<ol>
		<li>Open the manufacturer's website and find the product photo.</li>
		<li>Right-click the photo (on a phone: press and hold).</li>
		<li>Choose <strong>"Copy image address"</strong>.</li>
		<li>Click the <code>imageUrl</code> cell for that product and paste.</li>
	</ol>
	<p class="text-sm text-gray-500 dark:text-slate-400">
		If it shows "Photo coming soon" after pasting, that site blocks borrowing — use Option B.
	</p>
	<p>
		<strong>Option B — your own photo:</strong> send the picture files to your developer; they'll
		add them and give you a short link to paste into <code>imageUrl</code>. (Wide, well-lit photos
		with the product filling the frame look best.)
	</p>

	<h2 class="dark:text-slate-50">Adding a spec-sheet PDF</h2>
	<p>
		Put a link in the <code>pdf</code> column to add a "View Docs" button. If the PDF is already on
		the site, the short path works (e.g. <code>air-tools/apt-rock-drills.pdf</code>); otherwise send
		it to your developer.
	</p>

	<h2 class="dark:text-slate-50">Facebook Marketplace</h2>
	<p>
		List the machine on Marketplace and close the deal over the phone — that's the normal, allowed
		way to use it for local items. Two ways to link it here:
	</p>
	<ul>
		<li>
			<strong>One button on Used Equipment:</strong> give your developer your Marketplace storefront link
			once.
		</li>
		<li>
			<strong>A button per machine:</strong> paste a listing link into that row's
			<code>marketplace</code> column.
		</li>
	</ul>

	<h2 class="dark:text-slate-50">Please avoid</h2>
	<ul>
		<li>🚫 Deleting a tab a page uses (clear the <em>rows</em> instead).</li>
		<li>🚫 Editing the top heading row.</li>
		<li>🚫 Changing the sheet's sharing to private — keep it "Anyone with the link → Viewer".</li>
		<li>✅ Renaming tabs, reordering rows, and adding photos are all safe.</li>
	</ul>

	<hr class="dark:border-zinc-700" />

	<p class="text-gray-600 dark:text-slate-300">
		<strong>First time?</strong> Add one used machine with just a <code>name</code>,
		<code>category</code>, and a borrowed <code>imageUrl</code>, refresh the site, and watch it
		appear. Everything else is the same move repeated. Questions? Call {COMPANY_PHONE}.
	</p>
</div>
