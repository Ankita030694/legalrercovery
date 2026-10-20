import { Metadata } from "next";
import CoachingInstituteFeesClient from "./CoachingInstituteFeesClient";

export const metadata: Metadata = {
  title: "Coaching Institute Fee Refund in India: CCPA 2024 Pro-Rata Rule & Legal Notice",
  description: "IIT-JEE, NEET, UPSC coaching center or EdTech refusing fee refund mid-course? Enforce CCPA 2024 Coaching Guidelines for mandatory pro-rata tuition & hostel refund via Legal Notice.",
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
    title: "Coaching Institute Fee Refund in India: CCPA 2024 Pro-Rata Rule & Legal Notice",
    description: "IIT-JEE, NEET, UPSC coaching center or EdTech refusing fee refund mid-course? Enforce CCPA 2024 Pro-Rata Refund Guidelines via Legal Notice.",
    url: "https://www.legalrecovery.in/recovery/coaching-institute-fees",
    type: "article",
  },
};

export default function CoachingInstituteFeesPage() {
  return <CoachingInstituteFeesClient />;
}
