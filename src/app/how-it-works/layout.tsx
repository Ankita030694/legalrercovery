import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "How Legal Recovery Works | Recover Money in Simple Steps",
  },
  description:
    "Upload proof, start your claim, and recover your money legally through structured legal notices, claim escalation, and professional dispute resolution support.",
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
