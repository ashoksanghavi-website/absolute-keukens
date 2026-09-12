"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const button = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-brass text-white shadow-[0_10px_30px_-10px_rgba(190,138,58,0.7)] hover:bg-brass-deep",
        dark: "bg-espresso text-ivory hover:bg-olive-deep shadow-[0_10px_30px_-12px_rgba(35,27,18,0.6)]",
        olive: "bg-olive text-ivory hover:bg-olive-deep shadow-[0_10px_30px_-12px_rgba(63,85,64,0.6)]",
        outline:
          "border border-espresso/20 bg-transparent text-espresso hover:border-brass hover:text-brass-deep",
        soft: "bg-secondary text-secondary-foreground hover:bg-sand",
        ghost: "bg-transparent text-espresso hover:bg-secondary",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[0.95rem]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type CommonProps = VariantProps<typeof button> & {
  className?: string;
  children: React.ReactNode;
  /** show a trailing arrow that slides on hover */
  arrow?: boolean;
  /** disable the light sheen sweep */
  noSheen?: boolean;
};

type AsLink = CommonProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;
type AsButton = CommonProps &
  Omit<React.ComponentProps<"button">, "className" | "children" | "ref"> & {
    href?: undefined;
  };

export type ButtonProps = AsLink | AsButton;

const MotionLink = motion.create(Link);

function Inner({
  children,
  arrow,
  noSheen,
}: Pick<CommonProps, "children" | "arrow" | "noSheen">) {
  return (
    <>
      {!noSheen && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-[220%]"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {arrow && (
          <ArrowRight className="h-[1.05em] w-[1.05em] transition-transform duration-300 group-hover/btn:translate-x-1" />
        )}
      </span>
    </>
  );
}

const MOTION = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.96, y: 0 },
  transition: { type: "spring" as const, stiffness: 420, damping: 26 },
};

export function Button(props: ButtonProps) {
  const { className, variant, size, children, arrow, noSheen, ...rest } = props;
  const classes = cn(button({ variant, size }), className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as AsLink;
    return (
      <MotionLink href={href} className={classes} {...MOTION} {...(linkRest as unknown as Record<string, never>)}>
        <Inner arrow={arrow} noSheen={noSheen}>
          {children}
        </Inner>
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={classes}
      {...MOTION}
      {...(rest as unknown as Record<string, never>)}
    >
      <Inner arrow={arrow} noSheen={noSheen}>
        {children}
      </Inner>
    </motion.button>
  );
}
