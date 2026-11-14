"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function ItSaasCTA() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const testPrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <div
      id="dual-track-cta"
      className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 shadow-xl border border-slate-800"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
          Dual-Track Tech Creditor Desk
        </span>
        <span className="text-xs font-semibold text-emerald-400">
          Multi-Invoice Ledger Support • Advocates Act 1961 Letterhead
        </span>
      </div>

      <p className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
        Test 1 Live Overdue Case (₹{testPrice}) or Onboard Bulk CSV Tech Receivables
      </p>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
        Whether your IT firm is chasing a single stalled ₹24 Lakh UAT milestone or your SaaS CFO
        desk manages 50+ delinquent corporate subscriptions and open STPI SOFTEX invoices, run a
        single ₹{testPrice} live test today or activate dedicated multi-entity batch recovery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                Track 01 • Single Invoice Test
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                ₹{testPrice} / Case
              </span>
            </div>
            <p className="text-base font-bold text-white mb-2">
              Test 1 Live Overdue Case Now (Advocate Drafted)
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Attach unpaid SaaS invoices, PO/SOW milestones, Udyam certificate, or Git/Jira
              completion proof. Dispatched via verified Email, WhatsApp &amp; India Post Speed Post
              RPAD with BSA 2023 s.63 server hash certification.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
            >
              Test 1 Case for ₹{testPrice} →
            </button>
            <Link
              href="/user/new-recovery"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
            >
              Open Recovery Form
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="rounded-xl bg-white/5 border border-emerald-500/30 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                Track 02 • Institutional Tech Desk
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                10 to 10,000+ Defaulters
              </span>
            </div>
            <p className="text-base font-bold text-white mb-2">
              Upload CSV / Activate Dedicated Institutional Desk
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Built for SaaS RevOps teams, CSP cloud partners, ERP implementers, and offshore IT
              exporters. Map Indian &amp; international subsidiaries in the Representees vault with
              FEMA/SOFTEX AD-Bank closure logs and reply triage.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
            >
              Upload Bulk CSV →
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
