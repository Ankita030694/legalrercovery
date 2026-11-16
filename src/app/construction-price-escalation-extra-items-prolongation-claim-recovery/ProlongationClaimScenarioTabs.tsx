"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "site-handover-row-delay",
    tabLabel: "Site RoW Handover Delay",
    title: "Employer Fails to Hand Over Unencumbered Right of Way (RoW) & Site Access (12–18 Month Delay)",
    cause:
      "The contract stipulates phased handover of 100% of the site within 30 days of Letter of Acceptance (LoA). The contractor mobilises heavy piling rigs, batching plants, crawler cranes, and engineering teams. However, the employer (NHAI, State PWD, Metro, or private developer) delays site possession due to pending land acquisition, unshifted underground utilities (gas, water, optical fiber), overhead HT power lines, and local farmer agitations. The contractor's expensive plant sits idle and site overheads accumulate for months.",
    legalBasis:
      "Under Sections 51, 52, 53, and 54 of the Indian Contract Act, 1872, handing over clear, unencumbered site possession is a fundamental reciprocal promise and condition precedent. The Supreme Court in Asian Techs Ltd. v. Union of India (2009) 10 SCC 354 and Assam State Electricity Board v. Buildworth Ltd. (2017) 8 SCC 146 held that where the employer commits breach of foundational obligations like site handover, exclusionary clauses cannot bar contractor claims for idle machinery and overheads.",
    steps: [
      {
        step: "7-Day Notice of Site Hindrance & Joint Inspection",
        description:
          "Issue a formal hindrance notice on Day 7 of non-handover, documenting physical obstructions with GPS-tagged photographs, chainage coordinates, and drone surveys.",
      },
      {
        step: "Mandatory Section 55(3) ICA Reservation Notice",
        description:
          "Upon applying for Extension of Time (EOT), explicitly issue statutory notice reserving the right to claim prolongation damages, idle plant costs, and price escalation during the extended period.",
      },
      {
        step: "Daily Idle Machinery Logbooks & Joint Verification",
        description:
          "Maintain daily plant logbooks recording idle machine hours, operator wages, and fuel idling, signed contemporaneously by the site Resident Engineer or PMC representative.",
      },
    ],
    statutoryRule: "Contract Act 1872 ss. 53/54/55(3) & Supreme Court Asian Techs / Assam SEB Doctrine",
  },
  {
    id: "delayed-drawings-scope-changes",
    tabLabel: "Delayed GFC Drawings",
    title: "Chronic Delay in Releasing Good-For-Construction (GFC) Drawings & Major Design Variations",
    cause:
      "The structural and MEP consultants continuously revise architectural layouts, delay structural slab reinforcement schedules, and hold back GFC drawings for months. Reinforcement steel and shuttering gangs stand idle on site, pouring cycles are halted, and milestone timelines collapse while the employer refuses to extend completion dates without penalty.",
    legalBasis:
      "In P.M. Paul v. Union of India 1989 Supp (1) SCC 368, the Supreme Court ruled that delay in handing over site and drawings by the employer entitles the contractor to claim compensation for additional costs and price escalation, as prolongation is an ordinary commercial incident of extended execution. When drawings are delayed, time is set at large, and the employer cannot levy Liquidated Damages (LD).",
    steps: [
      {
        step: "Comprehensive RFI Critical-Path Impact Register",
        description:
          "Log every Request for Information (RFI) submitted, tracking employer response lag against contractual review periods (typically 14 days under FIDIC/CPWD) and correlating delays directly with the Primavera / MS Project critical path.",
      },
      {
        step: "Statutory Section 55 Reservation Notice",
        description:
          "Notify the employer that continuing performance amidst delayed drawing issuance is strictly conditional upon reimbursement of site overheads, idling expenses, and revised market rates for delayed items.",
      },
      {
        step: "Formal Price Escalation & Overhead Quantification",
        description:
          "Submit monthly claims based on the Hudson or Eichleay formula for off-site overheads and actual on-site supervisory payroll ledgers backed by Section 63 BSA electronic records.",
      },
    ],
    statutoryRule: "Supreme Court P.M. Paul / McDermott Doctrine & Indian Contract Act s.73",
  },
  {
    id: "coerced-eot-no-financial-implications",
    tabLabel: "Coerced 'No Financial' EOT",
    title: "Employer Coerces Contractor into Signing EOT 'Without Financial Implications' Under Threat of LD",
    cause:
      "Facing an employer-caused milestone delay, the contractor submits an EOT application. The Superintending Engineer or private developer's CFO withholds interim payments and threatens termination or encashment of Performance Bank Guarantees (PBG) unless the contractor signs pre-printed EOT Form 48 with the box checked: 'Extension granted without any financial implications to the Employer.'",
    legalBasis:
      "The Supreme Court of India in Ambica Construction v. Union of India (2006) 13 SCC 475 & (2015) 13 SCC 644, National Insurance Co. Ltd. v. Boghara Polyfab Pvt. Ltd. (2009) 1 SCC 267, and R.L. Kalathia & Co. v. State of Gujarat (2011) 2 SCC 400 held that undertakings, waivers, or No-Claim Certificates signed under economic duress, financial stringency, or coercion are voidable and cannot bar genuine arbitration claims.",
    steps: [
      {
        step: "Contemporaneous 'Without Prejudice' Cover Letter",
        description:
          "Endorse the EOT submission letter: 'Submitted under economic coercion and without prejudice to statutory rights to claim prolongation compensation, idle plant charges, and escalation under Section 55 & 73 of the Indian Contract Act.'",
      },
      {
        step: "48-Hour Advocate Repudiation Notice",
        description:
          "If forced to sign an unamended department form under threat of termination, dispatch an immediate registered legal notice within 48 hours repudiating the unilateral financial waiver under the Kalathia doctrine.",
      },
      {
        step: "Preserve RBI WPI Escalation Ledgers",
        description:
          "Continue monthly billing of price escalation using statutory Reserve Bank of India Wholesale Price Index (WPI) indices and CPWD Clause 10CA/10CC formula mechanics for subsequent arbitral adjudication.",
      },
    ],
    statutoryRule: "Supreme Court Ambica Construction / R.L. Kalathia Economic Duress Doctrine",
  },
  {
    id: "defeating-no-damages-clause",
    tabLabel: "Defeating 'No Damages' Clause",
    title: "Overcoming 'No Damages for Delay' Tender Exclusion Clauses (CPWD Clause 11 / Standard GCC Bar)",
    cause:
      "The employer's tender contains an onerous exculpatory clause: 'The Contractor shall not be entitled to any compensation, claim, or damages on account of delay in site handover, release of drawings, or supply of materials; extension of time shall be the sole and exclusive remedy.' When the contractor claims ₹5 Crore in idle machinery and overheads, the employer cites this clause to summarily reject the claim.",
    legalBasis:
      "In Simplex Concrete Piles (India) Ltd. v. Union of India (2010 ILR 2 Del 699), affirmed in Assam State Electricity Board v. Buildworth Ltd. (2017) 8 SCC 146 and K.N. Sathyapalan v. State of Kerala (2007) 13 SCC 43, the courts held that a clause barring damages for delay is hit by Section 23 of the Indian Contract Act (opposed to public policy and defeating statutory provisions) when the employer is itself in breach. A party in breach cannot insulate itself from Section 73 damages by contractual stipulation.",
    steps: [
      {
        step: "Establish Employer Breach of Foundational Terms",
        description:
          "Demonstrate that the delay stemmed from the employer's default (RoW, clearances, drawings, funds) rather than ordinary project risks or contractor negligence.",
      },
      {
        step: "Serve Section 23 / Section 73 Statutory Challenge Notice",
        description:
          "Serve a detailed legal notice demonstrating that the exclusionary delay clause is void under Section 23 ICA as it seeks to defeat Section 55 and Section 73 statutory rights.",
      },
      {
        step: "Section 21 Arbitration Notice Demanding Prolongation Damages",
        description:
          "Invoke arbitration under Section 21 of the Arbitration and Conciliation Act, 1996, claiming head office overheads, idle plant, lost profit, and 18% commercial interest.",
      },
    ],
    statutoryRule: "Indian Contract Act 1872 ss. 23, 55, 73 & Delhi HC Simplex Concrete Piles Landmark Precedent",
  },
];

export default function ProlongationClaimScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Mobile Scenario Selector Dropdown */}
      <div className="sm:hidden mb-4">
        <label htmlFor="scenario-select" className="block text-xs font-bold text-slate-700 uppercase mb-1">
          Select Delay &amp; Prolongation Scenario:
        </label>
        <select
          id="scenario-select"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626]"
        >
          {SCENARIOS.map((scenario) => (
            <option key={scenario.id} value={scenario.id}>
              {scenario.tabLabel}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop / Tablet Tab Buttons */}
      <div className="hidden sm:flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all text-center ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
              EPC Failure Mode &amp; Legal Strategy
            </span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-red-50 text-[#DC2626] border border-red-200">
            {currentScenario.statutoryRule}
          </span>
        </div>

        <p className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-snug mb-4">
          {currentScenario.title}
        </p>

        {/* Cause Box */}
        <div className="mb-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
            Commercial Bottleneck &amp; Employer Delay Trigger
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {currentScenario.cause}
          </p>
        </div>

        {/* Legal Basis Box */}
        <div className="mb-6 p-4 rounded-xl bg-red-50/50 border border-red-200/70">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
            Statutory Hook &amp; Supreme Court Ruling
          </p>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {currentScenario.legalBasis}
          </p>
        </div>

        {/* Step-by-Step SOP */}
        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            Contractor Recovery SOP &amp; Claim Crystallization Steps
          </p>
          <div className="space-y-3">
            {currentScenario.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-100 bg-white hover:border-slate-300 transition-colors shadow-2xs"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-[11px] font-black shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    {st.step}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
