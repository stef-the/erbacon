# Edward R. Bacon Company — Website

Marketing + equipment-catalog site for ERBCO (erbacon.pages.dev), built with **SvelteKit** and deployed to **Cloudflare Pages**. The equipment catalog is driven by a shared **Google Sheet**, so non-technical staff can update listings without touching code.

> **Just want to update what's on the website?** You don't need this file. See **[docs/EDITING-THE-WEBSITE.md](docs/EDITING-THE-WEBSITE.md)** — written for non-developers.

---

## How it works (the 2-minute version)

- The catalog pages (**Truck & Mobile Equipment**, **Used Equipment**) read **one tab** of a Google Sheet as CSV at request time. Add/edit a **row** → the change shows up on the live site within a few minutes. **No deploy needed.**
- Some pages are **static content** (hand-written in code): Home, About, New Equipment, Site Services – Fence Rental, and the Generators brochure. Changing those needs a code edit + push.
- Company contact info (phone, address, email, tagline) lives in one file: `src/lib/constants.ts`.
- Which sheet tab feeds which page lives in one file: `src/lib/sheets.ts`.

```
Google Sheet (one tab per catalog page)
        │  CSV export, fetched server-side in +page.server.ts
        ▼
SvelteKit load() → ServiceData.ts (parse + normalize) → ServiceCatalog UI
                    (grid/list cards, category filters, photo + PDF modal)
```

## Tech stack

| Area            | Choice                                                                           |
| --------------- | -------------------------------------------------------------------------------- |
| Framework       | SvelteKit 2 / Svelte 5 (legacy `export let` / `$:` syntax — **not** runes)       |
| Styling         | Tailwind CSS 4 (brand accent: **red-600**; dark mode via `prefers-color-scheme`) |
| Hosting         | Cloudflare Pages (`@sveltejs/adapter-cloudflare`)                                |
| Data            | Google Sheets (CSV export) + static PDFs/images in `static/`                     |
| Package manager | **pnpm** (enforced — `npm install` is blocked by a preinstall guard)             |
| Node            | **>= 20.19** (pinned to 22.13.0 in `.nvmrc`; required by eslint 10 / vite 7)     |

## Local development

```bash
pnpm install   # use pnpm, not npm
pnpm run dev   # http://localhost:5173  — no .env needed; sheet config is in code
```

Scripts:

```bash
pnpm run check    # svelte-check type-check — must report 0 errors
pnpm run lint     # prettier --check + eslint
pnpm run format   # prettier --write .
pnpm run build    # production build (Cloudflare adapter)
pnpm run preview  # preview the production build locally
pnpm run test:unit -- --run   # unit tests (vitest)
```

Before pushing, the green bar is: **`pnpm run lint` clean, `pnpm run check` = 0 errors, `pnpm run build` succeeds.**

## Pages

| Route                    | Page                                             | Source                                            |
| ------------------------ | ------------------------------------------------ | ------------------------------------------------- |
| `/`                      | Home                                             | static                                            |
| `/about`                 | About Us                                         | static                                            |
| `/products`              | Products index (cards)                           | static                                            |
| `/products/construction` | **New Equipment** (category list)                | static                                            |
| `/products/trucks`       | **Truck & Mobile Equipment**                     | Google Sheet (`truckEquipment`)                   |
| `/products/used`         | Used Equipment                                   | Google Sheet (`usedEquipment`)                    |
| `/services`              | Services index (cards)                           | static                                            |
| `/services/generators`   | Generators & Power Services (on-site PDF viewer) | static + `static/services/generator-services.pdf` |
| `/services/project-site` | Site Services – Fence Rental                     | static                                            |
| `/services/fencing`      | Fencing                                          | Google Sheet (`fencing`) — **not linked in nav**  |

## Sheet configuration (`src/lib/sheets.ts`)

`SHEET_ID` is the long id in the sheet URL; each `SHEET_GIDS` value is the `gid=` number of a tab. Editing sheet **rows** updates the site live; you only edit this file to point a page at a _different_ tab.

> A tab's `gid` stays the same when you **rename** it, but **changes if you delete & recreate** the tab. If a catalog page goes blank, a gid likely changed — update it here and redeploy.
> The sheet must be shared **Anyone with the link → Viewer**, or the site can't read it (the page will show a clear error instead of blank).

## Editing site copy & contact info

- **Phone / email / address / tagline:** `src/lib/constants.ts` (`COMPANY_*`). Used across the header, footer, JSON-LD, and CTAs.
- **`MARKETPLACE_URL`** (in constants.ts): paste ERBCO's Facebook Marketplace storefront URL to show a "Browse our Facebook Marketplace" button on Used Equipment; blank = hidden.
- **`APP_VERSION`** (in constants.ts): the greyed build version shown in the footer.
- **Nav menu / dropdowns:** `navItems` in `src/routes/+layout.svelte`.
- **Static page wording:** the relevant `src/routes/**/+page.svelte`.

## Project layout

```
src/
  routes/
    +layout.svelte          site shell: hero, navbar, footer, nav menu, JSON-LD
    +page.svelte            Home
    about/                  About (static)
    products/
      +page.svelte          Products index cards
      construction/         New Equipment (static category list)
      trucks/               Truck & Mobile Equipment (sheet-driven)
      used/                 Used Equipment (sheet-driven)
    services/
      +page.svelte          Services index cards
      generators/           on-site Generators PDF viewer
      project-site/         Site Services – Fence Rental (static)
      fencing/              Fencing (sheet-driven, unlinked)
  lib/
    constants.ts            company info, MARKETPLACE_URL, APP_VERSION
    sheets.ts               sheet id + per-page tab GIDs
    Services/
      ServicePageLoader.ts  builds the CSV URL, fetches, returns {items, categoryInfo, error}
      ServiceData.ts        fetch + parse CSV; normalize PDF/image asset paths; error surfacing
      GenericServicePage.svelte   page template (intro, catalog, features, CTA)
      ServiceCatalog.svelte       grid/list + category filter + modal orchestration
    utils/stringUtils.ts    toTitleCase
  components/
    Navbar.svelte, Footer.svelte, icons/SocialIcons.svelte
    services/
      CategoryHeader, CategoryFilters, LayoutToggle, ItemGrid, ItemList,
      ContactCta, NoData, ImagePlaceholder, ProductImage
      itemmodals/  ItemModal, ItemDetails, ImageView, PdfViewer, PdfSearchBar, types.ts
static/
  icons/        logo + "get it from bacon" tagline
  products/     spec-sheet PDFs by category
  truck-equipment/  Stellar PDFs + gallery photos
  services/     generator-services.pdf, fence-rental.pdf
  video/        hero background videos
docs/           human guides
```

## How catalog data flows (for developers)

1. A catalog route's `+page.server.ts` calls `loadServicePageData({ serviceType, dataSheetId, dataSheetGid, defaultInfo }, event)`.
2. `ServicePageLoader` builds the Google Sheets CSV export URL and calls `fetchServiceData` with `event.fetch`, and sets a cache-control header. On success it returns `{ items, categoryInfo }`; on failure `{ items: [], categoryInfo, error }`.
3. `ServiceData.fetchServiceData` fetches and parses the CSV (papaparse), throwing **detailed** errors (bad GID/HTTP, unshared-sheet HTML, network) rather than failing silently, and **normalizes** each row's `imageurl`/`pdf` paths (full URLs pass through; known static folders are site-rooted; bare paths go under `/products/`).
4. `GenericServicePage` → `ServiceCatalog` render the items as grid/list cards with a category filter; clicking opens the modal (`ImageView` photo with hover-zoom, or `PdfViewer`). Empty data shows `NoData`; missing/broken images show `ProductImage`'s "Photo coming soon" placeholder.

Sheet columns recognized per row: `name` (required), `category`, `imageUrl`, `imageAlt`, `price`, `brand`, `model`, `description`, `features`, `details`, `availability`, `contactInfo`, `pdf`, `marketplace` (see the editing guide).

## Deployment

Cloudflare Pages builds on push — **no environment variables required**.

1. Build command `pnpm run build`, output directory `.svelte-kit/cloudflare`.
2. Push to the deployed branch (`main`) → Cloudflare builds and publishes automatically.
3. The Node version comes from `.nvmrc` (22.13.0). Don't set a `NODE_VERSION` that's below 20.19 or the build fails (`ERR_PNPM_UNSUPPORTED_ENGINE`).

## More docs

- **[docs/EDITING-THE-WEBSITE.md](docs/EDITING-THE-WEBSITE.md)** — non-technical guide to updating the catalog (photos, PDFs, Marketplace) via Google Sheets.
- **[docs/GO-LIVE-CHECKLIST.md](docs/GO-LIVE-CHECKLIST.md)** — remaining tasks before launch.
