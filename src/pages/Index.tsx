import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import TransformationVideo from "@/components/TransformationVideo";
import RepairVideos from "@/components/RepairVideos";
import Pricing from "@/components/Pricing";
import Benefits from "@/components/Benefits";
import OrderNow from "@/components/OrderNow";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageToggle />
        <Hero />
        <Features />
        <Comparison />
        <TransformationVideo />
        <RepairVideos />
        <Benefits />
        <Pricing />
        <OrderNow />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
