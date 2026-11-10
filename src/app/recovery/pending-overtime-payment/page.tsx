import { Metadata } from "next";
import PendingOvertimeClient from "./PendingOvertimeClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Overtime Compensation | LegalRecovery",
  description: "Recover pending overtime payment or late wages in India. Learn about the Factories Act, Shops and Establishments Act, and legal notice remedies.",
  keywords: [
    "recover unpaid overtime India",
    "overtime calculation formula labor law",
    "shops and establishments act overtime",
    "double rate overtime pay India",
    "unpaid overtime legal notice advocate",
    "labor court complaint overtime wages",
    "workman overtime rights Factories Act",
    "Order 37 CPC summary suit overtime",
    "overtime rate basic dearness allowance",
    "employee rights working hours India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/pending-overtime-payment',
  },
  openGraph: {
    title: "Recover Unpaid Overtime Compensation | LegalRecovery",
    description: "Recover pending overtime payment or late wages in India. Learn about the Factories Act, Shops and Establishments Act, and legal notice remedies.",
    url: "https://www.legalrecovery.in/recovery/pending-overtime-payment",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Unpaid Overtime Compensation | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid Overtime Compensation | LegalRecovery",
    description: "Recover pending overtime payment or late wages in India. Learn about the Factories Act, Shops and Establishments Act, and legal notice remedies.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function PendingOvertimePage() {
  return <PendingOvertimeClient />;
}
