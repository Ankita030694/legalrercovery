import { Metadata } from "next";
import WrongDamagedProductClient from "./WrongDamagedProductClient";

export const metadata: Metadata = {
  title: "Wrong, Broken or Damaged Product Delivered? Legal Notice for 100% Refund",
  description: "Received a wrong, leaking, broken, or defective item and retailer refuses refund? Check the mandatory proof checklist, Consumer Protection Act 2019 rules & send a Legal Notice.",
  keywords: [
    "legal notice to seller for wrong product delivery",
    "damaged item received e commerce refund",
    "consumer court complaint wrong item delivered",
    "what proof to collect for leaking or broken online delivery india",
    "legal notice for product replacement",
    "refusal to refund wrong product delivery",
    "damaged furniture delivery legal notice ignored"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-retailer-wrong-damaged-product-delivery",
  },
  openGraph: {
    title: "Wrong, Broken or Damaged Product Delivered? Legal Notice for 100% Refund",
    description: "Received a wrong, leaking, broken, or defective item and retailer refuses refund? Check the mandatory proof checklist & serve an Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/legal-notice-to-retailer-wrong-damaged-product-delivery",
    type: "article",
  },
};

export default function WrongDamagedProductPage() {
  return <WrongDamagedProductClient />;
}
