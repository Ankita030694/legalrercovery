import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Legal Recovery Services | Salary, Invoice & Refund Claims",
  },
  description:
    "Explore legal recovery services for unpaid salary, refunds, security deposits, vendor payments, freelancer dues, airline claims, and consumer complaints across India.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
