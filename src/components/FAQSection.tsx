import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a Costco membership?",
    answer: "You need a membership to shop in-warehouse. However, you can use rewards on Costco.com for most items without a membership."
  },
  {
    question: "Is this cash?",
    answer: "No. This is store credit that applies at checkout. It works like a discount on your Costco purchase."
  },
  {
    question: "How long does it take?",
    answer: "Most people complete the required offers in 20-30 minutes. Some spread it out over a couple of days."
  },
  {
    question: "What kind of offers do I need to complete?",
    answer: "Offers vary but typically include app downloads, free trials, or signing up for services. You choose which ones work for you."
  },
  {
    question: "When do I get my reward?",
    answer: "After your completed offers are verified, rewards are typically processed within a few business days."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-semibold text-center mb-6 text-foreground">
          Common Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground text-sm hover:text-primary hover:no-underline py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-3">
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
