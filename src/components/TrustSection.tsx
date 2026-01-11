import { Info } from "lucide-react";

const TrustSection = () => {
  const disclosures = [
    "Rewards depend on completing offers correctly",
    "Results vary based on participation",
    "No purchase required to browse offers",
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-lg mx-auto">
        <div className="p-5 rounded-xl bg-card border border-border">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-2">
                Transparency & Trust
              </p>
              <ul className="space-y-1.5">
                {disclosures.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
