import { Metadata } from "next";
import WrongDamagedProductClient from "./WrongDamagedProductClient";

export const metadata: Metadata = {
  title: "Received a Damaged or Wrong Product? How to Get a Refund",
  description: "Damaged, wrong or defective item delivered and the seller won't refund? The proof to keep, your rights under consumer law and the steps to take next.",
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
    title: "Received a Damaged or Wrong Product? How to Get a Refund",
    description: "Damaged, wrong or defective item delivered and the seller won't refund? The proof to keep, your rights under consumer law and the steps to take next.",
    url: "https://www.legalrecovery.in/legal-notice-to-retailer-wrong-damaged-product-delivery",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Received a Damaged or Wrong Product? How to Get a Refund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Received a Damaged or Wrong Product? How to Get a Refund",
    description:
      "Damaged, wrong or defective item delivered and the seller won't refund? The proof to keep, your rights under consumer law and the steps to take next.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function WrongDamagedProductPage() {
  return <WrongDamagedProductClient />;
}
