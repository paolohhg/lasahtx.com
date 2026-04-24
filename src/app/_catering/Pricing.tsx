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

const tiers = [
  {
    range: "25–100 guests",
    est: "from $450",
    note: "Office lunches, team meetings",
  },
  {
    range: "100–250 guests",
    est: "from $1,800",
    note: "Conferences, summits, training days",
  },
  {
    range: "250–500+ guests",
    est: "Custom proposal",
    note: "Large-scale corporate events",
  },
];

export function Pricing() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-center"
        >
          Corporate Event Investment
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="border border-accent/30 bg-accent/5 p-8 md:p-12 text-center mb-10"
        >
          <p className="font-display text-6xl md:text-7xl text-accent mb-4">
            $18–$32
          </p>
          <p className="text-foreground font-sans text-lg font-semibold mb-4">
            per guest
          </p>
          <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-2xl mx-auto">
            Most corporate catering events range from $18–$32 per guest
            depending on menu structure, service needs, and guest count. We
            structure proposals clearly and transparently so your team can
            approve quickly and confidently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.range}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.3}
              className="border border-border bg-background p-6 text-center"
            >
              <p className="text-accent font-sans text-xs tracking-[0.15em] uppercase font-semibold mb-2">
                {tier.range}
              </p>
              <p className="font-display text-3xl mb-2">{tier.est}</p>
              <p className="text-muted-foreground font-sans text-xs">
                {tier.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
