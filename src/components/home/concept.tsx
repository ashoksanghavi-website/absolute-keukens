import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { BeforeAfter } from "@/components/ui/before-after";
import { Button } from "@/components/ui/button";
import { KITCHENS } from "@/lib/images";

const POINTS = [
  "Jouw indeling en kasten blijven staan",
  "Premium folie in ruim honderd kleuren",
  "Bestand tegen vocht, vet en dagelijks gebruik",
  "Een fractie van de prijs van een nieuwe keuken",
];

export function Concept() {
  return (
    <Section id="concept" className="bg-ivory">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <BeforeAfter beforeId={KITCHENS.classic} afterId={KITCHENS.matteGreen} />
        </Reveal>

        <div className="order-1 lg:order-2">
          <span className="eyebrow flex items-center gap-3 text-brass-deep">
            <span className="rule" />
            Wat is wrappen
          </span>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-[1.08] text-espresso sm:text-4xl md:text-[2.9rem]">
            Dezelfde keuken. Een compleet nieuw gevoel.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            Bij wrappen brengen we een hoogwaardige folie aan over je bestaande
            fronten en panelen. Geen sloopwerk, geen weken overlast. Wel een
            keuken die er weer als nieuw uitziet en aanvoelt.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[0.95rem] text-espresso/85">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-olive/12 text-olive">
                  <Check className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="/werkwijze" variant="dark" arrow>
              Zo werkt het
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
