import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { Icon, type IconName } from "@/components/site/icon";
import { REASONS } from "@/lib/site";
import { img, DETAILS } from "@/lib/images";

export function Reasons() {
  return (
    <Section id="waarom" className="bg-card">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Waarom Absolute"
            title="Slim vernieuwen loont, op elk vlak"
            intro="Beter voor je portemonnee, je planning en de planeet. Daarom kiezen zoveel mensen voor een make over in plaats van een nieuwe keuken."
          />
          <Reveal delay={0.15} className="mt-8 hidden overflow-hidden rounded-3xl lg:block">
            <div className="relative aspect-[4/3]">
              <Image
                src={img(DETAILS.craft, { w: 900 })}
                alt="Vakmanschap bij het wrappen van een keuken"
                fill
                sizes="480px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-5 sm:grid-cols-2">
          {REASONS.map((r) => (
            <RevealItem
              key={r.title}
              className="group rounded-3xl border border-border bg-ivory p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brass/40 hover:shadow-[0_24px_50px_-30px_rgba(35,27,18,0.35)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-olive/12 text-olive transition-colors duration-500 group-hover:bg-olive group-hover:text-ivory">
                <Icon name={r.icon as IconName} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-espresso">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
