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
    id: "fleet-kwh-postpaid",
    tabLabel: "1. Fleet kWh Default",
    title: "E-Cab / Last-Mile Delivery Fleet Defaults on Fortnightly Postpaid Charging Bills",
    trigger:
      "An electric cab aggregator or e-commerce last-mile logistics fleet runs 80+ EVs through your dedicated DC fast-charging hub on 15-day postpaid kWh credit, accumulates ₹25 Lakh across two billing cycles, and stops paying while attempting to shift vehicles to a rival hub.",
    immediateAction:
      "Immediately suspend postpaid RFID/VIN Fleet Whitelisting via OCPP (keeping emergency cash-pay active if contractually required) and freeze any refundable security deposit against verified kWh arrears. Export signed OCPP 1.6J/2.0.1 MeterValues and StopTransaction logs.",
    statutoryRemedy:
      "Serve a 15-day Commercial Recovery Notice citing OCPP session telemetry, Contract Act s.73 damages, and IBC Section 8 Form 3 Demand Notice (where undisputed debt crosses ₹1 Cr) or Order XXXVII CPC summary suit / MSMED Act s.18 MSEFC reference.",
    evidenceRequired:
      "Master Fleet Charging Agreement, RFID/VIN allocation table, OCPP MeterValues CSV with kWh timestamps, GST tax invoices, and BSA 2023 s.63 electronic certificate signed by the CMS administrator.",
  },
  {
    id: "host-site-power-cut",
    tabLabel: "2. Host-Site Power Cut",
    title: "Highway Hotel, Mall, or Tech Park Cuts Power or Blocks Access to Your ₹14L DC Charger",
    trigger:
      "Under a 7-year CPO-Host Revenue-Share / Space License Agreement, you invested ₹14 Lakh in a 60 kW or 120 kW DC Fast Charger plus LT/HT cabling. Following a management dispute or rival CPO offer, the landlord disconnects sub-meter power, locks the parking bay, and refuses charger demobilization.",
    immediateAction:
      "Document the sudden offline heartbeat and voltage-drop fault in your CMS logs alongside timestamped geo-tagged site photos. Issue a formal Notice of Equipment Ownership, Breach of Easement/License, and 7-Day Peaceful Demobilization Demand.",
    statutoryRemedy:
      "File an urgent Section 9 petition under the Arbitration and Conciliation Act, 1996 (or Commercial Court injunction + Specific Relief Act s.7/8) for an ad-interim order restraining third-party tampering and appointing a Court Commissioner for safe DC charger removal. Put the host on notice for criminal breach of trust under BNS s.316.",
    evidenceRequired:
      "Executed Site Host / Space License Agreement with explicit Equipment Title Retention clause, charger OEM serial number & GST purchase invoice, CMS heartbeat loss log, and DISCOM/sub-meter billing trail.",
  },
  {
    id: "charger-oem-epc-balance",
    tabLabel: "3. OEM Charger Balance",
    title: "EV Charger Manufacturer / Turnkey Installer Unpaid for 120 kW DC Hardware & Civil Works",
    trigger:
      "A charger OEM or turnkey EV infra EPC supplies and commissions six 120 kW dual-gun DC fast chargers and a 500 kVA compact substation for a state transport or private bus depot, but the buyer withholds the final 30% commissioning milestone and 10% retention citing frivolous OCPP integration delays.",
    immediateAction:
      "Compile Joint Commissioning Sign-Offs, FAT/SAT (Site Acceptance Test) certificates, and live OCPP heartbeat proof showing chargers are actively dispensing power to buses. Suspend non-essential CMS software feature upgrades strictly as permitted by contract.",
    statutoryRemedy:
      "Invoke MSMED Act s.15–18 before the MSEFC (if Udyam-registered) to claim 3x RBI Bank Rate compound interest from Day 46, alongside Section 43B(h) Income Tax disallowance leverage, or initiate Commercial Court / Arbitration proceedings for unpaid supply + civil works.",
    evidenceRequired:
      "PO & Turnkey Contract, e-Way Bills, OEM serial-number delivery challans, signed SAT/commissioning protocol, CEIG electrical safety approval, and OCPP uptime logs.",
  },
  {
    id: "host-revenue-share-skimming",
    tabLabel: "4. Host Revenue & Tariffs",
    title: "Host Site Landlord Withholds Cash/UPI Parking-Plus-Charging Collections or Inflates Tariff",
    trigger:
      "A commercial complex or fleet yard collects combined parking-and-charging fees from walk-in EV drivers or deducts inflated auxiliary electricity rates above the agreed DISCOM EV-tariff pass-through, eroding the CPO's net margin and delaying monthly revenue-share settlement.",
    immediateAction:
      "Serve a formal Audit & Tariff Reconciliation Notice demanding raw DISCOM EV-meter bills and sub-meter readings within 7 days, while switching walk-in payments exclusively to the CPO's direct UPI/app gateway.",
    statutoryRemedy:
      "Enforce contractual set-off and true-up recovery under Indian Contract Act s.73/74, recover wrongfully retained collections via Order XXXVII CPC or Arbitration, and trigger termination with unamortized capex buyout where the host breaches exclusivity.",
    evidenceRequired:
      "Revenue-Share & Tariff Pass-Through Schedule, monthly DISCOM EV-category utility bills, CMS payment gateway settlement statements, and reconciliation ledger.",
  },
];

export default function EvCpoScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="EV Charging CPO & OEM Default Scenarios"
        className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-5"
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
              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-left transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4"
      >
        <div className="border-b border-slate-100 pb-3">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626] mb-1">
            EV Infrastructure Recovery Playbook
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1.5">
              1. Commercial Failure Trigger
            </p>
            <p className="text-slate-700 leading-relaxed">{current.trigger}</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-bold text-amber-900 uppercase tracking-wider text-[11px] mb-1.5">
              2. Immediate Creditor Action (Day 1–7)
            </p>
            <p className="text-amber-950 leading-relaxed">{current.immediateAction}</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="font-bold text-emerald-900 uppercase tracking-wider text-[11px] mb-1.5">
              3. Statutory Remedy &amp; Forum
            </p>
            <p className="text-emerald-950 leading-relaxed">{current.statutoryRemedy}</p>
          </div>

          <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
            <p className="font-bold text-red-400 uppercase tracking-wider text-[11px] mb-1.5">
              4. Mandatory BSA 2023 s.63 Proof
            </p>
            <p className="text-slate-200 leading-relaxed">{current.evidenceRequired}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
