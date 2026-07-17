import { Metadata } from "next";
import CoachingCollegeRefundClient from "./CoachingCollegeRefundClient";

export const metadata: Metadata = {
  title: "Fee Refund Legal Notice to Coaching Institute & Private College | Recovery",
  description: "Many educational centers claim that fees are entirely non-refundable. Learn how to recover tuition and college admission fees using CCPA and UGC guidelines.",
  keywords: [
    "coaching institute fee refund legal notice",
    "how to recover college admission fees",
    "ccpa guidelines coaching center refund",
    "legal notice to college for fee refund"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-coaching-institute-college-fee-refund',
  },
};

export default function CoachingCollegeRefundPage() {
  return <CoachingCollegeRefundClient />;
}
