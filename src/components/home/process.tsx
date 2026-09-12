"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { PROCESS } from "@/lib/site";

export function Process() {
  return (
    <Section id="werkwijze" className="relative overflow-hidden bg-espresso text-ivory">
      <div className="grain pointer-events-none absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-olive/25 blur-3xl"
      />
      <div className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Werkwijze"
          title="Van eerste foto tot nieuwe keuken in vier stappen"
          intro="Een helder traject zonder verrassingen. Jij bepaalt het tempo, wij regelen de rest."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-6 backdrop-blur-sm transition-colors duration-500 hover:bg-ivory/[0.08]"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-semibold text-brass">
                  {p.step}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-brass/60 to-transparent" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ivory">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/65">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
