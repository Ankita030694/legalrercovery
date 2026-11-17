import Link from "next/link";

interface NoticeCTAProps {
  heading?: string;
  subheading?: string;
  sourceLocation?: string;
}

export default function FilmProducerNoticeCTA({
  heading = "Recover Unpaid Shoot Milestones, Crew Advances & Post-Production Dues",
  subheading = "Don't let advertising agencies and corporate brands exploit your production house capital. Enforce your statutory rights under Copyright Act s.17, Indian Contract Act s.70, and MSMED Act s.15 with advocate-vetted statutory notices.",
  sourceLocation = "film_producer_recovery_cta",
}: NoticeCTAProps) {
  return (
    <div className="w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-xl relative overflow-hidden my-8">
      {/* Background flare */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-red-400 text-[11px] font-bold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Production House Recovery Desk &bull; Rapid Action
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
          {heading}
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mb-6 max-w-3xl">
          {subheading}
        </p>

        {/* Dual CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* CTA 1: Single Matter Immediate Notice */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-red-500/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Option 1: Single Commercial / Ad Film
                </span>
                <span className="text-xs font-extrabold text-white bg-slate-800 px-2 py-0.5 rounded">
                  Flat ₹999
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                Statutory Legal Notice & Copyright Takedown
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Advocate-drafted notice issued under Copyright Act s.17 & s.51 + Contract Act s.70. Enforces 24-hr airing stay and 15-day milestone settlement.
              </p>
            </div>
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs transition-colors shadow-sm"
            >
              <span>Initiate Single Notice (₹999)</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* CTA 2: Bulk Production Ledger Portfolio */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-red-500/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Option 2: Studio / Production Slate
                </span>
                <span className="text-xs font-extrabold text-emerald-300 bg-slate-800 px-2 py-0.5 rounded">
                  Bulk CSV Upload
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                Bulk Overdue Recovery (10–10,000+ Invoices)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Automated notice dispatch across delinquent brand clients and media agencies. Full MSME Samadhaan tracking, DPD aging, and legal docket preparation.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-600 transition-colors text-center"
              >
                Bulk Solutions
              </Link>
              <Link
                href="/user/representees"
                className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors text-center"
              >
                Upload CSV
              </Link>
            </div>
          </div>
        </div>

        {/* Reassurance points */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">&#x2713;</span> Supreme Court & Commercial Court Vetted
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">&#x2713;</span> BSA 2023 s.63 Compliant Evidence Bundle
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">&#x2713;</span> WhatsApp, Email & Speed Post Tracking
          </span>
        </div>
      </div>
    </div>
  );
}
