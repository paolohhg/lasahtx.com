"use client";

import { motion } from "framer-motion";
import { ChefHat, ArrowRight } from "lucide-react";
import { scrollToInquiryForm } from "./scroll";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const menuHighlights = [
  { name: "Lumpia Shanghai", detail: "50–500 pieces" },
  { name: "Chicken Adobo", detail: "Half / Full Trays" },
  { name: "Pancit Bihon", detail: "Half / Full Trays" },
  { name: "Filipino BBQ Skewers", detail: "Custom counts" },
  { name: "Garlic Fried Rice", detail: "Half / Full Trays" },
  { name: "Custom Corporate Buffet", detail: "Fully scalable packages" },
];

export function MenuSnapshot() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-3 text-center"
        >
          Signature Menu Items
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-center text-muted-foreground text-sm tracking-wide mb-14"
        >
          All menus built for 25–500+ guests with scalable tray systems.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {menuHighlights.map((item, i) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.3}
              className="border border-border bg-card p-6 flex items-start gap-4 hover:border-accent/40 transition-colors"
            >
              <ChefHat className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-lg leading-tight">
                  {item.name}
                </p>
                <p className="text-muted-foreground text-xs mt-1 font-sans">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToInquiryForm}
            className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-8 py-5 text-sm transition-colors"
          >
            Request a Custom Menu Proposal{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
