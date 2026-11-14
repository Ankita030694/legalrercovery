"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function RbiComplianceCTA() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const testPrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div
        id="dual-track-cta"
        className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 shadow-xl border border-slate-800"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
            Dual-Track NBFC &amp; LSP Onboarding Desk
          </span>
          <span className="text-xs font-semibold text-emerald-400">
            100% RBI-Audit Safe &bull; Advocates Act 1961 Letterhead
          </span>
        </div>

        <p className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
          Test 1 Live Overdue Case (₹{testPrice}) or Migrate 10–10,000+ Accounts via CSV
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Replace high-risk telecalling agencies with Advocate-drafted statutory notices. Pilot a
          single 30–90 DPD loan account today, or onboard your NBFC / LSP portfolio through our
          centralized CSV dispatch and Representee Mandate Vault.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                  Track 01 &bull; Self-Serve Pilot
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                  ₹{testPrice} / Case
                </span>
              </div>
              <p className="text-base font-bold text-white mb-2">
                Test 1 Live Overdue Case Now
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Advocate-drafted demand or PSS s.25 notice dispatched across Email + WhatsApp + Speed
                Post RPAD with BSA 2023 s.63 timestamped logs and zero harassment risk.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
              >
                Start ₹{testPrice} Live Test &rarr;
              </button>
              <Link
                href="/user/new-recovery"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
              >
                Open Recovery Form
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise CSV Batch */}
          <div className="rounded-xl bg-white/5 border border-emerald-500/30 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  Track 02 &bull; Institutional Desk
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                  10 – 10,000+ Cases
                </span>
              </div>
              <p className="text-base font-bold text-white mb-2">
                Bulk CSV Notice Dispatch &amp; Representees Vault
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Upload 10 to 10,000+ delinquent accounts via CSV, map Board Resolutions and
                Authorised Signatory POAs per NBFC/LSP entity, and track pan-India RPAD + ODR
                replies.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
              >
                Upload CSV Batch &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
              >
                Representees Vault
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
