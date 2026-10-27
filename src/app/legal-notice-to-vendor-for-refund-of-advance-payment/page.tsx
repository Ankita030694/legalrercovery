import { Metadata } from "next";
import VendorAdvanceRefundNoticeClient from "./VendorAdvanceRefundNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to Vendor for Refund of Advance Payment (15-Day Format & Sec 73)",
  description: "Vendor, supplier, or contractor not returning your advance payment after cancelling or delaying delivery? Serve an Advocate Legal Notice under Sec 73 Contract Act for 100% refund + 18% interest.",
  keywords: [
    "legal notice to vendor for refund of advance payment",
    "legal notice to vendor for refund of advance",
    "vendor not returning advance money legal action",
    "photographer failed to deliver refund",
    "recovering advance paid to contractor",
    "refund of advance payment contract breach"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-vendor-for-refund-of-advance-payment',
  },
  openGraph: {
    title: "Legal Notice to Vendor for Refund of Advance Payment (15-Day Format & Sec 73)",
    description: "Recover advance money from defaulting vendors, suppliers, or contractors via an Advocate Legal Notice under Section 73 of the Indian Contract Act.",
    url: "https://www.legalrecovery.in/legal-notice-to-vendor-for-refund-of-advance-payment",
    type: "article",
  },
};

export default function VendorAdvanceRefundPage() {
  return <VendorAdvanceRefundNoticeClient />;
}
