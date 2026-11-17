"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import Link from "next/link";

interface GarmentSorNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function GarmentSorNoticeCTA({
  buttonText = "Issue Statutory Legal Notice for Garment Dues",
  className = "",
  variant = "primary",
}: GarmentSorNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Section 24 SGA &bull; MSMED Act 45-Day Mandate &bull; Pre-Litigation Recovery
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Stop Unauthorized SOR Stock Returns & Recover Withheld Garment Receivables
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Enforce your rights against national retail chains, department stores, and fashion e-commerce portals. Our commercial recovery advocates draft airtight statutory notices citing Sale of Goods Act Section 24, conclusive pre-dispatch AQL inspection sign-offs, and Section 15 of the MSMED Act to block bogus end-of-season debit notes and force immediate RTGS release.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 text-sm sm:text-base cursor-pointer text-center"
                >
                  {buttonText} &mdash; &rupee;{basePrice}
                </button>
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-sm sm:text-base text-center"
                >
                  Bulk Institutional Vendor Desk (10+ Retailers)
                </Link>
              </div>
              <div className="mt-4 text-xs text-slate-400 flex flex-wrap items-center gap-2 sm:gap-3">
                <span>&check; Advocate Drafted</span>
                <span>&bull;</span>
                <span>&check; AQL Estoppel Integrated</span>
                <span>&bull;</span>
                <span>&check; Speed Post RPAD + WhatsApp + Email</span>
                <span>&bull;</span>
                <span>&check; MSMED 3x Bank Rate Compounding</span>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center"
          >
            {buttonText} (&rupee;{basePrice})
          </button>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
