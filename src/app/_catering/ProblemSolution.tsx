"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const problems = [
  {
    problem: "\u201CWe\u2019ve been burned by late catering.\u201D",
    solution:
      "Clear confirmations, structured production timelines, and reliable delivery windows — every time.",
  },
  {
    problem: "\u201CWe have dietary restrictions.\u201D",
    solution:
      "Clearly labeled trays. Separate packaging when required. Structured counts for accuracy.",
  },
  {
    problem: "\u201CWe need food that impresses, not just feeds.\u201D",
    solution:
      "Chef-driven Filipino-rooted Asian flavors executed at scale with professional presentation.",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-center"
        >
          Your Catering Shouldn&apos;t Be the Stress Point.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-center text-muted-foreground mb-16 text-sm tracking-wide"
        >
          We built LASA around eliminating every friction point that makes
          corporate catering unreliable.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className="border border-border bg-background p-8 flex flex-col gap-6"
            >
              <div>
                <p className="text-xs text-accent font-sans font-semibold tracking-[0.15em] uppercase mb-3">
                  The Problem
                </p>
                <p className="text-foreground font-sans italic leading-snug text-sm">
                  {p.problem}
                </p>
              </div>
              <div className="w-8 h-px bg-accent" />
              <div>
                <p className="text-xs text-muted-foreground font-sans font-semibold tracking-[0.15em] uppercase mb-3">
                  Our Solution
                </p>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {p.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
