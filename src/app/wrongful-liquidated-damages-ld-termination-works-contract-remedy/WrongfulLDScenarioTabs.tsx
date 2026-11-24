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
    id: "arbitrary-10-percent-ld-final-bill",
    tabLabel: "10% LD Final Bill Set-Off",
    title: "Developer Slaps 10% LD Debit Note to Zero Out Contractor's ₹1.5 Cr Final Bill",
    cause:
      "Upon completion or substantial handover, the EPC contractor submits a ₹1.5 Crore Final RA Bill comprising executed quantities, unreleased interim milestones, and retention money. The developer issues a retaliatory debit note for ₹1.5 Crore invoking a standard 10% delay Liquidated Damages (LD) clause, claiming the project was handed over 4 months behind the original scheduled commercial operation date (SCOD), despite using and leasing out the building immediately.",
    legalBasis:
      "Under Section 74 of the Indian Contract Act, 1872 and the Constitution Bench principles reiterated in Kailash Nath Associates v. DDA (2015) 4 SCC 136 and Fateh Chand v. Balkishan Dass (1964) 1 SCR 515, a liquidated damages clause only stipulates the ceiling of compensation. The employer must plead and prove actual legal injury and financial loss suffered. Where the developer occupied, tenanted, or monetized the property without incurring pecuniary damage, deducting 10% LD as an automatic contractual windfall is ex-facie illegal and void.",
    steps: [
      {
        step: "Issuance of Statutory Section 74 Rebuttal Notice",
        description:
          "Serve a registered legal notice demanding strict documentary proof of actual loss incurred by the developer. Place on record that the asset was occupied or monetized, legally extinguishing any claim to actual damages.",
      },
      {
        step: "Audited Hindrance Log & Concurrent Delay Demonstration",
        description:
          "Submit a comprehensive critical-path hindrance analysis establishing that project delays stemmed from delayed front clearances, revised architectural drawings, and pending client approvals.",
      },
      {
        step: "Section 21 Arbitration Invocation & Commercial Claim",
        description:
          "Invoke arbitration under Section 21 of the Arbitration and Conciliation Act, 1996 for recovery of the wrongfully withheld bill balance, along with 18% per annum commercial interest.",
      },
    ],
    statutoryRule: "Indian Contract Act s.74, Kailash Nath v. DDA & Commercial Courts Act s.2(1)(c)(vi)",
  },
  {
    id: "illegal-risk-and-cost-termination",
    tabLabel: "Risk & Cost Termination",
    title: "Developer Illegally Terminates Contract at Contractor's 'Risk and Cost' Without Joint Inventory",
    cause:
      "Facing cash flow stress caused by the employer's non-payment of previous RA bills, the contractor slows down non-critical activities. The employer abruptly serves a 7-day cure notice followed by an immediate termination letter under CPWD Clause 3 / FIDIC Sub-Clause 15.2, expels the contractor from the site, and threatens to retender remaining works at the contractor's sole 'risk and cost' without conducting a joint inventory.",
    legalBasis:
      "In construction jurisprudence (State of U.P. v. Patel & Co., MBL Infrastructures v. DMRC), termination at risk-and-cost is invalid if the employer committed prior fundamental breaches (such as withholding certified interim running payments under Sections 51-54 of the Contract Act). Furthermore, taking over site works without conducting a recorded Joint Measurement and Inventory of executed work, raw materials, scaffolding, and plant/machinery deprives the employer of the evidentiary basis to claim risk-and-cost differential.",
    steps: [
      {
        step: "Immediate Formal Protest & Joint Inventory Requisition",
        description:
          "Issue an urgent legal notice protesting unlawful site exclusion and calling for an immediate Joint Measurement Book (MB) verification within 72 hours, with independent drone/photographic survey.",
      },
      {
        step: "Section 9 Urgent Petition for Local Commissioner",
        description:
          "File an urgent Section 9 petition before the Commercial Court seeking appointment of an independent Court Commissioner / Chartered Engineer to record site inventory before any third-party contractor enters.",
      },
      {
        step: "Counter-Claim for Loss of Profits (10%–15%)",
        description:
          "Establish that the wrongful repudiation entitles the contractor to return of all equipment, raw materials, payment for executed works, and 10%–15% anticipated profits on unexecuted contract value under AT Brij Paul Singh v. State of Gujarat.",
      },
    ],
    statutoryRule: "Contract Act ss. 51, 54, 73, 75 & Arbitration Act s.9 (Court Commissioner)",
  },
  {
    id: "employer-caused-delay-prevention-principle",
    tabLabel: "Employer Delay & Drawings",
    title: "Employer Failed to Provide GFC Drawings & Power Connection but Deducted Delay Damages",
    cause:
      "The contract stipulated completion in 18 months. However, the client delayed structural Good For Construction (GFC) drawings by 6 months, failed to provide unencumbered site access, delayed municipal water and high-tension electrical connections, and issued 14 structural design revisions mid-execution. When the project extended by 5 months, the client withheld ₹85 Lakh as liquidated damages.",
    legalBasis:
      "Under the established 'Prevention Principle' (Holme v. Guppy, Peak Construction v. McKinney, and Supreme Court of India in Welspun Specialty Solutions v. ONGC (2022) 2 SCC 382), an employer cannot insist upon adherence to the original contract completion date when its own acts and omissions prevented completion. In such cases, time is set at large. The employer's contractual right to levy liquidated damages ceases to exist, and the employer is limited to seeking unliquidated damages by proving unreasonable delay solely attributable to the contractor.",
    steps: [
      {
        step: "Submission of Hindrance Register with RFI Timelines",
        description:
          "Reconstruct the delay timeline cross-referencing Request for Information (RFI) submission dates versus employer response dates, proving that critical-path activities were stalled by employer defaults.",
      },
      {
        step: "Challenge Extension of Time (EOT) with Conditional LD",
        description:
          "Repudiate the employer's unilateral EOT letter that sought to grant time extensions while reserving LD penalties, demonstrating that the extension was necessitated by employer-caused hindrances.",
      },
      {
        step: "Claim Prolongation Costs & Site Overhead Reimbursement",
        description:
          "Convert the dispute from defense to active recovery: demand reimbursement of site establishment overheads, machinery idling charges (Hudson / Emden Formula), and head office overheads incurred during prolongation.",
      },
    ],
    statutoryRule: "Prevention Principle, Time at Large Doctrine & Welspun Specialty Solutions v. ONGC",
  },
  {
    id: "illegal-pbg-encashment-threat",
    tabLabel: "PBG Encashment Threat",
    title: "Retaliatory Invocation of Performance Bank Guarantee (PBG) & Security Deposit",
    cause:
      "When the contractor firmly rejects the arbitrary 10% LD deduction and serves an arbitration notice, the developer's finance team issues a coercive letter to the issuing bank invoking the 5% Performance Bank Guarantee (₹1 Crore) and forfeiting the accumulated cash security deposit.",
    legalBasis:
      "While bank guarantees are independent contracts, the Supreme Court in U.P. State Sugar Corp. v. Sumac International Ltd. (1997) 1 SCC 568 and Gangotri Enterprises Ltd. v. Union of India (2016) 11 SCC 720 established clear exceptions: egregious fraud and irretrievable injustice / special equities. Where an employer invokes a PBG to satisfy an unadjudicated, disputed penal claim of liquidated damages without having suffered any established loss, invocation is fraudulent and arbitrary.",
    steps: [
      {
        step: "Urgent Cease-and-Desist Notice to Employer & Bank",
        description:
          "Dispatch an immediate fact-verified notice putting the bank on record regarding the fraudulent and premature invocation for unliquidated, disputed penal damages contrary to guarantee terms.",
      },
      {
        step: "Commercial Court Section 9 Injunction Petition",
        description:
          "Move the Commercial Division of the High Court or District Commercial Court under Section 9 of the Arbitration Act for an ad-interim ex-parte injunction restraining the bank from releasing funds.",
      },
      {
        step: "Deposit Security / Crystallize Section 21 Claims",
        description:
          "Offer to keep the PBG alive by extending its validity pending arbitral adjudication, eliminating any alleged prejudice to the employer while preserving contractor liquidity.",
      },
    ],
    statutoryRule: "Arbitration Act s.9, Gangotri Enterprises v. UOI & U.P. State Sugar Corp.",
  },
];

export default function WrongfulLDScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200 bg-slate-50/70 overflow-x-auto scrollbar-thin">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            Dispute Scenario
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {currentScenario.title}
          </h3>
        </div>

        {/* Fact Pattern vs Statutory Basis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              The Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.cause}
            </p>
          </div>
          <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-700 mb-1.5">
              Statutory Rebuttal & Supreme Court Precedent
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentScenario.legalBasis}
            </p>
          </div>
        </div>

        {/* Action Steps */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            SOP Counter-Measures & Operational Protocol
          </p>
          <div className="space-y-3">
            {currentScenario.steps.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    {item.step}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Hook Summary Footer */}
        <div className="bg-slate-900 text-white rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
            Applicable Statutory Authority:
          </span>
          <span className="text-xs font-semibold text-slate-200">
            {currentScenario.statutoryRule}
          </span>
        </div>
      </div>
    </div>
  );
}
