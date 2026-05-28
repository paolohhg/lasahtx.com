import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  MapPin,
  Truck,
  type LucideIcon,
} from "lucide-react";
import cateringBuffet from "@/assets/catering-buffet.jpg";
import cateringHero from "@/assets/catering-hero-bg.webp";
import cateringLumpia from "@/assets/catering-lumpia.jpg";
import cateringTrays from "@/assets/catering-trays.jpg";
import chefHero from "@/assets/chef-hero.webp";
import houstonSkyline from "@/assets/houston-skyline-hero.jpg";
import kitchenHero from "@/assets/kitchen-hero.webp";
import { FullInquiryForm } from "./_catering/FullInquiryForm";

const metrics = [
  "20-500+ guests",
  "Multi-concept menus",
  "Corporate catering specialists",
  "Houston-based operations",
];

const concepts: Array<{
  name: string;
  line: string;
  menu: string;
  image: StaticImageData;
}> = [
  {
    name: "Oliva House",
    line: "Modern Mediterranean hospitality.",
    menu: "Shawarma, herb chicken, grilled vegetables, hummus spreads, executive bowls.",
    image: cateringBuffet,
  },
  {
    name: "Rosso Social",
    line: "Italian-American comfort hospitality.",
    menu: "Pastas, baked dishes, meatballs, salads, and family-style catering.",
    image: cateringTrays,
  },
  {
    name: "Lucky Tiger Social",
    line: "Modern Asian comfort catering.",
    menu: "Korean beef, garlic noodles, fried rice, bao, satay, and wok-fired dishes.",
    image: chefHero,
  },
  {
    name: "Barrio Smoke",
    line: "Texas-Latin grilled hospitality.",
    menu: "Fajita spreads, chimichurri steak, tacos, grilled proteins, and street corn.",
    image: cateringHero,
  },
  {
    name: "Copper Table",
    line: "Southern-inspired corporate comfort.",
    menu: "Roasted chicken, mashed potatoes, mac and cheese, sliders, and BBQ formats.",
    image: kitchenHero,
  },
  {
    name: "Soft Culture",
    line: "Trend-forward desserts and sweets.",
    menu: "Ube desserts, butter mochi, soft serve, dessert boxes, and seasonal sweets.",
    image: cateringLumpia,
  },
  {
    name: "Fuel & Fork",
    line: "Chef-driven premium meal prep.",
    menu: "High-protein meals, health-forward bowls, and packaged recurring programs.",
    image: cateringBuffet,
  },
  {
    name: "LASA HTX",
    line: "Founder flagship with Filipino roots.",
    menu: "Lumpia, adobo, pancit, Filipino BBQ, garlic rice, and modern Asian hospitality.",
    image: cateringLumpia,
  },
];

const cateringFormats = [
  "Boxed lunches",
  "Tray catering",
  "Recurring meal programs",
  "Executive lunches",
  "Training and event catering",
  "Office celebrations",
  "Hybrid cuisine menus",
];

const process = [
  "Inquiry",
  "Concept and menu selection",
  "Proposal and coordination",
  "Production",
  "Delivery, setup, and execution",
];

const experiences = [
  "Chef dinners",
  "Cooking classes",
  "Venue activations",
  "Themed nights",
  "Collaborations",
  "Tasting events",
  "Chef tables",
  "Hospitality experiences",
];

const serviceAreas = [
  "Houston",
  "The Woodlands",
  "Spring",
  "Magnolia",
  "Conroe",
  "Tomball",
  "Energy Corridor",
];

const infrastructure: Array<{
  label: string;
  Icon: LucideIcon;
}> = [
  { label: "Centralized production", Icon: Building2 },
  { label: "Logistics systems", Icon: Truck },
  { label: "CRM workflows", Icon: CalendarCheck },
  { label: "Scalable execution", Icon: MapPin },
];

export default function HomePage() {
  return (
    <main className="bg-background">
      <section className="relative min-h-[92svh] overflow-hidden bg-primary text-primary-foreground">
        <Image
          src={cateringHero}
          alt="LASA Hospitality catering setup with prepared dishes for a Houston event"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex min-h-[92svh] items-end">
          <div className="container mx-auto px-4 pb-16 pt-32 md:pb-20">
            <div className="max-w-5xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/75">
                LASA Hospitality / Houston
              </p>
              <h1 className="max-w-4xl font-display text-5xl leading-[0.92] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                Modern Hospitality Built for Houston
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/82 md:text-xl md:leading-8">
                Multi-cuisine corporate catering, hospitality experiences, and
                scalable food systems powered by one centralized operation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#inquiry-form"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-accent px-6 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Request Catering <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#concepts"
                  className="inline-flex h-12 items-center justify-center border border-primary-foreground/40 px-6 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Explore Concepts
                </Link>
              </div>
            </div>
            <div className="mt-14 grid border-y border-primary-foreground/25 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric}
                  className="border-primary-foreground/25 py-5 text-sm font-semibold uppercase tracking-wide text-primary-foreground/80 md:border-r md:px-5 last:md:border-r-0"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Operating thesis
            </p>
            <h2 className="font-display text-5xl leading-none tracking-wide md:text-7xl">
              Cuisine is modular. Infrastructure is the differentiator.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-muted-foreground md:text-lg">
            <p>
              LASA Hospitality operates multiple cuisine concepts through one
              centralized production, labor, logistics, CRM, and hospitality
              execution system.
            </p>
            <p>
              Filipino cuisine remains the emotional anchor and signature
              layer. It is not the operational limit. The platform is built to
              support modern Houston teams across cuisines, formats, budgets,
              and event styles.
            </p>
          </div>
        </div>
      </section>

      <section id="concepts" className="py-18 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Culinary ecosystem
            </p>
            <h2 className="font-display text-5xl leading-none tracking-wide md:text-7xl">
              One Catering Partner. Multiple Cuisine Concepts.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
              Each concept is visually distinct and operationally connected,
              giving clients menu flexibility without adding coordination
              complexity.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {concepts.map((concept) => (
              <article
                key={concept.name}
                className="group overflow-hidden border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={concept.image}
                    alt={`${concept.name} catering direction`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-3xl tracking-wide">
                    {concept.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {concept.line}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {concept.menu}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-18 text-primary-foreground md:py-28">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Corporate catering
            </p>
            <h2 className="font-display text-5xl leading-none tracking-wide md:text-7xl">
              Modern catering for modern Houston teams.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/72 md:text-lg">
              Built for office lunches, executive meetings, trainings,
              celebrations, recurring meal programs, and high-volume event days
              where reliability matters as much as the food.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {cateringFormats.map((format) => (
                <div
                  key={format}
                  className="border border-primary-foreground/15 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground/80"
                >
                  {format}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={cateringTrays}
              alt="Prepared catering trays ready for corporate delivery and setup"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border py-18 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                How it works
              </p>
              <h2 className="font-display text-5xl leading-none tracking-wide md:text-7xl">
                A mature path from inquiry to execution.
              </h2>
            </div>
            <div className="grid gap-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[56px_1fr] items-center border-t border-border py-5"
                >
                  <span className="font-display text-4xl text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-28">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={chefHero}
              alt="Chef-led hospitality preparation for LASA Hospitality"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Hospitality experiences
            </p>
            <h2 className="font-display text-5xl leading-none tracking-wide md:text-7xl">
              Bigger than trays.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
              LASA Hospitality is built to support catering today and a broader
              world of chef-driven programming, activations, tasting formats,
              and collaborative hospitality experiences over time.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {experiences.map((experience) => (
                <span
                  key={experience}
                  className="border border-border px-3 py-2 text-sm font-semibold uppercase tracking-wide"
                >
                  {experience}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60 py-18 md:py-28">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              LASA OS
            </p>
            <h2 className="font-display text-5xl leading-none tracking-wide md:text-7xl">
              Operational confidence behind the hospitality.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {infrastructure.map(({ label, Icon }) => (
              <div key={label} className="border-t border-border py-5">
                <Icon className="mb-5 h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Practical systems for coordination, production, customer
                  management, staffing, and event-day follow-through.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-18 text-primary-foreground md:py-28">
        <Image
          src={houstonSkyline}
          alt="Houston skyline representing LASA Hospitality service areas"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container relative z-10 mx-auto px-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Service areas
          </p>
          <h2 className="max-w-3xl font-display text-5xl leading-none tracking-wide md:text-7xl">
            Houston-based operations for teams across the region.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="bg-primary/90 px-5 py-5 text-sm font-semibold uppercase tracking-wide text-primary-foreground/82"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Start an inquiry
            </p>
            <h2 className="font-display text-5xl leading-none tracking-wide md:text-7xl">
              Let&apos;s build your catering program.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
              Tell us the guest count, cuisine direction, location, service
              needs, and timeline. The form routes into our catering workflow so
              we can respond with the right next step.
            </p>
          </div>
        </div>
        <FullInquiryForm />
      </section>
    </main>
  );
}
