"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import barrioSmoke from "@/assets/concepts/barrio-smoke.jpg";
import copperTable from "@/assets/concepts/copper-table.jpg";
import luckyTigerSocial from "@/assets/concepts/lucky-tiger-social.jpg";
import olivaHouse from "@/assets/concepts/oliva-house.jpg";
import rossoSocial from "@/assets/concepts/rosso-social.jpg";
import lasaSignatures from "@/assets/catering-lumpia.jpg";
import { scrollToInquiryForm } from "./scroll";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const collections: Array<{
  name: string;
  label: string;
  body: string;
  image: StaticImageData;
}> = [
  {
    name: "Oliva House",
    label: "Modern Mediterranean catering",
    body: "Herb chicken, shawarma-style spreads, hummus, grilled vegetables, salads, and executive-friendly bowls.",
    image: olivaHouse,
  },
  {
    name: "Rosso Social",
    label: "Italian-American comfort catering",
    body: "Pastas, meatballs, baked dishes, salads, focaccia, and family-style catering for teams and events.",
    image: rossoSocial,
  },
  {
    name: "Lucky Tiger Social",
    label: "Modern Asian comfort catering",
    body: "Korean beef, garlic noodles, fried rice, bao, satay, wok-fired vegetables, and bold shared plates.",
    image: luckyTigerSocial,
  },
  {
    name: "Barrio Smoke",
    label: "Texas-Latin grilled hospitality",
    body: "Fajita spreads, chimichurri steak, tacos, grilled proteins, street corn, salsas, and event-ready sides.",
    image: barrioSmoke,
  },
  {
    name: "Copper Table",
    label: "Southern comfort catering",
    body: "Roasted chicken, mac and cheese, mashed potatoes, sliders, BBQ-style proteins, biscuits, and comfort sides.",
    image: copperTable,
  },
  {
    name: "LASA HTX Signatures",
    label: "Filipino-rooted specialties",
    body: "Lumpia, adobo, pancit, Filipino BBQ, garlic rice, ube desserts, and the signature flavors that started LASA.",
    image: lasaSignatures,
  },
];

export function MenuSnapshot() {
  return (
    <section id="collections" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-accent font-sans text-xs tracking-[0.2em] uppercase font-semibold mb-4"
        >
          Cuisine collections
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-center"
        >
          Multiple Catering Directions. One Operating Standard.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="text-center text-muted-foreground text-sm leading-relaxed tracking-wide mb-14 max-w-3xl mx-auto"
        >
          Choose one collection or combine several into a hybrid menu. Filipino
          cuisine remains the LASA signature collection, not the boundary of the
          catering platform.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {collections.map((collection, i) => (
            <motion.article
              key={collection.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
              className="border border-border bg-card overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={`${collection.name} catering collection`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-accent font-sans text-xs tracking-[0.16em] uppercase font-semibold mb-2">
                  {collection.label}
                </p>
                <h3 className="font-display text-3xl mb-3">
                  {collection.name}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {collection.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToInquiryForm}
            className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 font-sans tracking-wide px-8 py-5 text-sm transition-colors"
          >
            Build a Multi-Concept Proposal <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
