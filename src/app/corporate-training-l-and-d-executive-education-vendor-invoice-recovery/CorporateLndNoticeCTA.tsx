"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CorporateLndNoticeCTAProps {
  className?: string;
}

export default function CorporateLndNoticeCTA({ className = "" }: CorporateLndNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1: Self-Serve Single Case Test */}
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                Track 1 &bull; Single Enterprise Invoice Test
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-2.5">
                Test 1 Live Overdue Case Now
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                &rupee;{basePrice} &middot; Fact-Verified with MSMED s.15&ndash;18, Income Tax s.43B(h) &amp; Workshop Attendance Estoppel &middot; Dispatched via Email + WhatsApp + Speed Post RPAD to the client CFO &amp; Company Secretary.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-sm cursor-pointer"
              >
                Start Single Notice &mdash; &rupee;{basePrice}
              </button>
              <Link
                href="/user/new-recovery"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm"
              >
                Open Self-Serve Portal &rarr;
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Enterprise L&amp;D &amp; Assessment Batch Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 mb-2.5">
                Have 10 to 10,000+ Defaulters?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Upload a single CSV of frozen corporate L&amp;D POs, annual LMS seat renewals, or campus-proctoring invoices. Our institutional desk maps s.43B(h) tax hooks &amp; dispatches batch Fact-Verified Notices across enterprise accounts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-sm"
              >
                Explore Bulk CSV Solutions
              </Link>
              <Link
                href="/user/representees"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm"
              >
                Activate Representee Portal &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
