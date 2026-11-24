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
    id: "indefinite-hold-email",
    tabLabel: "Indefinite Hold Email",
    title: "Buyer Mails 'Put PO on Hold' After GAD Approval & Special Alloy Procurement",
    cause:
      "EPC prime contractors and industrial project developers frequently face downstream site delays, financial bottlenecks, or client cancellations. Rather than issuing a formal termination that triggers contractual cancellation penalties, the buyer casually emails: 'Please put manufacturing and dispatch on indefinite hold until further notice.'",
    legalBasis:
      "Under Section 39 of the Indian Contract Act, 1872, when a party to a contract has refused to perform, or disabled himself from performing, his promise in its entirety, the promisee may put an end to the contract unless he has signified by words or conduct his acquiescence in its continuance. An indefinite hold after material procurement and GAD approval constitutes anticipatory repudiation. Sleeping on an indefinite hold allows the buyer to argue waiver or acquiescence.",
    steps: [
      {
        step: "7-Day Election Notice Under Section 39",
        description:
          "Serve a formal statutory notice intimating that an indefinite hold is an anticipatory breach. Demand confirmation within 7 calendar days to resume fabrication and accept delivery schedules, failing which the contract stands terminated at buyer's risk.",
      },
      {
        step: "Independent WIP & Material Audit",
        description:
          "Appoint a Chartered Engineer or certified surveyor to record cutting sheets, mill test certificates (MTC), heat numbers, and assembly progress to seal shopfloor evidentiary logs.",
      },
      {
        step: "Freeze Carrying & Storage Charges",
        description:
          "Notify the buyer of recurring demurrage, insured storage costs (typically 1.5% to 2% per month), and finance carrying charges until final settlement under Section 73.",
      },
    ],
    statutoryRule: "Indian Contract Act, 1872 (ss. 39 & 73) & BSA 2023 s.63",
  },
  {
    id: "mid-fabrication-cancellation",
    tabLabel: "Mid-Fabrication Repudiation",
    title: "PO Cancelled When Bespoke Equipment is 40%–80% Fabricated (Zero Market Resale)",
    cause:
      "Shells are rolled, dish-ends welded, heat exchanger tubes expanded, or heavy conveyor frames machined. The buyer cancels the PO. The equipment has bespoke dimensions, specific design nozzle orientations, and project-specific metallurgy (e.g., SA-516 Gr.70, SS 316Ti, Monel, Duplex steel) with virtually zero secondary market value beyond melting scrap.",
    legalBasis:
      "Under Section 56 of the Sale of Goods Act, 1930 read with Section 73 of the Indian Contract Act, where the buyer wrongfully neglects or refuses to accept and pay for goods, the seller may sue for damages for non-acceptance. The measure of damages is the estimated loss directly and naturally resulting from the breach. For bespoke custom machinery with no available market, damages equal: Total Procurement Cost + Direct Shopfloor Labour + Overheads minus Net Scrap Resale Value, plus 10%–15% Loss of Anticipated Profit per Supreme Court ruling in A.T. Brij Paul Singh.",
    steps: [
      {
        step: "Two-Tier Salvage Scrap Assessment",
        description:
          "Obtain three certified scrap yard quotations to establish current melting scrap rates (e.g., ₹35–₹45/kg for CS, ₹120–₹160/kg for SS) to defeat buyer claims of improper mitigation.",
      },
      {
        step: "Invoke Section 73 Full Expectation Interest",
        description:
          "Demand 100% of unamortized fabrication costs plus 15% statutory profit on the balance unperformed contract value pursuant to Dwaraka Das v. State of M.P.",
      },
      {
        step: "MSME Samadhaan / Commercial Summary Suit",
        description:
          "File before State MSEFC (for Udyam units) seeking 3x RBI compound interest, or file Order 37 CPC Summary Suit with an Order 38 Rule 5 asset attachment application.",
      },
    ],
    statutoryRule: "Sale of Goods Act, 1930 s.56 & ICA s.73 (*A.T. Brij Paul Singh* SC Rule)",
  },
  {
    id: "advance-forfeiture-trap",
    tabLabel: "Advance Forfeiture Trap",
    title: "Buyer Claims 10% Advance Covers Full Cancellation or Demands Advance Refund",
    cause:
      "Buyers frequently assert that the manufacturer can simply 'forfeit the 10% mobilization advance and close the order', or conversely, unprincipled buyers demand 100% refund of the advance citing their own client's cancellation as 'Force Majeure' under Section 56 of the Contract Act.",
    legalBasis:
      "Under Kailash Nath Associates v. DDA (2015) 4 SCC 136, earnest money can only be forfeited if it is reasonable compensation for actual breach; however, forfeiture of advance does NOT extinguish the creditor's statutory right under Section 73 to claim actual unliquidated damages where actual losses far exceed the advance. Furthermore, downstream project cancellation is commercial hardship, NOT statutory frustration (Energy Watchdog v. CERC (2017) 14 SCC 80).",
    steps: [
      {
        step: "Appropriate Advance Toward Incurred WIP",
        description:
          "Issue a formal ledger adjustment statement crediting the advance against accrued raw material procurement and shopfloor cutting costs.",
      },
      {
        step: "Demolish Frustration / Force Majeure Claims",
        description:
          "Cite Supreme Court precedent establishing that downstream contractor default or commercial non-viability does not constitute contractual frustration under Section 56.",
      },
      {
        step: "Issue Legal Demand for Balance Unpaid Loss",
        description:
          "Serve a 15-day statutory fact-verified notice demanding the deficit between total verified WIP plus lost profit and the retained advance.",
      },
    ],
    statutoryRule: "Kailash Nath Associates v. DDA (2015) & Energy Watchdog v. CERC (2017)",
  },
  {
    id: "scope-creep-redesign",
    tabLabel: "Unpriced Engineering Redesign",
    title: "Buyer Drastically Modifies GAD Specs Mid-Production Without Price Amendment",
    cause:
      "Buyer engineering teams alter operating pressure, nozzle schedules, tube thicknesses, or structural dimensions mid-fabrication, rendering partially fabricated components scrap. When the manufacturer submits an engineering change order (ECO), the buyer refuses price revision and threatens cancellation.",
    legalBasis:
      "Under Section 67 of the Indian Contract Act, 1872, if any promisee neglects or refuses to afford the promisor reasonable facilities for the performance of his promise, the promisor is excused by such neglect or refusal as to any non-performance. Altering technical parameters without issuing an authorized commercial variation order discharges the fabricator from original delivery milestones.",
    steps: [
      {
        step: "Issue Notice of Engineering Obstruction",
        description:
          "Formally record that unilateral GAD alterations without commercial cost amendments constitute hindrance under Section 67.",
      },
      {
        step: "Issue 14-Day Cure Demand for Variation PO",
        description:
          "Provide 14 days for buyer's commercial procurement team to release a signed PO amendment covering revised bill of quantities and obsolete WIP compensation.",
      },
      {
        step: "Terminate and Claim Full WIP + Extra Labour",
        description:
          "If the buyer refuses, terminate under Section 39 and recover the cost of all modified/scrapped assemblies plus full contract margin under Section 73.",
      },
    ],
    statutoryRule: "Indian Contract Act, 1872 (Section 67 & Section 73)",
  },
];

export default function BespokeGoodsScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
          Interactive Operational Scenarios
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          How to Legally Counter 4 Mid-Production Cancellation Excuses
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select a commercial failure mode to review statutory remedies, tactical counter-measures, and Supreme Court legal bases.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
          <h4 className="text-base sm:text-lg font-black text-slate-900">{current.title}</h4>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
            {current.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              The Debtor Strategy / Root Cause
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.cause}</p>
          </div>
          <div className="bg-red-50/50 rounded-xl p-4 border border-red-200/80">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Creditor Statutory Shield
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            Execution Steps for Recovery:
          </p>
          <div className="space-y-3">
            {current.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-150"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">{st.step}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
