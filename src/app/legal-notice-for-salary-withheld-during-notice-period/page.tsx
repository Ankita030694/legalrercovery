import { Metadata } from "next";
import NoticePeriodSalaryClient from "./NoticePeriodSalaryClient";

export const metadata: Metadata = {
  title: "Salary Withheld Meaning: Can a Company Hold Your Pay?",
  description: "What 'salary withheld' means, whether an employer can hold your pay during the notice period, and how to get withheld salary released.",
  keywords: [
    "salary withheld meaning",
    "employer withheld notice period salary",
    "can employer hold salary during notice period",
    "legal notice for notice period salary held",
    "salary on hold during notice period india",
    "notice period salary delay legal remedy"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-for-salary-withheld-during-notice-period",
  },
  openGraph: {
    title: "Salary Withheld Meaning: Can a Company Hold Your Pay?",
    description: "What 'salary withheld' means, whether an employer can hold your pay during the notice period, and how to get withheld salary released.",
    url: "https://www.legalrecovery.in/legal-notice-for-salary-withheld-during-notice-period",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Salary Withheld Meaning: Can a Company Hold Your Pay?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Withheld Meaning: Can a Company Hold Your Pay?",
    description:
      "What 'salary withheld' means, whether an employer can hold your pay during the notice period, and how to get withheld salary released.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function NoticePeriodSalaryPage() {
  return <NoticePeriodSalaryClient />;
}
