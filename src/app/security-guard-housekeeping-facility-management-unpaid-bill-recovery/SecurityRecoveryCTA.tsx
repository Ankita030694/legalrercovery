"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface SecurityRecoveryCTAProps {
  buttonText?: string;
  className?: string;
}

export default function SecurityRecoveryCTA({
  buttonText = "Test 1 Live Overdue Invoice Now",
  className = "",
}: SecurityRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition || 999;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden my-8 ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Track 1: Self-Serve Single Case Notice */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide uppercase bg-red-950/80 text-red-400 border border-red-800/60 mb-3">
                <span>Track 1 &bull; Instant Self-Serve Notice</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                Test 1 Defaulted Security / FMS Client Invoice
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                Issue an advocate-vetted statutory demand notice citing MSMED Act Section 16 (3x compound interest), signed muster roll estoppel, and Section 43B(h) tax disallowance. Delivered via Speed Post RPAD, email, and tracking WhatsApp.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all text-xs sm:text-sm shadow-lg shadow-red-900/30 cursor-pointer"
                >
                  {buttonText} &mdash; &#8377;{basePrice}
                </button>
                <Link
                  href="/user/new-recovery"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors text-xs sm:text-sm border border-slate-700 text-center"
                >
                  Enter Claim Details &rarr;
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                <span>&#10003; Advocate Drafted</span>
                <span>&bull;</span>
                <span>&#10003; Speed Post Tracking</span>
                <span>&bull;</span>
                <span>&#10003; 24-Hour Dispatch</span>
              </div>
            </div>
          </div>

          {/* Track 2: Enterprise Bulk CSV Batch Desk */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide uppercase bg-slate-100 text-slate-800 border border-slate-200 mb-3">
                <span>Track 2 &bull; Bulk CSV Institutional Desk</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                Have 10 to 10,000+ Defaulters Across Multiple Sites?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Bulk recover arrears from multiple housing societies, commercial builders, industrial plants, and warehouses. Batch process demand notices, automated MSEFC case filings, and coordinated legal action.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-xs sm:text-sm shadow-md text-center"
                >
                  Explore Bulk Recovery Desk
                </Link>
                <Link
                  href="/user/representees"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-xs sm:text-sm border border-slate-300 text-center"
                >
                  Upload Defaulter CSV &rarr;
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                <span>&#10003; Multi-Society Batches</span>
                <span>&bull;</span>
                <span>&#10003; Dedicated Case Manager</span>
                <span>&bull;</span>
                <span>&#10003; Institutional Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType="Legal Notice"
      />
    </>
  );
}
