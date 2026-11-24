"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface EdpmsNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function EdpmsNoticeCTA({
  buttonText = "Test 1 Live Overdue Case Now",
  className = "",
  variant = "primary",
}: EdpmsNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  if (variant === "secondary") {
    return (
      <>
        <div className={`w-full ${className}`}>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center shadow-sm"
          >
            {buttonText} (&#8377;{basePrice})
          </button>
        </div>
        <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1 — Self-Serve Single Case Test */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                Track 1 &bull; Single Shipping Bill / Buyer Test
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-2.5">
                Test 1 Live Overdue Case Now (&#8377;{basePrice})
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                Fact-verified cross-border legal demand notice citing Shipping Bill &amp; FEMA Section 8 particulars, dispatched via Email + WhatsApp + Tracked Courier/RPAD, with verifiable delivery proof for your AD Category-I Bank write-off or ECGC dossier.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                <li>&#10003; Fact-Verified on Law Firm Letterhead</li>
                <li>&#10003; Email + WhatsApp + Speed Post / International Dispatch Logs</li>
                <li>&#10003; Ready for SBI, HDFC, ICICI &amp; Axis Bank EDPMS Compliance</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-lg shadow-red-900/30 text-sm cursor-pointer text-center"
              >
                Start Single Case (&#8377;{basePrice})
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm transition-colors text-center"
              >
                Self-Serve Portal &rarr;
              </Link>
            </div>
          </div>

          {/* Track 2 — Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Treasury &amp; Export House Batch Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 mb-2.5">
                Have 10 to 10,000+ Aged EDPMS Bills?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Upload your AD-Bank EDPMS XOS dump via CSV to generate batch Fact-Verified Legal Demand Notices and Disproportionate Foreign Litigation Cost Opinions across multiple overseas buyers, clearing caution-listed Shipping Bills systematically.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li>&#10003; Bulk CSV Ingestion for Multi-Country Export Ledgers</li>
                <li>&#10003; BSA 2023 s.63 Electronic Evidence &amp; Courier Tracking</li>
                <li>&#10003; Dedicated Institutional Desk for Export CFOs &amp; CAs</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-sm text-center"
              >
                Upload CSV / Bulk Solutions
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 text-xs sm:text-sm transition-colors text-center"
              >
                Activate Institutional Desk &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
