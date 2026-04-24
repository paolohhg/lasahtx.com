import type { Metadata } from "next";
import { mealPrepBowls } from "@/content/meal-prep";
import { siteUrl } from "@/lib/site";
import { Hero } from "../_meal-prep/Hero";
import { OrderDetails } from "../_meal-prep/OrderDetails";
import { BowlGrid } from "../_meal-prep/BowlGrid";

export const metadata: Metadata = {
  title: {
    absolute:
      "Filipino Meal Prep Bowls \u2014 Houston Area Pickup | Lasa HTX",
  },
  description:
    "Chef-driven Filipino meal prep bowls \u2014 prepared fresh weekly. Pickup only at The Deck Food Park in Magnolia, TX. 4-bowl minimum. Customize protein and add-ons in cart.",
  keywords: [
    "Filipino meal prep Houston",
    "Filipino meal prep Magnolia",
    "weekly meal prep pickup Houston",
    "Asian meal prep The Woodlands",
    "sinigang bowl",
    "adobo bowl",
    "lechon kawali",
  ],
  openGraph: {
    title: "Filipino Meal Prep Bowls \u2014 Lasa HTX",
    description:
      "Fresh weekly pickup at The Deck Food Park, Magnolia. Customize protein and add-ons. 4-bowl minimum.",
    url: "/meal-prep",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Filipino Meal Prep Bowls \u2014 Lasa HTX",
    description: "Fresh weekly. Pickup in Magnolia. 4-bowl minimum.",
  },
  alternates: {
    canonical: "/meal-prep",
  },
};

const mealPrepSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...mealPrepBowls.map((b) => ({
      "@type": "Product",
      "@id": `https://lasahtx.com/meal-prep#${b.id}`,
      name: b.title,
      description: b.description,
      image: b.image ? `${siteUrl}${b.image}` : undefined,
      brand: { "@id": "https://lasahtx.com/#business" },
      category: "Meal Prep / Filipino",
      offers: b.variants.map((v) => ({
        "@type": "Offer",
        name: `${b.title} \u2014 ${v.label}`,
        price: v.priceUSD.toFixed(2),
        priceCurrency: "USD",
        availability:
          v.available === false
            ? "https://schema.org/OutOfStock"
            : "https://schema.org/InStock",
        seller: { "@id": "https://lasahtx.com/#business" },
        url: "https://lasahtx.com/meal-prep",
      })),
    })),
    {
      "@type": "ItemList",
      "@id": "https://lasahtx.com/meal-prep#list",
      name: "LASA HTX Meal Prep Bowls",
      numberOfItems: mealPrepBowls.length,
      itemListElement: mealPrepBowls.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@id": `https://lasahtx.com/meal-prep#${b.id}` },
      })),
    },
    {
      "@type": "WebPage",
      "@id": "https://lasahtx.com/meal-prep#page",
      url: "https://lasahtx.com/meal-prep",
      mainEntity: { "@id": "https://lasahtx.com/meal-prep#list" },
      isPartOf: { "@id": "https://lasahtx.com/#website" },
    },
  ],
};

export default function MealPrepPage() {
  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mealPrepSchema) }}
      />
      <Hero />
      <OrderDetails />
      <BowlGrid />
    </main>
  );
}
