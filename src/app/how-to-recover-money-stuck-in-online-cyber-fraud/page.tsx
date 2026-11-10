import { Metadata } from "next";
import CyberFraudRecoveryClient from "./CyberFraudRecoveryClient";

export const metadata: Metadata = {
  title: "How to Recover Money Stuck in 1930 Cyber Crime Hold",
  description: "Cyber fraud money on hold via 1930 but bank won't release it? Step-by-step guide to Section 497 BNSS magistrate release orders and legal notices.",
  keywords: [
    "how to recover money stuck in online cyber fraud",
    "1930 cyber crime hold amount release process",
    "section 451 457 crpc court order cyber fraud refund",
    "section 497 bnss release of frozen cyber crime money",
    "cyber crime lien amount recovery from bank",
    "how to get back hold money from cyber cell"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-money-stuck-in-online-cyber-fraud',
  },
  openGraph: {
    title: "How to Recover Money Stuck in 1930 Cyber Crime Hold",
    description: "Scammed money put on hold via 1930 Cyber Helpline? Step-by-step guide to Magistrate Release Order & Bank Legal Notice.",
    url: "https://www.legalrecovery.in/how-to-recover-money-stuck-in-online-cyber-fraud",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "How to Recover Money Stuck in 1930 Cyber Crime Hold",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Recover Money Stuck in 1930 Cyber Crime Hold",
    description: "Scammed money put on hold via 1930 Cyber Helpline? Step-by-step guide to Magistrate Release Order & Bank Legal Notice.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function CyberFraudRecoveryPage() {
  return <CyberFraudRecoveryClient />;
}
