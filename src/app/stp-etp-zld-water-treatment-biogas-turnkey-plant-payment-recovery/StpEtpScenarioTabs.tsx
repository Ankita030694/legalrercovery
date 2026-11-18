"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  buyerExcuse: string;
  statutoryCounter: string;
  evidenceRequired: string[];
  recommendedAction: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "post-cto-balance-freeze",
    tabLabel: "1. Post-CTO Balance Hold",
    badge: "Deemed Acceptance",
    title: "Factory or Builder Obtains PCB Consent to Operate (CTO), Then Freezes Final 25%",
    buyerExcuse:
      "Once the State Pollution Control Board (SPCB) grants Consent to Operate (CTO) or Occupancy Certificate (OC) using your STP/ETP/ZLD installation, the buyer stops responding to final commissioning bills claiming 'minor civil snags or pending 90-day stabilization'.",
    statutoryCounter:
      "Under Sale of Goods Act Section 42 and Indian Contract Act Section 70, commercial utilization of the plant to secure statutory PCB CTO/OC and discharge treated water constitutes conclusive Deemed Acceptance. The buyer cannot enjoy regulatory compliance and plant output while withholding 25% of the contract value.",
    evidenceRequired: [
      "State PCB Consent to Operate (CTO) / OC copy referencing the commissioned STP/ETP",
      "NABL-accredited lab outlet report meeting BOD/COD/TSS/pH norms at commissioning",
      "Joint Mechanical Completion & Hydro-Test / Trial-Run Sign-off Sheets",
      "Site entry/visitor logs proving continuous daily plant operation by buyer's facility team",
    ],
    recommendedAction:
      "Serve a 15-day Deemed Acceptance & Final Milestone Notice citing CTO utilization, demanding the 20–25% balance via Order XXXVII CPC or Commercial Court summary suit.",
  },
  {
    id: "raw-effluent-shock-load",
    tabLabel: "2. Influent Shock-Load",
    badge: "Contract Act s.53",
    title: "Buyer Dumps Unsegregated High-COD / Chemical Effluent, Then Blames ZLD/ETP Vendor",
    buyerExcuse:
      "A pharma, textile, or food-processing factory exceeds the design inlet BOD/COD/TDS parameters (e.g., 8,000 mg/L COD instead of 2,500 mg/L) or skips equalization dosing, killing bio-culture or fouling RO membranes—then forfeits your final retention.",
    statutoryCounter:
      "Design-performance guarantees are strictly conditional upon influent parameters matching the contractual Basis of Design (BOD). Under Contract Act Section 53, a buyer who prevents performance by feeding toxic or off-spec raw effluent cannot rely on its own breach to withhold commissioning payments.",
    evidenceRequired: [
      "Signed Technical Basis of Design (BOD) Annexures specifying max inlet COD/BOD/TDS/pH",
      "Inlet vs. Outlet NABL / online OCEMS analyzer logs proving influent shock-loading",
      "Written site advisories warning the plant head about chemical/solvent dumping",
      "Equalization tank & chemical dosing logbooks maintained during trial run",
    ],
    recommendedAction:
      "Issue a Technical Rebuttal & Force-Majeure Influent Breach Notice isolating your mechanical/equipment compliance from buyer-side effluent overload, and demand release of withheld milestones.",
  },
  {
    id: "biogas-feedstock-shortfall",
    tabLabel: "3. Biogas / CBG Feedstock",
    badge: "Minimum Yield Defense",
    title: "Distillery or Agro-Plant Delays Bio-CNG / Biogas Turnkey Balance Over Low Gas Yield",
    buyerExcuse:
      "The buyer supplies diluted press-mud, low-TS spent wash, or insufficient organic feedstock, then withholds the final 20% PGTR tranche claiming the anaerobic digester did not hit rated Nm3/day gas output.",
    statutoryCounter:
      "Anaerobic digester yield guarantees depend on Total Solids (TS%) and Volatile Solids (VS%) of the supplied feedstock. Under Contract Act Sections 51–54 (reciprocal promises), failure to supply design-grade feedstock triggers Deemed PGTR Satisfaction after the commissioning window.",
    evidenceRequired: [
      "Feedstock TS/VS lab analysis reports vs. contractual digester design specifications",
      "Daily slurry feed flowmeter & biogas flare/flowmeter SCADA logs (BSA s.63 certified)",
      "PESO / CCOE safety inspection & compressor commissioning certificates",
      "Formal feedstock-deficiency notices issued to the distillery/agro management",
    ],
    recommendedAction:
      "Serve a Reciprocal-Promise Default Notice declaring PGTR Deemed Passed based on per-kg VS gas conversion efficiency and claim 18%–3x RBI interest on the withheld balance.",
  },
  {
    id: "divisible-equipment-msme",
    tabLabel: "4. Divisible Supply MSME",
    badge: "MSMED s.15 + s.43B(h)",
    title: "Separating Pumps, Blowers, RO Skids & Membranes from Civil Works for MSEFC",
    buyerExcuse:
      "Builders and factory owners label the entire STP/ETP order a 'composite works contract' to argue that MSME Samadhaan / MSEFC has no jurisdiction over the unpaid ₹35–90 Lakh balance.",
    statutoryCounter:
      "Where electro-mechanical equipment (MBBR media, MBR/RO skids, filter presses, blowers, dosing pumps) is billed under a separate Supply PO or distinct GST HSN-coded supply invoices backed by e-Way Bills, the supply component is an independent 'sale of goods' enforceable under MSMED Act Sections 15–18 and Income Tax Section 43B(h).",
    evidenceRequired: [
      "Separate Supply PO / HSN-coded Equipment Invoices for pumps, skids, membranes & panels",
      "GST e-Way Bills, Lorry Receipts (LRs) & site Gate-Entry Store Receipt Vouchers",
      "Udyam Registration Certificate (Micro/Small) predating the Supply PO",
      "Separate Erection & Commissioning service ledger isolating the hardware principal",
    ],
    recommendedAction:
      "File an MSEFC Samadhaan claim immediately for the Supply PO tranche with 3x RBI Bank Rate compound interest and serve a Section 43B(h) tax-disallowance intimation on the buyer's CFO.",
  },
];

export default function StpEtpScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const active = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      <div
        role="tablist"
        aria-label="STP, ETP, ZLD & Biogas Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((sc) => {
          const isSelected = sc.id === activeId;
          return (
            <button
              key={sc.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveId(sc.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">{active.title}</h3>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {active.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Buyer Excuse / Holdback Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{active.buyerExcuse}</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory Counter &amp; Legal Lever
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {active.statutoryCounter}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Mandatory Technical &amp; Regulatory Evidence
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {active.evidenceRequired.map((ev) => (
              <li key={ev} className="flex items-start gap-2 text-xs text-slate-700">
                <span className="text-[#DC2626] font-bold mt-0.5">&#10003;</span>
                <span>{ev}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
            Creditor Action Playbook
          </p>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {active.recommendedAction}
          </p>
        </div>
      </div>
    </div>
  );
}
