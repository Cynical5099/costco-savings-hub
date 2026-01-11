import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-lg mx-auto">
        <div className="relative p-6 rounded-2xl bg-card border border-border shadow-card">
          {/* Quote icon */}
          <div className="absolute -top-3 left-6">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>

          <div className="pt-4">
            <p className="text-foreground text-lg leading-relaxed mb-4">
              "Did a few quick offers and used my reward on my Costco run the same week. Super simple."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold">J</span>
              </div>
              <div>
                <p className="font-medium text-foreground">J.</p>
                <p className="text-sm text-muted-foreground">California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
