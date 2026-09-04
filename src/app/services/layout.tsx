import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Legal Recovery Services | Salary, Invoice & Refund Claims",
  },
  description:
    "Explore legal recovery services for unpaid salary, refunds, deposits, vendor invoices, freelancer dues, and consumer complaints across India.",
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
