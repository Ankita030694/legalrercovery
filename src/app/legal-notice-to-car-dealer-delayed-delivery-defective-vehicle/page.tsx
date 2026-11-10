import { Metadata } from "next";
import CarDealerNoticeClient from "./CarDealerNoticeClient";

export const metadata: Metadata = {
  title: "Vehicle Not Delivered or Defective? Dealer Refund Rights",
  description: "Car not delivered on time, defects found at PDI, or booking refund refused? When you can refuse delivery, claim compensation and notice the dealer.",
  keywords: [
    "legal notice to car dealer for delayed delivery",
    "vehicle not delivered",
    "compensation for delayed car delivery",
    "can i refuse new car delivery in india",
    "legal notice for delay in supply of machinery india",
    "lemon car refund legal notice format",
    "recover booking advance from car dealer",
    "defective vehicle replacement consumer court"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle',
  },
  openGraph: {
    title: "Vehicle Not Delivered or Defective? Dealer Refund Rights",
    description: "Car not delivered on time, defects found at PDI, or booking refund refused? When you can refuse delivery, claim compensation and notice the dealer.",
    url: "https://www.legalrecovery.in/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Vehicle Not Delivered or Defective? Dealer Refund Rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Not Delivered or Defective? Dealer Refund Rights",
    description:
      "Car not delivered on time, defects found at PDI, or booking refund refused? When you can refuse delivery, claim compensation and notice the dealer.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function CarDealerNoticePage() {
  return <CarDealerNoticeClient />;
}
