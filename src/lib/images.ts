/**
 * Curated, verified Unsplash imagery for the Absolute Keukens demo.
 * Every id below returns 200. In production these are swapped for the
 * client's own high-resolution project photography.
 */

const BASE = "https://images.unsplash.com/photo-";

export function img(
  id: string,
  opts: { w?: number; h?: number; q?: number } = {}
) {
  const { w = 1600, h, q = 80 } = opts;
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `${BASE}${id}?${params.toString()}`;
}

/** Hero + large feature kitchens */
export const KITCHENS = {
  heroMain: "1556909212-d5b604d0c90d",
  heroWarm: "1600585154340-be6161a56a0c",
  islandDark: "1616486338812-3dadae4b4ace",
  matteGreen: "1600607687939-ce8a6c25118c",
  marble: "1600566753086-00f18fb6b3ea",
  minimalWhite: "1556911220-bff31c812dba",
  woodWarm: "1571843439991-dd2b8e051966",
  handleless: "1600489000022-c2086d79f9d4",
  compact: "1584622650111-993a426fbf0a",
  bright: "1600210492493-0946911123ea",
  detail: "1565538810643-b5bdb714032a",
  cabinetry: "1631679706909-1844bbd07221",
  loft: "1522708323590-d24dbb6b0267",
  classic: "1616137466211-f939a420be84",
  airy: "1583845112203-29329902332e",
  interior: "1449247709967-d4461a6a6103",
} as const;

/** Portraits for testimonials */
export const PORTRAITS = {
  a: "1544005313-94ddf0286df2",
  b: "1500648767791-00dcc994a43e",
  c: "1573497019940-1c28c88b4f3e",
  d: "1580489944761-15a19d654956",
  e: "1507003211169-0a1dd7228f2d",
  f: "1494790108377-be9c29b29330",
  g: "1438761681033-6461ffad8d80",
  h: "1633332755192-727a05c4013d",
} as const;

/** Texture / detail crops for color + material sections */
export const DETAILS = {
  swatch1: "1615529182904-14819c35db37",
  swatch2: "1560448204-e02f11c3d0e2",
  swatch3: "1519710164239-da123dc03ef4",
  swatch4: "1512917774080-9991f1c4c750",
  worktop: "1586023492125-27b2c045efd7",
  craft: "1600880292203-757bb62b4baf",
  hands: "1556157382-97eda2d62296",
  team: "1607990281513-2c110a25bd8c",
} as const;
