import { ArrowRight, Shield, Zap, Smartphone } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

const FinalCTA = () => {
  const { trackCTAClick } = useAnalytics();

  const handleCTAClick = () => {
    trackCTAClick('final_start_earning');
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Ready to Save on Your Next Costco Trip?
        </h2>
        
        <a 
          href="https://glstrk.com/?offer_ids=OTQxLDM3NjQsMzc2NQ%3D%3D&affiliate_id=MjE2NjQ%3D" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-hero w-full sm:w-auto mb-6"
          onClick={handleCTAClick}
        >
          Start Earning Now
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Footer micro-text */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" />
            Secure
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5" />
            Easy
          </span>
          <span className="flex items-center gap-1">
            <Smartphone className="w-3.5 h-3.5" />
            Mobile-Optimized
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
