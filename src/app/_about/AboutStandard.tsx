"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function AboutStandard() {
  return (
    <section className="py-32 px-4 border-t border-primary-foreground/10 text-center">
      <div className="container mx-auto max-w-2xl">
        <motion.p
          {...fadeUp}
          className="text-accent text-xs tracking-[0.4em] uppercase font-sans mb-8"
        >
          The Standard
        </motion.p>
        <motion.h2
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl tracking-widest text-primary-foreground mb-4 leading-tight"
        >
          SERVICE IS THE STANDARD.
        </motion.h2>
        <motion.h2
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="font-display text-5xl md:text-7xl tracking-widest text-accent mb-16 leading-tight"
        >
          FLAVOR IS THE SIGNATURE.
        </motion.h2>
        <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
          <Link
            href="/catering"
            className="inline-block border border-primary-foreground/40 text-primary-foreground/80 hover:border-primary-foreground hover:text-primary-foreground text-sm tracking-[0.2em] uppercase font-sans px-10 py-4 transition-colors duration-300"
          >
            Explore Catering
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
