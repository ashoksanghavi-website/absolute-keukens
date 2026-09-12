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
          <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4">
            {NOTES.map((n) => (
              <div key={n.title} className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-olive/12 text-olive">
                  <n.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-espresso">{n.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{n.body}</p>
                </div>
              </div>
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
