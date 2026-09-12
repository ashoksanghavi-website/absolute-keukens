# Absolute Keukens

Premium redesign for **Absolute Keukens**, a kitchen wrapping and renovation
company in Hoogvliet Rotterdam. Built with Next.js, TypeScript, Tailwind CSS v4
and Framer Motion.

The site pairs a warm, bright brand system (ivory canvas, honey brass, deep
olive) with an editorial serif display face, rich scroll and hover motion, and a
built in **fotoscan** price indication tool (a premium demo of the AI lead
generation flow described in the brief).

## Tech stack

- **Next.js 15** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4** with shadcn style design tokens
- **Framer Motion** for all transitions and micro interactions
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
src/
  app/                 # routes (home + 8 inner pages)
    prijs-berekenen/   # the fotoscan price tool
  components/
    home/              # home page sections
    price/             # fotoscan multi step flow
    site/              # header, footer, page hero, logo, contact form
    ui/                # button, reveal, section, accordion, before/after,
                       # scroll-reel-testimonials
  lib/
    site.ts            # all copy and data (Dutch)
    images.ts          # verified image library
    motion.ts          # shared Framer Motion variants
    utils.ts           # cn() helper
```

## Pages

`/` · `/diensten` · `/werkwijze` · `/projecten` · `/kleuren` · `/over-ons` ·
`/prijs-berekenen` · `/contact` · `/veelgestelde-vragen`

## The fotoscan tool

`/prijs-berekenen` is a working front end demo of the price indication flow:
upload two to four photos, watch the scan analyse them, then receive a
structured breakdown (fronts, drawers, panels, plinth, worktop, backsplash,
configuration, confidence) and an indicative price range, followed by a lead
capture form. Unit prices live in `PRICING` inside
`src/components/price/price-scanner.tsx` and are meant to move to an admin
backend later. No real computer vision runs yet; the detection is scripted so
the UI can be reviewed.

## Notes for handoff

- All imagery uses verified Unsplash photography as a placeholder. Swap for the
  client's own high resolution project photos in `src/lib/images.ts`.
- Copy is Dutch and lives entirely in `src/lib/site.ts`.
- Company details (phone, email, address, KvK, BTW, socials) are in the
  `COMPANY` object in `src/lib/site.ts`.
```
