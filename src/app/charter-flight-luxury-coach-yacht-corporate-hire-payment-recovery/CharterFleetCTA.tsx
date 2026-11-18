"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Plane } from "lucide-react";

export default function CharterFleetCTA() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 mb-4">
          <Plane className="w-3.5 h-3.5" /> IND-16 NSOP Aviation, Yacht & Luxury Fleet Desk
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
          Recover Unpaid Charter Flying Hours, Ferry Legs & Luxury Coach Fleet Balances
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
          Corporate roadshow coordinators, wedding planners, and election campaign agencies stall ₹10L–₹2Cr charter bills when operators only send informal WhatsApp reminders. An Advocate-signed Statutory Demand Notice annexing your <strong>DGCA Flight Tech-Log</strong>, <strong>AAI/Fuel Disbursements</strong>, <strong>GPS/Fastag Telemetry</strong>, and <strong>Order XXXVII CPC Summary Suit</strong> warning triggers immediate treasury clearance.
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
                Upload one overdue NSOP charter invoice, helicopter campaign balance, yacht overtime bill, or luxury coach fleet trip sheet. Our commercial litigation advocates attach your Tech-Log/GPS proof into a 15-day statutory notice.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Served on Corporate CFO, Campaign Coordinator & Directors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Includes BSA 2023 s.63 certificate for DGCA logs & GPS data
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
                  Track 2 — Fleet Operator & Charter Desk
                </span>
                <span className="text-xs font-bold text-slate-500">10–10,000+ Cases</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Built for NSOP Air-Charter Operators, Helicopter Fleet Owners, Luxury Volvo/Scania Coach Operators, and Marine Yacht Charterers clearing post-season wedding, roadshow, and pilgrimage receivables.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                  Batch upload Tally / ERP aged charter & fleet trip ledgers via CSV
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                  Multi-entity Representee profiles for aircraft SPVs & coach fleets
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                  Direct escalation to Order 37 Summary Suits, s.138 & MSME Samadhaan
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all text-center"
              >
                Upload Fleet CSV <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-red-50 hover:bg-red-100 text-[#DC2626] border border-red-200 text-xs font-bold transition-all text-center"
              >
                <Users className="w-3.5 h-3.5" /> Representees Desk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
