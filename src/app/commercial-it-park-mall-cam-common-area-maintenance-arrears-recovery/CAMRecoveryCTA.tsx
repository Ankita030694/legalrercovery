"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CAMRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function CAMRecoveryCTA({
  buttonText = "Issue Statutory CAM Demand Notice",
  className = "",
  variant = "primary",
}: CAMRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                Mall, IT Park &amp; Commercial Facility Recovery Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Advocates Act 1961 Letterhead &bull; BSA s.63 Digital Tracking &bull; Speed Post RPAD
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              Unpaid CAM, HVAC &amp; DG Arrears Starving Your Building Operations?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Whether you are a Shopping Mall Operator, IT Park Facility Management Company, or Commercial Condominium Association recovering from absentee investor-owners or defaulting retail brands, deploy our dual-track statutory recovery rails today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Unit Pilot
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Unit
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Chronic Defaulter Now (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Advocate-drafted statutory demand notice under State Apartment Ownership Acts, Facility Management Covenants, and Order XXXVII CPC. Complete with Annexure Energy Logs, 15-day cure notice, and lawful utility disconnection warning. Delivered via Email, WhatsApp &amp; Speed Post RPAD.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer text-center"
                  >
                    Send ₹{basePrice} CAM Notice &rarr;
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
                      Track 02 &bull; Portfolio Bulk Desk
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                      10 &ndash; 10,000+ Units
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Commercial Complex &amp; Mall Portfolio Desk
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    For commercial asset managers, REITs, condominium boards, and facility enterprises handling entire towers with hundreds of defaulting investor units or disputing retail tenants. Upload accounting ledgers via CSV, automate multi-channel notice issuance, and track recoveries in real-time.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    Upload CSV / Bulk Desk &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Manage SPVs / Condos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-md cursor-pointer text-center"
            >
              {buttonText} (₹{basePrice})
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
            >
              Upload Bulk CSV
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
