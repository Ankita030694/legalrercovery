"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface FranchisorHubCTAProps {
  className?: string;
}

export default function FranchisorHubCTA({ className = "" }: FranchisorHubCTAProps) {
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
                Track 1 &bull; Self-Serve Single Outlet Test
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2.5">
                Test 1 Live Overdue Case Now (&rupee;{basePrice})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Advocate Drafted &bull; Email + WhatsApp + Speed Post RPAD. Enforce against one defaulting QSR franchisee, one rogue ex-franchisee misusing your signboard, or one defaulting EV/auto dealership today.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-200 mb-6">
                <li>&check; 15-Day Royalty Arrears &amp; POS Skimming Cure-or-Termination Notice</li>
                <li>&check; Trade Marks Act s.29/135 Signboard Cease-and-Desist &amp; Local Commissioner Warning</li>
                <li>&check; NI Act s.138 &amp; PSS Act s.25 Bounced Franchise PDC / NACH Prosecution</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
              >
                Test 1 Live Case (&rupee;{basePrice}) &rarr;
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
                Track 2 &bull; Multi-Store Franchise &amp; OEM Batch Desk
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 mb-2.5">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Engineered for QSR Brands, Salon &amp; Wellness Chains, Preschool Networks, Retail Franchisors, and EV/Automobile OEMs running nation-wide audit and royalty recovery drives across multi-city store clusters.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li>&check; Store Code, POS Sales Gap, Central Commissary Invoice &amp; PDC Ledger Mapping</li>
                <li>&check; Simultaneous Pan-India Speed Post RPAD + Swiggy/Zomato Aggregator Delisting Notices</li>
                <li>&check; Escalation Routing: Commercial Court Section 9 Injunctions &amp; Fast-Track Arbitration</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm text-xs sm:text-sm text-center"
              >
                Upload CSV / Bulk Desk &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-xs sm:text-sm text-center"
              >
                Manage Franchise Network
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="franchisor-royalty-recovery"
      />
    </>
  );
}
