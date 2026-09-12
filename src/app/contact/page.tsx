import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Absolute Keukens in Hoogvliet Rotterdam. Bel, mail of vraag vrijblijvend een offerte aan voor het vernieuwen van je keuken.",
};

const DETAILS = [
  { icon: Phone, label: "Telefoon", value: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: "E-mail", value: COMPANY.email, href: COMPANY.emailHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Stuur een bericht", href: COMPANY.whatsapp },
  { icon: MapPin, label: "Adres", value: COMPANY.address },
];

const HOURS = [
  { day: "Maandag tot vrijdag", time: "09:00 tot 17:30" },
  { day: "Zaterdag", time: "Op afspraak" },
  { day: "Zondag", time: "Gesloten" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumb="Contact"
        title={<>Laten we jouw keuken <span className="text-gradient">bespreken</span></>}
        intro="Bel, mail of vul het formulier in. We denken graag met je mee en reageren binnen één werkdag."
      />

      <Section className="bg-ivory">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Details */}
          <Reveal className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {DETAILS.map((d) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-espresso text-brass-soft">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {d.label}
                      </div>
                      <div className="truncate font-medium text-espresso">{d.value}</div>
                    </div>
                  </>
                );
                return d.href ? (
                  <a
                    key={d.label}
                    href={d.href}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/40"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={d.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-brass-deep">
                <Clock className="h-4 w-4" />
                <h3 className="font-display text-base font-semibold text-espresso">Openingstijden</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium text-espresso">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-secondary min-h-[180px]">
              <div className="grain absolute inset-0 opacity-40" />
              <div className="relative flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                <MapPin className="h-6 w-6 text-brass-deep" />
                <p className="font-display text-lg font-semibold text-espresso">
                  Hoogvliet Rotterdam
                </p>
                <p className="text-sm text-muted-foreground">{COMPANY.address}</p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
