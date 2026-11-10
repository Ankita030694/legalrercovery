import { Metadata } from "next";
import DelayedWagesClient from "./DelayedWagesClient";

export const metadata: Metadata = {
  title: "Salary Delayed This Month? Late Salary Law in India",
  description: "Salary late again? Under the Code on Wages, monthly wages are due by the 7th of the next month. What counts as a delay and how to claim your pay.",
  keywords: [
    "salary delay",
    "late salary payment law india",
    "why salary is late this month",
    "delayed salary",
    "salary delayed legal action",
    "delayed wages recovery India",
    "late salary payment legal notice",
    "interest on delayed wages",
    "payment of wages act timelines",
    "employer delayed salary penalty",
    "Section 15 Payment of Wages Act claim"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/delayed-wages',
  },
  openGraph: {
    title: "Salary Delayed This Month? Late Salary Law in India",
    description: "Salary late again? Under the Code on Wages, monthly wages are due by the 7th of the next month. What counts as a delay and how to claim your pay.",
    url: "https://www.legalrecovery.in/recovery/delayed-wages",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Salary Delayed This Month? Late Salary Law in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Delayed This Month? Late Salary Law in India",
    description:
      "Salary late again? Under the Code on Wages, monthly wages are due by the 7th of the next month. What counts as a delay and how to claim your pay.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function DelayedWagesPage() {
  return <DelayedWagesClient />;
}
