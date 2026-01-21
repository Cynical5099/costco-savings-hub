import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import HowItWorks from "@/components/HowItWorks";
import UseCaseSection from "@/components/UseCaseSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SocialProofStrip />
      <HowItWorks />
      <UseCaseSection />
      <TestimonialSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
