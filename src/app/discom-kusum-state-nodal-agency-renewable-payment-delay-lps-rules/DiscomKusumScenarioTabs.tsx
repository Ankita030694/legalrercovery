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
    id: "discom-praapti",
    tabLabel: "1. DISCOM PPA & PRAAPTI",
    title: "DISCOM Delays Solar/Wind Tariff Invoices Beyond 75 Days Under PPA",
    trigger:
      "A state distribution utility (DISCOM) stops honouring monthly solar/wind energy invoices or PM-KUSUM Component-A/C feeder-levelization tariff bills beyond the PPA due date without establishing a Letter of Credit (LC) or payment security mechanism.",
    immediateAction:
      "Upload the unpaid invoice and Joint Meter Reading (JMR) directly onto the Ministry of Power's PRAAPTI portal (praapti.in) and serve a formal Default Notice under Rule 7 of the Electricity (Late Payment Surcharge and Related Matters) Rules, 2022.",
    statutoryRemedy:
      "Trigger automatic regulation of Short-Term Open Access (STOA) for the defaulting DISCOM after 75 days from invoice presentation (and Long/Medium-Term Access curtailment after 30 further days), paired with a Section 86(1)(f) SERC petition for principal, LPS interest, and LC enforcement.",
    evidenceRequired:
      "Signed PPA, SERC tariff adoption order, ABT/AMR meter data, signed JMRs, PRAAPTI portal invoice acknowledgment timestamp, and BSA 2023 Section 63 electronic certificate.",
  },
  {
    id: "sna-kusum-subsidy",
    tabLabel: "2. SNA KUSUM / Solar Pump",
    title: "State Nodal Agency (MEDA/GEDA/UPNEDA/RRECL) Holds Solar Pump or Street-Light Dues",
    trigger:
      "A State Nodal Agency (SNA) withholds 20%–40% of capital subsidy tranches or balance milestone payments for PM-KUSUM Component-B standalone solar water pumps or rural solar street-light supply-and-installation tenders citing 'MNRE fund release pending'.",
    immediateAction:
      "Audit the tender/LoA dispute clause: because an SNA is a state agency executing a procurement tender rather than a distribution licensee buying power under a PPA, SERC s.86(1)(f) does NOT apply. Serve a statutory Section 80 CPC (60-day) pre-suit notice or invoke MSMED Act Section 18.",
    statutoryRemedy:
      "For Micro/Small registered EPCs/OEMs, file an MSME Samadhaan / MSEFC reference claiming 3x RBI bank rate compound interest under MSMED s.16 (which overrides contractual arbitration under Mahakali Foods). For non-MSMEs or arbitrary withholding after verified commissioning, file a High Court Writ Petition (Article 226) or Section 11 Arbitration.",
    evidenceRequired:
      "Tender LoA/Work Order, Joint Commissioning & Inspection Certificates (JCC), farmer beneficiary geo-tagged installation logs, SNA portal approval screenshots, and Udyam Registration certificate.",
  },
  {
    id: "open-access-banking",
    tabLabel: "3. Open Access & Banking",
    title: "DISCOM Denies Energy Banking, Wheeling Credits, or Unbilled Surplus Adjustment",
    trigger:
      "Under captive, group-captive, or third-party Open Access solar arrangements, the host DISCOM fails to credit banked energy units in monthly consumer bills, arbitrarily lapses unutilized banked power, or applies unapproved cross-subsidy surcharges (CSS).",
    immediateAction:
      "Issue a formal reconciliation notice attaching SLDC/RLDC Energy Accounting statements and Open Access Wheeling & Banking Agreement (WBA) schedules, demanding credit-note rectification within 15 days.",
    statutoryRemedy:
      "File a Petition under Section 86(1)(f) read with Section 42 of the Electricity Act, 2003 before the concerned SERC seeking mandatory credit adjustment, refund of excess CSS/additional surcharge with carrying cost, and interim restraint against disconnection of the C&I off-taker.",
    evidenceRequired:
      "Open Access WBA, SLDC weekly/monthly energy schedules, 15-minute time-block UI/DSM data, C&I consumer electricity bills showing omitted credit units, and SERC Open Access Regulations.",
  },
  {
    id: "forum-jurisdiction-split",
    tabLabel: "4. SERC vs Arb/Writ Split",
    title: "Avoiding Fatal Dismissal: Choosing SERC s.86(1)(f) vs Arbitration vs Writ",
    trigger:
      "Renewable developers frequently lose 12–18 months when a Section 11 High Court arbitration petition against a DISCOM is dismissed for lack of jurisdiction—or when an SERC petition against a non-licensee SNA is rejected as non-maintainable.",
    immediateAction:
      "Classify the counterparty and contract nature before serving notice: (a) Licensee + Power Purchase / Tariff / Open Access = SERC s.86(1)(f); (b) State Nodal Agency / PSU + EPC / Pump / Street-Light Supply = MSEFC / Arbitration / Writ + s.80 CPC.",
    statutoryRemedy:
      "Under Gujarat Urja Vikas Nigam Ltd. v. Essar Power Ltd. (2008) 4 SCC 755, SERC has exclusive statutory jurisdiction over licensee-generator PPA disputes—only SERC can adjudicate or refer them to arbitration. Conversely, SNA procurement disputes fall outside s.86(1)(f) and belong in MSEFC, Commercial Arbitration, or Writ Court.",
    evidenceRequired:
      "Counterparty statutory license status (Distribution Licensee vs State Society/Agency), exact dispute-resolution clause, and Limitation Act s.18 acknowledgment audit.",
  },
];

export default function DiscomKusumScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="DISCOM and State Nodal Agency Recovery Scenarios"
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
              Immediate Creditor Action
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.immediateAction}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
              Binding Statutory Remedy
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryRemedy}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Mandatory Evidence &amp; BSA s.63 Proof
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
