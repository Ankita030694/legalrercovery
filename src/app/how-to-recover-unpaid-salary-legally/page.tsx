import { Metadata } from "next";
import SalaryRecoveryGuideClient from "./SalaryRecoveryGuideClient";

export const metadata: Metadata = {
  title: "How to Recover Unpaid Salary from Employer Legally in India (Samadhan, Notice & Sec 33C)",
  description: "Employer not paying salary after resignation or during employment? Step-by-step guide to serving an Advocate Legal Notice, filing on the Samadhan Portal, and Order 37 Summary Suits.",
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
    title: "How to Recover Unpaid Salary from Employer Legally in India (Samadhan, Notice & Sec 33C)",
    description: "Recover unpaid salary, incentives, and F&F settlement via Advocate Legal Notice, Samadhan Portal, and Labour Court.",
    url: "https://www.legalrecovery.in/how-to-recover-unpaid-salary-legally",
    type: "article",
  },
};

export default function HowToRecoverSalaryPage() {
  return <SalaryRecoveryGuideClient />;
}
