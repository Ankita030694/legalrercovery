import React from "react";
import Link from "next/link";

interface DyeingFabricLienCTAProps {
  title?: string;
  subtitle?: string;
  sourceContext?: string;
}

export default function DyeingFabricLienCTA({
  title = "Hold Grey Fabric or Recover Unpaid Job-Work Dues Now",
  subtitle = "Choose instant advocate notice drafting for a single defaulting merchant or upload high-volume credit ledgers across your process house client book.",
  sourceContext = "dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery",
}: DyeingFabricLienCTAProps) {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 mb-8 sm:mb-10">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80">
          INSTITUTIONAL TEXTILE PROCESS RECOVERY
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Track A: Self-Serve ₹999 Test */}
        <div className="bg-slate-800/90 border border-slate-700 hover:border-red-500/60 transition-all rounded-xl p-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                TRACK A • SINGLE DEFAULTING MERCHANT
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-black bg-red-500/20 text-red-300 border border-red-500/30">
                ₹999 Test
              </span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Section 170 Bailee Lien & Fabric Auction Notice
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Generate an advocate-drafted statutory demand notice for an unlifted or disputed fabric lot. Includes spectrophotometer delta-E tolerance estoppel, lab-dip sign-off defense, daily demurrage clause, and Speed Post tracking.
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Pre-empts fake shade/shrinkage claims
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> 15-day auction notice clause included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Delivered via Speed Post RPAD + WhatsApp + Email
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-4 border-t border-slate-700/80">
            <Link
              href={`/user/new-recovery?src=${sourceContext}&service=textile-job-work-notice`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-red-900/50"
            >
              Draft Job-Work Demand Notice (₹999)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              Dispatched within 24 hours under advocate signature
            </p>
          </div>
        </div>

        {/* Track B: Bulk CSV / Institutional Turnkey */}
        <div className="bg-slate-800/90 border border-slate-700 hover:border-emerald-500/60 transition-all rounded-xl p-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                TRACK B • PROCESS MILL ENTERPRISE
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                10–10,000+ Lots
              </span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Bulk Process House Ledger & Multi-Party Recovery
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upload your full accounts-receivable aging report across spinning mills, fabric traders, and garment houses. Automate simultaneous notices to introducing textile brokers (*Adatiyas*) and file MSMED Samadhaan references.
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Direct ERP / Tally ledger CSV upload
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Co-noticee textile broker / Panch arbitration linkage
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Section 43B(h) IT Act year-end tax compliance pressure
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-4 border-t border-slate-700/80">
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="flex items-center justify-center py-3 px-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl text-xs text-center transition-all"
              >
                Bulk Solutions
              </Link>
              <Link
                href="/user/representees"
                className="flex items-center justify-center py-3 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs text-center transition-all shadow-md"
              >
                Client Portfolios
              </Link>
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              Dedicated legal counsel assigned for Surat, Tirupur, Pali & Jetpur mills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
