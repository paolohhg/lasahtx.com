import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteUrl } from "@/lib/site";
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
  "Filipino-rooted modern Asian catering, pop-ups, and chef-driven meal prep. Built for Houston. Inspired by Asia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lasa HTX — Modern Asian Hospitality for Houston",
    template: "%s — Lasa HTX",
  },
  description,
  keywords: [
    "Filipino catering Houston",
    "Asian catering Houston",
    "corporate catering Houston",
    "meal prep Houston",
    "catering Montrose",
    "catering Heights",
    "catering Galleria",
    "catering The Woodlands",
    "Filipino food Houston",
    "pop-up dinner Houston",
  ],
  authors: [{ name: "Paolo Nucum" }],
  creator: "Lasa HTX",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lasa HTX",
    title: "Lasa HTX — Modern Asian Hospitality for Houston",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lasa HTX — Modern Asian Hospitality for Houston",
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
      "@id": "https://lasahtx.com/#organization",
      name: "LASA HTX",
      url: "https://lasahtx.com/",
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
      "@id": "https://lasahtx.com/#business",
      name: "LASA HTX",
      url: "https://lasahtx.com/",
      servesCuisine: ["Filipino", "Modern Asian", "Asian Fusion"],
      priceRange: "$$",
      telephone: "+1-832-510-8440",
      email: "catering@lasahtx.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Magnolia",
        addressRegion: "TX",
        addressCountry: "US",
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
      parentOrganization: { "@id": "https://lasahtx.com/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://lasahtx.com/#website",
      url: "https://lasahtx.com/",
      name: "LASA HTX",
      publisher: { "@id": "https://lasahtx.com/#organization" },
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
          // eslint-disable-next-line react/no-danger
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
