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
    id: "gate-lockout",
    tabLabel: "1. Gate Lockout & Free Power",
    title: "Factory Stops Paying PPA Bills, Kills Telemetry & Locks Gate",
    trigger:
      "Offtaker defaults on 2–3 monthly solar tariff invoices, unplugs the SCADA/GPRS modem to blind generation monitoring, and instructs security guards to deny rooftop access to the RESCO developer's O&M engineers.",
    immediateAction:
      "Issue a 7-Day Event of Default & Curtailment Notice by Email, WhatsApp, and Speed Post RPAD. If the PPA expressly permits remote zero-export or inverter standby upon uncured payment default, execute a logged remote curtailment without damaging factory switchgear.",
    statutoryRemedy:
      "File an urgent Section 9 Petition under the Arbitration and Conciliation Act, 1996 before the Commercial Court/High Court seeking: (a) ad-interim injunction restraining unauthorized solar consumption, (b) mandatory police-assisted roof access for O&M or dismantling, and (c) attachment/bank guarantee for arrears.",
    evidenceRequired:
      "Executed OPEX PPA (with Title Retention, Roof License & Arbitration Clauses), JMR/CEIG commissioning certificate, pre-blackout SCADA inverter logs, and BSA 2023 s.63 certificate.",
  },
  {
    id: "buyout-refusal",
    tabLabel: "2. Buyout Schedule Default",
    title: "Offtaker Triggers Termination Yet Refuses Termination Buyout Value",
    trigger:
      "Following a Developer Termination Notice (or wrongful Offtaker exit during the lock-in period), the factory refuses to pay the Scheduled Termination Buyout Price while demanding the developer remove the 1 MW plant at its own cost.",
    immediateAction:
      "Freeze dismantling until the Termination Buyout Demand Notice is served, quantifying the exact Year-N Buyout Schedule figure plus accrued Late Payment Surcharge (LPS), GST, and unamortized EPC/financing costs.",
    statutoryRemedy:
      "Enforce the pre-agreed Termination Buyout Schedule under Section 74 of the Indian Contract Act, 1872 as a genuine pre-estimate of unrecovered CapEx rather than a penalty. Pair Section 9 security (escrow/asset disclosure under Order XXXVIII Rule 5 principles) with fast-track institutional arbitration.",
    evidenceRequired:
      "PPA Schedule of Termination Values, project CapEx capitalisation ledger, term-loan sanction & debt-service schedule, and written Event of Default cure-period expiry proof.",
  },
  {
    id: "deemed-generation",
    tabLabel: "3. Deemed Generation Dispute",
    title: "Factory Trips Breaker or Alleges 'Roof Leakage' to Evade MGO",
    trigger:
      "Offtaker intentionally isolates the solar incomer ACB, schedules prolonged unapproved plant shutdowns, or raises belated 'roof waterproofing' complaints after receiving payment reminders to avoid Minimum Guaranteed Offtake (MGO) / Deemed Generation invoices.",
    immediateAction:
      "Document zero-export grid-availability vs. inverter trip timestamps via SCADA and weather-station (WMS) pyranometer logs. Serve a formal rebuttal citing PPA Deemed Generation and Force Majeure exclusion clauses.",
    statutoryRemedy:
      "Invoke Section 53 & 54 of the Contract Act (preventing a party from taking advantage of its own breach/prevention of performance) and defeat belated quality defenses under the Mobilox bona fide pre-existing dispute standard before arbitration or MSEFC (for eligible MSME O&M/BOS claims).",
    evidenceRequired:
      "15-minute interval SCADA irradiance & DC-string health logs, inverter grid-fault error codes, joint roof-handover checklist at COD, and BSA 2023 s.63 electronic affidavit.",
  },
  {
    id: "lender-step-in",
    tabLabel: "4. Lender Step-In & IBC Risk",
    title: "Project Lender Step-In & Pre-CIRP Plant Ring-Fencing",
    trigger:
      "Offtaker enters severe financial distress or faces an NCLT Section 7/9 insolvency petition while ₹2.5 Cr+ of RESCO solar assets remain bolted to its factory roof, threatening an IBC Section 14 moratorium freeze.",
    immediateAction:
      "Trigger Tripartite Substitution Agreement notifications with the project lender immediately upon Day-60 DPD. Establish that solar modules, inverters, and MMS structures are third-party bailed/licensed equipment—never the Offtaker's owned fixed assets.",
    statutoryRemedy:
      "Seek urgent Section 9 repossession or third-party asset exclusion relief prior to CIRP admission, relying on IBC Section 18(1)(f) Explanation (a) which excludes assets owned by a third party in possession of the Corporate Debtor under contractual/bailment arrangements.",
    evidenceRequired:
      "Tripartite Lender Substitution Agreement, CERSAI/ROC charge filings of the RESCO SPV (proving developer/lender title), equipment serial-number fixed-asset register, and tax-depreciation schedules.",
  },
];

export default function RescoSolarScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="RESCO Solar PPA Default Scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              Default Trigger
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.trigger}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-1">
              Day-1 Operational &amp; Notice Action
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.immediateAction}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
              Statutory &amp; Court Remedy
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryRemedy}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
              Mandatory Evidence Pack
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.evidenceRequired}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
