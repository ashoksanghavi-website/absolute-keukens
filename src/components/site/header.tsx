"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Menu, X, Star, ArrowRight, Mail } from "lucide-react";
import { NAV, COMPANY } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/logo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Slim top strip */}
      <div className="relative hidden bg-gradient-to-r from-espresso via-olive-deep to-espresso text-ivory md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-[0.78rem]">
          <span className="flex items-center gap-2.5 text-ivory/85">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-brass text-brass" />
              ))}
            </span>
            <span>
              <strong className="font-semibold text-ivory">4,9</strong> gemiddeld uit meer dan 500 keukens
            </span>
          </span>
          <div className="flex items-center gap-5 text-ivory/75">
            <a href={COMPANY.emailHref} className="flex items-center gap-1.5 transition-colors hover:text-brass-soft">
              <Mail className="h-3.5 w-3.5 text-brass" />
              {COMPANY.email}
            </a>
            <span className="h-3.5 w-px bg-ivory/15" />
            <a href={COMPANY.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-brass-soft">
              <Phone className="h-3.5 w-3.5 text-brass" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />
      </div>

      {/* Main bar */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled ? "px-3 pt-3" : "px-0 pt-0"
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500",
            scrolled
              ? "h-16 max-w-6xl rounded-full border border-border/70 bg-ivory/80 px-4 shadow-[0_18px_50px_-24px_rgba(35,27,18,0.5)] backdrop-blur-xl sm:px-5"
              : "h-20 max-w-7xl border-b border-transparent bg-transparent px-5 sm:px-6"
          )}
        >
          <Link href="/" aria-label="Absolute Keukens home" className="group">
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Wordmark />
            </motion.span>
          </Link>

          {/* Nav with sliding pill + underline */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {NAV.map((item) => {
              const highlighted = (hovered ?? pathname) === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHovered(item.href)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-300",
                    highlighted ? "text-brass-deep" : "text-espresso/75 hover:text-espresso"
                  )}
                >
                  {hovered === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-brass/10"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {highlighted && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-[3px] rounded-full bg-gradient-to-r from-brass to-brass-deep"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 rounded-full border border-espresso/15 px-4 py-2.5 text-sm font-semibold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:text-brass-deep"
            >
              <Phone className="h-4 w-4" />
              Bel ons
            </a>
            <Button href="/prijs-berekenen" size="sm" arrow>
              Bereken je prijs
            </Button>
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Menu openen"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors hover:border-brass lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <motion.div
              initial={{ clipPath: "circle(0% at 92% 6%)" }}
              animate={{ clipPath: "circle(150% at 92% 6%)" }}
              exit={{ clipPath: "circle(0% at 92% 6%)" }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="grain absolute inset-0 overflow-hidden bg-ivory"
            >
              <div className="flex h-full flex-col px-6 pt-6">
                <div className="flex items-center justify-between">
                  <Wordmark />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Menu sluiten"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <motion.nav
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
                  className="mt-12 flex flex-col gap-1"
                >
                  {[...NAV, { label: "Bereken je prijs", href: "/prijs-berekenen" }, { label: "Contact", href: "/contact" }].map(
                    (item, i) => (
                      <motion.div
                        key={item.href}
                        variants={{
                          hidden: { opacity: 0, x: 30 },
                          show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between border-b border-border/70 py-4"
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="w-8 font-display text-sm text-brass-deep">0{i + 1}</span>
                            <span className="font-display text-3xl font-semibold tracking-tight text-espresso transition-colors group-hover:text-brass-deep">
                              {item.label}
                            </span>
                          </span>
                          <ArrowRight className="h-5 w-5 text-espresso/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brass-deep" />
                        </Link>
                      </motion.div>
                    )
                  )}
                </motion.nav>

                <div className="mt-auto py-8">
                  <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-lg font-semibold text-espresso">
                    <Phone className="h-5 w-5 text-brass-deep" />
                    {COMPANY.phone}
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">{COMPANY.address}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
