"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Download, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img, KITCHENS } from "@/lib/images";

const PDF_PATH = "/kleurenoverzicht.pdf";

export function KleurenDownload() {
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // trigger the download
    const a = document.createElement("a");
    a.href = PDF_PATH;
    a.download = "Absolute-Keukens-Kleurenoverzicht.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setSent(true);
  };

  return (
    <div className="relative grid overflow-hidden rounded-[2rem] border border-brass/25 bg-espresso text-ivory shadow-[0_40px_90px_-50px_rgba(35,27,18,0.6)] md:grid-cols-2">
      {/* Visual */}
      <div className="relative min-h-[240px] md:min-h-full">
        <Image
          src={img(KITCHENS.woodWarm, { w: 1000 })}
          alt="Kleurenoverzicht catalogus"
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent md:bg-gradient-to-r" />
        <div className="absolute bottom-5 left-5 flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brass text-white shadow-lg">
            <FileText className="h-6 w-6" />
          </span>
          <div>
            <div className="font-display text-lg font-semibold text-ivory">Kleurenoverzicht</div>
            <div className="text-xs text-ivory/70">Volledige catalogus · PDF</div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="relative flex flex-col justify-center p-7 sm:p-10">
        <div className="grain pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-start"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-olive text-ivory">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ivory">
                  Je download is gestart
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ivory/70">
                  Bedankt. Het volledige kleurenoverzicht wordt nu gedownload.
                  Start de download niet vanzelf?
                </p>
                <a
                  href={PDF_PATH}
                  download="Absolute-Keukens-Kleurenoverzicht.pdf"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brass-soft underline underline-offset-4 hover:text-brass"
                >
                  <Download className="h-4 w-4" />
                  Download handmatig
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
              >
                <span className="eyebrow text-brass-soft">Gratis download</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ivory sm:text-3xl">
                  Ontvang het volledige kleurenoverzicht
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/70">
                  Laat je e-mailadres achter en bekijk alle kleuren en structuren
                  rustig thuis. De download start direct.
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-full border border-ivory/15 bg-ivory/[0.04] p-1.5 pl-5 transition-colors focus-within:border-brass/50">
                  <Mail className="h-4 w-4 shrink-0 text-brass" />
                  <input
                    type="email"
                    required
                    placeholder="Je e-mailadres"
                    className="w-full bg-transparent text-sm text-ivory outline-none placeholder:text-ivory/40"
                  />
                </div>

                <div className="mt-5">
                  <Button size="lg" arrow className="w-full sm:w-auto">
                    <Download className="h-4 w-4" />
                    Download kleurenoverzicht
                  </Button>
                </div>
                <p className="mt-3 text-[0.7rem] text-ivory/50">
                  We gebruiken je e-mailadres alleen om je af en toe inspiratie te sturen.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
