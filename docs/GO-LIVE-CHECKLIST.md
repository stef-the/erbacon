# Go-Live Checklist (target: end of June)

Ordered **highest priority first**. Owner tags: **[DEV]** = developer/Stefan, **[CLIENT]** = ERBCO staff.

---

## 🔴 P0 — Blocks launch

1. **[DEV] Deploy** the latest `main` (push triggers Cloudflare). **No environment variables
   needed** anymore — which tab feeds which page now lives in `src/lib/sheets.ts`.
   - If the live site still shows old content (e.g. a "Parts" menu item or a "Loading data…"
     spinner), the deploy didn't take. Check Cloudflare → **Deployments**: is the latest build
     green or **failed**? Then hard-refresh (Ctrl/Cmd+Shift+R).
2. **[CLIENT] Fill the last empty page:** **Used Equipment** (New Equipment and Truck
   Equipment now have data). Empty pages show a clean "No Data" message until you add rows.

---

## 🟠 P1 — Remaining client assets

3. **[CLIENT] Product photos for Truck Equipment & New Equipment rows** that have a blank
   `imageUrl` (they now show a tidy "No image available" placeholder instead of a broken icon).
4. **[CLIENT] "Get it from Bacon" tagline graphic** — the header tagline image is still
   missing (the Fence Rental page uses a temporary text version).

---

## 🟡 P2 — Polish

5. **[CLIENT] Rename the Google Sheet tabs** so each tab's name matches the page it feeds
   (the lineup tab → "New Equipment", etc.). Renaming is safe; it won't break the site.
6. **[CLIENT→DEV] Real social-media URLs** (currently hidden — see commented block in
   `+layout.svelte`). Send real profile links to re-enable.
7. **[DEV] Merge the code-quality audit branches** (`audit/*`) if desired. Optional.

---

## 🟢 P3 — After launch

8. **Used ↔ Facebook Marketplace (#12).** Add a "See on Marketplace" link per used item once
   you're posting (sheet column + small dev change). No automatic feed exists.
9. **[DEV] Security hardening** — patch S1–S3 from `audit-findings.md` (PDF/image URL
   validation). Low risk for a brochure site.

---

## ✅ Already done

- **#7** New Equipment page wired to the lineup; **#8** Parts removed; **#9** About Us
  rewritten; **#10** Fence Rental page + Generators brochure PDF + tab rename.
- **Sheet wiring moved into code** (`src/lib/sheets.ts`) — fixes New Equipment/Truck being
  empty and removes the Cloudflare env-var step entirely.
- **Truck Equipment** now shows the Stellar lineup; **spec-sheet PDFs fixed** (truck PDFs were
  resolving to the wrong folder).
- **"No Data" screen** replaces the endless loading spinner; **"No image available"**
  placeholder for blank images.
- **Footer**: attribution with ™ (no copyright claim) + greyed build version; dead social/eBay
  links hidden.
- **Dark mode**: plain links (phone numbers) now render white/bold/underlined.
- Real ERBCO logo added; `pnpm run check` and `pnpm run build` pass clean.
