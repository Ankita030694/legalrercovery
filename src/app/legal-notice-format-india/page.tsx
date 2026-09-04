import { Metadata } from "next";
import LegalNoticeFormatClient from "./LegalNoticeFormatClient";

export const metadata: Metadata = {
  title: "Legal Notice Format in India: Draft & Checklist",
  description: "Download a valid legal notice format in India. Learn how to write a notice, essential drafting rules under CPC, and money recovery notice guidelines.",
  keywords: [
    "legal notice format india pdf",
    "legal notice format for recovery of money",
    "how to write a legal notice in india",
    "legal notice draft format",
    "indian legal notice draft"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-format-india",
  },
};

export default function LegalNoticeFormatPage() {
  return <LegalNoticeFormatClient />;
}
