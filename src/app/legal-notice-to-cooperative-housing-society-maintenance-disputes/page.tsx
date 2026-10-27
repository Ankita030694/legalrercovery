import { Metadata } from "next";
import HousingSocietyNoticeClient from "./HousingSocietyNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to Cooperative Housing Society / RWA for Maintenance & Transfer Fee Disputes",
  description: "Challenging illegal non-occupancy charges, Rs 25,000+ transfer fee demands, NOC refusal, or water disconnection by your Housing Society/RWA? Serve a Registrar & Consumer Court Legal Notice.",
  keywords: [
    "housing society maintenance refund dispute",
    "legal notice to cooperative housing society",
    "recover illegal society transfer charges",
    "rwa maintenance penalty legal options",
    "housing society transfer fee limit 25000"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-cooperative-housing-society-maintenance-disputes',
  },
  openGraph: {
    title: "Legal Notice to Cooperative Housing Society / RWA for Maintenance & Transfer Fee Disputes",
    description: "Stop illegal maintenance charges, NOC extortion, and RWA harassment via a Cooperative Registrar & Consumer Act Legal Notice.",
    url: "https://www.legalrecovery.in/legal-notice-to-cooperative-housing-society-maintenance-disputes",
    type: "article",
  },
};

export default function HousingSocietyNoticePage() {
  return <HousingSocietyNoticeClient />;
}
