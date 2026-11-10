import { Metadata } from "next";
import GymMembershipRefundClient from "./GymMembershipRefundClient";

export const metadata: Metadata = {
  title: "Gym Membership Refund Not Received? Recover Money",
  description: "Gym refusing to refund your membership fee? Get expert legal assistance to recover pro-rata refunds and fight unfair terms under consumer law.",
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
  openGraph: {
    title: "Gym Membership Refund Not Received? Recover Money",
    description: "Gym refusing to refund your membership fee? Get expert legal assistance to recover pro-rata refunds and fight unfair terms under consumer law.",
    url: "https://www.legalrecovery.in/recovery/gym-membership-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Gym Membership Refund Not Received? Recover Money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Membership Refund Not Received? Recover Money",
    description: "Gym refusing to refund your membership fee? Get expert legal assistance to recover pro-rata refunds and fight unfair terms under consumer law.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function GymMembershipRefundPage() {
  return <GymMembershipRefundClient />;
}
