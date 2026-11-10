import { Metadata } from "next";
import SchoolFeeRefundClient from "./SchoolFeeRefundClient";

export const metadata: Metadata = {
  title: "Private School Refusing Fee Refund? Recover Money",
  description: "Private school not refunding admission fees or caution deposit? Get expert legal assistance to recover school fees under RTE Act and consumer law.",
  keywords: [
    "school fee refund India",
    "private school admission cancellation refund",
    "school not refunding fees consumer court",
    "capitation fee refund RTE Act",
    "school caution deposit refund",
    "transfer certificate withheld fee recovery",
    "CBSE school fee refund",
    "school development fee refund India",
    "mid session withdrawal school refund",
    "school fee recovery legal notice India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/school-fee-refund',
  },
  openGraph: {
    title: "Private School Refusing Fee Refund? Recover Money",
    description: "Private school not refunding admission fees or caution deposit? Get expert legal assistance to recover school fees under RTE Act and consumer law.",
    url: "https://www.legalrecovery.in/recovery/school-fee-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Private School Refusing Fee Refund? Recover Money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private School Refusing Fee Refund? Recover Money",
    description: "Private school not refunding admission fees or caution deposit? Get expert legal assistance to recover school fees under RTE Act and consumer law.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function SchoolFeeRefundPage() {
  return <SchoolFeeRefundClient />;
}
