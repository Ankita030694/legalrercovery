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
    id: "post-ceig-energization",
    tabLabel: "1. Post-CEIG Energization",
    badge: "Contract Act s.70",
    title: "Factory Energizes 11kV/33kV Substation via CEIG Approval, Then Freezes Final 20%",
    buyerExcuse:
      "After your electrical team secures Chief Electrical Inspector to Government (CEIG) charging approval and the factory starts running production on the new 2 MVA transformer and VCB/RMU yard, the buyer stalls final RA bills citing 'pending as-built drawings or minor earthing pit dressing'.",
    statutoryCounter:
      "Under Section 70 of the Indian Contract Act, 1872 and Section 42 of the Sale of Goods Act, 1930, drawing live grid power through a CEIG-certified substation constitutes conclusive acceptance and commercial enjoyment. Minor punch-list items justify at most a proportionate holdback—not freezing 20% of the contract.",
    evidenceRequired: [
      "CEIG Charging / Energization Permission Certificate & Statutory Inspection Report",
      "DISCOM HT Feeder Metering & First-Day Synchronization Log",
      "Transformer Oil BDV, Megger Insulation & Earth-Resistance Test Reports",
      "Joint Punch-List / Handover Note showing snag items <1–2% of contract value",
    ],
    recommendedAction:
      "Serve a 15-day Post-Energization Retention & Quantum Meruit Demand Notice via Speed Post RPAD and Email, escalating to Commercial Court Order XIII-A / Order XXXVII CPC.",
  },
  {
    id: "custom-panel-cancellation",
    tabLabel: "2. Custom APFC/PCC Panels",
    badge: "Sale of Goods s.55/56",
    title: "Buyer Cancels or Refuses Delivery of Custom-Built PCC, MCC or APFC Switchboards",
    buyerExcuse:
      "Mid-way through fabrication of bespoke CPRI-tested 4000A PCC/MCC/APFC panels (built to the buyer's GA drawing and busbar spec), the buyer halts its factory expansion and refuses to lift the ready panels or pay the 60% dispatch tranche.",
    statutoryCounter:
      "Custom-engineered electrical panels fabricated to buyer-specific Single Line Diagrams (SLDs) have no ready open-market resale value. Under Sale of Goods Act Sections 55 & 56 and Contract Act Section 73, once Factory Acceptance Test (FAT) readiness is notified, the manufacturer can recover the full contract price or 100% of custom material + fabrication loss.",
    evidenceRequired: [
      "Buyer-approved General Arrangement (GA) Drawings & Single Line Diagram (SLD)",
      "Factory Acceptance Test (FAT) Invitation & Internal Pre-Dispatch Test Reports",
      "OEM Switchgear (ACB/MCCB/Capacitor) Purchase Invoices & Copper Busbar Bills",
      "Timestamped shop-floor photos of finished, wired, and labeled custom panels",
    ],
    recommendedAction:
      "Issue a 10-day Ready-for-Dispatch & Section 55/56 Price/Damages Notice, and if Udyam-registered, file an MSEFC Samadhaan claim for custom-manufactured goods.",
  },
  {
    id: "cable-trench-civil-delay",
    tabLabel: "3. Civil / Trench Delay",
    badge: "Contract Act s.53/54",
    title: "Buyer Delays Civil Plinths or Cable Trenches, Then Deducts Liquidated Damages (LD)",
    buyerExcuse:
      "The factory or main civil contractor takes 4 months extra to cast the transformer plinth or HT cable trench, preventing termination—and then deducts 5–10% Liquidated Damages (LD) from your electrical bill for 'project delay'.",
    statutoryCounter:
      "Under Indian Contract Act Sections 53 & 54 (reciprocal promises), the buyer cannot levy Liquidated Damages for delays caused by its own failure to hand over civil fronts. Unilateral LD deductions without proving actual loss violate Section 74 (Kailash Nath Associates v. DDA).",
    evidenceRequired: [
      "Site Handover / Front-Availability Hindrance Register & Weekly Progress Minutes",
      "Written emails flagging incomplete transformer plinths, trenches, or earthing bays",
      "e-Way Bills & Store Receipt Vouchers proving timely HT/LT cable & transformer delivery",
      "Contractual Milestone Schedule showing civil readiness as a condition precedent",
    ],
    recommendedAction:
      "Rebut the wrongful LD deduction with a Chronological Hindrance Matrix and demand full refund of withheld LD plus 18%–3x RBI interest.",
  },
  {
    id: "divisible-transformer-msme",
    tabLabel: "4. Divisible Supply MSME",
    badge: "MSMED s.15 + s.43B(h)",
    title: "Enforcing MSEFC 3x RBI Interest on Transformers, RMUs & HT Cable Tranches",
    buyerExcuse:
      "An industrial group or EPC prime contractor withholds ₹45 Lakh on a combined substation order, claiming an electrical turnkey job is an 'indivisible works contract' outside MSEFC jurisdiction.",
    statutoryCounter:
      "Where transformers, Ring Main Units (RMUs), VCBs, and HT/LT XLPE cables are billed on separate Supply Invoices / Supply POs with GST HSN codes and e-Way Bills, the supply leg is a pure sale of goods enforceable under MSMED Act Sections 15–18 and Income Tax Section 43B(h).",
    evidenceRequired: [
      "Separate Supply PO or distinct HSN-coded Supply Invoices for transformers, RMUs & cables",
      "GST e-Way Bills, Lorry Receipts & Gate-Entry SRVs signed by the buyer's storekeeper",
      "Udyam Registration Certificate (Micro/Small) valid prior to the PO date",
      "Ledger isolating Supply principal from I&C erection retention",
    ],
    recommendedAction:
      "File an MSEFC Samadhaan reference on the Supply tranche immediately and serve a Section 43B(h) Tax-Disallowance Intimation on the buyer's statutory auditor/CFO.",
  },
];

export default function HtSubstationScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const active = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      <div
        role="tablist"
        aria-label="HT/LT Electrical Substation Recovery Scenarios"
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
