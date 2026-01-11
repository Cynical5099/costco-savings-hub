import { ArrowRight, Shield, Smartphone, Clock } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();

  const handleCTAClick = () => {
    trackCTAClick('hero_get_started');
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center section-padding bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
          Limited Time Opportunity
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 text-balance animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Turn Everyday Shopping Into{' '}
          <span className="gradient-text">Costco Savings</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-muted-foreground mb-8 text-balance animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Complete a few quick steps and unlock Costco rewards people are using for groceries, household essentials, and more.
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
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Micro-trust */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
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
            Takes Just Minutes
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
