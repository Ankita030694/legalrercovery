import { Metadata } from "next";
import RelativeLoanRecoveryNoticeClient from "./RelativeLoanRecoveryNoticeClient";

export const metadata: Metadata = {
  title: "Recover Personal Loan to Relative Without Agreement",
  description: "Learn how to recover a personal loan given to a relative or family member without a written agreement in India. Draft a firm legal notice for an unpaid loan.",
  keywords: [
    "recover personal loan from relative india",
    "lent money to relative how to recover",
    "no agreement personal loan recovery from family",
    "legal notice to relative for unpaid loan"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-personal-loan-given-to-relative-without-agreement',
  },
};

export default function RelativeLoanRecoveryPage() {
  return <RelativeLoanRecoveryNoticeClient />;
}
