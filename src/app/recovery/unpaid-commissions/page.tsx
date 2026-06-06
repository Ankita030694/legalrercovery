import { Metadata } from "next";
import UnpaidCommissionsClient from "./UnpaidCommissionsClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Sales Commissions & Brokerage Dues | LegalRecovery",
  description: "Struggling to recover unpaid sales commissions, referral fees, channel partner payouts, or brokerage dues in India? Learn about agency contracts, summary suits (Order 37 CPC), and legal notice procedures.",
  keywords: [
    "recover unpaid commissions India",
    "sales commission default legal notice",
    "brokerage dues recovery advocate",
    "channel partner commission payout",
    "referral fees recovery CPC",
    "summary suit for sales commissions",
    "agency contract commission dispute",
    "breach of agency agreement damages",
    "Section 219 contract act commission",
    "Section 138 NI Act commission cheque bounce"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/unpaid-commissions',
  },
};

export default function UnpaidCommissionsPage() {
  return <UnpaidCommissionsClient />;
}
