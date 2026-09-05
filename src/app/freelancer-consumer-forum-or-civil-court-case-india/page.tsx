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
};

export default function FreelancerForumPage() {
  return <FreelancerForumClient />;
}
