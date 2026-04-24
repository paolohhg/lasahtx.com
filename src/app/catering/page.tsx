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
import { Founder } from "../_catering/Founder";
import { MidPageCTA } from "../_catering/MidPageCTA";
import { FullInquiryForm } from "../_catering/FullInquiryForm";
import { FAQPreview } from "../_catering/FAQPreview";
import { FinalCTA } from "../_catering/FinalCTA";
import { FloatingCTA } from "../_catering/FloatingCTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Houston Corporate Catering for 25\u2013500+ Guests \u2014 Lasa HTX",
  },
  description:
    "Chef-led Filipino-rooted Asian catering for corporate teams across Greater Houston. Licensed, insured, structured for scale. Quote within 24 hours.",
  keywords: [
    "corporate catering Houston",
    "office catering Houston",
    "conference catering Houston",
    "wedding catering Houston",
    "Filipino catering Houston",
    "Asian catering Houston",
    "catering The Woodlands",
    "catering Energy Corridor",
  ],
  openGraph: {
    title: "Houston Corporate Catering \u2014 Lasa HTX",
    description:
      "Chef-led Filipino-rooted Asian catering for 25\u2013500+ guests. Quote within 24 hours.",
    url: "/catering",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston Corporate Catering \u2014 Lasa HTX",
    description: "25\u2013500+ guests. Quote within 24 hours.",
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
      "@id": "https://lasahtx.com/catering#service",
      name: "Corporate Catering",
      serviceType: "Corporate Catering",
      provider: { "@id": "https://lasahtx.com/#business" },
      areaServed,
      description:
        "Chef-led Filipino-rooted modern Asian catering for 25\u2013500+ guests in Greater Houston. Licensed, insured, and built on structured high-volume systems.",
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://lasahtx.com/catering#catalog",
      name: "LASA HTX Catering Services",
      provider: { "@id": "https://lasahtx.com/#business" },
      itemListElement: [
        {
          "@type": "Offer",
          name: "Corporate Catering (25\u2013500+ guests)",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 18,
            maxPrice: 32,
            priceCurrency: "USD",
          },
          itemOffered: {
            "@type": "Service",
            name: "Corporate Catering",
            provider: { "@id": "https://lasahtx.com/#business" },
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
            provider: { "@id": "https://lasahtx.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "Tray Catering",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Tray Catering",
            provider: { "@id": "https://lasahtx.com/#business" },
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://lasahtx.com/catering#page",
      url: "https://lasahtx.com/catering",
      about: { "@id": "https://lasahtx.com/catering#service" },
      isPartOf: { "@id": "https://lasahtx.com/#website" },
    },
  ],
};

export default function CateringPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
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
      <Founder />
      <MidPageCTA />
      <FullInquiryForm />
      <FAQPreview />
      <FinalCTA />
    </main>
  );
}
