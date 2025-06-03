import About from "@/components/About";
import CustomerWidget from "@/components/widgets/CustomerWidget";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WidgetThree from "@/components/widgets/WidgetThree";
import WhyUs from "@/components/WhyUs";
import WidgetTwo from "@/components/widgets/WidgetTwo";
import NewsWidget from "@/components/widgets/NewsWidget";
import Speech from "@/components/Speech";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />

      <Speech/>

      <WidgetTwo/>

      <CustomerWidget />

      <WhyUs/>

      <WidgetThree/>

      <NewsWidget/>
    </>
  );
}
