"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Professional, flavorful, and executed flawlessly.",
    author: "Corporate Client",
  },
  {
    quote: "Guests couldn't stop talking about the food.",
    author: "Event Host",
  },
  {
    quote: "Finally, Filipino cuisine presented at a corporate level.",
    author: "Private Client",
  },
];

export function HomeTestimonials() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground"
        >
          Trusted by Houston Teams &amp; Event Hosts.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border p-8"
            >
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">
                — {t.author}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/catering"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 text-sm tracking-wider uppercase px-10 py-6 font-medium transition-colors"
          >
            Start Your Inquiry
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
