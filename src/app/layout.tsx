import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";
import { pickupLocation, siteUrl } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

const description =
  "LASA Hospitality is a Houston-based multi-concept catering and hospitality platform built for corporate catering, chef-driven experiences, and scalable food systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LASA Hospitality — Modern Hospitality Built for Houston",
    template: "%s — LASA Hospitality",
  },
  description,
  keywords: [
    "LASA Hospitality",
    "multi concept catering Houston",
    "corporate catering Houston",
    "office catering Houston",
    "executive lunch catering Houston",
    "boxed lunch catering Houston",
    "event catering Houston",
    "hospitality experiences Houston",
    "Mediterranean catering Houston",
    "Italian catering Houston",
    "Asian catering Houston",
    "Latin catering Houston",
    "Southern catering Houston",
    "Filipino catering Houston",
    "catering The Woodlands",
    "catering Energy Corridor",
  ],
  authors: [{ name: "Paolo Nucum" }],
  creator: "LASA Hospitality",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LASA Hospitality",
    title: "LASA Hospitality — Modern Hospitality Built for Houston",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "LASA Hospitality — Modern Hospitality Built for Houston",
    description,
  },
  alternates: {
    canonical: "/",
  },
};

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.lasahtx.com/#organization",
      name: "LASA Hospitality",
      alternateName: "LASA HTX",
      url: "https://www.lasahtx.com/",
      sameAs: [
        "https://www.instagram.com/lasahtx",
        "https://www.tiktok.com/@lasahtx",
      ],
      founder: { "@type": "Person", name: "Paolo Nucum" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "catering",
          telephone: "+1-832-510-8440",
          email: "catering@lasahtx.com",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": ["Restaurant", "Caterer"],
      "@id": "https://www.lasahtx.com/#business",
      name: "LASA Hospitality",
      url: "https://www.lasahtx.com/",
      servesCuisine: [
        "Mediterranean",
        "Italian-American",
        "Modern Asian",
        "Texas-Latin",
        "Southern",
        "Filipino",
        "Dessert",
        "Meal Prep",
      ],
      priceRange: "$$",
      telephone: "+1-832-510-8440",
      email: "catering@lasahtx.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: pickupLocation.streetAddress,
        addressLocality: pickupLocation.addressLocality,
        addressRegion: pickupLocation.addressRegion,
        postalCode: pickupLocation.postalCode,
        addressCountry: pickupLocation.addressCountry,
      },
      areaServed: [
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
      ],
      parentOrganization: { "@id": "https://www.lasahtx.com/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.lasahtx.com/#website",
      url: "https://www.lasahtx.com/",
      name: "LASA Hospitality",
      publisher: { "@id": "https://www.lasahtx.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", inter.variable, bebasNeue.variable)}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        <TooltipProvider>
          <Navbar />
          {children}
          <Footer />
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
