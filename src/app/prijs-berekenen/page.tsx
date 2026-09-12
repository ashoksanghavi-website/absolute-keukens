import type { Metadata } from "next";
import { Camera, Ruler, ShieldCheck, Clock } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PriceScanner } from "@/components/price/price-scanner";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Prijs berekenen met de fotoscan",
  description:
    "Upload een paar foto's van je keuken en ontvang direct een heldere prijsindicatie voor het wrappen en vernieuwen. Gratis en vrijblijvend.",
};

const NOTES = [
  { icon: Camera, title: "Twee tot vier foto's", body: "Verschillende hoeken geven het beste beeld." },
  { icon: Ruler, title: "Automatisch opgemeten", body: "Fronten, lades en panelen worden geteld." },
  { icon: Clock, title: "Direct inzicht", body: "Je richtprijs verschijnt binnen een minuut." },
  { icon: ShieldCheck, title: "Altijd vrijblijvend", body: "De definitieve prijs volgt na een controle." },
];

export default function PrijsBerekenenPage() {
  return (
    <>
      <PageHero
        eyebrow="Prijs berekenen"
        crumb="Prijs berekenen"
        title={<>Wat kost jouw <span className="text-gradient">make over?</span></>}
        intro="Onze fotoscan bekijkt je keuken en zet wat hij ziet om in een eerlijke richtprijs. Probeer het hieronder met een eigen foto of een voorbeeld."
      />

      <section className="pb-8">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <Reveal>
            <PriceScanner />
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NOTES.map((n, i) => (
              <Reveal
                key={n.title}
                delay={i * 0.07}
                className="group rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brass/40 hover:shadow-[0_24px_50px_-32px_rgba(35,27,18,0.4)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-espresso text-brass-soft transition-colors duration-300 group-hover:bg-brass group-hover:text-white">
                  <n.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-espresso">{n.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{n.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            Je foto's worden alleen gebruikt om jouw prijsindicatie te maken. De
            getoonde richtprijs is een automatische inschatting op basis van de
            beelden. De definitieve offerte bevestigen we altijd na een controle
            door ons eigen team.
          </p>
        </div>
      </section>
    </>
  );
}
