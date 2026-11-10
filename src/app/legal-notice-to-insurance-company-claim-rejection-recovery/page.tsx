import { Metadata } from "next";
import InsuranceClaimRecoveryClient from "./InsuranceClaimRecoveryClient";

export const metadata: Metadata = {
  title: "Legal Notice to Insurance Company for Rejected Claim",
  description: "Insurance claim rejected on unfair or technical grounds? Send an advocate legal notice to the insurer and escalate to the Insurance Ombudsman.",
  keywords: [
    "legal notice to insurance company for rejecting claim",
    "legal notice to insurance company for claim rejection",
    "recover health insurance claim rejected",
    "consumer court complaint against insurance company",
    "legal notice for insurance claim delay"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-insurance-company-claim-rejection-recovery",
  },
  openGraph: {
    title: "Legal Notice to Insurance Company for Rejected Claim",
    description: "Overturn wrongful health, life, or motor insurance claim rejections via an Advocate Legal Notice, IRDAI Bima Bharosa & Insurance Ombudsman.",
    url: "https://www.legalrecovery.in/legal-notice-to-insurance-company-claim-rejection-recovery",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice to Insurance Company for Rejected Claim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice to Insurance Company for Rejected Claim",
    description: "Overturn wrongful health, life, or motor insurance claim rejections via an Advocate Legal Notice, IRDAI Bima Bharosa & Insurance Ombudsman.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function InsuranceClaimRecoveryPage() {
  return <InsuranceClaimRecoveryClient />;
}
