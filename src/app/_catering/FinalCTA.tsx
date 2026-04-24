"use client";

import { motion } from "framer-motion";
import { scrollToInquiryForm } from "./scroll";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-accent/5 border-t border-accent/20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
        >
          Let&apos;s Feed the Room.
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToInquiryForm}
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-semibold tracking-wide px-10 py-6 text-sm transition-colors"
          >
            Request Corporate Catering Proposal
          </button>
          <a
            href="tel:+18325108440"
            className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-10 py-[1.375rem] text-sm transition-colors"
          >
            Call Us
          </a>
          <a
            href="sms:+18325108440"
            className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-10 py-[1.375rem] text-sm transition-colors"
          >
            Text Us
          </a>
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="text-muted-foreground text-xs font-sans tracking-wide mt-8"
        >
          info@lasahtx.com · +1 (832) 510-8440 · Houston, The Woodlands,
          Magnolia &amp; Greater Houston, TX
        </motion.p>
      </div>
    </section>
  );
}
