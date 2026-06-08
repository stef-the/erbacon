# Go-Live Checklist (target: end of June)

Ordered **highest priority first**. Owner tags: **[DEV]** = developer/Stefan, **[CLIENT]** = ERBCO staff.
"Blocks launch" = the site shouldn't go live until this is done.

---

## 🔴 P0 — Blocks launch

1. **[DEV] Point production at the new data wiring.** In the Cloudflare Pages dashboard
   (Settings → Environment variables), set:
   - `CONSTRUCTION_PRODUCTS_SHEET_GID = 151770928` ← New Equipment shows the lineup
   - `USED_EQUIPMENT_SHEET_GID = 997067382` ← Used Equipment points at the empty tab
   - Confirm `TRUCK_EQUIPMENT_SHEET_GID = 1947450164` and all `*_SHEET_ID = 1dr9z9kMk1IGSe7f-DpdL8iqLmuTkUdP1mmwjlcC03Og`.
   - Remove any `PARTS_*` and `PROJECT_SITE_SERVICES_*` variables (those pages no longer read a sheet).

2. **[DEV] Deploy `client-changes-june`** (already pushed; merge to the deployed branch or
   point Cloudflare at it). Ships #7, #8, #9, #10, logo, PDF-path fix, and detailed error
   messages.

3. **[CLIENT] Fill the empty pages.** Still blank until rows are added (see
   `EDITING-THE-WEBSITE.md`): **Used Equipment** and **Truck Equipment**. Long pole — start now.

---

## 🟠 P1 — Remaining client assets

4. **[CLIENT] 4 Stellar photos (#6)** — Tool Boxes, Fuel & Lube Trailers, Waste Management,
   Utility Trailers. Until then they show a grey placeholder.
5. **[CLIENT] "Get it from Bacon" tagline graphic** — the styled logo+tagline image is still
   missing, so the header tagline image is broken in 3 places. (The Fence Rental page uses a
   temporary text version.) Send the file and dev wires it everywhere.

---

## 🟡 P2 — Polish

6. **[CLIENT] Rename Google Sheet tabs** to match page names (New Equipment, Used Equipment,
   Truck Equipment). Safe; makes the sheet self-explanatory.
7. **[CLIENT→DEV] Real social-media URLs.** Footer/menu currently point at generic
   twitter.com / facebook.com / instagram.com.
8. **[DEV] Merge the code-quality audit branches** (`audit/*`) if desired — bug fixes,
   test-config fix, perf. Optional but recommended.
9. **[CONTENT] Confirm the Fence Rental wording.** The supplied brochure says "Serving the
   Greater Bay Area"; ERBCO is Sacramento-based — confirm that's intended or send a tweak.

---

## 🟢 P3 — After launch

10. **Used ↔ Facebook Marketplace (#12).** Once you're posting, add a "See on Marketplace"
    link per used item (a sheet column + a small dev change). No automatic feed exists.
11. **[DEV] Security hardening** — patch S1–S3 from `audit-findings.md` (PDF/image URL
    validation). Low risk for a brochure site, but worth doing.

---

## ✅ Already done

- **#7** New Equipment page renamed and wired to the populated lineup tab.
- **#8** Parts deleted everywhere (route, menu, cards, meta).
- **#9** About Us rewritten with the new copy.
- **#10** "Project Site Services" → "Site Services – Fence Rental"; fence-rental brochure
  content added (static page with logo + tagline); Generators & Power Solutions menu item
  now opens the generator-services PDF.
- Real ERBCO logo added; header logo no longer broken; spec-sheet PDF paths fixed.
- Data-loading now shows **detailed error messages** (bad GID, unshared sheet, network)
  instead of silently-blank pages.
- Local `.env` created; `pnpm run check` and `pnpm run build` both pass clean.
