import { Metadata } from "next";
import MSMEInterestClient from "./MSMEInterestClient";

export const metadata: Metadata = {
  title: "Recover MSME Delayed Payment Interest | LegalRecovery",
  description: "Calculate and claim compound interest at 3x RBI bank rate under Section 16 MSMED Act for delayed B2B payments in India. Recover your outstanding dues.",
  keywords: [
    "MSME delayed payment interest calculation",
    "Section 16 MSMED Act interest rate",
    "3x RBI bank rate compound interest",
    "MSME interest calculation monthly rests",
    "Section 23 Income Tax disallowance",
    "Section 22 audit disclosure CARO 2020",
    "B2B delayed payment interest advocate notice",
    "form 3cd clause 22 MSME interest",
    "MSEFC interest claim Samadhaan",
    "compound interest with monthly rests MSME"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/delayed-payment-interest-under-msme',
  },
  openGraph: {
    title: "Recover MSME Delayed Payment Interest | LegalRecovery",
    description: "Calculate and claim compound interest at 3x RBI bank rate under Section 16 MSMED Act for delayed B2B payments in India. Recover your outstanding dues.",
    url: "https://www.legalrecovery.in/recovery/delayed-payment-interest-under-msme",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover MSME Delayed Payment Interest | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover MSME Delayed Payment Interest | LegalRecovery",
    description: "Calculate and claim compound interest at 3x RBI bank rate under Section 16 MSMED Act for delayed B2B payments in India. Recover your outstanding dues.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function MSMEInterestPage() {
  return <MSMEInterestClient />;
}
