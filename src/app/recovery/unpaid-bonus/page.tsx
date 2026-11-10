import { Metadata } from "next";
import UnpaidBonusClient from "./UnpaidBonusClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Bonus from Employer | LegalRecovery",
  description: "Employer defaulted on your statutory or performance bonus? Learn your rights under the Payment of Bonus Act, 1965 and get expert legal recovery help.",
  keywords: [
    "recover unpaid bonus from employer",
    "payment of bonus act 1965 employee rights",
    "contractual performance bonus default",
    "legal notice for recovery of unpaid bonus",
    "employer withholding annual bonus",
    "minimum statutory bonus india",
    "disqualification from bonus section 9",
    "pro rata bonus calculation resignation",
    "summary suit for unpaid employee bonus",
    "labor court complaint for unpaid bonus"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/unpaid-bonus',
  },
  openGraph: {
    title: "Recover Unpaid Bonus from Employer | LegalRecovery",
    description: "Employer defaulted on your statutory or performance bonus? Learn your rights under the Payment of Bonus Act, 1965 and get expert legal recovery help.",
    url: "https://www.legalrecovery.in/recovery/unpaid-bonus",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Unpaid Bonus from Employer | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid Bonus from Employer | LegalRecovery",
    description: "Employer defaulted on your statutory or performance bonus? Learn your rights under the Payment of Bonus Act, 1965 and get expert legal recovery help.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function UnpaidBonusPage() {
  return <UnpaidBonusClient />;
}
