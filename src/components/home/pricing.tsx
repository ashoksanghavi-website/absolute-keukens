"use client";

import { motion } from "framer-motion";
import { Check, Sparkle } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PACKAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="prijzen" className="relative overflow-hidden bg-ivory">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brass/10 blur-3xl" />

      <div className="relative">
        <SectionHeading
          align="center"
          eyebrow="Prijzen"
          title="Heldere pakketten, eerlijke prijzen"
          intro="Onze tarieven hangen af van de grootte van je keuken. Hieronder zie je waar je ongeveer op mag rekenen. Voor een prijs op maat gebruik je de fotoscan."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative flex flex-col rounded-[1.75rem] border p-7 transition-all duration-500",
                pkg.featured
                  ? "border-brass/40 bg-espresso text-ivory shadow-[0_40px_80px_-40px_rgba(35,27,18,0.6)] lg:-mt-4 lg:mb-4"
                  : "border-border bg-card hover:-translate-y-1 hover:border-brass/40 hover:shadow-[0_30px_60px_-40px_rgba(35,27,18,0.4)]"
              )}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brass px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  <Sparkle className="h-3.5 w-3.5" />
                  Meest gekozen
                </span>
              )}

              <h3 className={cn("font-display text-xl font-semibold", pkg.featured ? "text-ivory" : "text-espresso")}>
                {pkg.name}
              </h3>
              <p className={cn("mt-1 text-sm", pkg.featured ? "text-ivory/65" : "text-muted-foreground")}>
                {pkg.size}
              </p>

              <div className="mt-6 flex items-end gap-1.5">
                <span className={cn("text-sm font-medium", pkg.featured ? "text-ivory/60" : "text-muted-foreground")}>
                  vanaf
                </span>
                <span className={cn("font-display text-4xl font-semibold", pkg.featured ? "text-ivory" : "text-espresso")}>
                  € {pkg.from}
                </span>
              </div>

              <div className={cn("my-6 h-px w-full", pkg.featured ? "bg-ivory/12" : "bg-border")} />

              <ul className="flex-1 space-y-3">
                {pkg.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                        pkg.featured ? "bg-brass text-white" : "bg-olive/12 text-olive"
                      )}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className={pkg.featured ? "text-ivory/85" : "text-espresso/85"}>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="/prijs-berekenen"
                  variant={pkg.featured ? "primary" : "dark"}
                  arrow
                  className="w-full"
                >
                  Bereken jouw prijs
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
          Alle bedragen zijn vanafprijzen inclusief btw. De definitieve prijs
          bevestigen we na de fotoscan of een bezoek van ons team.
        </p>
      </div>
    </Section>
  );
}
