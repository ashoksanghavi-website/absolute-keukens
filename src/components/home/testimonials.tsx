import { Star } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ScrollReelTestimonials } from "@/components/ui/scroll-reel-testimonials";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <Section id="reviews" className="bg-ivory">
      <div className="flex flex-col items-center gap-5 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="eyebrow flex items-center gap-3 text-brass-deep">
            <span className="rule" />
            Ervaringen
            <span className="rule" />
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-[1.08] text-espresso sm:text-4xl md:text-[2.9rem]">
            Klanten die hun keuken opnieuw verliefd werden
          </h2>
          <div className="flex items-center gap-2">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brass text-brass" />
              ))}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              4,9 gemiddeld uit meer dan 500 keukens
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12 flex justify-center">
        <ScrollReelTestimonials
          testimonials={TESTIMONIALS as unknown as import("@/components/ui/scroll-reel-testimonials").ScrollReelTestimonial[]}
        />
      </Reveal>
    </Section>
  );
}
