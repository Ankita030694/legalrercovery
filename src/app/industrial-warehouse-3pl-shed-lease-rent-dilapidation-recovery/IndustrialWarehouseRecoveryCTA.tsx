"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface IndustrialWarehouseRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function IndustrialWarehouseRecoveryCTA({
  buttonText = "Issue Warehouse Default & Dilapidation Notice",
  className = "",
  variant = "primary",
}: IndustrialWarehouseRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                Industrial Park Developer &amp; Shed Landlord Recovery Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Advocates Act 1961 Letterhead &bull; BSA s.63 Evidence Dossier
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              Warehouse Lessee Defaulted or Left Floor &amp; Power Arrears? Recover Now
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Whether you are an industrial park developer in Bhiwandi, Luhari, Bilaspur, Chakan, Oragadam, or Dankuni managing Grade-A box warehouses or MIDC/GIDC/HSIIDC factory sheds, choose between a single advocate-drafted demand notice or enterprise multi-shed portfolio onboarding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Shed Notice
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Case
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Live Overdue Case Now (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Advocate-drafted statutory demand notice under TPA Sections 106 &amp; 108(m), Order XV-A CPC, and Commercial Courts Act Section 2(1)(c)(vii). Simultaneous dispatch via Email, WhatsApp &amp; Speed Post RPAD with digital BSA Section 63 delivery certificates.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer text-center"
                  >
                    Start ₹{basePrice} Notice &rarr;
                  </button>
                  <Link
                    href="/user/new-recovery"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Intake Form
                  </Link>
                </div>
              </div>

              {/* Track 2: Enterprise CSV Batch */}
              <div className="rounded-xl bg-white/5 border border-emerald-500/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                      Track 02 &bull; Enterprise Logistics Desk
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                      10 &ndash; 10,000+ Sheds
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Institutional Logistics Park CSV Batch Desk
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    For industrial park REITs, institutional logistics fund asset managers, and manufacturing shed owners handling multiple defaulting 3PL operators, HT power arrear claims, and SPCB cleanup indemnities. Upload tenant ledgers in bulk with full advocate supervision.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    Enterprise CSV Desk &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Corporate Portal
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Pan-India Commercial Court, High Court &amp; Arbitral Enforcement</span>
              </div>
              <div className="flex items-center gap-3">
                <span>&bull; TR-34 / FM2 Floor Forensic Survey</span>
                <span>&bull; DISCOM HT Power Arrear Recovery</span>
                <span>&bull; Order XV-A CPC Strike-Off Protection</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer text-center"
            >
              {buttonText} (₹{basePrice})
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs sm:text-sm font-semibold transition-colors text-center"
            >
              Bulk Industrial Shed Desk &rarr;
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
