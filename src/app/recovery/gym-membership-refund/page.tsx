import { Metadata } from "next";
import GymMembershipRefundClient from "./GymMembershipRefundClient";

export const metadata: Metadata = {
  title: "Gym Membership Refund Not Received? Recover Your Money | LegalRecovery",
  description: "Gym refusing to refund your membership fee? LegalRecovery provides expert legal-tech assistance to recover pro-rata refunds, fight unfair no-refund clauses, and hold fitness centres accountable under consumer law.",
  keywords: [
    "gym membership refund India",
    "fitness centre refund consumer court",
    "gym not refunding money",
    "cancel gym membership get refund",
    "gym closed no refund",
    "consumer complaint gym membership",
    "unfair gym contract India",
    "gym auto debit refund",
    "fitness membership cancellation rights",
    "gym membership recovery legal notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/gym-membership-refund',
  },
};

export default function GymMembershipRefundPage() {
  return <GymMembershipRefundClient />;
}
