import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

const pdfHref = "/menus/lasa-htx-catering-menu.pdf";

const serviceAreas = [
  "Houston",
  "The Woodlands",
  "Magnolia",
  "Conroe",
  "Surrounding Areas",
];

const coreMenu = [
  {
    title: "Appetizers",
    items: [
      "Lumpia Shanghai — 50 pcs",
      "Sisig Cups",
      "Filipino BBQ Chicken Skewers",
      "Filipino BBQ Pork Skewers",
    ],
  },
  {
    title: "Filipino Signatures",
    items: [
      "Chicken Adobo",
      "Filipino BBQ Chicken",
      "Filipino BBQ Pork",
      "Bistek Tagalog",
      "Lechon Kawali",
      "Beef Caldereta",
    ],
  },
  {
    title: "Asian Favorites",
    items: [
      "Korean Beef",
      "Beef & Broccoli",
      "Teriyaki Chicken",
      "Coconut Curry Chicken",
      "Beef Rendang",
    ],
  },
  {
    title: "Rice & Noodles",
    items: ["Garlic Rice", "Steamed Jasmine Rice", "Pancit Bihon"],
  },
  {
    title: "Desserts",
    items: [
      "Coconut Pandan Flan — 10 person min",
      "Ube Flan — 10 person min",
    ],
  },
];

const lunchBoxes = [
  {
    name: "Chicken Adobo Bowl",
    detail: "Garlic rice, chicken adobo, pickled cucumber, green onion.",
  },
  {
    name: "Korean Beef Bowl",
    detail: "Jasmine rice, Korean beef, sesame cucumber, green onion.",
  },
  {
    name: "Chili Garlic Chicken Bowl",
    detail:
      "Garlic rice, chili garlic chicken thigh, roasted broccoli, chili crunch drizzle.",
  },
  {
    name: "Filipino BBQ Chicken Plate",
    detail: "Garlic rice, BBQ chicken, atchara, scallions.",
  },
  {
    name: "Teriyaki Salmon Bowl",
    detail: "Jasmine rice, teriyaki salmon, bok choy, sesame seeds.",
  },
  {
    name: "Pancit Chicken Box",
    detail: "Pancit bihon, chicken thigh, citrus wedge, green onion.",
  },
  {
    name: "Garlic Shrimp Bowl",
    detail: "Garlic rice, chili garlic shrimp, charred vegetables, herb garnish.",
  },
  {
    name: "Sesame Tofu Bowl",
    detail: "Jasmine rice, crispy sesame tofu, roasted vegetables, chili crisp.",
  },
  {
    name: "Beef & Broccoli Bowl",
    detail: "Jasmine rice, soy garlic beef, broccoli, sesame seeds.",
  },
  {
    name: "Coconut Curry Chicken Bowl",
    detail:
      "Jasmine rice, coconut curry chicken, roasted vegetables, herb garnish.",
  },
];

const partnerBenefits = [
  "$15 flat-rate lunch box pricing across all selections",
  "Reduced catering tray pricing across the menu",
  "Simplified recurring ordering process",
  "Priority scheduling on event dates",
  "Flexible menu planning per office",
  "Early access to seasonal specials",
  "Hospitality-first support for recurring catering",
  "Direct founder-level relationship",
];

const trayPricing = [
  {
    category: "Filipino Signatures",
    items: [
      ["Chicken Adobo", "Half $95", "Full $185", "Half $85", "Full $170"],
      [
        "Filipino BBQ Chicken",
        "Half $105",
        "Full $205",
        "Half $95",
        "Full $190",
      ],
      [
        "Filipino BBQ Pork",
        "Half $115",
        "Full $225",
        "Half $105",
        "Full $210",
      ],
      ["Bistek Tagalog", "Half $125", "Full $245", "Half $115", "Full $230"],
      ["Lechon Kawali", "Half $135", "Full $265", "Half $125", "Full $250"],
      ["Beef Caldereta", "Half $115", "Full $220", "Half $105", "Full $205"],
    ],
  },
  {
    category: "Asian Favorites",
    items: [
      ["Korean Beef", "Half $115", "Full $225", "Half $105", "Full $210"],
      ["Beef & Broccoli", "Half $120", "Full $235", "Half $110", "Full $220"],
      ["Teriyaki Chicken", "Half $105", "Full $205", "Half $95", "Full $190"],
      [
        "Coconut Curry Chicken",
        "Half $115",
        "Full $220",
        "Half $105",
        "Full $205",
      ],
      ["Beef Rendang", "Half $115", "Full $220", "Half $105", "Full $205"],
    ],
  },
  {
    category: "Rice & Noodles",
    items: [
      ["Garlic Rice", "Half $55", "Full $95", "Half $50", "Full $85"],
      [
        "Steamed Jasmine Rice",
        "Half $45",
        "Full $80",
        "Half $40",
        "Full $70",
      ],
      ["Pancit Bihon", "Half $75", "Full $135", "Half $65", "Full $120"],
    ],
  },
];

const smallBites = [
  ["Lumpia Shanghai", "50 pcs", "$85", "$75"],
  ["Sisig Cups", "24 pcs", "$110", "$100"],
  ["Filipino BBQ Chicken Skewers", "per skewer", "$4", "$3.50"],
  ["Filipino BBQ Pork Skewers", "per skewer", "$4.50", "$4"],
];

const dessertAddOns = [
  ["Coconut Pandan Flan", "10 person minimum", "$6 per person"],
  ["Ube Flan", "10 person minimum", "$7 per person"],
];

const lunchPricing = [
  ["Standard Boxes", "Chicken, beef, tofu, pancit selections", "$16 - $18"],
  ["Premium Boxes", "Salmon & shrimp selections", "$19 - $24"],
  ["Corporate Volume", "50+ boxes per order", "$14 - $16 average"],
  ["Preferred Partner", "100+ boxes/month", "$15 flat across all boxes"],
];

export const metadata: Metadata = {
  title: {
    absolute: "Lasa HTX Catering Menu & Partner Program",
  },
  description:
    "Explore the Lasa HTX catering menu, lunch box program, tray pricing, and preferred partner program for Houston, The Woodlands, Magnolia, and Conroe.",
  alternates: {
    canonical: "/catering-menu",
  },
  openGraph: {
    title: "Lasa HTX Catering Menu",
    description:
      "Modern Asian-inspired catering, corporate lunch boxes, tray pricing, and recurring partner options.",
    url: "/catering-menu",
    type: "website",
  },
};

function PrimaryCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href="/catering#inquiry-form"
        className="inline-flex h-14 items-center justify-center bg-accent px-7 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
      >
        Request Catering Quote
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      <a
        href={pdfHref}
        download
        className="inline-flex h-14 items-center justify-center border border-primary-foreground/30 px-7 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
      >
        Download PDF
        <Download className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}

export default function CateringMenuPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="bg-primary pt-32 pb-20 text-primary-foreground md:pt-40">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Modern Asian Hospitality · 2026 Catering Program
            </p>
            <h1 className="font-display text-6xl leading-none tracking-wide sm:text-7xl md:text-8xl">
              Lasa HTX Catering Menu
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
              Modern Asian-inspired catering designed for corporate events,
              private gatherings, and high-volume hospitality execution.
              Engineered for strong hold quality, scalable production, and
              elevated presentation.
            </p>
            <div className="mt-8">
              <PrimaryCtas />
            </div>
          </div>

          <div className="border border-primary-foreground/15 p-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Service Area
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-sm text-primary-foreground/75"
                >
                  <MapPin className="h-4 w-4 text-accent" />
                  {area}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a
                href="mailto:info@lasahtx.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" />
                info@lasahtx.com
              </a>
              <a
                href="tel:+18325108440"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" />
                832-510-8440
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Core Catering Menu
              </p>
              <h2 className="font-display text-4xl md:text-5xl">
                Built for Buffets, Meetings, and High-Volume Events
              </h2>
            </div>
            <Link
              href="/catering#inquiry-form"
              className="inline-flex h-12 items-center justify-center border border-border px-6 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-foreground/5"
            >
              Build a Proposal
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreMenu.map((section) => (
              <div key={section.title} className="border border-border p-6">
                <h3 className="mb-5 font-display text-3xl">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Star className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Corporate Lunch Box Program
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Fast Assembly. Clean Reheating. Strong Hold Quality.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Designed for office catering, team lunches, and production
              efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lunchBoxes.map((box) => (
              <div
                key={box.name}
                className="border border-border bg-background p-5"
              >
                <h3 className="font-display text-2xl">{box.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {box.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/catering#inquiry-form"
              className="inline-flex h-14 items-center justify-center bg-accent px-8 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Plan an Office Lunch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Preferred Partner Program
            </p>
            <h2 className="font-display text-5xl md:text-6xl">
              $15 Flat Across All Lunch Boxes
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70">
              Organizations ordering 100+ lunch boxes per month unlock
              Preferred Partner Pricing across the Corporate Lunch Box Program
              and Core Catering Menu. Monthly totals may be reached across
              multiple orders, meetings, or recurring office lunches.
            </p>
            <p className="mt-5 text-sm font-semibold text-primary-foreground">
              No contracts. No long-term commitment. Founder-stage relationship
              pricing.
            </p>
            <div className="mt-8">
              <Link
                href="/catering#inquiry-form"
                className="inline-flex h-14 items-center justify-center bg-accent px-8 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Become a Partner
                <Handshake className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {partnerBenefits.map((benefit) => (
              <div
                key={benefit}
                className="border border-primary-foreground/15 p-5 text-sm text-primary-foreground/75"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Pricing Structure
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Transparent Tray, Box, and Partner Pricing
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Standard pricing is for one-time orders and non-program clients.
              Partner pricing is unlocked at 100+ lunch boxes per month.
            </p>
          </div>

          <div className="space-y-12">
            {trayPricing.map((group) => (
              <div key={group.category}>
                <h3 className="mb-5 font-display text-3xl">{group.category}</h3>
                <div className="overflow-x-auto border border-border">
                  <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                    <thead className="bg-card text-xs uppercase tracking-wide text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3">Item</th>
                        <th className="px-4 py-3" colSpan={2}>
                          Standard
                        </th>
                        <th className="px-4 py-3 text-accent" colSpan={2}>
                          Partner
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.items.map((item) => (
                        <tr key={item[0]} className="border-t border-border">
                          <td className="px-4 py-4 font-medium">{item[0]}</td>
                          <td className="px-4 py-4 text-muted-foreground">
                            {item[1]}
                          </td>
                          <td className="px-4 py-4 text-muted-foreground">
                            {item[2]}
                          </td>
                          <td className="px-4 py-4 text-accent">{item[3]}</td>
                          <td className="px-4 py-4 text-accent">{item[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 font-display text-3xl">Appetizers</h3>
              <div className="overflow-x-auto border border-border">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead className="bg-card text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3">Item</th>
                      <th className="px-4 py-3">Unit</th>
                      <th className="px-4 py-3">Standard</th>
                      <th className="px-4 py-3 text-accent">Partner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {smallBites.map((item) => (
                      <tr key={item[0]} className="border-t border-border">
                        <td className="px-4 py-4 font-medium">{item[0]}</td>
                        <td className="px-4 py-4 text-muted-foreground">
                          {item[1]}
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">
                          {item[2]}
                        </td>
                        <td className="px-4 py-4 text-accent">{item[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="mb-5 font-display text-3xl">Dessert Add-Ons</h3>
              <div className="border border-border">
                {dessertAddOns.map((item) => (
                  <div
                    key={item[0]}
                    className="grid grid-cols-1 gap-2 border-b border-border p-5 last:border-b-0 sm:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <p className="font-medium">{item[0]}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item[1]}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-accent">
                      {item[2]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-5 font-display text-3xl">
              Lunch Box Pricing Summary
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {lunchPricing.map((item) => (
                <div key={item[0]} className="border border-border p-5">
                  <p className="font-display text-2xl">{item[0]}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item[1]}
                  </p>
                  <p className="mt-4 text-lg font-semibold text-accent">
                    {item[2]}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Core catering menu pricing may vary based on guest count, service
              style, and event requirements. Custom proposals available on
              request.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary py-20 text-center text-primary-foreground md:py-28">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Book Catering · Become a Partner
          </p>
          <h2 className="font-display text-5xl md:text-7xl">
            Modern Asian Hospitality, Engineered for the Way Houston Eats.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
            Custom proposals and recurring partnership inquiries welcome.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/catering#inquiry-form"
              className="inline-flex h-14 items-center justify-center bg-accent px-8 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Request Catering Quote
            </Link>
            <a
              href={pdfHref}
              download
              className="inline-flex h-14 items-center justify-center border border-primary-foreground/30 px-8 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Download Menu PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
