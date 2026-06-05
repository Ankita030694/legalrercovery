import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions – Legal Recovery India",
  },
  description:
    "Terms and conditions for using Legal Recovery’s legal-tech platform, claim submission, notices, and dispute escalation services in India.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
