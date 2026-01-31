import { ArrowRight, Shield, Clock, Smartphone } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

const FinalCTA = () => {
  const { trackCTAClick } = useAnalytics();

  const handleCTAClick = () => {
    trackCTAClick('final_start_earning');
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          Ready to Check Your Costco Rewards?
        </h2>
        
        <p className="text-sm text-muted-foreground mb-5">
          See what's available and decide if it's worth your time.
        </p>
        
        <a 
          href="https://glstrk.com/?offer_ids=OTQxLDM3NjQsMzc2NQ%3D%3D&affiliate_id=MjE2NjQ%3D" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-hero w-full sm:w-auto mb-5"
          onClick={handleCTAClick}
        >
          Unlock Costco Rewards
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Trust elements near CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" />
            Secure
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            Takes Minutes
          </span>
          <span className="flex items-center gap-1">
            <Smartphone className="w-3.5 h-3.5" />
            Mobile-Friendly
          </span>
        </div>

        {/* Soft urgency */}
        <p className="text-xs text-muted-foreground/60">
          Availability may vary. Rewards can change at any time.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
