import { Metadata } from "next";
import GymRefundNoticeClient from "./GymRefundNoticeClient";

export const metadata: Metadata = {
  title: "Refund of Gym Membership: Legal Notice & Consumer Action",
  description: "Learn how to get a refund for your gym membership or online subscription in India. Draft a legal notice to challenge unfair no-refund policies.",
  keywords: [
    "gym membership refund legal notice",
    "how to cancel gym contract refund",
    "subscription refund consumer court india",
    "refund of annual gym fees"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-gym-subscription-fee-refund',
  },
};

export default function GymRefundPage() {
  return <GymRefundNoticeClient />;
}
