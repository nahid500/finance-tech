import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import NewsWidget from "@/components/widgets/NewsWidget";
import Speech from "@/components/Speech";
import { Learning } from "@/components/Learning";
import { Footer } from "@/components/Footer";
import FAQ from "@/components/Faq";
import ChatWidget from "@/components/widgets/ChatWidget";
import AdditionalServices from "@/components/AdditionalServices";
import Achievments from "@/components/Achievments";
import Reviews from "@/components/Reviews";
import TradingViewWidget from "@/components/widgets/TradingViewWidget";
import TradingWidget from "@/components/widgets/TradingWidget";
import Crypto from "@/components/widgets/Crypto";
import Trading from "@/components/widgets/Trading";
import BlogHome from "@/components/BlogHome";

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
