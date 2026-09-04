import { Metadata } from "next";
import LandlordNoticeClient from "./LandlordNoticeClient";

export const metadata: Metadata = {
  title: "Can I Send a Legal Notice to Landlord for Deposit?",
  description: "A comprehensive guide on sending a legal notice to your landlord in India for withholding your rental security deposit after vacating the property.",
  keywords: [
    "send legal notice to landlord security deposit",
    "legal notice for rental deposit refund",
    "advocate notice for tenant deposit recovery",
    "withheld security deposit notice india",
    "interest act 1978 rental deposit",
    "how to serve legal notice to landlord",
    "proof of service landlord notice",
    "leave and license deposit refund notice",
    "unpaid rental deposit legal action",
    "rent control act notice to landlord"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/can-i-send-a-legal-notice-to-my-landlord-for-not-refunding-the-security-deposit-after-vacating-the-property',
  },
};

export default function LandlordNoticePage() {
  return <LandlordNoticeClient />;
}
