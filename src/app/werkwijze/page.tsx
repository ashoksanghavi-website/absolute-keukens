import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Leaf, Clock, Sparkles, Camera, Palette, Ruler, CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PROCESS } from "@/lib/site";
import { img, KITCHENS } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van eerste foto tot een keuken als nieuw. Ontdek hoe Absolute Keukens jouw keuken vernieuwt in vier heldere stappen, zonder verrassingen.",
};

const STEP_IMAGES = [KITCHENS.handleless, KITCHENS.matteGreen, KITCHENS.detail, KITCHENS.minimalWhite];
const STEP_ICONS = [Camera, Palette, Ruler, CalendarCheck];

const GUARANTEES = [
  { icon: ShieldCheck, title: "Tien jaar garantie", body: "Op de folie en het vakwerk. Kwaliteit waar je jaren plezier van hebt." },
  { icon: Clock, title: "Klaar in één dag", body: "De meeste keukens vernieuwen we binnen één werkdag." },
  { icon: Leaf, title: "Duurzame keuze", body: "Je bestaande keuken blijft staan, dat scheelt bergen afval." },
  { icon: Sparkles, title: "Netjes achtergelaten", body: "We werken schoon en ruimen alles op alsof we er niet waren." },
];

export default function WerkwijzePage() {
  return (
    <>
      <PageHero
        eyebrow="Werkwijze"
        crumb="Werkwijze"
        title={<>Van eerste foto tot <span className="text-gradient">nieuwe keuken</span></>}
        intro="Een helder traject in vier stappen. Jij bepaalt het tempo, wij regelen elk detail met zorg en vakmanschap."
      >
        <Button href="/prijs-berekenen" size="lg" arrow>
          Start met stap één
        </Button>
      </PageHero>

      <Section className="bg-ivory">
        <div className="relative">
          {/* vertical timeline spine */}
          <div className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brass/50 via-border to-transparent lg:block" />

          <div className="flex flex-col gap-14 sm:gap-20">
            {PROCESS.map((p, i) => {
              const reverse = i % 2 === 1;
              const IconCmp = STEP_ICONS[i];
              return (
                <div key={p.step} className="relative lg:pl-20">
                  {/* node on the spine */}
                  <div className="absolute left-0 top-1 hidden h-14 w-14 place-items-center rounded-2xl border border-brass/30 bg-card shadow-sm lg:grid">
                    <IconCmp className="h-6 w-6 text-brass-deep" />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brass text-[0.7rem] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>

                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <Reveal className={cn("relative", reverse && "lg:order-2")}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(35,27,18,0.5)]">
                        <Image
                          src={img(STEP_IMAGES[i], { w: 1000 })}
                          alt={p.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 520px"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/85 text-brass-deep backdrop-blur lg:hidden">
                          <IconCmp className="h-5 w-5" />
                        </span>
                      </div>
                      <span className="absolute -left-3 -top-6 font-display text-7xl font-semibold text-brass/20 sm:-left-5 sm:text-8xl lg:hidden">
                        {p.step}
                      </span>
                    </Reveal>

                    <Reveal delay={0.1} className={cn(reverse && "lg:order-1")}>
                      <span className="eyebrow text-brass-deep">Stap {p.step}</span>
                      <h2 className="mt-3 font-display text-2xl font-semibold text-espresso sm:text-3xl">
                        {p.title}
                      </h2>
                      <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
                        {p.body}
                      </p>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-espresso text-ivory">
        <div className="grain pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Onze belofte"
            title="Waar je op kunt rekenen"
            intro="Bij elke make over horen dezelfde vier zekerheden. Zo weet je precies wat je krijgt."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GUARANTEES.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.07}>
                <div className="group h-full rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-6 text-center backdrop-blur-sm transition-colors duration-500 hover:bg-ivory/[0.08]">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brass/15 text-brass-soft transition-colors duration-500 group-hover:bg-brass group-hover:text-white">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ivory">{g.title}</h3>
                  <p className="mt-2 text-sm text-ivory/65">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        variant="portrait"
        imageId={KITCHENS.islandDark}
        eyebrow="Klaar om te beginnen"
        title="Zet vandaag de eerste stap"
        text="Upload een paar foto's en ontvang direct je richtprijs. De rest regelen wij."
        secondary={{ label: "Bel ons direct", href: "/contact" }}
      />
    </>
  );
}
