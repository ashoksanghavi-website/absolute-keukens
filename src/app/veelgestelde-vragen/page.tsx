import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op de meest gestelde vragen over keuken wrappen, garantie, planning en de prijsindicatie van Absolute Keukens.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Veelgestelde vragen"
        crumb="Veelgestelde vragen"
        title={<>Goed om <span className="text-gradient">te weten</span></>}
        intro="De antwoorden op de vragen die we het vaakst horen. Staat jouw vraag er niet bij? We helpen je graag persoonlijk verder."
      >
        <Button href="/contact" size="lg" arrow>
          Stel je vraag
        </Button>
      </PageHero>

      <Section className="bg-ivory">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion items={FAQS} defaultOpen={0} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
