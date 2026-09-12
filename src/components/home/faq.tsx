import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <Section id="faq" className="bg-ivory">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Veelgestelde vragen"
            title="Goed om te weten"
            intro="De antwoorden op de vragen die we het vaakst horen. Staat jouw vraag er niet bij? We helpen je graag persoonlijk verder."
          />
          <div className="mt-8">
            <Button href="/contact" variant="outline" arrow>
              Stel je vraag
            </Button>
          </div>
        </div>

        <Reveal>
          <Accordion items={FAQS.slice(0, 5)} />
        </Reveal>
      </div>
    </Section>
  );
}
