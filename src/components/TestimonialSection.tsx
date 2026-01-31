import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "I was skeptical at first. Looked into it, did the offers over lunch breaks, and it actually worked. Used it on groceries last week.",
    name: "Jessica M.",
    location: "California",
    initial: "J"
  },
  {
    quote: "My husband thought I was wasting my time. Then I came home with a full cart of stuff we needed anyway.",
    name: "Danielle R.",
    location: "Texas",
    initial: "D"
  },
  {
    quote: "I put this off for a while because I assumed it was too good to be true. Finally tried it on a slow Sunday and it worked.",
    name: "Marcus L.",
    location: "Florida",
    initial: "M"
  },
  {
    quote: "Did most of it while waiting in the school pickup line. Took maybe 25 minutes total over two days.",
    name: "Sarah K.",
    location: "Washington",
    initial: "S"
  },
  {
    quote: "I'm usually the skeptical one in my friend group. Had to text them proof when the reward actually came through.",
    name: "Amanda T.",
    location: "Arizona",
    initial: "A"
  },
  {
    quote: "Spent about an hour total. Used it on gas and those big packs of paper towels. Worth the time.",
    name: "Brian H.",
    location: "Oregon",
    initial: "B"
  },
  {
    quote: "Thought it would take forever but finished while watching TV. Barely noticed the time.",
    name: "Nicole P.",
    location: "Colorado",
    initial: "N"
  },
  {
    quote: "My sister didn't believe me until I sent her a photo of my receipt. Now she's doing it too.",
    name: "Carlos V.",
    location: "Nevada",
    initial: "C"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-semibold text-center mb-6 text-foreground">
          What People Are Saying
        </h2>
        
        <div className="relative p-5 rounded-2xl bg-card border border-border shadow-card min-h-[160px]">
          {/* Quote icon */}
          <div className="absolute -top-3 left-5">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
          </div>

          <div 
            className={`pt-3 transition-all duration-300 ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-foreground text-base leading-relaxed mb-4">
              "{current.quote}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">{current.initial}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{current.name}</p>
                  <p className="text-xs text-muted-foreground">{current.location}</p>
                </div>
              </div>
              
              {/* Dots indicator */}
              <div className="flex gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                        setIsAnimating(false);
                      }, 300);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-primary w-3' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
