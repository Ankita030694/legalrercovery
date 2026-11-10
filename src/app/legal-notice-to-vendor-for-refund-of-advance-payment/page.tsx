import { Metadata } from "next";
import VendorAdvanceRefundNoticeClient from "./VendorAdvanceRefundNoticeClient";

export const metadata: Metadata = {
  title: "Vendor Not Returning Advance Payment? How to Recover It",
  description: "Supplier or contractor kept your advance after cancelling or not delivering? Your rights under the Contract Act, a notice format and recovery steps.",
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
    title: "Vendor Not Returning Advance Payment? How to Recover It",
    description: "Supplier or contractor kept your advance after cancelling or not delivering? Your rights under the Contract Act, a notice format and recovery steps.",
    url: "https://www.legalrecovery.in/legal-notice-to-vendor-for-refund-of-advance-payment",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Vendor Not Returning Advance Payment? How to Recover It",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendor Not Returning Advance Payment? How to Recover It",
    description:
      "Supplier or contractor kept your advance after cancelling or not delivering? Your rights under the Contract Act, a notice format and recovery steps.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function VendorAdvanceRefundPage() {
  return <VendorAdvanceRefundNoticeClient />;
}
