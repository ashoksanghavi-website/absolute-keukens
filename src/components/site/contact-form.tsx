"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, User, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-olive text-ivory">
              <Check className="h-8 w-8" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-espresso">
              Bericht verzonden
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Bedankt voor je bericht. We nemen binnen één werkdag contact met je
              op om je verder te helpen.
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
          >
            <h2 id="offerte" className="font-display text-2xl font-semibold text-espresso">
              Vraag een offerte aan
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Vul je gegevens in en vertel kort over je keuken. We reageren snel
              en vrijblijvend.
            </p>

            <div className="mt-6 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field icon={User} name="naam" placeholder="Je naam" type="text" />
                <Field icon={Phone} name="tel" placeholder="Telefoonnummer" type="tel" />
              </div>
              <Field icon={Mail} name="email" placeholder="E-mailadres" type="email" />
              <textarea
                required
                rows={4}
                placeholder="Vertel kort over je keuken en wensen"
                className="w-full resize-none rounded-xl border border-input bg-white px-4 py-3 text-sm text-espresso outline-none transition-colors placeholder:text-muted-foreground focus:border-brass"
              />
            </div>

            <label className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" required className="mt-0.5 accent-[var(--brass)]" />
              Ik ga akkoord dat Absolute Keukens contact met me opneemt over deze aanvraag.
            </label>

            <div className="mt-6">
              <Button size="lg" arrow className="w-full sm:w-auto">
                Verstuur aanvraag
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
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
