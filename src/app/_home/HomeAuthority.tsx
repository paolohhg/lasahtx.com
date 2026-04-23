"use client";

import { motion } from "framer-motion";

export function HomeAuthority() {
  return (
    <section className="py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-12"
        >
          Built from the Floor Up.
          <br />
          Driven by Hospitality.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-6 text-primary-foreground/70 leading-relaxed"
        >
          <p>
            Paolo Nucum began his career as a busboy at a New York country club
            — learning the rhythm of service before ever leading a team.
          </p>
          <p>
            By 20, he had worked his way up to General Manager, building a
            foundation in discipline, operational control, and guest experience
            that defines LASA HTX today.
          </p>
          <p>
            Rooted in Filipino heritage and shaped by years of leading diverse
            restaurant concepts, Paolo brings bold Asian flavors to Houston
            through structured, service-first execution.
          </p>
          <p className="font-display text-lg text-primary-foreground/90 tracking-wide">
            Hospitality first. Flavor elevated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
