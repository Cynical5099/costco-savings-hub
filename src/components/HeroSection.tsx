import { ArrowRight, Shield, Smartphone, Clock } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();

  const handleCTAClick = () => {
    trackCTAClick('hero_get_started');
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center section-padding bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Headline - anchored to checkout moment */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance animate-fade-up" style={{ animationDelay: '0.1s' }}>
          That Costco Checkout Moment Everyone's Talking About
        </h1>

        {/* Subheadline - sets clear expectations */}
        <p className="text-base text-muted-foreground mb-3 text-balance animate-fade-up" style={{ animationDelay: '0.2s' }}>
          People are using these rewards toward groceries, gas, and household essentials at Costco.
        </p>
        
        <p className="text-sm text-muted-foreground/80 mb-6 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          Takes a few minutes to set up. Not cash — applies as store credit.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="https://glstrk.com/?offer_ids=OTQxLDM3NjQsMzc2NQ%3D%3D&affiliate_id=MjE2NjQ%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hero w-full sm:w-auto"
            onClick={handleCTAClick}
          >
            Check Available Costco Rewards
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Trust strip - placed near CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-trust" />
            Secure
          </span>
          <span className="flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-trust" />
            Mobile-Friendly
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-trust" />
            Takes Minutes
          </span>
        </div>

        {/* Soft urgency */}
        <p className="text-xs text-muted-foreground/60 mt-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          Availability may vary. Rewards can change at any time.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
