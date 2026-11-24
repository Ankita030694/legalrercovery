"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface FreightForwarderRecoveryCTAProps {
  className?: string;
}

export default function FreightForwarderRecoveryCTA({ className = "" }: FreightForwarderRecoveryCTAProps) {
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
            Dual-Track Freight &amp; Customs Broker Recovery Desk
          </span>
          <span className="text-xs font-semibold text-emerald-400">
            Advocates Act 1961 Letterhead &bull; BSA 2023 s.63 Digital Audit
          </span>
        </div>

        <p className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
          Test 1 Overdue Importer / Consignee Case Now (₹{testPrice}) or Batch Process 10 to 1,000+ Outstanding Freight &amp; Duty Invoices via CSV
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Whether you are a Customs House Agent (CHA) recovering ₹5L–₹40L in upfront ICEGATE customs duty and CFS outlays, an NVOCC seeking container demurrage indemnity for abandoned boxes, or an air freight forwarder facing an IATA CASS bi-monthly shortfall, deploy court-tested Section 222 fact-verified demand notices today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                  Track 01 &bull; Single Case Test
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                  ₹{testPrice} / Notice
                </span>
              </div>
              <p className="text-base font-bold text-white mb-2">
                Test 1 Live Overdue Case Now (Fact-Verified)
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Submit details of one defaulting importer or freight debtor. Receive a bespoke fact-verified legal notice under Indian Contract Act Section 222, Customs Act Section 48, and Commercial Courts Act Section 2(1)(c), with full itemization of ICEGATE challans, ocean freight, THC, CFS detention, and 18% statutory penal interest, delivered via Speed Post RPAD, WhatsApp, and registered email.
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
                  10 &ndash; 10,000+ Defaulters
                </span>
              </div>
              <p className="text-base font-bold text-white mb-2">
                Bulk CSV Dispatch &amp; Dedicated Forwarder Legal Desk
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Engineered for mid-sized and large freight forwarding companies, NVOCCs, and licensed customs brokerage firms managing multi-port operations across JNPT, Mundra, Chennai, and Delhi ICD. Upload an Excel/CSV ledger of defaulting importers and shippers to generate automated batch fact-verified notices, tracked India Post consignment barcodes, and court-ready Order XXXVII summary suit dossiers.
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
                Enterprise KYC
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Admissible under BSA 2023 s.63 electronic evidence standards</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Direct Commercial Court Escalation</span>
            <span>&bull;</span>
            <span>Order XXXVIII Rule 5 Asset Freeze</span>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="CHA & Freight Forwarder Legal Recovery Notice"
        amount={testPrice}
      />
    </>
  );
}
