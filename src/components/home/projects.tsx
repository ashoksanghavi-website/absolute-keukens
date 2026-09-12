"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/site";
import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="projecten" className="bg-ivory">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Projecten"
          title="Recente make overs uit de regio"
          intro="Elk project is maatwerk. Beweeg over een foto en zie de verandering van voor naar na."
        />
        <div className="hidden md:block">
          <Button href="/projecten" variant="outline" arrow>
            Alle projecten
          </Button>
        </div>
      </div>

      <div className="mt-12 grid auto-rows-[210px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-3 lg:auto-rows-[248px]">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "group relative overflow-hidden rounded-3xl",
              i === 0 && "lg:col-span-2 lg:row-span-2"
            )}
          >
            <Image
              src={img(p.after, { w: i === 0 ? 1100 : 700 })}
              alt={`${p.title} in ${p.place}`}
              fill
              sizes={i === 0 ? "(max-width: 1024px) 100vw, 600px" : "(max-width: 1024px) 50vw, 33vw"}
              className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
            />
            <Image
              src={img(p.before, { w: i === 0 ? 1100 : 700 })}
              alt={`${p.title} voor de make over`}
              fill
              sizes={i === 0 ? "(max-width: 1024px) 100vw, 600px" : "(max-width: 1024px) 50vw, 33vw"}
              className="object-cover opacity-0 grayscale-[0.2] transition-opacity duration-700 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />

            <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-semibold text-espresso backdrop-blur">
              {p.tag}
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-espresso/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ivory opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
              Voor · Na
            </span>

            <div className="absolute inset-x-4 bottom-4 text-ivory">
              <h3 className={cn("font-display font-semibold leading-tight", i === 0 ? "text-2xl" : "text-lg")}>
                {p.title}
              </h3>
              <span className="mt-1 flex items-center gap-1.5 text-xs text-ivory/80">
                <MapPin className="h-3.5 w-3.5 text-brass-soft" />
                {p.place}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Button href="/projecten" variant="outline" arrow className="w-full">
          Alle projecten
        </Button>
      </div>
    </Section>
  );
}
