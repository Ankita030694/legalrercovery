"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function NbfcHubCTA() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const testPrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <div
      id="dual-track-cta"
      className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 shadow-xl border border-slate-800"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
          Dual-Track Creditor Onboarding Desk
        </span>
        <span className="text-xs font-semibold text-emerald-400">
          Zero SaaS Seat Lock-In • Advocates Act 1961 Letterhead
        </span>
      </div>

      <p className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
        Test With 1 Live Loan Account (₹{testPrice}) or Onboard Your CSV Bucket
      </p>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
        Mid-market NBFCs, fintechs, HFCs, and MFIs do not need six-month IT procurements to switch
        from call centers to enforceable advocate notices. Validate our{" "}
        <code className="px-1.5 py-0.5 rounded bg-slate-800 text-red-300 text-xs">
          loan-recovery
        </code>{" "}
        engine on a single defaulted file first, or upload multi-entity representee mandates for batch
        dispatch.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Track 1: Single Case Test */}
        <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                Track 01 • Pilot Test
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                ₹{testPrice} / Account
              </span>
            </div>
            <p className="text-base font-bold text-white mb-2">
              Single Loan Recall or PSS s.25 Notice Trial
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Enter Disbursed Amount, Disbursement Date, As-On Date, UMRN mandate code, and NPCI
              return memo. Receive Advocate review, BSA 2023 s.63 server hash certificate, and live
              Email + WhatsApp + Speed Post RPAD tracking.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
            >
              Start ₹{testPrice} Live Test →
            </button>
            <Link
              href="/user/new-recovery"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
            >
              Open Loan Form
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise CSV Batch */}
        <div className="rounded-xl bg-white/5 border border-emerald-500/30 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                Track 02 • Institutional Scale
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                100 – 50,000+ Accounts
              </span>
            </div>
            <p className="text-base font-bold text-white mb-2">
              CSV Batch Notice Desk & Representee Mandate Vault
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Built for co-lending books, HFC branches, gold-loan zones, and fintech cohorts. Map Board
              Resolutions and Authorised Signatory POAs per NBFC/LSP entity inside the Representees
              vault with per-account RPAD + ODR outcome logs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
            >
              Explore CSV Batch Desk →
            </Link>
            <Link
              href="/user/representees"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
            >
              Representee Vault
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
