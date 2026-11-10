import { Metadata } from "next";
import LegalNoticeSalaryClient from "./LegalNoticeSalaryClient";

export const metadata: Metadata = {
  title: "Can I Send a Legal Notice to Employer for Salary?",
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
  openGraph: {
    title: "Can I Send a Legal Notice to Employer for Salary?",
    description: "Learn how to send a legal notice to your employer for unpaid salary or FNF dues in India. Explore draft requirements, delivery protocols, and next steps.",
    url: "https://www.legalrecovery.in/can-i-send-a-legal-notice-to-my-employer-for-not-paying-my-salary-and-how-does-it-work",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Can I Send a Legal Notice to Employer for Salary?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can I Send a Legal Notice to Employer for Salary?",
    description: "Learn how to send a legal notice to your employer for unpaid salary or FNF dues in India. Explore draft requirements, delivery protocols, and next steps.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function LegalNoticeSalaryPage() {
  return <LegalNoticeSalaryClient />;
}
