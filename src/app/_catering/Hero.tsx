"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";
import heroBg from "@/assets/catering-hero-bg.webp";
import { scrollToInquiryForm } from "./scroll";
import { QuickQuoteForm } from "./QuickQuoteForm";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Headline + authority + contacts */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-accent font-sans text-xs tracking-[0.2em] uppercase font-semibold mb-4"
            >
              Modern Asian Hospitality · Greater Houston Corporate Catering
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.0] mb-6"
            >
              Houston Corporate Catering for 25–500+ Guests — On Time.
              Organized. Elevated.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-xl"
            >
              Chef-led Filipino-rooted Asian catering built for offices,
              conferences, leadership summits, and high-volume events.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col gap-2 mb-6"
            >
              {[
                "Chef-led execution with 30 years of hospitality experience",
                "Structured logistics for 25–500+ guest corporate events",
                "Professional communication, delivery & on-time setup",
              ].map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-2 text-sm text-foreground font-sans"
                >
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="text-muted-foreground text-xs font-sans tracking-wide mb-8"
            >
              Serving Houston, The Woodlands, Magnolia, Conroe, Spring &amp;
              Greater Houston Area.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-4 mb-8 text-sm"
            >
              <a
                href="tel:+18325108440"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-accent shrink-0" />
                +1 (832) 510-8440
              </a>
              <a
                href="mailto:info@lasahtx.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                info@lasahtx.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={scrollToInquiryForm}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-semibold tracking-wide px-8 py-6 text-sm transition-colors"
              >
                Request Corporate Catering Proposal
              </button>
              <a
                href="tel:+18325108440"
                className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-8 py-[1.375rem] text-sm transition-colors"
              >
                Call (832) 510-8440
              </a>
              <a
                href="sms:+18325108440"
                className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-8 py-[1.375rem] text-sm transition-colors"
              >
                Text Us
              </a>
            </motion.div>
          </div>

          {/* Right: Quick Quote card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="bg-card/90 backdrop-blur border border-border p-6 md:p-8"
          >
            <p className="text-accent font-sans text-xs tracking-[0.18em] uppercase font-semibold mb-2">
              Quick Quote
            </p>
            <h2 className="font-display text-3xl mb-1">Request Catering Quote</h2>
            <p className="text-muted-foreground text-xs font-sans mb-6">
              We respond within 24 hours.
            </p>
            <QuickQuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
