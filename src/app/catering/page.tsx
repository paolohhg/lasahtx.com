import type { Metadata } from "next";
import { Hero } from "../_catering/Hero";
import { TrustBar } from "../_catering/TrustBar";
import { Gallery } from "../_catering/Gallery";
import { Process } from "../_catering/Process";
import { MenuSnapshot } from "../_catering/MenuSnapshot";
import { Pricing } from "../_catering/Pricing";
import { CaseStudy } from "../_catering/CaseStudy";
import { ProblemSolution } from "../_catering/ProblemSolution";
import { SocialProof } from "../_catering/SocialProof";
import { MidPageCTA } from "../_catering/MidPageCTA";
import { FullInquiryForm } from "../_catering/FullInquiryForm";
import { FAQPreview } from "../_catering/FAQPreview";
import { FinalCTA } from "../_catering/FinalCTA";
import { FloatingCTA } from "../_catering/FloatingCTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Houston Multi-Concept Catering \u2014 LASA Hospitality",
  },
  description:
    "Chef-driven multi-cuisine catering collections for Houston teams and events, powered by one centralized LASA Hospitality operation.",
  keywords: [
    "multi-concept catering Houston",
    "corporate catering Houston",
    "office catering Houston",
    "conference catering Houston",
    "executive lunch catering Houston",
    "staffed event catering Houston",
    "Mediterranean catering Houston",
    "Italian catering Houston",
    "Latin catering Houston",
    "Southern catering Houston",
    "Filipino catering Houston",
    "Asian catering Houston",
    "catering The Woodlands",
    "catering Energy Corridor",
  ],
  openGraph: {
    title: "Houston Multi-Concept Catering \u2014 LASA Hospitality",
    description:
      "Multi-cuisine catering collections powered by one centralized hospitality operation.",
    url: "/catering",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston Multi-Concept Catering \u2014 LASA Hospitality",
    description: "Chef-driven catering built for Houston teams and events.",
  },
  alternates: {
    canonical: "/catering",
  },
};

const areaServed = [
  { "@type": "City", name: "Houston" },
  { "@type": "Place", name: "Montrose" },
  { "@type": "Place", name: "Heights" },
  { "@type": "Place", name: "EaDo" },
  { "@type": "Place", name: "Rice Village" },
  { "@type": "Place", name: "Museum District" },
  { "@type": "Place", name: "Midtown" },
  { "@type": "Place", name: "Galleria" },
  { "@type": "Place", name: "Sugar Land" },
  { "@type": "Place", name: "Katy" },
  { "@type": "City", name: "The Woodlands" },
  { "@type": "City", name: "Magnolia" },
  { "@type": "City", name: "Tomball" },
  { "@type": "City", name: "Cypress" },
  { "@type": "City", name: "Spring" },
  { "@type": "City", name: "Conroe" },
  { "@type": "Place", name: "Energy Corridor" },
];

const cateringSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.lasahtx.com/catering#service",
      name: "Corporate Catering",
      serviceType: "Multi-Concept Corporate Catering",
      provider: { "@id": "https://www.lasahtx.com/#business" },
      areaServed,
      description:
        "Chef-driven multi-cuisine catering collections for 25\u2013500+ guests in Greater Houston, powered by centralized production, logistics, staffing, and hospitality systems.",
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.lasahtx.com/catering#catalog",
      name: "LASA Hospitality Catering Services",
      provider: { "@id": "https://www.lasahtx.com/#business" },
      itemListElement: [
        {
          "@type": "Offer",
          name: "Multi-Concept Corporate Catering (25\u2013500+ guests)",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 18,
            maxPrice: 32,
            priceCurrency: "USD",
          },
          itemOffered: {
            "@type": "Service",
            name: "Multi-Concept Corporate Catering",
            provider: { "@id": "https://www.lasahtx.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "Boxed Lunch Program",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 14,
            maxPrice: 18,
            priceCurrency: "USD",
          },
          itemOffered: {
            "@type": "Service",
            name: "Boxed Lunch Catering",
            provider: { "@id": "https://www.lasahtx.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "Tray Catering",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Tray Catering",
            provider: { "@id": "https://www.lasahtx.com/#business" },
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.lasahtx.com/catering#page",
      url: "https://www.lasahtx.com/catering",
      about: { "@id": "https://www.lasahtx.com/catering#service" },
      isPartOf: { "@id": "https://www.lasahtx.com/#website" },
    },
  ],
};

export default function CateringPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }}
      />
      <FloatingCTA />
      <Hero />
      <TrustBar />
      <Gallery />
      <Process />
      <MenuSnapshot />
      <Pricing />
      <CaseStudy />
      <ProblemSolution />
      <SocialProof />
      <MidPageCTA />
      <FullInquiryForm />
      <FAQPreview />
      <FinalCTA />
    </main>
  );
}
