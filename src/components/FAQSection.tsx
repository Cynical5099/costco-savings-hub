import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How many deals do I need to complete?",
    answer: "You'll need to complete 4-5 deals minimum to qualify for rewards. This ensures you're an engaged participant in our program."
  },
  {
    question: "What types of deals are available?",
    answer: "Deals include mobile games & apps, subscription services, free trials, and product purchases. There's a variety to choose from based on your interests."
  },
  {
    question: "Are the deals free?",
    answer: "Some deals are completely free (like app downloads or free trials), while others require a purchase. You choose which ones work best for you."
  },
  {
    question: "How long does it take to get my reward?",
    answer: "Once you've completed the required deals and they've been verified, rewards are typically processed within a few business days."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
