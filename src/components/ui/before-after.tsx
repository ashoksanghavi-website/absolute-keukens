"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Draggable before/after comparison slider. */
export function BeforeAfter({
  beforeId,
  afterId,
  className,
  rounded = "rounded-3xl",
  labels = true,
}: {
  beforeId: string;
  afterId: string;
  className?: string;
  rounded?: string;
  labels?: boolean;
}) {
  const [pos, setPos] = React.useState(52);
  const ref = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const setFromClientX = React.useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, pct)));
  }, []);

  React.useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative aspect-[4/3] w-full select-none overflow-hidden bg-muted",
        rounded,
        className
      )}
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
    >
      {/* After (full) */}
      <Image
        src={img(afterId, { w: 1400 })}
        alt="Keuken na de make over"
        fill
        sizes="(max-width: 768px) 100vw, 640px"
        className="object-cover"
        draggable={false}
      />
      {labels && (
        <span className="absolute right-4 top-4 z-20 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-espresso backdrop-blur">
          Na
        </span>
      )}

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={img(beforeId, { w: 1400 })}
          alt="Keuken voor de make over"
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover grayscale-[0.25]"
          draggable={false}
        />
        {labels && (
          <span className="absolute left-4 top-4 rounded-full bg-espresso/80 px-3 py-1 text-xs font-semibold text-ivory backdrop-blur">
            Voor
          </span>
        )}
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-30 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${pos}%` }}
      >
        <motion.div
          whileTap={{ scale: 0.92 }}
          className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-white text-espresso shadow-lg ring-1 ring-black/5"
        >
          <MoveHorizontal className="h-5 w-5" />
        </motion.div>
      </div>

      <span className="pointer-events-none absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-espresso/70 px-3 py-1 text-[0.7rem] font-medium text-ivory opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        Sleep over de foto
      </span>
    </div>
  );
}
