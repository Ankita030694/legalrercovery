import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Legal Recovery",
  description:
    "Thank you for submitting your case details. Our legal recovery experts will review your details and contact you within 24 hours.",
  alternates: {
    canonical: "https://www.legalrecovery.in/contact/thank-you",
  },
};

export default function ContactThankYouPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-20 sm:px-6 md:px-12 lg:px-16">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center rounded-3xl border border-[#E5E7EB] bg-white p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.015)] sm:p-12">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-md shadow-emerald-100">
          <CheckCircle className="h-10 w-10" />
        </div>

        <h1 className="mb-4 text-2xl font-black text-[#111827] sm:text-3xl">
          Thank You! Case Submission Received
        </h1>
        <p className="mb-8 max-w-2xl text-sm font-semibold leading-relaxed text-[#6B7280] sm:text-base">
          Our legal experts will review your details and contact you within 24
          hours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#DC2626] px-6 py-3 text-xs font-black text-white transition-all hover:bg-[#B91C1C] sm:text-sm"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-[#E5E7EB] bg-white px-6 py-3 text-xs font-black text-[#374151] transition-colors hover:text-[#111827] sm:text-sm"
          >
            Submit Another Request
          </Link>
        </div>
      </section>
    </main>
  );
}

