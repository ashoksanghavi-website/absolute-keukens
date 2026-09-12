import type { Variants, Transition } from "framer-motion";

export const EASE_OUT: Transition["ease"] = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT: Transition["ease"] = [0.65, 0, 0.35, 1];

/** Fade + rise, for individual blocks entering the viewport */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

/** Container that staggers its children */
export const stagger = (amount = 0.09, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: amount, delayChildren: delay },
  },
});

/** Child used with `stagger` */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

/** Subtle scale + fade for images / cards */
export const revealScale: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE_OUT } },
};

export const viewportOnce = { once: true, amount: 0.3 } as const;
