"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function CommodityNoticeCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {/* Track 1: Self-Serve Single Case Test */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-3">
              Track 1 &bull; Single Pilot Case
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Test 1 Live Commodity or Gas-Cylinder Notice Now
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              &ldquo;Test 1 Live Overdue Case Now (&#8377;{basePrice} &middot; Advocate Drafted
              &middot; Email + WhatsApp + Speed Post RPAD)&rdquo; &mdash; customize SGS/NABL COA
              finality, Dharamkanta slips, or PESO serial tables with advocate review.
            </p>
          </div>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-sm cursor-pointer text-center"
            >
              Launch &#8377;{basePrice} Advocate Notice Dispatch
            </button>
            <Link
              href="/user/new-recovery"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 text-xs transition-colors text-center"
            >
              Or Start Self-Serve Case Filing &rarr;
            </Link>
          </div>
        </div>

        {/* Track 2: Enterprise / Institutional Batch Desk */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              Track 2 &bull; Bulk Trader &amp; Gas Filler Desk
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Bulk CSV Dispatch for 10 to 10,000+ Defaulters
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              &ldquo;Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional
              Desk&rdquo; &mdash; ideal for coal/petcoke importers, scrap yards, fuel distributors,
              and O2/N2/Argon cylinder fillers chasing multiple plants simultaneously.
            </p>
          </div>
          <div className="space-y-3">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-sm text-center"
            >
              Upload Bulk Defaulter CSV &rarr;
            </Link>
            <Link
              href="/user/representees"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 text-xs transition-colors text-center"
            >
              Activate Representee Institutional Desk &rarr;
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
