import { Users, CheckCircle, Clock } from "lucide-react";

const SocialProofStrip = () => {
  const proofItems = [
    { icon: Users, text: "Used by real shoppers" },
    { icon: CheckCircle, text: "Works at any Costco" },
    { icon: Clock, text: "Most finish in under 30 min" },
  ];

  return (
    <section className="py-6 px-5 bg-secondary/30 border-y border-border">
      <div className="max-w-lg mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
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
