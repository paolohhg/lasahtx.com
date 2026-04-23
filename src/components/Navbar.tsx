"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/catering", label: "Catering" },
  { href: "/meal-prep", label: "Meal Prep" },
  { href: "/pop-ups", label: "Pop-Ups" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl tracking-widest"
        >
          <Image
            src={logo}
            alt="LASA HTX logo"
            className="h-10 w-auto"
            priority
          />
          LASA HTX
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent",
                pathname === l.href
                  ? "text-accent"
                  : "text-primary-foreground/80"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-6 py-3 text-sm font-medium tracking-wide uppercase",
                pathname === l.href
                  ? "text-accent"
                  : "text-primary-foreground/80"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
