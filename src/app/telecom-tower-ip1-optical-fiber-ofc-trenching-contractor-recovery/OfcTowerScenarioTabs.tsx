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
    id: "otdr-at-withheld",
    tabLabel: "OTDR Passed, AT Withheld",
    title: "IP-1 or EPC Prime Lights Up Fiber Traffic Yet Stalls Final Acceptance Testing (AT) Sign-Off",
    cause:
      "The HDD trenching and OFC splicing contractor completes duct blowing, pit restoration, and Optical Time-Domain Reflectometer (OTDR) testing within DoT/TEC attenuation limits (<0.25 dB/km). However, the IP-1 licensee or EPC prime contractor refuses to issue the final AT Certificate for 120–180 days—blocking RA bill submission while already monetizing the lit fiber.",
    legalBasis:
      "Under Section 15 of the MSMED Act, 2006, the 45-day maximum credit ceiling runs from the date of actual acceptance or deemed acceptance (15 days from delivery/work completion if no written objection is raised). Commercial use of the commissioned fiber constitutes implied acceptance under Section 8 of the Indian Contract Act, 1872, preventing the prime from relying on its own administrative delay under Section 53.",
    steps: [
      {
        step: "Freeze OTDR Traces & GPS As-Built Drawings",
        description:
          "Export raw `.sor` OTDR trace files, splice-loss tables, and geo-tagged trench depth photographs signed by the site engineer, accompanied by a BSA 2023 s.63 certificate.",
      },
      {
        step: "Serve Deemed-Acceptance & Section 15 Notice",
        description:
          "Issue a fact-verified notice recording the date of link handover, citing 15-day deemed acceptance under MSMED Act s.2(b) and demanding RA bill certification within 7 days.",
      },
      {
        step: "File MSEFC Samadhaan or Order XXXVII Suit",
        description:
          "If unpaid beyond 45 days, file a claim before the Micro and Small Enterprises Facilitation Council (MSEFC) for principal plus 3x RBI Bank Rate compound interest.",
      },
    ],
    statutoryRule: "MSMED Act 2006 s.2(b), s.15 & s.16 · Contract Act s.8 & s.53 · BSA 2023 s.63",
  },
  {
    id: "row-municipal-deduction",
    tabLabel: "Wrongful ROW Deduction",
    title: "EPC Prime Back-Charges Unverified PWD, NHAI, or Municipal ROW Restoration Penalties",
    cause:
      "Months after trenching completion, the prime contractor issues a unilateral debit note deducting 15%–35% of the contractor's Running Account (RA) bill or retention money, alleging 'municipal Right-of-Way (ROW) restoration penalty' or 'utility damage fine' without sharing any government demand challan or joint site inspection report.",
    legalBasis:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, a prime contractor cannot unilaterally forfeit retention money or impose liquidated damages without proving actual loss and causal attribution to the subcontractor's scope. Absent a contemporaneous joint measurement book (MB) entry or statutory challan paid to the authority, arbitrary back-charges are legally void.",
    steps: [
      {
        step: "Demand Original Authority Challan & MB",
        description:
          "Put the EPC prime on formal notice to produce the exact municipal/NHAI/PWD penalty order, payment UTR, and joint inspection memo linking the chainage to your work.",
      },
      {
        step: "Dispute Debit Note Within 7 Days",
        description:
          "Never stay silent on a unilateral debit note or credit-note adjustment; issue a written rebuttal rejecting the deduction so it cannot be treated as an 'account stated'.",
      },
      {
        step: "Claim Full Retention & Wrongful Withholding",
        description:
          "Club the wrongfully deducted retention amount with overdue RA bills in an MSEFC reference or Section 21 arbitration notice with pendente lite interest.",
      },
    ],
    statutoryRule: "Contract Act s.73 & s.74 · MSMED Act s.15–18 · Commercial Courts Act s.12A",
  },
  {
    id: "tower-diesel-om-arrears",
    tabLabel: "Tower Diesel & O&M Arrears",
    title: "TowerCo or IP-1 Withholds Diesel Filling, DG Maintenance & Site Security Bills",
    cause:
      "Regional passive-infra O&M vendors finance daily diesel procurement, DG set servicing, battery bank upkeep, and 24x7 tower security guards across 50–300 rural and semi-urban sites. The TowerCo withholds 4–8 months of reimbursements citing 'EB meter mismatch', 'fuel sensor variance', or 'uptime SLA penalty' raised retroactively.",
    legalBasis:
      "Where O&M services and diesel top-ups are logged via the TowerCo's own mobile app, GPS fuel-fill photos, and signed site logbooks, retroactive SLA deductions raised months after invoice submission fail the Mobilox test of a bona fide pre-existing dispute. Furthermore, fuel reimbursements are liquidated out-of-pocket expenses recoverable via Order XXXVII CPC or MSEFC.",
    steps: [
      {
        step: "Compile App Logs, Fuel Invoices & Guard Muster",
        description:
          "Extract GST fuel-pump bills, DG hour-meter snapshots, and TowerCo NOC portal check-in logs authenticated under BSA 2023 Section 63.",
      },
      {
        step: "Quantify Principal vs. Disputed SLA Cap",
        description:
          "Isolate undisputed fixed O&M fees and diesel reimbursements from any capped SLA deduction, demonstrating zero contemporaneous penalty notices.",
      },
      {
        step: "Initiate MSEFC or IBC Section 8 Demand",
        description:
          "For corporate TowerCo arrears exceeding ₹1 crore, serve an IBC Form 3/4 demand notice or trigger MSEFC conciliation for immediate working-capital release.",
      },
    ],
    statutoryRule: "MSMED Act s.15–16 · Order XXXVII CPC · IBC 2016 s.8 (Mobilox) · BSA 2023 s.63",
  },
  {
    id: "bharatnet-pay-when-paid",
    tabLabel: "BharatNet Pay-When-Paid",
    title: "Tier-1 EPC Stalls BharatNet / Smart City Subcontractor Bills Citing BSNL or SPV Delay",
    cause:
      "A Tier-1 system integrator executing a BharatNet Phase-II/III or Smart City OFC package tells its regional HDD subcontractor: 'We have a back-to-back pay-when-paid clause—we will clear your RA bills only when BBNL / BSNL / State IT SPV releases our milestone.'",
    legalBasis:
      "Even where a subcontract contains a 'back-to-back' or 'pay-when-paid' clause, Section 15 of the MSMED Act, 2006 overrides any contrary contractual term by mandating payment within a maximum of 45 days. Under Section 24 of the MSMED Act, statutory payment timelines have overriding effect over inconsistent contract clauses, and the prime cannot indefinitely shift PSU collection risk onto an MSME vendor.",
    steps: [
      {
        step: "Verify Udyam Registration Prior to PO Date",
        description:
          "Confirm your Udyam Micro/Small enterprise certificate predates the Work Order / Purchase Order—the threshold requirement under Supreme Court precedent (Silpi Industries).",
      },
      {
        step: "Invoke Section 24 Overriding Mandate",
        description:
          "Serve a statutory demand citing MSMED Act Section 15 and Section 24, putting the Tier-1 EPC on notice that 'pay-when-paid' cannot defer payment beyond 45 days.",
      },
      {
        step: "Escalate to MSEFC + Tax Audit s.43B(h) Flag",
        description:
          "File on MSME Samadhaan and remind the corporate buyer's finance team of Income Tax Act Section 43B(h) disallowance risk on unpaid Micro/Small enterprise dues.",
      },
    ],
    statutoryRule: "MSMED Act s.15, s.16 & s.24 · Income Tax Act s.43B(h) · Silpi Industries Precedent",
  },
];

export default function OfcTowerScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Telecom Infra Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            Creditor Playbook
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory &amp; Contractual Counter-Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Recovery Execution
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl px-4 py-3 text-xs font-medium flex flex-wrap items-center justify-between gap-2">
          <span className="text-red-400 font-bold uppercase tracking-wider text-[10px]">
            Applicable Law:
          </span>
          <span className="text-slate-200">{activeScenario.statutoryRule}</span>
        </div>
      </div>
    </div>
  );
}
