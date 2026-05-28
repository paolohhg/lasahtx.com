import type { Metadata } from "next";
import { AboutHero } from "../_about/AboutHero";
import { AboutRoots } from "../_about/AboutRoots";
import { AboutFounder } from "../_about/AboutFounder";
import { AboutHospitality } from "../_about/AboutHospitality";
import { AboutStandard } from "../_about/AboutStandard";

export const metadata: Metadata = {
  title: {
    absolute: "About LASA Hospitality — Built from Hospitality, Designed for Scale",
  },
  description:
    "LASA Hospitality is a Houston-based multi-concept catering and hospitality company built for chef-driven food, scalable systems, and professional execution.",
  keywords: [
    "LASA Hospitality",
    "Houston hospitality company",
    "multi-concept catering Houston",
    "corporate catering Houston",
    "chef-driven catering Houston",
    "Paolo Nucum",
    "Lasa HTX founder",
    "Filipino catering Houston",
  ],
  openGraph: {
    title: "About LASA Hospitality — Built from Hospitality, Designed for Scale",
    description:
      "A Houston-based multi-concept catering and hospitality company built around cultural roots, modular culinary brands, and scalable execution.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LASA Hospitality — Built from Hospitality, Designed for Scale",
    description:
      "Modern hospitality built for Houston: multi-cuisine catering, chef-driven experiences, and scalable food systems.",
  },
  alternates: {
    canonical: "/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.lasahtx.com/#paolo",
      name: "Paolo Nucum",
      jobTitle: "Founder & Culinary Director",
      worksFor: { "@id": "https://www.lasahtx.com/#organization" },
      description:
        "Founder of LASA Hospitality, a Houston-based multi-concept catering and hospitality company built on service standards, cultural roots, and scalable operations.",
      knowsAbout: [
        "Filipino cuisine",
        "Multi-cuisine catering",
        "Catering operations",
        "Hospitality management",
        "Food systems",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.lasahtx.com/about#page",
      url: "https://www.lasahtx.com/about",
      mainEntity: { "@id": "https://www.lasahtx.com/#paolo" },
      about: { "@id": "https://www.lasahtx.com/#business" },
      isPartOf: { "@id": "https://www.lasahtx.com/#website" },
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-primary text-primary-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutHero />
      <AboutRoots />
      <AboutFounder />
      <AboutHospitality />
      <AboutStandard />
    </main>
  );
}
