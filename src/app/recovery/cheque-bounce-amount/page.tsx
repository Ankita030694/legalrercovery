import { Metadata } from "next";
import ChequeBounceAmountClient from "./ChequeBounceAmountClient";

export const metadata: Metadata = {
  title: "Recover Bounced Cheque Amount (Sec 138) | LegalRecovery",
  description: "Faced with a bounced cheque in India? Learn the legal process under Section 138 NI Act, demand notice timelines, and how to recover your money.",
  keywords: [
    "recover bounced cheque amount",
    "section 138 ni act cheque bounce",
    "legal notice for cheque bounce timeline",
    "cheque bounce recovery lawyer",
    "order 37 cpc cheque bounce recovery",
    "interim compensation section 143a",
    "magistrate court cheque bounce case",
    "cheque return memo insufficient funds",
    "negotiable instruments act section 138",
    "cheque bounce penalty double amount"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/cheque-bounce-amount',
  },
  openGraph: {
    title: "Recover Bounced Cheque Amount (Sec 138) | LegalRecovery",
    description: "Faced with a bounced cheque in India? Learn the legal process under Section 138 NI Act, demand notice timelines, and how to recover your money.",
    url: "https://www.legalrecovery.in/recovery/cheque-bounce-amount",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Bounced Cheque Amount (Sec 138) | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Bounced Cheque Amount (Sec 138) | LegalRecovery",
    description: "Faced with a bounced cheque in India? Learn the legal process under Section 138 NI Act, demand notice timelines, and how to recover your money.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function ChequeBounceAmountPage() {
  return <ChequeBounceAmountClient />;
}
