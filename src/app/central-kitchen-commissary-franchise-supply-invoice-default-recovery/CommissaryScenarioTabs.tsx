"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  trigger: string;
  brandRisk: string;
  legalRemedy: string;
  actionSteps: string[];
  timeline: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "cbd-local-sourcing",
    tabLabel: "1. Cash-Before-Delivery Backfire",
    badge: "FSSAI & Brand Safety Alert",
    trigger:
      "Franchisor switches a defaulting QSR or cafe outlet to Cash-Before-Delivery (CBD) after 21 days of unpaid central-kitchen bills; outlet stops ordering frozen chicken, sauces, or premix and secretly buys unverified local substitutes.",
    brandRisk:
      "Customer food poisoning, FSSAI sampling failure, or Zomato/Swiggy 1-star hygiene complaints immediately implicate the Brand Owner's central FSSAI license and trademark reputation under FSSAI Brand-Owner Quality Control mandates.",
    legalRemedy:
      "Serve an Immediate 7-Day Cure-or-Suspension Legal Notice combining (a) unpaid commissary invoice demand, (b) FSSAI & Trade Marks Act s.29 quality-control prohibition on unauthorized raw materials, and (c) emergency outlet inspection right.",
    actionSteps: [
      "Pull 14-day commissary indent drop vs live Zomato/Swiggy order volume to prove zero-indent anomaly.",
      "Conduct unannounced QA audit & photograph non-approved vendor cartons/local sauce pouches.",
      "Issue Cure-or-Suspension Notice suspending outlet operations & aggregator listings until arrears + FSSAI compliance are cured.",
    ],
    timeline: "48 Hours Audit + 7-Day Cure Window",
  },
  {
    id: "frozen-invoice-aging",
    tabLabel: "2. 45-Day Frozen Supply Overrun",
    badge: "Working Capital Bleed",
    trigger:
      "A multi-outlet cloud-kitchen or bakery franchisee accumulates ₹12L–₹25L in unpaid frozen patties, gravies, and dairy-base invoices while promising settlement 'after festive weekend sales'.",
    brandRisk:
      "Continuing open credit past 30 days turns the central commissary into an unsecured lender, while abrupt unnotified cutoffs trigger franchisee counter-allegations of 'wrongful supply starvation'.",
    legalRemedy:
      "Invoke Indian Contract Act s.51 (reciprocal promises) and Sale of Goods Act s.55: formally transition the outlet to a Prepaid Credit Wallet via written notice while locking existing arrears into an acknowledged balance schedule.",
    actionSteps: [
      "Reconcile signed cold-chain Proof of Delivery (POD), e-Way bills, and GST GSTR-1 invoice matching.",
      "Serve formal Credit-Limit Freeze & Prepaid Wallet Conversion Notice citing Contract Act s.51.",
      "Demand immediate 50% clearance + post-dated cheques or e-NACH top-up within 7 days.",
    ],
    timeline: "7–15 Days Structured Regularization",
  },
  {
    id: "enach-wallet-bounce",
    tabLabel: "3. Weekly e-NACH Mandate Bounce",
    badge: "PSS Act s.25 Criminal Track",
    trigger:
      "Franchisee's weekly automated commissary e-NACH / NACH debit bounces with 'Insufficient Funds' or 'Payment Stopped by Drawer' while the outlet continues selling brand menu items.",
    brandRisk:
      "Treating an e-NACH dishonour as a routine accounting follow-up wastes the strict 30-day statutory limitation window under Section 25 of the Payment and Settlement Systems Act, 2007.",
    legalRemedy:
      "Dispatch a standalone PSS Act s.25 Statutory Demand Notice within 30 days of the NPCI/bank return memo, giving 15 days to pay the exact bounced mandate value or face Magistrate criminal summons.",
    actionSteps: [
      "Download bank/NPCI e-NACH return memo and certify electronic ledger under BSA 2023 s.63.",
      "Keep the PSS s.25 notice strictly tied to the exact bounced mandate sum (Suman Sethi compliance).",
      "Run a parallel Commercial Legal Notice for remaining unbilled/open-credit commissary invoices.",
    ],
    timeline: "30-Day Statutory Notice + 15-Day Cure",
  },
  {
    id: "deposit-setoff-dispute",
    tabLabel: "4. Security Deposit Set-Off Fight",
    badge: "Contractual Set-Off Shield",
    trigger:
      "Defaulting franchisee stops paying central-kitchen invoices, demands 'adjust against my ₹5 Lakh refundable security deposit', and later threatens a refund suit alleging illegal forfeiture.",
    brandRisk:
      "Without a formal itemized Set-Off & Appropriation Notice, franchisees claim the brand unlawfully pocketed their interest-free security deposit without accounting for spoiled stock or unpaid bills.",
    legalRemedy:
      "Execute a formal Notice of Security Deposit Appropriation & Net Balance Demand under Contract Act s.73/74 and the Franchise Agreement's set-off clause, establishing a transparent net-recoverable ledger.",
    actionSteps: [
      "Itemize principal commissary invoices, 18% p.a. contractual interest, and cold-chain return losses.",
      "Serve a formal Deposit Set-Off Statement showing exact rupee-for-rupee appropriation.",
      "Demand the net deficit within 15 days; escalate to Arbitration s.9 / Commercial Court s.2(1)(c)(ix).",
    ],
    timeline: "15 Days Net-Balance Settlement / Arbitration",
  },
];

export default function CommissaryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Commissary Default Scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-lg"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/60">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-emerald-400">
            Target Window: {current.timeline}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1.5">
              Operational Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.trigger}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1.5">
              Brand &amp; FSSAI Exposure
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.brandRisk}</p>
          </div>
        </div>

        <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-xl p-4 mb-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
            Creditor Statutory Counter-Move
          </p>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
            {current.legalRemedy}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            3-Step Execution Protocol
          </p>
          <ul className="space-y-2">
            {current.actionSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
