import { Mail, ListChecks, ShoppingCart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Mail,
      title: "Enter Your Email",
      description: "This is how you'll receive updates about your reward status.",
      note: null,
    },
    {
      number: "02",
      icon: ListChecks,
      title: "Complete a Few Offers",
      description: "You'll see a list of available offers. These may include app downloads, free trials, or sign-ups.",
      note: "Most people finish in 20-30 minutes. Some offers are completely free.",
    },
    {
      number: "03",
      icon: ShoppingCart,
      title: "Use Your Reward at Costco",
      description: "Once verified, your reward can be used for groceries, gas, or anything Costco sells.",
      note: null,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            How This Works
          </h2>
          <p className="text-muted-foreground text-sm">
            No tricks. Here's exactly what to expect.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card flex gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-primary/60 uppercase tracking-wider">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                {step.note && (
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    {step.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
