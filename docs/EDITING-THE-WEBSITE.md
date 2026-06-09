# How to Update the ERBCO Website (Plain-English Guide)

**You do not need to know any code.** The equipment listings on the website come from one
**Google Sheet**. You edit the sheet, and the website updates itself — usually within a few
minutes. No "publishing," no developer needed.

This guide is written for non-technical staff. Take it one section at a time. If you get
stuck, message your developer — none of this can "break" the site permanently.

---

## 1. The big idea (read this once)

Think of the Google Sheet as the website's filing cabinet.

- Each **tab** at the bottom of the sheet feeds **one page** on the website.
- Each **row** in that tab becomes **one product** on that page.
- The **top row** of each tab is the column headings — it tells the website what each
  column means.

> ✅ **Add a row → a new product appears on the site.**
> ✅ **Edit a row → that product changes.**
> ✅ **Delete a row → that product disappears.**

**How fast?** Usually a few minutes. Refresh the web page; if you don't see your change,
wait 5 minutes and refresh again (on a phone/computer, a "hard refresh" helps:
Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac).

---

## 2. Which tab feeds which page

| Website page                 | Google Sheet tab to edit                                          |
| ---------------------------- | ----------------------------------------------------------------- |
| **Truck & Mobile Equipment** | the tab with the Stellar items (Service Cranes, TMAX, hooklifts…) |
| **Used Equipment**           | the "used" tab — add your used machines here                      |

> The **New Equipment**, **About Us**, **Site Services – Fence Rental**, and **Generators**
> pages are fixed pages (not in the sheet). To change those, ask your developer.

**Tip:** rename your sheet tabs so each tab's name matches the page name above. Renaming a
tab is safe — it does **not** break the website.

---

## 3. What each column means

Fill in a row left to right. **Only `name` is required** — everything else is optional.

| Column                                              | What to put                                                                                                       |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **name**                                            | The product name shown on the card (e.g. `WANCO Light Towers`)                                                    |
| **category**                                        | A group name (e.g. `AIR TOOLS`). Products with the same category get grouped, and a filter button appears for it. |
| **imageUrl**                                        | A link to a photo — **see Section 4 for the easy step-by-step.** Blank = a "Photo coming soon" placeholder.       |
| **imageAlt**                                        | A few words describing the photo (helps Google find you)                                                          |
| **brand**                                           | Manufacturer (e.g. `WACKER NEUSON`)                                                                               |
| **price**                                           | Shows on Used Equipment; leave blank if you'd rather not list a price                                             |
| **description**                                     | A sentence or two about the product                                                                               |
| **pdf**                                             | A link to a spec-sheet PDF — see Section 5                                                                        |
| **marketplace**                                     | A Facebook Marketplace listing link — see Section 6                                                               |
| model, features, details, availability, contactInfo | Extra detail shown in the pop-up when someone clicks the product                                                  |

⚠️ **Don't rename or delete the top heading row.** The website matches columns by those names.

---

## 4. Adding a product photo (step by step)

The **imageUrl** column needs a _web link_ to a photo. You have two easy options.

### Option A — borrow the manufacturer's photo (fastest)

1. Open the manufacturer's website in a browser and find the product photo.
2. **Right-click** the photo (on a phone: press and hold).
3. Choose **"Copy image address"** (or "Copy image link").
4. Click the `imageUrl` cell in the sheet for that product and **paste** (Ctrl+V / Cmd+V).
5. Done — refresh the website in a few minutes to see it.

> If a borrowed photo shows "Photo coming soon" on the site, that manufacturer blocks
> hotlinking — use Option B instead.

### Option B — use your own photo (for pictures you took)

The website can only show a photo that lives somewhere on the internet. So your own photo
needs to be uploaded first. Easiest path: **send the photo files to your developer** and
they'll add them to the site and give you back a short link like
`/products/air-tools/my-photo.jpg` to paste into the `imageUrl` cell.

_(If you'd rather self-serve later, any public image host works — e.g. a Google Drive image
set to "Anyone with the link," or an image library — but sending them to the developer is
the simplest while you're learning.)_

**Good photo tips:** landscape (wide) photos look best, fairly square-ish framing, the
product filling most of the frame, decent lighting. One clear photo per product.

---

## 5. Adding a spec-sheet PDF

The **pdf** column adds a "View Docs" button to a product.

- **PDF already on the site:** paste the short path, e.g. `air-tools/apt-rock-drills.pdf`
  (the site knows to look in the products folder). A full web link to any PDF also works.
- **New PDF:** email it to your developer; they'll add it and send you the exact path.

---

## 6. Facebook Marketplace links

Marketplace is a great second storefront — list the machine there, and close the deal over
the phone (that's the normal, allowed way to use it for local items).

Two ways to connect it to the website:

- **One button for the whole Used Equipment page:** give your developer your Marketplace
  storefront link once, and a "Browse our Facebook Marketplace" button turns on.
- **A button on individual machines:** paste a specific listing's link into that row's
  **marketplace** column, and a "Marketplace" button appears on that product's pop-up.

You don't have to do this now — it's ready whenever your storefront is set up.

---

## 7. Please be careful about (short list)

- 🚫 **Don't delete a tab** that feeds a page — the page goes blank until a developer
  reconnects it. To clear a page, delete the **rows**, not the tab.
- 🚫 **Don't edit the top heading row.**
- 🚫 **Don't change the sheet's sharing to private** — it must stay
  **"Anyone with the link → Viewer."**
- ✅ Renaming tabs, reordering rows, and adding photos are all **safe**.

---

## 8. What still needs a developer

These aren't in the sheet, so message your developer:

- Phone, email, address, or tagline (kept in `src/lib/constants.ts`)
- Menu labels and the wording on fixed pages (Home, About, New Equipment, Fence Rental)
- New pages or design changes
- Turning the Facebook Marketplace button on (one-time setup)

---

## 9. Current status

- **Truck & Mobile Equipment** is live from the sheet (some items are waiting on photos).
- **Used Equipment** is live and empty — add machines whenever you're ready.
- **New Equipment, About, Fence Rental, Generators** are done (fixed pages).
- **Still to do:** product photos, and (when ready) the Facebook Marketplace link.

> New to all this? That's fine — start by adding **one** used machine with just a `name`,
> `category`, and a borrowed `imageUrl`, refresh the site, and watch it appear. Once that
> clicks, the rest is the same move repeated.
