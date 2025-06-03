import About from "@/components/About";
import CustomerWidget from "@/components/CustomerWidget";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />

      <CustomerWidget />
    </>
  );
}
