import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact Legal Recovery | Recover Your Money Legally",
  },
  description:
    "Need help recovering unpaid money, refunds, salary, or consumer claims? Contact Legal Recovery and start your legal claim process online today.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
