"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl mb-4"
        >
          Chef-Driven Weekly Meals.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-primary-foreground/60 text-lg tracking-wider max-w-2xl mx-auto mb-6"
        >
          Individual portions. Bold Asian flavor. Built on hospitality.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-primary-foreground/40 text-sm tracking-widest uppercase"
        >
          Prepared fresh weekly. Limited quantities available.
        </motion.p>
      </div>
    </section>
  );
}
