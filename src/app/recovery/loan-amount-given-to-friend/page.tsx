import { Metadata } from "next";
import FriendlyLoanClient from "./FriendlyLoanClient";

export const metadata: Metadata = {
  title: "Recover Loan Amount Given to a Friend | LegalRecovery",
  description: "Struggling to recover a loan given to a friend? LegalRecovery helps recover money through legal notices, summary suits, and Section 138 NI Act actions.",
  keywords: [
    "recover loan given to friend",
    "recovery of money lent to friend India",
    "loan recovery without agreement",
    "hand loan recovery legal notice",
    "promissory note enforcement India",
    "friendly loan recovery legal action",
    "personal loan not returned legal remedy",
    "money lent on trust recovery",
    "recover money from friend legally",
    "summary suit for loan recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/loan-amount-given-to-friend',
  },
  openGraph: {
    title: "Recover Loan Amount Given to a Friend | LegalRecovery",
    description: "Struggling to recover a loan given to a friend? LegalRecovery helps recover money through legal notices, summary suits, and Section 138 NI Act actions.",
    url: "https://www.legalrecovery.in/recovery/loan-amount-given-to-friend",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Loan Amount Given to a Friend | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Loan Amount Given to a Friend | LegalRecovery",
    description: "Struggling to recover a loan given to a friend? LegalRecovery helps recover money through legal notices, summary suits, and Section 138 NI Act actions.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FriendlyLoanPage() {
  return <FriendlyLoanClient />;
}
