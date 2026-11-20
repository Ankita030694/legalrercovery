"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface AttachmentCTAProps {
  className?: string;
}

export default function AttachmentCTA({ className = "" }: AttachmentCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-300 border border-red-800/60 mb-3">
                Track 1 &bull; Self-Serve Single Case Test
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2.5">
                Test 1 Live Overdue Case Now (&rupee;{basePrice})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Lock your pre-suit urgency record before filing an Order XXXVIII Rule 5 attachment application. Our advocates draft and serve a formal statutory demand annexing your invoices, E-Way Bills, and asset-restraint warning via Email, Business WhatsApp &amp; Speed Post RPAD.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-200 mb-6">
                <li>&check; Advocate-drafted demand establishing timeline for s.12A urgent relief</li>
                <li>&check; Simultaneous Email + Business WhatsApp + Speed Post RPAD (BSA s.63)</li>
                <li>&check; Escalation-ready dossier for Order 38 Rule 5, Order 37 &amp; NI s.138</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
              >
                Test 1 Live Claim (&rupee;{basePrice}) &rarr;
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
              >
                Open Case Portal
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Commodity, Steel &amp; Pharma Batch Desk
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 mb-2.5">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Institutional Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Manage port coal yards, scrap aggregators, steel distributors, and pharma receivables inside LegalRecovery&apos;s Representees workspace. Track aging buckets, flag MCA charge alerts, and trigger priority Order XXXVIII Rule 5 or IBC Section 8 escalations across high-risk debtors.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li>&check; Multi-GSTIN depot &amp; regional plant profiles via Representees</li>
                <li>&check; Bulk CSV notice dispatch with BSA 2023 s.63 delivery proofs</li>
                <li>&check; Litigation-ready asset attachment &amp; Order 37 summary suit handoff</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm text-xs sm:text-sm text-center"
              >
                Bulk CSV Recovery Solutions &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
              >
                Activate Representee Desk
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
