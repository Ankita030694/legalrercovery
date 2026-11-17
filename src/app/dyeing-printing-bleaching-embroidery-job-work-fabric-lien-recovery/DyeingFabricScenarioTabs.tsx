"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  buyerTactic: string;
  legalExposure: string;
  counterStrategy: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "shade-mismatch-excuse",
    badge: "Export Cancellation Defense",
    title: "Merchant Claims 'Shade Variation' After Overseas Buyer Cancels Order",
    buyerTactic:
      "A merchant procures 5,000 kg cotton knits, sends grey goods for reactive dyeing, and signs off on a physical lab-dip swatch under D65 light. When their UK/EU export buyer cancels due to seasonal overstock, the merchant refuses to lift the dyed rolls and claims a ₹15 Lakh fabric damage counterclaim to evade ₹4.5 Lakh processing charges.",
    legalExposure:
      "If the process house releases fabric on oral promises, the merchant will file an unmerited commercial suit alleging delivery of defective goods under Sale of Goods Act s.59. If the mill holds goods without a formal Section 170 notice, the merchant alleges wrongful conversion under BNS Section 316 (criminal breach of trust).",
    counterStrategy:
      "Enforce approved lab-dip swatch estoppel. Under Indian Evidence rules and commercial custom, spectrophotometer delta-E (dE < 1.0) readings and signed physical swatches preclude post-facto subjective complaints. Assert Section 170 Bailee's Particular Lien with zero release until full settlement.",
    actionProtocol: [
      "Issue immediate 7-day Bailee Lien Notice under Section 170 Contract Act with spectrophotometer test certificate.",
      "Send formal requisition requiring merchant joint-inspection at the mill within 72 hours; failure to inspect constitutes deemed acceptance.",
      "Bill daily demurrage / pallet storage charges (₹250/day per roll cluster) to stop fabric squatting.",
      "Lodge MSMED Act Section 18 delayed payment reference claiming 3x RBI compounding interest from 45th day of processing completion."
    ],
  },
  {
    id: "excessive-shrinkage-counterclaim",
    badge: "Quality Blame Game",
    title: "Bogus 8% Shrinkage Claim on Bleached / Mercerized Woven Grey Fabric",
    buyerTactic:
      "Following rotary printing and stenter finishing, the merchant conducts uncalibrated home-wash tests and issues a debit note alleging 8.5% dimensional shrinkage against an unwritten 3% expectation, withholding ₹8 Lakh in job-work invoices across four consecutive delivery challans.",
    legalExposure:
      "Allowing debit notes to sit on the ledger without written repudiation within 48 hours is routinely misconstrued as commercial acquiescence before MSEFC or Commercial Court under Section 8 of the IBC.",
    counterStrategy:
      "Invoke standard industry tolerances (BIS / ASTM standards allowing 3% to 5% relaxation on circular knits/viscose) and establish grey fabric GSM deficiency. Grey yarn tension and poorly twisted yarn supplied by the merchant cause inherent shrinkage, which job-work stenter heat-setting cannot eliminate without resin finishing (not contracted).",
    actionProtocol: [
      "Serve formal Legal Rejection of Debit Note within 48 hours via registered email and Speed Post RPAD.",
      "Produce pre-process grey fabric inward inspection register showing yarn count, twist variance, and grey GSM.",
      "Dispatch third-party NABL-accredited textile testing lab report (SGS, Intertek, or ATIRA) proving wash-fastness and dimensional stability comply with job-work specs.",
      "Notify merchant of Section 43B(h) tax disallowance if undisputed job-work dues cross 45 days."
    ],
  },
  {
    id: "unlifted-rotary-print-lot",
    badge: "Finished Fabric Squatting",
    title: "Merchant Vanishes Leaving 10,000 Metres of Custom-Printed Rayon in Mill Godown",
    buyerTactic:
      "A domestic fashion trader delivers 10,000 metres of viscose rayon grey for bespoke 6-colour rotary discharge printing. Once printing is completed, market prices for printed rayon crash in Surat/Ahmedabad by 30%. The merchant stops answering calls, leaves goods occupying mill warehouse space for 90 days, and refuses payment.",
    legalExposure:
      "Section 170 of the Indian Contract Act confers a right of *detention* (retention), but not an automatic right of *sale* without contractual authorization or court order. Unilateral auction without statutory notice risks a civil suit for wrongful conversion or damages under Contract Act s.73.",
    counterStrategy:
      "Execute the statutory Bailee's Lien Disposal Protocol: combine Section 170 detention with a 15-Day Final Notice of Public Auction. Rely on judicial precedents (*V.S.R. and Co.* and bailment covenants) permitting distress disposal to mitigate storage losses where custom goods suffer seasonal obsolescence and moisture degradation.",
    actionProtocol: [
      "Issue 15-day statutory Notice of Intent to Auction specifying warehouse demurrage and outstanding printing bills.",
      "Publish public auction notification in a local vernacular newspaper in Surat/Tirupur and invite registered textile traders.",
      "Conduct transparent video-recorded bidding, adjust sale proceeds against job-work dues + storage costs, and deposit surplus (if any) in escrow.",
      "Initiate Order XXXVII summary suit or MSMED conciliation for remaining deficiency ledger."
    ],
  },
  {
    id: "multiple-lot-cross-lien",
    badge: "Past Due Offset",
    title: "Exercising Lien on Fresh Lot #5 for Unpaid Dues of Delivered Lots #1–#4",
    buyerTactic:
      "A garment exporter lifts finished fabric Lots #1 through #4 on a rolling 30-day credit term, accumulating ₹12 Lakh in arrears. They then deliver Lot #5 (high-value modal fabric worth ₹20 Lakh) for digital printing, intending to lift Lot #5 and switch to a competitor mill while abandoning past debts.",
    legalExposure:
      "Section 170 grants a 'Particular Lien' restricted to the specific goods upon which labour and skill have been bestowed. Unless the job-work contract or delivery challan explicitly provides for a 'General Lien' under Section 171, holding Lot #5 for Lot #1–#4 arrears can trigger legal friction.",
    counterStrategy:
      "Rely on continuous rolling-contract doctrine (*continuous bailment under single running account*) and incorporate standard South India Mills / Surat Textile Processors General Lien covenants on every inward Goods Receipt Note (GRN) and Job-Work Delivery Challan.",
    actionProtocol: [
      "Review Inward Job-Work Challan terms: establish contractual lien clause extending detention rights to any fabric in mill custody.",
      "Complete labour/printing on Lot #5 so particular lien legally attaches to Lot #5's processing invoice immediately.",
      "Issue Comprehensive Demand Notice under Section 170 & 171 claiming particular lien for Lot #5 (₹3.2 Lakh) AND conditional retention for running account balance (₹12 Lakh).",
      "Offer immediate delivery against RTGS clearance of cumulative ledger; simultaneously file Section 9/12A interim protection before Commercial Court if unlawful snatching is threatened."
    ],
  },
];

export default function DyeingFabricScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-xl">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 mb-2">
          PROCESS HOUSE RECOVERY MATRIX
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-100">
          Commercial Dispute Scenarios & Counter-Attack Playbook
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Select a textile merchant default scenario to examine statutory exposures, evidence rules, and court-tested recovery protocols.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`text-left p-3 rounded-xl border transition-all text-xs ${
                isActive
                  ? "bg-[#DC2626] border-red-500 text-white font-bold shadow-md shadow-red-950/50"
                  : "bg-slate-800/70 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wider text-red-200 mb-1 opacity-90">
                {scenario.badge}
              </span>
              <span className="line-clamp-2 leading-tight">{scenario.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 sm:p-6 space-y-6">
        <div className="border-b border-slate-700 pb-4">
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
            {currentScenario.badge}
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-slate-100 mt-1">
            {currentScenario.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Merchant Default / Evasion Tactic
              </p>
            </div>
            <p className="text-slate-300 leading-relaxed">{currentScenario.buyerTactic}</p>
          </div>

          <div className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <p className="text-[11px] font-bold uppercase tracking-wider text-red-300">
                Mill Legal Risk & Vulnerability
              </p>
            </div>
            <p className="text-slate-300 leading-relaxed">{currentScenario.legalExposure}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-700 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Statutory Counter-Strategy & Estoppel Hook
            </p>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {currentScenario.counterStrategy}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
            Execution Protocol & Procedural Checklist:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentScenario.actionProtocol.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-slate-900/60 border border-slate-750 p-3 rounded-lg text-xs"
              >
                <span className="w-5 h-5 rounded-full bg-red-950 border border-red-800 text-red-400 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-slate-300 leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
