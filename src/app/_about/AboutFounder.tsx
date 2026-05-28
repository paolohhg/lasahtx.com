"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import paoloImage from "@/assets/paolo-nucum.webp";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function AboutFounder() {
  return (
    <section className="py-24 px-4 border-t border-primary-foreground/10">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          {...fadeUp}
          className="font-display text-3xl md:text-5xl tracking-widest text-primary-foreground mb-12 leading-tight"
        >
          THE FOUNDATION
          <br />
          BEHIND THE
          <br />
          OPERATING STANDARD.
        </motion.h2>

        <div className="space-y-6 font-sans mb-16">
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Paolo Nucum&apos;s hospitality career began on the floor — learning
            service, timing, urgency, and guest care before ever building a
            brand of his own.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="text-primary-foreground font-medium text-lg"
          >
            That foundation shaped LASA&apos;s operating philosophy: food matters,
            but execution matters just as much.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            New York taught pace and pressure. Las Vegas sharpened precision,
            expectation management, and the discipline required in high-volume
            hospitality environments where timing and guest experience cannot
            break down.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.25 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Along the way, Paolo worked across casino restaurants, local
            establishments, corporate systems, and independent operations. That
            range became the blueprint for LASA: practical, service-led,
            systems-aware, and built for real-world execution.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground font-medium text-lg"
          >
            Houston is where those standards became a company.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.35 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Paolo&apos;s story remains the foundation, but LASA is not built to be
            one chef, one cuisine, or one menu. It is built to become a serious
            Houston hospitality platform with cultural roots and scalable
            systems.
          </motion.p>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.4 }}
          className="flex items-start gap-8"
        >
          <div className="flex-shrink-0">
            <Image
              src={paoloImage}
              alt="Paolo Nucum, Founder and Culinary Director of LASA HTX"
              className="w-32 h-32 md:w-40 md:h-40 object-cover object-top"
              style={{ filter: "grayscale(20%)" }}
            />
          </div>
          <div className="pt-2">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-sans mb-2">
              Founder &amp; Culinary Director
            </p>
            <h3 className="font-display text-3xl md:text-4xl text-primary-foreground tracking-widest mb-2">
              PAOLO NUCUM
            </h3>
            <p className="text-primary-foreground/60 text-sm font-sans">
              Hospitality operator, founder, and standard-setter for LASA&apos;s
              service culture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
