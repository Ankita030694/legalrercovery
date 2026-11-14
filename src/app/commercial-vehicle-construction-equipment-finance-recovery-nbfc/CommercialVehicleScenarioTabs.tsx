"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  trigger: string;
  statutoryRail: string;
  actionSteps: string[];
  riskGuardrail: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "interstate-hidden",
    tabLabel: "Interstate Hidden Truck",
    badge: "GPS Tampered / Cross-Border",
    title: "Interstate Hypothecated Truck Tracing & Ex-Parte Section 9 Seizure",
    trigger:
      "60+ DPD fleet borrower disables AIS-140 GPS, diverts vehicle across state borders (e.g., Gujarat-Maharashtra-Rajasthan corridor), and ignores recall notice.",
    statutoryRail:
      "Arbitration & Conciliation Act s.9 (Ex-Parte Court Receiver with Police Aid) + MV Act s.51 Vahan Blacklist",
    actionSteps: [
      "Issue 7-day Loan Recall cum Termination Notice specifying default and hypothecation enforcement.",
      "File urgent Section 9 petition before the Commercial Court at the lender's seat of arbitration seeking an ex-parte Advocate/Officer Receiver.",
      "Attach FASTag toll-plaza timestamps, Vahan Form 34 endorsement, and GPS last-known coordinates as annexures.",
      "Execute Receiver seizure with local Police Station intimation and prepare dual-witness inventory Panchnama.",
    ],
    riskGuardrail:
      "Never deploy uncertified third-party musclemen for highway snatching; ICICI Bank v. Prakash Kaur strictly mandates lawful process.",
  },
  {
    id: "fleet-cannibalisation",
    tabLabel: "Fleet Multi-Truck Default",
    badge: "Tyre / Engine Stripping Risk",
    title: "Fleet Operator Multiple-Truck Default & Anti-Cannibalisation Freeze",
    trigger:
      "Transport operator defaults on 4–12 financed HCVs simultaneously, cannibalises radial tyres, batteries, and injectors, or parks rigs in unverified yards.",
    statutoryRail:
      "Section 9 Interim Custody + CPC Order 38 Rule 5 (Attachment Before Judgment) + Section 25 PSS Act",
    actionSteps: [
      "Consolidate all cross-collateralised loan agreements into a composite Recall Notice invoking cross-default clauses.",
      "Seek an omnibus Section 9 Receiver order covering all chassis/engine numbers in the fleet plus an injunction against dismantling.",
      "Trigger Section 25 PSS Act / Section 138 NI Act criminal prosecution for dishonoured fleet NACH mandates to compel immediate surrender.",
      "If any truck is found stripped, quantify diminution in value via IRDAI-licensed surveyor report for criminal breach of trust (BNS s.316) & civil damages.",
    ],
    riskGuardrail:
      "Log engine/chassis numbers and tyre serials at disbursement and seizure so cannibalisation claims survive judicial scrutiny.",
  },
  {
    id: "ce-earthmover-site",
    tabLabel: "Excavator / Infra Site",
    badge: "Non-Road / Off-Highway CE",
    title: "Construction Equipment (Excavator, Crane, Batching Plant) Site Recovery",
    trigger:
      "Sub-contractor defaults on excavator/backhoe loader deployed inside a gated highway or mining EPC project where the principal contractor asserts a site lien.",
    statutoryRail:
      "Arbitration Act s.9 / s.17 + Contract Act Hypothecation Priority + Low-Bed Trailer Court Receiver",
    actionSteps: [
      "Serve formal Hypothecation Notice on both the borrower and the third-party EPC site owner asserting superior registered charge (CERSAI / ROC Form CHG-1).",
      "Obtain Section 9 order directing the Receiver to enter the project site with low-bed transport and police protection.",
      "For non-RTO off-highway equipment, rely on serial-plate verification, invoice trail, and CERSAI security interest registration.",
      "Coordinate dismantling/loading via OEM-certified technicians to avoid damage claims during demobilisation.",
    ],
    riskGuardrail:
      "Avoid trespassing onto active infra sites without a Court Receiver order; EPC contractors frequently detain equipment over unpaid sub-contractor bills.",
  },
  {
    id: "loss-on-sale-deficit",
    tabLabel: "Post-Auction Deficit",
    badge: "Loss-on-Sale Recovery",
    title: "Post-Sale Loss-on-Sale Deficit Notice & Guarantor Asset Attachment",
    trigger:
      "Repossessed tipper or bus is sold in a transparent auction, but net proceeds leave a ₹8 Lakh–₹22 Lakh shortfall due to depreciation and overdue EMIs.",
    statutoryRail:
      "Arbitration Award (s.17/s.31) / Commercial Court Summary Suit + Contract Act ss.126–128 (Guarantor Liability)",
    actionSteps: [
      "Serve mandatory pre-sale valuation & 7-to-15 day redemption notice prior to auction (Citicorp Maruti compliance).",
      "Conduct e-auction with minimum 3 independent bids and issue Post-Sale Appropriation & Loss-on-Sale Demand Notice.",
      "Invoke co-extensive liability of the personal/corporate guarantor under Contract Act s.128 in the same arbitration/suit.",
      "Move for CPC Order 21 attachment of guarantor immovable property or bank accounts once the deficit award attains finality.",
    ],
    riskGuardrail:
      "Uncompounded penal charges only (RBI 2023 Penal Charges Circular); capitalising penal interest risks tribunal disallowance of the entire deficit.",
  },
];

export default function CommercialVehicleScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Commercial vehicle and equipment recovery scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {activeScenario.statutoryRail}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          {activeScenario.title}
        </h3>

        <p className="text-sm text-slate-700 leading-relaxed">
          <strong className="text-slate-900">Operational Trigger:</strong>{" "}
          {activeScenario.trigger}
        </p>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Recommended NBFC Legal Execution Steps
          </p>
          <ol className="space-y-2">
            {activeScenario.actionSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs sm:text-sm text-amber-800">
          <strong className="font-bold">Compliance Guardrail:</strong>{" "}
          {activeScenario.riskGuardrail}
        </div>
      </div>
    </div>
  );
}
