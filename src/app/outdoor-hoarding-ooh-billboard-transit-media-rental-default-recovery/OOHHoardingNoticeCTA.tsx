"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface OOHHoardingNoticeCTAProps {
  className?: string;
}

export default function OOHHoardingNoticeCTA({
  className = "",
}: OOHHoardingNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition || 999;

  return (
    <>
      <div
        className={`w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-8 md:p-10 text-white shadow-xl border border-slate-700/60 relative overflow-hidden ${className}`}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              OOH Concessionaire Recovery Desk
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
              Stop Paying Upfront Municipal License Fees While Advertisers Default on Media Rentals
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Enforce your signed Media Display Orders, mounting holding interest, and electronic geo-tagged monitoring logs under Bharatiya Sakshya Adhiniyam, 2023 (Section 63) &amp; Commercial Order XXXVII CPC.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Drafted by Commercial Media Litigators
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Speed Post RPAD + Email + WhatsApp Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Validates Flex Dismantling &amp; Section 73 Damages
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm tracking-wide shadow-lg shadow-red-900/40 hover:shadow-red-900/60 transition-all duration-200 text-center flex items-center justify-center gap-2"
            >
              <span>Draft Legal Demand Notice</span>
              <span className="text-red-200 text-xs font-normal">| ₹{basePrice}</span>
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold text-xs tracking-wide transition-all duration-200 text-center"
            >
              Batch Recovery (10–10,000+ Defaulters)
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType="legal-notice"
        metadata={{
          source: "ooh-hoarding-rental-recovery-cta",
          price: basePrice,
        }}
      />
    </>
  );
}
