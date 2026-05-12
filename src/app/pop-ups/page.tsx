import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { popUps } from "@/content/pop-ups";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Lasa HTX Pop-Ups — Limited Filipino & Modern Asian Drops",
  },
  description:
    "Limited Lasa HTX pop-up drops, preorder events, and private chef appearances in Houston and the surrounding area.",
  keywords: [
    "Lasa HTX pop-ups",
    "Filipino pop-up Houston",
    "Houston food pop-up",
    "modern Asian pop-up Houston",
    "Filipino preorder Houston",
  ],
  openGraph: {
    title: "Lasa HTX Pop-Ups",
    description:
      "Limited Filipino-rooted modern Asian drops and preorder events.",
    url: "/pop-ups",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lasa HTX Pop-Ups",
    description:
      "Limited Filipino-rooted modern Asian drops and preorder events.",
  },
  alternates: {
    canonical: "/pop-ups",
  },
};

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(date));
}

const popUpsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...popUps.map((event) => ({
      "@type": "FoodEvent",
      "@id": `https://lasahtx.com/pop-ups#${event.id}`,
      name: event.title,
      description: event.description,
      startDate: event.date,
      endDate: event.endDate,
      eventStatus:
        event.status === "past"
          ? "https://schema.org/EventCompleted"
          : "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: event.image ? `${siteUrl}${event.image}` : undefined,
      location: {
        "@type": "Place",
        name: event.location.name,
        address: event.location.address,
      },
      organizer: { "@id": "https://lasahtx.com/#business" },
      offers: event.stripePaymentLinkUrl
        ? {
            "@type": "Offer",
            url: event.stripePaymentLinkUrl,
            availability:
              event.status === "sold_out"
                ? "https://schema.org/SoldOut"
                : "https://schema.org/InStock",
          }
        : undefined,
    })),
    {
      "@type": "CollectionPage",
      "@id": "https://lasahtx.com/pop-ups#page",
      url: "https://lasahtx.com/pop-ups",
      name: "Lasa HTX Pop-Ups",
      isPartOf: { "@id": "https://lasahtx.com/#website" },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: popUps.length,
        itemListElement: popUps.map((event, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": `https://lasahtx.com/pop-ups#${event.id}` },
        })),
      },
    },
  ],
};

export default function PopUpsPage() {
  const upcoming = popUps.filter((event) => event.status !== "past");
  const past = popUps.filter((event) => event.status === "past");

  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(popUpsSchema) }}
      />

      <section className="min-h-[72vh] pt-32 pb-20 bg-primary text-primary-foreground flex items-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="font-sans text-xs tracking-[0.24em] uppercase text-accent mb-5">
            Limited Drops
          </p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-none tracking-wide max-w-3xl">
            Pop-Ups
          </h1>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mt-8 max-w-2xl">
            Small-run menus, preorder-only drops, and chef-driven appearances
            rooted in Filipino flavor and modern Asian hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="#drops"
              className="inline-flex h-14 items-center justify-center bg-accent px-8 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
            >
              View Drops
            </Link>
            <Link
              href="/catering?eventType=Private%20Pop-Up#inquiry-form"
              className="inline-flex h-14 items-center justify-center border border-primary-foreground/30 px-8 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Book a Private Pop-Up
            </Link>
          </div>
        </div>
      </section>

      <section id="drops" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-3">
                Schedule
              </p>
              <h2 className="font-display text-4xl md:text-5xl">
                Upcoming Drops
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Drops are limited and announced when preorder links are ready.
              Follow LASA HTX for release windows and pickup details.
            </p>
          </div>

          {upcoming.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcoming.map((event) => (
                <article
                  key={event.id}
                  className="border border-border bg-card p-6 md:p-8"
                >
                  <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                    <Sparkles className="h-4 w-4" />
                    {event.status === "sold_out" ? "Sold Out" : "Upcoming"}
                  </div>
                  <h3 className="font-display text-3xl mb-4">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-center gap-3">
                      <CalendarDays className="h-4 w-4 text-accent" />
                      {formatEventDate(event.date)}
                    </p>
                    <p className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-accent" />
                      {event.location.name} · {event.location.address}
                    </p>
                  </div>
                  {event.stripePaymentLinkUrl ? (
                    <a
                      href={event.stripePaymentLinkUrl}
                      className="mt-8 inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
                    >
                      Preorder
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-border bg-card p-8 md:p-12 text-center">
              <Sparkles className="h-8 w-8 text-accent mx-auto mb-5" />
              <h3 className="font-display text-3xl md:text-4xl mb-4">
                Next Drop Coming Soon
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                No public pop-up is on the calendar right now. New menus and
                preorder windows will be posted here as soon as they are
                released.
              </p>
              <Link
                href="/catering?eventType=Private%20Pop-Up#inquiry-form"
                className="mt-8 inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Plan a Private Pop-Up
              </Link>
            </div>
          )}
        </div>
      </section>

      {past.length > 0 ? (
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-display text-4xl mb-10">Past Pop-Ups</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {past.map((event) => (
                <article key={event.id} className="border border-border p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    {formatEventDate(event.date)}
                  </p>
                  <h3 className="font-display text-2xl mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
