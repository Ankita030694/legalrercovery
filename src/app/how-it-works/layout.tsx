import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "How Legal Recovery Works | Recover Money in Simple Steps",
  },
  description:
    "Upload proof, start your claim, and recover money legally through structured legal notices, claim escalation, and dispute resolution support in India.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
