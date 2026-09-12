"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Camera, Ruler, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img, KITCHENS } from "@/lib/images";
import { COMPANY } from "@/lib/site";

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
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-ivory">
      {/* ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-brass/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-olive/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
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

        {/* Visual */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(35,27,18,0.45)] sm:aspect-[4/4.4]"
          >
            <motion.div style={{ y: yImg, scale: scaleImg }} className="absolute inset-0">
              <Image
                src={img(KITCHENS.heroMain, { w: 1300 })}
                alt="Gewrapte moderne keuken van Absolute Keukens"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
          </motion.div>

          {/* Floating price card */}
          <motion.div
            style={{ y: yCard }}
            initial={{ opacity: 0, y: 30, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="absolute -bottom-6 -left-3 w-60 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-xl backdrop-blur-md sm:-left-8"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-brass-deep">
              <Camera className="h-4 w-4" />
              Fotoscan indicatie
            </div>
            <div className="mt-2 flex items-end gap-1">
              <span className="font-display text-3xl font-semibold text-espresso">€ 1.480</span>
              <span className="mb-1 text-xs text-muted-foreground">richtprijs</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-sand">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.4, ease: EASE, delay: 1.2 }}
                className="h-full rounded-full bg-gradient-to-r from-brass to-brass-deep"
              />
            </div>
            <p className="mt-2 text-[0.7rem] text-muted-foreground">
              Herkend: 11 fronten, 6 lades, 2 zijpanelen
            </p>
          </motion.div>

          {/* Floating rating chip */}
          <motion.div
            initial={{ opacity: 0, y: -20, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
            className="absolute -right-2 top-6 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-md sm:-right-5"
          >
            <Ruler className="h-4 w-4 text-olive" />
            <div className="leading-none">
              <div className="font-display text-sm font-semibold text-espresso">Op maat</div>
              <div className="text-[0.65rem] text-muted-foreground">ingemeten</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
