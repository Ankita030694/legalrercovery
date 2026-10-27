import { Metadata } from "next";
import PDCAmountClient from "./PDCAmountClient";

export const metadata: Metadata = {
  title: "Bounced Post-Dated Cheque (PDC) or Security Cheque Recovery (Sec 138 NI Act & Order 37)",
  description: "Did a Post-Dated Cheque (PDC) or security cheque bounce due to insufficient funds or 'Payment Stopped by Drawer'? Serve a 15-day Section 138 NI Act Legal Notice & claim 20% interim compensation.",
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
  openGraph: {
    title: "Bounced Post-Dated Cheque (PDC) or Security Cheque Recovery (Sec 138 NI Act & Order 37)",
    description: "Enforce bounced Post-Dated Cheques (PDCs) and security cheques under Section 138 NI Act and claim up to 2x cheque amount.",
    url: "https://www.legalrecovery.in/recovery/post-dated-cheque-amount",
    type: "article",
  },
};

export default function PDCPage() {
  return <PDCAmountClient />;
}
