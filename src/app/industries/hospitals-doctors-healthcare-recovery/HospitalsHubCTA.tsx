"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function HospitalsHubCTA() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const testPrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <div
      id="dual-track-cta"
      className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 shadow-xl border border-slate-800"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
          Healthcare RCM Legal Onboarding Desk
        </span>
        <span className="text-xs font-semibold text-emerald-400">
          Article-21 &amp; NMC Compliant • Advocates Act 1961 Letterhead
        </span>
      </div>

      <p className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
        Test With 1 Overdue Case (₹{testPrice}) or Onboard Your Hospital Ledger Batch
      </p>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
        Multi-specialty hospitals, nursing homes, specialty clinics, and diagnostic chains can
        validate our advocate drafting on a single post-discharge balance or stop-payment cheque
        first—or upload aged TPA, corporate credit, and PCC franchisee batches via CSV.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Track 1: Single Case Test */}
        <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                Track 01 • Single Case Pilot
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                ₹{testPrice} / Case
              </span>
            </div>
            <p className="text-base font-bold text-white mb-2">
              Test 1 Live Overdue Patient, Doctor or Clinic Case
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Advocate-drafted demand notice citing Article-21 compliant discharge undertakings,
              Section 138 NI Act, or Section 73 Contract Act—served simultaneously via Email,
              WhatsApp, and Speed Post RPAD with BSA 2023 s.63 proof.
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
              Open Intake Form
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise Institutional Batch */}
        <div className="rounded-xl bg-white/5 border border-emerald-500/30 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                Track 02 • Hospital &amp; Lab Scale
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                10 – 10,000+ Receivables
              </span>
            </div>
            <p className="text-base font-bold text-white mb-2">
              Upload CSV / Activate Dedicated Healthcare RCM Desk
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Engineered for hospital groups, diagnostic networks, and empanelled chains managing
              aged TPA short-settlements, CGHS/ECHS s.80 notices, corporate OHC ledgers, and PCC
              franchise defaults under centralized Representee mandates.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
            >
              Bulk CSV Desk →
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
