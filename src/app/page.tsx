import { Hero } from "@/components/home/hero";
import { FotoscanCta } from "@/components/home/fotoscan-cta";
import { TrustBar } from "@/components/home/trust-bar";
import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { Projects } from "@/components/home/projects";
import { Reasons } from "@/components/home/reasons";
import { Pricing } from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";
import { Colors } from "@/components/home/colors";
import { Faq } from "@/components/home/faq";
import { CtaBand } from "@/components/site/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <FotoscanCta />
      <TrustBar />
      <Services />
      <Process />
      <Projects />
      <Reasons />
      <Pricing />
      <Testimonials />
      <Colors />
      <Faq />
      <CtaBand
        variant="olive"
        title="Jouw keuken als nieuw. Vaak binnen één dag."
        text="Vraag vrijblijvend je prijsindicatie aan. Upload een paar foto's en ontvang direct een heldere richtprijs op maat."
        secondary={{ label: "Plan een adviesgesprek", href: "/contact" }}
      />
    </>
  );
}
