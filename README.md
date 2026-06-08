# Edward R. Bacon Company — Website

Marketing + equipment-catalog site for ERBCO, built with **SvelteKit** and deployed to **Cloudflare Pages**. Product/service listings are driven by a shared **Google Sheet**, so non-technical staff can update the catalog without touching code.

> **Just want to update what's on the website?** You don't need this file. See **[docs/EDITING-THE-WEBSITE.md](docs/EDITING-THE-WEBSITE.md)** — written for non-developers.

---

## How it works (the 2-minute version)

- Each catalog page (New Equipment, Used Equipment, Truck Equipment, Site Services) reads **one tab** of a Google Sheet as CSV at request time.
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

| Area | Choice |
|------|--------|
| Framework | SvelteKit 2 / Svelte 5 (legacy `export let` / `$:` syntax, no runes) |
| Styling | Tailwind CSS 4 |
| Hosting | Cloudflare Pages (`@sveltejs/adapter-cloudflare`) |
| Data source | Google Sheets (CSV export) + static PDFs/images in `static/` |
| Package manager | **pnpm** (enforced — `npm install` is blocked) |

## Local development

```bash
pnpm install          # install dependencies (use pnpm, not npm)
cp .env.example .env  # then fill in the real Sheet ID/GIDs (see below)
pnpm run dev          # http://localhost:5173
```

Useful scripts:

```bash
pnpm run check    # type-check (svelte-check) — should report 0 errors
pnpm run lint     # prettier + eslint
pnpm run build    # production build (Cloudflare)
pnpm run preview  # preview the production build locally
pnpm run test:unit -- --run   # unit tests
```

## Environment variables

These tell each page **which Google Sheet tab to read**. They are build-time values
(`$env/static/private`), so changing a tab mapping requires a rebuild/redeploy; editing
sheet **rows** does not.

Copy `.env.example` → `.env` for local dev. In production, set the **same keys** in the
**Cloudflare Pages dashboard** (Settings → Environment variables).

| Variable | Feeds the page | Notes |
|----------|----------------|-------|
| `CONSTRUCTION_PRODUCTS_SHEET_ID` / `_GID` | **New Equipment** (`/products/construction`) | currently the populated lineup tab |
| `USED_EQUIPMENT_SHEET_ID` / `_GID` | Used Equipment (`/products/used`) | currently an empty tab, ready to fill |
| `TRUCK_EQUIPMENT_SHEET_ID` / `_GID` | Truck Equipment (`/products/trucks`) | |
| `PROJECT_SITE_SERVICES_SHEET_ID` / `_GID` | Site Services – Fence Rental (`/services/project-site`) | |
| `TEMPORARY_FENCING_SHEET_ID` / `_GID` | Fencing (`/services/fencing`, not in nav) | |

The `_ID` is the long string in the sheet URL; the `_GID` is the `gid=` number for a specific tab.

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
2. Add the environment variables above in the Pages project settings.
3. Push to the deployed branch → Cloudflare builds and publishes automatically.

## More docs

- **[docs/EDITING-THE-WEBSITE.md](docs/EDITING-THE-WEBSITE.md)** — non-technical guide to updating the catalog via Google Sheets.
- **[docs/GO-LIVE-CHECKLIST.md](docs/GO-LIVE-CHECKLIST.md)** — prioritized tasks remaining before launch.
