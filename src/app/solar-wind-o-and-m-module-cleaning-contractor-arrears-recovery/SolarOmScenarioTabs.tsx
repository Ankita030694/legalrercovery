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
    id: "grid-curtailment-sla",
    tabLabel: "1. Grid Curtailment SLA",
    badge: "SLDC Exclusion Proof",
    title: "IPP SPV Deducts Grid-Curtailment or Feeder-Outage Hours from O&M Retainer",
    buyerExcuse:
      "A 50 MW solar or wind IPP SPV withholds 25% of your monthly O&M invoice claiming 'Plant Availability dropped below 98.5%', silently counting SLDC backing-down instructions and 33kV/132kV DISCOM grid outages against your contractor availability.",
    statutoryCounter:
      "Under standard O&M Plant Availability formulas and Contract Act Section 53/56, external grid curtailment, SLDC backing-down, and DISCOM substation tripping are Force Majeure / Grid-Side Exclusions. Deducting grid-down hours as contractor SLA default is an unlawful penalty under Contract Act Section 74.",
    evidenceRequired: [
      "SLDC / RLDC Backing-Down & Curtailment Instructions with timestamps",
      "33kV / 132kV GSS Feeder Tripping & ABT Meter Outage Logs",
      "SCADA Inverter-Level Availability Sheet excluding grid-outage windows",
      "Monthly Joint Generation & Availability Reconciliation submitted to SPV",
    ],
    recommendedAction:
      "Serve a 15-day SLA Normalization & Wrongful Deduction Reversal Notice attaching BSA s.63-certified SCADA/SLDC logs, and invoke MSMED s.15–18 if Udyam-registered.",
  },
  {
    id: "inverter-oem-spare-delay",
    tabLabel: "2. OEM Spare & Warranty",
    badge: "Contract Act s.53",
    title: "SPV Blames O&M Contractor for Inverter / WTG Gearbox OEM Spare Delays",
    buyerExcuse:
      "An inverter IGBT card or wind turbine yaw drive fails under OEM warranty or owner-supplied spares scope; the IPP SPV delays issuing the PO for 45 days and then deducts 'generation loss' from your monthly O&M bill.",
    statutoryCounter:
      "Where spare parts fall under the Owner's Free-Issue / OEM Warranty scope, the O&M contractor's obligation is limited to fault diagnosis, RMA ticket logging, and installation once spares arrive on site. Under Contract Act Section 53, owner-side spare procurement delays cannot trigger contractor downtime LD.",
    evidenceRequired: [
      "Dated OEM RMA / Service Ticket numbers & escalation emails to SPV asset manager",
      "O&M Contract Spare-Parts Scope Matrix (Owner-supplied vs Contractor consumables)",
      "Site Store Indent requests & Gate-Entry receipts showing late spare delivery",
      "Mean Time to Repair (MTTR) log calculated from spare arrival to re-synchronization",
    ],
    recommendedAction:
      "Issue a Scope-Exclusion & MTTR Reconciliation Notice isolating OEM/Owner procurement lead time from your SLA availability calculation.",
  },
  {
    id: "robotic-module-cleaning",
    tabLabel: "3. Robotic Cleaning",
    badge: "MSMED s.15 + s.43B(h)",
    title: "Solar Park Delays Monthly Dry-Robotic or Water-Cleaning Invoices Beyond 90 Days",
    buyerExcuse:
      "A solar park operator delays ₹18–35 Lakh in monthly module-cleaning bills citing 'water tanker/power supply mismatch or pending internal audit' while demanding uninterrupted daily cleaning cycles.",
    statutoryCounter:
      "Pure O&M, grass-cutting, and robotic/manual module-cleaning contracts are 'services rendered' squarely covered by MSMED Act Sections 15–18 (unlike disputed turnkey works). Unpaid bills beyond 45 days accrue 3x RBI Bank Rate compound interest and trigger Income Tax Section 43B(h) disallowance for the IPP SPV.",
    evidenceRequired: [
      "Daily Robotic Cleaning Cycle SCADA / Drone Inspection / Beat-Sheet Logs",
      "Signed Monthly Cycle Completion Certificates or WhatsApp/email approvals",
      "Udyam Registration Certificate (Micro/Small) predating the Service Order",
      "GST Tax Invoices (SAC 9987 / 9985) with e-Invoice IRN & GSTR-1 filing proof",
    ],
    recommendedAction:
      "Serve an MSMED Section 15 + Section 43B(h) Tax-Disallowance Intimation and file an MSEFC Samadhaan claim—while protecting your deployed cleaning robots under BNS s.316.",
  },
  {
    id: "spv-termination-handover",
    tabLabel: "4. SPV Exit & Tools",
    badge: "Arbitration s.9 + BNS s.316",
    title: "SPV Terminates O&M Mid-Term & Detains Robotic Cleaners, Thermography Kits or Cranes",
    buyerExcuse:
      "Upon changing O&M vendors or selling the solar SPV, the site security blocks your team from removing company-owned dry-cleaning robots, IV-curve tracers, thermal cameras, or hydraulic tools until you sign a 'No-Dues Waiver'.",
    statutoryCounter:
      "Coercing a contractor to waive earned arrears by detaining contractor-owned tools and robotic equipment is illegal economic duress (Contract Act s.15/16) and Criminal Breach of Trust under BNS Section 316. Contractors can seek urgent Section 9 Arbitration protection for equipment retrieval without waiving unpaid bills.",
    evidenceRequired: [
      "Asset Gate-In Challans & e-Way Bills for cleaning robots, thermal cameras & tools",
      "Fixed Asset Register & OEM Serial Numbers of detained equipment",
      "Written refusal / security gate-pass denial emails or WhatsApp messages",
      "Unpaid O&M Invoice Ledger & statutory interest calculation",
    ],
    recommendedAction:
      "Send a 7-day BNS Section 316 Hardware Release Notice refusing coerced No-Dues waivers and file an urgent Arbitration s.9 or Commercial Court recovery application.",
  },
];

export default function SolarOmScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const active = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      <div
        role="tablist"
        aria-label="Solar & Wind O&M Recovery Scenarios"
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
              IPP / SPV Deduction Tactic
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
            Mandatory SCADA, SLDC &amp; BSA 2023 s.63 Evidence
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
