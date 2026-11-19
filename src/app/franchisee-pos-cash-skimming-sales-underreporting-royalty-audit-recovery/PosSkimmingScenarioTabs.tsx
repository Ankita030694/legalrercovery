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
    id: "after-7pm-upi-bypass",
    tabLabel: "After-7PM Personal UPI",
    title: "Outlet Switches Off Central POS After 7 PM & Uses Personal Paytm/PhonePe QR",
    cause:
      "Franchisees in high-footfall QSR, cafe, and salon outlets disconnect the franchisor-mandated cloud POS during evening peak hours and place a proprietor's personal UPI standee at the counter, hiding 35%–45% of walk-in revenue from the 8% gross-sales royalty calculation.",
    legalBasis:
      "Routing brand-trademarked outlet walk-in sales through personal UPI accounts constitutes both a material breach of the Franchise Agreement's POS-mandate & accounting covenants (Indian Contract Act, 1872 s.73/74) and dishonest misappropriation / criminal breach of trust (BNS s.316) plus trademark misrepresentation when brand invoices are withheld. Mystery-shopper UPI transaction receipts showing the personal VPA name and timestamped outlet CCTV establish irrefutable electronic proof under BSA 2023 s.63.",
    steps: [
      {
        step: "Undercover Mystery-Shopper UPI Capture",
        description:
          "Deploy 3 independent mystery shoppers across peak evening hours (7 PM–10 PM) to pay via the counter's personal QR code, preserving NPCI UTR numbers, UPI beneficiary names, and unbilled thermal/handwritten tokens.",
      },
      {
        step: "POS Heartbeat & Offline Log Extraction",
        description:
          "Pull cloud POS terminal power-off/offline logs for the last 90 days and cross-match against footfall CCTV / Wi-Fi router uptime logs to prove deliberate peak-hour shutdowns.",
      },
      {
        step: "Serve 15-Day Penal Royalty & Audit Demand Notice",
        description:
          "Issue an Advocate Legal Notice invoking the Input-Output Audit Clause and Section 74 liquidated damages (2x–3x audit-deficit royalty), demanding full bank statement disclosure and immediate escrow settlement.",
      },
    ],
    statutoryRule: "Contract Act s.73 & s.74 | BNS s.316 | BSA 2023 s.63 Electronic Proof",
  },
  {
    id: "unauthorized-raw-material",
    tabLabel: "Local Raw Material",
    title: "Franchisee Buys Unbranded Local Premix & Packaging to Conceal True Volume",
    cause:
      "Once a franchisee realizes the franchisor tracks branded cups, pizza boxes, and central commissary premix dispatches, the operator procures generic local cups or wholesale syrups/flour offline so input-output ratios appear artificially aligned with underreported POS sales.",
    legalBasis:
      "Approved-supplier and commissary exclusivity clauses are enforceable commercial covenants protecting brand quality, FSSAI food-safety traceability, and royalty integrity — not void restraints of trade under Section 27 of the Contract Act during the subsistence of the franchise. Unauthorized local sourcing triggers immediate termination rights, trademark infringement injunctions under Section 29 of the Trade Marks Act, 1999, and liquidated quality-breach damages under Section 74.",
    steps: [
      {
        step: "Surprise Commissary & Cold-Room Stock Audit",
        description:
          "Conduct an unannounced field audit under the franchise inspection clause, photographing non-approved local raw material cartons, vendor tax invoices, and unbranded packaging sleeves with geo-tagged timestamps.",
      },
      {
        step: "Utility & Delivery Aggregator Cross-Reconciliation",
        description:
          "Compare Zomato/Swiggy order volume, commercial electricity kWh spikes, and milk/water consumption against central commissary dispatches to expose the hidden production volume.",
      },
      {
        step: "Dual-Breach Notice: Commissary Default + Royalty Re-Computation",
        description:
          "Serve a formal cure-or-terminate notice quantifying suppressed revenue via utility/aggregator benchmarks alongside brand-dilution damages and mandatory recall of non-standard stock.",
      },
    ],
    statutoryRule: "Contract Act s.27 Exception & s.74 | Trade Marks Act 1999 s.29 | FSSAI Traceability",
  },
  {
    id: "royalty-enach-bounce",
    tabLabel: "Royalty e-NACH Bounce",
    title: "Monthly Minimum Royalty / Ad-Fund e-NACH Mandate Dishonoured",
    cause:
      "After an audit query or during cash skimming, franchisees intentionally drain the designated settlement bank account or issue stop-payment instructions on the monthly royalty and marketing-fund e-NACH auto-debit mandate.",
    legalBasis:
      "Under Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act), dishonour of an electronic funds transfer (e-NACH / ECS) initiated for discharge of a legally enforceable debt or liability carries criminal liability up to 2 years imprisonment or twice the bounced amount, parity with Section 138 NI Act. Statutory notice must be issued within 30 days of receiving the NPCI/bank return memo, granting a strict 15-day cure window.",
    steps: [
      {
        step: "Preserve NPCI Return Memo & UMRN Ledger",
        description:
          "Download the bank's e-NACH dishonour memo showing the Unique Mandate Reference Number (UMRN), presentation date, and reason code ('Insufficient Funds' or 'Payment Stopped').",
      },
      {
        step: "Issue 30-Day Strict Section 25 PSS Act Notice",
        description:
          "Serve a statutory demand notice within 30 days of return memo receipt via Speed Post RPAD + Email + WhatsApp, separating the exact bounced e-NACH amount from unbilled audit-variance penalties (Suman Sethi safeguard).",
      },
      {
        step: "File Judicial Magistrate Complaint + Section 143A Interim Relief",
        description:
          "If unpaid after Day 15 of notice service, file a Section 25 PSS Act criminal complaint within 30 days and seek 20% interim compensation alongside Commercial Court / Arbitration recovery for the full audit deficit.",
      },
    ],
    statutoryRule: "PSS Act 2007 s.25(1)-(5) | 30-Day Notice + 15-Day Cure + 30-Day Complaint",
  },
  {
    id: "audit-obstruction",
    tabLabel: "Audit & CCTV Refusal",
    title: "Franchisee Blocks Forensic Auditor, Deletes CCTV, or Refuses POS Access",
    cause:
      "When confronted with a variance flag, rogue operators deny physical entry to the franchisor's audit team, claim CCTV NVR hard drives 'crashed', or refuse to share GST GSTR-1 / bank settlement statements.",
    legalBasis:
      "Franchise audit clauses expressly grant inspection rights over books, NVR footage, and bank statements. Obstruction constitutes an independent material breach entitling the franchisor to draw an adverse inference under Section 119 of the Bharatiya Sakshya Adhiniyam, 2023 (withholding best evidence) and seek urgent interim protection under Section 9 of the Arbitration and Conciliation Act, 1996 (or Order XXXIX CPC) for forensic imaging of POS/NVR hardware and bank-account attachment.",
    steps: [
      {
        step: "Document Refusal on Geo-Tagged Video & Email",
        description:
          "Record the auditor's scheduled visit and the franchisee's refusal at the outlet gate, followed by a same-day formal email recording obstruction and demanding NVR/ledger preservation.",
      },
      {
        step: "Apply Best-Judgment Consumption Assessment",
        description:
          "Compute imputed sales strictly from central warehouse packaging/premix dispatches minus standard 3%–5% wastage allowance, shifting the evidentiary burden onto the franchisee.",
      },
      {
        step: "Invoke Arbitration s.21 + Section 9 Interim Forensic Freeze",
        description:
          "File a Section 9 petition for appointment of a Local Commissioner / forensic auditor and bank-guarantee or escrow attachment while invoking institutional arbitration.",
      },
    ],
    statutoryRule: "BSA 2023 s.119 Adverse Inference | Arbitration Act 1996 s.9 & s.21",
  },
];

export default function PosSkimmingScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Franchisee POS Skimming Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            {activeScenario.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Operational Leakage Pattern
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory &amp; Contractual Remedy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            3-Step Franchisor Enforcement Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.step}
                  </span>
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
