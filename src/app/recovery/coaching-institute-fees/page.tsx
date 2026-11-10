import { Metadata } from "next";
import CoachingInstituteFeesClient from "./CoachingInstituteFeesClient";

export const metadata: Metadata = {
  title: "Coaching Institute Fee Refund: CCPA Rules & Notice",
  description: "Coaching institute or EdTech refusing fee refund? Enforce CCPA guidelines for mandatory pro-rata tuition and hostel refunds via a legal notice.",
  keywords: [
    "coaching institute fee refund India",
    "CCPA guidelines coaching sector refund 2024",
    "pro rata coaching fee refund rule",
    "coaching centre refund consumer court",
    "IIT JEE NEET coaching fee recovery",
    "edtech course cancellation refund India",
    "coaching fee recovery legal notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/coaching-institute-fees',
  },
  openGraph: {
    title: "Coaching Institute Fee Refund: CCPA Rules & Notice",
    description: "IIT-JEE, NEET, UPSC coaching center or EdTech refusing fee refund mid-course? Enforce CCPA 2024 Pro-Rata Refund Guidelines via Legal Notice.",
    url: "https://www.legalrecovery.in/recovery/coaching-institute-fees",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Coaching Institute Fee Refund: CCPA Rules & Notice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Institute Fee Refund: CCPA Rules & Notice",
    description: "IIT-JEE, NEET, UPSC coaching center or EdTech refusing fee refund mid-course? Enforce CCPA 2024 Pro-Rata Refund Guidelines via Legal Notice.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function CoachingInstituteFeesPage() {
  return <CoachingInstituteFeesClient />;
}
