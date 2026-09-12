import Image from "next/image";
import { MessageCircle, HelpCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FAQS, COMPANY } from "@/lib/site";
import { img, DETAILS } from "@/lib/images";

export function Faq() {
  return (
    <Section id="faq" className="bg-card">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14">
        {/* Left: help panel */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-espresso p-8 text-ivory">
            <div className="grain pointer-events-none absolute inset-0 opacity-25" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brass/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/5 px-3 py-1 text-xs font-semibold text-brass-soft">
                <HelpCircle className="h-3.5 w-3.5" />
                Veelgestelde vragen
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-ivory sm:text-4xl">
                Goed om te weten
              </h2>
              <p className="mt-4 max-w-sm text-ivory/70">
                De antwoorden op de vragen die we het vaakst horen. Staat jouw
                vraag er niet bij? We helpen je graag persoonlijk verder.
              </p>

              <div className="mt-7 flex items-center gap-4 rounded-2xl border border-ivory/10 bg-ivory/[0.04] p-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brass/40">
                  <Image src={img(DETAILS.team, { w: 160, h: 160 })} alt="Ons team" fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ivory">Nog een vraag?</div>
                  <a href={COMPANY.phoneHref} className="text-sm text-brass-soft transition-colors hover:text-brass">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" size="sm" arrow>
                  Stel je vraag
                </Button>
                <Button
                  href={COMPANY.whatsapp}
                  variant="outline"
                  size="sm"
                  className="border-ivory/25 text-ivory hover:border-brass-soft hover:text-brass-soft"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: accordion */}
        <Reveal delay={0.1}>
          <div className="rounded-[1.75rem] border border-border bg-ivory px-6 sm:px-8">
            <Accordion items={FAQS.slice(0, 5)} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
