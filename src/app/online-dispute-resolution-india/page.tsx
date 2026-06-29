import { Metadata } from "next";
import OnlineDisputeResolutionClient from "./OnlineDisputeResolutionClient";

export const metadata: Metadata = {
  title: "Online Dispute Resolution in India: Money Recovery",
  description: "Discover how Online Dispute Resolution (ODR) in India provides a legal, fast alternative to traditional courts for personal and commercial money recovery.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "online dispute resolution",
    "ODR in India",
    "e-arbitration India",
    "e-mediation recovery",
    "digital court resolution"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/online-dispute-resolution-india',
  },
};

export default function OnlineDisputeResolutionPage() {
  return <OnlineDisputeResolutionClient />;
}
