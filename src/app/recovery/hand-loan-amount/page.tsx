import { Metadata } from "next";
import HandLoanAmountClient from "./HandLoanAmountClient";

export const metadata: Metadata = {
  title: "Recover Hand Loan Given on Trust in India | LegalRecovery",
  description: "Lent a hand loan on trust without an agreement? Learn how to recover your money legally using digital proofs, legal notices, and civil court remedies.",
  keywords: [
    "recover hand loan amount",
    "how to recover hand loan in india",
    "legal notice for hand loan recovery",
    "hand loan without written contract",
    "hand loan recovery legal remedies",
    "order 37 cpc hand loan recovery",
    "limitation period for hand loan",
    "cheque bounce case hand loan",
    "hand loan cheating case bns",
    "whatsapp logs proof for hand loan"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/hand-loan-amount',
  },
  openGraph: {
    title: "Recover Hand Loan Given on Trust in India | LegalRecovery",
    description: "Lent a hand loan on trust without an agreement? Learn how to recover your money legally using digital proofs, legal notices, and civil court remedies.",
    url: "https://www.legalrecovery.in/recovery/hand-loan-amount",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Hand Loan Given on Trust in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Hand Loan Given on Trust in India | LegalRecovery",
    description: "Lent a hand loan on trust without an agreement? Learn how to recover your money legally using digital proofs, legal notices, and civil court remedies.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function HandLoanAmountPage() {
  return <HandLoanAmountClient />;
}
