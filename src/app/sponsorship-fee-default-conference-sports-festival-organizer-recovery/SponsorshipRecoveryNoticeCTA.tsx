"use client";

import React, { useState } from "react";
import Link from "next/link";
import PaymentModal from "@/components/PaymentModal";

export default function SponsorshipRecoveryNoticeCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full my-8 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-slate-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 border border-red-800/60 text-red-400">
              Institutional Event &amp; Sports Creditor Funnel
            </span>
            <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Recover Defaulted Sponsorship Fees Before the Next Financial Year Closes
            </p>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Choose your recovery track: dispatch a formal fact-verified demand notice with BSA 2023 s.63 deliverable proof for a single sponsor, or onboard your full event defaulting roster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
            {/* Track 1: Single Sponsor Test */}
            <div className="bg-slate-900/90 border border-red-900/40 rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-red-600/60 transition-all shadow-lg">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                    Track 1 &bull; Instant Single Case
                  </span>
                  <span className="text-xs text-slate-400">Fixed Fee</span>
                </div>
                <p className="text-lg font-bold text-white">Test 1 Live Overdue Sponsor Case Now</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fact-verified Demand Notice on formal Legal Letterhead. Includes WhatsApp, corporate domain email dispatch, and India Post Speed Post RPAD with legal tracking receipt.
                </p>
                <div className="pt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">&yen;999</span>
                  <span className="text-xs text-slate-400">all-inclusive single fee</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-red-950/60 cursor-pointer text-center block"
                >
                  Send ₹999 Sponsorship Legal Notice &rarr;
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Pre-litigation demand under CPC Order 37 &bull; Same-day dispatch
                </p>
              </div>
            </div>

            {/* Track 2: Enterprise / Bulk Desk */}
            <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-slate-500 transition-all shadow-lg">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded">
                    Track 2 &bull; Summit / League Portfolio
                  </span>
                  <span className="text-xs text-slate-400">10 &ndash; 10,000+ Defaulters</span>
                </div>
                <p className="text-lg font-bold text-white">Institutional Event Creditor Desk</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bulk CSV intake for organizers, trade expos, sports leagues, and festival promoters. Automated reconciliation against deliverable decks with pan-India advocate representation.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-200">
                    Volume pricing &bull; Dedicated Legal Counsel &bull; Court representation
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md text-center block"
                >
                  Upload Bulk Sponsorship Roster (CSV) &rarr;
                </Link>
                <div className="flex justify-center gap-3 text-[11px] text-slate-400">
                  <Link href="/user/representees" className="hover:text-red-400 underline">
                    Representee Dashboard
                  </Link>
                  <span>&bull;</span>
                  <Link href="/contact" className="hover:text-red-400 underline">
                    Institutional Empanelment
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center text-xs text-slate-400">
            Backed by AMA Legal Solutions &bull; Summary Suits, NI Act 138, Commercial Mediation &amp; MSME MSEFC Pan-India
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Sponsorship Recovery Legal Notice"
        price={999}
      />
    </>
  );
}
