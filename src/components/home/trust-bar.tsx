"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";
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
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-12 sm:px-6 md:grid-cols-4">
        {TRUST.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col items-center text-center md:border-r md:border-border md:last:border-none"
          >
            <span className="font-display text-4xl font-semibold text-espresso sm:text-[2.8rem]">
              <CountUp value={t.num} decimals={t.decimals} suffix={t.suffix} />
            </span>
            {/* animated brass underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 h-0.5 w-10 origin-center rounded-full bg-gradient-to-r from-brass to-brass-soft"
            />
            <span className="mt-2.5 text-sm text-muted-foreground">{t.label}</span>
          </motion.div>
        ))}
      </div>

      {/* keyword marquee */}
      <div className="relative overflow-hidden border-t border-border bg-espresso py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-espresso to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-espresso to-transparent" />
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
