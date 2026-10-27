import { Metadata } from "next";
import TimeLimitRecoveryClient from "./TimeLimitRecoveryClient";

export const metadata: Metadata = {
  title: "Time Limit to File Money Recovery Case in India (3-Year Rule & Court Timeline)",
  description: "Money recovery ke liye court me kitna time lagta hai? Learn the 3-year Limitation Act filing rule, how UPI/WhatsApp restarts the clock & 15-day Legal Notice vs Order 37 court timelines.",
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
    title: "Time Limit to File Money Recovery Case in India (3-Year Rule & Court Timeline)",
    description: "Learn the 3-year statutory limitation period for money recovery suits in India, how WhatsApp/UPI restarts the clock, and 15-day Notice vs Order 37 court timelines.",
    url: "https://www.legalrecovery.in/time-limit-to-file-money-recovery-case-india",
    type: "article",
  },
};

export default function TimeLimitRecoveryPage() {
  return <TimeLimitRecoveryClient />;
}
