"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Camera, ArrowRight } from "lucide-react";
import { img, KITCHENS } from "@/lib/images";

const KEY = "ak-scan-popup-seen";

export function ScanPopup() {
  const [visible, setVisible] = React.useState(false);
  const done = React.useRef(false);

  React.useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) === "1") return;
    } catch {}
    const onScroll = () => {
      if (done.current) return;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 760;
      if (nearBottom) {
        done.current = true;
        setVisible(true);
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {}
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-sm sm:left-6 sm:right-auto sm:mx-0"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] border border-brass/25 bg-ivory/95 shadow-[0_30px_70px_-25px_rgba(35,27,18,0.55)] backdrop-blur-xl">
            {/* accent glow */}
            <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brass/20 blur-2xl" />

            <button
              onClick={() => setVisible(false)}
              aria-label="Sluiten"
              className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full bg-espresso/10 text-espresso transition-colors hover:bg-espresso hover:text-ivory"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative flex gap-4 p-4">
              {/* mini fotoscan visual */}
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={img(KITCHENS.handleless, { w: 300 })}
                  alt="Scan je keuken"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-espresso/15" />
                <motion.div
                  initial={{ top: "-20%" }}
                  animate={{ top: "120%" }}
                  transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-brass/50 to-transparent"
                >
                  <div className="absolute bottom-0 h-0.5 w-full bg-brass shadow-[0_0_12px_rgba(190,138,58,0.9)]" />
                </motion.div>
                {["left-1.5 top-1.5 border-l-2 border-t-2", "right-1.5 top-1.5 border-r-2 border-t-2", "left-1.5 bottom-1.5 border-l-2 border-b-2", "right-1.5 bottom-1.5 border-r-2 border-b-2"].map((c) => (
                  <span key={c} className={`absolute h-4 w-4 rounded-[2px] border-brass-soft ${c}`} />
                ))}
              </div>

              <div className="min-w-0 pr-6">
                <span className="flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-widest text-brass-deep">
                  <Camera className="h-3.5 w-3.5" />
                  Gratis prijsindicatie
                </span>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-tight text-espresso">
                  Scan je keuken, ken je prijs
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Upload een paar foto's en zie binnen een minuut je richtprijs.
                </p>
                <Link
                  href="/prijs-berekenen"
                  onClick={() => setVisible(false)}
                  className="group mt-3 inline-flex items-center gap-1.5 rounded-full bg-brass px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_-8px_rgba(190,138,58,0.8)] transition-colors hover:bg-brass-deep"
                >
                  Start de fotoscan
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* bottom progress accent */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 12, ease: "linear" }}
              onAnimationComplete={() => setVisible(false)}
              className="h-0.5 origin-left bg-gradient-to-r from-brass to-brass-soft"
            />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
