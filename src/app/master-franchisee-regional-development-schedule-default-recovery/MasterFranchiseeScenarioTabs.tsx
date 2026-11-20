"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  badge: string;
  title: string;
  trigger: string;
  statutoryHook: string;
  actionSteps: string[];
  counterDefense: string;
  recoveryOutcome: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "schedule-squatting",
    badge: "Scenario 1 · Zero-Store Squatting",
    title: "Master Franchisee Squatting on State Exclusivity (0–2 of 15 Stores Opened)",
    trigger:
      "Master Franchisee paid the initial territory reservation fee 18 months ago, opened 1 flagship store, and has missed Q2–Q6 Regional Development Schedule (RDS) milestones while blocking rival investors.",
    statutoryHook:
      "Indian Contract Act, 1872 s.55 (Time of the Essence in Commercial Schedules) + s.74 (Pre-Agreed Milestone Liquidated Damages) + Commercial Courts Act s.2(1)(c)(ix)",
    actionSteps: [
      "Serve a strict 30-day Cure-or-Exclusivity-Revocation Notice referencing the Regional Development Schedule table and audited store-opening shortfall.",
      "Invoke the automatic conversion clause converting Exclusive State Rights into Non-Exclusive / Single-Unit Rights if the shortfall is not cured within 30 days.",
      "Move Commercial Court under Arbitration Act s.9 (or Commercial Suit) for a declaration restraining the Master from interfering with new direct franchisees in the unserved districts.",
    ],
    counterDefense:
      "Master claims 'force majeure / real estate mall delays' or demands refund of the upfront Master Territory Fee.",
    recoveryOutcome:
      "Exclusivity cleanly stripped in 30–45 days; upfront territory fee forfeited as earned consideration / s.74 milestone damages; principal brand unlocks 10+ stalled districts immediately.",
  },
  {
    id: "fee-diversion",
    badge: "Scenario 2 · Sub-Franchise Fee Pocketing",
    title: "Master Pockets Sub-Franchise Sign-On Fees & Fails to Remit Principal Brand's Share",
    trigger:
      "Master signed 6 unit sub-franchisees collecting ₹15L–₹25L each in upfront fees and monthly 8% royalties, but remitted zero or partial 50% principal shares while issuing fake 'Brand NOCs'.",
    statutoryHook:
      "Bharatiya Nyaya Sanhita (BNS), 2023 s.316(5) (Criminal Breach of Trust by Agent/Entrusted Fiduciary) + NI Act s.138 (PDC Dishonour) + Commercial Courts Act s.2(1)(c)(ix) & s.12A Urgent Relief",
    actionSteps: [
      "Issue an Immediate Tripartite Accounting & Escrow Freeze Notice demanding certified GST GSTR-1 / bank credit ledgers of all sub-franchisees within 7 days.",
      "Serve direct Payment Redirect Notices on all 6 sub-franchisees instructing them to remit future royalties and pending fee tranches into the Principal Brand's designated escrow account.",
      "File a parallel BNS s.316(5) criminal complaint for misappropriated fiduciary fee shares alongside an Arbitration Act s.9 asset-disclosure and bank-attachment petition.",
    ],
    counterDefense:
      "Master alleges 'unadjusted marketing spend' or 'training cost set-offs' against collected sub-franchise fees.",
    recoveryOutcome:
      "Stops ongoing royalty leakage at the unit level within 7 days; forces settlement or secures Section 9 bank-balance freeze over diverted sub-franchisee sign-on fees.",
  },
  {
    id: "step-in-assignment",
    badge: "Scenario 3 · Tripartite Step-In Execution",
    title: "Terminating the Master While Preserving Healthy Sub-Franchisee Stores via Step-In",
    trigger:
      "The Master Franchisee is insolvent or in incurable default, but 12 sub-franchisees in the state are profitable, compliant outlets that want to continue operating under the Principal Brand.",
    statutoryHook:
      "Tripartite Step-In & Direct Assignment Clause + Indian Contract Act s.40 / s.62 (Novation & Substitution) + Specific Relief Act s.14/s.41",
    actionSteps: [
      "Trigger the Tripartite Step-In Election Notice simultaneously upon terminating the Master Franchise Agreement (MFA).",
      "Execute standardized Tripartite Novation & Direct Assignment Addenda with each compliant sub-franchisee, stepping directly into the Master's shoes as Licensor/Supplier.",
      "File an urgent Section 9 injunction barring the terminated Master from intimidating sub-franchisees, cutting off their POS/ERP logins, or demanding post-termination royalties.",
    ],
    counterDefense:
      "Master threatens sub-franchisees with 'tortious interference' or tries to rebrand the 12 outlets into a competing copycat chain.",
    recoveryOutcome:
      "Zero store closures across the state; 100% of healthy unit royalties redirected straight to Principal Brand HQ while Master's residual debt is pursued separately.",
  },
  {
    id: "cross-border-arb",
    badge: "Scenario 4 · International Brand vs Indian Master",
    title: "Foreign Brand Franchisor Enforcing Development Defaults Against an Indian Master",
    trigger:
      "An international QSR, retail, or fitness brand (Singapore/Dubai/UK/US HQ) faces a rogue Indian Master Franchisee violating store-opening SLAs and squatting on Indian trademarks.",
    statutoryHook:
      "Arbitration and Conciliation Act, 1996 Part I s.9 (Interim Relief in India even for Foreign-Seated Arbitrations under s.2(2) Proviso) + Part II s.44–49 (New York Convention Award Enforcement) + Trade Marks Act s.29",
    actionSteps: [
      "Verify whether the MFA excludes s.9 under the s.2(2) proviso; if not excluded, file an urgent s.9 petition in the relevant Indian High Court (Commercial Division) for trademark restraint and sub-franchisee step-in protection.",
      "Invoke foreign-seated institutional arbitration (SIAC / ICC / LCIA / MCIA) via formal Notice of Arbitration while seeking emergency arbitrator relief.",
      "For Indian-seated international commercial arbitrations, approach the Supreme Court under s.11(6) for rapid sole/tribunal appointment if the Indian Master stalls nomination.",
    ],
    counterDefense:
      "Indian Master invokes FEMA/RBI royalty remittance caps or files a pre-emptive civil suit in a local district court to derail foreign arbitration.",
    recoveryOutcome:
      "High Court refers local suit to arbitration under s.45 / s.8 while granting immediate s.9 protection over Indian IP and sub-franchisee cash flows.",
  },
];

export default function MasterFranchiseeScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Master Franchisee Default Scenarios"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(scenario.id)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span
                className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                  isSelected ? "text-red-100" : "text-[#DC2626]"
                }`}
              >
                {scenario.badge}
              </span>
              <span className="block text-xs font-bold leading-snug">
                {scenario.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-lg space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-2">
              {current.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              {current.title}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Failure Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.trigger}
            </p>
          </div>
          <div className="bg-red-950/40 border border-red-900/50 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1.5">
              Controlling Statutory Hook
            </p>
            <p className="text-xs sm:text-sm text-red-100 font-medium leading-relaxed">
              {current.statutoryHook}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            3-Step Creditor Escalation Protocol
          </p>
          <ol className="space-y-2.5">
            {current.actionSteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-amber-950/40 border border-amber-800/50 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
              Expected Master Counter-Defense
            </p>
            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
              {current.counterDefense}
            </p>
          </div>
          <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
              Net Institutional Outcome
            </p>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              {current.recoveryOutcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
