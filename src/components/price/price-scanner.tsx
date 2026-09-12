"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ImagePlus,
  X,
  Ruler,
  Check,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  TriangleAlert,
  Phone,
  User,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { img, KITCHENS } from "@/lib/images";
import { cn } from "@/lib/utils";

type Phase = "upload" | "scanning" | "result";

const ANGLES = [
  { key: "front", label: "Vooraanzicht", sample: KITCHENS.handleless },
  { key: "left", label: "Linkerhoek", sample: KITCHENS.matteGreen },
  { key: "right", label: "Rechterhoek", sample: KITCHENS.woodWarm },
  { key: "detail", label: "Detail / lades", sample: KITCHENS.detail },
] as const;

/** Indicative unit prices — in production these live in the admin backend. */
const PRICING = {
  standaardFront: 55,
  groteFront: 85,
  lade: 35,
  zijpaneel: 65,
  werkblad: 260,
  achterwand: 120,
  arbeid: 240,
};

const DETECTION = {
  standaardFronten: 11,
  groteFronten: 3,
  lades: 6,
  zijpanelen: 2,
  plintMeters: 4.2,
  werkblad: true,
  achterwand: true,
  configuratie: "L-vorm",
  betrouwbaarheid: 0.89,
};

const SCAN_LABELS = [
  "Fronten herkennen",
  "Lades tellen",
  "Panelen opmeten",
  "Plint inschatten",
  "Werkblad en achterwand",
  "Configuratie bepalen",
];

function euro(n: number) {
  return "€ " + n.toLocaleString("nl-NL");
}

export function PriceScanner() {
  const [phase, setPhase] = React.useState<Phase>("upload");
  const [photos, setPhotos] = React.useState<Record<string, string>>({});
  const count = Object.keys(photos).length;

  const addSample = (key: string, sample: string) => {
    setPhotos((p) => ({ ...p, [key]: img(sample, { w: 800 }) }));
  };
  const onFile = (key: string, file?: File) => {
    if (!file) return;
    setPhotos((p) => ({ ...p, [key]: URL.createObjectURL(file) }));
  };
  const remove = (key: string) => {
    setPhotos((p) => {
      const next = { ...p };
      delete next[key];
      return next;
    });
  };

  const reset = () => {
    setPhotos({});
    setPhase("upload");
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_40px_90px_-50px_rgba(35,27,18,0.5)]">
      <div aria-hidden className="absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-brass/0 via-brass to-brass/0" />
      {/* Stepper */}
      <div className="flex items-center gap-2 border-b border-border bg-ivory/60 px-6 py-4 text-xs font-semibold sm:gap-4">
        {[
          { id: "upload", n: 1, label: "Foto's" },
          { id: "scanning", n: 2, label: "Analyse" },
          { id: "result", n: 3, label: "Richtprijs" },
        ].map((s, i) => {
          const active = phase === s.id;
          const done =
            (phase === "scanning" && s.id === "upload") ||
            (phase === "result" && s.id !== "result");
          return (
            <React.Fragment key={s.id}>
              <span className="flex items-center gap-2">
                <span
                  className={cn(
                    "grid h-6 w-6 place-items-center rounded-full transition-colors",
                    active
                      ? "bg-brass text-white"
                      : done
                        ? "bg-olive text-ivory"
                        : "bg-secondary text-muted-foreground"
                  )}
                >
                  {done ? <Check className="h-3.5 w-3.5" /> : s.n}
                </span>
                <span className={cn(active ? "text-espresso" : "text-muted-foreground")}>
                  {s.label}
                </span>
              </span>
              {i < 2 && <span className="h-px flex-1 bg-border" />}
            </React.Fragment>
          );
        })}
      </div>

      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {phase === "upload" && (
            <StepUpload
              key="upload"
              photos={photos}
              count={count}
              addSample={addSample}
              onFile={onFile}
              remove={remove}
              onNext={() => setPhase("scanning")}
            />
          )}
          {phase === "scanning" && (
            <StepScanning
              key="scanning"
              photos={photos}
              onDone={() => setPhase("result")}
            />
          )}
          {phase === "result" && (
            <StepResult key="result" count={count} onReset={reset} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 1 — upload                                                    */
/* ------------------------------------------------------------------ */

function StepUpload({
  photos,
  count,
  addSample,
  onFile,
  remove,
  onNext,
}: {
  photos: Record<string, string>;
  count: number;
  addSample: (k: string, s: string) => void;
  onFile: (k: string, f?: File) => void;
  remove: (k: string) => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-display text-2xl font-semibold text-espresso">
        Voeg twee tot vier foto's toe
      </h2>
      <p className="mt-2 max-w-lg text-sm text-muted-foreground">
        Hoe meer hoeken je deelt, hoe nauwkeuriger de richtprijs. Gebruik een
        eigen foto of kies een voorbeeld om de fotoscan te proberen.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ANGLES.map((a, idx) => {
          const src = photos[a.key];
          return (
            <div key={a.key} className="group relative">
              <div
                className={cn(
                  "relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-2xl border-2 transition-all duration-300",
                  src
                    ? "border-transparent"
                    : "border-dashed border-border bg-gradient-to-b from-ivory to-secondary/50 group-hover:-translate-y-1 group-hover:border-brass/60 group-hover:shadow-[0_22px_44px_-26px_rgba(35,27,18,0.45)]"
                )}
              >
                {src ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={a.label} className="absolute inset-0 h-full w-full object-cover" />
                    <button
                      onClick={() => remove(a.key)}
                      aria-label="Verwijder foto"
                      className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-espresso/70 text-ivory backdrop-blur transition-transform hover:scale-105"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <span className="absolute bottom-2 left-2 rounded-full bg-white/85 px-2.5 py-0.5 text-[0.65rem] font-semibold text-espresso backdrop-blur">
                      {a.label}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="absolute left-3 top-3 font-display text-xs font-semibold text-brass-deep/60">
                      0{idx + 1}
                    </span>
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-espresso text-brass-soft transition-transform duration-300 group-hover:scale-110">
                      <ImagePlus className="h-5 w-5" />
                    </span>
                    <span className="mt-3 text-sm font-semibold text-espresso">{a.label}</span>
                    <div className="mt-4 flex flex-col items-center gap-2">
                      <label className="cursor-pointer rounded-full bg-espresso px-4 py-1.5 text-[0.72rem] font-semibold text-ivory transition-colors hover:bg-brass">
                        Kies foto
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => onFile(a.key, e.target.files?.[0])}
                        />
                      </label>
                      <button
                        onClick={() => addSample(a.key, a.sample)}
                        className="text-[0.7rem] font-medium text-brass-deep underline underline-offset-2 hover:text-brass"
                      >
                        of gebruik een voorbeeld
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {count === 0
            ? "Nog geen foto's toegevoegd"
            : count < 2
              ? "Voeg minimaal twee foto's toe"
              : `${count} foto's klaar voor analyse`}
        </p>
        <Button onClick={onNext} disabled={count < 2} size="lg" arrow>
          Analyseer mijn keuken
        </Button>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 2 — scanning                                                  */
/* ------------------------------------------------------------------ */

function StepScanning({
  photos,
  onDone,
}: {
  photos: Record<string, string>;
  onDone: () => void;
}) {
  const [progress, setProgress] = React.useState(0);
  const first = Object.values(photos)[0];

  React.useEffect(() => {
    const start = Date.now();
    const dur = 2600;
    const id = setInterval(() => {
      const p = Math.min(100, ((Date.now() - start) / dur) * 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(id);
        setTimeout(onDone, 450);
      }
    }, 30);
    return () => clearInterval(id);
  }, [onDone]);

  const activeLabel = SCAN_LABELS[Math.min(SCAN_LABELS.length - 1, Math.floor((progress / 100) * SCAN_LABELS.length))];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="grid items-center gap-8 md:grid-cols-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
        {first && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={first} alt="Analyse" className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-espresso/20" />
        <motion.div
          initial={{ top: "-15%" }}
          animate={{ top: "115%" }}
          transition={{ duration: 1.3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-brass/40 to-transparent"
        >
          <div className="absolute bottom-0 h-0.5 w-full bg-brass shadow-[0_0_20px_rgba(190,138,58,0.9)]" />
        </motion.div>
        {["left-3 top-3 border-l-2 border-t-2", "right-3 top-3 border-r-2 border-t-2", "left-3 bottom-3 border-l-2 border-b-2", "right-3 bottom-3 border-r-2 border-b-2"].map((c) => (
          <span key={c} className={`absolute h-6 w-6 rounded-[3px] border-brass-soft ${c}`} />
        ))}
      </div>

      <div>
        <div className="flex items-center gap-2 text-brass-deep">
          <Ruler className="h-5 w-5" />
          <span className="eyebrow">Fotoscan actief</span>
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-espresso">
          Je keuken wordt opgemeten
        </h2>

        <div className="mt-6">
          <div className="flex items-end justify-between">
            <span className="text-sm font-medium text-espresso">{activeLabel}</span>
            <span className="font-display text-2xl font-semibold text-espresso">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brass to-brass-deep"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <ul className="mt-6 space-y-2">
          {SCAN_LABELS.map((label, i) => {
            const reached = progress > (i / SCAN_LABELS.length) * 100;
            return (
              <li key={label} className="flex items-center gap-2.5 text-sm">
                <span
                  className={cn(
                    "grid h-5 w-5 place-items-center rounded-full transition-colors",
                    reached ? "bg-olive text-ivory" : "bg-secondary text-muted-foreground"
                  )}
                >
                  {reached ? <Check className="h-3 w-3" /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                </span>
                <span className={reached ? "text-espresso" : "text-muted-foreground"}>{label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 3 — result                                                    */
/* ------------------------------------------------------------------ */

function StepResult({ count, onReset }: { count: number; onReset: () => void }) {
  const d = DETECTION;
  const lines = [
    { label: "Standaard fronten", qty: d.standaardFronten, unit: PRICING.standaardFront },
    { label: "Grote fronten", qty: d.groteFronten, unit: PRICING.groteFront },
    { label: "Lades", qty: d.lades, unit: PRICING.lade },
    { label: "Zijpanelen", qty: d.zijpanelen, unit: PRICING.zijpaneel },
  ];
  const materiaal = lines.reduce((s, l) => s + l.qty * l.unit, 0);
  const subtotal = materiaal + PRICING.werkblad + PRICING.achterwand + PRICING.arbeid;
  const low = Math.round((subtotal * 0.96) / 10) * 10;
  const high = Math.round((subtotal * 1.08) / 10) * 10;

  const [sent, setSent] = React.useState(false);

  const items = [
    { label: "Standaard fronten", value: d.standaardFronten },
    { label: "Grote fronten", value: d.groteFronten },
    { label: "Lades", value: d.lades },
    { label: "Zijpanelen", value: d.zijpanelen },
    { label: "Plint", value: `${d.plintMeters.toString().replace(".", ",")} m` },
    { label: "Werkblad", value: d.werkblad ? "Ja" : "Nee" },
    { label: "Achterwand", value: d.achterwand ? "Ja" : "Nee" },
    { label: "Configuratie", value: d.configuratie },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
    >
      {/* Left: detection + price */}
      <div>
        <div className="flex items-center gap-2 text-olive">
          <ShieldCheck className="h-5 w-5" />
          <span className="eyebrow text-olive">Analyse gereed</span>
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-espresso">
          Dit herkenden we in jouw keuken
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group/tile rounded-2xl border border-border bg-ivory p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/40 hover:bg-card hover:shadow-[0_16px_30px_-22px_rgba(35,27,18,0.4)]"
            >
              <div className="font-display text-xl font-semibold text-espresso transition-colors group-hover/tile:text-brass-deep">{it.value}</div>
              <div className="mt-0.5 text-[0.68rem] leading-tight text-muted-foreground">{it.label}</div>
            </motion.div>
          ))}
        </div>

        {/* confidence */}
        <div className="mt-5 rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-espresso">Betrouwbaarheid</span>
            <span className="font-display text-lg font-semibold text-olive">
              {Math.round(d.betrouwbaarheid * 100)}%
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${d.betrouwbaarheid * 100}%` }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-olive to-olive-deep"
            />
          </div>
          {count < 3 && (
            <p className="mt-3 flex items-start gap-2 text-xs text-terracotta">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              Een deel van de keuken is niet volledig zichtbaar. Voeg een foto
              vanaf de rechterzijde toe voor een nauwkeurigere indicatie.
            </p>
          )}
        </div>

        {/* price breakdown */}
        <div className="mt-5 rounded-2xl bg-espresso p-5 text-ivory">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-ivory/70">Geschatte richtprijs</span>
            <span className="text-[0.65rem] uppercase tracking-widest text-brass-soft">
              indicatief
            </span>
          </div>
          <div className="mt-1 font-display text-3xl font-semibold text-ivory">
            {euro(low)} tot {euro(high)}
          </div>
          <div className="mt-4 space-y-1.5 border-t border-ivory/10 pt-4 text-sm text-ivory/70">
            {lines.map((l) => (
              <div key={l.label} className="flex justify-between">
                <span>
                  {l.qty} × {l.label}
                </span>
                <span className="text-ivory/90">{euro(l.qty * l.unit)}</span>
              </div>
            ))}
            <div className="flex justify-between">
              <span>Werkblad en achterwand</span>
              <span className="text-ivory/90">{euro(PRICING.werkblad + PRICING.achterwand)}</span>
            </div>
            <div className="flex justify-between">
              <span>Montage en afwerking</span>
              <span className="text-ivory/90">{euro(PRICING.arbeid)}</span>
            </div>
          </div>
          <p className="mt-4 text-[0.72rem] leading-relaxed text-ivory/50">
            Dit is een automatische prijsindicatie op basis van je foto's. De
            definitieve prijs bevestigen we na controle door ons team.
          </p>
        </div>

        <button
          onClick={onReset}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brass-deep transition-colors hover:text-brass"
        >
          <RefreshCw className="h-4 w-4" />
          Nieuwe berekening starten
        </button>
      </div>

      {/* Right: lead capture */}
      <div className="rounded-2xl border border-brass/25 bg-gradient-to-br from-secondary to-ivory p-6">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full flex-col items-center justify-center py-10 text-center"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-olive text-ivory">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-espresso">
                Aanvraag ontvangen
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Bedankt. Ons team bekijkt je foto's en neemt binnen 24 uur
                contact met je op met een definitieve offerte en gratis
                kleurstalen.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex h-full flex-col"
            >
              <h3 className="font-display text-xl font-semibold text-espresso">
                Ontvang je definitieve offerte
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Laat je gegevens achter. We bevestigen de prijs en plannen
                vrijblijvend een moment in.
              </p>

              <div className="mt-5 space-y-3">
                <Field icon={User} placeholder="Je naam" type="text" name="naam" />
                <Field icon={Phone} placeholder="Telefoonnummer" type="tel" name="tel" />
              </div>

              <label className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 accent-[var(--brass)]" />
                Ik ga akkoord met het opnemen van contact over deze aanvraag.
              </label>

              <div className="mt-auto pt-5">
                <Button size="lg" arrow className="w-full">
                  Vraag offerte aan
                </Button>
                <p className="mt-3 text-center text-[0.7rem] text-muted-foreground">
                  Gratis en vrijblijvend. Geen verplichtingen.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Field({
  icon: Icon,
  ...props
}: { icon: typeof User } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-input bg-white px-4 py-3 transition-colors focus-within:border-brass">
      <Icon className="h-4 w-4 shrink-0 text-brass-deep" />
      <input
        {...props}
        required
        className="w-full bg-transparent text-sm text-espresso outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}
