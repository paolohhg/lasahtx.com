"use client";

import { motion } from "framer-motion";
import { CalendarCheck, BarChart3, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Define Event Scope",
    body: "We document guest count, event type, schedule, location, budget range, dietary needs, staffing expectations, and setup requirements.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Select Cuisine Collections",
    body: "Choose one LASA concept or combine several into a modular menu. We engineer quantities, packaging, service flow, and production timing.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Produce, Deliver & Execute",
    body: "Centralized production, coordinated logistics, labeled menus, professional setup, and event-day communication keep the experience controlled.",
  },
];

export function Process() {
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
          How LASA Executes Catering
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-center text-muted-foreground mb-16 text-sm tracking-wide max-w-2xl mx-auto"
        >
          The menu can change. The operating standard should not.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.4}
              className="border border-border bg-background p-8 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <item.icon className="h-6 w-6 text-accent" />
                <span className="font-display text-5xl text-muted-foreground/20">
                  {item.step}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
