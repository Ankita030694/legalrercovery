import { Metadata } from "next";
import DelayedWagesClient from "./DelayedWagesClient";

export const metadata: Metadata = {
  title: "Delayed Salary Recovery in India | LegalRecovery",
  description: "Employer delaying monthly wages in India? Learn about your rights under Payment of Wages Act, late salary interest rules, and legal notice procedures.",
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
