import { Metadata } from "next";
import RelativeLoanRecoveryNoticeClient from "./RelativeLoanRecoveryNoticeClient";

export const metadata: Metadata = {
  title: "Recover Personal Loan to Relative Without Agreement",
  description: "Learn how to recover a personal loan given to a relative without a written agreement in India. Draft a firm legal notice to recover your unpaid loan.",
  keywords: [
    "recover personal loan from relative india",
    "lent money to relative how to recover",
    "no agreement personal loan recovery from family",
    "legal notice to relative for unpaid loan"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-personal-loan-given-to-relative-without-agreement',
  },
  openGraph: {
    title: "Recover Personal Loan to Relative Without Agreement",
    description: "Learn how to recover a personal loan given to a relative without a written agreement in India. Draft a firm legal notice to recover your unpaid loan.",
    url: "https://www.legalrecovery.in/how-to-recover-personal-loan-given-to-relative-without-agreement",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Personal Loan to Relative Without Agreement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Personal Loan to Relative Without Agreement",
    description: "Learn how to recover a personal loan given to a relative without a written agreement in India. Draft a firm legal notice to recover your unpaid loan.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function RelativeLoanRecoveryPage() {
  return <RelativeLoanRecoveryNoticeClient />;
}
