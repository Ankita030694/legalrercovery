import { Metadata } from "next";
import GymRefundNoticeClient from "./GymRefundNoticeClient";

export const metadata: Metadata = {
  title: "Gym Refusing Membership Refund? Cancel & Get Money Back",
  description: "Can you cancel a 12-month gym contract and get a refund? When a 'no refund' clause is unfair under consumer law and how to claim your fee back.",
  keywords: [
    "gym membership refund legal notice",
    "how to cancel gym contract refund india",
    "subscription refund consumer court india",
    "refund of annual gym fees unfair contract",
    "gym no refund policy illegal consumer protection act",
    "fitness club membership cancellation refund"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-gym-subscription-fee-refund',
  },
  openGraph: {
    title: "Gym Refusing Membership Refund? Cancel & Get Money Back",
    description: "Can you cancel a 12-month gym contract and get a refund? When a 'no refund' clause is unfair under consumer law and how to claim your fee back.",
    url: "https://www.legalrecovery.in/legal-notice-to-gym-subscription-fee-refund",
    type: "article",
  },
};

export default function GymRefundPage() {
  return <GymRefundNoticeClient />;
}
