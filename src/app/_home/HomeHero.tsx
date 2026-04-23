"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import houstonSkyline from "@/assets/houston-skyline-hero.jpg";

export function HomeHero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={houstonSkyline}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <Image
            src={logo}
            alt="LASA HTX logo"
            className="h-32 sm:h-40 md:h-48 w-auto mx-auto"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-7xl sm:text-8xl md:text-9xl tracking-wider mb-4"
        >
          LASA HTX
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl font-light tracking-widest uppercase text-primary-foreground/70 mb-2"
        >
          Modern Asian Hospitality
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm tracking-wider text-primary-foreground/50 mb-12"
        >
          Built for Houston. Inspired by Asia.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/catering"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 text-sm tracking-wider uppercase px-10 py-6 font-medium transition-colors"
          >
            Book Catering
          </Link>
          <Link
            href="/pop-ups"
            className="inline-flex items-center justify-center bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-sm tracking-wider uppercase px-10 py-6 font-medium transition-colors"
          >
            View Pop-Ups
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
