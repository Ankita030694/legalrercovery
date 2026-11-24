"use client";

import React from "react";
import Link from "next/link";

interface PitchTheftNoticeCTAProps {
  agencyType?: string;
}

export default function PitchTheftNoticeCTA({
  agencyType = "Creative, Branding & Digital Agencies",
}: PitchTheftNoticeCTAProps) {
  return (
    <div className="w-full my-8 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-700 shadow-xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/80 mb-4">
          Statutory Injunction & Pitch Fee Notice Rail
        </span>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
          Did a Brand Execute Your Pitch Deck Without Paying a Rupee?
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Stop writing passive follow-up emails to procurement heads who have already sent your storyboard to an internal production team. Under the landmark precedent of{" "}
          <strong className="text-white">Zee Telefilms v. Sundial Communications</strong> and{" "}
          <strong className="text-white">Section 51 of the Copyright Act, 1957</strong>, brands have no legal right to exploit unremunerated agency proposals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <span className="text-[11px] font-bold text-red-400 block mb-1 uppercase tracking-wider">
              Single Incident Action
            </span>
            <p className="text-xs text-slate-200 mb-3">
              Draft and serve a formal Advocate Cease & Desist with frame-by-frame comparison and rendition of accounts claim.
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-xs font-bold text-white">₹999 / Single Notice</span>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Draft Notice Now
              </Link>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <span className="text-[11px] font-bold text-emerald-400 block mb-1 uppercase tracking-wider">
              Agency Retainer & Multi-Client Ledger
            </span>
            <p className="text-xs text-slate-200 mb-3">
              Recover unpaid pitch fees, retainer defaults, kill fees, and production advances across 10 to 10,000 corporate clients.
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-xs font-bold text-white">Bulk Institutional Suite</span>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg border border-slate-600 transition-colors"
              >
                Upload CSV Batch
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            BSA 2023 s.63 Timestamp Compliant
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Verified Bombay & Delhi High Court Precedents
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Same-Day Fact-Verified Notice Dispatch
          </span>
        </div>
      </div>
    </div>
  );
}
