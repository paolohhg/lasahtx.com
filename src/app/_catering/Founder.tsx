"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import chefImg from "@/assets/paolo-nucum.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const bullets = [
  "30+ years hospitality industry experience",
  "High-volume VIP event & restaurant background",
  "Chef-led menu design and quality control",
  "Filipino-rooted · Asian in range · Corporate in execution",
];

export function Founder() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="aspect-[3/4] overflow-hidden max-w-sm w-full mx-auto md:mx-0"
          >
            <Image
              src={chefImg}
              alt="Chef Paolo Nucum — LASA HTX Founder"
              className="w-full h-full object-cover object-top"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <p className="text-accent font-sans text-xs tracking-[0.18em] uppercase font-semibold mb-4">
              The Operator
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Built by a Hospitality Operator
            </h2>

            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
              LASA HTX is led by Chef Paolo Nucum, a hospitality professional
              with over 30 years of experience in high-volume restaurant,
              event, and VIP service environments.
            </p>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
              From large-scale service operations to disciplined event
              logistics, our approach blends culinary execution with
              operational precision.
            </p>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-8">
              Corporate catering is not just food — it&apos;s timing,
              communication, coordination, and reputation management. We
              understand what&apos;s at stake when your team hosts an event.
            </p>

            <div className="flex flex-col gap-2">
              {bullets.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground font-sans"
                >
                  <Check className="h-4 w-4 text-accent shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
