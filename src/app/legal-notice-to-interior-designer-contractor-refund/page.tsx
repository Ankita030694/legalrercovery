import { Metadata } from "next";
import InteriorDesignerRefundClient from "./InteriorDesignerRefundClient";

export const metadata: Metadata = {
  title: "Interior Designer Took Money, Work Incomplete? Get Refund",
  description: "Interior designer or contractor abandoned the work, delayed handover or used poor material? How to recover your advance and claim compensation.",
  keywords: [
    "legal notice to interior designer for incomplete work",
    "consumer complaints interior contracts rejection reasons india",
    "recover money from defaulting interior contractor",
    "consumer complaint against home renovation contractor",
    "interior decorator refund dispute"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-interior-designer-contractor-refund",
  },
  openGraph: {
    title: "Interior Designer Took Money, Work Incomplete? Get Refund",
    description: "Interior designer or contractor abandoned the work, delayed handover or used poor material? How to recover your advance and claim compensation.",
    url: "https://www.legalrecovery.in/legal-notice-to-interior-designer-contractor-refund",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer Took Money, Work Incomplete? Get Refund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designer Took Money, Work Incomplete? Get Refund",
    description:
      "Interior designer or contractor abandoned the work, delayed handover or used poor material? How to recover your advance and claim compensation.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function InteriorDesignerRefundPage() {
  return <InteriorDesignerRefundClient />;
}
