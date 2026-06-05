import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy – Legal Recovery India",
  },
  description:
    "Read how Legal Recovery collects, uses, stores, and protects your personal information and claim documents on legalrecovery.in.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
