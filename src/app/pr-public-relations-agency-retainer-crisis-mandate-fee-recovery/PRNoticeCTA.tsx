import Link from "next/link";

interface PRNoticeCTAProps {
  trackingSource?: string;
}

export default function PRNoticeCTA({
  trackingSource = "pr-agency-recovery-body",
}: PRNoticeCTAProps) {
  return (
    <div className="w-full my-8 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] border-2 border-red-600/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden text-white">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-red-800/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          PR Agency Unpaid Dues Escalation Rail
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
          Recover Unpaid PR Retainers, Crisis Mandates & 60-Day Notice Fees
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-medium">
          Whether a funded startup stopped paying after their Series-A announcement or a corporate client refuses crisis advisory invoices, issue a fact-verified legal notice that establishes Press Council earned-media boundaries and triggers MSMED 3× compound interest.
        </p>

        {/* Dual CTA Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Option 1: Single Matter Immediate Dispatch */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:bg-white/10 transition-colors">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-red-400 block mb-1">
                Single Mandate / Startup Default
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                Send Fact-Verified Legal Notice (₹999)
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Drafted by high-court commercial advocates with press clipping dossiers, WhatsApp audit logs, and MSMED statutory demand clauses.
              </p>
            </div>
            <Link
              href={`/user/new-recovery?source=${trackingSource}&type=single-pr-retainer`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-lg shadow-red-950/50 transition-all text-center"
            >
              <span>Draft Notice Now (₹999)</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Option 2: Multi-Client Agency Ledger Escalation */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:bg-white/10 transition-colors">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 block mb-1">
                Multiple Defaulters / Agency Roster
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                Batch CSV Recovery (10–1,000+ Dues)
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Upload your aged accounts receivable ledger. Simultaneous legal notices, pan-India tracking, and MSEFC portal conciliation.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 shadow-sm transition-all text-center"
              >
                <span>Upload Bulk Retainer CSV</span>
              </Link>
              <Link
                href="/user/representees"
                className="text-center text-[11px] text-slate-400 hover:text-slate-200 underline underline-offset-2"
              >
                Manage Agency Client Profiles & Representees →
              </Link>
            </div>
          </div>
        </div>

        {/* Reassurance Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-3">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Press Council Earned-Media Norms Integrated
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            MSMED Act §16 Compound Interest (3× Repo Rate)
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Speed Post RPAD & WhatsApp Digital Delivery Proof
          </span>
        </div>
      </div>
    </div>
  );
}
