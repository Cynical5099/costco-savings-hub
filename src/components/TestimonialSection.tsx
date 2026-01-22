import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Honestly almost scrolled past this thinking it was another scam. Glad I didn't - got my card in like 4 days lol",
    name: "Jessica M.",
    location: "California",
    initial: "J"
  },
  {
    quote: "My husband kept rolling his eyes at me while I did the offers. Then I came home with $750 worth of groceries 😂",
    name: "Danielle R.",
    location: "Texas",
    initial: "D"
  },
  {
    quote: "Ngl I put this off for weeks because I assumed it was fake. Finally tried it on a boring Sunday and it actually worked??",
    name: "Marcus L.",
    location: "Florida",
    initial: "M"
  },
  {
    quote: "Did most of the deals while waiting in the school pickup line. Easiest 'free money' I've made as a mom.",
    name: "Sarah K.",
    location: "Washington",
    initial: "S"
  },
  {
    quote: "I'm the skeptical friend who never falls for stuff like this. Had to eat my words when the gift card showed up.",
    name: "Amanda T.",
    location: "Arizona",
    initial: "A"
  },
  {
    quote: "Spent maybe an hour total over 3 days? Used it all on gas and those massive packs of paper towels.",
    name: "Brian H.",
    location: "Oregon",
    initial: "B"
  },
  {
    quote: "Thought I'd need to spend all day on this but finished while binge watching Netflix. Barely noticed.",
    name: "Nicole P.",
    location: "Colorado",
    initial: "N"
  },
  {
    quote: "Showed my sister and she literally said 'yeah right' until I sent her a pic of my receipt lmao",
    name: "Carlos V.",
    location: "Nevada",
    initial: "C"
  },
  {
    quote: "Been burned by these reward sites before so I was super paranoid. This one's different - actually legit.",
    name: "Rachel G.",
    location: "Ohio",
    initial: "R"
  },
  {
    quote: "Did it during lunch breaks at work. Coworkers thought I was nuts until I told them about my Costco haul.",
    name: "James W.",
    location: "Michigan",
    initial: "J"
  },
  {
    quote: "I googled 'is this a scam' like 10 times before starting 😅 Wish I'd just done it sooner tbh",
    name: "Emily S.",
    location: "Georgia",
    initial: "E"
  },
  {
    quote: "Some offers were quicker than others but honestly wasn't bad. Now I'm stocked up on snacks for the kids.",
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
