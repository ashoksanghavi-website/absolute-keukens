"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type QA = { q: string; a: string };

export function Accordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: readonly QA[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = React.useState<number | null>(defaultOpen);

  return (
    <div className={cn("divide-y divide-border", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "font-display text-lg font-semibold tracking-tight transition-colors sm:text-xl",
                  isOpen ? "text-brass-deep" : "text-espresso group-hover:text-brass-deep"
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-45 border-brass bg-brass text-white"
                    : "border-espresso/15 text-espresso group-hover:border-brass"
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pr-12 text-[0.98rem] leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
