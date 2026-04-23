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
          BUILT IN NEW YORK.
          <br />
          REFINED IN LAS VEGAS.
          <br />
          ROOTED IN HOUSTON.
        </motion.h2>

        <div className="space-y-6 font-sans mb-16">
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Paolo grew up in New York, learning hospitality from the ground up —
            clearing tables, observing service flow, and understanding how
            serious kitchens operate. The pace, pressure, and discipline of New
            York shaped his work ethic early.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="text-primary-foreground font-medium text-lg"
          >
            Las Vegas sharpened a different edge.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            For over a decade, Paolo worked in high-volume nightlife — serving
            VIP guests, managing expectations, and delivering top-tier service
            in some of the most fast-paced hospitality environments in the
            country. Precision, timing, and experience control were everything.
            When people expect a flawless night, there&apos;s no room for
            hesitation.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.25 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            Along the way, he also served in casino restaurants and local
            establishments — from overnight shifts at Denny&apos;s to TGI
            Fridays and a family-run breakfast spot — gaining perspective on
            both corporate systems and small-business grit.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground font-medium text-lg"
          >
            Houston is where those experiences converge.
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.35 }}
            className="text-primary-foreground/70 leading-relaxed text-lg"
          >
            It&apos;s not just a market — it&apos;s home. It&apos;s where family
            comes first. It&apos;s where legacy is being built.
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
              30+ years in high-volume hospitality and guest experience
              leadership.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
