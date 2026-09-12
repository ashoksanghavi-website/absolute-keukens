"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumb?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <section className="grain relative overflow-hidden bg-ivory pt-12 pb-14 sm:pt-16 sm:pb-16">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 rounded-full bg-brass/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-olive/10 blur-3xl" />
      <div className={cn("relative mx-auto max-w-7xl px-5 sm:px-6", center && "text-center")}>
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn("flex items-center gap-1.5 text-xs font-medium text-muted-foreground", center && "justify-center")}
        >
          <Link href="/" className="transition-colors hover:text-brass-deep">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-espresso">{crumb ?? eyebrow}</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={cn("eyebrow mt-6 flex items-center gap-3 text-brass-deep", center && "justify-center")}
        >
          <span className="rule" />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className={cn(
            "mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-espresso sm:text-5xl md:text-[3.4rem]",
            center && "mx-auto"
          )}
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className={cn("mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground", center && "mx-auto")}
          >
            {intro}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
