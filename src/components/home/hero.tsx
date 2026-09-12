"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/ui/before-after";
import { KITCHENS } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

function Word({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, ease: EASE, delay }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-ivory">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-brass/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-olive/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-espresso/10 bg-white/70 px-4 py-1.5 text-xs font-semibold text-espresso/80 backdrop-blur"
          >
            <span className="flex -space-x-1">
              {[0, 1, 2].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-brass text-brass" />
              ))}
            </span>
            Ruim 500 keukens vernieuwd in de regio Rotterdam
          </motion.div>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-espresso sm:text-6xl lg:text-[4.1rem]">
            <Word delay={0.15}>Een nieuwe</Word>{" "}
            <Word delay={0.24}>keuken,</Word>
            <br />
            <span className="text-gradient">
              <Word delay={0.33}>zonder</Word>{" "}
              <Word delay={0.42}>verbouwen.</Word>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            Wij wrappen en vernieuwen jouw bestaande keuken met premium
            materialen. Strak resultaat, veel voordeliger dan nieuw en vaak
            klaar binnen één dag.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="/prijs-berekenen" size="lg" arrow>
              Bereken je prijs
            </Button>
            <Button href="/projecten" variant="outline" size="lg">
              Bekijk projecten
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-espresso/70"
          >
            {["Gratis prijsindicatie", "Tien jaar garantie", "Weinig overlast"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-olive" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual — interactive before / after */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
          className="relative"
        >
          <div className="rounded-[2rem] bg-white/60 p-2 shadow-[0_40px_80px_-30px_rgba(35,27,18,0.45)] backdrop-blur">
            <BeforeAfter
              beforeId={KITCHENS.classic}
              afterId={KITCHENS.matteGreen}
              rounded="rounded-[1.6rem]"
              className="aspect-[4/3] sm:aspect-[5/5.2]"
            />
          </div>
          <span className="mt-3 block text-center text-xs font-medium text-muted-foreground">
            Sleep over de foto en zie het verschil
          </span>
        </motion.div>
      </div>
    </section>
  );
}
