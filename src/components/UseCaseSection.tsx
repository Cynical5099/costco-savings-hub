import { Beef, Package, Sparkles, ShoppingCart } from "lucide-react";

const UseCaseSection = () => {
  const useCases = [
    { icon: Beef, text: "Groceries & bulk food" },
    { icon: Package, text: "Household essentials" },
    { icon: Sparkles, text: "Cleaning & home supplies" },
    { icon: ShoppingCart, text: "Weekly shopping runs" },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            What People Use Costco Rewards For
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
