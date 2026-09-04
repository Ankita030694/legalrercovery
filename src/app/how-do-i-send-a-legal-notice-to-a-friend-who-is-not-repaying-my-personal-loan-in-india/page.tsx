import { Metadata } from "next";
import FriendNoticeClient from "./FriendNoticeClient";

export const metadata: Metadata = {
  title: "How to Send a Legal Notice to a Friend for Personal Loan?",
  description: "Guide on sending a legal notice to a friend in India for an unpaid personal loan. Understand drafting rules, evidence checklists, and legal remedies.",
  keywords: [
    "send legal notice to friend for money recovery",
    "legal notice for personal loan recovery",
    "advocate notice for friendly loan india",
    "money recovery without loan agreement",
    "interest act 1978 personal loan",
    "how to serve legal notice to friend",
    "electronic evidence whatsApp friendly loan",
    "section 63 bsa certificate money recovery",
    "order 37 cpc summary suit personal loan",
    "negotiable instruments act section 138 cheque"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-do-i-send-a-legal-notice-to-a-friend-who-is-not-repaying-my-personal-loan-in-india',
  },
};

export default function FriendNoticePage() {
  return <FriendNoticeClient />;
}
