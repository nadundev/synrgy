import FloatingNav from "@/components/modules/floating-nav";
import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <FloatingNav />
      <Hero />
      <CTA />
      <Footer />
    </div>
  );
}
