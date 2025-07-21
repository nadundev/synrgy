import FloatingNav from "@/components/modules/floating-nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <FloatingNav />
      <Hero />
      <About />
      <Projects />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
