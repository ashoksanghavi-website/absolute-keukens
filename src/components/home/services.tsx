"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/site/icon";
import { SERVICES } from "@/lib/site";
import { img } from "@/lib/images";

export function Services() {
  return (
    <Section id="diensten" className="bg-card">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Onze diensten"
          title="Alles voor een keuken die klopt"
          intro="Van een frisse foliekleur tot een compleet nieuw werkblad. Wij pakken jouw keuken aan tot in het laatste detail."
        />
        <div className="hidden md:block">
          <Button href="/diensten" variant="outline" arrow>
            Alle diensten
          </Button>
        </div>
      </div>

      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <RevealItem key={s.id}>
            <Link
              href={`/diensten#${s.id}`}
              className="group relative flex h-[26rem] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-border bg-espresso p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-30px_rgba(35,27,18,0.55)]"
            >
              {/* Image */}
              <Image
                src={img(s.image, { w: 800 })}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/5 transition-opacity duration-500 group-hover:from-espresso group-hover:via-espresso/70" />

              {/* Top row: number + icon */}
              <div className="absolute inset-x-6 top-6 flex items-start justify-between">
                <span className="font-display text-sm font-semibold tracking-widest text-brass-soft">
                  0{i + 1}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-ivory backdrop-blur-md transition-colors duration-500 group-hover:border-brass group-hover:bg-brass group-hover:text-white">
                  <Icon name={s.icon as IconName} className="h-5 w-5" />
                </span>
              </div>

              {/* Bottom content */}
              <div className="relative">
                <h3 className="font-display text-xl font-semibold text-ivory">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ivory/70">
                  {s.short}
                </p>

                {/* Reveal on hover */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:pt-4">
                  <ul className="min-h-0 space-y-1.5 overflow-hidden">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-ivory/85">
                        <Check className="h-3.5 w-3.5 text-brass-soft" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-soft">
                  Meer weten
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
