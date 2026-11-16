"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface WarehouseStorageLienCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "inline";
}

export default function WarehouseStorageLienCTA({
  buttonText = "Issue 15-Day Bailee Lien & Auction Notice",
  className = "",
  variant = "primary",
}: WarehouseStorageLienCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div id="dual-track-cta" className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                3PL Fulfillment &amp; Contract Warehousing Recovery Desk
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Contract Act s.170 &bull; CPC Order 37 &bull; BSA s.63 Dossier
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              D2C Brand Defaulted on Storage Bills or Left Dead Stock Blocking Racks?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              Whether you are an institutional 3PL fulfillment center in Bhiwandi, Bilaspur, Luhari, Chakan, Oragadam, or Dankuni managing Grade-A multi-client racking or a bonded cold-chain warehouse operator, choose between an instant single-debtor notice or enterprise portfolio onboarding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Track 1: Self-Serve Single Case Test */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Track 01 &bull; Single Debtor Notice
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-white">
                      ₹{basePrice} / Case
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Test 1 Live Overdue Case Now (₹{basePrice})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Advocate-drafted 15-Day Statutory Bailee Lien &amp; Intended Public Auction Notice under Section 170 Indian Contract Act and Order XXXVII CPC. Dispatched simultaneously via Speed Post RPAD, WhatsApp &amp; Email with cryptographic BSA 2023 Section 63 delivery certificates.
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
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Direct Form
                  </Link>
                </div>
              </div>

              {/* Track 2: Enterprise Batch Desk */}
              <div className="rounded-xl bg-white/5 border border-white/15 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                      Track 02 &bull; Enterprise 3PL Portfolio
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs font-bold text-amber-200">
                      10 to 10,000+ Accounts
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-2">
                    Batch Upload Defaulting Sellers / Dedicated Warehouse Recovery Desk
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Complete end-to-end institutional recovery for multi-client 3PLs: ERP/WMS API integration, automated ledger reconciliation, government valuer empanelment, public e-auction coordination, and nationwide Commercial Court litigation management.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="flex-1 min-w-[150px] px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    Upload Bulk CSV &rarr;
                  </Link>
                  <Link
                    href="/user/representees"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors text-center"
                  >
                    Representees Desk
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
              <span>Backed by Bar Council of India-licensed advocates specializing in contract logistics &amp; commercial bailment.</span>
              <span className="text-emerald-400 font-semibold">Zero Commission &bull; Flat Predictable Recovery Fee</span>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-900 text-white p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white mb-1">
                Need to enforce bailee lien or dispose of dead stock?
              </p>
              <p className="text-xs text-slate-300">
                Issue a legally bulletproof 15-day statutory auction notice starting at ₹{basePrice}.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {buttonText} &rarr;
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                Bulk CSV
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle="3PL Warehouse Bailee Lien & Auction Notice"
        amount={basePrice}
      />
    </>
  );
}
