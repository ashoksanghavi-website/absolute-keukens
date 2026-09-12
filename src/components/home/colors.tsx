"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { COLOR_GROUPS } from "@/lib/site";

export function Colors() {
  return (
    <Section id="kleuren" className="bg-card">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Kleuren en materialen"
            title="Ruim honderd tinten om uit te kiezen"
            intro="Warm neutraal, diep en dramatisch of licht en luchtig. Kies een kleur en structuur die bij jouw huis en smaak past. Gratis kleurstalen aan huis."
          />
          <div className="mt-8">
            <Button href="/kleuren" variant="dark" arrow>
              Bekijk het kleurenoverzicht
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {COLOR_GROUPS.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-border bg-ivory p-5"
            >
              <div className="flex overflow-hidden rounded-2xl">
                {group.swatches.map((s) => (
                  <div key={s.name} className="group relative h-24 flex-1">
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-y-110" style={{ backgroundColor: s.hex }} />
                    <span className="pointer-events-none absolute inset-x-0 bottom-1 text-center text-[0.6rem] font-semibold text-white/0 transition-colors duration-300 group-hover:text-white/90">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-espresso">
                {group.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
