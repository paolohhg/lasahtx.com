"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageSquare,
  X,
  ArrowRight,
  Phone,
  HelpCircle,
} from "lucide-react";
import { scrollToInquiryForm } from "./scroll";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-2"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="bg-card border border-border shadow-lg p-2 flex flex-col gap-1 min-w-[220px]"
              >
                <button
                  onClick={() => {
                    scrollToInquiryForm();
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-sans text-foreground hover:bg-muted transition-colors text-left w-full"
                >
                  <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                  Request a Quote
                </button>
                <a
                  href="tel:+18325108440"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-sans text-foreground hover:bg-muted transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  Call 832-510-8440
                </a>
                <Link
                  href="/corporate-catering-faq"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-sans text-foreground hover:bg-muted transition-colors"
                >
                  <HelpCircle className="h-4 w-4 text-accent shrink-0" />
                  Catering FAQ
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen(!open)}
            className="bg-accent text-accent-foreground h-14 w-14 flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors"
            aria-label="Quick actions"
          >
            {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
