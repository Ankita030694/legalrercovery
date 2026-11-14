"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Scenario {
  id: string;
  title: string;
  badge: string;
  payerType: string;
  agingBucket: string;
  challenge: string;
  legalWeapon: string;
  statutoryTimeline: string;
  recoveryAction: string;
  recommendedRoute: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "tpa-short-settlement",
    title: "TPA Deductions & Unbundling Cuts",
    badge: "Commercial Cashless Insurers",
    payerType: "Third-Party Administrators & General/Health Insurers",
    agingBucket: "45–120 Days Post-Discharge",
    challenge:
      "TPA short-settles authorized surgery claim by 18–25% citing non-medical consumables (PPE kits, gloves, syringes, monitors) and applies retrospective room-rent proportionate deductions despite NABH-accredited PNA tariff agreements.",
    legalWeapon:
      "IRDAI Health Insurance Master Circular (Bank Rate + 2% penal interest) + Section 73 Indian Contract Act (PNA breach) + Section 63 BSA electronic pre-authorization audit.",
    statutoryTimeline:
      "30-day statutory settlement window from final bill submission; mandatory penal interest accumulates from Day 31 onwards.",
    recoveryAction:
      "Issue 15-day joint Advocate Legal Notice to Insurer MD & TPA Grievance Cell demanding principal deduction refund plus RBI Bank Rate + 2% penal interest; escalate to IRDAI Bima Bharosa portal and Commercial Court s.2(1)(c)(xx).",
    recommendedRoute: "/hospital-tpa-insurance-delayed-short-settled-claim-recovery",
  },
  {
    id: "cghs-echs-arrears",
    title: "CGHS/ECHS Long-Aged Arrears",
    badge: "Central Government Schemes",
    payerType: "Ministry of Health & Family Welfare / Ministry of Defence / UTIITSL",
    agingBucket: "180–365+ Days (Severe Treasury Freezes)",
    challenge:
      "Empanelled hospital has ₹2.5 Cr to ₹15 Cr locked in UTIITSL portal query loops and ministerial budgetary freezes. Continued servicing without liquidity threatens nursing staff payroll and doctor retainers.",
    legalWeapon:
      "Section 80 Code of Civil Procedure (Mandatory 60-day notice to Ministry Secretaries) + High Court Article 226 Writ of Mandamus under the Supreme Court ABL International doctrine.",
    statutoryTimeline:
      "60-day statutory cure window under Section 80 CPC; immediate High Court Writ maintainability upon expiry of 60 days.",
    recoveryAction:
      "Serve formal Section 80 CPC Notice on MoHFW / ECHS Central Organisation citing audited UTIITSL tracking logs under BSA s.63; file Article 226 Writ Petition praying for release of admitted dues with 12% commercial interest.",
    recommendedRoute: "/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery",
  },
  {
    id: "post-discharge-default",
    title: "Post-Discharge Patient Non-Payment",
    badge: "Self-Pay & Co-Pay Balances",
    payerType: "Patient Attendant / Family Co-Obligor",
    agingBucket: "15–90 Days Post-Discharge",
    challenge:
      "Patient discharged at midnight after emergency laparoscopy or ICU stabilization; attendant signs pending-bill undertaking promising payment in 7 days, then switches off phone or issues a stopped-payment cheque.",
    legalWeapon:
      "Section 126 Contract Act (Attendant Co-Guarantee) + Section 4 Negotiable Instruments Act (Promissory Note) + Section 138 NI Act (Cheque Bounce) + Order XXXVII CPC Summary Suit.",
    statutoryTimeline:
      "15-day cure notice under Section 138 NI Act / Section 73 Contract Act; 3-year limitation clock stops upon formal legal demand.",
    recoveryAction:
      "Dispatch advocate-signed Demand Notice via Email, WhatsApp (BSA s.63 certificate) and Speed Post RPAD; invoke Section 138 criminal proceedings if cheque returned and initiate Order XXXVII summary attachment.",
    recommendedRoute: "/hospital-unpaid-patient-bill-recovery-without-detaining-patient",
  },
  {
    id: "corporate-credit-dispute",
    title: "Corporate Credit Letter Default",
    badge: "PSUs & Enterprise Tie-ups",
    payerType: "Public Sector Undertakings (BHEL, NTPC, ONGC, Railways) & Private Corporates",
    agingBucket: "90–180 Days Post-Treatment",
    challenge:
      "Hospital treats corporate executives based on valid Credit Authorization Letters (CAL); company delays payment citing internal audit queries, missing employee counter-signatures, or separation without medical clearance.",
    legalWeapon:
      "Order XXXVII CPC (Debt on written contract) + Section 12A Commercial Courts Act (Pre-Institution Mediation) + Section 43B(h) Income Tax Act for MSME-registered hospitals.",
    statutoryTimeline:
      "45-day payment ceiling under MSMED Act s.15 (if registered) / 30-day corporate credit limit.",
    recoveryAction:
      "Issue 15-day statutory demand attaching Credit Authorization Letter and verified discharge summary; initiate Commercial Court Section 12A Pre-Institution Mediation or MSME Samadhaan reference.",
    recommendedRoute: "/hospital-corporate-credit-tie-up-psu-medical-bill-recovery",
  },
];

export default function HealthcareTpaScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-slate-200 pb-3">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`text-left p-3 rounded-xl transition-all text-xs font-bold ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wider opacity-80 mb-0.5 truncate">
                {scenario.badge}
              </span>
              <span className="truncate block">{scenario.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display Card */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-2">
              {currentScenario.badge}
            </span>
            <p className="text-xl sm:text-2xl font-black text-white">
              {currentScenario.title}
            </p>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
              Typical Aging Window
            </span>
            <span className="text-sm font-bold text-amber-400">
              {currentScenario.agingBucket}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Payer Entity
              </p>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {currentScenario.payerType}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                The Operational Bottleneck
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentScenario.challenge}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                Statutory Timeline &amp; Trigger
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentScenario.statutoryTimeline}
              </p>
            </div>
          </div>

          <div className="bg-slate-800/90 rounded-xl p-5 border border-slate-700/80 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                  Enforceable Legal Remedy
                </p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-semibold">
                  {currentScenario.legalWeapon}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Recommended Recovery SOP
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentScenario.recoveryAction}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-700">
              <Link
                href={currentScenario.recommendedRoute}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
              >
                Read Dedicated Operational Recovery Guide →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
