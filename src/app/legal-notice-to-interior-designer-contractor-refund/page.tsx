import { Metadata } from "next";
import InteriorDesignerRefundClient from "./InteriorDesignerRefundClient";

export const metadata: Metadata = {
  title: "Legal Notice to Interior Designer or Home Contractor for Refund & Incomplete Work",
  description: "Interior designer or renovation contractor abandoned work, delayed handover, or used substandard materials? Serve a Consumer Protection Act Legal Notice for advance refund + damages.",
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
    title: "Legal Notice to Interior Designer or Home Contractor for Refund & Incomplete Work",
    description: "Recover advance payments and claim compensation from defaulting interior designers or contractors via Legal Notice & Consumer Court.",
    url: "https://www.legalrecovery.in/legal-notice-to-interior-designer-contractor-refund",
    type: "article",
  },
};

export default function InteriorDesignerRefundPage() {
  return <InteriorDesignerRefundClient />;
}
