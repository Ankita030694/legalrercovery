"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  badgeColor: string;
  title: string;
  context: string;
  statutoryTrap: string;
  recoveryPlaybook: string;
  actionableSteps: string[];
  expectedOutcome: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "receivables-diversion",
    tabLabel: "Sales Receivables Diversion",
    badge: "Direct Cash Leakage & Waterfall Breach",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Developer Directs Homebuyer Receivables into Shadow Current Accounts, Starving Landowner Share",
    context:
      "Under a registered 65:35 Revenue Share JDA for a ₹180 Crore residential township, all allottee installments were covenanted to flow into an agreed master project escrow account with automated daily sweeps. In Month 14, the landowner discovers the developer's marketing arm issued demand letters instructing allottees to remit payments into an undisclosed private current account at a different bank, siphoning over ₹16.4 Crore without landowner visibility.",
    statutoryTrap:
      "Informal email objections allow the developer to burn through diverted liquidity on other land parcels or sister ventures. Once customer cash is dissipated, the project stalls and homebuyers file RERA Section 18 complaints against the landowner as a statutory co-promoter, exposing the landowner's underlying freehold title to attachment!",
    recoveryPlaybook:
      "File an urgent Section 9 petition under the Arbitration and Conciliation Act, 1996 before the High Court / Commercial Court seeking an immediate mandatory injunction directing the developer and collection banks to disclose all accounts, freezing developer-controlled shadow accounts, and directing all customer receivables into the RERA Section 4(2)(l)(D) designated escrow account. Simultaneously notify the Real Estate Regulatory Authority under Section 35 for a forensic audit of project cash flows.",
    actionableSteps: [
      "Issue a 48-Hour Statutory Default & Cure Notice citing RERA Section 4(2)(l)(D) and JDA waterfall covenants.",
      "Lodge a Section 9 Arbitration Petition seeking ad-interim freezing of the developer's undisclosed current accounts and mandatory disclosure on affidavit.",
      "Issue third-party intimations to project lenders and home finance institutions warning that disbursement into non-RERA accounts violates RBI housing finance guidelines.",
      "Initiate Section 35 RERA forensic audit proceedings to inspect developer sales ledgers and ERP payment records.",
    ],
    expectedOutcome:
      "Judicial order attaching shadow accounts, redirection of all receivables to audited RERA escrow, and securing 100% of landowner's ₹5.74 Cr diverted entitlement.",
  },
  {
    id: "area-share-mortgage",
    tabLabel: "Area Share Alienation",
    badge: "Title & Collateral Threat",
    badgeColor: "bg-amber-950/70 border-amber-800 text-amber-300",
    title: "Developer Illegally Pledges or Sells Landowner's Allocated Units to Mezzanine Lenders",
    context:
      "In an Area Share JDA governed by a registered Supplementary Allocation Agreement, Tower B (48 flats) is exclusively earmarked as the Landowner's Share. The developer, facing working capital stress on another commercial project, mortgages the entire project land and super-structure—including Tower B—to a private credit fund via an equitable mortgage without the landowner's knowledge or joint execution.",
    statutoryTrap:
      "If the mezzanine fund initiates SARFAESI Section 13(4) physical possession or registers a CERSAI security interest, the landowner's clear marketable title becomes clouded with multi-crore third-party encumbrances. Civil suits without interim injunctions take years, during which allottees or lenders take possession.",
    recoveryPlaybook:
      "Deploy an immediate two-prong strike: (1) File a Commercial Court application under Section 9 of the Arbitration Act read with Specific Relief Act Section 10 & 20A for an injunction restraining registration of any charge, sale deed, or conveyance on Tower B units; (2) Issue a formal public notice and intimation to CERSAI, the Sub-Registrar of Assurances, and the mezzanine fund proving prior registered title and absence of developer mortgage authority under the registered JDA.",
    actionableSteps: [
      "Submit verified copies of registered JDA and Supplementary Allocation Agreement to the Sub-Registrar under Registration Act Section 21.",
      "File Commercial Court Section 9 application seeking stay on SARFAESI actions against landowner's earmarked share.",
      "Issue Cease-and-Desist notices to the private credit fund and its debenture trustees establishing fraudulent encumbrance.",
      "Seek cancellation of unauthorized memorandums of deposit of title deeds (MODTD) under Specific Relief Act Section 31.",
    ],
    expectedOutcome:
      "Commercial Court ad-interim injunction restraining creation of third-party rights on Tower B; release of wrongful lender charge within 45 days.",
  },
  {
    id: "realization-deflation",
    tabLabel: "Under-Reported Sales",
    badge: "Valuation Fraud & Discounting",
    badgeColor: "bg-purple-950/70 border-purple-800 text-purple-300",
    title: "Developer Sells Prime Units at Artificial Discounts to Affiliates & Re-Sells at Market Rates",
    context:
      "A landowner entitled to 32% of Gross Realizations discovers that 30 luxury sea-view apartments were registered at circle rate (₹9,500/sq.ft.) to entity shell companies owned by the developer's relatives, while identical floor plates were marketing openly at ₹18,500/sq.ft. The developer pays the landowner 32% calculated solely on the deflated circle rate, pocketing an illicit ₹27 Crore spread upon off-market assignment.",
    statutoryTrap:
      "Standard dispute notices are brushed off as 'commercial business discretion' or market slowdowns. Without judicial disclosure of actual consideration, banking trails, and cash flow affidavits, the landowner forfeits tens of crores in real project appreciation.",
    recoveryPlaybook:
      "Invoke Section 9 of the Arbitration Act for appointment of an independent Court Commissioner / Forensic Chartered Accountant to inspect builder ERP systems, broker commission ledgers, and buyer assignment agreements. Apply under Commercial Courts Act Section 2(1)(c)(vii) for a decree claiming differential gross revenue based on prevailing Fair Market Value under Section 73 of the Indian Contract Act.",
    actionableSteps: [
      "Obtain certified copies of sale deeds from the Sub-Registrar to substantiate below-market pricing and affiliate buyer identities.",
      "Serve Section 21 Arbitration Invocation Notice demanding ₹8.64 Crore differential revenue plus 18% commercial interest.",
      "File an application for discovery and inspection of documents under CPC Order XI Rule 1 (Commercial Courts Act) to obtain buyer payment trails.",
      "Petition RERA under Section 38 for imposition of penalties for fraudulent misrepresentation of project booking prices.",
    ],
    expectedOutcome:
      "Court Commissioner appointed to audit project books; developer compelled to settle differential entitlement of ₹8.64 Cr prior to award.",
  },
  {
    id: "delayed-milestone-mgr",
    tabLabel: "Construction Delay & MGR Default",
    badge: "Prolongation & Liquidity Crisis",
    badgeColor: "bg-blue-950/70 border-blue-800 text-blue-300",
    title: "Project Stalled at 45% Construction with Developer Defaulting on Minimum Guaranteed Yield",
    context:
      "The JDA provided a strict 36-month construction deadline with a Minimum Guaranteed Return (MGR) of ₹25 Lakh/month payable to the landowner starting from Month 24 until completion. The developer abandoned active work at Month 30, achieved only 45% RCC structure, and has defaulted on 8 consecutive months of MGR while refusing to refund the ₹10 Crore initial interest-free refundable deposit.",
    statutoryTrap:
      "Landowners who prematurely terminate the JDA without preserving arbitral remedies risk losing their development potential, facing injunctions from allottees under RERA Section 11, and remaining trapped in prolonged title litigation while the structure depreciates.",
    recoveryPlaybook:
      "Exercise the Step-In Right or appoint an alternate Co-Developer via Section 20A / 20B of the Specific Relief Act (Special Provisions for Infrastructure Projects) while maintaining the original developer's liability. Secure an arbitral attachment under Section 9 / Section 17 on the defaulting developer's unsold 65% inventory to recover accrued MGR arrears (₹2.0 Crore), delay liquidated damages, and forfeiture of developer security.",
    actionableSteps: [
      "Issue 30-Day Cure-or-Step-In Notice invoking JDA milestone default clauses and Specific Relief Act Section 20A.",
      "Submit joint representation to RERA Authority under Section 8 to facilitate project completion through landowner-led consortium.",
      "Move Commercial Court for freezing alienation of developer's unsold units until accumulated MGR and liquidated damages are secured.",
      "File Section 11(6) Arbitration application for appointment of an infrastructure arbitrator to adjudicate loss of rental appreciation.",
    ],
    expectedOutcome:
      "Arbitral interim order securing ₹12 Cr in unsold units, resumption of project under receiver/co-developer, and monthly MGR recovery.",
  },
];

export default function JDARecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeTab;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="pt-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${currentScenario.badgeColor}`}
          >
            {currentScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Real Estate JDA Failure Mode #{SCENARIOS.findIndex((s) => s.id === activeTab) + 1}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
          {currentScenario.title}
        </h3>

        {/* Commercial Context & Trap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
              Commercial Context &amp; Breach Mechanism
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.context}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-red-50/70 border border-red-200 shadow-xs">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] inline-block"></span>
              The Legal Trap / Delay Risk
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentScenario.statutoryTrap}
            </p>
          </div>
        </div>

        {/* Strategy Playbook */}
        <div className="p-4 sm:p-6 rounded-xl bg-slate-900 text-white shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-red-600/30 border border-red-500/50 text-[10px] font-bold text-red-300 uppercase">
              Statutory Intervention
            </span>
            <span className="text-xs text-slate-300 font-semibold">
              Arbitration s.9 &bull; RERA s.4 Escrow Audit &bull; Commercial Courts Act
            </span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-white mb-2">
            Strategic Landowner Recovery Playbook
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
            {currentScenario.recoveryPlaybook}
          </p>

          <h5 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
            Actionable Legal Enforcement Steps:
          </h5>
          <ul className="space-y-2 mb-4">
            {currentScenario.actionableSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <span className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Target Recovery Outcome:
            </span>
            <span className="text-xs font-medium text-slate-200">
              {currentScenario.expectedOutcome}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
