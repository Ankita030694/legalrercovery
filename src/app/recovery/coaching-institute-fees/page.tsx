import { Metadata } from "next";
import CoachingInstituteFeesClient from "./CoachingInstituteFeesClient";

export const metadata: Metadata = {
  title: "Coaching Institute Not Refunding Fees? Recover Your Tuition | LegalRecovery",
  description: "Coaching institute or edtech platform refusing to refund your fees? LegalRecovery provides expert legal-tech assistance to recover tuition fees, fight unfair no-refund clauses, and hold coaching centres accountable under CCPA guidelines and consumer law.",
  keywords: [
    "coaching institute fee refund India",
    "coaching centre refund consumer court",
    "coaching not refunding fees",
    "CCPA guidelines coaching sector refund",
    "IIT JEE coaching refund",
    "NEET coaching fee recovery",
    "edtech fee refund India",
    "Byju's refund consumer complaint",
    "coaching fee recovery legal notice",
    "tuition fee refund consumer protection act"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/coaching-institute-fees',
  },
};

export default function CoachingInstituteFeesPage() {
  return <CoachingInstituteFeesClient />;
}
