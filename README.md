# Edward R. Bacon Company — Website

Marketing + equipment-catalog site for ERBCO, built with **SvelteKit** and deployed to **Cloudflare Pages**. Product/service listings are driven by a shared **Google Sheet**, so non-technical staff can update the catalog without touching code.

> **Just want to update what's on the website?** You don't need this file. See **[docs/EDITING-THE-WEBSITE.md](docs/EDITING-THE-WEBSITE.md)** — written for non-developers.

---

## How it works (the 2-minute version)

- Each equipment-catalog page (New Equipment, Used Equipment, Truck Equipment) reads **one tab** of a Google Sheet as CSV at request time. (About, Site Services – Fence Rental, and the Generators brochure are static content.)
- Add/edit a **row** in the sheet → the change shows up on the live site within a few minutes. **No deploy needed.**
- Code changes (layout, wording, new pages) require a normal git push → Cloudflare auto-build.
- Company contact info (phone, address, email, tagline) lives in one file: `src/lib/constants.ts`.

```
Google Sheet (one tab per page)
        │  CSV export, fetched server-side in +page.server.ts
        ▼
SvelteKit load() → ServiceData.ts (parse) → page components (cards, filters, PDF/photo modals)
```

## Tech stack

| Area            | Choice                                                               |
| --------------- | -------------------------------------------------------------------- |
| Framework       | SvelteKit 2 / Svelte 5 (legacy `export let` / `$:` syntax, no runes) |
| Styling         | Tailwind CSS 4                                                       |
| Hosting         | Cloudflare Pages (`@sveltejs/adapter-cloudflare`)                    |
| Data source     | Google Sheets (CSV export) + static PDFs/images in `static/`         |
| Package manager | **pnpm** (enforced — `npm install` is blocked)                       |

## Local development

```bash
pnpm install   # install dependencies (use pnpm, not npm)
pnpm run dev   # http://localhost:5173  (no .env needed — sheet config is in code)
```

Useful scripts:

```bash
pnpm run check    # type-check (svelte-check) — should report 0 errors
pnpm run lint     # prettier + eslint
pnpm run build    # production build (Cloudflare)
pnpm run preview  # preview the production build locally
pnpm run test:unit -- --run   # unit tests
```

## Sheet configuration (which tab feeds which page)

This lives in **one code file: [`src/lib/sheets.ts`](src/lib/sheets.ts)** — no environment
variables required. Editing sheet **rows** updates the site live; you only touch this file
if a page should read a _different_ tab (rare).

| `SHEET_GIDS` key | Feeds the page                               | Notes                           |
| ---------------- | -------------------------------------------- | ------------------------------- |
| `newEquipment`   | **New Equipment** (`/products/construction`) | the manufacturer lineup tab     |
| `truckEquipment` | **Truck Equipment** (`/products/trucks`)     | Stellar cranes/trucks/etc.      |
| `usedEquipment`  | Used Equipment (`/products/used`)            | empty — add used inventory here |
| `fencing`        | Fencing (`/services/fencing`, not in nav)    |                                 |

The **About**, **Site Services – Fence Rental**, and **Generators & Power Solutions** pages
are static content (no sheet). The Generators menu item links to
`static/services/generator-services.pdf`.

> A tab's `gid` stays the same when you rename it, but **changes if you delete & recreate the
> tab** — if a page goes blank, update the gid in `src/lib/sheets.ts` and redeploy.

## Project layout

```
src/
  routes/                 pages (SvelteKit file-based routing)
    products/             New Equipment, Used, Trucks, Mobile Equipment
    services/             Site Services – Fence Rental, Fencing
    about/, +page.svelte  About, Home
  lib/
    constants.ts          ← company phone/address/email/tagline (edit here)
    Services/             data loading + the shared catalog UI
  components/             Navbar, Footer, catalog cards, PDF/photo modals
static/                   images, PDFs, logo (served at the site root)
docs/                     human guides (start here)
```

## Deployment

Cloudflare Pages builds on push.

1. Connect the repo to Cloudflare Pages (build command `pnpm run build`, output `.svelte-kit/cloudflare`).
2. Push to the deployed branch → Cloudflare builds and publishes automatically. **No environment variables are required** (sheet config lives in `src/lib/sheets.ts`).

## More docs

- **[docs/EDITING-THE-WEBSITE.md](docs/EDITING-THE-WEBSITE.md)** — non-technical guide to updating the catalog via Google Sheets.
- **[docs/GO-LIVE-CHECKLIST.md](docs/GO-LIVE-CHECKLIST.md)** — prioritized tasks remaining before launch.
