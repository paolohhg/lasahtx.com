"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const faqPreviewItems = [
  {
    q: "What areas do you deliver catering to?",
    a: "LASA HTX serves Houston, The Woodlands, Spring, Conroe, Tomball, Magnolia, and the Energy Corridor.",
  },
  {
    q: "What size groups do you cater?",
    a: "We cater events from 25 to 500+ guests.",
  },
  {
    q: "What is the average price per person?",
    a: "Corporate catering ranges from $15–$25 per person depending on menu selection, guest count, and service level.",
  },
  {
    q: "Do you offer boxed lunches?",
    a: "Yes, we offer structured boxed lunch programs for corporate offices. Each box is individually packaged and clearly labeled.",
  },
  {
    q: "How far in advance should we book?",
    a: "For 25–75 guests, 48–72 hours is typically sufficient. Larger events may require 5–7 days notice.",
  },
  {
    q: "Can you accommodate dietary restrictions?",
    a: "Yes. We provide clearly labeled trays and separate packaging for dietary needs including gluten-free, vegetarian, and allergen-conscious options.",
  },
];

export function FAQPreview() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-3 text-center"
        >
          Catering FAQ
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-center text-muted-foreground text-sm tracking-wide mb-12"
        >
          Quick answers to common questions about our corporate catering
          services.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <Accordion multiple keepMounted className="w-full">
            {faqPreviewItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
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

        <div className="text-center mt-10">
          <Link
            href="/corporate-catering-faq"
            className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-8 py-5 text-sm transition-colors"
          >
            View Full Catering FAQ <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
