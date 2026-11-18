"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck, Users } from "lucide-react";

export default function PublisherNoticeCTA() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 mb-4">
          <BookOpen className="w-3.5 h-3.5" /> IND-17 Educational Publisher &amp; Distributor Recovery Desk
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
          Recover March–April Textbook, Uniform &amp; Stationery Dues Before Schools Lock Next Session&apos;s Booklist
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
          Regional sales reps only send polite WhatsApp reminders while schools and campus bookshops quietly switch publishers in January. A coordinated <strong>December–January Pre-Session Legal Notice Wave</strong> citing <strong>Order XXXVII CPC</strong>, <strong>NI Act s.138</strong>, and <strong>MSMED Act s.15–18 (3x RBI Interest)</strong> forces ledger settlement before new admissions open.
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
                Test 1 Live Overdue Case Now (₹999 · Advocate Drafted · Email + WhatsApp + Speed Post RPAD)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Upload one overdue school trust, campus bookshop, or regional distributor ledger. Our commercial recovery advocates annex your GST tax invoices, transporter bilties, and booklist POs into a 15-day statutory demand notice.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Served on School Trustees, Principal &amp; Bookshop Proprietor
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Rebuts late November unsold-book return dumps under Sale of Goods Act
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Legal Email + Blue-Tick WhatsApp + India Post Speed Post RPAD
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
                  Track 2 — Publisher Bulk Notice Wave
                </span>
                <span className="text-xs font-bold text-slate-500">10–10,000+ Cases</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Built for Delhi/Noida, Meerut, Jalandhar, and Kolkata K-12 Textbook Publishers, Uniform Manufacturers, Stationery Wholesalers, and Lab-Equipment Suppliers clearing aged school ledgers in one December–January wave.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                  Upload Tally / Busy / Zoho aged school &amp; bookshop ledger CSV
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                  Dedicated Representee profiles for imprint, printing &amp; distribution entities
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                  Batch escalation to Order 37 CPC, NI Act s.138 &amp; MSME Samadhaan
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all text-center"
              >
                Upload Ledger CSV <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 text-xs font-bold transition-all text-center"
              >
                <Users className="w-3.5 h-3.5" /> Representees Desk
              </Link>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center">
          Strictly Creditor-Side Institutional Recovery Desk · All notices drafted and verified by Empaneled Commercial Advocates · BSA 2023 s.63 Compliant Dispatch
        </p>
      </div>
    </div>
  );
}
