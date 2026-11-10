import { Metadata } from "next";
import EventPlannerRefundClient from "./EventPlannerRefundClient";

export const metadata: Metadata = {
  title: "Legal Notice to Wedding Venue & Planner for Refund",
  description: "Wedding venue or event planner refusing advance refund citing non-refundable clause? Send a Consumer Protection Act legal notice to recover dues.",
  keywords: [
    "wedding venue booking refund law india",
    "legal notice to event planner refund",
    "banquet hall booking cancellation refund",
    "recover money from defaulting wedding decorator",
    "non refundable advance banquet hall consumer court"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-event-planner-wedding-venue-refund",
  },
  openGraph: {
    title: "Legal Notice to Wedding Venue & Planner for Refund",
    description: "Challenge unfair 'non-refundable' venue clauses under Section 2(46) of the Consumer Protection Act, 2019 and recover your booking advance.",
    url: "https://www.legalrecovery.in/legal-notice-to-event-planner-wedding-venue-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice to Wedding Venue & Planner for Refund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice to Wedding Venue & Planner for Refund",
    description: "Challenge unfair 'non-refundable' venue clauses under Section 2(46) of the Consumer Protection Act, 2019 and recover your booking advance.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function EventPlannerRefundPage() {
  return <EventPlannerRefundClient />;
}
