import type { Metadata } from "next";
import Image from "next/image";
import { Award, ShieldCheck, Eye, Palette, Zap, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { TRUST } from "@/lib/site";
import { img, KITCHENS, DETAILS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Bij Absolute Keukens draait alles om vakmanschap, betrouwbaarheid en oog voor detail. Wij vernieuwen keukens met hoogwaardige wraps en een strakke afwerking, zonder verbouwen.",
};

const VALUES = [
  { icon: Award, title: "Vakmanschap", body: "Strak, netjes en tot in de puntjes afgewerkt. We leveren werk waar we trots op zijn." },
  { icon: ShieldCheck, title: "Betrouwbaarheid", body: "Duidelijke afspraken en heldere prijzen. We komen na wat we beloven, elke keer weer." },
  { icon: Eye, title: "Oog voor detail", body: "Van naadloze randen tot de laatste greep. Juist de details maken het verschil." },
];

const PILLARS = [
  {
    icon: Palette,
    tag: "Stijl",
    title: "Een frisse, moderne uitstraling",
    body: "Van warm en natuurlijk tot strak en tijdloos. Wij geven elke keuken een look die past bij jouw huis en smaak, met premium folie in ruim honderd kleuren.",
    image: KITCHENS.matteGreen,
  },
  {
    icon: Zap,
    tag: "Slim",
    title: "Snel, betaalbaar en duurzaam",
    body: "Vernieuwen zonder verbouwen. Je bestaande keuken blijft staan, wat scheelt in tijd, kosten en afval. Vaak sta je binnen één dag weer in een keuken als nieuw.",
    image: KITCHENS.woodWarm,
  },
];

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        crumb="Over ons"
        title={<>Waarom voor <span className="text-gradient">Absolute</span> kiezen?</>}
        intro="Bij Absolute draait alles om vakmanschap, betrouwbaarheid en oog voor detail. Wij vernieuwen keukens met hoogwaardige wraps en een strakke afwerking, helemaal zonder verbouwen."
      />

      {/* Story */}
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
                Daarom specialiseren we ons in het wrappen en vernieuwen van
                keukens. Met hoogwaardige, duurzame materialen en de juiste
                technieken geven we jouw keuken een compleet nieuwe uitstraling,
                voor een fractie van de prijs van een nieuwe keuken.
              </p>
              <p>
                Snel, betaalbaar en professioneel, met een persoonlijke aanpak.
                Elk project pakken we aan alsof het onze eigen keuken is.
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

      {/* Tagline + stats band */}
      <section className="relative overflow-hidden bg-espresso text-ivory">
        <div className="grain pointer-events-none absolute inset-0 opacity-20" />
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-brass/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-brass-soft">Onze belofte</p>
            <p className="mt-4 font-display text-3xl font-semibold leading-[1.15] text-ivory sm:text-4xl md:text-[2.75rem]">
              Kies voor gemak. Kies voor kwaliteit.{" "}
              <span className="text-brass-soft">Kies voor Absolute.</span>
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-y-8 border-t border-ivory/10 pt-10 md:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.label} className="text-center">
                <div className="font-display text-4xl font-semibold text-brass">{t.value}</div>
                <div className="mt-1 text-sm text-ivory/70">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <Section className="bg-ivory">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow text-brass-deep">Onze visie</span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-[1.1] text-espresso sm:text-4xl">
              Iedereen verdient een inspirerende ruimte
            </h2>
            <div className="mt-5 max-w-md space-y-4 text-muted-foreground">
              <p>
                Wij geloven dat je in een ruimte moet kunnen wonen die je
                inspireert, zonder de stress van een verbouwing of de hoge kosten
                van een compleet nieuwe keuken.
              </p>
              <p>
                Daarom maken we kwaliteitsdesign toegankelijk met duurzame
                wrapoplossingen en oog voor detail. Zo krijgt jouw keuken de
                uitstraling die past bij hoe jij wilt leven.
              </p>
            </div>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Zonder verbouwstress", "Betaalbaar en eerlijk", "Duurzame materialen", "Persoonlijke aanpak"].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-espresso/85">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-olive/12 text-olive">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(35,27,18,0.5)]">
              <Image src={img(KITCHENS.marble, { w: 1000 })} alt="Onze visie op keukens" fill sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Stijl & Slim pillars */}
      <Section className="bg-card">
        <SectionHeading
          align="center"
          eyebrow="Waar we voor staan"
          title="Stijl én slim, in alles wat we doen"
          intro="Twee uitgangspunten die je terugziet in elk project. Mooi om te zien en slim gekozen."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-ivory">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={img(p.image, { w: 900 })} alt={p.title} fill sizes="(max-width: 768px) 100vw, 520px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
                  <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-espresso backdrop-blur">
                    <p.icon className="h-4 w-4 text-brass-deep" />
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-espresso">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-ivory">
        <SectionHeading
          align="center"
          eyebrow="Onze waarden"
          title="Vakmanschap, betrouwbaarheid en oog voor detail"
          intro="Drie uitgangspunten die je terugziet in elk project dat we oppakken."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-brass/40 hover:shadow-[0_36px_70px_-40px_rgba(35,27,18,0.45)]">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brass to-brass-soft transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-olive/12 text-olive transition-colors duration-500 group-hover:bg-olive group-hover:text-ivory">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-5xl font-semibold text-espresso/[0.07] transition-colors duration-500 group-hover:text-brass/25">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-espresso">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        variant="portrait"
        imageId={KITCHENS.islandDark}
        eyebrow="Zullen we kennismaken"
        title="Maak van je ruimte iets bijzonders"
        text="Vraag vrijblijvend een offerte aan of plan een adviesgesprek. We denken graag met je mee."
        primary={{ label: "Offerte aanvragen", href: "/contact#offerte" }}
        secondary={{ label: "Bereken je prijs", href: "/prijs-berekenen" }}
      />
    </>
  );
}
