import type { Metadata } from "next";
import { AboutHero } from "../_about/AboutHero";
import { AboutRoots } from "../_about/AboutRoots";
import { AboutFounder } from "../_about/AboutFounder";
import { AboutHospitality } from "../_about/AboutHospitality";
import { AboutStandard } from "../_about/AboutStandard";

export const metadata: Metadata = {
  title: {
    absolute: "About Lasa HTX — Paolo Nucum, Founder & Culinary Director",
  },
  description:
    "Founded by Paolo Nucum — 30+ years in high-volume hospitality across New York, Las Vegas, and Houston. Filipino-rooted modern Asian catering built on structure, discipline, and guest experience.",
  keywords: [
    "Paolo Nucum",
    "Lasa HTX founder",
    "Filipino chef Houston",
    "Houston catering chef",
    "Modern Asian catering Houston",
  ],
  openGraph: {
    title: "About Lasa HTX — Paolo Nucum, Founder & Culinary Director",
    description:
      "Filipino-rooted modern Asian catering, built on 30+ years of hospitality experience.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lasa HTX — Paolo Nucum, Founder & Culinary Director",
    description:
      "Filipino-rooted modern Asian catering, built on 30+ years of hospitality experience.",
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
      "@id": "https://lasahtx.com/#paolo",
      name: "Paolo Nucum",
      jobTitle: "Founder & Culinary Director",
      worksFor: { "@id": "https://lasahtx.com/#organization" },
      description:
        "30+ years in high-volume hospitality across New York, Las Vegas, and Houston. Filipino-rooted, culinarily diverse, service-obsessed.",
      knowsAbout: [
        "Filipino cuisine",
        "Modern Asian cuisine",
        "Catering operations",
        "Hospitality management",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://lasahtx.com/about#page",
      url: "https://lasahtx.com/about",
      mainEntity: { "@id": "https://lasahtx.com/#paolo" },
      about: { "@id": "https://lasahtx.com/#business" },
      isPartOf: { "@id": "https://lasahtx.com/#website" },
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-primary text-primary-foreground">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
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
