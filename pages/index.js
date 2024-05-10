import About from "@/components/ui/About";
import CTA from "@/components/ui/CTA";
import Dapps from "@/components/ui/Dapps";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Social from "@/components/ui/Social";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Dapps />
      <Social />
      <CTA />
    </>
  );
}
