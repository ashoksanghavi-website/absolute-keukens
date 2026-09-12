"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

type Variant = "olive" | "image" | "brass" | "portrait" | "panel";

interface CtaBandProps {
  variant: Variant;
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  imageId?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const DEFAULTS = {
  primary: { label: "Bereken je prijs", href: "/prijs-berekenen" },
  secondary: { label: "Plan een adviesgesprek", href: "/contact" },
};

export function CtaBand({
  variant,
  eyebrow = "Klaar voor de make over",
  title,
  text,
  primary = DEFAULTS.primary,
  secondary,
  imageId,
}: CtaBandProps) {
  const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.7, ease: EASE },
  } as const;

  /* ---------- olive: split ---------- */
  if (variant === "olive") {
    return (
      <section className="relative overflow-hidden bg-olive text-ivory">
        <div className="grain pointer-events-none absolute inset-0 opacity-30" />
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brass/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:py-20">
          <motion.div {...reveal}>
            <p className="eyebrow text-brass-soft">{eyebrow}</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.05] text-ivory md:text-5xl">
              {title}
            </h2>
            {text && <p className="mt-4 max-w-md text-ivory/75">{text}</p>}
          </motion.div>
          <motion.div {...reveal} className="flex flex-col gap-3 md:items-end">
            <Button href={primary.href} variant="primary" size="lg" arrow>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="outline" size="lg" className="border-ivory/30 text-ivory hover:border-brass-soft hover:text-brass-soft">
                {secondary.label}
              </Button>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  /* ---------- image: full-bleed photo ---------- */
  if (variant === "image") {
    return (
      <section className="relative overflow-hidden">
        <Image
          src={img(imageId ?? "1600585154340-be6161a56a0c", { w: 1800 })}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/78" />
        <div className="grain pointer-events-none absolute inset-0 opacity-30" />
        <motion.div {...reveal} className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <p className="eyebrow text-brass-soft">{eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-ivory md:text-[3.2rem]">
            {title}
          </h2>
          {text && <p className="mx-auto mt-5 max-w-xl text-ivory/75">{text}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={primary.href} variant="primary" size="lg" arrow>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="outline" size="lg" className="border-ivory/30 text-ivory hover:border-brass-soft hover:text-brass-soft">
                {secondary.label}
              </Button>
            )}
          </div>
        </motion.div>
      </section>
    );
  }

  /* ---------- brass: warm gradient panel ---------- */
  if (variant === "brass") {
    return (
      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brass via-[#cf9c48] to-brass-deep px-6 py-14 text-center sm:px-10 md:py-16"
          >
            <div className="grain pointer-events-none absolute inset-0 opacity-20" />
            <div aria-hidden className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-espresso/15 blur-3xl" />
            <div className="relative">
              <p className="eyebrow text-espresso/70">{eyebrow}</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-espresso md:text-5xl">
                {title}
              </h2>
              {text && <p className="mx-auto mt-4 max-w-lg text-espresso/75">{text}</p>}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={primary.href} variant="dark" size="lg" arrow>
                  {primary.label}
                </Button>
                {secondary && (
                  <Button href={secondary.href} variant="outline" size="lg" className="border-espresso/25 text-espresso hover:border-espresso hover:text-espresso">
                    {secondary.label}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  /* ---------- portrait: espresso card + image ---------- */
  if (variant === "portrait") {
    return (
      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="relative grid overflow-hidden rounded-[2.5rem] bg-espresso text-ivory md:grid-cols-2">
            <motion.div {...reveal} className="relative z-10 flex flex-col justify-center p-8 sm:p-12">
              <div className="grain pointer-events-none absolute inset-0 opacity-20" />
              <div className="relative">
                <p className="eyebrow text-brass-soft">{eyebrow}</p>
                <h2 className="mt-4 max-w-md font-display text-4xl font-semibold leading-[1.05] text-ivory md:text-5xl">
                  {title}
                </h2>
                {text && <p className="mt-4 max-w-sm text-ivory/70">{text}</p>}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={primary.href} variant="primary" size="lg" arrow>
                    {primary.label}
                  </Button>
                  {secondary && (
                    <Button href={secondary.href} variant="outline" size="lg" className="border-ivory/25 text-ivory hover:border-brass-soft hover:text-brass-soft">
                      {secondary.label}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
            <div className="relative min-h-[240px] md:min-h-full">
              <Image
                src={img(imageId ?? "1616486338812-3dadae4b4ace", { w: 1000 })}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/20 to-transparent md:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- panel: light rounded ---------- */
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-[2.5rem] border border-brass/20 bg-gradient-to-br from-secondary via-ivory to-secondary px-6 py-14 text-center sm:px-10"
        >
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brass/20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-olive/15 blur-3xl" />
          <div className="relative">
            <p className="eyebrow text-brass-deep">{eyebrow}</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-espresso md:text-5xl">
              {title}
            </h2>
            {text && <p className="mx-auto mt-4 max-w-lg text-muted-foreground">{text}</p>}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={primary.href} variant="primary" size="lg" arrow>
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} variant="outline" size="lg">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
