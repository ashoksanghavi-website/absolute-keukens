import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Sparkles, Handshake } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { TRUST } from "@/lib/site";
import { img, KITCHENS, DETAILS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Absolute Keukens vernieuwt keukens in de regio Rotterdam met vakmanschap en oog voor detail. Lees ons verhaal en waar we voor staan.",
};

const VALUES = [
  { icon: Sparkles, title: "Vakmanschap", body: "Strak, netjes en tot in de puntjes afgewerkt. We leveren werk waar we trots op zijn." },
  { icon: Heart, title: "Persoonlijk", body: "Geen standaardaanpak. We luisteren naar je wensen en denken met je mee." },
  { icon: Handshake, title: "Eerlijk", body: "Heldere prijzen en duidelijke afspraken. Geen verrassingen achteraf." },
];

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        crumb="Over ons"
        title={<>Vernieuwen met <span className="text-gradient">vakmanschap</span></>}
        intro="Absolute Keukens geeft keukens een tweede leven. Slim, duurzaam en met de zorg alsof het onze eigen keuken is."
      />

      <Section className="bg-ivory">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src={img(DETAILS.craft, { w: 700 })} alt="Vakmanschap" fill sizes="280px" className="object-cover" />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src={img(KITCHENS.woodWarm, { w: 700 })} alt="Vernieuwde keuken" fill sizes="280px" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow text-brass-deep">Ons verhaal</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-espresso sm:text-4xl">
              Een mooie keuken hoeft niet nieuw te zijn
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                Wij zagen te veel goede keukens op straat belanden, alleen omdat
                de fronten gedateerd waren. Zonde, vonden wij. Want de basis was
                vaak nog prima in orde.
              </p>
              <p>
                Daarom zijn we ons gaan specialiseren in het wrappen en
                vernieuwen van keukens. Met premium materialen en de juiste
                technieken geven we jouw keuken een compleet nieuwe uitstraling,
                voor een fractie van de prijs van een nieuwe keuken.
              </p>
              <p>
                Inmiddels vernieuwden we honderden keukens in de regio Rotterdam.
                Elk project met dezelfde aandacht, alsof het onze eigen keuken is.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/prijs-berekenen" arrow>
                Bereken je prijs
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* stats */}
      <div className="bg-espresso">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 px-6 py-12 md:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.label} className="text-center">
              <div className="font-display text-4xl font-semibold text-brass">{t.value}</div>
              <div className="mt-1 text-sm text-ivory/70">{t.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Section className="bg-card">
        <SectionHeading
          align="center"
          eyebrow="Waar we voor staan"
          title="Onze waarden"
          intro="Drie uitgangspunten die je terugziet in elk project dat we oppakken."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-ivory p-7 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-olive/12 text-olive">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-espresso">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
