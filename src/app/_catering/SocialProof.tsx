"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarCheck,
  TrendingUp,
  ShieldCheck,
  Star,
  Quote,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const stats = [
  { icon: Users, stat: "25–500+", label: "Guest Capacity" },
  { icon: CalendarCheck, stat: "24hr", label: "Response Guarantee" },
  { icon: TrendingUp, stat: "100%", label: "On-Time Performance" },
  { icon: ShieldCheck, stat: "Licensed", label: "& Commercially Insured" },
];

const testimonials = [
  {
    quote:
      "LASA delivered for our 90-person corporate event without a single issue. Clear communication, beautiful presentation, and flawless execution.",
    author: "HR Director",
    company: "Houston Energy Firm",
  },
  {
    quote:
      "The team was professional, punctual, and the food was incredible. We had guests asking for the caterer's info the entire event.",
    author: "Office Manager",
    company: "The Woodlands Tech Company",
  },
  {
    quote:
      "We've tried a lot of caterers for our leadership summits. LASA is the only one we've rebooked. The systems, the presentation — everything was on point.",
    author: "Event Coordinator",
    company: "Greater Houston Healthcare Group",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-center"
        >
          Trusted by Houston Teams
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-center text-muted-foreground text-sm tracking-wide mb-14"
        >
          Serving corporate teams across Greater Houston — offices, conferences,
          medical &amp; pharma, summits.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.3}
              className="border border-border bg-card p-6 text-center"
            >
              <item.icon className="h-6 w-6 text-accent mx-auto mb-3" />
              <p className="font-display text-3xl mb-1">{item.stat}</p>
              <p className="text-muted-foreground font-sans text-xs tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.4}
              className="border border-border bg-card p-8 flex flex-col gap-5"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="h-5 w-5 text-accent/40" />
              <p className="text-muted-foreground font-sans text-sm leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-foreground font-sans text-sm font-semibold">
                  {t.author}
                </p>
                <p className="text-muted-foreground font-sans text-xs mt-0.5">
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
