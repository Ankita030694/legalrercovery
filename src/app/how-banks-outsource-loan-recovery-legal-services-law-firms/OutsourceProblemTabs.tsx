"use client";

import React, { useState } from "react";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "rbi-outsourcing-master-directions",
    tabLabel: "RBI Master Directions",
    title: "Compliance with RBI Master Directions on Outsourcing of Financial Services (2023)",
    cause:
      "When commercial banks and NBFCs scale default recovery operations, legal procurement heads frequently confront regulatory ambiguity regarding what functions can be delegated. Under Reserve Bank of India (RBI) guidelines, regulated entities are strictly prohibited from outsourcing 'core management functions' such as loan underwriting, credit sanctioning, or classification of non-performing assets (NPAs). However, debt recovery litigation, statutory notice dispatch, Section 138 NI Act prosecution, SARFAESI filings, and arbitration representations can be legitimately outsourced to qualified law firms provided a robust Board-approved outsourcing policy and contractual risk mitigation mechanisms are implemented.",
    legalBasis:
      "Reserve Bank of India Master Direction – Outsourcing of Financial Services (updated 2023) and RBI Guidelines on Fair Practices Code. The directions mandate that outsourcing does not diminish the bank's obligations to customers or regulatory supervisors. The Master Service Agreement (MSA) must explicitly preserve the bank's right to audit, maintain confidential borrower financial data, prevent arbitrary harassment, and ensure complete compliance with Bar Council of India standards.",
    steps: [
      {
        step: "Board-Approved Legal Outsourcing Policy & Risk Assessment",
        description:
          "Establish an institutional framework defining permissible outsourced litigation scopes, pre-approved fee schedules, and counterparty concentration limits before executing external vendor mandates.",
      },
      {
        step: "Comprehensive Master Service Agreement (MSA) Execution",
        description:
          "Incorporate statutory clauses granting the bank, statutory auditors, and the Reserve Bank of India unhindered inspection and audit rights over external case management systems and litigation files.",
      },
      {
        step: "Direct Advocate Supervision & Code of Conduct Adherence",
        description:
          "Mandate that all external communications adhere to professional ethics under the Advocates Act, 1961, strictly distinguishing formal judicial notices from unauthorized third-party collection agents.",
      },
    ],
    statutoryRule: "RBI Master Directions 2023 & Section 35A Banking Regulation Act, 1949",
  },
  {
    id: "sla-kpi-turnaround",
    tabLabel: "SLA & TAT Governance",
    title: "Structuring Enforceable SLAs for High-Volume Statutory Legal Notices",
    cause:
      "Banks managing portfolios of unsecured personal loans, credit cards, or MSME credit facilities face systemic recovery leakage when external panel firms fail to serve legal notices within statutory limitation windows. A delayed Section 138 notice (beyond 30 days of memo receipt) permanently forfeits criminal remedy, while sluggish DRT or civil filings allow delinquent borrowers to encumber unpledged assets or file frivolous preemptive injunctions.",
    legalBasis:
      "Statutory limitation mandates under Section 138(b) of the Negotiable Instruments Act, 1881 (30 days from cheque bounce memo), Section 25 of the Payment and Settlement Systems Act, 2007 (NACH bounce notice), Section 13(2) of the SARFAESI Act, 2002 (60-day demand window), and the Limitation Act, 1963. Missing these statutory gates destroys the enforceability of institutional claims.",
    steps: [
      {
        step: "Automated 24-48 Hour Notice Generation API Integration",
        description:
          "Integrate banking loan management systems (LMS) with the law firm's legal tech platform to ingest bounce files via secure SFTP/API and auto-draft verified advocate demand notices within 48 hours.",
      },
      {
        step: "Dual-Rail Service Tracking (Speed Post + Section 63 BSA Digital)",
        description:
          "Require the outsourced legal partner to deliver notices simultaneously via Registered Speed Post (with automated India Post tracking APIs) and electronic channels (email and WhatsApp) backed by Bharatiya Sakshya Adhiniyam, 2023 (BSA) Section 63 certificates.",
      },
      {
        step: "Financial Penalty Matrix for Unexcused Limitation Breaches",
        description:
          "Incorporate contractual clawbacks, reduction in retainer payouts, or mandatory panel de-empanelment if an outsourced law firm misses a statutory limitation or filing cutoff without documented cause.",
      },
    ],
    statutoryRule: "Section 138(b) NI Act 1881, Section 25 PSS Act 2007 & Section 63 BSA 2023",
  },
  {
    id: "data-privacy-iso27001",
    tabLabel: "DPDP & Data Security",
    title: "Borrower Data Privacy, ISO 27001 & Digital Personal Data Protection Compliance",
    cause:
      "Transmitting unencrypted borrower loan statements, PAN, Aadhaar numbers, CIBIL credit scores, and guarantor details to external law firms creates immense regulatory exposure under the Digital Personal Data Protection Act, 2023 (DPDP Act) and RBI Cyber Security Frameworks. If an outsourced law firm stores borrower records in insecure cloud buckets or permits sub-contracting without consent, the bank faces statutory penalties of up to ₹250 Crore under DPDP provisions.",
    legalBasis:
      "Digital Personal Data Protection Act, 2023 (Sections 8 and 9 - Obligations of Data Fiduciaries and Data Processors), Information Technology (Reasonable Security Practices) Rules, 2011, and ISO/IEC 27001:2022 information security standards for legal processing vendors.",
    steps: [
      {
        step: "Restricted Role-Based Access & Data Minimization",
        description:
          "Provide external law firms with data masking and strictly minimized borrower dossiers (omitting sensitive non-essential identifiers) solely necessary to draft and file statutory actions.",
      },
      {
        step: "Mandatory ISO 27001 & SOC 2 Type II Vendor Certifications",
        description:
          "Incorporate mandatory technical benchmarks in the RFP: law firms must host data in MeitY-empaneled Indian data centers with AES-256 encryption at rest and TLS 1.3 in transit.",
      },
      {
        step: "Periodic Third-Party VAPT & Independent Security Audits",
        description:
          "Exercise the bank's contractual audit prerogative to conduct unannounced Vulnerability Assessment and Penetration Testing (VAPT) and data destruction verification upon case closure.",
      },
    ],
    statutoryRule: "DPDP Act 2023, IT Act 2000 Section 43A & ISO/IEC 27001 Standards",
  },
  {
    id: "fee-structures-bci-rule-20",
    tabLabel: "BCI Rule 20 & Fee Models",
    title: "Structuring Commercial Legal Retainers in Compliance with Bar Council Rules",
    cause:
      "Procurement departments in banking institutions often attempt to structure recovery contracts on pure contingency fee models (e.g., paying a flat percentage of realized loan amounts). In India, this is strictly prohibited by Bar Council of India rules. Structuring an illegal contingency fee contract exposes both the bank and the empanelled advocates to disciplinary action, contract voidance under Section 23 of the Indian Contract Act, 1872, and reputational backlash.",
    legalBasis:
      "Bar Council of India Rules (Part VI, Chapter II, Section II, Rule 20) explicitly stipulates: 'An advocate shall not stipulate for a fee contingent on the results of litigation or agree to share the proceeds thereof'. Commercial agreements must therefore be structured around milestone-based legal professional fees, hourly rates, or tiered fixed fees per procedural stage (notice dispatch, appearance, filing, decree execution).",
    steps: [
      {
        step: "Tiered Fixed-Fee Per Procedural Phase",
        description:
          "Structure the commercial model with transparent fixed rates: Stage 1 (Notice Drafting & Dispatch), Stage 2 (Pre-Litigation Mediation & Reply Handling), Stage 3 (Filing of Section 138/Arbitration/Section 14 Application), and Stage 4 (Court Appearances & Execution).",
      },
      {
        step: "Transparent Disbursement Reconciliation",
        description:
          "Separate professional legal drafting fees from actual court fees, process server costs, and Speed Post postal charges with monthly audited voucher reconciliations.",
      },
      {
        step: "Volume-Based Retainer Tiering Without Contingency Links",
        description:
          "Negotiate tiered cost-efficiency based on bulk batch volume allocations (e.g., 1,000 to 50,000 accounts per month) while fully honoring professional Bar Council remuneration ethics.",
      },
    ],
    statutoryRule: "Rule 20 BCI Rules, Section 23 Indian Contract Act 1872 & Advocates Act 1961",
  },
];

export default function OutsourceProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);

  const activeProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Scrollable Tab Header Bar */}
      <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-none">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="p-5 sm:p-7 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
            {activeProblem.title}
          </h3>
          <span className="text-[11px] font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full border border-red-200">
            {activeProblem.statutoryRule}
          </span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div>
            <strong className="text-slate-900 block mb-1 font-bold">
              The Procurement &amp; Operational Challenge:
            </strong>
            <p className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              {activeProblem.cause}
            </p>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1 font-bold">
              Statutory Basis &amp; Compliance Requirement:
            </strong>
            <p className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-blue-950">
              {activeProblem.legalBasis}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-3 uppercase tracking-wider">
            Mandatory Institutional Action Steps for General Counsels:
          </strong>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                    {s.step}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
