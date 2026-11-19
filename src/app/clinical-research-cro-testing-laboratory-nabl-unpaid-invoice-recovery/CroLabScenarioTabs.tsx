"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  context: string;
  sponsorTactic: string;
  legalDoctrine: string;
  actionableSteps: string[];
  statutoryOutcome: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "failed-babe-pharma",
    tabLabel: "Failed BA/BE Trial",
    badge: "Pharma Sponsor Default",
    title: "Pharma Sponsor Cancels Final 40% Milestone After Drug Fails Bioequivalence",
    context:
      "A formulation sponsor commissioned a Phase I / BA-BE cross-over study in 24 healthy volunteers. Upon receiving preliminary pharmacokinetic data revealing that the 90% confidence interval for Cmax/AUC fell outside 80.00%–125.00%, the sponsor refused to release the final ₹18,50,000 milestone invoice, alleging 'defective clinical services'.",
    sponsorTactic:
      "Claiming the study is 'useless for DCGI / USFDA submission' and attempting to treat independent scientific evaluation as an outcome-guaranteed commercial procurement.",
    legalDoctrine:
      "GLP Anti-Contingency Mandate & Contract Act Section 23: Testing fees cannot lawfully be conditioned on positive therapeutic or bioequivalence results. Such contingency clauses violate public policy by compromising scientific neutrality.",
    actionableSteps: [
      "Issue formal statutory notice asserting that CRO obligations were strictly procedural (protocol compliance, ICH-GCP, volunteer safety, bioanalytical validation).",
      "Exercise common-law and contractual bailee lien over the audited Final Clinical Study Report (CSR), electronic signatures, and Form CT-21 submission filings.",
      "Notify sponsor's regulatory affairs team that unauthorized submission of draft data to CDSCO / DCGI constitutes regulatory fraud under NDCTR 2019.",
      "File summary suit under Order XXXVII CPC or MSME MSEFC claim demanding principal invoice plus 3x RBI compound interest.",
    ],
    statutoryOutcome:
      "100% principal recovery plus statutory penal interest; court rejects sponsor's outcome defense as an invalid sham plea.",
  },
  {
    id: "failed-bis-nabl-sample",
    tabLabel: "Failed BIS / FSSAI Specs",
    badge: "NABL Material / Food Lab",
    title: "Industrial Buyer Refuses NABL Testing Fee After Sample Fails BIS Specifications",
    context:
      "A manufacturing client submitted structural steel, packaged drinking water, or food consignments to an accredited NABL analytical laboratory for BIS compliance certification. The laboratory test report confirmed heavy metal contamination or tensile yield failure. The client refused to clear the ₹4,20,000 analytical ledger, arguing they cannot pay for a 'failed certificate'.",
    sponsorTactic:
      "Withholding testing charges under the assertion that only an passing test report provides commercial utility for product dispatch.",
    legalDoctrine:
      "ISO/IEC 17025:2017 Clause 4.1 (Mandatory Impartiality) & Indian Contract Act Section 70 (Quantum Meruit): A certified testing laboratory is legally mandated to report objective scientific findings without commercial bias. Services rendered must be remunerated irrespective of sample quality.",
    actionableSteps: [
      "Send legal demand citing NABL-131 criteria and Section 70 of the Contract Act for non-gratuitous professional analytical testing rendered.",
      "Enforce Section 43B(h) of the Income Tax Act notice warning of corporate expense disallowance and tax penalties if unpaid beyond 45 days.",
      "Dispatch formal intimation that the lab will upload the authentic non-conforming test report to the national laboratory portal (e-BAP / BIS portal), preventing market diversion.",
      "Initiate expedited commercial recovery notice under Order 37 CPC / Negotiable Instruments Act Section 138 if advance cheques bounced.",
    ],
    statutoryOutcome:
      "Full settlement within 15–30 days as client seeks to prevent regulatory reporting and tax disallowance.",
  },
  {
    id: "raw-data-hijack",
    tabLabel: "Data Hijack & Dossier",
    badge: "Bioanalytical Chromatography",
    title: "Sponsor Demands Raw Instrument Audit Trails While Withholding Validation Dues",
    context:
      "A generic pharma enterprise withheld ₹14,80,000 in bioanalytical method development and LC-MS/MS sample analysis charges while aggressively demanding that the CRO surrender raw instrumental data, electronic audit trails, and 21 CFR Part 11 database dumps for submission to an overseas regulatory agency.",
    sponsorTactic:
      "Attempting to harvest the intellectual output and raw scientific data through junior technical staff without executive commercial sign-off.",
    legalDoctrine:
      "Copyright Act, 1957 Section 14/17 & Bharatiya Sakshya Adhiniyam, 2023 Section 63: The CRO retains proprietary copyright in analytical method validation dossiers, custom chromatography methods, and calibrated run sequences until full contractual payment is received.",
    actionableSteps: [
      "Lock down all LIMS server access, chromatogram data exports, and electronic audit trails behind multi-factor administrative authentication.",
      "Issue Cease & Desist legal notice asserting copyright ownership and warning of immediate international regulatory notification (USFDA, EMA, TGA) of disputed data integrity.",
      "Lodge formal copyright reservation and demand immediate settlement under threat of Commercial Court Section 2(1)(c)(xvii) intellectual property injunction.",
      "Serve Section 8 IBC Demand Notice (Form 3) if sponsor debt exceeds ₹1 Crore statutory insolvency threshold.",
    ],
    statutoryOutcome:
      "Immediate release of outstanding funds prior to sponsor filing overseas regulatory marketing dossiers.",
  },
  {
    id: "multicenter-trial-abandonment",
    tabLabel: "Multicenter Trial Halt",
    badge: "Clinical Site Abandonment",
    title: "Sponsor Abruptly Abandons Phase II/III Trial: Unpaid Investigator & CRO Dues",
    context:
      "Due to interim lack of clinical efficacy or budget shortfalls, a multinational or mid-tier pharmaceutical company unilaterally terminated an ongoing multi-center clinical trial across 8 hospital sites, refusing to clear ₹38,50,000 in accrued CRO monitoring charges, Institutional Ethics Committee (IEC) review fees, and Principal Investigator honorariums.",
    sponsorTactic:
      "Invoking termination-for-convenience clauses while attempting to walk away from accrued study site liabilities and volunteer safety closeout costs.",
    legalDoctrine:
      "New Drugs and Clinical Trials Rules, 2019 (Rules 22, 23 & Chapter V) & Indian Contract Act Section 73: Trial termination does not extinguish accrued liabilities. The sponsor remains statutorily liable for all incurred investigator fees, safety follow-up expenses, and contracted wind-down milestones.",
    actionableSteps: [
      "Collate tripartite clinical trial agreements (CTA), Ethics Committee approvals, patient visit logs, and investigator site payment reconciliations.",
      "Issue comprehensive institutional demand notice quantifying accrued site management costs, close-out audit charges, and non-cancellable commitments.",
      "Lodge formal complaint before the Central Licensing Authority (DCGI / CDSCO) citing ethical abandonment and violation of volunteer monitoring covenants.",
      "Initiate Section 18 MSMED Act conciliation-arbitration or pre-institution mediation under Section 12A of the Commercial Courts Act.",
    ],
    statutoryOutcome:
      "Escalated settlement including full reimbursement of hospital site costs, investigator fees, and CRO management margins.",
  },
];

export default function CroLabScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Tab Switcher */}
      <div className="flex border-b border-slate-200 bg-slate-50/75 overflow-x-auto scrollbar-thin">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-sm"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isActive ? "bg-[#DC2626]" : "bg-slate-300"
                }`}
              />
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
              {activeScenario.badge}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              {activeScenario.title}
            </h3>
          </div>
        </div>

        {/* Fact Pattern & Sponsor Tactic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Factual Commercial Dispute
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.context}
            </p>
          </div>
          <div className="bg-red-50/60 border border-red-200/70 rounded-xl p-4">
            <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
              Sponsor Default Strategy
            </p>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed font-medium">
              {activeScenario.sponsorTactic}
            </p>
          </div>
        </div>

        {/* Core Statutory Defense */}
        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5">
          <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Governing Legal Precedent &amp; Anti-Contingency Mandate
          </p>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {activeScenario.legalDoctrine}
          </p>
        </div>

        {/* Actionable SOP Protocol */}
        <div>
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Institutional CRO / Lab Enforcement Checklist
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeScenario.actionableSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs text-slate-700 leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Outcome Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold">
            &check;
          </div>
          <div>
            <p className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
              Creditor Outcome Benchmark
            </p>
            <p className="text-xs sm:text-sm text-emerald-800 font-medium">
              {activeScenario.statutoryOutcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
