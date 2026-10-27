import { Metadata } from "next";
import ChequeBounceTimelineClient from "./ChequeBounceTimelineClient";

export const metadata: Metadata = {
  title: "Cheque Bounce Notice Timeline (Sec 138 NI Act): 30-Day Notice & 15-Day Payment Rule",
  description: "Cheque bounce hone ke kitne din baad notice dena chahiye? Exact Section 138 NI Act timeline: 30 days from Bank Return Memo to send Legal Notice + 15 days for payment + 30 days to file court case.",
  keywords: [
    "cheque bounce notice timeline",
    "चेक बाउंस होने के कितने दिन बाद नोटिस देना चाहिए",
    "cheque bounce hone ke kitne din baad notice dena chahiye",
    "section 138 notice period 15 days 30 days",
    "cheque bounce case filing time limit",
    "negotiable instruments act timelines india",
    "cheque bounce grace period"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138',
  },
  openGraph: {
    title: "Cheque Bounce Notice Timeline (Sec 138 NI Act): 30-Day Notice & 15-Day Payment Rule",
    description: "Exact statutory deadlines under Section 138 NI Act: 30 days to dispatch Legal Notice after return memo, 15 days to pay, and 30 days to file complaint.",
    url: "https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138",
    type: "article",
  },
};

export default function ChequeBounceTimelinePage() {
  return <ChequeBounceTimelineClient />;
}
