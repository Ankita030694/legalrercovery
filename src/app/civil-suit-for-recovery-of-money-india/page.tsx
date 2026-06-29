import { Metadata } from "next";
import CivilSuitRecoveryClient from "./CivilSuitRecoveryClient";

export const metadata: Metadata = {
  title: "Civil Suit for Recovery of Money in India under Order 37",
  description: "Learn how to file a civil suit for recovery of money under Order 37 of the CPC in India. A strategic guide to securing summary decrees swiftly.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "civil suit for recovery of money india",
    "order 37 cpc",
    "summary suit india",
    "money recovery lawyer"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/civil-suit-for-recovery-of-money-india',
  },
};

export default function CivilSuitRecoveryPage() {
  return <CivilSuitRecoveryClient />;
}
