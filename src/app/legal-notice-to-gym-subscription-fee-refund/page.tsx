import { Metadata } from "next";
import GymRefundNoticeClient from "./GymRefundNoticeClient";

export const metadata: Metadata = {
  title: "Gym or Fitness Club Refusing Membership Refund? Legal Notice & Consumer Complaint",
  description: "Gym refusing to refund annual membership fees citing a 'No Refund Policy' after injury, relocation, or poor service? Challenge unfair contracts under Consumer Protection Act 2019 via Legal Notice.",
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
    title: "Gym or Fitness Club Refusing Membership Refund? Legal Notice & Consumer Complaint",
    description: "Gym refusing to refund annual membership fees citing a 'No Refund Policy'? Challenge unfair contracts under Consumer Protection Act 2019 via Legal Notice.",
    url: "https://www.legalrecovery.in/legal-notice-to-gym-subscription-fee-refund",
    type: "article",
  },
};

export default function GymRefundPage() {
  return <GymRefundNoticeClient />;
}
