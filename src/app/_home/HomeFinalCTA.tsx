"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HomeFinalCTA() {
  return (
    <section className="py-32 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl mb-8"
        >
          Let&apos;s Feed the Room.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href="/catering"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 text-sm tracking-wider uppercase px-12 py-6 font-medium transition-colors"
          >
            Start Catering Inquiry
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
