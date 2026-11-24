"use client";

import Link from "next/link";

interface DrawbackNoticeCTAProps {
  headline?: string;
  subheadline?: string;
}

export default function DrawbackNoticeCTA({
  headline = "Received a Rule 18 Show Cause Notice from Customs or DRI?",
  subheadline = "Protect your export benefits from wrongful clawback and recover stuck overseas export receivables simultaneously.",
}: DrawbackNoticeCTAProps) {
  return (
    <section className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 text-white shadow-xl">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/60 mb-3">
          Cross-Border Exporter Defense & Dues Recovery
        </span>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
          {headline}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Track 1: Single Case Test */}
        <div className="bg-slate-950/80 border border-red-900/60 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-red-600 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                Track 1: Urgent Legal Demand
              </span>
              <span className="text-xs font-bold bg-red-900/60 text-red-200 px-2 py-0.5 rounded">
                ₹999 Test
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-2">
              International Legal Notice to Defaulting Buyer
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Issue a fact-verified cross-border demand letter to the foreign defaulter. Establishing legal recovery action is the mandatory foundation required by AD Banks and Customs for Rule 18(2) drawback protection.
            </p>
            <ul className="text-[11px] text-slate-400 space-y-1.5 mb-5">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Fact-verified on High Court Bar letterhead
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Service via International Speed Post + Email Tracking
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Certified copy for RBI AD Bank Write-Off dossier
              </li>
            </ul>
          </div>
          <Link
            href="/user/new-recovery"
            className="w-full text-center py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors block"
          >
            Issue Formal Cross-Border Notice (₹999)
          </Link>
        </div>

        {/* Track 2: Enterprise Batch Desk */}
        <div className="bg-slate-900/90 border border-slate-700 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-slate-500 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Track 2: Institutional Exporter Desk
              </span>
              <span className="text-xs font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                Batch Portfolio
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-2">
              Customs SCN Defense & EDPMS Resolution Desk
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Handling multiple unrealized shipping bills, DRI inquiries, or port-level Section 75 recovery notices across Nhava Sheva, Mundra, Chennai, or ICDs? Upload your export ledger.
            </p>
            <ul className="text-[11px] text-slate-400 space-y-1.5 mb-5">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> SCN Legal Reply drafting by Customs & Foreign Trade counsel
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> ECGC claim escalation & AD Bank write-off representation
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Batch management from 10 to 10,000+ export shipping bills
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full text-center py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold shadow-md transition-colors block"
            >
              Upload Batch Export Bills / Activate Desk
            </Link>
            <Link
              href="/user/representees"
              className="w-full text-center py-2 px-3 text-[11px] text-slate-400 hover:text-white transition-colors block"
            >
              Corporate Client / Representee Management →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
