"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function AboutHospitality() {
  return (
    <section className="py-24 px-4 border-t border-primary-foreground/10">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          {...fadeUp}
          className="font-display text-4xl md:text-6xl tracking-widest text-primary-foreground mb-12"
        >
          MODERN HOSPITALITY
        </motion.h2>

        <div className="space-y-6 font-sans">
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            LASA HTX blends Filipino heritage, Asian culinary range, New York
            intensity, and Vegas-level hospitality into a structured operation
            built for scale.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="border-l-2 border-accent pl-6 space-y-2"
          >
            <p className="text-primary-foreground font-medium text-lg">
              We are not a food truck.
            </p>
            <p className="text-primary-foreground font-medium text-lg">
              We are not a pop-up-only concept.
            </p>
          </motion.div>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            LASA HTX is a full-service hospitality brand designed for execution
            — from intimate chef&apos;s table experiences to 500+ guest
            catering programs across Houston.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.35 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            From small gatherings to corporate events and large-scale
            celebrations, every detail reflects discipline, precision, and
            respect for the guest experience.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
