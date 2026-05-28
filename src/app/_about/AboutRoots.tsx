"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function AboutRoots() {
  return (
    <section className="py-24 px-4 border-t border-primary-foreground/10">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          {...fadeUp}
          className="font-display text-4xl md:text-6xl tracking-widest text-primary-foreground mb-12"
        >
          CULTURAL ROOTS.
          <br />
          MULTI-CUISINE RANGE.
        </motion.h2>

        <div className="space-y-6 font-sans">
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Paolo&apos;s Filipino roots remain part of the heart of LASA. Dishes
            like lumpia, adobo, pancit, garlic rice, and ube desserts carry the
            memory and flavor that started the brand.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            But Filipino food is the signature layer — not the limitation.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Today, LASA has evolved beyond a single-cuisine catering concept.
            It operates as a modern hospitality platform with multiple culinary
            directions, from Asian-inspired menus and Filipino signatures to
            Mediterranean, Italian-American, Texas-Latin, Southern comfort,
            desserts, meal prep, and event experiences.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.25 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Houston is one of the most diverse food cities in the country. LASA
            exists to serve that reality with cultural grounding, menu
            flexibility, and the operational standards required for modern
            corporate catering and hospitality.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            The larger purpose is simple: bring modern, reliable, chef-driven
            hospitality to Houston at scale.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.35 }}
            className="text-primary-foreground font-medium text-lg pt-2"
          >
            Rooted in flavor. Built for range. Executed with discipline.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
