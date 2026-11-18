"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  immediateAction: string;
  statutoryRemedy: string;
  evidenceRequired: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "ceig-energized-retention",
    tabLabel: "1. Post-CEIG Retention",
    title: "Factory Energizes 33 kV / 11 kV Substation via CEIG & Freezes Final 20% Bill",
    trigger:
      "A Class-A electrical contractor installs a 2500 kVA transformer, VCBs, and HT underground cabling for a manufacturing plant. After securing Chief Electrical Inspector to Government (CEIG) Charging Approval and drawing DISCOM grid power, the factory withholds the final 20% retention and extra-cable BOQ variations.",
    immediateAction:
      "Compile the CEIG Energization Certificate, DISCOM synchronization/charging memo, and Joint Measurement Certificate (JMC) for extra trenching/cabling, and serve an Advocate Demand Notice invoking Contract Act s.70 & MSMED s.15–18.",
    statutoryRemedy:
      "File an MSEFC Section 18 claim (for Udyam-registered electrical contractors/panel builders) claiming 3x RBI compound interest, or an Order XXXVII CPC summary suit on acknowledged RA bills and JMC sheets.",
    evidenceRequired:
      "Signed Work Order & BOQ, CEIG Drawing & Charging Approval Certificate, transformer Megger/BDV test reports, Joint Measurement Certificate (JMC), and GST e-Invoices.",
  },
  {
    id: "custom-panel-cancellation",
    tabLabel: "2. Custom APFC / PCC Panel",
    title: "Buyer Cancels Custom-Fabricated PCC, MCC or APFC Switchboard Panels Mid-Build",
    trigger:
      "A CPRI-tested switchboard manufacturer fabricates bespoke 3200A PCC, MCC, and APFC capacitor panels against a client's approved GA/wiring drawings. When the client's project stalls, they cancel the PO and refuse to lift the ready panels after Factory Acceptance Test (FAT).",
    immediateAction:
      "Serve a 7-day Notice of Readiness & Unpaid Seller Lien under Sections 46 and 55/56 of the Sale of Goods Act, 1930, clarifying that bespoke panels built to client-specific GA drawings have zero alternate resale market.",
    statutoryRemedy:
      "Sue for the full contracted price (or full fabrication cost + margin minus scrap salvage value) under Sale of Goods Act s.55/56 and Contract Act s.73, alongside MSMED s.16 interest.",
    evidenceRequired:
      "Approved GA & SLD wiring drawings signed by buyer, Purchase Order, FAT inspection invitation/report, CPRI type-test certificates, and switchgear OEM purchase bills.",
  },
  {
    id: "subcontractor-pay-when-paid",
    tabLabel: "3. Main-EPC Back-to-Back Hold",
    title: "Principal EPC Contractor Delays Subcontractor HT/LT Bills Citing 'DISCOM Retention'",
    trigger:
      "A principal infrastructure EPC subcontracts 11 kV bay extension, pole-erection, and earthing works to a specialized electrical contractor, then withholds ₹22 Lakh for 9 months claiming 'we will pay when the PSU/DISCOM releases our final retention'.",
    immediateAction:
      "Challenge the unilateral 'pay-when-paid' excuse by serving an MSMED s.15–18 + Section 43B(h) Income Tax Disallowance Demand Notice, noting that Section 15 of the MSMED Act caps credit at 45 days regardless of third-party receipts.",
    statutoryRemedy:
      "File an MSEFC Section 18 reference against the principal EPC contractor; statutory 45-day MSMED protection overrides back-to-back payment deferral clauses in Indian law.",
    evidenceRequired:
      "Subcontract Work Order, certified RA Bills / JMC signed by principal EPC site engineer, GST e-Way Bills, and Udyam Registration Certificate.",
  },
  {
    id: "transformer-rental-default",
    tabLabel: "4. Transformer / DG Lease Default",
    title: "Site Contractor Defaults on Hired 1000 kVA Transformer / DG & Blocks Retrieval",
    trigger:
      "An industrial power-equipment lessor rents a 1000 kVA oil-cooled transformer and 500 kVA DG set to an infra site on monthly hire. The lessee defaults on 4 months of rent and refuses gate-pass clearance to demobilize the transformer.",
    immediateAction:
      "Issue a 7-day Hire Termination & Equipment Retrieval Notice citing BNS s.316 (Criminal Breach of Trust) and Specific Relief Act s.7/8 / Arbitration Act s.9.",
    statutoryRemedy:
      "Seek an urgent Section 9 / Civil Court Receiver order for crane-assisted retrieval of the transformer/DG alongside Order XXXVII CPC recovery for unpaid monthly hire and demobilization charges.",
    evidenceRequired:
      "Equipment Hire Agreement, asset serial/nameplate records, e-Way Bill outward dispatch, monthly hire invoices, and gate-entry refusal emails.",
  },
];

export default function ElectricalSubstationScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="HT/LT Electrical Substation & Panel Default Scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {current.title}
          </h3>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            HT/LT Electrical Playbook
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Default Trigger
            </p>
            <p className="text-slate-700 leading-relaxed">{current.trigger}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Immediate Action (Days 1–7)
            </p>
            <p className="text-slate-700 leading-relaxed">{current.immediateAction}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Statutory Remedy &amp; Forum
            </p>
            <p className="text-slate-700 leading-relaxed">{current.statutoryRemedy}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Required Evidence Pack
            </p>
            <p className="text-slate-700 leading-relaxed">{current.evidenceRequired}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
