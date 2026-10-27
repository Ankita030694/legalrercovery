import { Metadata } from "next";
import CarDealerNoticeClient from "./CarDealerNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to Car Dealer: Vehicle Not Delivered, PDI Refusal & Booking Refund",
  description: "Vehicle not delivered on time, defective car found in PDI, or dealer refusing booking cancellation refund? Serve a Legal Notice to the Car Dealer & Manufacturer for 100% refund + compensation.",
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
    title: "Legal Notice to Car Dealer: Vehicle Not Delivered, PDI Refusal & Booking Refund",
    description: "Hold car dealers and manufacturers liable for delayed car delivery, PDI defects, or refused booking refunds under the Consumer Protection Act, 2019.",
    url: "https://www.legalrecovery.in/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle",
    type: "article",
  },
};

export default function CarDealerNoticePage() {
  return <CarDealerNoticeClient />;
}
