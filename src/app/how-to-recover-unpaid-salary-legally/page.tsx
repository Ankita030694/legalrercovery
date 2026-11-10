import { Metadata } from "next";
import SalaryRecoveryGuideClient from "./SalaryRecoveryGuideClient";

export const metadata: Metadata = {
  title: "How to Recover Unpaid Salary from Employer Legally",
  description: "Employer not paying salary? Step-by-step guide to sending an advocate legal notice, filing on Samadhan Portal, and pursuing Order 37 summary suits.",
  keywords: [
    "how to recover unpaid salary legally India",
    "unpaid salary recovery legal notice",
    "labour commissioner complaint salary delay",
    "Summary Suit Order 37 CPC salary recovery",
    "insolvency petition unpaid wages IBC",
    "Payment of Wages Act claim process",
    "employer not paying salary after resignation",
    "relieving letter withheld legal notice",
    "Labour Court Section 33C2 petition",
    "BNS 316 criminal breach of trust salary"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-unpaid-salary-legally',
  },
  openGraph: {
    title: "How to Recover Unpaid Salary from Employer Legally",
    description: "Recover unpaid salary, incentives, and F&F settlement via Advocate Legal Notice, Samadhan Portal, and Labour Court.",
    url: "https://www.legalrecovery.in/how-to-recover-unpaid-salary-legally",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "How to Recover Unpaid Salary from Employer Legally",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Recover Unpaid Salary from Employer Legally",
    description: "Recover unpaid salary, incentives, and F&F settlement via Advocate Legal Notice, Samadhan Portal, and Labour Court.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function HowToRecoverSalaryPage() {
  return <SalaryRecoveryGuideClient />;
}
