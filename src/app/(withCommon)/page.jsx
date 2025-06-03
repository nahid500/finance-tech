import About from "@/components/About";
import CustomerWidget from "@/components/widgets/CustomerWidget";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WidgetThree from "@/components/widgets/WidgetThree";
import WhyUs from "@/components/WhyUs";
import WidgetTwo from "@/components/widgets/widgetTwo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />

      <About />

      <WidgetTwo/>

      <CustomerWidget />

      <WhyUs/>

      <WidgetThree/>
    </>
  );
}
