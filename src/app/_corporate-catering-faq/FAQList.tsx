"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSections } from "@/content/corporate-catering-faq";

export function FAQList() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl space-y-12">
        {faqSections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: si * 0.05 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4 border-b border-border pb-3">
              {section.title}
            </h2>
            <Accordion multiple keepMounted className="w-full">
              {section.questions.map((item, qi) => (
                <AccordionItem key={qi} value={`${si}-${qi}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base font-sans font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed font-sans">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}

        {/* Contact Info */}
        <div className="border border-border p-6 md:p-8 space-y-4">
          <h2 className="font-display text-3xl">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row gap-4 text-sm font-sans">
            <a
              href="mailto:catering@lasahtx.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4 text-accent shrink-0" />
              catering@lasahtx.com
            </a>
            <a
              href="tel:+18325108440"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4 text-accent shrink-0" />
              832-510-8440
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
