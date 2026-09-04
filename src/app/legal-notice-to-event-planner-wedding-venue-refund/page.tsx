import { Metadata } from "next";
import EventPlannerRefundClient from "./EventPlannerRefundClient";

export const metadata: Metadata = {
  title: "Legal Notice to Event Planner for Venue Booking Refund",
  description: "Recover advance payments from event planners, decorators, or banquet halls in India. Learn how to serve a legal notice for venue cancellation refunds.",
  keywords: [
    "wedding venue booking refund law india",
    "legal notice to event planner refund",
    "banquet hall booking cancellation refund",
    "recover money from defaulting wedding decorator"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-event-planner-wedding-venue-refund",
  },
};

export default function EventPlannerRefundPage() {
  return <EventPlannerRefundClient />;
}
