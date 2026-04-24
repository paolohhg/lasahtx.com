import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * Only `/` exists in session 1. As pages land in later sessions — /catering,
 * /about, /pop-ups, /meal-prep, /corporate-catering-faq — add them here.
 * Per-entry pop-ups and meal-prep bowls will later read from the content
 * modules under `src/content/`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/catering`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/corporate-catering-faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
