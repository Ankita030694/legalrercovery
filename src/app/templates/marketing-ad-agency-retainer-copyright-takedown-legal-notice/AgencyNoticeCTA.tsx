import Link from "next/link";

interface AgencyNoticeCTAProps {
  title?: string;
  subtitle?: string;
}

export default function AgencyNoticeCTA({
  title = "Ready to Revoke Licenses & Demand Your Agency Receivables?",
  subtitle = "Stop letting default clients run your video ads, landing pages, and creative collateral for free. Dispatch a verified dual-weapon legal demand drafted by High Court commercial advocates today.",
}: AgencyNoticeCTAProps) {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60">
          <span>Advocate-Drafted Institutional Enforcement</span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-2 pb-2">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="text-red-400 font-bold text-xs uppercase tracking-wider mb-1">Weapon 1: Statutory Money Demand</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Section 15–18 MSMED Act statutory demand claiming principal retainer, third-party ad reimbursement & compound interest at 3x RBI Bank Rate.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">Weapon 2: Copyright Invalidation</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Section 19(1) & 30A revocation terminating brand license on all logos, video edits, landing page code, copy, and creatives with immediate effect.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">7-Day Platform Takedowns</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Statutory 36-hour IT Rules 2021 & DMCA notice filed directly to Meta Business Manager, Google Ads & Shopify to suspend infringing client campaigns.
            </p>
          </div>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/user/new-recovery"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm tracking-wide shadow-lg shadow-red-900/30 transition-all text-center"
          >
            Draft & Issue Notice (₹999 Test Account)
          </Link>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm tracking-wide border border-slate-700 transition-all text-center"
          >
            Bulk Agency Recovery (10–1,000+ Invoices)
          </Link>
        </div>

        <p className="text-[11px] text-slate-400 text-center">
          Handled by enrolled commercial litigation advocates practicing before Delhi, Bombay, Karnataka, and Calcutta High Courts. 100% digital onboarding with BSA Section 63 electronic delivery compliance.
        </p>
      </div>
    </section>
  );
}
