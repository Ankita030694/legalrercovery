import { Metadata } from "next";
import WhatToDoClient from "./WhatToDoClient";

export const metadata: Metadata = {
  title: "What Happens If a Legal Notice Is Ignored or Not Received in India? (Next Steps)",
  description: "Debtor ignored, refused, or didn't receive your legal notice or court summons? Learn Section 27 General Clauses Act 'Deemed Service', Order 37 Summary Suit & Ex-Parte Decree rules.",
  keywords: [
    "what to do if legal notice is ignored in india",
    "what happens if a legal notice is not received",
    "what happens when civil court notice is not received",
    "what happens when court notice is not received",
    "ignored legal notice next steps",
    "deemed service of legal notice section 27 general clauses act",
    "Order 37 CPC summary suit India",
    "ex parte decree money recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/what-to-do-if-legal-notice-is-ignored-india',
  },
  openGraph: {
    title: "What Happens If a Legal Notice Is Ignored or Not Received in India? (Next Steps)",
    description: "Debtor ignored, refused, or didn't receive your legal notice or court summons? Learn Section 27 Deemed Service, Order 37 Summary Suit & Ex-Parte Decree steps.",
    url: "https://www.legalrecovery.in/what-to-do-if-legal-notice-is-ignored-india",
    type: "article",
  },
};

export default function WhatToDoIfLegalNoticeIsIgnoredPage() {
  return <WhatToDoClient />;
}
