import { Metadata } from "next";
import FreelancerForumClient from "./FreelancerForumClient";

export const metadata: Metadata = {
  title: "Can a Freelancer File in Consumer or Civil Court?",
  description: "Freelancer payment recovery guide in India. Learn legal remedies, Order 37 summary suits, and MSME Samadhaan options to recover dues.",
  keywords: [
    "freelancer consumer court india",
    "can freelancer file consumer court",
    "freelancer money recovery suit",
    "order 37 summary suit freelancer",
    "msme samadhaan for freelancers",
    "unpaid freelancer payments india",
    "section 63 bsa certificate electronic evidence",
    "legal notice for unpaid freelance work",
    "quantum meruit section 70 freelance",
    "civil court freelancer recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/freelancer-consumer-forum-or-civil-court-case-india',
  },
  openGraph: {
    title: "Can a Freelancer File in Consumer or Civil Court?",
    description: "Freelancer payment recovery guide in India. Learn legal remedies, Order 37 summary suits, and MSME Samadhaan options to recover dues.",
    url: "https://www.legalrecovery.in/freelancer-consumer-forum-or-civil-court-case-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Can a Freelancer File in Consumer or Civil Court?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can a Freelancer File in Consumer or Civil Court?",
    description: "Freelancer payment recovery guide in India. Learn legal remedies, Order 37 summary suits, and MSME Samadhaan options to recover dues.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FreelancerForumPage() {
  return <FreelancerForumClient />;
}
