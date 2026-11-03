import { Metadata } from "next";
import FlipkartRefundComplaintClient from "./FlipkartRefundComplaintClient";

export const metadata: Metadata = {
  title: "Flipkart Not Returning Your Product or Refund? What to Do",
  description: "Return pickup delayed, return rejected or refund stuck? The Flipkart grievance route, NCH 1915 and when a legal notice or consumer case makes sense.",
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
    title: "Flipkart Not Returning Your Product or Refund? What to Do",
    description: "Return pickup delayed, return rejected or refund stuck? The Flipkart grievance route, NCH 1915 and when a legal notice or consumer case makes sense.",
    url: "https://www.legalrecovery.in/flipkart-return-refund-complaint",
    type: "article",
  },
};

export default function FlipkartRefundComplaintPage() {
  return <FlipkartRefundComplaintClient />;
}
