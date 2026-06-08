import { Metadata } from "next";
import PDCAmountClient from "./PDCAmountClient";

export const metadata: Metadata = {
  title: "Recover Post-Dated Cheque (PDC) Amount in India | LegalRecovery",
  description: "Struggling to recover dues from a bounced post-dated cheque (PDC) or security cheque? Learn the step-by-step legal process under Section 138 NI Act and CPC.",
  keywords: [
    "recover post dated cheque amount",
    "bounced post-dated cheque legal process",
    "security cheque bounce legal action",
    "section 138 ni act pdc recovery",
    "order 37 summary suit post dated cheque",
    "section 143a interim compensation pdc",
    "magistrate court pdc complaint",
    "pdc cheque return memo insufficient funds",
    "negotiable instruments act pdc recovery",
    "pdc cheque bounce penalty double amount"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/post-dated-cheque-amount',
  },
};

export default function PDCPage() {
  return <PDCAmountClient />;
}
