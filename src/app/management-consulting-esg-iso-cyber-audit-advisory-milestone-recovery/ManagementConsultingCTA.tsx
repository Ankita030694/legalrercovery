"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ManagementConsultingCTAProps {
  className?: string;
}

export default function ManagementConsultingCTA({
  className = "",
}: ManagementConsultingCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1 — Single Advisory Milestone / Success-Fee Notice */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                Track 1 · Single Milestone / Retainer Default
              </span>
              <p className="text-lg sm:text-xl font-bold text-white mb-2">
                Test 1 Live Overdue Case Now (&#8377;{basePrice} &middot; Fact-Verified &middot; Email + WhatsApp + Speed Post RPAD)
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Upload your Mandate Agreement, Public Portal Sanction Letter, Final Sign-off Deliverable, and GST E-Invoice. Our High Court advocates serve a formal Demand Notice citing Order XXXVII CPC, MSMED Act Sections 15–18 (3x RBI interest), and Section 43B(h).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 cursor-pointer text-center"
              >
                Start &#8377;{basePrice} Advisory Recovery Notice
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-center"
              >
                Self-Serve Portal &rarr;
              </Link>
            </div>
          </div>

          {/* Track 2 — Consulting Boutique, ESG & Audit Portfolio Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 · Advisory Firm &amp; Multi-Client Batch Desk
              </span>
              <p className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Purpose-built for CERT-In audit firms, ISO/NABH accreditation consultancies, ESG advisors, and industrial subsidy specialists clearing uncollected milestone tranches across dozens of corporate clients simultaneously.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
              >
                Explore Bulk CSV Recovery
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-center"
              >
                Manage Representees &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        caseType="advisory_fee_recovery"
      />
    </>
  );
}
