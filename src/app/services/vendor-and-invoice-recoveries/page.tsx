import { Metadata } from "next";
import VendorInvoiceClient from "./VendorInvoiceClient";

export const metadata: Metadata = {
  title: "Recover Stuck B2B Invoices & Vendor Payments Legally in India | LegalRecovery",
  description: "Exhaustive legal guide on recovering unpaid B2B supplier invoices, raw material costs, supply chain credits, and distributor dues in India. Learn about MSME Samadhaan, Section 15 MSMED Act, and CPC Order 37 summary suits.",
  openGraph: {
    title: "Recover Stuck B2B Invoices & Vendor Payments Legally in India | LegalRecovery",
    description: "Exhaustive legal guide on recovering unpaid B2B supplier invoices, raw material costs, supply chain credits, and distributor dues in India. Learn about MSME Samadhaan, Section 15 MSMED Act, and CPC Order 37 summary suits.",
    type: "article",
    url: "/services/vendor-and-invoice-recoveries",
    images: [
      {
        url: "/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "B2B Vendor and Invoice Recovery India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Stuck B2B Invoices & Vendor Payments Legally in India | LegalRecovery",
    description: "Exhaustive legal guide on recovering unpaid B2B supplier invoices, raw material costs, supply chain credits, and distributor dues in India.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function VendorInvoicePage() {
  return <VendorInvoiceClient />;
}
