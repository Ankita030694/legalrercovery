"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import { ArrowRight, CheckCircle2, FileText, Layers, ShieldAlert, Sparkles } from "lucide-react";

interface ConstructionNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "compact";
}

export default function ConstructionNoticeCTA({
  buttonText = "Test 1 Live Overdue Case Now",
  className = "",
  variant = "primary",
}: ConstructionNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  if (variant === "compact") {
    return (
      <>
        <div className={`w-full overflow-hidden ${className}`}>
          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-red-400 font-bold mb-1 block">
                Advocate-Vetted Construction Demand &amp; Arbitration Notice
              </span>
              <p className="text-sm text-slate-200 font-medium">
                Recover overdue RA bills, uncertified MB values &amp; post-DLP retention money with Section 21 notice protection.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md text-sm text-center cursor-pointer"
              >
                Draft Notice (₹{basePrice})
              </button>
            </div>
          </div>
        </div>
        <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  return (
    <>
      <div className={`w-full overflow-hidden ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Track 1: Self-Serve Single Case Recovery */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-red-950/80 text-red-400 border border-red-800/60 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                Track 1 &bull; Self-Serve Single Case Test
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-3">
                {buttonText} (₹{basePrice} &bull; Advocate Drafted)
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                Issue a battle-tested commercial recovery notice for unpaid Running Account (RA) bills, uncertified Measurement Book (MB) values, or withheld post-DLP retention money. Dispatched via Registered Speed Post AD, formal legal email, and WATI WhatsApp with a BSA Section 63 digital delivery certificate.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Itemized RA bill ledger with certified vs uncertified MB reconciliation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Section 21 Arbitration Act invocation &amp; sole arbitrator nomination</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>PBG non-encashment warning under Commercial Courts Act s.2(1)(c)(vi)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/40 text-sm cursor-pointer"
              >
                Initiate Legal Notice &mdash; ₹{basePrice}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs text-center border border-slate-700/60"
              >
                Open Self-Serve Desk
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise & Institutional Batch Desk */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-slate-100 text-slate-700 border border-slate-300 mb-4">
                <Layers className="w-3.5 h-3.5 text-slate-600" />
                Track 2 &bull; Enterprise &amp; Institutional Batch Desk
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-3">
                Have 10 to 10,000+ Defaulters? Upload CSV
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                For EPC contractors, infrastructure conglomerates, MEP subcontractors, and turnkey builders managing multiple unpaid projects. Centralize subcontractor receivables, automate multi-state notice dispatch, and fast-track Section 9/11 court escalations.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>Bulk CSV ingestion: Work Orders, RA bills, retention &amp; DLP dates</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>Multi-representee corporate profile for joint ventures (JVs) &amp; SPVs</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>Dedicated legal counsel panel for Section 9 PBG stays &amp; Section 11 filings</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-md text-sm text-center"
              >
                Activate Institutional Desk
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 transition-all text-xs text-center border border-slate-200"
              >
                Manage Representees
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
