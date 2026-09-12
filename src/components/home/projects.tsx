"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/site";
import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

const FEATURED = PROJECTS.slice(0, 5);

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

      <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4">
        {FEATURED.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "group relative overflow-hidden rounded-3xl",
              i === 0 && "col-span-2 row-span-2",
              i === 3 && "lg:col-span-2"
            )}
          >
            <Image
              src={img(p.after, { w: i === 0 ? 1000 : 700 })}
              alt={`${p.title} in ${p.place}`}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
            />
            <Image
              src={img(p.before, { w: i === 0 ? 1000 : 700 })}
              alt={`${p.title} voor de make over`}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover opacity-0 grayscale-[0.2] transition-opacity duration-700 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent" />

            <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-semibold text-espresso backdrop-blur">
              {p.tag}
            </span>

            <div className="absolute inset-x-4 bottom-4 text-ivory">
              <h3 className="font-display text-lg font-semibold leading-tight">
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
