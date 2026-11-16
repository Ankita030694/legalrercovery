"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface HandoverRecoveryCTAProps {
  className?: string;
}

export default function HandoverRecoveryCTA({ className = "" }: HandoverRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const testPrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div
        id="dual-track-cta"
        className={`scroll-mt-28 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 shadow-xl border border-slate-800 ${className}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
            Dual-Track Developer &amp; RWA Recovery Desk
          </span>
          <span className="text-xs font-semibold text-emerald-400">
            Advocates Act 1961 Letterhead &bull; BSA 2023 s.63 Digital Audit
          </span>
        </div>

        <p className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
          Test 1 Overdue Allottee Case Now (₹{testPrice}) or Batch Process 10 to 1,000+ Defaulting Units via CSV
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Whether you are a developer CRM head recovering post-OC holding charges and maintenance arrears before society handover, or an RWA managing committee chasing speculative flat owners refusing IFMS corpus, deploy court-tested RERA Section 19(10) advocate notices today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                  Track 01 &bull; Single Unit Test
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                  ₹{testPrice} / Notice
                </span>
              </div>
              <p className="text-base font-bold text-white mb-2">
                Test 1 Live Overdue Case Now (Advocate Drafted)
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Submit details of one defaulting allottee stalling possession. Receive a bespoke advocate-drafted legal notice under RERA Section 19(10) &amp; 19(6) with holding charges, CAM arrears, SBI MCLR + 2% penal interest, delivered via Speed Post RPAD, WhatsApp, and registered email.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer text-center"
              >
                Start ₹{testPrice} Live Test &rarr;
              </button>
              <Link
                href="/user/new-recovery"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
              >
                Intake Portal
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise CSV Batch */}
          <div className="rounded-xl bg-white/5 border border-emerald-500/30 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  Track 02 &bull; Institutional Batch
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                  10 &ndash; 1,000+ Defaulters
                </span>
              </div>
              <p className="text-base font-bold text-white mb-2">
                Bulk CSV Dispatch &amp; Multi-Tower Defaulter Desk
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Engineered for multi-tower developer SPVs and large condominium associations preparing for handover. Upload your Excel/CSV ledger of defaulting allottees to generate batch advocate notices, tracked India Post consignment barcodes, and court-ready Section 19 execution packets.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
              >
                Upload CSV / Bulk Desk &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
              >
                Manage SPVs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
