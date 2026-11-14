"use client";

import React, { useState } from "react";

interface TpaScenario {
  id: string;
  tabLabel: string;
  ticketBand: string;
  title: string;
  failureMechanism: string;
  lawfulProtocol: string;
  statutoryHooks: string;
  executionSteps: {
    step: string;
    detail: string;
  }[];
  recoveryLeverage: string;
}

const TPA_SCENARIOS: TpaScenario[] = [
  {
    id: "arbitrary-package-deductions",
    tabLabel: "Package Tariff Slashes",
    ticketBand: "₹25,000 – ₹1.8L Deduction per IPD Case",
    title: "TPA Slashes 20%–35% Off Agreed Package Procedures Citing Unilateral Internal Tariff Caps",
    failureMechanism:
      "Despite the hospital having an executed Service Level Agreement (SLA) or Provider Network Agreement with pre-agreed surgical package rates (e.g., Laparoscopic Cholecystectomy, CABG, Total Knee Replacement), the TPA unilaterally disallows OT consumables, surgical drapes, biomedical disposal, and nursing charges as 'non-payable / administrative overhead'.",
    lawfulProtocol: "MOU Specific Performance Audit + Rejection of Internal Guidelines + Contract Act s.73 Notice",
    statutoryHooks:
      "Section 73 Indian Contract Act, 1872 (Breach of Provider Network Agreement); IRDAI (Third Party Administrators - Health Services) Regulations; Commercial Courts Act, 2015 s.2(1)(c)(xx).",
    executionSteps: [
      {
        step: "Reconcile Settlement Advice Against Executed MOU Tariff Schedule",
        detail:
          "Extract the TPA's Settlement Summary / Deduction Sheet. Cross-match every deducted line item against the agreed inclusions/exclusions clause of your hospital's Network Provider Empanelment MOU.",
      },
      {
        step: "Issue Rebuttal Letter Citing IRDAI Non-Payable Master List",
        detail:
          "Point out that under IRDAI standard guidelines on standardization in health insurance, TPAs cannot expand the list of non-payable items beyond the regulator's sanctioned Annexure if the hospital contract stipulates package inclusion.",
      },
      {
        step: "Issue 15-Day Breach of Contract Notice Impleading Both TPA & Insurer",
        detail:
          "Serve a joint advocate demand notice upon the Chief Operating Officer of the TPA and the Principal Insurer under Contract Act s.73, demanding release of withheld amounts with penal interest within 15 days.",
      },
    ],
    recoveryLeverage: "Very High: Insurers settle package disputes quickly once reminded that TPAs have no independent contracting power outside the principal policy.",
  },
  {
    id: "pre-auth-repudiated-post-discharge",
    tabLabel: "Post-Discharge Repudiation",
    ticketBand: "₹1.5L – ₹12L Disallowed Inpatient Bill",
    title: "Cashless Pre-Auth & Interim Enhancements Approved, But Final Claim Repudiated Post-Discharge",
    failureMechanism:
      "The hospital admitted the patient under valid cashless initial pre-authorization and secured interim enhancement letters. Relying on these binding approvals, the hospital discharged the patient without collecting cash. Weeks later, the TPA or insurer sends a repudiation memo claiming 'pre-existing disease non-disclosure' or 'active line of treatment not justified'.",
    lawfulProtocol: "Promissory Estoppel Enforcement + Commercial Dispute Notice + IRDAI Grievance Escalation",
    statutoryHooks:
      "Doctrine of Promissory Estoppel; Section 115 Indian Evidence Act / BSA 2023; IRDAI Master Circular on Health Insurance Business (strict cashless repudiation guidelines); Commercial Courts Act s.2(1)(c)(xx).",
    executionSteps: [
      {
        step: "Compile Complete Pre-Authorization Audit Trail with Digital Timestamps",
        detail:
          "Collate the initial Pre-Auth Request, TPA Initial Authorization Letter, daily clinical chart updates, Interim Enhancement Approvals, and Final Authorization Email.",
      },
      {
        step: "Invoke Promissory Estoppel Under Section 115 Evidence Law",
        detail:
          "Draft a statutory demand establishing that the hospital altered its position detrimentally (releasing the patient without cash security) solely relying on the insurer's written pre-authorization guarantee.",
      },
      {
        step: "Dispatch Pre-Litigation Legal Notice Warning of Commercial Court Action",
        detail:
          "Serve notice threatening Commercial Suit under Section 2(1)(c)(xx) Commercial Courts Act and regulatory blacklisting complaint to the IRDAI Grievance Cell (Bima Bharosa).",
      },
    ],
    recoveryLeverage: "Decisive: Courts and Ombudsman benches consistently hold that insurers cannot reverse written cashless pre-authorizations post-discharge unless active fraud is proven.",
  },
  {
    id: "unending-piecemeal-queries",
    tabLabel: "Serial Query Aging (120+ Days)",
    ticketBand: "₹10L – ₹1.2 Cr Aged Receivables Portfolio",
    title: "TPA Withholds Payout for 90–180+ Days by Raising Piecemeal Queries Every 25 Days",
    failureMechanism:
      "To artificially compress quarterly claim payout ratios and preserve float income, TPA claim adjusters issue fragmented, repetitive queries (e.g., indoor case records, treating doctor qualification, pharmacy invoices) one by one right before internal regulatory turnaround deadlines expire, indefinitely extending hospital aging.",
    lawfulProtocol: "Piecemeal Query Ban Notice + IRDAI Settlement TAT Clause + Pre-Institution Mediation",
    statutoryHooks:
      "IRDAI (Health Insurance) Regulations Regulation 27 (Single-query rule within 15 days); IRDAI Master Circular (Settlement within 30 days of final document receipt); Commercial Courts Act Section 12A.",
    executionSteps: [
      {
        step: "Establish Chronological Portal Interaction Ledger (BSA s.63)",
        detail:
          "Export the TPA portal ticket history demonstrating that the hospital submitted all initial documents on Day 1, and that subsequent queries were duplicative, frivolous, or serial in violation of IRDAI single-query rules.",
      },
      {
        step: "Serve 'Final Requisition & Cure Notice' Demanding Immediate Settlement",
        detail:
          "Notify the TPA and Insurer Grievance Redressal Officer (GRO) that all relevant medical records have been supplied and the 30-day statutory settlement window has lapsed.",
      },
      {
        step: "Escalate to Commercial Mediation & Institutional Dispute Forum",
        detail:
          "Trigger Section 12A pre-institution commercial mediation or invoke the contract's arbitration clause for batch recovery of aged claims along with legal notice costs.",
      },
    ],
    recoveryLeverage: "High: Regulatory inspection fears compel insurers to clear long-pending query batches once an advocate notice establishes the serial delay trail.",
  },
  {
    id: "penal-interest-default",
    tabLabel: "Withheld Penal Interest",
    ticketBand: "Bank Rate + 2% Compounded Delay Dues",
    title: "Insurer Remits Principal After 150 Days But Silently Withholds Statutory Penal Interest",
    failureMechanism:
      "When an insurer finally remits a severely delayed cashless claim settlement (often after 4 to 9 months), the NEFT remittance contains only the trimmed principal amount. The statutory penal interest mandated by IRDAI regulations is systematically withheld, leaving the hospital to absorb substantial working capital interest costs.",
    lawfulProtocol: "Penal Interest Demand Ledger + Banking Rate Enforcement + Batch Recovery Action",
    statutoryHooks:
      "IRDAI Master Circular on Health Insurance (Penal Interest at Bank Rate + 2% above prevailing RBI Bank Rate); Section 34 Code of Civil Procedure; Section 70 Indian Contract Act.",
    executionSteps: [
      {
        step: "Calculate Statutory Penal Interest Slabs per Claim File",
        detail:
          "Compute the exact delay period: Day 31 from the date of final bill/document submission until the actual date of bank credit. Apply the prevailing RBI Bank Rate (e.g., 6.75%) plus 200 bps = 8.75% per annum.",
      },
      {
        step: "Issue Comprehensive Penal Interest Batch Demand Notice",
        detail:
          "Bundle all delayed claims settled over the preceding 12 to 24 months into a consolidated schedule detailing Patient Name, Policy No., Claim ID, Bill Submission Date, Payment Date, Delay Days, and Penal Interest Accrued.",
      },
      {
        step: "File Recovery Claim in Commercial Court or Arbitration",
        detail:
          "Recover penal interest dues as a liquidated debt under the commercial contract, where interest is an explicit statutory right rather than discretionary relief.",
      },
    ],
    recoveryLeverage: "Certain: Statutory interest mandated by regulatory circulars cannot be contracted out or waived through fine-print settlement vouchers.",
  },
];

export default function HospitalTpaScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(TPA_SCENARIOS[0].id);

  const currentScenario =
    TPA_SCENARIOS.find((item) => item.id === activeTab) || TPA_SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-7 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 mb-5 border-b border-slate-200">
        {TPA_SCENARIOS.map((sc) => {
          const isActive = sc.id === activeTab;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200 self-start">
            {currentScenario.ticketBand}
          </span>
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
            Leverage: <span className="text-emerald-700">{currentScenario.recoveryLeverage.split(":")[0]}</span>
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 leading-snug">
          {currentScenario.title}
        </h3>

        {/* Failure Mechanism Box */}
        <div className="p-4 rounded-xl bg-red-50/70 border border-red-100 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <p className="font-bold text-red-900 uppercase tracking-wider text-[11px] mb-1">
            Commercial Failure Mode &amp; TPA Tactics:
          </p>
          <p>{currentScenario.failureMechanism}</p>
        </div>

        {/* Statutory Hook & Legal Basis */}
        <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 text-xs leading-relaxed">
          <span className="text-red-400 font-bold uppercase tracking-wider text-[10px] block mb-1">
            Statutory Hook &amp; Governing Law:
          </span>
          <p>{currentScenario.statutoryHooks}</p>
        </div>

        {/* 3 Step Execution Protocol */}
        <div className="space-y-2.5 pt-2">
          <p className="text-xs font-black uppercase tracking-wider text-slate-700">
            Lawful Escalation &amp; Recovery Workflow:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.executionSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-xs font-bold text-slate-900 leading-tight">
                      {s.step}
                    </p>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome summary bar */}
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-900 font-medium">
          <span>
            <strong>Recovery Protocol:</strong> {currentScenario.lawfulProtocol}
          </span>
          <span className="hidden sm:inline-block font-bold text-emerald-800">
            {currentScenario.recoveryLeverage}
          </span>
        </div>
      </div>
    </div>
  );
}
