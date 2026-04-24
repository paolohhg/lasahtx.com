"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import imgTrays from "@/assets/catering-trays.jpg";
import imgLumpia from "@/assets/catering-lumpia.jpg";
import imgBuffet from "@/assets/catering-buffet.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const gallery = [
  { src: imgTrays, alt: "Full corporate catering tray spread" },
  { src: imgBuffet, alt: "Professional buffet line setup" },
  { src: imgLumpia, alt: "Lumpia Shanghai — 50 to 500 pieces" },
];

export function Gallery() {
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
          Built for Scale. Designed to Impress.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-center text-muted-foreground text-sm tracking-wide mb-14"
        >
          Full tray spreads and structured buffet setups for 25–500+ guests.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {gallery.map((img, i) => (
            <motion.div
              key={img.alt}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.3}
              className="aspect-[4/3] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
