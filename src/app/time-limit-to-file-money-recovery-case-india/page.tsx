import { Metadata } from "next";
import TimeLimitRecoveryClient from "./TimeLimitRecoveryClient";

export const metadata: Metadata = {
  title: "Time Limit to File Money Recovery Case in India (Limitation)",
  description: "Learn the exact 3-year statutory time limit to file a money recovery case in India under the Limitation Act and how you can legally restart the clock.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "limitation act money recovery",
    "time limit to file recovery suit",
    "civil suit time limit india",
    "debt recovery limitation period"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/time-limit-to-file-money-recovery-case-india',
  },
};

export default function TimeLimitRecoveryPage() {
  return <TimeLimitRecoveryClient />;
}
