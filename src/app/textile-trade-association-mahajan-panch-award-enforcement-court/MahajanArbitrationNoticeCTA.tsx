import React from "react";
import Link from "next/link";
import { ArrowRight, FileCheck, Layers, Scale, Users } from "lucide-react";

export default function MahajanArbitrationNoticeCTA() {
  return (
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl border border-slate-700/80 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4">
          <Scale className="w-3.5 h-3.5" /> High Court Tested Creditor Escalation
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
          Have an Unpaid Textile Invoice or an Unenforced Mahajan Panch Award?
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-6">
          Do not let an outstation garment manufacturer or fabric wholesaler run the clock down on your 3-year limitation period with sham settlement meetings. Whether you need a legally sound <strong>Section 21 Invocation Notice</strong>, an execution petition under <strong>Section 36 CPC Order XXI</strong>, or an immediate switch to <strong>MSME ODR</strong>, our institutional recovery desk handles end-to-end commercial enforcement.
        </p>

        {/* Dual B2B CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Self-Serve ₹999 Test */}
          <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-700 hover:border-red-500/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4" /> Single Default / Pilot Claim
                </span>
                <span className="text-xs bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-800">
                  ₹999 / Case
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Issue Advocate-Drafted Statutory Recovery Notice
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Instant advocate-vetted demand notice combining Section 21 Arbitration Act, MSMED Act Section 17/18, and Section 43B(h) tax disallowance triggers. Delivered via Speed Post RPAD with BSA Section 63 electronic tracking.
              </p>
            </div>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-all shadow-md"
            >
              Start ₹999 Notice Drafting <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Bulk CSV Institutional Desk */}
          <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-700 hover:border-red-500/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> Textile Mills & Wholesalers
                </span>
                <span className="text-xs bg-red-950 text-red-300 font-bold px-2 py-0.5 rounded border border-red-800">
                  10 to 10,000+ Defaults
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Institutional Bulk Portfolio Escalation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Upload your outstanding ledger via CSV. Automated statutory demand service, broker liability audits under Section 230 Contract Act, and multi-jurisdiction execution filing across Surat, Ahmedabad, Mumbai, and Delhi.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-600 text-center"
              >
                Bulk Enterprise Plan
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 px-3 rounded-lg bg-red-950/80 hover:bg-red-900/80 text-red-300 hover:text-white text-xs font-bold transition-all border border-red-800/80 text-center"
              >
                <Users className="w-3.5 h-3.5" /> Corporate Representation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
