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
    quote: "Thought it was too good to be true honestly. Turned out to be legit - used it for bulk paper goods and holiday snacks.",
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
    quote: "I almost didn't try because I figured it was a scam. My coworker convinced me and I'm glad she did!",
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
    quote: "Thought it would take forever but knocked out 4 offers in one evening while watching TV. Easy.",
    name: "Nicole P.",
    location: "Colorado",
    initial: "N"
  },
  {
    quote: "My wife didn't believe it until I showed her the gift card. Now she's doing the offers too!",
    name: "Carlos V.",
    location: "Nevada",
    initial: "C"
  },
  {
    quote: "I've been burned by these sites before so I was hesitant. This one actually came through within days.",
    name: "Rachel G.",
    location: "Ohio",
    initial: "R"
  },
  {
    quote: "Did it during my lunch breaks over 3 days. Way less time than I expected for a free gift card.",
    name: "James W.",
    location: "Michigan",
    initial: "J"
  },
  {
    quote: "Not gonna lie, I googled 'is this legit' like 5 times before starting. Wish I hadn't wasted time doubting.",
    name: "Emily S.",
    location: "Georgia",
    initial: "E"
  },
  {
    quote: "Some offers took longer than others but overall maybe 2 hours total spread across a few days. Worth it.",
    name: "Marcus D.",
    location: "Illinois",
    initial: "M"
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
