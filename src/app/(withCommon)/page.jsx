import About from "@/components/About";
import CustomerWidget from "@/components/widgets/CustomerWidget";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WidgetTwo from "@/components/widgets/widgetTwo";
import WidgetThree from "@/components/widgets/WidgetThree";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />

      <About />

      <WidgetTwo/>
      {/* <WidgetTwo/> */}

      <CustomerWidget />

      <WhyUs/>

      <WidgetThree/>
    </>
  );
}
