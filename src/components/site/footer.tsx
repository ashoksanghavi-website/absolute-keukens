"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp, Send, Check } from "lucide-react";
import { COMPANY, FOOTER_LINKS } from "@/lib/site";
import { LogoMark } from "@/components/site/logo";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.5 3c.3 2 1.6 3.5 3.5 3.8v2.6c-1.3.1-2.5-.3-3.6-1v6.3a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.8V3h2.8Z" />
    </svg>
  );
}

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function Footer() {
  const [sent, setSent] = React.useState(false);

  return (
    <footer className="relative overflow-hidden bg-espresso text-ivory/70">
      {/* top hairline + ambient glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-olive/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-brass/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16">
        {/* Newsletter row */}
        <motion.div
          {...reveal}
          className="flex flex-col gap-6 border-b border-ivory/10 pb-12 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
              Inspiratie voor jouw keuken
            </h3>
            <p className="mt-2 max-w-md text-sm text-ivory/60">
              Ontvang af en toe onze mooiste make overs en handige tips. Geen
              spam, alleen inspiratie.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex w-full max-w-sm items-center gap-2 rounded-full border border-ivory/15 bg-ivory/[0.04] p-1.5 pl-5 transition-colors focus-within:border-brass/50"
          >
            <input
              type="email"
              required
              placeholder="Je e-mailadres"
              className="w-full bg-transparent text-sm text-ivory outline-none placeholder:text-ivory/40"
            />
            <button
              type="submit"
              aria-label="Aanmelden"
              className="group grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brass text-white transition-all duration-300 hover:bg-brass-deep active:scale-95"
            >
              {sent ? (
                <Check className="h-4 w-4" />
              ) : (
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </button>
          </form>
        </motion.div>

        {/* Columns */}
        <motion.div {...reveal} className="grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 text-ivory/80 transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:bg-brass hover:text-white"
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
        </motion.div>
      </div>

      {/* Oversized watermark wordmark */}
      <div className="relative select-none px-6">
        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="pointer-events-none whitespace-nowrap bg-gradient-to-b from-ivory/[0.08] to-ivory/0 bg-clip-text text-center font-display text-[19vw] font-semibold leading-[0.8] text-transparent">
            Absolute Keukens
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="relative border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 self-start rounded-full border border-ivory/15 px-4 py-2 font-medium text-ivory/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:text-brass-soft md:self-auto"
          >
            Naar boven
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
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
