"use client";

import { Section } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { analytics } from "@/lib/analytics";

interface FAQProps {
  faqs: Array<{ question: string; answer: string }>;
  title?: string;
}

export function FAQ({ faqs, title = "Frequently Asked Questions" }: FAQProps) {
  return (
    <Section id="faq" className="bg-cpec-offwhite">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cpec-blue font-sans mb-4">
          {title}
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-cpec-border">
              <AccordionTrigger
                className="text-left font-sans text-cpec-blue hover:text-cpec-orange"
                onClick={() => analytics.trackFAQExpand(faq.question)}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-cpec-gray font-body">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
