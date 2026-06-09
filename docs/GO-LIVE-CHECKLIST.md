# Go-Live Checklist

Owner tags: **[DEV]** = developer/Stefan, **[CLIENT]** = ERBCO staff.

---

## 🔴 P0 — Blocks launch

1. **[CLIENT] Add Used Equipment listings.** The page is live but empty — add rows to the
   "used" tab (see `EDITING-THE-WEBSITE.md`). Empty pages show a clean "No Data" message.
2. **[CLIENT] Product photos.** Several Truck & Mobile items are waiting on photos (they show
   a "Photo coming soon" placeholder for now). Send the pictures, or paste image links into
   the sheet.

---

## 🟠 P1 — Soon

3. **[CLIENT] Facebook Marketplace storefront.** Once it exists, send the developer the
   storefront link to turn on the "Browse our Facebook Marketplace" button; optionally add
   per-item listing links via the sheet's `marketplace` column.
4. **[CLIENT→DEV] Real social-media URLs.** Footer social/eBay links are hidden until real
   profiles are provided (commented out in `+layout.svelte`).

---

## 🟡 P2 — Optional cleanups

5. **[DEV] Dedupe the "Why Choose ERBCO?" block** (copy-pasted on Products & Services) into a
   shared component.
6. **[DEV] Decide on the orphan `/services/fencing` route** — it exists but isn't linked
   (Fence Rental covers it). Remove or link it.
7. **[DEV] Standardize CTA button labels** ("Contact Our Team" vs "Contact Us Today").

---

## 🟢 P3 — After launch

8. **[DEV] Security hardening** — S1–S3 in `audit-findings.md` (validate sheet-supplied
   PDF/image URLs). Low risk for a brochure site.

---

## ✅ Done

- Client changes #6–#10 (New Equipment, Truck/Mobile combined, Parts removed, About Us,
  Fence Rental, Generators viewer).
- New Equipment rebuilt to match erbacon.com, themed to brand red.
- Logo + "Get it from Bacon" tagline restored; spec-sheet PDFs fixed.
- "No Data" and "Photo coming soon" states; detailed data-loading error messages.
- Sheet config moved into code (`src/lib/sheets.ts`) — no Cloudflare env vars needed.
- Footer attribution + version; dark-mode link fix; hidden placeholder social links.
- Design-consolidation pass: brand-red consistency, dark-mode contrast, responsive fixes,
  footer icon bugs, heading/spacing consistency.
- Cloudflare build fixed (Node 22.13 via `.nvmrc`); Marketplace integration wired (off
  until a URL is set).
- Docs: README, EDITING-THE-WEBSITE, this checklist.
