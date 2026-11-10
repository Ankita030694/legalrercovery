import { Metadata } from "next";
import UnpaidIncentivesClient from "./UnpaidIncentivesClient";

export const metadata: Metadata = {
  title: "Recover Sales Incentives & Commissions | LegalRecovery",
  description: "Employer withholding sales commissions or performance incentives? Learn your legal rights, notice guidelines, and recovery options under Indian law.",
  keywords: [
    "recover unpaid sales incentives",
    "unpaid sales commission employee rights india",
    "legal notice for recovery of unpaid incentives",
    "employer withholding performance bonus",
    "recovery of commissions from employer",
    "are incentives wages in india",
    "notice period incentive payout dispute",
    "clawback clause legality india",
    "summary suit for unpaid sales incentives",
    "performance bonus default legal help"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/unpaid-incentives',
  },
  openGraph: {
    title: "Recover Sales Incentives & Commissions | LegalRecovery",
    description: "Employer withholding sales commissions or performance incentives? Learn your legal rights, notice guidelines, and recovery options under Indian law.",
    url: "https://www.legalrecovery.in/recovery/unpaid-incentives",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Sales Incentives & Commissions | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Sales Incentives & Commissions | LegalRecovery",
    description: "Employer withholding sales commissions or performance incentives? Learn your legal rights, notice guidelines, and recovery options under Indian law.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function UnpaidIncentivesPage() {
  return <UnpaidIncentivesClient />;
}
