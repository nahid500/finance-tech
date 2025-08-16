import About from "@/components/About";
import Achievments from "@/components/Achievments";
import AdditionalServices from "@/components/AdditionalServices";
import BlogHome from "@/components/BlogHome";
import FAQ from "@/components/Faq";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Learning } from "@/components/Learning";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Speech from "@/components/Speech";
import WhyUs from "@/components/WhyUs";
import ChatWidget from "@/components/widgets/ChatWidget";
import Crypto from "@/components/widgets/Crypto";
import Trading from "@/components/widgets/Trading";
import TradingViewWidget from "@/components/widgets/TradingViewWidget";
import TradingWidget from "@/components/widgets/TradingWidget";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <TradingViewWidget />

      <About />

      <Achievments />

      <WhyUs />

      <TradingWidget />

      <Services />

      <AdditionalServices />

      <ChatWidget />

      <Speech />

      <Crypto />

      <Learning />

      <Reviews />

      <Trading />

      {/* <NewsWidget/> */}

      <BlogHome />

      <FAQ />

      <Footer />
    </div>
  );
}
