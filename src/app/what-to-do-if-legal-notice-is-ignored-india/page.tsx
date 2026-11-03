import { Metadata } from "next";
import WhatToDoClient from "./WhatToDoClient";

export const metadata: Metadata = {
  title: "Legal Notice Ignored, Refused or Not Received? What Next",
  description: "Refusing a legal notice doesn't stop the case: refused or unclaimed post can count as served. What happens next and how a recovery suit proceeds.",
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
    title: "Legal Notice Ignored, Refused or Not Received? What Next",
    description: "Refusing a legal notice doesn't stop the case: refused or unclaimed post can count as served. What happens next and how a recovery suit proceeds.",
    url: "https://www.legalrecovery.in/what-to-do-if-legal-notice-is-ignored-india",
    type: "article",
  },
};

export default function WhatToDoIfLegalNoticeIsIgnoredPage() {
  return <WhatToDoClient />;
}
