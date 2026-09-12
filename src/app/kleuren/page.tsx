import type { Metadata } from "next";
import Image from "next/image";
import { Palette, Home } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { COLOR_GROUPS, FINISHES } from "@/lib/site";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kleuren en materialen",
  description:
    "Ruim honderd kleuren en verschillende structuren voor je nieuwe keuken. Van warm neutraal tot diep en dramatisch. Gratis kleurstalen aan huis.",
};

export default function KleurenPage() {
  return (
    <>
      <PageHero
        eyebrow="Kleuren en materialen"
        crumb="Kleuren"
        title={<>Ruim honderd tinten <span className="text-gradient">om te kiezen</span></>}
        intro="Warm neutraal, diep en dramatisch of licht en luchtig. Vind de kleur en structuur die jouw keuken helemaal van jou maken."
      >
        <Button href="/contact" size="lg" arrow>
          Vraag gratis stalen aan
        </Button>
      </PageHero>

      <Section className="bg-ivory">
        <div className="grid gap-6 sm:grid-cols-2">
          {COLOR_GROUPS.map((group, gi) => (
            <Reveal key={group.name} delay={(gi % 2) * 0.08}>
              <div className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-brass-deep">
                  <Palette className="h-4 w-4" />
                  <h2 className="font-display text-lg font-semibold text-espresso">
                    {group.name}
                  </h2>
                </div>
                <div className="mt-5 grid grid-cols-4 gap-3">
                  {group.swatches.map((s) => (
                    <div key={s.name} className="group text-center">
                      <div
                        className="aspect-square w-full rounded-2xl shadow-inner ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: s.hex }}
                      />
                      <span className="mt-2 block text-xs font-medium text-espresso/80">
                        {s.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading
          align="center"
          eyebrow="Structuren"
          title="Voel het verschil"
          intro="Elke afwerking geeft je keuken een eigen sfeer. Combineer kleur en structuur naar smaak."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FINISHES.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-3xl border border-border bg-ivory">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={img(f.image, { w: 600 })}
                    alt={f.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-espresso">{f.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-brass/25 bg-gradient-to-br from-secondary to-ivory p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-espresso text-brass-soft">
                <Home className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-espresso">
                  Twijfel je over de kleur?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We komen langs met stalen zodat je thuis in je eigen licht kunt kiezen.
                </p>
              </div>
            </div>
            <Button href="/contact" arrow>
              Plan een staalbezoek
            </Button>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        variant="panel"
        eyebrow="Jouw kleur gevonden?"
        title="Zie je kleur terug in je eigen keuken"
        text="Bereken je prijs of vraag gratis stalen aan en kies thuis, in je eigen licht, de perfecte tint."
        secondary={{ label: "Vraag stalen aan", href: "/contact" }}
      />
    </>
  );
}
