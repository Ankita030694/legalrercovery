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
    id: "li-ion-battery-abuse",
    tabLabel: "Li-Ion Battery & Collision",
    title: "3PL Warehouse Lessee Damaged Li-Ion Battery / Reach Truck & Refused Repair Bill",
    cause:
      "Multi-shift 3PL and e-commerce fulfilment hubs run leased reach trucks and counterbalanced forklifts 24/7 with untrained temp operators—causing mast collisions, fork bending, deep-discharge lithium battery cell failure, or improper third-party charger damage—and then reject the repair invoice as 'normal wear and tear'.",
    legalBasis:
      "Under Section 151 and Section 152 of the Indian Contract Act, 1872, a bailee/lessee is bound to take as much care of hired machinery as a person of ordinary prudence, and is strictly liable for damage caused by unauthorized use or operator negligence outside normal wear-and-tear. Telematics impact logs and Battery Management System (BMS) fault codes defeat 'wear-and-tear' excuses.",
    steps: [
      {
        step: "Export BMS Fault History & Telematics Impact Logs",
        description:
          "Download timestamped shock-sensor collision alerts, battery deep-discharge cycles, and OEM service engineer inspection reports certified under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.",
      },
      {
        step: "Invoke Joint Exit Inspection & OEM Repair Valuation",
        description:
          "Serve a 48-hour Joint Inspection Notice under the Master Lease Agreement (MLA); if the lessee boycotts inspection, conduct a videographed OEM-certified damage assessment.",
      },
      {
        step: "Serve Section 152 Contract Act + MSMED Demand",
        description:
          "Bundle the OEM repair bill, downtime stand-by rental during repair, and overdue lease rent into a single statutory demand notice backed by MSMED s.16 3x RBI interest (if Udyam-registered).",
      },
    ],
    statutoryRule: "Contract Act s.151 & s.152 | BSA 2023 s.63 | MSMED Act s.15–16",
  },
  {
    id: "pallet-shrinkage-buyout",
    tabLabel: "Pooled Pallet Shrinkage",
    title: "FMCG / Cold-Chain Lessee Loses 2,000+ Pooled Pallets & Refuses Shrinkage Buyout",
    cause:
      "Pallet-pooling networks issue thousands of RFID/barcoded HDPE or Euro wooden pallets to FMCG manufacturers and 3PLs on a per-day pool fee. At annual reconciliation or contract exit, 10–25% of pallets are missing—shipped downstream to distributors—and the lessee refuses to pay the contracted 'Lost Pallet Buyout Fee'.",
    legalBasis:
      "Under Sections 160 and 161 of the Indian Contract Act, 1872, a bailee has an absolute statutory duty to return bailed goods on expiry of the hire period; failure to return makes the bailee liable for the full replacement/buyout value plus continuing daily pool rent until settlement. Where pallets are knowingly diverted or sold as scrap, BNS 2023 s.316 (Criminal Breach of Trust) is triggered.",
    steps: [
      {
        step: "Lock Opening Balance, Dispatch e-Way Bills & Return Gate Passes",
        description:
          "Reconcile net pallet balance using signed Delivery Challans, RFID/barcode scan logs, and monthly balance confirmation emails to establish indisputable physical custody.",
      },
      {
        step: "Quantify Shrinkage Buyout & Continuing Pool Fee",
        description:
          "Compute the exact contractual Lost Pallet Buyout Rate (e.g., ₹2,800–₹4,200 per HDPE pallet) alongside accrued daily rental up to the formal termination cut-off date.",
      },
      {
        step: "Serve Bailment Return & BNS s.316 Warning Notice",
        description:
          "Issue an advocate notice demanding physical return within 7 days or immediate buyout settlement, putting the lessee's supply-chain head on notice for dishonest retention under BNS s.316.",
      },
    ],
    statutoryRule: "Contract Act s.160 & s.161 | BNS 2023 s.316 | Commercial Courts s.12A",
  },
  {
    id: "wet-lease-lockin",
    tabLabel: "Wet-Lease & Lock-In Exit",
    title: "Lessee Defaults on Wet-Lease Operator + MHE Arrears or Breaches Lock-In Period",
    cause:
      "In wet-lease contracts (forklift + trained operator + on-site maintenance), warehousing clients delay monthly consolidated bills citing 'shift absenteeism' or abruptly terminate a 36-month dedicated fleet lease at Month 11 to switch to a cheaper vendor, refusing to pay the lock-in exit fee.",
    legalBasis:
      "Dedicated fleet lock-in clauses (typically 24–36 months to amortize OEM capex) are enforceable under Section 74 of the Indian Contract Act, 1872 as reasonable pre-estimated liquidated damages, especially where the lessor customized mast heights, cold-storage heaters, or lithium packs for that specific warehouse.",
    steps: [
      {
        step: "Preserve Biometric Operator Attendance & Uptime Logs",
        description:
          "Compile monthly operator muster rolls, shift handover sheets, and 98%+ fleet uptime logs to demolish fabricated service-deficiency counterclaims.",
      },
      {
        step: "Enforce Amortized Capex & Lock-In Balance",
        description:
          "Document OEM purchase invoices, custom mast/cold-room retrofits, and remaining lock-in months to prove genuine financial loss under Contract Act s.73–74.",
      },
      {
        step: "Trigger Order XXXVII Summary Suit / Arbitration",
        description:
          "Where monthly wet-lease invoices carry signed log-sheets, file an Order XXXVII CPC Summary Suit or invoke fast-track arbitration for arrears plus lock-in damages.",
      },
    ],
    statutoryRule: "Contract Act s.73 & s.74 | CPC Order XXXVII | MSMED s.15–18",
  },
  {
    id: "multi-site-repossession",
    tabLabel: "Multi-Site Repossession",
    title: "Repossessing Forklifts & Stackers Across 5+ Locked 3PL / Factory Warehouses",
    cause:
      "A pan-India logistics or retail lessee shuts down regional hubs across Bhiwandi, Manesar, Hosur, and Kolkata simultaneously. Local warehouse landlords padlock gates over unpaid facility rent and refuse to let the MHE lessor demobilize its own leased forklifts.",
    legalBasis:
      "A warehouse landlord's rent lien against the 3PL tenant does NOT extend to third-party leased MHE owned by the lessor (bailment title remains with the lessor). Under Section 9 of the Arbitration & Conciliation Act, 1996 (or Order XL Rule 1 CPC), courts appoint a Court Receiver to seize and repossess equipment across multiple states simultaneously.",
    steps: [
      {
        step: "Serve Landlord Non-Disturbance & Ownership Proof",
        description:
          "Dispatch copies of the Master Lease Agreement, OEM tax invoices, chassis/serial number schedules, and GST e-Way Bills to the warehouse landlord confirming the tenant has zero title.",
      },
      {
        step: "File Urgent Section 9 Arbitration Petition for Receiver",
        description:
          "Move the jurisdictional Commercial Court under Section 9 (bypassing s.12A mediation due to urgent asset-dissipation risk) for appointment of a Court Receiver with police aid.",
      },
      {
        step: "Intimate Local Police Station Under BNS s.316",
        description:
          "File a formal complaint / CC notice to the local jurisdictional police station if the lessee or third-party landlord illegally detains, hides, or removes GPS-tracked forklifts.",
      },
    ],
    statutoryRule: "Arbitration Act s.9 | CPC Order XL Rule 1 | BNS 2023 s.316",
  },
];

export default function MheScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="MHE and pallet pooling recovery scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <span className="inline-block self-start sm:self-center shrink-0 px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200">
            {current.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial Failure Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Weapon
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Creditor Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.step}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
