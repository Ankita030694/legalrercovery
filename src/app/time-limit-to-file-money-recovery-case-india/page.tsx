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
    languages: {
      'en-IN': 'https://www.legalrecovery.in/time-limit-to-file-money-recovery-case-india',
      'hi-IN': 'https://www.legalrecovery.in/hi/money-recovery-case-kitna-time-lagta-hai',
      'x-default': 'https://www.legalrecovery.in/time-limit-to-file-money-recovery-case-india',
    },
  },
  openGraph: {
    title: "Money Recovery Case Time Limit: 3 Years + Court Timeline",
    description: "The limit to recover money is 3 years, and a written acknowledgment or part payment can restart it. Plus how long a recovery case takes in court.",
    url: "https://www.legalrecovery.in/time-limit-to-file-money-recovery-case-india",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Money Recovery Case Time Limit: 3 Years + Court Timeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Recovery Case Time Limit: 3 Years + Court Timeline",
    description:
      "The limit to recover money is 3 years, and a written acknowledgment or part payment can restart it. Plus how long a recovery case takes in court.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function TimeLimitRecoveryPage() {
  return <TimeLimitRecoveryClient />;
}
