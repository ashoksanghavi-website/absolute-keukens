"use client";

import { motion } from "framer-motion";
import { Camera, Palette, Ruler, CalendarCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { PROCESS } from "@/lib/site";

const ICONS = [Camera, Palette, Ruler, CalendarCheck];

export function Process() {
  return (
    <Section id="werkwijze" className="relative overflow-hidden bg-espresso text-ivory">
      <div className="grain pointer-events-none absolute inset-0 opacity-25" />
      <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-olive/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-brass/15 blur-3xl" />

      <div className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Werkwijze"
          title="Van eerste foto tot nieuwe keuken in vier stappen"
          intro="Een helder traject zonder verrassingen. Jij bepaalt het tempo, wij regelen de rest."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden lg:block">
            <div className="mx-auto h-px max-w-[80%] bg-gradient-to-r from-transparent via-brass/40 to-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto -mt-px h-px max-w-[80%] origin-left bg-gradient-to-r from-brass to-brass/0"
            />
          </div>

          <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => {
              const IconCmp = ICONS[i];
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative text-center lg:text-left"
                >
                  {/* node */}
                  <div className="relative mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-brass/30 bg-gradient-to-br from-ivory/[0.08] to-transparent backdrop-blur-sm transition-all duration-500 group-hover:border-brass group-hover:from-brass/20 lg:mx-0">
                    <IconCmp className="h-6 w-6 text-brass-soft transition-colors duration-500 group-hover:text-white" />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brass text-[0.7rem] font-bold text-white shadow-lg">
                      {i + 1}
                    </span>
                  </div>

                  <span className="font-display text-5xl font-semibold text-ivory/[0.08] transition-colors duration-500 group-hover:text-brass/20">
                    {p.step}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ivory">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/65">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
