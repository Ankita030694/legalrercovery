import { Metadata } from "next";
import WrongDamagedProductClient from "./WrongDamagedProductClient";

export const metadata: Metadata = {
  title: "Legal Notice for Wrong or Damaged Product Delivery | Refund",
  description: "Receive a wrong, counterfeit, or damaged item? Learn how to serve a legal notice to e-commerce sellers and retailers for product replacement or refund in India.",
  keywords: [
    "legal notice to seller for wrong product delivery",
    "damaged item received e commerce refund",
    "consumer court complaint wrong item delivered",
    "legal notice for product replacement",
    "refusal to refund wrong product delivery"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-retailer-wrong-damaged-product-delivery",
  },
};

export default function WrongDamagedProductPage() {
  return <WrongDamagedProductClient />;
}
