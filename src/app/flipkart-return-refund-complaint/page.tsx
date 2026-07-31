import { Metadata } from "next";
import FlipkartRefundComplaintClient from "./FlipkartRefundComplaintClient";

export const metadata: Metadata = {
  title: "Flipkart Return & Refund Dispute: Legal Notice & Complaint",
  description: "Receive a wrong, empty, or damaged box from Flipkart? Learn how to serve a legal notice and file a consumer court complaint via e-Daakhil for refund delay.",
  keywords: [
    "flipkart refund delay complaint",
    "legal notice to flipkart for refund",
    "flipkart product picked up but refund not received",
    "consumer court complaint against flipkart",
    "flipkart return rejected legal remedy"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/flipkart-return-refund-complaint",
  },
};

export default function FlipkartRefundComplaintPage() {
  return <FlipkartRefundComplaintClient />;
}
