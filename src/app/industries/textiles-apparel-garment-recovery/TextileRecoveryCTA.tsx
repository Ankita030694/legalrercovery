"use client";

import React, { useState } from "react";

export default function TextileRecoveryCTA() {
  const [activeTab, setActiveTab] = useState<"single" | "bulk">("single");

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-950/80 border border-red-800/80 text-red-400 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping" />
          Textile Cluster Fast-Track Recovery Desk
        </span>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
          Stop Writing Off Unpaid Fabric, Yarn & Garment Invoices
        </h3>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8">
          Whether you have a single ₹4.5 Lakh default from a vanished broker or ₹18 Crores stuck across 450 regional retail parties, initiate statutory recovery within 24 hours.
        </p>

        {/* Dual Mode Switcher */}
        <div className="inline-flex p-1 rounded-xl bg-slate-800 border border-slate-700 mb-8">
          <button
            onClick={() => setActiveTab("single")}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "single"
                ? "bg-[#DC2626] text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Single Creditor Test (₹999)
          </button>
          <button
            onClick={() => setActiveTab("bulk")}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "bulk"
                ? "bg-[#DC2626] text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Mill / Bulk Portfolio (10 to 1,000+ Ledgers)
          </button>
        </div>

        {/* Single Recovery Mode */}
        {activeTab === "single" && (
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-left transition-all backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                  Step 1: Enter Invoice & Bilty Details
                </span>
                <p className="text-xs text-slate-300">
                  Enter your GST invoice, lorry receipt (LR), and broker brokerage slip details, plus the debtor GSTIN and terms.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                  Step 2: Notice Drafting
                </span>
                <p className="text-xs text-slate-300">
                  Custom legal notice under MSMED Act s.15-18, s.43B(h), and Contract Act s.230 broker joint liability.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                  Step 3: Multi-Channel Dispatch
                </span>
                <p className="text-xs text-slate-300">
                  Speed Post RPAD with postal tracking barcode, email with digital delivery log, and BSA s.63 certificate.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-700">
              <div>
                <span className="text-lg font-black text-white">₹999</span>
                <span className="text-xs text-slate-400 ml-1.5">All-inclusive per debtor notice</span>
              </div>
              <a
                href="/user/new-recovery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl transition-all shadow-lg hover:shadow-red-900/30"
              >
                <span>Draft ₹999 Textile Legal Notice</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Bulk Portfolio Mode */}
        {activeTab === "bulk" && (
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-left transition-all backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                  Direct Tally / Busy Export
                </span>
                <p className="text-xs text-slate-300">
                  Export aged debtors trial balance (.xlsx or .csv) from TallyPrime or Busy. Auto-cleans aging buckets.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                  Batch Notice Generation
                </span>
                <p className="text-xs text-slate-300">
                  Fact-verified batch drafting across 100+ defaulting parties and commission agents simultaneously.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                  Dedicated Counsel Representation
                </span>
                <p className="text-xs text-slate-300">
                  Onboard multiple company entities and authorized signatories via institutional representee desk.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-700">
              <div>
                <span className="text-xs font-bold text-emerald-400 block">Volume Slabs from ₹349/case</span>
                <span className="text-xs text-slate-400">Institutional recovery SLA & Pan-India Postal Tracking</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <a
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold rounded-xl transition-all border border-slate-600"
                >
                  Explore Bulk CSV Solutions
                </a>
                <a
                  href="/user/representees"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl transition-all shadow-lg hover:shadow-red-900/30"
                >
                  <span>Onboard Multi-Entity Desk</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800 text-center">
          <div>
            <span className="text-xs font-bold text-slate-200 block">Surat & Bhiwandi</span>
            <span className="text-[10px] text-slate-500">Fabric & Job-Work Desk</span>
          </div>
          <div>
            <span className="text-xs font-bold text-slate-200 block">Tirupur & Ludhiana</span>
            <span className="text-[10px] text-slate-500">Knitwear & Export SOS</span>
          </div>
          <div>
            <span className="text-xs font-bold text-slate-200 block">MSMED Act Compliant</span>
            <span className="text-[10px] text-slate-500">3x RBI Bank Rate Interest</span>
          </div>
          <div>
            <span className="text-xs font-bold text-slate-200 block">India Post Tracking</span>
            <span className="text-[10px] text-slate-500">BSA 2023 s.63 Certificates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
