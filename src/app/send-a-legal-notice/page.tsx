import { Metadata } from "next";
import SendALegalNoticeClient from "./SendALegalNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice Categories & Statutory Directory in India (CPC, NI Act & Consumer)",
  description: "Browse 40+ specialized legal notice categories in India—salary & FNF recovery, consumer refunds, tenant eviction, banking disputes & B2B dues under Sec 80 CPC & Sec 138 NI Act.",
  keywords: [
    "send a legal notice categories",
    "types of legal notice in india",
    "cpc section 80 notice",
    "cheque bounce notice section 138",
    "tenant notice section 106 tpa",
    "pre litigation legal notice directory",
    "consumer protection act legal notice",
    "employment dispute legal notice categories"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-a-legal-notice',
  },
  openGraph: {
    title: "Legal Notice Categories & Statutory Directory in India (CPC, NI Act & Consumer)",
    description: "Browse 40+ specialized legal notice categories in India—salary recovery, consumer refunds, tenant eviction, banking disputes & B2B dues.",
    url: "https://www.legalrecovery.in/send-a-legal-notice",
    type: "website",
  },
};

export default function SendALegalNoticePage() {
  return <SendALegalNoticeClient />;
}
