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
const menuFeedUrl =
  process.env.HOSPITALITY_OS_MENU_FEED_URL ??
  "https://hospitality-os-core.vercel.app/api/public/menu?brand=lasa-htx";

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

const lunchPricing = [
  ["Standard Boxes", "Chicken, beef, tofu, pancit selections", "$16 - $18"],
  ["Premium Boxes", "Salmon & shrimp selections", "$19 - $24"],
  ["Corporate Volume", "50+ boxes per order", "$14 - $16 average"],
  ["Preferred Partner", "100+ boxes/month", "$15 flat across all boxes"],
];

type MenuFeedSize = {
  label: string;
  partner_price: number | null;
  serving_notes: string | null;
  standard_price: number | null;
};

type MenuFeedItem = {
  category: string;
  description: string | null;
  name: string;
  sizes: MenuFeedSize[];
};

type MenuFeedCategory = {
  description: string | null;
  name: string;
  sort_order: number;
};

type MenuFeed = {
  categories?: MenuFeedCategory[];
  items?: MenuFeedItem[];
};

type WebsiteMenu = {
  categories: MenuFeedCategory[];
  items: MenuFeedItem[];
};

const fallbackCategories = coreMenu.map((section, index) => ({
  name: section.title === "Desserts" ? "Dessert Add-Ons" : section.title,
  description: null,
  sort_order: (index + 1) * 10,
}));

const fallbackMenuItems: MenuFeedItem[] = [
  ...coreMenu.flatMap((section) => {
    const category = section.title === "Desserts" ? "Dessert Add-Ons" : section.title;

    return section.items.map((item) => {
      const [name, detail] = item.split(" — ");

      return {
        name,
        category,
        description: detail ?? null,
        sizes: [],
      };
    });
  }),
  ...lunchBoxes.map((box) => ({
    name: box.name,
    category: "Corporate Lunch Box Program",
    description: box.detail,
    sizes: [],
  })),
];

function formatPrice(value: number | null) {
  if (value === null || !Number.isFinite(value)) {
    return "Price TBD";
  }

  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
    style: "currency",
  }).format(value);
}

function sizeDetail(size: MenuFeedSize) {
  const details = [size.label, size.serving_notes].filter(Boolean);

  return details.join(" · ");
}

function uniqueCategoryList(menu: WebsiteMenu) {
  const seeded = menu.categories.map((category) => category.name);
  const discovered = menu.items.map((item) => item.category);

  return [...new Set([...seeded, ...discovered])];
}

function itemsByCategory(menu: WebsiteMenu, categoryName: string) {
  return menu.items.filter((item) => item.category === categoryName);
}

async function getWebsiteMenu(): Promise<WebsiteMenu> {
  try {
    const response = await fetch(menuFeedUrl, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Menu feed returned ${response.status}`);
    }

    const feed = (await response.json()) as MenuFeed;
    const items = (feed.items ?? []).filter((item) => item.name && item.category);

    if (!items.length) {
      throw new Error("Menu feed returned no items");
    }

    return {
      categories: feed.categories?.length ? feed.categories : fallbackCategories,
      items,
    };
  } catch {
    return {
      categories: fallbackCategories,
      items: fallbackMenuItems,
    };
  }
}

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

export default async function CateringMenuPage() {
  const websiteMenu = await getWebsiteMenu();
  const categoryNames = uniqueCategoryList(websiteMenu);
  const coreCategoryNames = categoryNames.filter(
    (category) => category !== "Corporate Lunch Box Program",
  );
  const dynamicLunchBoxes = itemsByCategory(websiteMenu, "Corporate Lunch Box Program");

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
            {coreCategoryNames.map((categoryName) => (
              <div key={categoryName} className="border border-border p-6">
                <h3 className="mb-5 font-display text-3xl">
                  {categoryName}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {itemsByCategory(websiteMenu, categoryName).map((item) => (
                    <li key={item.name} className="flex gap-3">
                      <Star className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        {item.name}
                        {item.description ? ` — ${item.description}` : ""}
                      </span>
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
            {(dynamicLunchBoxes.length ? dynamicLunchBoxes : lunchBoxes).map((box) => (
              <div
                key={box.name}
                className="border border-border bg-background p-5"
              >
                <h3 className="font-display text-2xl">{box.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {"detail" in box ? box.detail : box.description}
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
            {coreCategoryNames.map((categoryName) => {
              const pricedItems = itemsByCategory(websiteMenu, categoryName).filter(
                (item) => item.sizes.length,
              );

              if (!pricedItems.length) {
                return null;
              }

              return (
                <div key={categoryName}>
                  <h3 className="mb-5 font-display text-3xl">{categoryName}</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {pricedItems.map((item) => (
                      <div
                        key={item.name}
                        className="min-w-0 border border-border p-5"
                      >
                        <h4 className="break-words font-display text-2xl">
                          {item.name}
                        </h4>
                        {item.description ? (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        ) : null}
                        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {item.sizes.map((size) => (
                            <div
                              key={size.label}
                              className="border border-border bg-card p-4"
                            >
                              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                {sizeDetail(size)}
                              </p>
                              <p className="mt-2 font-medium">
                                Standard {formatPrice(size.standard_price)}
                              </p>
                              {size.partner_price !== null ? (
                                <p className="mt-1 font-semibold text-accent">
                                  Partner {formatPrice(size.partner_price)}
                                </p>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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
