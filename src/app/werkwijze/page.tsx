import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Leaf, Clock, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PROCESS } from "@/lib/site";
import { img, KITCHENS } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van eerste foto tot een keuken als nieuw. Ontdek hoe Absolute Keukens jouw keuken vernieuwt in vier heldere stappen, zonder verrassingen.",
};

const STEP_IMAGES = [KITCHENS.handleless, KITCHENS.matteGreen, KITCHENS.detail, KITCHENS.minimalWhite];

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
        <div className="flex flex-col gap-12 sm:gap-16">
          {PROCESS.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={p.step} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <Reveal className={cn("relative", reverse && "lg:order-2")}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(35,27,18,0.5)]">
                    <Image
                      src={img(STEP_IMAGES[i], { w: 1000 })}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute -left-3 -top-5 font-display text-7xl font-semibold text-brass/25 sm:-left-5 sm:text-8xl">
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
            );
          })}
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading
          align="center"
          eyebrow="Onze belofte"
          title="Waar je op kunt rekenen"
          intro="Bij elke make over horen dezelfde vier zekerheden. Zo weet je precies wat je krijgt."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-border bg-ivory p-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-olive/12 text-olive">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-espresso">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
