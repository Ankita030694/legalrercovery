import { Metadata } from "next";
import LegalNoticeSalaryClient from "./LegalNoticeSalaryClient";

export const metadata: Metadata = {
  title: "Can I Send a Legal Notice to My Employer for Not Paying My Salary?",
  description: "Learn how to send a legal notice to your employer for unpaid salary or FNF dues in India. Explore draft requirements, delivery protocols, and next steps.",
  keywords: [
    "send legal notice to employer for unpaid salary",
    "how to send legal notice to company for salary",
    "unpaid salary legal notice process india",
    "legal notice format for salary recovery",
    "legal action for salary default",
    "advocate notice for withheld salary",
    "labor laws salary recovery notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/can-i-send-a-legal-notice-to-my-employer-for-not-paying-my-salary-and-how-does-it-work',
  },
};

export default function LegalNoticeSalaryPage() {
  return <LegalNoticeSalaryClient />;
}
