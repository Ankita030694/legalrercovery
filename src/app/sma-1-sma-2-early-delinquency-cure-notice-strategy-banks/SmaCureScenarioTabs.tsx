"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  dpdWindow: string;
  failureMode: string;
  statutoryTrigger: string;
  steps: {
    step: string;
    description: string;
  }[];
  complianceGuardrail: string;
  recommendedAction: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "retail-partial-pay",
    tabLabel: "Retail PL & Partial Pay",
    title: "Salaried Personal Loan / Auto Loan Stuck at 62–82 DPD (Partial Payment Trap)",
    dpdWindow: "SMA-2 (61–90 DPD) · Unsecured Personal Loan or Hypothecated Auto Loan",
    failureMode:
      "Borrower ignores 40+ telecalling attempts and pays a token ₹5,000 against two overdue EMIs of ₹28,000, believing a small payment 'resets' the 90-day clock. Under RBI's November 12, 2021 IRACP clarification, FIFO appropriation leaves the oldest EMI unpaid—pushing the account straight to NPA at Day-End on Day 90.",
    statutoryTrigger:
      "RBI Prudential Framework (Nov 12, 2021 IRACP Circular): Once an account crosses 90 DPD and is stamped NPA at day-end, partial payments cannot upgrade it to Standard. Upgradation requires 100% clearance of all overdue principal and interest arrears.",
    steps: [
      {
        step: "Day-62 Advocate Cure Notice with Exact Arrears Ledger",
        description:
          "Dispatch a fact-verified Soft Legal Cure Notice via Email, WhatsApp, and Speed Post RPAD explicitly warning that partial payments will not halt Day-90 NPA stamping or CICRA bureau reporting.",
      },
      {
        step: "Parallel e-NACH Dishonour Intimation (PSS Act s.25)",
        description:
          "Cite the NPCI e-NACH return reference in the Day-62 cure notice, putting the borrower on formal statutory notice that failure to clear full arrears by Day 77 triggers criminal proceedings under Section 25 of the Payment and Settlement Systems Act, 2007.",
      },
      {
        step: "Pre-NPA Full Regularization or Lok Adalat Pre-Batch",
        description:
          "Provide a 1-click UPI/BBPS payment link for exact 100% overdue EMI clearance before Day 85, or route unresolved Day-85 accounts directly into pre-litigation Lok Adalat and institutional arbitration queues.",
      },
    ],
    complianceGuardrail:
      "RBI Fair Practices Code & Penal Charges Directions (Aug 2023): Disclose penal charges separately from interest; zero capitalization of penal charges.",
    recommendedAction: "Day-62 Advocate Cure Notice + Exact FIFO Overdue Breakup + 15-Day Cure Window",
  },
  {
    id: "secured-hl-lap",
    tabLabel: "Home Loan & LAP",
    title: "Secured Home Loan / LAP Approaching Day-90 NPA Cliff (Pre-SARFAESI Cure)",
    dpdWindow: "SMA-1 (31–60 DPD) to SMA-2 (61–90 DPD) · Mortgaged Residential/Commercial Property",
    failureMode:
      "Secured borrowers often assume banks cannot act until SARFAESI Section 13(2) is issued post-NPA, delaying payment for months. Meanwhile, once the account slips to NPA on Day 91, the bank suffers an immediate 15% Sub-Standard provisioning hit and must wait an additional 60 days under Section 13(2) before taking symbolic possession.",
    statutoryTrigger:
      "SARFAESI Act, 2002 s.13(2) & RBI IRACP Norms: SARFAESI enforcement is statutorily barred until the account is classified as NPA. Therefore, arresting slippage between Day 61 and Day 85 is the only way to avoid both provisioning lock-up and the 60-day statutory wait.",
    steps: [
      {
        step: "Day-62 Pre-SARFAESI Consequence Intimation",
        description:
          "Serve a fact-verified Cure Notice to the primary borrower and co-applicant/guarantor explaining that Day-90 NPA classification immediately triggers statutory SARFAESI Section 13(2) demand proceedings and CERSAI enforcement.",
      },
      {
        step: "Co-Borrower & Guarantor Parallel Service",
        description:
          "Serve the notice simultaneously on co-owners and personal guarantors via Speed Post RPAD and verified email, unlocking intra-family liquidity before the 90-day day-end batch run.",
      },
      {
        step: "Day-85 Pre-Drafted s.13(2) Readiness",
        description:
          "If uncured by Day 85, the verified BSA 2023 s.63 delivery record and itemized principal-interest schedule seamlessly feed into the Day-91 SARFAESI Section 13(2) Authorized Officer dossier.",
      },
    ],
    complianceGuardrail:
      "Avoid premature SARFAESI s.13(2) threats during SMA-1/SMA-2; frame accurately as mandatory statutory consequence upon Day-90 NPA classification.",
    recommendedAction: "Day-62 Joint Borrower + Co-Applicant Advocate Cure Notice (Pre-SARFAESI Rail)",
  },
  {
    id: "sme-cc-od",
    tabLabel: "SME Cash Credit / OD",
    title: "MSME Cash Credit / Overdraft 'Out of Order' Cure (61–85 Days)",
    dpdWindow: "SMA-2 Equivalent (61–90 Days Continuous Excess / Insufficient Credits)",
    failureMode:
      "SME promoters mistake active business turnover for account health even when the CC/OD limit remains continuously overdrawn or 90-day credits fail to cover debited interest. Under RBI IRACP norms, 'Out of Order' status triggers automatic NPA classification at day-end regardless of collateral cover.",
    statutoryTrigger:
      "RBI Master Circular on IRACP ('Out of Order' Definition): A CC/OD account becomes NPA if the outstanding balance remains continuously in excess of the sanctioned limit/DP for 90 days, or if credits in the previous 90 days are insufficient to cover interest debited during the same period.",
    steps: [
      {
        step: "Day-62 Drawing Power & Interest Shortfall Notice",
        description:
          "Issue a formal Fact-Verified Cure Notice specifying the exact interest-coverage shortfall and missing stock statement / Drawing Power (DP) deficit required to restore Standard status.",
      },
      {
        step: "Sales-Routing & Non-Consortium Warning",
        description:
          "Remind the borrower of loan covenants prohibiting diversion of receivables to non-lending current accounts and the consequences of RBI SMA-2 CRILC reporting (for ₹5 Cr+ exposures).",
      },
      {
        step: "Guarantor & Promoters' Personal Liability Flag",
        description:
          "Put corporate directors and personal guarantors on notice under Section 128 of the Indian Contract Act, 1872 prior to Day-90 NPA stamping.",
      },
    ],
    complianceGuardrail:
      "Aligns with RBI CRILC weekly/monthly SMA-2 reporting discipline and Fair Lending Directions.",
    recommendedAction: "Day-62 CC/OD Interest-Shortfall & DP Regularization Advocate Notice",
  },
  {
    id: "sfb-coop-colending",
    tabLabel: "SFB / Co-op / Co-Lending",
    title: "Small Finance Bank, Cooperative & Co-Lending Portfolio Bulk Cure (1,000+ Accounts)",
    dpdWindow: "SMA-1 (Day 45) & SMA-2 (Day 62) High-Volume Granular Cohorts",
    failureMode:
      "Small Finance Banks (SFBs), Urban Cooperative Banks (UCBs), and bank-NBFC co-lending desks run lean branch legal teams. Telecalling conversion drops below 8% after Day 60, while manual branch notices take 14–21 days to print and post—arriving after the account has already slipped to NPA on Day 90.",
    statutoryTrigger:
      "RBI Master Direction on Co-Lending & Daily Day-End NPA Stamping: Both co-lending partners face synchronous NPA asset classification in core banking systems; delayed notice dispatch guarantees joint provisioning drag.",
    steps: [
      {
        step: "Automated CBS SFTP / CSV Ingestion at Day 61",
        description:
          "Ingest daily CBS SMA-2 cohort exports (loan ID, overdue principal, interest, penal charge, mobile, email, address) via encrypted CSV or API.",
      },
      {
        step: "Day-62 Vernacular Multi-Channel Dispatch",
        description:
          "Generate fact-verified notices in English + regional vernacular languages and dispatch within 24 hours via Email, verified WhatsApp Business, and India Post Speed Post RPAD.",
      },
      {
        step: "Centralized Reply Triage & Dispute Tagging",
        description:
          "Route borrower hardship requests, restructuring queries, or payment promises into a unified legal dashboard, escalating non-responders cleanly at Day 85.",
      },
    ],
    complianceGuardrail:
      "Zero external recovery-agent intimidation; 100% compliant with RBI Recovery Agent Directions (Aug 2022) and BSA 2023 s.63 electronic logs.",
    recommendedAction: "Automated Day-62 Bulk CSV Advocate Cure Notice Pipeline (10–10,000+ Cases)",
  },
];

export default function SmaCureScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="SMA-2 Slippage Scenarios"
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
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="border-b border-slate-200 pb-4">
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-slate-900 text-red-400 mb-2">
            {activeScenario.dpdWindow}
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Institutional Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.failureMode}
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              RBI IRACP &amp; Statutory Trigger
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {activeScenario.statutoryTrigger}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            3-Step Day-62 Cure Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((s, idx) => (
              <div
                key={s.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {s.step}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-200 text-xs">
          <div className="text-slate-600">
            <strong className="text-slate-900">Compliance Guardrail:</strong>{" "}
            {activeScenario.complianceGuardrail}
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold shrink-0">
            {activeScenario.recommendedAction}
          </div>
        </div>
      </div>
    </div>
  );
}
