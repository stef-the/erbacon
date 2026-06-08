# How to Update the ERBCO Website

**You do not need to know any code.** Almost everything on the equipment pages comes
from one **Google Sheet**. You edit the sheet, and the website updates itself — usually
within a few minutes.

This guide is written for non-technical staff. Take it one section at a time.

---

## 1. The big idea

Each catalog page on the website is connected to **one tab** (the little sheet-name tabs
at the bottom of Google Sheets). Every **row** in that tab becomes one **product card**
on that page.

> ✅ **Add a row → a new item appears on the site.**
> ✅ **Edit a row → that item changes.**
> ✅ **Delete a row → that item disappears.**
>
> You almost never need a developer for day-to-day catalog changes.

**How fast do changes appear?** Usually within a few minutes (refresh the page; if you
don't see it, wait 5 minutes and refresh again). You do **not** need to "publish" or
"deploy" anything.

---

## 2. Which tab controls which page

| Website page                               | Google Sheet tab to edit                                             |
| ------------------------------------------ | -------------------------------------------------------------------- |
| **New Equipment** (the main Products list) | the tab with the manufacturer lineup (Sullivan, APT, Wanco, Wacker…) |
| **Used Equipment**                         | the empty "used" tab — add your used machines here                   |
| **Truck Equipment**                        | the trucks tab                                                       |

> The **Site Services – Fence Rental** page, the **About Us** page, and the **Generators &
> Power Solutions** brochure link are fixed content (not in the sheet) — ask your developer
> to change those.

> 📌 **Tip:** To avoid confusion, rename your sheet tabs so the tab name matches the
> page name above. Renaming a tab is safe — it will **not** break the website.

---

## 3. What each column means

The **first row** of every tab is the column headings. **Never delete or rename the first
row.** Fill in the columns below for each product (only `name` is required):

| Column                                              | Required?   | What to put                                                                                                    |
| --------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| **name**                                            | ✅ Yes      | The product name shown on the card (e.g. `WANCO Light Towers`)                                                 |
| **category**                                        | Recommended | A group name (e.g. `AIR TOOLS`). Items with the same category get grouped, and a filter button appears for it. |
| **imageUrl**                                        | Optional    | A link to a photo (see Section 4). Leave blank to show a plain grey box.                                       |
| **imageAlt**                                        | Optional    | A few words describing the photo (helps accessibility & SEO)                                                   |
| **brand**                                           | Optional    | Manufacturer name (e.g. `WACKER NEUSON`)                                                                       |
| **price**                                           | Optional    | Shows only on pages that display prices (New & Used Equipment)                                                 |
| **description**                                     | Optional    | A sentence or two about the product                                                                            |
| **pdf**                                             | Optional    | A link to a spec-sheet PDF (see Section 5)                                                                     |
| model, features, details, availability, contactInfo | Optional    | Extra detail shown in the pop-up when someone clicks the item                                                  |

---

## 4. Adding a product photo

The **imageUrl** column needs a web link to an image. Two easy ways:

- **Use the manufacturer's photo:** open the maker's website, right-click the product
  image, choose **"Copy image address,"** and paste it into the `imageUrl` cell. (Most of
  the current lineup uses this method.)
- **Use a photo we host on the site:** send the image file to your developer. They'll add
  it to the site, and give you back a short path like `/products/air-tools/my-photo.jpg`
  to paste into `imageUrl`.

If `imageUrl` is blank, the card just shows a grey box — that's fine as a placeholder.

---

## 5. Adding a spec-sheet PDF

The **pdf** column makes a "View Docs" button appear on the item.

- **PDF already on the site:** if the file lives under the site's `products` folder, just
  put the short path, e.g. `air-tools/apt-rock-drills.pdf` (the site automatically looks in
  the products folder). You can also paste a full web link to any PDF.
- **New PDF:** email it to your developer; they'll add it and tell you the exact path to
  paste.

---

## 6. Things to be careful about (please read)

- 🚫 **Don't delete a tab** that a page uses. If a tab is deleted (even if you recreate it
  with the same name), the page goes blank until a developer reconnects it. To "start
  over" on a tab, delete the **rows**, not the tab.
- 🚫 **Don't change the first (heading) row.** The website matches columns by those names.
- 🚫 **Don't change the sheet's sharing** to private. It must stay **"Anyone with the link →
  Viewer"** or the website can't read it.
- ✅ **Renaming a tab is safe.** Reordering rows is safe. Adding columns at the end is safe.

---

## 7. Things that still need a developer

These are **not** in the Google Sheet, so message your developer to change them:

- Phone number, email, address, or the tagline (kept in one code file: `src/lib/constants.ts`)
- The menu/navigation labels and page wording
- Adding a brand-new page or changing the page design
- The "About Us" page text
- Connecting a page to a different tab

---

## 8. Current status (as of this writing)

- **New Equipment** is live with your full manufacturer lineup. ✅
- **About Us**, **Site Services – Fence Rental**, and **Generators & Power Solutions** are
  done (fixed content). ✅
- **Used Equipment** and **Truck Equipment** tabs are **empty** — those pages will stay
  blank until you add rows. Start adding rows whenever you're ready.
- A few Mobile Equipment items (Tool Boxes, Fuel & Lube Trailers, Waste Management, Utility
  Trailers) are waiting on photos.
