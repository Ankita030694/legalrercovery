import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const DISALLOW = [
  "/authority/",
  "/nullify/",
  "/user/",
  "/payu/",
  "/wa/",
  // Next.js link-prefetch payloads (text/x-component, not pages). Google's renderer requests one
  // for every <Link> it sees; in Nov 2026 they were 41% of all crawl requests against 13% for
  // HTML. The server-rendered HTML is complete without them, so blocking changes nothing on-page.
  "/*?_rsc=",
  "/*&_rsc=",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
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
        disallow: DISALLOW,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
