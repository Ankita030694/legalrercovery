import { Metadata } from "next";
import EmployerWithholdingClient from "./EmployerWithholdingClient";

export const metadata: Metadata = {
  title: "Legal Action Against Employer for Not Giving Relieving Letter & Experience Certificate",
  description: "Company withholding your relieving letter, experience certificate, or F&F after resignation? Serve an Advocate Legal Notice and file a Labour Commissioner complaint to force release in 7–15 days.",
  keywords: [
    "legal action against employer for not giving relieving letter",
    "withholding relieving letter",
    "employer holding relieving letter",
    "company not giving relieving letter and experience certificate",
    "labour court legal notice",
    "unpaid salary recovery",
    "labour commissioner complaint"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/employer-withholding-relieving-letter-legal-action',
  },
  openGraph: {
    title: "Legal Action Against Employer for Not Giving Relieving Letter & Experience Certificate",
    description: "Force your employer to release a withheld relieving letter, experience certificate, and F&F settlement via Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/employer-withholding-relieving-letter-legal-action",
    type: "article",
  },
};

export default function EmployerWithholdingPage() {
  return <EmployerWithholdingClient />;
}
