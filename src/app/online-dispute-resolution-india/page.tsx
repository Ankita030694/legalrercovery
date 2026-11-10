import { Metadata } from "next";
import OnlineDisputeResolutionClient from "./OnlineDisputeResolutionClient";

export const metadata: Metadata = {
  title: "Online Dispute Resolution in India: Money Recovery",
  description: "Discover how Online Dispute Resolution (ODR) in India provides a legal, fast alternative to traditional courts for personal and commercial money recovery.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "online dispute resolution",
    "ODR in India",
    "e-arbitration India",
    "e-mediation recovery",
    "digital court resolution"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/online-dispute-resolution-india',
  },
  openGraph: {
    title: "Online Dispute Resolution in India: Money Recovery",
    description: "Discover how Online Dispute Resolution (ODR) in India provides a legal, fast alternative to traditional courts for personal and commercial money recovery.",
    url: "https://www.legalrecovery.in/online-dispute-resolution-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Online Dispute Resolution in India: Money Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Dispute Resolution in India: Money Recovery",
    description: "Discover how Online Dispute Resolution (ODR) in India provides a legal, fast alternative to traditional courts for personal and commercial money recovery.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function OnlineDisputeResolutionPage() {
  return <OnlineDisputeResolutionClient />;
}
