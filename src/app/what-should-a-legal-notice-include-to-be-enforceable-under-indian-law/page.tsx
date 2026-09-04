import { Metadata } from "next";
import EnforceableNoticeClient from "./EnforceableNoticeClient";

export const metadata: Metadata = {
  title: "What Should a Legal Notice Include in India? Checklist",
  description: "Learn the essential components, statutory citations, and delivery rules required to make a legal notice legally binding and enforceable in India.",
  keywords: [
    "legal notice requirements india",
    "what should a legal notice include",
    "enforceable legal notice checklist",
    "section 80 cpc legal notice",
    "section 138 ni act notice drafting",
    "digital legal notice validity",
    "section 63 bsa certificate",
    "legal notice for breach of contract",
    "general clauses act section 27",
    "how to draft a legal notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/what-should-a-legal-notice-include-to-be-enforceable-under-indian-law',
  },
};

export default function EnforceableNoticePage() {
  return <EnforceableNoticeClient />;
}
