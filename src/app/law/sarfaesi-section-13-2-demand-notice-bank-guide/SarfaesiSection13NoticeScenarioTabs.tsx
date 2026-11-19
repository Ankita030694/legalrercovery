"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabTitle: string;
  badge: string;
  situation: string;
  risk: string;
  legalBasis: string;
  sopSteps: string[];
  sampleClause: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "day-58-objection",
    tabTitle: "1. Day-58 13(3A) Objection",
    badge: "Tactical Borrower Delay",
    situation:
      "Borrower waits until Day 56–58 of the 60-day statutory notice period to serve a multi-page representation under Section 13(3A), deliberately attempting to stall Section 13(4) possession measures and claim that the 60-day clock resets.",
    risk:
      "If the Authorized Officer (AO) proceeds with Section 13(4) symbolic possession on Day 61 without formally deciding and communicating the rejection, DRT will stay proceedings under Section 17 (*Mardia Chemicals* / *ITC v. Blue Coast*).",
    legalBasis:
      "SARFAESI Act 2002 Section 13(3A) mandates communication of reasons within 15 days of receipt of representation. Disposing of the objection does NOT restart the 60-day demand window.",
    sopSteps: [
      "Log the exact date and timestamp of receipt of the borrower representation in the Bank Stressed Asset Management Register.",
      "Convene internal legal/credit review within 48 hours to draft a paragraph-by-paragraph factual rebuttal referencing loan agreements, sanction letters, and statement of accounts.",
      "Issue the reasoned rejection letter under the hand and seal of the Authorized Officer within 15 days of receipt.",
      "Dispatch the 13(3A) disposal via Speed Post RPAD and email. Once 15 days elapse from notice service AND reasons are dispatched, immediate Section 13(4) measures are legally unassailable.",
    ],
    sampleClause:
      "With reference to your representation dated [Date] received by the undersigned Authorized Officer on [Date] under Section 13(3A) of the SARFAESI Act, 2002, please take notice that upon due examination of the records and loan covenants, your objections are found meritless and hereby rejected for the reasons itemized hereinbelow...",
  },
  {
    id: "rpad-returned",
    tabTitle: "2. Evasive Borrower / RPAD Evaded",
    badge: "Rule 3 Service Compliance",
    situation:
      "Speed Post RPAD packets addressed to the borrower, co-borrowers, and corporate/personal guarantors return with postal remarks 'Unclaimed', 'Refused', 'Left Without Address', or 'Door Locked'.",
    risk:
      "Borrower files a Securitisation Application (SA) before DRT under Section 17 alleging violation of natural justice and non-service under Security Interest (Enforcement) Rules, 2002 Rule 3.",
    legalBasis:
      "Rule 3(1) of the Security Interest (Enforcement) Rules, 2002 permits service by registered post with acknowledgement due, speed post, courier, fax, or electronic mail. Rule 3(2) and 3(3) govern affixture and two-newspaper publication.",
    sopSteps: [
      "Preserve the original unopened postal envelope with the postal remark along with India Post web tracking consignment proof certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
      "Instruct bank field recovery officers to conduct personal service. If refused, obtain an endorsement signed by two independent panchas/witnesses.",
      "Affix a copy of the Section 13(2) notice on the outer door or conspicuous place of the borrower's mortgaged property and residential address.",
      "Publish the full notice or statutory gist in two leading newspapers circulating in the locality, of which at least one must be in the vernacular language.",
    ],
    sampleClause:
      "Notice is hereby given under Section 13(2) read with Rule 3 of the Security Interest (Enforcement) Rules, 2002, as service sent via Speed Post Consignment No. [Consignment Number] has returned with postal remark 'Refused/Unclaimed'. The secured debtor is hereby called upon to pay the sum of Rs. [Amount] within 60 days...",
  },
  {
    id: "agricultural-land-defense",
    tabTitle: "3. Agricultural Land Defense (s.31(i))",
    badge: "Section 31(i) Immunity Trap",
    situation:
      "Borrower files DRT application claiming the mortgaged secured asset is 'agricultural land' exempt under Section 31(i) of the SARFAESI Act, producing ancestral revenue extracts (7/12, Patta, or Jamabandi).",
    risk:
      "Securitisation action gets completely invalidated ab initio by DRT if the bank fails to prove actual commercial/industrial user or conversion status.",
    legalBasis:
      "Supreme Court judgment in *ITC Limited v. Blue Coast Hotels Ltd.* (2018) 15 SCC 99: Creation of security interest and subsequent non-agricultural commercial usage estops the debtor from claiming Section 31(i) agricultural exemption.",
    sopSteps: [
      "Before dispatching Section 13(2) notice, verify whether the mortgaged land has been converted for non-agricultural (NA) use or has had industrial layout approvals.",
      "Procure a certified inspection certificate from the local Sub-Divisional Magistrate (SDM) / Tahsildar or municipal authority certifying non-agricultural cultivation.",
      "Conduct a geotagged photographic inspection of the property demonstrating absence of farming activity, factory sheds, warehousing, or commercial fencing.",
      "Explicitly aver in Section 13(2) Schedule that the land is commercial/industrial and outside the protective purview of Section 31(i).",
    ],
    sampleClause:
      "The secured asset described in Schedule 'A' hereto, though historically recorded in village revenue records under Survey No. [Number], is currently put to exclusively non-agricultural commercial use, as documented in Tahsildar Inspection Report dated [Date], and is not agricultural land within the meaning of Section 31(i) of the Act.",
  },
  {
    id: "consortium-multi-lender",
    tabTitle: "4. Consortium & Multi-Lender (s.13(9))",
    badge: "Consortium 60% Consent",
    situation:
      "A corporate or commercial borrower enjoys multiple credit facilities from a consortium or under multiple banking arrangements sharing pari-passu charge over prime fixed assets.",
    risk:
      "Action initiated unilaterally by a minority bank without the requisite 60% value consensus is quashed under Section 13(9) as null and void.",
    legalBasis:
      "Section 13(9) of the SARFAESI Act, 2002: In multi-creditor cases, no secured creditor can exercise any right under Section 13(4) unless agreed upon by creditors representing not less than 60% in value of the amount outstanding.",
    sopSteps: [
      "Reconcile outstanding dues across all consortium members as on the common cut-off date to calculate exact percentage values of aggregate exposure.",
      "Issue a formal Consortium Notice of Intent to Enforce Security Interest under SARFAESI Act, requesting written affirmative consent.",
      "Secure written resolutions/mandates from lenders representing >= 60% in value of outstanding secured debt prior to invoking Section 13(2) or Section 13(4).",
      "Explicitly mention consortium authorization in the preamble of the Section 13(2) demand notice, naming the Lead Bank or Authorized Officer acting on consortium behalf.",
    ],
    sampleClause:
      "The undersigned Authorized Officer issues this Demand Notice on behalf of the Consortium of Secured Creditors comprising [Bank A, Bank B, Bank C], who collectively represent [XX]% in value of the aggregate outstanding secured debt, in full compliance with the statutory mandate of Section 13(9) of the SARFAESI Act, 2002.",
  },
];

export default function SarfaesiSection13NoticeScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-white shadow-xl">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-2">
          Authorized Officer Operational Playbooks
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          4 Bank Failure Modes: SARFAESI Section 13(2) &amp; 13(3A) Rebuttals
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Select a default scenario below to review the statutory pitfall, legal risk, step-by-step SOP, and drafting clause.
        </p>
      </div>

      {/* Tabs Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-800">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/40"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {scenario.tabTitle}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="mt-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
              Scenario Trigger &amp; Classification
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">{current.badge}</h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-md bg-red-500/10 text-red-400 border border-red-500/20 font-mono">
            {current.legalBasis.split(":")[0]}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1.5">
              Borrower Obstruction Mode
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{current.situation}</p>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1.5">
              DRT Litigation &amp; Quashing Risk
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{current.risk}</p>
          </div>
        </div>

        <div className="bg-slate-800/40 p-4 sm:p-5 rounded-xl border border-slate-700/50">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-2">
            Bank Authorized Officer Action Protocol (Step-by-Step SOP)
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
            {current.sopSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-[10px] font-bold mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs">
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Vetted Statutory Notice Drafting Language:
          </span>
          <p className="text-slate-300 leading-relaxed bg-black/40 p-3.5 rounded-lg border border-slate-800/80 select-all">
            &ldquo;{current.sampleClause}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
