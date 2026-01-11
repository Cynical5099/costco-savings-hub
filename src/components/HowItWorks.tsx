import { Mail, ListChecks, Gift } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Mail,
      title: "Sign Up",
      description: "Enter your email to access the reward portal.",
      note: "Used only for reward updates.",
    },
    {
      number: "02",
      icon: ListChecks,
      title: "Complete Offers",
      description: "Follow the instructions on available deals.",
      note: "Most take only a few minutes.",
    },
    {
      number: "03",
      icon: Gift,
      title: "Use Your Reward",
      description: "After verification, use your Costco reward for groceries, essentials, or household items.",
      note: null,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Three simple steps to start saving
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card flex gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number */}
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
                  <p className="text-xs text-muted-foreground/70 mt-2 italic">
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
