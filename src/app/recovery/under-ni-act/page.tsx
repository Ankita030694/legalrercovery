import { Metadata } from "next";
import NIActAmountClient from "./NIActAmountClient";

export const metadata: Metadata = {
  title: "Recover Money Under Negotiable Instruments Act in India | LegalRecovery",
  description: "Need to recover dues under the Negotiable Instruments Act, 1881? Learn the step-by-step process for Section 138 cheque bounce filings, notices, and summary suits.",
  keywords: [
    "recovery under negotiable instruments act",
    "section 138 ni act case process",
    "statutory notice under negotiable instruments act",
    "cheque bounce legal action india",
    "order 37 summary suit check bounce",
    "section 143a interim compensation claim",
    "magistrate court ni act complaint",
    "cheque bounce recovery lawyer",
    "legal notice timeline section 138",
    "negotiable instruments act 1881 recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/under-ni-act',
  },
};

export default function NIActPage() {
  return <NIActAmountClient />;
}
