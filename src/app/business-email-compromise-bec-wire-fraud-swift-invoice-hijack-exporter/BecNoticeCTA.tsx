import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, FileText, Globe } from "lucide-react";

export default function BecNoticeCTA() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 mb-4">
          <Globe className="w-3.5 h-3.5" /> High-Stakes Cross-Border Trade & Cyber-Wire Protocol
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
          Foreign Buyer Refuses to Re-Pay After Spoofed Bank Transfer?
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
          Do not let an overseas buyer wipe out your export proceeds. Under prevailing international commercial jurisprudence and the Indian Contract Act, payment to an unauthenticated hacker does not satisfy a contractual debt. Initiate multi-track statutory recovery now.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Track 1: Self-Serve ₹999 */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-red-500/50 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2.5 py-1 rounded">
                  Track 1 — Urgent Single Claim
                </span>
                <span className="text-xl font-black text-white">₹999</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Advocate-Vetted BEC International Demand Notice
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Draft and dispatch an enforceable legal notice detailing the buyer's failure of verification, citing common-law duty of care, and setting strict 15-day cure window before international litigation and EDPMS default reporting.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Includes BSA 2023 s.63 electronic evidence citation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Preserves ECGC insurance claim compliance window
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Direct PDF delivery to buyer CFO & legal department
                </li>
              </ul>
            </div>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold transition-all shadow-md text-center"
            >
              Draft Legal Notice Now (₹999) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Track 2: Bulk CSV Institutional */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-slate-500 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded">
                  Track 2 — Institutional Desk
                </span>
                <span className="text-xs font-bold text-slate-400">10–10,000+ Export Portfolios</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Export Factoring & Bank Ledger Recovery Engine
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Enterprise desk for export promotion councils, large merchant exporters, buying houses, and trade credit insurers managing multiple delinquent shipping bills, cyber diversions, and overseas arbitration.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  Bulk CSV ingest of unrealized shipping bills & buyer entities
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  Customs Duty Drawback / RoDTEP Rule 18 response support
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  Coordination with overseas trade attorneys & Interpol notices
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-all text-center"
              >
                Bulk CSV Solutions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-bold transition-all text-center border border-white/10"
              >
                Corporate Desk <Users className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-700/60">
          <span>Immediate SWIFT GPI Stop / Interpol NCBN / Cert-In Guidelines Adherent</span>
          <span className="text-slate-300 font-medium">Over ₹450+ Cr Export Invoices Safeguarded Under Cross-Border Protocol</span>
        </div>
      </div>
    </div>
  );
}
