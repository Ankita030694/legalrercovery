import { Metadata } from "next";
import DelayedWagesClient from "./DelayedWagesClient";

export const metadata: Metadata = {
  title: "Delayed Salary Recovery & Late Payment Penalty | LegalRecovery",
  description: "Is your employer delaying your monthly wages or salary in India? Learn about your legal rights under the Payment of Wages Act, late salary interest, and legal notices.",
  keywords: [
    "delayed wages recovery India",
    "late salary payment legal notice",
    "interest on delayed wages",
    "payment of wages act timelines",
    "employer delayed salary penalty",
    "legal action for late salary India",
    "labor court complaint delayed wages",
    "Section 15 Payment of Wages Act claim",
    "employee rights delayed salary",
    "corporate wage delay advocate notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/delayed-wages',
  },
};

export default function DelayedWagesPage() {
  return <DelayedWagesClient />;
}
