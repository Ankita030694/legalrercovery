import { Metadata } from "next";
import InteriorDesignerRefundClient from "./InteriorDesignerRefundClient";

export const metadata: Metadata = {
  title: "Legal Notice to Interior Designer or Renovation Contractor for Incomplete Work",
  description: "Learn how to send a legal notice to interior designer for incomplete work. Recover advance payments and claim damages for abandoned or delayed home renovation disputes.",
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
