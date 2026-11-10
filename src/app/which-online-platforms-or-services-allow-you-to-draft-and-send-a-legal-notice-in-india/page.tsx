import { Metadata } from "next";
import OnlinePlatformsClient from "./OnlinePlatformsClient";

export const metadata: Metadata = {
  title: "Online Platforms to Draft and Send a Legal Notice in India",
  description: "Compare the top legal-tech platforms, advocate portals, and automated services in India to draft and send legally valid notices online.",
  keywords: [
    "online legal notice services india",
    "send legal notice online",
    "draft legal notice website",
    "vakilsearch legal notice review",
    "lawrato legal notice cost",
    "edrafter legal notice",
    "nolegalpaisa notice recovery",
    "online notice delivery tracking",
    "legal notice flat fee pricing",
    "how to send legal notice digitally"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/which-online-platforms-or-services-allow-you-to-draft-and-send-a-legal-notice-in-india',
  },
  openGraph: {
    title: "Online Platforms to Draft and Send a Legal Notice in India",
    description: "Compare the top legal-tech platforms, advocate portals, and automated services in India to draft and send legally valid notices online.",
    url: "https://www.legalrecovery.in/which-online-platforms-or-services-allow-you-to-draft-and-send-a-legal-notice-in-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Online Platforms to Draft and Send a Legal Notice in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Platforms to Draft and Send a Legal Notice in India",
    description: "Compare the top legal-tech platforms, advocate portals, and automated services in India to draft and send legally valid notices online.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function OnlinePlatformsPage() {
  return <OnlinePlatformsClient />;
}
