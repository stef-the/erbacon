# Go-Live Checklist (target: end of June)

Ordered **highest priority first**. Owner tags: **[DEV]** = developer/Stefan, **[CLIENT]** = ERBCO staff.
"Blocks launch" = the site shouldn't go live until this is done.

---

## 🔴 P0 — Blocks launch

1. **[DEV] Point production at the new data wiring.** In the Cloudflare Pages dashboard
   (Settings → Environment variables), set:
   - `CONSTRUCTION_PRODUCTS_SHEET_GID = 151770928`  ← New Equipment shows the lineup
   - `USED_EQUIPMENT_SHEET_GID = 997067382`  ← Used Equipment points at the empty tab
   - Confirm `TRUCK_EQUIPMENT_SHEET_GID = 1947450164`, `PROJECT_SITE_SERVICES_SHEET_GID = 2100646872`,
     and all `*_SHEET_ID = 1dr9z9kMk1IGSe7f-DpdL8iqLmuTkUdP1mmwjlcC03Og`.
   - Remove any `PARTS_*` variables (page deleted).

2. **[DEV] Deploy the `client-changes-june` branch** (merge to the deployed branch and push;
   Cloudflare auto-builds). This ships: Parts removed (#8), New Equipment rename + data (#7),
   Site Services – Fence Rental rename (#10), real logo, PDF-path fix.

3. **[CLIENT] Fill the empty pages.** These are blank until rows are added (see
   `EDITING-THE-WEBSITE.md`):
   - Used Equipment
   - Truck Equipment
   - Site Services – Fence Rental
   A page can't launch empty, so this is the long pole — start now.

---

## 🟠 P1 — Content the client still owes (each unblocks one change)

4. **[CLIENT] About Us text (#9)** — send the new copy; dev pastes it in.
5. **[CLIENT] 4 Stellar photos (#6)** — Tool Boxes, Fuel & Lube Trailers, Waste Management,
   Utility Trailers. Until then they show a grey placeholder.
6. **[CLIENT] "Get it from Bacon" tagline graphic** — currently missing, so the header
   image is broken in 3 places. Send the file; dev drops it in.
7. **[CLIENT] Generators & Power Solutions PDF + Fence-Rental content PDF (#10)** — send both.

---

## 🟡 P2 — Correctness & polish

8. **[DEV] Fix the "Generators and Power Solutions" menu link.** It filters New Equipment by
   `category=Generators`, but the data category is `GENERATORS & LIGHT TOWERS`, so it shows
   nothing. Either update the link's category or finalize as part of #10.
9. **[CLIENT] Rename the Google Sheet tabs** to match page names (New Equipment, Used
   Equipment, Truck Equipment, Site Services – Fence Rental). Safe; makes the sheet
   self-explanatory.
10. **[CLIENT→DEV] Real social links.** Footer/menu currently point at generic
    twitter.com / facebook.com / instagram.com. Send real ERBCO profile URLs.
11. **[DEV] Merge the code-quality audit branches** (`audit/*`) if desired — bug fixes,
    test-config fix, perf. Optional but recommended before launch.

---

## 🟢 P3 — After launch

12. **Used ↔ Facebook Marketplace (#12).** Once you're posting on Marketplace, add a
    "See on Marketplace" link per used item (a new sheet column + a small dev change). No
    automatic feed exists from Marketplace, so this stays manual-but-simple.
13. **[DEV] Security hardening** — patch S1–S3 from `audit-findings.md` (PDF/image URL
    validation). Low risk for a brochure site, but worth doing.

---

## ✅ Already done

- #8 Parts deleted everywhere (route, menu, cards, meta).
- #7 New Equipment page renamed and wired to the populated lineup tab.
- #10 "Project Site Services" → "Site Services – Fence Rental" (label/title rename).
- Real ERBCO logo added; header logo no longer broken.
- Spec-sheet PDF paths fixed so the lineup's "View Docs" buttons work.
- Local `.env` created and `pnpm run check` / `pnpm run build` both pass clean.
