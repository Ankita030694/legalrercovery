import { Metadata } from "next";
import FreelancerForumClient from "./FreelancerForumClient";

export const metadata: Metadata = {
  title: "Can a Freelancer File in Consumer or Civil Court?",
  description: "Guide for Indian freelancers on payment recovery. Learn why Consumer Courts exclude B2B claims and how Order 37 Summary Suits and MSME Samadhaan help.",
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
    canonical: 'https://www.legalrecovery.in/can-a-freelancer-file-a-case-in-a-consumer-forum-or-civil-court-to-recover-payment-in-india',
  },
};

export default function FreelancerForumPage() {
  return <FreelancerForumClient />;
}
