import { Metadata } from "next";
import EventRefundClient from "./EventRefundClient";

export const metadata: Metadata = {
  title: "Cancelled Event Refund: Recover Ticket & Booking Money",
  description: "Event or concert cancelled and organizer refusing refund? Know your rights under the Consumer Protection Act and legally recover your money.",
  keywords: [
    "event cancellation refund India",
    "concert ticket refund legal notice",
    "BookMyShow refund consumer court",
    "Paytm Insider event cancelled refund",
    "Section 65 Contract Act event cancellation",
    "force majeure ticket refund law India",
    "wedding venue cancellation refund India",
    "corporate event refund dispute",
    "unfair trade practice ticket refund",
    "consumer forum ticket refund claim"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/event-cancellation-refund',
  },
  openGraph: {
    title: "Cancelled Event Refund: Recover Ticket & Booking Money",
    description: "Event or concert cancelled and organizer refusing refund? Know your rights under the Consumer Protection Act and legally recover your money.",
    url: "https://www.legalrecovery.in/recovery/event-cancellation-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Cancelled Event Refund: Recover Ticket & Booking Money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancelled Event Refund: Recover Ticket & Booking Money",
    description: "Event or concert cancelled and organizer refusing refund? Know your rights under the Consumer Protection Act and legally recover your money.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function EventCancellationRefundPage() {
  return <EventRefundClient />;
}
