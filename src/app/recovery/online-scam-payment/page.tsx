import { Metadata } from "next";
import OnlineScamClient from "./OnlineScamClient";

export const metadata: Metadata = {
  title: "Recover Online Scam Payment in India | LegalRecovery",
  description: "Lost money to an online scam via UPI or cards? Learn about bank chargeback rights, RBI customer protection circulars, and legal recovery notices.",
  keywords: [
    "recover online scam payment",
    "chargeback process online fraud india",
    "upi scam money refund bank dispute",
    "payment gateway scam refund legal action",
    "mastercard visa chargeback fraud reporting",
    "how to file chargeback online scam bank",
    "rbi guidelines unauthorized online payment",
    "scam merchant nodal account freeze",
    "legal notice to payment gateway fraud",
    "consumer court bank negligence online scam"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/online-scam-payment',
  },
  openGraph: {
    title: "Recover Online Scam Payment in India | LegalRecovery",
    description: "Lost money to an online scam via UPI or cards? Learn about bank chargeback rights, RBI customer protection circulars, and legal recovery notices.",
    url: "https://www.legalrecovery.in/recovery/online-scam-payment",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Online Scam Payment in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Online Scam Payment in India | LegalRecovery",
    description: "Lost money to an online scam via UPI or cards? Learn about bank chargeback rights, RBI customer protection circulars, and legal recovery notices.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function ScamPage() {
  return <OnlineScamClient />;
}
