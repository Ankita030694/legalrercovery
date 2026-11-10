import { Metadata } from "next";
import FriendlyLoanAmountClient from "./FriendlyLoanAmountClient";

export const metadata: Metadata = {
  title: "Friendly Loan Recovery Process in India | LegalRecovery",
  description: "Struggling to recover a friendly loan in India? Learn legal options, oral contract validity, digital proofs, and how to recover your funds legally.",
  keywords: [
    "friendly loan recovery process",
    "how to recover friendly loan india",
    "legal action for personal loan to friend",
    "recover money lent on trust",
    "promissory note friendly loan recovery",
    "order 37 summary suit friendly loan",
    "recover friendly loan without written agreement",
    "limitation period friendly loan recovery",
    "cheque bounce recovery personal loan",
    "criminal complaint friendly loan cheating"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/friendly-loan-amount',
  },
  openGraph: {
    title: "Friendly Loan Recovery Process in India | LegalRecovery",
    description: "Struggling to recover a friendly loan in India? Learn legal options, oral contract validity, digital proofs, and how to recover your funds legally.",
    url: "https://www.legalrecovery.in/recovery/friendly-loan-amount",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Friendly Loan Recovery Process in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friendly Loan Recovery Process in India | LegalRecovery",
    description: "Struggling to recover a friendly loan in India? Learn legal options, oral contract validity, digital proofs, and how to recover your funds legally.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FriendlyLoanAmountPage() {
  return <FriendlyLoanAmountClient />;
}
