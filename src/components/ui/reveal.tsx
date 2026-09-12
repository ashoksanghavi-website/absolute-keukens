"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<typeof motion.div> & {
  variants?: Variants;
  as?: "div" | "section" | "article" | "li" | "span";
  delay?: number;
};

/** Scroll-into-view reveal. Wrap any block to fade + rise on enter. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container: children animate in sequence. Pair with RevealItem. */
export function RevealGroup({
  children,
  className,
  amount = 0.12,
  delayChildren = 0,
  ...rest
}: React.ComponentProps<typeof motion.div> & {
  amount?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: amount, delayChildren } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
