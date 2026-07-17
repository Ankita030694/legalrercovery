import { Metadata } from "next";
import CarDealerNoticeClient from "./CarDealerNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to Car Dealer for Delayed Delivery & Defective Vehicle",
  description: "Learn how to hold car dealerships and manufacturers accountable for delayed deliveries and manufacturing defects. Draft a legal notice for vehicle replacement or refund.",
  keywords: [
    "legal notice to car dealer for delayed delivery",
    "lemon car refund legal notice format",
    "recover booking advance from car dealer",
    "defective vehicle replacement consumer court"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle',
  },
};

export default function CarDealerNoticePage() {
  return <CarDealerNoticeClient />;
}
