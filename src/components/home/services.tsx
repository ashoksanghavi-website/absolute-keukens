"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Icon, type IconName } from "@/components/site/icon";
import { SERVICES } from "@/lib/site";
import { img } from "@/lib/images";

export function Services() {
  return (
    <Section id="diensten" className="bg-card">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Onze diensten"
          title="Alles voor een keuken die klopt"
          intro="Van een frisse foliekleur tot een compleet nieuw werkblad. Wij pakken jouw keuken aan tot in het laatste detail."
        />
      </div>

      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <RevealItem key={s.id}>
            <Link
              href={`/diensten#${s.id}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-ivory p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(35,27,18,0.35)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-espresso text-brass-soft transition-colors duration-500 group-hover:bg-brass group-hover:text-white">
                  <Icon name={s.icon as IconName} className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-espresso/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-deep" />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-espresso">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>

              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={img(s.image, { w: 800 })}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium text-espresso/70"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
