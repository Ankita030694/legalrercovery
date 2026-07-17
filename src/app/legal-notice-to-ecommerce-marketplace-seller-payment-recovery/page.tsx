import { Metadata } from "next";
import EcommerceSellerRecoveryClient from "./EcommerceSellerRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Frozen Payouts from Amazon/Flipkart | E-Commerce Dispute",
  description: "Learn how to recover frozen seller account money on Amazon, Flipkart, or Meesho. Serve a legal notice to e-commerce marketplace platforms for withheld payouts.",
  keywords: [
    "recover frozen seller account money Amazon",
    "legal notice to e-commerce marketplace",
    "flipkart seller payment dispute legal remedy",
    "withheld seller payouts recovery"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-ecommerce-marketplace-seller-payment-recovery",
  },
};

export default function EcommerceSellerRecoveryPage() {
  return <EcommerceSellerRecoveryClient />;
}
