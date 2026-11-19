"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  debtRange: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
  forumRecommendation: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "personal-loan-credit-card",
    tabLabel: "Unsecured Personal / CC",
    title: "Unsecured Personal Loan & Credit Card Default (₹1.5 Lakhs – ₹8 Lakhs)",
    debtRange: "₹1,50,000 to ₹8,00,000 (No Real Estate Collateral, Failed e-NACH Mandates)",
    cause:
      "Salaried or self-employed borrower stops servicing monthly EMIs after 90+ DPD. Mobile numbers are switched off, residence shifted, and automated e-NACH/ECS debits return unpaid with 'Insufficient Balance' or 'Mandate Stopped by Customer'. Branch recovery officers face zero physical collateral to attach.",
    legalBasis:
      "Because the facility is unsecured, SARFAESI Act, 2002 cannot be invoked (s.31(g)). Because the total claim is under ₹20 Lakhs, DRT Section 19 Original Applications are statutorily barred under RDB Act Section 1(4). Banks must leverage the dual-track pressure of criminal prosecution under Section 25 PSS Act (or Section 138 NI Act) coupled with institutional fast-track arbitration under Section 29B of the Arbitration and Conciliation Act, 1996 to obtain an executable civil decree within 120 days.",
    steps: [
      {
        step: "Dual Statutory Demand Notice Dispatch",
        description:
          "Serve a combined statutory recall & Section 25 PSS Act / Section 138 NI Act demand notice within 30 days of e-NACH/cheque return memo via Speed Post RPAD, email, and WhatsApp, granting 15 days cure period.",
      },
      {
        step: "Institutional Sole Arbitrator Appointment",
        description:
          "Upon expiry of 15 days without payment, invoke arbitration under Section 21 referencing the loan sanction covenant, nominating a neutral arbitrator via an independent institutional arbitration roster (strictly Perkins Eastman compliant).",
      },
      {
        step: "Ex-Parte Award & Order XXI Execution",
        description:
          "If the debtor evades arbitral summons, obtain an ex-parte award under Section 25(b) within 90–120 days. Execute the award as a civil court decree under CPC Order XXI Rule 48 (employer salary deduction) and Rule 46 (garnishee freeze on secondary savings accounts).",
      },
    ],
    statutoryRule: "PSS Act 2007 s.25, Arbitration Act 1996 ss.21 & 29B, CPC Order XXI Rules 46 & 48",
    forumRecommendation: "Primary: PSS Act s.25 Criminal Notice + Institutional Fast-Track Arbitration (or Lok Adalat for sub-₹3L)",
  },
  {
    id: "vehicle-asset-hypothecation",
    tabLabel: "Missing Auto / Vehicle",
    title: "Vehicle Loan Default with Concealed / Untraceable Hypothecated Asset (₹4 Lakhs – ₹16 Lakhs)",
    debtRange: "₹4,00,000 to ₹16,00,000 (Hypothecated Commercial Vehicle, Car or Tractor)",
    cause:
      "Borrower defaults after 60 DPD, removes GPS tracker, and relocates or sells the hypothecated vehicle to an unorganized scrap broker or rural operator without bank NOC, frustrating repo agents and preventing SARFAESI Section 13(4) physical seizure.",
    legalBasis:
      "Hypothecation creates a statutory charge under Section 2(1)(n) of SARFAESI Act and Indian Contract Act Section 172. The unauthorized sale or concealment of hypothecated security constitutes Criminal Breach of Trust under Bharatiya Nyaya Sanhita, 2023 (BNS Section 316 / IPC 406). Furthermore, where the debt exceeds ₹3 Lakhs, it constitutes a 'Commercial Dispute' under Section 2(1)(c)(i) of the Commercial Courts Act, 2015, entitling the bank to seek urgent ex-parte court receiver orders under CPC Order XL Rule 1 bypassing Section 12A mediation.",
    steps: [
      {
        step: "Asset Recall Demand & RTO Encumbrance Intimation",
        description:
          "Dispatch 7-day Asset Surrender Notice to borrower and intimate concerned RTO and State Transport Department to block fitness certificate renewal and ownership transfer.",
      },
      {
        step: "Urgent Commercial Court Receiver Application",
        description:
          "File Commercial Summary Suit under Order XXXVII CPC or Section 9 Arbitration petition with an ex-parte application for appointment of Court Receiver with police assistance to seize and impound the vehicle anywhere in India.",
      },
      {
        step: "Criminal Complaint for Hypothecation Breach",
        description:
          "Lodge formal complaint under BNS Section 316 (Criminal Breach of Trust) before the jurisdictional Magistrate, creating severe personal deterrence against disposing of the vehicle.",
      },
    ],
    statutoryRule: "Commercial Courts Act 2015 s.2(1)(c)(i), CPC Order XL Rule 1, BNS 2023 s.316, SARFAESI s.13(4)",
    forumRecommendation: "Commercial Court Summary Suit with Ex-Parte Court Receiver / Arbitration Section 9 Receiver",
  },
  {
    id: "mudra-small-business",
    tabLabel: "Mudra & Micro-Enterprise",
    title: "Mudra (Shishu / Kishor / Tarun) & Micro-Enterprise NPA (₹50,000 – ₹10 Lakhs)",
    debtRange: "₹50,000 to ₹10,00,000 (Mudra / CGTMSE / CGFMU Covered Small Business Loans)",
    cause:
      "Micro-entrepreneur, retail shopkeeper, or artisan defaults due to business closure. Borrowers falsely claim that Mudra loans are 'government grants' that need not be repaid, or demand automatic write-off without executing bank documents.",
    legalBasis:
      "Mudra loans are legally binding bank credit facilities governed by Master Circulars of the Reserve Bank of India. While covered by Credit Guarantee Fund for Micro Units (CGFMU) or CGTMSE, banks cannot claim the credit guarantee payout without demonstrating active pre-litigation recovery efforts. Pre-Litigation Lok Adalat under Section 20(2) of the Legal Services Authorities Act, 1987 provides 100% court fee exemption and produces an unappealable settlement decree under Section 21.",
    steps: [
      {
        step: "Pre-Litigation Lok Adalat Notice Batching",
        description:
          "Batch 50 to 500 Mudra default accounts and file Pre-Litigation Applications before the District Legal Services Authority (DLSA) ahead of the National Lok Adalat calendar.",
      },
      {
        step: "One-Time Settlement (OTS) Negotiation",
        description:
          "Bench composed of a sitting or retired judicial officer and social mediator executes a Consent Award establishing structured monthly repayment or lump-sum OTS waiver of penal interest.",
      },
      {
        step: "Section 21 Execution / CGFMU Guarantee Invocation",
        description:
          "If the debtor breaches the Lok Adalat settlement, execute the award directly as a civil court decree. Alternatively, present the certified Lok Adalat failure record to claim CGFMU guarantee settlement.",
      },
    ],
    statutoryRule: "Legal Services Authorities Act 1987 ss.19, 20 & 21, RBI Master Directions on Micro Lending",
    forumRecommendation: "Pre-Litigation National Lok Adalat (Zero Court Fee · Instant Decree · DLSA Backed)",
  },
  {
    id: "co-obligors-guarantors",
    tabLabel: "SME Loan with Guarantors",
    title: "SME Term Loan / OD Limit with Personal Guarantors (₹10 Lakhs – ₹19.99 Lakhs)",
    debtRange: "₹10,00,000 to ₹19,99,999 (SME Cash Credit / Overdraft with Directors / Guarantors)",
    cause:
      "Partnership firm or private enterprise defaults on working capital facility just under the ₹20 Lakh DRT threshold. The borrowing company claims balance sheet insolvency, but personal directors or third-party guarantors possess substantial unencumbered urban residential or commercial real estate.",
    legalBasis:
      "Under Section 128 of the Indian Contract Act, 1872, the liability of the surety/guarantor is co-extensive with that of the principal debtor. The bank is not obligated to exhaust remedies against the borrowing company before proceeding directly against the personal guarantors (*State Bank of India v. Indexport*). Furthermore, claims above ₹3 Lakhs qualify as 'Commercial Disputes' under Section 2(1)(c)(i) of the Commercial Courts Act, 2015.",
    steps: [
      {
        step: "Simultaneous Demand Notice on Borrower & Guarantors",
        description:
          "Issue formal loan recall notices invoking personal guarantees under Section 128 Contract Act, demanding immediate payment within 15 days from all obligors jointly and severally.",
      },
      {
        step: "Commercial Court Summary Suit (Order XXXVII CPC)",
        description:
          "File Order XXXVII Summary Suit in the Commercial Court. Under Rule 3(5), move for conditional leave requiring the guarantors to deposit 100% of the admitted debt in court as a pre-condition to defend.",
      },
      {
        step: "Order XXXVIII Rule 5 Asset Attachment Before Judgment",
        description:
          "Accompany the suit with an application for attachment before judgment of the personal real estate properties belonging to the guarantors to prevent fraudulent alienation or gift deed creation.",
      },
    ],
    statutoryRule: "Indian Contract Act 1872 s.128, CPC Order XXXVII Rule 3 & Order XXXVIII Rule 5, Commercial Courts Act 2015",
    forumRecommendation: "Commercial Court Summary Suit (Order XXXVII) + Pre-Judgment Attachment (Order XXXVIII Rule 5)",
  },
];

export default function Sub20LakhScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 mb-2">
          <span>Institutional Escalation Blueprint</span>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          Select Your Retail NPA Category & Ticket Size
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Explore step-by-step statutory recovery SOPs engineered specifically for debts beneath the ₹20,00,000 DRT threshold.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 mb-6 border-b border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm shadow-red-900/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Content Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-6">
        {/* Title & Range */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-100">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentScenario.title}
            </h4>
            <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md mt-1">
              Ticket Range: {currentScenario.debtRange}
            </span>
          </div>
          <div className="sm:text-right shrink-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
              Recommended Forum
            </span>
            <span className="text-xs font-bold text-red-600">
              {currentScenario.forumRecommendation}
            </span>
          </div>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block mb-1">
              Commercial Obstacle / Debtor Strategy
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.cause}
            </p>
          </div>
          <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-red-600 block mb-1">
              Statutory Leverage & Legal Grounds
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.legalBasis}
            </p>
          </div>
        </div>

        {/* Operational 3-Step SOP */}
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-slate-900 block mb-3">
            Bank Recovery Officer 3-Stage SOP
          </span>
          <div className="space-y-3">
            {currentScenario.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                    {st.step}
                  </h5>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Hook Footer */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-700">Governing Statutes:</span>{" "}
            <span className="font-mono text-[11px] text-slate-600">{currentScenario.statutoryRule}</span>
          </div>
          <a
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-1"
          >
            Deploy this SOP across retail portfolio &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
