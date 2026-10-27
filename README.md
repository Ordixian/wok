# ASK Geospatial – MVP Website

Single‑page marketing site for **ASK Geospatial Strategies Limited** (Registered Surveyors & Geo‑Information Consultants).

---

## Quick Start

```bash
cd site
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out/
```

## Project Structure

```
site/
├─ public/
│  ├─ images/                # placeholders (logo-light.svg, logo-dark.svg, logo-mark.svg, hero-placeholder.svg)
│  └─ robots.txt             # noindex for preview
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx          # global layout, header, footer, SEO, noindex meta
│  │  ├─ page.tsx            # all sections (hero, trust, services, workflow, contact)
│  │  └─ globals.css         # Tailwind + base styles
│  ├─ components/
│  │  └─ ui/                 # Button, Card, Input primitives
│  └─ content/
│     └─ site-content.ts     # **ALL copy, contact details, services, SEO** – edit here
├─ next.config.mjs           # static export (output: 'export')
├─ tailwind.config.ts        # brand colours
└─ tsconfig.json
```

## Customising Content

All text, phone numbers, address, service list and SEO fields live in `src/content/site-content.ts`.  
Edit that file, run `npm run build`, and the new copy appears everywhere.

### Swapping Real Photos
1. Drop your JPG/PNG into `public/images/`.
2. In `site-content.ts` update the corresponding path (`logoLight`, `logoDark`, `heroImage`).
3. Re‑build.

### Quote Form Backend (Formspree)
1. Create a free Formspree form → copy the form **endpoint ID** (the 8‑char hash in `https://formspree.io/f/<ID>`).
2. In `src/app/page.tsx` find the `<form action="https://formspree.io/f/REPLACE_WITH_ID">` and replace `REPLACE_WITH_ID` with your ID.
3. (Optional) Add `FORMSPREE_ENDPOINT` env var in Vercel if you prefer server‑side submit.

### WhatsApp Pre‑fill
The “Chat on WhatsApp” button opens `https://wa.me/2348061235341?text=…` with the form data encoded – no extra config required.

### Google Maps Embed
Replace `YOUR_API_KEY` in the iframe `src` in `page.tsx` with a real Maps Embed API key, or swap the iframe for a static map image.

---

## Deploy to Vercel (Preview)

1. Push this folder to a new GitHub repo.
2. In Vercel → **Add New… → Project** → import the repo.
3. Vercel auto‑detects Next.js; **Build Command** `npm run build`, **Output Directory** `out`.
4. Add Environment Variable `FORMSPREE_ENDPOINT` if you use server‑side submit.
5. Deploy → you’ll get a `*.vercel.app` URL.  
   *Robots.txt* is already set to `Disallow: /` so search engines will not index the preview.

### Going Live with a Custom Domain
1. In Vercel Project Settings → Domains → add your domain (e.g. `askgeospatial.com`).
2. Update `siteContent.brand.logoLight`, `logoDark`, `heroImage` if you host images on a CDN.
3. Remove the `<meta name="robots" content="noindex, nofollow" />` in `layout.tsx` (or change to `index, follow`).

---

## Future Enhancements (when client asks)

* **Git‑based CMS** – Decap CMS (Netlify CMS) or TinaCMS can be added on top of the existing `site-content.ts` so the client edits copy in a UI and commits back to Git.
* **Blog / Case Studies** – MDX files under `src/content/projects/`.
* **Analytics** – Plausible / Vercel Analytics.
* **Multi‑language** – i18n routing.

---

## What Still Needs Client Confirmation (Placeholders)

| Item | Where to update |
|------|-----------------|
| Vector logo (SVG/AI/EPS) | `public/images/logo-*.svg` |
| Official business email | `siteContent.brand.email` |
| Real crew / equipment / office photos | `public/images/` + `siteContent` paths |
| Sub‑services list (16 items) | `siteContent.services[].items` |
| SURCON registration number / NIS grade | `siteContent.principal.credentials` |
| Hotel spelling (Keewas vs Kewise) | `siteContent.brand.address` |
| Custom domain | Vercel domain settings |

---

## Commands Reference

```bash
npm run dev        # local dev server
npm run build      # static export → ./out
npm run start      # serve ./out (for preview)
npm run lint       # eslint
```
