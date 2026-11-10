import { Metadata } from "next";
import AccidentalInsuranceClaimClient from "./AccidentalInsuranceClaimClient";

export const metadata: Metadata = {
  title: "Recover Accidental Insurance Claim | LegalRecovery",
  description: "Personal accident insurance claim rejected or delayed? LegalRecovery helps recover accidental death, disability, and injury claims under IRDAI rules.",
  keywords: [
    "accidental insurance claim rejected India",
    "personal accident insurance claim recovery",
    "IRDAI claim settlement rules",
    "insurance ombudsman complaint India",
    "accidental death claim denied",
    "permanent disability insurance claim",
    "PA policy claim dispute legal help",
    "insurance company not paying claim",
    "Bima Bharosa complaint portal",
    "consumer court insurance claim India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/accidental-insurance-claim',
  },
  openGraph: {
    title: "Recover Accidental Insurance Claim | LegalRecovery",
    description: "Personal accident insurance claim rejected or delayed? LegalRecovery helps recover accidental death, disability, and injury claims under IRDAI rules.",
    url: "https://www.legalrecovery.in/recovery/accidental-insurance-claim",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Accidental Insurance Claim | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Accidental Insurance Claim | LegalRecovery",
    description: "Personal accident insurance claim rejected or delayed? LegalRecovery helps recover accidental death, disability, and injury claims under IRDAI rules.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function AccidentalInsuranceClaimPage() {
  return <AccidentalInsuranceClaimClient />;
}
