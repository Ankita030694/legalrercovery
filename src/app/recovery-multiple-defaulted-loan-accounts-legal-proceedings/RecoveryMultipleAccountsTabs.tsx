"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LoanSegment {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  statutoryBasis: string;
  operationalBottleneck: string;
  centralizedSolution: string;
  recommendedForum: string;
  typicalSettlementRate: string;
  actionGuideLink: string;
  actionGuideText: string;
}

const LOAN_SEGMENTS: LoanSegment[] = [
  {
    id: "unsecured-personal",
    tabLabel: "Retail Personal Loans",
    badge: "Ticket: ₹50K to ₹10 Lakhs",
    title: "Batch Recovery for Unsecured Retail Personal Loans",
    statutoryBasis: "Section 25 of the Payment and Settlement Systems Act, 2007 & Section 19 of Legal Services Authorities Act, 1987",
    operationalBottleneck:
      "Thousands of individual borrower defaults with skipped EMIs, bounced e-mandates, and disconnected phone numbers. Engaging individual advocates across multiple municipal courts produces cost overruns exceeding 30% of the loan value.",
    centralizedSolution:
      "Automate e-NACH dishonour extraction into standardized Section 25 statutory notices served via WhatsApp, Email, and Registered Post. Group 500+ accounts per cluster for bulk National Lok Adalat pre-litigation referral, securing consent decrees with zero court fees.",
    recommendedForum: "National Lok Adalat / Judicial Magistrate (Special NI/PSS Court)",
    typicalSettlementRate: "55% – 72% at Pre-Litigation Stage",
    actionGuideLink: "/recover-small-ticket-personal-loans-legally-banks",
    actionGuideText: "Small-Ticket Retail Loan Recovery Protocol →",
  },
  {
    id: "fintech-micro",
    tabLabel: "FinTech & Digital Micro-Loans",
    badge: "Ticket: ₹5K to ₹50K (High Velocity)",
    title: "High-Volume Recovery for Digital App & BNPL Micro-Loans",
    statutoryBasis: "Section 63 of Bharatiya Sakshya Adhiniyam, 2023 & Institutional Online Dispute Resolution (ODR)",
    operationalBottleneck:
      "Filing individual civil suits for loans under ₹50,000 is commercially non-viable due to minimum filing fees and advocate court appearance expenses. Debtors ignore collection call centers without legal consequences.",
    centralizedSolution:
      "Deploy certified algorithmic Section 63 BSA electronic notice dispatches, followed by batch referral to institutional Online Dispute Resolution (ODR) platforms for fast-track summary conciliation or single-sitting virtual Lok Adalat benches.",
    recommendedForum: "ODR Institutional Conciliation / Digital Lok Adalat",
    typicalSettlementRate: "42% – 60% within 45 Days",
    actionGuideLink: "/legal-recovery-unsecured-loans-guide-banks-nbfcs",
    actionGuideText: "Unsecured Digital Credit Legal Framework →",
  },
  {
    id: "revolving-credit",
    tabLabel: "Credit Card & Overdraft Dues",
    badge: "Ticket: ₹25K to ₹15 Lakhs",
    title: "Consolidated Action Against Long-Pending Credit Card Defaulters",
    statutoryBasis: "Order 37, Code of Civil Procedure, 1908 & Section 18 of Limitation Act, 1963",
    operationalBottleneck:
      "Cardholders exploit the 3-year limitation window by disputing interest calculations or alleging harassment. Fragmented collections lead to time-barred debts written off at steep portfolio discounts.",
    centralizedSolution:
      "Issue centralized statutory advocate demand notices with itemized monthly account statements. Capture balance acknowledgment via transaction auth logs or partial EMI payments to reset the Section 18 limitation period, followed by grouped summary suits under Order 37 CPC.",
    recommendedForum: "Commercial Court (Summary Suit) / Pre-Litigation Conciliation",
    typicalSettlementRate: "48% – 68% Recovery Realisation",
    actionGuideLink: "/bulk-legal-notice-services-credit-card-recovery",
    actionGuideText: "Credit Card Bulk Recovery Solutions →",
  },
  {
    id: "commercial-sme",
    tabLabel: "SME & Commercial Loans",
    badge: "Ticket: ₹10 Lakhs to ₹50 Lakhs+",
    title: "Batch Enforcement for SME & Working Capital Default Accounts",
    statutoryBasis: "Section 138 of Negotiable Instruments Act, 1881 & Section 17 of SARFAESI Act, 2002",
    operationalBottleneck:
      "Business borrowers siphon operating funds into secondary shell accounts, dispute hypothecation schedules, and leverage local political or administrative connections to delay individual recovery actions.",
    centralizedSolution:
      "Coordinate multi-track legal strikes: simultaneous Section 138 NI Act criminal complaints against signatory directors, personal guarantor demand notices, and batch SARFAESI Section 13(2) statutory demand notices under unified counsel retainership.",
    recommendedForum: "Chief Metropolitan Magistrate (SARFAESI) / Special Negotiable Instruments Court",
    typicalSettlementRate: "65% – 85% Restructuring or Full Recovery",
    actionGuideLink: "/bulk-recovery-cases-all-in-one-affordable-solutions",
    actionGuideText: "B2B & Commercial Debt Recovery Hub →",
  },
];

export default function RecoveryMultipleAccountsTabs() {
  const [activeTab, setActiveTab] = useState<string>(LOAN_SEGMENTS[0].id);

  const currentSegment =
    LOAN_SEGMENTS.find((seg) => seg.id === activeTab) || LOAN_SEGMENTS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-6">
      {/* Scrollable Tab Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100 no-scrollbar">
        {LOAN_SEGMENTS.map((seg) => {
          const isSelected = activeTab === seg.id;
          return (
            <button
              key={seg.id}
              type="button"
              onClick={() => setActiveTab(seg.id)}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              {seg.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
            {currentSegment.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Recommended Forum: {currentSegment.recommendedForum}
          </span>
        </div>

        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
            {currentSegment.title}
          </h3>
          <p className="text-xs font-semibold text-slate-600">
            Statutory Governing Law:{" "}
            <span className="text-slate-800 font-bold">{currentSegment.statutoryBasis}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1.5">
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-red-600 block">
              Operational &amp; Cost Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentSegment.operationalBottleneck}
            </p>
          </div>

          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/70 space-y-1.5">
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block">
              Centralized Legal Solution
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentSegment.centralizedSolution}
            </p>
          </div>
        </div>

        <div className="p-3.5 bg-slate-100/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-bold text-slate-800 block">
              Expected Portfolio Realisation:{" "}
              <span className="text-emerald-700 font-black">{currentSegment.typicalSettlementRate}</span>
            </span>
            <span className="text-slate-500 text-[11px]">
              Grounded in empirical institutional recovery data across National Lok Adalat and Section 25 PSS Act dockets.
            </span>
          </div>
          <Link
            href={currentSegment.actionGuideLink}
            className="shrink-0 text-red-600 hover:text-red-700 font-bold underline text-xs"
          >
            {currentSegment.actionGuideText}
          </Link>
        </div>
      </div>
    </div>
  );
}
