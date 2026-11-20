"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface LimitationTemplateCTAProps {
  className?: string;
}

export default function LimitationTemplateCTA({ className = "" }: LimitationTemplateCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Track 1: Self-Serve Single Case Advocate Review & Dispatch */}
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-300 border border-red-800/60 mb-3">
                Track 1 &bull; Single Aging Invoice / Near-Barred Claim
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2.5">
                Test 1 Live Overdue Case Now (₹{basePrice} &middot; Advocate Drafted)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Have AMA Legal&rsquo;s commercial recovery desk audit your invoice dates, draft a bespoke Section 18 Balance Confirmation or Section 25(3) Promise-to-Pay notice, and serve it via Email, WhatsApp, and Speed Post RPAD.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-200 mb-6">
                <li>&check; Limitation audit: Article 14 / 15 / 55 vs Section 18 &amp; Section 25(3)</li>
                <li>&check; Advocate-vetted acknowledgment or installment promise wording</li>
                <li>&check; Trackable Email + WhatsApp + Speed Post RPAD with BSA s.63 log</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
              >
                Start 1 Advocate Case (₹{basePrice}) &rarr;
              </button>
              <Link
                href="/user/new-recovery"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-xs sm:text-sm text-center"
              >
                Self-Serve Intake
              </Link>
            </div>
          </div>

          {/* Track 2: Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Track 2 &bull; Year-End Audit &amp; Multi-Debtor AR Bucket
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 mb-2.5">
                Have 10 to 10,000+ Aging Debtors?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Built for Accounts Receivable Managers, CFOs, and Statutory Auditors running March 31 balance confirmations or rescuing 2.5–4 year old Tally/SAP receivables before write-off.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li>&check; Upload debtor aging CSVs directly from Tally, SAP, Oracle, or Zoho Books</li>
                <li>&check; Auto-segment 24–35 month (s.18) vs 36+ month (s.25(3)) accounts</li>
                <li>&check; Bulk Email, WhatsApp &amp; Speed Post RPAD dispatch with audit trail</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm text-xs sm:text-sm text-center"
              >
                Bulk CSV Recovery Desk &rarr;
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-xs sm:text-sm text-center"
              >
                Institutional Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
