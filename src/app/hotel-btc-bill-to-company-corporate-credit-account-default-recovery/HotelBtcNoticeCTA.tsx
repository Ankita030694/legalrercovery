"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Building2 } from "lucide-react";

export default function HotelBtcNoticeCTA() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 mb-4">
          <Building2 className="w-3.5 h-3.5" /> IND-16 Hospitality & City-Ledger Recovery Desk
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
          Clear Your 90+ Day Hotel 'Bill-to-Company' (BTC) City Ledger Before Audit Close
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
          Corporate finance teams routinely push hotel City-Ledger invoices to the bottom of their AP queue because front-office teams only send polite follow-up emails. A Fact-verified Statutory Demand Notice citing <strong>Order XXXVII CPC</strong>, <strong>GSTR-2B ITC Estoppel</strong>, and <strong>Section 43B(h) / MSMED Act 3x RBI Interest</strong> moves your hotel folio to immediate priority clearance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Track 1: Self-Serve ₹999 */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-red-500/50 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2.5 py-1 rounded">
                  Track 1 — Self-Serve Single Case Test
                </span>
                <span className="text-xl font-black text-white">₹999</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Test 1 Live Overdue Case Now (₹999 · Fact-Verified · Email + WhatsApp + Speed Post RPAD)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Upload one overdue corporate BTC account (single group booking or multi-folio running account). Our hospitality litigation advocates annex your BTC approval email, PMS folio schedule, and GSTR-2B reflection into a 15-day statutory notice.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Served simultaneously on Corporate CFO, Directors & Travel Desk
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Includes BSA 2023 s.63 certificate for PMS & BTC email trail
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Zoho Legal Email + WATI Blue-Tick WhatsApp + India Post RPAD
                </li>
              </ul>
            </div>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold transition-all shadow-md text-center"
            >
              Test 1 Live Overdue Case Now (₹999) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Track 2: Enterprise / Institutional Batch Desk */}
          <div className="bg-white text-slate-900 border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-1 rounded">
                  Track 2 — Hotel Chain & Multi-Property Desk
                </span>
                <span className="text-xs font-bold text-slate-500">10–10,000+ Folios</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Built for 4-Star/5-Star Hotel Chains, Resort Portfolios, Corporate Serviced Apartment Operators, and Banquet Groups auditing 60–180+ DPD City Ledgers across multiple properties via our multi-entity Representees portal.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                  Export Opera / IDS Next / eZee / Tally aged City-Ledger CSV directly
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                  Multi-property Representee profiles with centralized CFO dashboard
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                  Direct escalation to Commercial Court s.12A, Order 37 & s.138 NI Act
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all text-center"
              >
                Upload City-Ledger CSV <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-red-50 hover:bg-red-100 text-[#DC2626] border border-red-200 text-xs font-bold transition-all text-center"
              >
                Representees Desk <Users className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-4 border-t border-slate-700/60">
          <span>Order XXXVII CPC • CGST Act s.16(2)(b) Estoppel • BSA 2023 s.63 Certified</span>
          <span className="text-slate-300 font-medium">
            AMA Legal Solutions — Hospitality & Institutional Recovery Division
          </span>
        </div>
      </div>
    </div>
  );
}
