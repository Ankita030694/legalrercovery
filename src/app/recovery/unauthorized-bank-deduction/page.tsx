import { Metadata } from "next";
import UnauthorizedBankDeductionClient from "./UnauthorizedBankDeductionClient";

export const metadata: Metadata = {
  title: "Money Deducted From Bank Account Without Permission?",
  description: "Bank debited charges, penal interest or an insurance premium without consent? Why it happens, what RBI rules say and how to get your money back.",
  keywords: [
    "recover unauthorized bank deduction",
    "unauthorized bank charges refund india",
    "bank deducted money without consent refund",
    "banking ombudsman complaint for wrong deduction",
    "legal notice to bank for hidden charges",
    "recover wrong bank account debit",
    "wrongful bank lien set off recovery",
    "force sold bank insurance deduction refund",
    "consumer court bank negligence deduction"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/unauthorized-bank-deduction',
  },
  openGraph: {
    title: "Money Deducted From Bank Account Without Permission?",
    description: "Bank debited charges, penal interest or an insurance premium without consent? Why it happens, what RBI rules say and how to get your money back.",
    url: "https://www.legalrecovery.in/recovery/unauthorized-bank-deduction",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Money Deducted From Bank Account Without Permission?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Deducted From Bank Account Without Permission?",
    description:
      "Bank debited charges, penal interest or an insurance premium without consent? Why it happens, what RBI rules say and how to get your money back.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function UnauthorizedBankDeductionPage() {
  return <UnauthorizedBankDeductionClient />;
}
