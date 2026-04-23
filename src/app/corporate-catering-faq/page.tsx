import type { Metadata } from "next";
import { faqSections } from "@/content/corporate-catering-faq";
import { Header } from "../_corporate-catering-faq/Header";
import { FAQList } from "../_corporate-catering-faq/FAQList";
import { BottomCTA } from "../_corporate-catering-faq/BottomCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Houston Corporate Catering FAQ — Lasa HTX",
  },
  description:
    "Corporate catering pricing, minimums, service areas, boxed lunches, tray catering, and recurring lunch programs in Houston and The Woodlands.",
  keywords: [
    "how much does corporate catering cost in houston",
    "minimum order for office catering houston",
    "boxed lunch delivery houston pricing",
    "how far in advance should I book corporate catering",
    "recurring office lunch program houston",
    "what areas does corporate catering deliver to in houston",
    "dietary accommodations corporate catering houston",
    "how to book corporate catering houston",
  ],
  openGraph: {
    title: "Houston Corporate Catering FAQ — Lasa HTX",
    description:
      "Corporate catering pricing, minimums, service areas, and recurring lunch programs in Greater Houston.",
    url: "/corporate-catering-faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston Corporate Catering FAQ — Lasa HTX",
    description:
      "Pricing, minimums, service areas, and recurring lunch programs in Greater Houston.",
  },
  alternates: {
    canonical: "/corporate-catering-faq",
  },
};

const faqSchemaQuestions = faqSections.flatMap((s) =>
  s.questions.map((q) => ({
    "@type": "Question" as const,
    name: q.q,
    acceptedAnswer: { "@type": "Answer" as const, text: q.a },
  }))
);

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://lasahtx.com/corporate-catering-faq#faq",
      url: "https://lasahtx.com/corporate-catering-faq",
      mainEntity: faqSchemaQuestions,
      about: { "@id": "https://lasahtx.com/#business" },
      isPartOf: { "@id": "https://lasahtx.com/#website" },
    },
  ],
};

export default function CorporateCateringFAQPage() {
  return (
    <main className="pt-16 bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <FAQList />
      <BottomCTA />
    </main>
  );
}
