import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Legal Recovery Blog | Money Recovery & Consumer Rights",
  },
  description:
    "Read expert legal tips on recovering money, unpaid salary, refunds, consumer complaints, security deposits, freelancer payments, and legal rights in India.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
