import { Metadata } from "next";
import ChequeBounceTimelineClient from "./ChequeBounceTimelineClient";

export const metadata: Metadata = {
  title: "Cheque Bounce Notice Timeline (Sec 138) | Recovery",
  description: "Guide to calculating the 15-day notice period and 30-day filing deadlines for a Section 138 NI Act cheque bounce case in India. Settle dues legally.",
  keywords: [
    "cheque bounce notice timeline",
    "section 138 notice period",
    "cheque bounce case filing time limit",
    "negotiable instruments act timelines india",
    "cheque bounce grace period"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138',
  },
};

export default function ChequeBounceTimelinePage() {
  return <ChequeBounceTimelineClient />;
}
