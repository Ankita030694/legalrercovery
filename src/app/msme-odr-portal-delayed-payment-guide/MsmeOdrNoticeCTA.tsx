"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface MsmeOdrNoticeCTAProps {
  variant?: "primary" | "inline";
}

export default function MsmeOdrNoticeCTA({ variant = "primary" }: MsmeOdrNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const price = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;
  const formattedPrice = `₹${price.toLocaleString("en-IN")}`;

  if (variant === "inline") {
    return (
      <>
        <div className="my-6 p-4 sm:p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block">
              Pre-ODR Statutory Demand Notice • Section 15, 16 &amp; 43B(h) Leverage
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Buyer Delaying Invoice Past 45 Days or Threatening Quality Deductions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Serve an advocate-drafted statutory MSME demand notice invoking 3× RBI monthly compound interest and Section 43B(h) Income Tax disallowance before or alongside your MSME ODR filing.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto shrink-0 px-5 py-3 bg-[#DC2626] hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer text-center"
          >
            Draft MSME Demand Notice ({formattedPrice}) →
          </button>
        </div>

        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#0F172A] text-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Advocate-Drafted MSME Statutory Recovery Notice
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-snug text-white">
            Enforce Your Unpaid B2B Invoices with a Section 15 &amp; 16 MSMED Act Legal Notice
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
            Before a dispute drags through multi-stage ODR arbitration, a formal advocate legal notice addressed to the buyer&apos;s Managing Director, CFO, and Statutory Auditor computing <strong>3× RBI bank rate monthly compound interest (Section 16)</strong> and warning of <strong>100% tax expense disallowance under Section 43B(h) of the Income-tax Act</strong> settles a high share of MSME invoices within 15 days.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 text-xs text-slate-300">
            <div className="flex items-center gap-2 bg-slate-800/70 px-3 py-2.5 rounded-lg border border-slate-700">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Section 16 Compound Interest Sheet</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/70 px-3 py-2.5 rounded-lg border border-slate-700">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Section 43B(h) Tax Audit Warning</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/70 px-3 py-2.5 rounded-lg border border-slate-700">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>MSME ODR &amp; MSEFC Ready Dossier</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#DC2626] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-red-600/25 transition-all cursor-pointer text-center"
            >
              Send MSME Legal Notice Now — {formattedPrice}
            </button>
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Advocate consultation + drafting + Speed Post &amp; email service included
            </span>
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
