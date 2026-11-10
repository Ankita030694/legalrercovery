import { Metadata } from "next";
import TravelReimbursementClient from "./TravelReimbursementClient";

export const metadata: Metadata = {
  title: "Unpaid Travel & Conveyance Recovery | LegalRecovery",
  description: "Employer refusing to clear your business travel, hotel, flight, or conveyance bills? Find out how to send a legal notice and recover travel reimbursements.",
  keywords: [
    "recover travel reimbursement from employer",
    "unpaid business trip expense recovery",
    "employer withholding flight and hotel bills",
    "local conveyance allowance claim recovery",
    "legal notice for unpaid travel expenses",
    "recover out of pocket business travel dues",
    "corporate travel policy breach recovery suit",
    "unpaid travel bill dispute labor law India",
    "summary suit for travel expense recovery",
    "how to recover unpaid conveyance from company"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/travel-reimbursement',
  },
  openGraph: {
    title: "Unpaid Travel & Conveyance Recovery | LegalRecovery",
    description: "Employer refusing to clear your business travel, hotel, flight, or conveyance bills? Find out how to send a legal notice and recover travel reimbursements.",
    url: "https://www.legalrecovery.in/recovery/travel-reimbursement",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Unpaid Travel & Conveyance Recovery | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unpaid Travel & Conveyance Recovery | LegalRecovery",
    description: "Employer refusing to clear your business travel, hotel, flight, or conveyance bills? Find out how to send a legal notice and recover travel reimbursements.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function TravelReimbursementPage() {
  return <TravelReimbursementClient />;
}
