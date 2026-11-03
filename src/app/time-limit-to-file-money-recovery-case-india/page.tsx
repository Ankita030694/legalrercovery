import { Metadata } from "next";
import TimeLimitRecoveryClient from "./TimeLimitRecoveryClient";

export const metadata: Metadata = {
  title: "Money Recovery Case Time Limit: 3 Years + Court Timeline",
  description: "The limit to recover money is 3 years, and a written acknowledgment or part payment can restart it. Plus how long a recovery case takes in court.",
  keywords: [
    "time limit to file money recovery case in india",
    "limitation for recovery of money",
    "moneay recovery keliye kitna time lagta hai court me",
    "money recovery case time in court india",
    "limitation act money recovery 3 years",
    "section 18 19 limitation act acknowledgment part payment",
    "order 37 summary suit timeline india",
    "debt recovery limitation period"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/time-limit-to-file-money-recovery-case-india',
  },
  openGraph: {
    title: "Money Recovery Case Time Limit: 3 Years + Court Timeline",
    description: "The limit to recover money is 3 years, and a written acknowledgment or part payment can restart it. Plus how long a recovery case takes in court.",
    url: "https://www.legalrecovery.in/time-limit-to-file-money-recovery-case-india",
    type: "article",
  },
};

export default function TimeLimitRecoveryPage() {
  return <TimeLimitRecoveryClient />;
}
