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
    canonical: 'https://www.legalrecovery.in/how-freelancer-can-send-legal-notice-to-client-india',
  },
  openGraph: {
    title: "How Freelancers Send a Legal Notice for Unpaid Work",
    description: "Guide for freelancers in India to draft and send an enforceable legal notice to non-paying clients. Learn evidence audits and speed post rules.",
    url: "https://www.legalrecovery.in/how-freelancer-can-send-legal-notice-to-client-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "How Freelancers Send a Legal Notice for Unpaid Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Freelancers Send a Legal Notice for Unpaid Work",
    description: "Guide for freelancers in India to draft and send an enforceable legal notice to non-paying clients. Learn evidence audits and speed post rules.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FreelancerNoticePage() {
  return <FreelancerNoticeClient />;
}
