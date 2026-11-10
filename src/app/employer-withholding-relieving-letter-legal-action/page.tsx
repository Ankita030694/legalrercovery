import { Metadata } from "next";
import EmployerWithholdingClient from "./EmployerWithholdingClient";

export const metadata: Metadata = {
  title: "Employer Not Giving Relieving Letter? Legal Action Steps",
  description: "Company holding back your relieving or experience letter after resignation? When that's unlawful, what to send HR and when to issue a legal notice.",
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
    title: "Employer Not Giving Relieving Letter? Legal Action Steps",
    description: "Company holding back your relieving or experience letter after resignation? When that's unlawful, what to send HR and when to issue a legal notice.",
    url: "https://www.legalrecovery.in/employer-withholding-relieving-letter-legal-action",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Employer Not Giving Relieving Letter? Legal Action Steps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Employer Not Giving Relieving Letter? Legal Action Steps",
    description:
      "Company holding back your relieving or experience letter after resignation? When that's unlawful, what to send HR and when to issue a legal notice.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function EmployerWithholdingPage() {
  return <EmployerWithholdingClient />;
}
