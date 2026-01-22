import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Thought it was fake. It wasn't. Got my card in 4 days.",
    name: "Jessica M.",
    location: "California",
    initial: "J"
  },
  {
    quote: "My husband laughed at me. Then I came home with $700 in groceries.",
    name: "Danielle R.",
    location: "Texas",
    initial: "D"
  },
  {
    quote: "Put it off for weeks thinking it was a scam. Finally tried it. It worked.",
    name: "Marcus L.",
    location: "Florida",
    initial: "M"
  },
  {
    quote: "Did the offers in the school pickup line. Easiest free stuff ever.",
    name: "Sarah K.",
    location: "Washington",
    initial: "S"
  },
  {
    quote: "I never trust these things. Had to eat my words when the card showed up.",
    name: "Amanda T.",
    location: "Arizona",
    initial: "A"
  },
  {
    quote: "Maybe an hour of my time. Used it on gas and paper towels.",
    name: "Brian H.",
    location: "Oregon",
    initial: "B"
  },
  {
    quote: "Did the offers while watching TV. Didn't even feel like work.",
    name: "Nicole P.",
    location: "Colorado",
    initial: "N"
  },
  {
    quote: "Showed my sister. She said no way. Then I sent her my receipt.",
    name: "Carlos V.",
    location: "Nevada",
    initial: "C"
  },
  {
    quote: "Been burned by these sites before. This one actually came through.",
    name: "Rachel G.",
    location: "Ohio",
    initial: "R"
  },
  {
    quote: "Did it on my lunch break. Coworkers didn't believe me until I showed them.",
    name: "James W.",
    location: "Michigan",
    initial: "J"
  },
  {
    quote: "Googled if it was a scam like 10 times. Should've just done it.",
    name: "Emily S.",
    location: "Georgia",
    initial: "E"
  },
  {
    quote: "Some offers took longer but it wasn't bad. Now I'm stocked up.",
    name: "Kevin D.",
    location: "Illinois",
    initial: "K"
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
