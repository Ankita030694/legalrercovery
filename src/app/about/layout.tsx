import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Legal Recovery | Consumer Claims & Money Recovery",
  },
  description:
    "Learn how Legal Recovery helps recover stuck money, refunds, salaries, deposits, and unpaid dues through affordable legal escalation and technology.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
