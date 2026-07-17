import { Metadata } from "next";
import HousingSocietyNoticeClient from "./HousingSocietyNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to Cooperative Housing Society for Maintenance Disputes",
  description: "Learn how to fight arbitrary maintenance charges, illegal transfer fees, and harassment by RWA management committees. Draft a legal notice to your housing society.",
  keywords: [
    "housing society maintenance refund dispute",
    "legal notice to cooperative housing society",
    "recover illegal society transfer charges",
    "rwa maintenance penalty legal options",
    "housing society transfer fee limit"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-cooperative-housing-society-maintenance-disputes',
  },
};

export default function HousingSocietyNoticePage() {
  return <HousingSocietyNoticeClient />;
}
