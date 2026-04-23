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
          FILIPINO ROOTS.
          <br />
          ASIAN RANGE.
        </motion.h2>

        <div className="space-y-6 font-sans">
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            LASA HTX is rooted in Filipino culinary tradition — bold adobo,
            comforting sinigang, rich kare-kare, and the communal spirit of
            shared dining.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            But it doesn&apos;t stop there.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Houston is one of the most diverse food cities in the country. LASA
            exists to reflect that diversity — bringing Filipino heritage
            together with a broader range of Asian flavors in one cohesive,
            elevated hospitality experience.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.25 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            From Southeast Asian influences to East Asian technique, LASA HTX
            delivers bold, layered cuisine designed for modern gatherings,
            corporate catering, and large-scale execution.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Built for professional environments. Designed for memorable
            experiences.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.35 }}
            className="text-primary-foreground font-medium text-lg pt-2"
          >
            This is Filipino at the core — Asian in range — corporate in
            execution.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
