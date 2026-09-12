"use client";

import { motion } from "framer-motion";
import { TRUST } from "@/lib/site";

const MARQUEE = [
  "Keuken wrappen",
  "Fronten vernieuwen",
  "Werkbladen op maat",
  "Greeploos design",
  "Houtstructuur folie",
  "Steenlook bladen",
  "Duurzaam vernieuwen",
];

export function TrustBar() {
  return (
    <section className="relative border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-6 md:grid-cols-4">
        {TRUST.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center md:border-r md:border-border md:last:border-none"
          >
            <span className="font-display text-3xl font-semibold text-espresso sm:text-4xl">
              {t.value}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">{t.label}</span>
          </motion.div>
        ))}
      </div>

      {/* keyword marquee */}
      <div className="relative overflow-hidden border-t border-border bg-espresso py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pr-10">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-medium tracking-wide text-ivory/60">
              {word}
              <span className="h-1 w-1 rounded-full bg-brass" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
