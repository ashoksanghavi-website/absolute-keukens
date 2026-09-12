import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/ui/before-after";
import { CtaBand } from "@/components/site/cta-band";
import { PROJECTS, TRUST } from "@/lib/site";
import { KITCHENS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Bekijk recente keuken make overs van Absolute Keukens uit de regio Rotterdam. Beweeg over elke foto en zie de verandering van voor naar na.",
};

export default function ProjectenPage() {
  return (
    <>
      <PageHero
        eyebrow="Projecten"
        crumb="Projecten"
        title={<>Recente make overs <span className="text-gradient">uit de regio</span></>}
        intro="Elk project is maatwerk. Sleep over een foto en zie hoe dezelfde keuken volledig verandert van karakter."
      >
        <Button href="/prijs-berekenen" size="lg" arrow>
          Bereken je prijs
        </Button>
      </PageHero>

      {/* stat strip */}
      <div className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-6 px-6 py-8 md:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.label} className="text-center">
              <div className="font-display text-3xl font-semibold text-espresso">{t.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Section className="bg-ivory">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <div className="group">
                <BeforeAfter beforeId={p.before} afterId={p.after} />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-espresso">
                      {p.title}
                    </h2>
                    <span className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-brass-deep" />
                      {p.place}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-espresso/70">
                    {p.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        variant="brass"
        imageId={KITCHENS.islandDark}
        eyebrow="Word onze volgende make over"
        title="Jouw keuken hier over een paar weken?"
        text="Bekijk wat een make over voor jouw keuken kan betekenen. Bereken vrijblijvend je richtprijs."
        secondary={{ label: "Vraag een offerte aan", href: "/contact" }}
      />
    </>
  );
}
