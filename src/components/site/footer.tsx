import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { COMPANY, FOOTER_LINKS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { LogoMark } from "@/components/site/logo";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.5 3c.3 2 1.6 3.5 3.5 3.8v2.6c-1.3.1-2.5-.3-3.6-1v6.3a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.8V3h2.8Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative">
      {/* Pre-footer conversion band */}
      <section className="relative overflow-hidden bg-olive text-ivory">
        <div className="grain pointer-events-none absolute inset-0 opacity-30" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brass/25 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:py-20">
          <Reveal>
            <p className="eyebrow text-brass-soft">Klaar voor de make over</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.05] text-ivory md:text-5xl">
              Jouw keuken als nieuw. Vaak binnen één dag.
            </h2>
            <p className="mt-4 max-w-md text-ivory/75">
              Vraag vrijblijvend je prijsindicatie aan. Upload een paar foto's en
              ontvang direct een heldere richtprijs op maat.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3 md:items-end">
            <Button href="/prijs-berekenen" variant="primary" size="lg" arrow>
              Bereken je prijs
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-ivory/30 text-ivory hover:border-brass-soft hover:text-brass-soft">
              Plan een adviesgesprek
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Main footer */}
      <div className="bg-espresso text-ivory/70">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" className="flex items-center gap-2.5">
                <LogoMark />
                <span className="flex flex-col leading-none">
                  <span className="font-display text-lg font-semibold text-ivory">Absolute</span>
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-brass-soft">
                    Keukens
                  </span>
                </span>
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed">
                Specialist in het wrappen en vernieuwen van keukens. Strak,
                duurzaam en betaalbaar, zonder de rompslomp van een verbouwing.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { href: COMPANY.socials.instagram, icon: Instagram, label: "Instagram" },
                  { href: COMPANY.socials.facebook, icon: Facebook, label: "Facebook" },
                  { href: COMPANY.socials.tiktok, icon: TikTokIcon, label: "TikTok" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 text-ivory/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:bg-brass hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <FooterCol title="Keuken" links={FOOTER_LINKS.keuken} />
            <FooterCol title="Bedrijf" links={FOOTER_LINKS.bedrijf} />

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-ivory">
                Contact
              </h4>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a href={COMPANY.phoneHref} className="flex items-start gap-3 transition-colors hover:text-brass-soft">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a href={COMPANY.emailHref} className="flex items-start gap-3 transition-colors hover:text-brass-soft">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {COMPANY.address}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {COMPANY.name}. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span>{COMPANY.kvk}</span>
              <span>{COMPANY.btw}</span>
              <Link href="/veelgestelde-vragen" className="transition-colors hover:text-brass-soft">
                Voorwaarden
              </Link>
              <Link href="/veelgestelde-vragen" className="transition-colors hover:text-brass-soft">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-ivory">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-brass-soft"
            >
              <span className="h-px w-0 bg-brass transition-all duration-300 group-hover:w-4" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
