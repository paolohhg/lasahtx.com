import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * Allow all crawlers in production only. Preview and dev deploys are blocked
 * so they can't accidentally get indexed.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
