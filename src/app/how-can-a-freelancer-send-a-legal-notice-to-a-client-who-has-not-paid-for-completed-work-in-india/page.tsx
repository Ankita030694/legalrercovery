import { Metadata } from "next";
import FreelancerNoticeClient from "./FreelancerNoticeClient";

export const metadata: Metadata = {
  title: "How Freelancers Send a Legal Notice for Unpaid Work",
  description: "Guide for freelancers in India to draft and send an enforceable legal notice to non-paying clients. Learn evidence audits and speed post rules.",
  keywords: [
    "how to send legal notice freelancer",
    "unpaid work legal notice client",
    "legal notice draft for freelancer",
    "how to sue client for unpaid work",
    "digital notice service whatsapp email",
    "section 63 bsa certificate freelance",
    "indian contract act section 70 notice",
    "registered speed post legal notice",
    "piercing corporate veil directors freelance",
    "freelancer nonpayment recovery guide"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-can-a-freelancer-send-a-legal-notice-to-a-client-who-has-not-paid-for-completed-work-in-india',
  },
};

export default function FreelancerNoticePage() {
  return <FreelancerNoticeClient />;
}
