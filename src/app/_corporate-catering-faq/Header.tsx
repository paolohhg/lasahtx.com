"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-accent text-xs tracking-[0.2em] uppercase font-sans font-semibold mb-4"
        >
          Frequently Asked Questions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl leading-none mb-6"
        >
          Corporate Catering FAQ — LASA HTX
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          LASA HTX provides Filipino-rooted modern Asian catering across Houston
          and surrounding areas, serving corporate clients and teams of 25–500+
          guests.
        </motion.p>
      </div>
    </section>
  );
}
