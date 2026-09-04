import { Metadata } from "next";
import InsuranceClaimAmountClient from "./InsuranceClaimAmountClient";

export const metadata: Metadata = {
  title: "Recover Insurance Claim Amount in India | LegalRecovery",
  description: "Insurance claim rejected or delayed? Learn about IRDAI settlement rules, penal interest on delays, and how to file an Insurance Ombudsman complaint.",
  keywords: [
    "recover insurance claim amount",
    "wrongful insurance claim rejection refund",
    "irdai claim settlement timelines",
    "delayed health insurance claim recovery",
    "how to file complaint with insurance ombudsman",
    "bima bharosa portal complaint guide",
    "legal notice to insurance company for claim rejection",
    "life insurance claim delay penalty",
    "motor accident insurance claim dispute",
    "consumer court insurance deficiency in service"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/insurance-claim-amount',
  },
};

export default function InsuranceClaimAmountPage() {
  return <InsuranceClaimAmountClient />;
}
