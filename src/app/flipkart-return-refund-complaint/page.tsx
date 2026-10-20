import { Metadata } from "next";
import FlipkartRefundComplaintClient from "./FlipkartRefundComplaintClient";

export const metadata: Metadata = {
  title: "Flipkart Return Rejected or Refund Delayed? Grievance Officer, NCH & Legal Notice",
  description: "Flipkart return rejected, item not picked up, or refund stuck after pickup? Escalate to Flipkart Grievance Officer, NCH 1915, e-Jagriti & serve an Advocate Legal Notice for 100% refund.",
  keywords: [
    "flipkart return rejected legal remedy",
    "flipkart not returning my product",
    "flipkart return issue complaint",
    "flipkart refund delay complaint",
    "legal notice to flipkart for refund",
    "flipkart product picked up but refund not received",
    "consumer court complaint against flipkart",
    "flipkart grievance officer email refund"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/flipkart-return-refund-complaint",
  },
  openGraph: {
    title: "Flipkart Return Rejected or Refund Delayed? Grievance Officer, NCH & Legal Notice",
    description: "Flipkart return rejected, item not picked up, or refund stuck after pickup? Escalate to Flipkart Grievance Officer, NCH 1915, e-Jagriti & serve an Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/flipkart-return-refund-complaint",
    type: "article",
  },
};

export default function FlipkartRefundComplaintPage() {
  return <FlipkartRefundComplaintClient />;
}
