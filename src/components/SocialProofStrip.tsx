import { Users, CheckCircle, Sparkles } from "lucide-react";

const SocialProofStrip = () => {
  const proofItems = [
    { icon: Users, text: "Trusted by thousands" },
    { icon: CheckCircle, text: "Real people, real rewards" },
    { icon: Sparkles, text: "Simple & beginner-friendly" },
  ];

  return (
    <section className="py-8 px-5 bg-secondary/50 border-y border-border">
      <div className="max-w-lg mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {proofItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
