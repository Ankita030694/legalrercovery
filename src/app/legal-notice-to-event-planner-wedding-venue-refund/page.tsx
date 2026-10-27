import { Metadata } from "next";
import EventPlannerRefundClient from "./EventPlannerRefundClient";

export const metadata: Metadata = {
  title: "Legal Notice to Wedding Venue, Banquet Hall or Event Planner for Advance Booking Refund",
  description: "Banquet hall, resort, or wedding planner refusing to refund your advance booking money citing a 'non-refundable' clause? Serve a Consumer Act Legal Notice to recover your advance + interest.",
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
    title: "Legal Notice to Wedding Venue, Banquet Hall or Event Planner for Advance Booking Refund",
    description: "Challenge unfair 'non-refundable' venue clauses under Section 2(46) of the Consumer Protection Act, 2019 and recover your booking advance.",
    url: "https://www.legalrecovery.in/legal-notice-to-event-planner-wedding-venue-refund",
    type: "article",
  },
};

export default function EventPlannerRefundPage() {
  return <EventPlannerRefundClient />;
}
