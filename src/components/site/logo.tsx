import { cn } from "@/lib/utils";

/** Absolute Keukens monogram: an abstract cabinet arch in brass. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      fill="none"
      aria-hidden
    >
      <rect x="1" y="1" width="38" height="38" rx="11" fill="var(--espresso)" />
      <path
        d="M12 28V16a8 8 0 0 1 16 0v12"
        stroke="var(--brass)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M20 16v12" stroke="var(--brass-soft)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="15.5" cy="22" r="1.4" fill="var(--brass-soft)" />
      <circle cx="24.5" cy="22" r="1.4" fill="var(--brass-soft)" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-semibold tracking-tight text-espresso">
          Absolute
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-brass-deep">
          Keukens
        </span>
      </span>
    </span>
  );
}
