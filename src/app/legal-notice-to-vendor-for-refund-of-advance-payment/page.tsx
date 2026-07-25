import { Metadata } from "next";
import VendorAdvanceRefundNoticeClient from "./VendorAdvanceRefundNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to Vendor for Refund of Advance Payment",
  description: "Learn how to recover advance payments paid to defaulting vendors. Draft a legal notice for refund of advance due to breach of contract in India.",
  keywords: [
    "legal notice to vendor for refund of advance",
    "photographer failed to deliver refund",
    "recovering advance paid to contractor",
    "refund of advance payment contract breach"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-vendor-for-refund-of-advance-payment',
  },
};

export default function VendorAdvanceRefundPage() {
  return <VendorAdvanceRefundNoticeClient />;
}
