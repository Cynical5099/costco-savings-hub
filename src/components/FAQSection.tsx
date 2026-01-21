import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How many deals do I need to complete?",
    answer: "You'll need to complete 4-5 deals minimum to qualify for your Costco reward. This helps verify you're an active participant."
  },
  {
    question: "What types of deals are available?",
    answer: "Deals include mobile games & apps, subscription services, free trials, and product purchases. Choose the ones that fit your lifestyle."
  },
  {
    question: "Are the deals free?",
    answer: "Some deals are completely free (like app downloads or free trials), while others require a purchase. You pick what works for you."
  },
  {
    question: "Do I need a Costco membership?",
    answer: "A Costco membership is required to use the gift card in-warehouse, but you can also use it on Costco.com without a membership for most items."
  },
  {
    question: "How long does it take to get my reward?",
    answer: "Once you've completed the required deals and they're verified, rewards are typically processed within a few business days."
  },
  {
    question: "Can I use this at any Costco?",
    answer: "Yes! Your reward works at any Costco warehouse location in the US, as well as on Costco.com and for Costco gas."
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
