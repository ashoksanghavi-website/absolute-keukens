"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Menu, X, Star } from "lucide-react";
import { NAV, COMPANY } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/logo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
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
      <div className="hidden bg-espresso text-ivory md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[0.78rem]">
          <span className="flex items-center gap-2 text-ivory/80">
            <Star className="h-3.5 w-3.5 fill-brass text-brass" />
            4,9 gemiddeld uit meer dan 500 keukens
          </span>
          <div className="flex items-center gap-6 text-ivory/80">
            <a href={COMPANY.emailHref} className="transition-colors hover:text-brass-soft">
              {COMPANY.email}
            </a>
            <a href={COMPANY.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-brass-soft">
              <Phone className="h-3.5 w-3.5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-border/70 bg-ivory/85 backdrop-blur-xl shadow-[0_8px_30px_-18px_rgba(35,27,18,0.35)]"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6",
            scrolled ? "h-16" : "h-20"
          )}
        >
          <Link href="/" aria-label="Absolute Keukens home" className="group">
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Wordmark />
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors",
                    active ? "text-brass-deep" : "text-espresso/80 hover:text-espresso"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-brass transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 rounded-full border border-espresso/15 px-4 py-2.5 text-sm font-semibold text-espresso transition-colors hover:border-brass hover:text-brass-deep"
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
                          className="group flex items-baseline gap-4 border-b border-border/70 py-4"
                        >
                          <span className="w-8 font-display text-sm text-brass-deep">
                            0{i + 1}
                          </span>
                          <span className="font-display text-3xl font-semibold tracking-tight text-espresso transition-colors group-hover:text-brass-deep">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    )
                  )}
                </motion.nav>

                <div className="mt-auto py-8">
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-center gap-2 text-lg font-semibold text-espresso"
                  >
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
