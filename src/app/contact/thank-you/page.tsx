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
  robots: {
    index: false,
    follow: false,
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
        <p className="mb-6 max-w-2xl text-sm font-semibold leading-relaxed text-[#6B7280] sm:text-base">
          Our legal experts will review your details and contact you within 24
          hours.
        </p>

        <div className="my-6 w-full border-t border-slate-100 pt-6 text-left">
          <h2 className="mb-5 text-center text-lg font-bold text-slate-900 sm:text-xl">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#DC2626]/10 text-xs font-black text-[#DC2626]">
                1
              </span>
              <h3 className="mb-1 text-sm font-bold text-slate-900">Case Review</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our legal team reviews your dispute facts and submitted details.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#DC2626]/10 text-xs font-black text-[#DC2626]">
                2
              </span>
              <h3 className="mb-1 text-sm font-bold text-slate-900">Advocate Connect</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                A specialist advocate reaches out via call or WhatsApp within 24 hours.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#DC2626]/10 text-xs font-black text-[#DC2626]">
                3
              </span>
              <h3 className="mb-1 text-sm font-bold text-slate-900">Recovery Action</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Drafting &amp; dispatch of formal legal notice to recover your dues.
              </p>
            </div>
          </div>
        </div>

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

