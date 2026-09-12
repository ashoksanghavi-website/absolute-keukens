"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Ruler, Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { img, KITCHENS } from "@/lib/images";

const STEPS = [
  { icon: Camera, title: "Upload je foto's", body: "Twee tot vier hoeken van je keuken volstaan." },
  { icon: Ruler, title: "Wij herkennen de onderdelen", body: "Fronten, lades en panelen worden geteld en ingemeten." },
  { icon: Palette, title: "Direct je richtprijs", body: "Een heldere indicatie, gratis en vrijblijvend." },
];

const DETECTED = [
  { label: "Fronten", value: 11 },
  { label: "Lades", value: 6 },
  { label: "Zijpanelen", value: 2 },
];

export function FotoscanCta() {
  return (
    <section className="bg-ivory py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-brass/20 bg-gradient-to-br from-secondary via-ivory to-secondary p-6 sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brass/20 blur-3xl"
          />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Copy */}
            <div>
              <span className="eyebrow flex items-center gap-3 text-brass-deep">
                <span className="rule" />
                Prijs berekenen
              </span>
              <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-[1.08] text-espresso sm:text-4xl md:text-[2.7rem]">
                Weet binnen een minuut wat jouw make over kost
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
                Onze fotoscan bekijkt je keuken en zet wat hij ziet om in een
                eerlijke richtprijs. Geen wachten op een afspraak, gewoon direct
                inzicht.
              </p>

              <ul className="mt-8 space-y-5">
                {STEPS.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.08} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-espresso text-brass-soft">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-espresso">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <div className="mt-9">
                <Button href="/prijs-berekenen" size="lg" arrow>
                  Start de fotoscan
                </Button>
              </div>
            </div>

            {/* Mock scanner */}
            <Reveal delay={0.1} className="relative">
              <div className="relative aspect-[4/3.4] overflow-hidden rounded-3xl border border-white/60 shadow-[0_40px_80px_-30px_rgba(35,27,18,0.5)]">
                <Image
                  src={img(KITCHENS.handleless, { w: 1000 })}
                  alt="Fotoscan van een keuken"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-espresso/10" />

                {/* scan sweep */}
                <motion.div
                  initial={{ y: "-10%" }}
                  animate={{ y: "110%" }}
                  transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-brass/40 to-transparent"
                >
                  <div className="absolute bottom-0 h-0.5 w-full bg-brass shadow-[0_0_20px_rgba(190,138,58,0.9)]" />
                </motion.div>

                {/* corner brackets */}
                {[
                  "left-4 top-4 border-l-2 border-t-2",
                  "right-4 top-4 border-r-2 border-t-2",
                  "left-4 bottom-4 border-l-2 border-b-2",
                  "right-4 bottom-4 border-r-2 border-b-2",
                ].map((c) => (
                  <span key={c} className={`absolute h-7 w-7 rounded-[3px] border-brass-soft ${c}`} />
                ))}

                {/* detected chips */}
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                  {DETECTED.map((d, i) => (
                    <motion.span
                      key={d.label}
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.2, duration: 0.4 }}
                      className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-espresso backdrop-blur"
                    >
                      <Check className="h-3 w-3 text-olive" />
                      {d.value} {d.label}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* price pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-brass/30 bg-white px-6 py-3 text-center shadow-xl"
              >
                <div className="text-[0.65rem] font-semibold uppercase tracking-widest text-brass-deep">
                  Richtprijs
                </div>
                <div className="font-display text-2xl font-semibold text-espresso">
                  € 1.450 tot € 1.650
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
