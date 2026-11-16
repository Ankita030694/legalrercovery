"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  context: string;
  debtorTactic: string;
  statutoryRail: string;
  contractorCountermeasure: string;
  timeline: string;
  outcome: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "sec34-deposit",
    tabLabel: "1. Developer Sec. 34 Stall",
    badge: "Section 36(3) Pre-Deposit Rail",
    title: "Developer Files Section 34 Challenge Solely to Stall Execution and Starve Contractor Cash Flow",
    context:
      "A commercial real estate developer or EPC client suffers an adverse arbitral award of ₹8.40 Crores. Rather than satisfying the award, the developer files a boilerplate Section 34 petition in the High Court / Commercial Court, attempting to invoke the pre-2015 myth that mere filing stays execution.",
    debtorTactic:
      "Asserting that the arbitral award is sub-judice and non-executable until the Section 34 petition is finally heard (which could take 2 to 4 years), while diverting project receivables into subsidiary accounts.",
    statutoryRail:
      "Arbitration and Conciliation Act, 1996 — Section 36(2) and Section 36(3) read with CPC Order XLI Rule 5 and Supreme Court rulings in Manish v. Godawari and Pam Developments.",
    contractorCountermeasure:
      "Contractor files an immediate Section 36 execution petition along with an objection to any unconditional interim stay. Invoking Section 36(3), counsel argues that stay of a money award must strictly follow Order XLI Rule 5 principles, compelling the developer to deposit 100% of the awarded amount (principal + interest) in court or provide an unconditional bank guarantee as a mandatory condition precedent for hearing Section 34.",
    timeline: "30 to 60 Days from Section 34 filing",
    outcome:
      "Court orders 100% pre-deposit within 4 to 6 weeks. If the developer fails to deposit, the interim stay is vacated and direct execution (bank freezing) proceeds instantaneously.",
  },
  {
    id: "psu-75-payout",
    tabLabel: "2. PSU / NHAI 75% Payout",
    badge: "NITI Aayog / CCEA Directive",
    title: "Government Agency or Public Sector Undertaking Refuses Payout Pending Multi-Tier Appeals",
    context:
      "An infrastructure contractor secures a ₹22.50 Crore arbitral award against a state road authority or Central PSU (e.g., NHAI, NTPC, BHEL). The PSU automatically challenges the award under Section 34 as a bureaucratic safeguard to avoid CAG audit scrutiny.",
    debtorTactic:
      "Claiming sovereign immunity or state entity privilege under Order XXVII Rule 8A of CPC to delay payment without furnishing financial security or cash deposits.",
    statutoryRail:
      "Cabinet Committee on Economic Affairs (CCEA) & NITI Aayog Office Memorandum on Measures to Revive Construction Sector read with Vivad se Vishwas II guidelines and Supreme Court ruling in Pam Developments v. State of WB.",
    contractorCountermeasure:
      "Contractor issues a formal demand invoking the binding NITI Aayog circular directing all Central Ministries, CPSEs, and autonomous bodies to release 75% of the arbitral award amount into an escrow account against an equivalent Bank Guarantee, pending Section 34 disposal. If the PSU fails to comply within 30 days, contractor executes under Section 36, relying on Pam Developments to defeat the Order XXVII Rule 8A defense.",
    timeline: "30 to 45 Days post-award certification",
    outcome:
      "Contractor realizes 75% cash liquidity immediately to service working capital loans, while the PSU carries the burden and cost of prosecuting the Section 34 challenge.",
  },
  {
    id: "garnishee-freeze",
    tabLabel: "3. Siphoned Bank Accounts",
    badge: "CPC Order XXI Rules 41 & 46",
    title: "Judgment Debtor Siphons Primary Accounts and Conceals Real Estate or Commercial Assets",
    context:
      "The arbitral award has crystallized beyond 90 days with no stay granted. Upon filing Section 36 execution, the contractor discovers that the developer's registered operating current account maintains negligible balances.",
    debtorTactic:
      "Operating through shadow bank accounts, routing flat buyer booking advances through sister LLPs, and refusing to disclose financial records during execution hearings.",
    statutoryRail:
      "Code of Civil Procedure, 1908 — Order XXI Rule 41 (Oral examination & affidavit of assets), Rule 46 / 46A–46I (Garnishee notices), and Rule 54 (Immovable property attachment).",
    contractorCountermeasure:
      "Contractor files an urgent application under Order XXI Rule 41 directing the developer's Managing Director and Whole-Time Directors to appear in person and file comprehensive affidavits of assets (Form 16A Appendix E) under perjury sanctions. Simultaneously, contractor issues Garnishee applications under Order XXI Rule 46A against project RERA Escrow accounts, HDFC/SBI lender escrow accounts, and commercial tenants paying lease rentals.",
    timeline: "45 to 90 Days during Section 36 execution",
    outcome:
      "Executing Court restrains garnishee banks and tenants from releasing funds to the debtor, directing direct deposit into the court registry for contractor release.",
  },
  {
    id: "ibc-insolvency",
    tabLabel: "4. IBC CIRP Leverage (>₹1 Cr)",
    badge: "Kotak Mahindra Bank Doctrine",
    title: "Award Exceeds ₹1 Crore: Triggering NCLT Corporate Insolvency Resolution Process (CIRP)",
    context:
      "The contractor holds a final, uncontested or post-challenge arbitral award of ₹4.80 Crores against a private corporate builder or EPC concessionaire that consistently dodges civil court execution summons.",
    debtorTactic:
      "Using civil court procedural technicalities to delay Section 36 hearings, filing repetitive revision petitions under Article 227 to exhaust the contractor's legal budget.",
    statutoryRail:
      "Insolvency and Bankruptcy Code, 2016 — Section 8, Section 9 (or Section 7) read with Supreme Court 3-Judge Bench holding in Kotak Mahindra Bank Ltd. v. A. Balakrishnan (2022) 9 SCC 186.",
    contractorCountermeasure:
      "Contractor serves a Form 3/Form 4 statutory demand notice under Section 8 of the IBC demanding payment within 10 days. The Supreme Court in Kotak Mahindra Bank established that a final arbitral award or money decree creates a fresh operational/financial debt and a new 3-year limitation trigger. The debtor cannot raise 'pre-existing dispute' defenses because the underlying commercial dispute has already merged and finalized into the arbitral award.",
    timeline: "10 Days notice + 30 Days to NCLT filing",
    outcome:
      "Faced with the existential risk of corporate death, board supersession, and CIRP admission, corporate promoters settle 100% of the award plus post-award interest via demand draft.",
  },
];

export default function ArbitralAwardExecutionScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="border-b border-slate-100 pb-4 mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 mb-2">
          Interactive Tactical Matrix &bull; 4 Commercial Failure Modes
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
          Select an Arbitral Award Enforcement Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Evaluate debtor stalling tactics, relevant statutory hooks, and creditor countermeasures across private developers and government agencies.
        </p>
      </div>

      {/* Tab Selector Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6">
        {SCENARIOS.map((sc) => {
          const isSelected = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`px-3 py-3 rounded-xl text-left transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                Mode {sc.tabLabel.charAt(0)}
              </p>
              <p className="text-xs sm:text-sm font-extrabold mt-0.5 leading-snug line-clamp-2">
                {sc.tabLabel.replace(/^\d+\.\s*/, "")}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Scenario Details Box */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white mb-1.5">
              {activeScenario.badge}
            </span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {activeScenario.title}
            </h4>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">
              Estimated Resolution Speed
            </span>
            <span className="text-xs sm:text-sm font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block mt-0.5">
              {activeScenario.timeline}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-1.5 text-red-700 font-bold uppercase text-[11px] tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Debtor Stalling Tactic
            </div>
            <p className="text-slate-600 leading-relaxed">{activeScenario.debtorTactic}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-1.5 text-slate-800 font-bold uppercase text-[11px] tracking-wider">
              <span className="w-2 h-2 rounded-full bg-slate-800" />
              Statutory Basis
            </div>
            <p className="text-slate-600 leading-relaxed font-mono text-[11px] sm:text-xs">
              {activeScenario.statutoryRail}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border-l-4 border-[#DC2626] border-y border-r border-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider">
            <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-black">
              &check;
            </span>
            Contractor Legal Countermeasure
          </div>
          <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
            {activeScenario.contractorCountermeasure}
          </p>
        </div>

        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-emerald-900">
          <span className="text-emerald-700 font-black text-base shrink-0 mt-0.5">&bull;</span>
          <div>
            <strong className="font-bold text-emerald-950 block mb-0.5">Direct Commercial Outcome:</strong>
            {activeScenario.outcome}
          </div>
        </div>
      </div>
    </div>
  );
}
