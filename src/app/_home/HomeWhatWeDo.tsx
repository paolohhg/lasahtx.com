"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

const services = [
  {
    title: "Corporate Catering",
    desc: "Seamless execution for teams of 20 to 500+. Bold Filipino flavors. Professional presentation. Delivered on time.",
  },
  {
    title: "Private Events",
    desc: "From weddings to milestone celebrations — chef-driven menus designed to impress.",
  },
  {
    title: "Chef-Driven Weekly Meals",
    desc: "Restaurant-quality Filipino dishes prepared fresh and available for weekly ordering.",
  },
];

export function HomeWhatWeDo() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="font-display text-4xl md:text-5xl text-center mb-6 text-foreground"
        >
          Modern Asian Hospitality, Executed at Scale.
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.5}
          className="w-16 h-px bg-accent mx-auto mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="p-8 border border-border"
            >
              <h3 className="font-display text-2xl mb-3 text-foreground">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
          className="text-center mt-12"
        >
          <Link
            href="/catering"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 text-sm tracking-wider uppercase px-10 py-6 font-medium transition-colors"
          >
            Explore Catering <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
