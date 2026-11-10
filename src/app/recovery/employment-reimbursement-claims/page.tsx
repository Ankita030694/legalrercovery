import { Metadata } from "next";
import ReimbursementClaimsClient from "./ReimbursementClaimsClient";

export const metadata: Metadata = {
  title: "Recover Employee Expense Reimbursements | LegalRecovery",
  description: "Struggling to recover unpaid travel or relocation expenses from your employer? Send a legal notice and recover your expense reimbursements in India.",
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
  openGraph: {
    title: "Recover Employee Expense Reimbursements | LegalRecovery",
    description: "Struggling to recover unpaid travel or relocation expenses from your employer? Send a legal notice and recover your expense reimbursements in India.",
    url: "https://www.legalrecovery.in/recovery/employment-reimbursement-claims",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Employee Expense Reimbursements | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Employee Expense Reimbursements | LegalRecovery",
    description: "Struggling to recover unpaid travel or relocation expenses from your employer? Send a legal notice and recover your expense reimbursements in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function ReimbursementClaimsPage() {
  return <ReimbursementClaimsClient />;
}
