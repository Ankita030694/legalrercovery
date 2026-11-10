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
};

export default function EventCancellationRefundPage() {
  return <EventRefundClient />;
}
