import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { Concept } from "@/components/home/concept";
import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { Projects } from "@/components/home/projects";
import { Reasons } from "@/components/home/reasons";
import { FotoscanCta } from "@/components/home/fotoscan-cta";
import { Testimonials } from "@/components/home/testimonials";
import { Colors } from "@/components/home/colors";
import { Faq } from "@/components/home/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Concept />
      <Services />
      <Process />
      <Projects />
      <Reasons />
      <FotoscanCta />
      <Testimonials />
      <Colors />
      <Faq />
    </>
  );
}
