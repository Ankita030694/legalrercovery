import React from "react";
import Link from "next/link";

interface InfluencerNoticeCTAProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function InfluencerNoticeCTA({
  heading = "Recover Overdue Brand Campaign Invoices & Stop Unauthorized Ad Boosting",
  description = "Don't let enterprise brands and media agencies freeze your working capital after creators have posted. Enforce statutory copyright revocation, 3x MSMED compound interest, and swift legal notice recovery in 72 hours.",
  buttonText = "Issue Campaign Recovery Notice (₹999)",
  buttonHref = "/user/new-recovery",
  secondaryText = "Bulk Roster Recovery (10–500+ Cases)",
  secondaryHref = "/bulk-recovery-cases-all-in-one-affordable-solutions",
}: InfluencerNoticeCTAProps) {
  return (
    <div className="w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl border border-slate-700/80 p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-red-800/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/60 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          Institutional B2B Media Recovery Rail
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
          {heading}
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mb-6 font-normal">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-900/30 transition transform hover:-translate-y-0.5"
          >
            <span>{buttonText}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 text-xs sm:text-sm font-semibold transition"
          >
            <span>{secondaryText}</span>
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-700/60 flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Advocate-Drafted under Copyright & MSMED Acts</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Delivered via Speed Post RPAD + Legal Email + WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>89.4% Pre-Litigation Campaign Settlement Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
