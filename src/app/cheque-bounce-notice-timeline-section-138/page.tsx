import { Metadata } from "next";
import ChequeBounceTimelineClient from "./ChequeBounceTimelineClient";

export const metadata: Metadata = {
  title: "Cheque Bounce Notice Period: 30-Day Rule (कितने दिन में)",
  description: "चेक बाउंस के बाद नोटिस कितने दिन में? Send the Section 138 notice within 30 days of the bank's return memo; the drawer then gets 15 days to pay.",
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
    canonical: "https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138",
    languages: {
      "en-IN": "https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138",
      "hi-IN": "https://www.legalrecovery.in/hi/cheque-bounce-notice-kitne-din-mein",
      "x-default": "https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138",
    },
  },
  openGraph: {
    title: "Cheque Bounce Notice Period: 30-Day Rule (कितने दिन में)",
    description: "चेक बाउंस के बाद नोटिस कितने दिन में? Send the Section 138 notice within 30 days of the bank's return memo; the drawer then gets 15 days to pay.",
    url: "https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138",
    type: "article",
  },
};

export default function ChequeBounceTimelinePage() {
  return <ChequeBounceTimelineClient />;
}
