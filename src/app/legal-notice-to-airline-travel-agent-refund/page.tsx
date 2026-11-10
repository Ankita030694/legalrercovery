import { Metadata } from "next";
import AirlineRefundNoticeClient from "./AirlineRefundNoticeClient";

export const metadata: Metadata = {
  title: "Flight Ticket Refund Legal Notice to Airline & Travel Portal",
  description: "Learn DGCA flight cancellation refund rules and draft a joint legal notice to recover ticket refunds from travel agents and airlines in India.",
  keywords: [
    "legal notice to airline for flight refund",
    "dgca flight cancellation refund rules",
    "how to recover ticket refund from travel agent",
    "airline delay compensation india"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-airline-travel-agent-refund',
  },
  openGraph: {
    title: "Flight Ticket Refund Legal Notice to Airline & Travel Portal",
    description: "Learn DGCA flight cancellation refund rules and draft a joint legal notice to recover ticket refunds from travel agents and airlines in India.",
    url: "https://www.legalrecovery.in/legal-notice-to-airline-travel-agent-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Flight Ticket Refund Legal Notice to Airline & Travel Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flight Ticket Refund Legal Notice to Airline & Travel Portal",
    description: "Learn DGCA flight cancellation refund rules and draft a joint legal notice to recover ticket refunds from travel agents and airlines in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function AirlineRefundNoticePage() {
  return <AirlineRefundNoticeClient />;
}
