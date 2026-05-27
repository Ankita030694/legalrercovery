import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Legal Recovery – India's Consumer Claims & Legal Recovery Platform",
  },
  description:
    "Learn how Legal Recovery helps individuals and businesses recover stuck money, refunds, salaries, deposits, and unpaid dues through affordable legal escalation and technology.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
