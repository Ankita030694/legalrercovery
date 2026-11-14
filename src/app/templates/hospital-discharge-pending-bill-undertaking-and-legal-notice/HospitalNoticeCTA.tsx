"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface HospitalNoticeCTAProps {
  className?: string;
}

export default function HospitalNoticeCTA({ className = "" }: HospitalNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1: Single Hospital Discharge Notice Test */}
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-300 border border-red-800/60 mb-3">
                Track 1 &bull; Self-Serve Single Patient Test
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2.5">
                Issue 1 Advocate Legal Notice Now (&rupee;{basePrice})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Have an empanelled healthcare recovery advocate review your discharge undertaking, promissory note, and itemized bill, then issue a formal statutory legal notice via Speed Post RPAD, Email, and WhatsApp within 24 hours.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-200 mb-6">
                <li>&check; Voluntary discharge acknowledgment prevents duress or coercion defense</li>
                <li>&check; Joint and several demand on patient and co-obligor attendant (ICA s.126)</li>
                <li>&check; Certified delivery tracking docket + BSA 2023 s.63 certificate ready</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
              >
                Dispatch 1 Advocate Notice (&rupee;{basePrice}) &rarr;
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
              >
                Open Hospital Portal
              </Link>
            </div>
          </div>

          {/* Track 2: Multi-Specialty Hospital & Nursing Home Batch RCM Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Hospital RCM, TPA &amp; Bed-Capacity Desk
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 mb-2.5">
                10 to 10,000+ Unpaid Discharge Dues? Upload CSV
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Automate post-discharge receivables across your hospital network or clinic chain. Seamlessly upload pending balance spreadsheets from your HIS/HMS, trigger multi-channel statutory reminders, and recover bad debts without brand risk.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li>&check; Zero retainership lock-in — pay-per-notice institutional fee structure</li>
                <li>&check; Integrated hospital entity profiles inside Representees workspace</li>
                <li>&check; Automated pre-litigation ODR settlement links with instant receipt</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm text-xs sm:text-sm text-center"
              >
                Bulk Healthcare RCM Solutions &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-xs sm:text-sm text-center"
              >
                Activate Hospital Representee Desk
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
