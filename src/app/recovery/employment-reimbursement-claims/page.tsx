import { Metadata } from "next";
import ReimbursementClaimsClient from "./ReimbursementClaimsClient";

export const metadata: Metadata = {
  title: "Unpaid Employee Expense Reimbursement Recovery | LegalRecovery",
  description: "Struggling to recover unpaid business travel, relocation, client, or internet expenses from your employer? Learn how to send a legal notice and recover your reimbursement claims.",
  keywords: [
    "recover employee business expenses from employer",
    "unpaid travel reimbursement claim legal notice",
    "employer refusing relocation expense reimbursement",
    "recover client entertainment expenses",
    "employee expense reimbursement recovery suit cpc",
    "shops and establishment act reimbursement complaint",
    "unpaid relocation shifting allowance company",
    "demand letter for unpaid business expenses",
    "employer breach of contract reimbursement policy",
    "corporate expense recovery lawyer India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/employment-reimbursement-claims',
  },
};

export default function ReimbursementClaimsPage() {
  return <ReimbursementClaimsClient />;
}
