"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const rows = [
  {
    label: "Delivered",
    value: "Multiple half trays, 100 lumpia, labeled dietary trays",
  },
  { label: "Setup Time", value: "15 Minutes" },
  { label: "Result", value: "Client rebooked within 30 days" },
];

export function CaseStudy() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-14 text-center"
        >
          Corporate Execution Example
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="border border-accent/30 bg-accent/5 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-start md:gap-12">
            <div className="md:flex-1 mb-8 md:mb-0">
              <p className="text-accent font-sans text-xs tracking-[0.18em] uppercase font-semibold mb-4">
                Event Brief
              </p>
              <h3 className="font-display text-3xl md:text-4xl mb-6">
                Leadership Summit — 85 Guests
              </h3>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div key={row.label} className="flex gap-3 text-sm">
                    <span className="text-muted-foreground font-sans w-24 shrink-0">
                      {row.label}
                    </span>
                    <span className="text-foreground font-sans font-medium">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-64 flex flex-col gap-4">
              <div className="border border-border bg-card p-5 text-center">
                <p className="font-display text-5xl text-accent">85</p>
                <p className="text-muted-foreground text-xs font-sans mt-1 tracking-wide">
                  Guests Served
                </p>
              </div>
              <div className="border border-border bg-card p-5 text-center">
                <p className="font-display text-5xl text-accent">
                  15<span className="text-2xl">min</span>
                </p>
                <p className="text-muted-foreground text-xs font-sans mt-1 tracking-wide">
                  Full Setup Time
                </p>
              </div>
              <div className="border border-accent/40 bg-accent/10 p-5 text-center">
                <Check className="h-6 w-6 text-accent mx-auto mb-1" />
                <p className="text-foreground text-xs font-sans font-semibold tracking-wide">
                  Rebooked in 30 Days
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
