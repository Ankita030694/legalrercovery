import { Metadata } from "next";
import InteriorDesignerRefundClient from "./InteriorDesignerRefundClient";

export const metadata: Metadata = {
  title: "Legal Notice to Interior Designer for Incomplete Work",
  description: "Send a legal notice to an interior designer for incomplete work. Recover advance payments and claim damages for delayed home renovations in India.",
  keywords: [
    "legal notice to interior designer for incomplete work",
    "recover money from defaulting interior contractor",
    "consumer complaint against home renovation contractor",
    "interior decorator refund dispute"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-interior-designer-contractor-refund",
  },
};

export default function InteriorDesignerRefundPage() {
  return <InteriorDesignerRefundClient />;
}
