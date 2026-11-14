"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PortfolioScenario {
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

const SCENARIOS: PortfolioScenario[] = [
  {
    id: "emandate-bounce",
    tabLabel: "e-NACH / UPI Bounce",
    title: "Recurring e-Mandate or e-NACH Debit Failure on Unsecured Loans",
    cause:
      "Digital retail borrowers frequently cancel auto-debits, empty linked accounts, or close accounts after loan disbursal. Banks and NBFCs often confuse electronic mandate failures with physical cheque bounces and fail to adhere to the strict 30-day statutory notice requirements under payment system laws.",
    legalBasis:
      "Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act) provides that dishonour of an electronic funds management instruction (e-NACH, UPI auto-debit, ECS) due to insufficient funds attracts identical criminal liability as Section 138 of the Negotiable Instruments Act. Offending borrowers face up to 2 years imprisonment, fine up to twice the loan amount, or both.",
    steps: [
      {
        step: "Generate NPCI Return Reason Memo",
        description:
          "Extract authenticated Clearing Settlement Advice from NPCI or sponsor bank showing return reason code (e.g., 'Insufficient Funds' or 'Instruction Stopped by Drawer') with date stamp.",
      },
      {
        step: "Serve Section 25 PSS Act Demand Notice",
        description:
          "Within 30 days of receiving the bounce memo, serve an advocate statutory legal demand notice granting 15 days to repay the unpaid instalment amount.",
      },
      {
        step: "File Criminal Complaint Under Section 25",
        description:
          "If unpaid after 15 days, file a formal complaint before the Judicial Magistrate within 30 days of cause of action.",
      },
    ],
    statutoryRule: "Section 25, Payment and Settlement Systems Act, 2007",
  },
  {
    id: "digital-contract-enforce",
    tabLabel: "Digital / App Loan Default",
    title: "App-Based Borrower Untraceable or Contesting Click-Wrap e-Contract",
    cause:
      "FinTech lenders and digital NBFCs executing paperless loans via mobile applications face defenses from defaulting borrowers claiming loan agreements were never physically executed, terms were obscure, or signatures were fraudulent.",
    legalBasis:
      "Section 10A of the Information Technology Act, 2000 grants full statutory validity and enforceability to contracts formed through electronic records. Read with Section 65B of the Indian Evidence Act / Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), Aadhaar e-Sign, click-wrap acceptance, OTP consent logs, and device IP hashes establish conclusive contract formation.",
    steps: [
      {
        step: "Compile Digital Evidence Certificate",
        description:
          "Generate a Section 63 BSA certificate capturing loan application logs, Aadhaar e-Sign audit trail, IP timestamp, mobile OTP verification, and bank credit UTR.",
      },
      {
        step: "Recall Loan & Dispatch Advocate Notice",
        description:
          "Issue a formal loan recall notice demanding immediate repayment of entire accelerated principal, contractual interest, and overdue penalties.",
      },
      {
        step: "Order 37 CPC Summary Suit or Arbitration",
        description:
          "Initiate summary proceedings under Order 37 CPC or invoke the Digital Arbitration clause for an expeditious ex-parte enforceable award.",
      },
    ],
    statutoryRule: "Section 10A IT Act 2000 & Section 63 BSA 2023",
  },
  {
    id: "summary-suit-cpc",
    tabLabel: "High-Ticket Default (> ₹10L)",
    title: "Personal Loan Default Without Collateral Exceeding Substantial Thresholds",
    cause:
      "Salaried professionals or affluent retail borrowers defaulting on large personal loans (₹5 Lakh to ₹50 Lakh) rely on civil court delays, knowing standard money recovery suits take 5 to 7 years to yield decrees.",
    legalBasis:
      "Order 37 of the Code of Civil Procedure, 1908 (CPC) establishes a rapid summary trial procedure for liquidated debt claims arising from written contracts or promissory notes. Unlike regular suits, the defendant borrower has no automatic right to defend and must obtain 'leave to defend' by depositing security or demonstrating a bona fide triable issue.",
    steps: [
      {
        step: "Calculate Liquidated Principal & Interest",
        description:
          "Prepare a clean certified statement of accounts under the Bankers' Books Evidence Act proving exact liquidated outstanding amount.",
      },
      {
        step: "Issue Final Pre-Litigation Advocate Notice",
        description:
          "Serve a 15-day statutory demand detailing intention to initiate summary civil trial and reporting to credit bureaus (CIBIL/Experian).",
      },
      {
        step: "File Order 37 Summary Suit",
        description:
          "File the plaint in the competent Civil Court or Commercial Court. If borrower fails to appear within 10 days of summons, a decree is passed forthwith.",
      },
    ],
    statutoryRule: "Order 37, Code of Civil Procedure, 1908 (Summary Procedure)",
  },
  {
    id: "digital-arbitration",
    tabLabel: "Digital Fast-Track Arbitration",
    title: "Institutional Recovery via Online Dispute Resolution (ODR) & Fast-Track Arbitration",
    cause:
      "Managing tens of thousands of sub-₹2 Lakh unsecured loan non-performing assets (NPAs) through individual court trials is financially unviable and operationally sluggish for scaling FinTechs and NBFCs.",
    legalBasis:
      "The Arbitration and Conciliation Act, 1996, specifically Section 29B (Fast-Track Procedure), empowers lenders to resolve debt disputes through designated sole arbitrators using documentary hearings without oral arguments. Arbitral awards carry the exact legal status of a Civil Court decree under Section 36 and can be executed against debtor bank accounts and salary attachments.",
    steps: [
      {
        step: "Verify Valid Arbitration Clause",
        description:
          "Ensure digital loan agreement contains a valid arbitration agreement providing for fast-track paper-based or virtual proceedings.",
      },
      {
        step: "Issue Section 21 Arbitration Trigger Notice",
        description:
          "Serve formal notice invoking arbitration and nominating the sole arbitrator or referring the matter to an institutional ODR center.",
      },
      {
        step: "Obtain Award & File Section 36 Execution",
        description:
          "Obtain arbitral award within 60 to 90 days, followed by Section 36 execution petition before the District Court for salary and asset attachment.",
      },
    ],
    statutoryRule: "Sections 21, 29B & 36, Arbitration and Conciliation Act, 1996",
  },
  {
    id: "wilful-defaulter",
    tabLabel: "Wilful Defaulter & Fraud",
    title: "Borrowers Diverting Funds, Misrepresenting Income, or Multi-Lending Fraud",
    cause:
      "Borrowers taking multiple unsecured digital loans simultaneously across several apps through manufactured salary slips or immediate fund diversion to avoid repayment.",
    legalBasis:
      "Under RBI Master Direction on Wilful Defaulters (as amended) and Bharatiya Nyaya Sanhita, 2023 (BNS Section 318 - Cheating, Section 316 - Criminal Breach of Trust, Section 336 - Forgery), submitting forged salary slips or bank statements to induce loan disbursement constitutes a cognizable criminal offense.",
    steps: [
      {
        step: "Audit Financial Discrepancies & Falsehoods",
        description:
          "Identify falsified employer credentials, doctored PDF bank statements, or fraudulent income declarations used during loan onboarding.",
      },
      {
        step: "Statutory Advocate Criminal Demand Notice",
        description:
          "Issue legal notice putting borrower on formal notice of impending criminal complaint under Sections 316 & 318 BNS alongside civil recovery.",
      },
      {
        step: "Lodge Police Complaint & Wilful Default Tag",
        description:
          "Submit formal criminal complaint to the Economic Offences Wing (EOW) / Cyber Crime police station and report to CIBIL / RBI as wilful defaulter.",
      },
    ],
    statutoryRule: "Sections 316 & 318 BNS 2023 & RBI Wilful Defaulter Master Directions",
  },
];

export default function UnsecuredLoansProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const selectedScenario = SCENARIOS.find((p) => p.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Institutional Portfolio Navigator
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Unsecured Default Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Explore the exact legal framework, statutory benchmarks, and 3-step procedural enforcement for your institution&apos;s delinquent portfolio:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Unsecured Default Recovery Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              role="tab"
              id={`tab-${scenario.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${scenario.id}`}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
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
        id={`panel-${selectedScenario.id}`}
        aria-labelledby={`tab-${selectedScenario.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedScenario.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedScenario.statutoryRule}
          </span>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Operational Vulnerability &amp; Risk
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedScenario.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Basis &amp; Enforcement Teeth
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedScenario.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Institutional Legal Action Plan
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedScenario.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Institutional Action Link */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Managing bulk unsecured non-performing loans?</strong> We automate advocate demand notices, Section 25 PSS filing pipelines, and arbitration triggers.
          </span>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Review Bulk Recovery Solutions →
          </Link>
        </div>
      </div>
    </div>
  );
}
