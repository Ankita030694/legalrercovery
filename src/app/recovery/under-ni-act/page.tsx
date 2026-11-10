import { Metadata } from "next";
import NIActAmountClient from "./NIActAmountClient";

export const metadata: Metadata = {
  title: "Recover Money Under NI Act in India | LegalRecovery",
  description: "Recover dues under the Negotiable Instruments Act, 1881. Learn the process for Section 138 cheque bounce filings, demand notices, and summary suits.",
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
  openGraph: {
    title: "Recover Money Under NI Act in India | LegalRecovery",
    description: "Recover dues under the Negotiable Instruments Act, 1881. Learn the process for Section 138 cheque bounce filings, demand notices, and summary suits.",
    url: "https://www.legalrecovery.in/recovery/under-ni-act",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Money Under NI Act in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Money Under NI Act in India | LegalRecovery",
    description: "Recover dues under the Negotiable Instruments Act, 1881. Learn the process for Section 138 cheque bounce filings, demand notices, and summary suits.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function NIActPage() {
  return <NIActAmountClient />;
}
