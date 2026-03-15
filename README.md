# Tirupathi Agro - Premium Turf Agronomy Website

A modern Next.js website rebuild for Tirupathi Agro with enterprise SEO, premium UI design, API-powered forms, and CMS-ready integration.

## 1) Website architecture

- **Framework:** Next.js 15 (App Router) + React + Tailwind CSS + Framer Motion
- **Core pages:** Home, About Us, Products, Turf Solutions, Applications, Research & Technology, Knowledge Center, Downloads, Contact Us
- **Backend routes:** `/api/contact`, `/api/newsletter`, `/api/products`
- **CMS adapter:** `lib/cms.ts` supports Sanity or Strapi endpoints via env configuration

## 2) Page wireframe overview

- **Home:** Hero → company intro cards → product categories and featured products
- **Products:** product technical cards + comparison tool
- **Turf Solutions:** segment-specific strategies + seasonal interactive calendar
- **Knowledge Center:** SEO article cards + newsletter signup
- **Contact:** lead form + office details

## 3) UI component system

- `components/navbar.tsx`
- `components/footer.tsx`
- `components/section.tsx`
- `components/animated-in.tsx`
- `components/product-comparison.tsx`
- `components/turf-calendar.tsx`
- `components/newsletter-form.tsx`
- `components/contact-form.tsx`

## 4) SEO configuration included

- Metadata in `app/layout.tsx`
- OpenGraph and Twitter tags
- JSON-LD organization schema
- Dynamic `app/sitemap.ts`
- Dynamic `app/robots.ts`
- Keyword targeting for:
  - turf agronomy
  - golf course fertilizers
  - turf grass nutrition
  - soil conditioners for turf
  - professional turf management
  - sports turf fertilizers

## 5) Performance setup

- Tailwind optimized utility styling
- Next.js image optimization (`next.config.ts`)
- Reusable lightweight components
- ISR-ready CMS fetch helper (`next.revalidate`)

## 6) Run locally

```bash
npm install
npm run dev
```

## 7) Deployment guide

### Vercel
1. Push repository to GitHub.
2. Import project in Vercel.
3. Add environment variables:
   - `SANITY_PROJECT_URL` or `STRAPI_URL`
   - `CMS_API_TOKEN`
4. Deploy.

### GoDaddy VPS
1. Provision Ubuntu VPS + Node 20+.
2. Clone repository.
3. `npm install && npm run build`
4. Run `npm run start` behind Nginx reverse proxy.
5. Configure SSL via Certbot.

## 8) Connect GoDaddy domain

1. In GoDaddy DNS manager, create/modify:
   - `A` record → VPS public IP (for VPS deployment)
   - or `CNAME` `www` → Vercel target (for Vercel deployment)
2. Ensure `@` and `www` are both configured.
3. Add domain in hosting platform (Vercel or server config).
4. Verify SSL issuance and set canonical host redirect.

