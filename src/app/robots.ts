import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/authority/",
          "/nullify/",
          "/user/",
          "/payu/",
          "/payment-success",
          "/payment-failure",
          "/payment-cancelled",
        ],
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: [
          "/authority/",
          "/nullify/",
          "/user/",
          "/payu/",
          "/payment-success",
          "/payment-failure",
          "/payment-cancelled",
        ],
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
