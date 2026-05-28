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
          ONE OPERATING SYSTEM.
          <br />
          MANY CULINARY DIRECTIONS.
        </motion.h2>

        <div className="space-y-6 font-sans">
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            LASA is built on one centralized operating system: shared
            production, logistics, staffing, CRM, menu planning, and hospitality
            standards.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="border-l-2 border-accent pl-6 space-y-2"
          >
            <p className="text-primary-foreground font-medium text-lg">
              Not one chef.
            </p>
            <p className="text-primary-foreground font-medium text-lg">
              Not one cuisine.
            </p>
            <p className="text-primary-foreground font-medium text-lg">
              Not one catering menu.
            </p>
          </motion.div>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            The platform allows LASA to offer clients variety without
            sacrificing consistency. A corporate team can move from
            Mediterranean bowls to Italian-American comfort, Texas-Latin
            spreads, modern Asian menus, Southern corporate comfort, dessert
            programs, and meal prep without starting from scratch each time.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.35 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Behind the food is the part clients should feel even when they
            never see it: planning, production, communication, staffing,
            delivery, setup, and the standards that make hospitality feel calm
            when the event is complex.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
