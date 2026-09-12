import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Icon, type IconName } from "@/components/site/icon";
import { SERVICES, FINISHES } from "@/lib/site";
import { img, KITCHENS } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Van keuken wrappen tot nieuwe werkbladen en grepen. Ontdek alle manieren waarop Absolute Keukens jouw keuken vernieuwt zonder verbouwen.",
};

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Onze diensten"
        crumb="Diensten"
        title={<>Alles voor een keuken <span className="text-gradient">die klopt</span></>}
        intro="Een frisse kleur, een strak nieuw werkblad of net dat andere handvat. Wij pakken jouw keuken aan tot in het laatste detail, altijd op maat."
      >
        <Button href="/prijs-berekenen" size="lg" arrow>
          Bereken je prijs
        </Button>
      </PageHero>

      {/* Alternating service rows */}
      <Section className="bg-ivory">
        <div className="flex flex-col gap-16 sm:gap-20">
          {SERVICES.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.id}
                id={s.id}
                className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal className={cn(reverse && "lg:order-2")}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(35,27,18,0.5)]">
                    <Image
                      src={img(s.image, { w: 1000 })}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={cn(reverse && "lg:order-1")}>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-espresso text-brass-soft">
                    <Icon name={s.icon as IconName} className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-espresso sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-md text-muted-foreground">{s.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-espresso/85">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-olive/12 text-olive">
                          <Check className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Finishes */}
      <Section className="bg-card">
        <SectionHeading
          align="center"
          eyebrow="Afwerkingen"
          title="Kies de structuur die past"
          intro="Elke afwerking heeft zijn eigen karakter. Voel het verschil met gratis stalen bij jou thuis."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FINISHES.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-3xl border border-border bg-ivory">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img(f.image, { w: 700 })}
                    alt={f.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
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
      </Section>

      <CtaBand
        variant="image"
        imageId={KITCHENS.woodWarm}
        eyebrow="Benieuwd naar de mogelijkheden"
        title="Laat ons meedenken over jouw keuken"
        text="Van kleuradvies tot een compleet nieuw werkblad. Vertel ons je wensen en we maken er samen iets moois van."
        secondary={{ label: "Neem contact op", href: "/contact" }}
      />
    </>
  );
}
