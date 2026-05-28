import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catering", label: "Catering" },
  { href: "/#concepts", label: "Concepts" },
  { href: "/catering-menu", label: "Menus" },
  { href: "/corporate-catering-faq", label: "Catering FAQ" },
  { href: "/meal-prep", label: "Meal Prep" },
  { href: "/pop-ups", label: "Experiences" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-3xl tracking-widest mb-4">
              LASA Hospitality
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Modern Hospitality Built for Houston.
              <br />
              Multiple cuisine concepts. Professional execution.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <a
                href="https://www.instagram.com/lasahtx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Instagram @lasahtx
              </a>
              <a
                href="https://www.tiktok.com/@lasahtx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                TikTok @lasahtx
              </a>
              <a
                href="mailto:info@lasahtx.com"
                className="hover:text-accent transition-colors"
              >
                info@lasahtx.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-10 mb-8">
            <p className="text-xs font-display tracking-widest text-primary-foreground/60 mb-3">
              WHAT IS LASA?
            </p>
            <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-md">
              LASA is a Filipino word that means &quot;taste&quot; or
              &quot;flavor.&quot; Today it anchors a Houston hospitality
              platform built for multi-cuisine catering, chef-driven
              experiences, and scalable execution.
            </p>
            <p className="text-xs text-primary-foreground/60 leading-relaxed mt-3">
            One catering partner. Multiple cuisine concepts. Professional
            execution.
          </p>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} LASA HTX. All rights reserved.
            <span className="mx-2">/</span>
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/sms-terms"
              className="hover:text-accent transition-colors"
            >
              SMS Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
