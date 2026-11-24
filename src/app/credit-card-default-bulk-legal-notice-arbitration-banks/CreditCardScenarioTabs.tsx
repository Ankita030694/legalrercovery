"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  shortLabel: string;
  badge: string;
  title: string;
  trigger: string;
  riskExposure: string;
  statutoryAction: string[];
  outcomeMetric: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "unilateral-panel-reset",
    shortLabel: "1. Legacy Panel Quashing",
    badge: "Post-Perkins & CORE Reset",
    title: "Migrating Unilateral Panel Clauses to Neutral Institutional ODR",
    trigger:
      "Cardholder counsel moves a Section 34 petition (or objects at Section 36 execution) citing Perkins Eastman and the 5-Judge CORE Constitution Bench ruling because the issuer's legal team unilaterally picked a sole arbitrator from an internal bank panel.",
    riskExposure:
      "Complete award nullification as void ab initio under Section 12(5) & Seventh Schedule, wasted arbitrator fees, adverse litigation costs, and ticking 3-year limitation under the Limitation Act, 1963.",
    statutoryAction: [
      "Audit existing MITC / Cardholder Terms immediately: replace unilateral nomination wording with reference to an independent, neutral Institutional ODR centre operating an open, randomized panel.",
      "For live 90–150 DPD accounts under legacy clauses, issue a fresh Section 21 Arbitration Invocation Notice proposing a neutral ODR institution and inviting mutual consent or explicit post-dispute Section 12(5) waiver.",
      "Where the cardholder ignores the Section 21 notice for 30 days, either file a consolidated Section 11(6) appointment petition or route sub-₹3L tickets to Pre-Litigation National Lok Adalat to bypass Section 34 challenges altogether.",
    ],
    outcomeMetric:
      "Eliminates Section 12(5) jurisdictional vulnerability and creates execution-ready Section 36 decrees.",
  },
  {
    id: "high-balance-salaried",
    shortLabel: "2. ₹2.5L–₹12L Salaried Default",
    badge: "CICRA & ODR Leverage",
    title: "High-Balance Salaried Cardholder (90–150 DPD) Ignoring Call Centers",
    trigger:
      "A prime corporate salaried cardholder accumulates ₹4.8 Lakh across revolving spends and EMI conversions, blocks telecaller numbers after 90 DPD, and assumes unsecured cards carry no serious legal consequence.",
    riskExposure:
      "Aggressive agency calls to the cardholder's HR desk or family violate RBI Fair Practice Directions and invite RBI Integrated Ombudsman penalties plus reputational fallout.",
    statutoryAction: [
      "Replace all agency telecalling escalation with a formal Fact-verified Recall & Pre-Arbitration Notice served strictly to the cardholder's KYC email, WhatsApp, and Speed Post RPAD address.",
      "Include an objective statutory disclosure under CICRA 2005 explaining the concrete 7-year credit-access impact of 'Written Off' or 'Settled' flags versus 'Closed' full-repayment status, alongside the mandatory 7-day pre-reporting alert.",
      "If unpaid after 15 days, trigger neutral ODR Section 29B fast-track arbitration (documents-only) to obtain a binding monetary award executable via Order XXI Rule 48 salary attachment.",
    ],
    outcomeMetric:
      "Converts silent prime-salaried defaulters via clean credit-bureau clarity and enforceable Order XXI execution leverage.",
  },
  {
    id: "pre-chargeoff-bulk",
    shortLabel: "3. 120–179 DPD Charge-Off Batch",
    badge: "Pre-Write-Off Bulk Wave",
    title: "Pre-Charge-Off Bulk Portfolio Triage (1,500+ Accounts at 120–179 DPD)",
    trigger:
      "Unsecured portfolio risk heads face an impending 180-day prudential write-off cliff across 1,500–5,000 credit card accounts ranging from ₹35,000 to ₹8,00,000.",
    riskExposure:
      "Uniform one-size-fits-all litigation destroys unit economics on sub-₹1L balances, while doing nothing forces 100% provisioning and write-off drag on quarterly NIM.",
    statutoryAction: [
      "Segment the CSV batch into 3 value bands: Band A (₹25K–₹1L) routed to Multi-Wave Fact-Verified Notice + Pre-Litigation National Lok Adalat OTS offers; Band B (₹1L–₹3L) routed to Multi-Wave Notice + Neutral ODR Fast-Track; Band C (₹3L–₹20L) routed to Neutral ODR or Commercial Court Section 12A Pre-Institution Mediation.",
      "Dispatch simultaneous Email + WATI WhatsApp + India Post Speed Post RPAD notices within 24 hours with automated inbound reply triage and BSA Section 63 delivery certificates.",
      "Capture structured part-payments or written OTS acknowledgments prior to Day 180, simultaneously refreshing limitation under Sections 18–19 of the Limitation Act, 1963.",
    ],
    outcomeMetric:
      "Maximizes pre-write-off cash liquidation while keeping per-account legal spend strictly proportional to balance tier.",
  },
  {
    id: "rbi-ombudsman-shield",
    shortLabel: "4. RBI Audit & Penal Charge Shield",
    badge: "Regulatory Compliance",
    title: "Neutralizing RBI Ombudsman Harassment & Penal-Interest Objections",
    trigger:
      "Defaulting cardholders file counter-complaints before the RBI Integrated Ombudsman alleging third-party harassment, out-of-hours calling, or illegal compounding of late payment fees into revolving interest.",
    riskExposure:
      "Regulatory directives halting outsourcing agencies, mandatory compensation awards by the Ombudsman, and disallowance of inflated interest ledgers during arbitration or civil proceedings.",
    statutoryAction: [
      "Audit every Card Management System (CMS) demand schedule before legal dispatch to verify strict compliance with RBI's Penal Charges Directions: late payment fees and over-limit charges must be shown as non-capitalized penal charges, never compounded into interest.",
      "Move accounts crossing 60–90 DPD out of high-frequency field-agency dialing into an advocate-controlled tri-channel legal notice rail carrying verifiable timestamps strictly inside 8:00 AM–7:00 PM norms.",
      "Maintain an immutable BSA Section 63 + Bankers' Books Evidence Act s.2A audit bundle covering MITC clickwrap consent, monthly billing dispatches, and polite, legally neutral notice text.",
    ],
    outcomeMetric:
      "Produces an audit-ready compliance trail that withstands RBI inspection, Ombudsman review, and Section 34 scrutiny.",
  },
];

export default function CreditCardScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const current =
    SCENARIOS.find((item) => item.id === activeTab) || SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Tab Selector Buttons */}
      <div
        role="tablist"
        aria-label="Credit card delinquency recovery scenarios"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
      >
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-3 rounded-xl text-left text-xs font-bold border transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span className="block truncate">{item.shortLabel}</span>
              <span
                className={`block text-[10px] font-medium mt-0.5 truncate ${
                  isSelected ? "text-red-100" : "text-slate-500"
                }`}
              >
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {current.title}
          </h3>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Institutional Trigger
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.trigger}
            </p>
          </div>
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
              Regulatory / Litigation Exposure
            </span>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {current.riskExposure}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block">
            Creditor-Side Statutory Execution Steps
          </span>
          <ol className="space-y-2.5">
            {current.statutoryAction.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex items-start gap-2.5">
          <span className="text-emerald-700 font-black text-sm mt-0.5">
            &check;
          </span>
          <p className="text-xs sm:text-sm font-medium text-emerald-900">
            <strong>Target Portfolio Impact:</strong> {current.outcomeMetric}
          </p>
        </div>
      </div>
    </div>
  );
}
