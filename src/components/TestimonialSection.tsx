import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Did a few quick offers and used my reward on my Costco run the same week. Super simple.",
    name: "Jessica M.",
    location: "California",
    initial: "J"
  },
  {
    quote: "I was skeptical at first but completed 5 deals in two days. Got my gift card and stocked up on groceries!",
    name: "Michael R.",
    location: "Texas",
    initial: "M"
  },
  {
    quote: "Perfect timing before the holidays. Used it for bulk paper goods and snacks for the kids.",
    name: "Sarah L.",
    location: "Florida",
    initial: "S"
  },
  {
    quote: "The app deals were easy - just downloaded a few games and played for a bit. Worth it for free Costco money.",
    name: "David K.",
    location: "Washington",
    initial: "D"
  },
  {
    quote: "Finally tried one of these offers. Grabbed a free trial I was gonna get anyway and boom - reward earned.",
    name: "Amanda T.",
    location: "Arizona",
    initial: "A"
  },
  {
    quote: "Used my reward for the rotisserie chickens and gas. Felt like I was shopping for free that day!",
    name: "Brian H.",
    location: "Oregon",
    initial: "B"
  },
  {
    quote: "Completed everything on my lunch breaks. Easy deals, real reward. Already planning my next Costco haul.",
    name: "Nicole P.",
    location: "Colorado",
    initial: "N"
  },
  {
    quote: "My wife didn't believe it until I showed her the gift card. Now she's doing the offers too!",
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-lg mx-auto">
        <div className="relative p-6 rounded-2xl bg-card border border-border shadow-card min-h-[180px]">
          {/* Quote icon */}
          <div className="absolute -top-3 left-6">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>

          <div 
            className={`pt-4 transition-all duration-300 ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-foreground text-lg leading-relaxed mb-4">
              "{current.quote}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{current.initial}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{current.name}</p>
                  <p className="text-sm text-muted-foreground">{current.location}</p>
                </div>
              </div>
              
              {/* Dots indicator */}
              <div className="flex gap-1.5">
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
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-primary w-4' 
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
