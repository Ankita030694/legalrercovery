import { Metadata } from "next";
import CollegeFeeRefundClient from "./CollegeFeeRefundClient";

export const metadata: Metadata = {
  title: "College Fee Refund After Admission Cancellation: UGC Rule",
  description: "Withdrew your admission and the college won't refund fees or return certificates? What the UGC refund rules say and how to get your money back.",
  keywords: [
    "college fee refund India",
    "university admission cancellation refund",
    "UGC fee refund guidelines 2026",
    "UGC 100 percent fee refund rule",
    "AICTE college fee refund",
    "college not returning original certificates",
    "college migration fee refund",
    "engineering college fee refund consumer court",
    "deemed university fee recovery India",
    "UGC e-Samadhan portal fee refund",
    "college admission withdrawal refund legal notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/college-fee-refund',
  },
  openGraph: {
    title: "College Fee Refund After Admission Cancellation: UGC Rule",
    description: "Withdrew your admission and the college won't refund fees or return certificates? What the UGC refund rules say and how to get your money back.",
    url: "https://www.legalrecovery.in/recovery/college-fee-refund",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "College Fee Refund After Admission Cancellation: UGC Rule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "College Fee Refund After Admission Cancellation: UGC Rule",
    description:
      "Withdrew your admission and the college won't refund fees or return certificates? What the UGC refund rules say and how to get your money back.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function CollegeFeeRefundPage() {
  return <CollegeFeeRefundClient />;
}
