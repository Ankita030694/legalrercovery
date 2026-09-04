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
};

export default function UnpaidIncentivesPage() {
  return <UnpaidIncentivesClient />;
}
