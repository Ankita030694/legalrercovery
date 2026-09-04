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
};

export default function MediclaimReimbursementPage() {
  return <MediclaimReimbursementClient />;
}
