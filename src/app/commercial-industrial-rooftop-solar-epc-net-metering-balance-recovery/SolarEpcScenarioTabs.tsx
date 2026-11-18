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
    id: "zero-export-stockout",
    tabLabel: "1. DISCOM Meter Stockout",
    badge: "Zero-Export Captive Draw",
    title: "Factory Runs Zero-Export Solar While Blaming DISCOM Bi-Directional Meter Delay",
    buyerExcuse:
      "The industrial buyer withholds the final 15–20% Commissioning / Net-Metering milestone for 6–10 months claiming the State DISCOM has not installed the bi-directional meter—while simultaneously saving ₹6–9/kWh daily by running the plant in zero-export mode on captive factory load.",
    statutoryCounter:
      "Invoke Sections 53 & 54 of the Indian Contract Act, 1872 (Deemed Commissioning) alongside Section 70 (quantum meruit / unjust enrichment). Where mechanical erection, DC/AC synchronization, CEIG safety inspection, and zero-export generation are complete, a third-party DISCOM meter stockout or buyer-side sanctioned-load/arrears hurdle cannot indefinitely suspend payment for a commissioned plant.",
    evidenceRequired: [
      "CEIG (Chief Electrical Inspector to Government) Charging & Safety Approval Certificate",
      "Zero-export CT-clamp & inverter SCADA daily kWh generation logs showing captive consumption",
      "DISCOM net-metering application acknowledgement & fee receipt proving EPC filing",
      "Signed Mechanical Completion & Cold-Commissioning Joint Protocol",
    ],
    recommendedAction:
      "Serve a 15-day Deemed Commissioning & Final Balance Notice demanding release of the 15–20% milestone (or 10% commissioning tranche immediately, retaining at most a 2–5% meter-tag bank guarantee), backed by Commercial Court / Arbitration invocation.",
  },
  {
    id: "dust-soiling-pr",
    tabLabel: "2. Dust & Low PR Excuse",
    badge: "IEC 61724 Normalization",
    title: "Buyer Skips Module Washing & Blames EPC for 'Low kWh / Performance Ratio (PR)'",
    buyerExcuse:
      "After handover, the factory refuses O&M or skips fortnightly module cleaning in a dusty cement, textile, or foundry zone, then cites a 10–14% dip in raw kWh yield to withhold the final PR-guarantee milestone or forfeit the 10% retention.",
    statutoryCounter:
      "Under IEC 61724-1 & NREL Performance Ratio protocols, PR cannot be measured on unwashed modules or unadjusted raw kWh. Performance Guarantee testing requires insolation normalization (POA pyranometer data), temperature correction, grid-outage exclusion, and clean-module baseline conditions. Buyer's breach of O&M/washing covenants bars it from relying on its own default under Contract Act Section 53.",
    evidenceRequired: [
      "WMS Pyranometer Plane-of-Array (POA) irradiance logs vs. SCADA inverter AC output",
      "Timestamped photos/logs of dust accumulation & missed buyer-scope washing cycles",
      "Grid outage / DG-synchronization downtime logs from the inverter & LT panel",
      "Post-wash 7-day / 15-day IEC 61724 weather-corrected PR calculation sheet",
    ],
    recommendedAction:
      "Issue a Technical Rebuttal & PR Normalization Notice attaching BSA 2023 s.63-certified SCADA/WMS logs, demanding a supervised 7-day post-wash PR witness test—failing which the PR Guarantee stands Deemed Passed.",
  },
  {
    id: "ceig-client-fault",
    tabLabel: "3. CEIG / Load Arrears Hold",
    badge: "Buyer-Side Statutory Block",
    title: "DISCOM / CEIG Approval Stalled Due to Buyer's Pending Factory Dues or Transformer Fault",
    buyerExcuse:
      "The factory has pending electricity bill arrears, an unapproved connected-load mismatch, or non-compliant existing HT switchgear/earthing, causing DISCOM/CEIG to reject net-metering feasibility—yet the buyer blames the Solar EPC.",
    statutoryCounter:
      "Under Contract Act Sections 51–54 (reciprocal promises), the buyer's obligation to provide a legally compliant, arrears-free utility connection and roof/electrical infrastructure precedes synchronization. The EPC cannot be penalized for the buyer's regulatory non-compliance.",
    evidenceRequired: [
      "DISCOM / CEIG deficiency memo citing consumer arrears, load mismatch, or HT yard defects",
      "EPC pre-commissioning checklist flagging buyer-side earthing/breaker non-compliance",
      "Written reminders sent to the buyer's plant head / electrical engineer",
    ],
    recommendedAction:
      "Notify the buyer that synchronization delay is solely attributable to buyer-side reciprocal default; declare Deemed Commissioning effective on the readiness date and claim 18% contractual/commercial interest on the withheld balance.",
  },
  {
    id: "divisible-msme-split",
    tabLabel: "4. Divisible Supply MSME",
    badge: "MSMED s.15 + s.43B(h)",
    title: "Splitting Module/Inverter Supply PO from BOS Installation to Unlock MSME Leverage",
    buyerExcuse:
      "The corporate buyer treats the entire solar turnkey deal as an indivisible 'works contract' to argue that MSEFC lacks jurisdiction, delaying ₹40–80 Lakh owed for supplied Tier-1 PV modules and string inverters.",
    statutoryCounter:
      "Where the transaction is structured as a separate Supply PO (modules, inverters, structures) and a separate Erection/BOS Service Order—or contains distinct item-wise invoicing and title transfer upon delivery—the Supply tranche qualifies as 'goods supplied' under MSMED Act Sections 15–18, triggering 3x RBI Bank Rate compound interest and Income Tax Act Section 43B(h) tax disallowance for the buyer.",
    evidenceRequired: [
      "Separate Supply Purchase Order / Tax Invoices for PV modules & inverters with e-Way Bills",
      "Lorry Receipts (LRs) & site Store Receipt Vouchers (SRVs) signed by factory security",
      "Udyam Registration Certificate (Micro/Small) valid prior to the Supply PO date",
    ],
    recommendedAction:
      "Segregate the Supply invoice arrears immediately: serve an MSMED Section 15 + Section 43B(h) Tax-Disallowance Intimation for the hardware tranche while pursuing Commercial Court / Arbitration for the BOS/I&C retention.",
  },
];

export default function SolarEpcScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const active = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      <div
        role="tablist"
        aria-label="C&I Solar EPC Holdback Scenarios"
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
            Mandatory Technical &amp; BSA 2023 s.63 Evidence
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
