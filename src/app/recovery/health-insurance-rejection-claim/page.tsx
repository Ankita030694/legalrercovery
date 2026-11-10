import { Metadata } from "next";
import HealthInsuranceRejectionClaimClient from "./HealthInsuranceRejectionClaimClient";

export const metadata: Metadata = {
  title: "Recover Rejected Health Insurance Claim | LegalRecovery",
  description: "Health insurance claim rejected or delayed? Challenge repudiations using IRDAI rules, 5-year moratorium shields, Ombudsman, and Consumer Courts.",
  keywords: [
    "health insurance claim rejected India",
    "health insurance repudiation challenge",
    "IRDAI moratorium period 5 years",
    "TPA rejected health claim",
    "insurance ombudsman health insurance",
    "consumer court health insurance India",
    "cashless claim denied what to do",
    "pre-existing disease claim rejection",
    "health insurance claim recovery legal help",
    "Bima Bharosa complaint health insurance"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/health-insurance-rejection-claim',
  },
  openGraph: {
    title: "Recover Rejected Health Insurance Claim | LegalRecovery",
    description: "Health insurance claim rejected or delayed? Challenge repudiations using IRDAI rules, 5-year moratorium shields, Ombudsman, and Consumer Courts.",
    url: "https://www.legalrecovery.in/recovery/health-insurance-rejection-claim",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Rejected Health Insurance Claim | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Rejected Health Insurance Claim | LegalRecovery",
    description: "Health insurance claim rejected or delayed? Challenge repudiations using IRDAI rules, 5-year moratorium shields, Ombudsman, and Consumer Courts.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function HealthInsuranceRejectionClaimPage() {
  return <HealthInsuranceRejectionClaimClient />;
}
