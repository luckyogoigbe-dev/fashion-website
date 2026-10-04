# VELOURA — Fashion House Website

A responsive fashion-brand website built with plain HTML, CSS, and JavaScript — no frameworks,
no build step. Includes a full-bleed hero, a shop-by-collection grid, a new-arrivals product
grid with a working "Add to Bag" cart drawer, a brand story section, an editorial image strip,
a newsletter signup, and a full footer — all fully responsive from desktop down to mobile.

## Files
- `index.html` — page structure and content
- `style.css` — styling, layout, responsive breakpoints
- `script.js` — mobile menu, cart drawer, product rendering, scroll-reveal animations, newsletter form

## Responsive behavior
- **Desktop (>1080px)**: full nav, 4-column product grid, 3-column collections grid
- **Tablet (760–1080px)**: 3-column products, 2-column collections, stacked brand story
- **Mobile (<760px)**: hamburger slide-in menu, 2-column product grid, full-width cart drawer,
  stacked footer — tested to open cleanly on both phone and desktop widths

## Customize it
1. Replace "VELOURA" with your brand name throughout `index.html` (logo, footer, page title).
2. Swap the placeholder images (from picsum.photos) for your own product/lookbook photography —
   just replace the `src` URLs in `index.html` and `script.js`'s `PRODUCTS` array.
3. Edit the `PRODUCTS` array in `script.js` with your real products, prices, and images.
4. Update collection links, footer links, address, email, and social links.
5. The newsletter form and cart are front-end only. To take real signups or payments, connect
   the newsletter form to a service like Mailchimp/Klaviyo, and the cart/checkout to a platform
   like Shopify, Stripe Checkout, or your own backend.

## Push it to GitHub
```bash
cd fashion-house
git init
git add .
git commit -m "Initial commit: VELOURA fashion house website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Free live hosting
This is a fully static site — any of these work for free:

**GitHub Pages**
1. Repo → **Settings** → **Pages**.
2. Source: `Deploy from a branch` → branch `main`, folder `/ (root)` → **Save**.
3. Live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

**Netlify**
- Drag-and-drop the `fashion-house` folder onto app.netlify.com, or connect the GitHub repo for
  auto-deploys on every push. Free custom domain support.

**Vercel**
- Same workflow — connect the repo, auto-deploys on push.

**Cloudflare Pages**
- Connect the repo, get a fast global CDN and free custom domain support.

All four are free for a static site like this — GitHub Pages is the simplest since you're
already pushing there.
