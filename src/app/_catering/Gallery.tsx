"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, ConciergeBell, PackageCheck, Users, Utensils } from "lucide-react";
import cateringTrays from "@/assets/catering-trays.jpg";
import fuelAndFork from "@/assets/concepts/fuel-and-fork.jpg";
import rossoSocial from "@/assets/concepts/rosso-social.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const formats = [
  {
    icon: BriefcaseBusiness,
    title: "Recurring Office Catering",
    body: "Weekly lunches, department meals, standing meeting programs, and repeatable menu rotations.",
  },
  {
    icon: Utensils,
    title: "Executive Lunches",
    body: "Polished menus for leadership meetings, client presentations, boardrooms, and private office service.",
  },
  {
    icon: Users,
    title: "Training Events",
    body: "Reliable boxed lunches, buffet lines, and tray service for trainings, orientations, and summits.",
  },
  {
    icon: CalendarDays,
    title: "Private Events",
    body: "Chef-driven catering for celebrations, private gatherings, brand moments, and community events.",
  },
  {
    icon: ConciergeBell,
    title: "Hospitality Experiences",
    body: "Chef tables, tasting formats, activations, staffed events, and experience-led hospitality.",
  },
  {
    icon: PackageCheck,
    title: "Delivery, Setup & Staffing",
    body: "Scalable delivery, professional setup, labeled menus, service support, and event-day coordination.",
  },
];

const images = [
  { src: cateringTrays, alt: "Multi-cuisine catering trays prepared for a corporate event" },
  { src: fuelAndFork, alt: "Premium packaged meals for recurring office catering" },
  { src: rossoSocial, alt: "Italian-American office catering buffet setup" },
];

export function Gallery() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-accent font-sans text-xs tracking-[0.2em] uppercase font-semibold mb-4"
            >
              Catering formats
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-5"
            >
              Built for the Way Houston Teams Actually Eat.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-muted-foreground font-sans text-sm leading-relaxed mb-8"
            >
              LASA supports one-time events and recurring catering programs
              through one coordinated operation, so your team can change cuisine
              direction without changing the standard of execution.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formats.map((format, i) => (
                <motion.div
                  key={format.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.15}
                  className="border border-border bg-background p-5"
                >
                  <format.icon className="h-5 w-5 text-accent mb-4" />
                  <h3 className="font-display text-xl mb-2">{format.title}</h3>
                  <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                    {format.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {images.map((img, i) => (
              <motion.div
                key={img.alt}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.25}
                className={i === 0 ? "col-span-2 aspect-[16/9] overflow-hidden" : "aspect-[4/3] overflow-hidden"}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
