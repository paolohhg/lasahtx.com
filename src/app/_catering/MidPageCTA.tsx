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

export function MidPageCTA() {
  return (
    <section className="py-20 border-t border-accent/20 bg-accent/5">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          Planning Your Next Corporate Event?
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
            Request a Catering Quote
          </button>
          <a
            href="tel:+18325108440"
            className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-10 py-[1.375rem] text-sm transition-colors"
          >
            Call (832) 510-8440
          </a>
        </motion.div>
      </div>
    </section>
  );
}
