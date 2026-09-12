import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

/** Consistent section shell. Tight vertical rhythm, no oversized gaps. */
export function Section({
  children,
  className,
  id,
  container = true,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  container?: boolean;
}) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20", className)}>
      {container ? (
        <div className="mx-auto max-w-7xl px-5 sm:px-6">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        isCenter && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow flex items-center gap-3",
            tone === "light" ? "text-brass-soft" : "text-brass-deep"
          )}
        >
          <span className="rule" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "max-w-2xl font-display text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-[2.9rem]",
          tone === "light" ? "text-ivory" : "text-espresso",
          isCenter && "mx-auto"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-ivory/70" : "text-muted-foreground",
            isCenter && "mx-auto"
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
