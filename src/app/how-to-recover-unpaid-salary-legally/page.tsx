import { Metadata } from "next";
import SalaryRecoveryGuideClient from "./SalaryRecoveryGuideClient";

export const metadata: Metadata = {
  title: "How to Recover Unpaid Salary Legally in India: Guide",
  description: "Legal guide on recovering unpaid salary, FNF settlements, and delayed wages in India. Learn about labour departments, summary suits, and legal notices.",
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
};

export default function HowToRecoverSalaryPage() {
  return <SalaryRecoveryGuideClient />;
}
