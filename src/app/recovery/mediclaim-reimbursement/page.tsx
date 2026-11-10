import { Metadata } from "next";
import MediclaimReimbursementClient from "./MediclaimReimbursementClient";

export const metadata: Metadata = {
  title: "Recover Rejected Mediclaim Dues | LegalRecovery",
  description: "Mediclaim reimbursement rejected by TPA or insurer? Learn about IRDAI timelines, pre-existing disease rules, Ombudsman complaints, and recovery steps.",
  keywords: [
    "recover mediclaim reimbursement",
    "wrongful health insurance claim rejection",
    "tpa claim rejection refund",
    "irdai mediclaim reimbursement guidelines",
    "how to dispute health insurance claim",
    "insurance ombudsman mediclaim complaint",
    "legal notice to insurer for medical claim",
    "hospital bill reimbursement dispute",
    "moratorium period health insurance",
    "consumer court mediclaim deficiency"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/mediclaim-reimbursement',
  },
  openGraph: {
    title: "Recover Rejected Mediclaim Dues | LegalRecovery",
    description: "Mediclaim reimbursement rejected by TPA or insurer? Learn about IRDAI timelines, pre-existing disease rules, Ombudsman complaints, and recovery steps.",
    url: "https://www.legalrecovery.in/recovery/mediclaim-reimbursement",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Rejected Mediclaim Dues | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Rejected Mediclaim Dues | LegalRecovery",
    description: "Mediclaim reimbursement rejected by TPA or insurer? Learn about IRDAI timelines, pre-existing disease rules, Ombudsman complaints, and recovery steps.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function MediclaimReimbursementPage() {
  return <MediclaimReimbursementClient />;
}
