import { Metadata } from "next";
import EcommerceSellerRecoveryClient from "./EcommerceSellerRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Frozen Marketplace Payouts | Seller Dispute",
  description: "Learn how to recover frozen seller money on Amazon, Flipkart, or Meesho. Serve a legal notice to e-commerce marketplaces for withheld seller payouts.",
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
