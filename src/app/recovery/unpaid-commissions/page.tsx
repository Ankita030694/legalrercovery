import { Metadata } from "next";
import UnpaidCommissionsClient from "./UnpaidCommissionsClient";

export const metadata: Metadata = {
  title: "Recover Sales Commissions & Brokerage | LegalRecovery",
  description: "Recover unpaid sales commissions, referral fees, or brokerage dues in India. Learn legal notice rules, agency contracts, and Order 37 CPC remedies.",
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
