import { Metadata } from "next";
import PartnershipDuesNoticeClient from "./PartnershipDuesNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to Partner for Recovery of Capital & Dues | Recovery",
  description: "Learn how to draft and serve a legal notice to partner for recovery of money and capital under Section 48 of the Partnership Act and LLP Act rules.",
  keywords: [
    "recover capital from partnership firm",
    "legal notice to partner for recovery of money",
    "llp partner dispute settlement",
    "partnership firm settlement of accounts"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-partner-for-recovery-of-dues",
  },
};

export default function PartnershipRecoveryPage() {
  return <PartnershipDuesNoticeClient />;
}
