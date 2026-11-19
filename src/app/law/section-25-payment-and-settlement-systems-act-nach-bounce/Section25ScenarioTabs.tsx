"use client";

import React, { useState } from "react";

interface ScenarioPlaybook {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  trigger: string;
  statutoryPath: string;
  evidencePack: string[];
  actionStep: string;
}

const SCENARIOS: ScenarioPlaybook[] = [
  {
    id: "digital-pl-bnpl",
    tabLabel: "Digital PL & UPI AutoPay",
    badge: "High-Volume Retail",
    title: "Small-Ticket Digital Personal Loan & UPI AutoPay Dishonour",
    trigger:
      "Recurring EMI debit via NPCI e-NACH or UPI AutoPay fails with R01 (Insufficient Funds) or U30/U16 (Balance Exceeds / Mandate Paused) across 500–10,000+ active borrower accounts.",
    statutoryPath:
      "PSS Act s.25(1) + s.25(3) (incorporating NI Act Chapter XVII) paired with General Clauses Act s.27 deemed service and BSA 2023 s.63 electronic certificate.",
    evidencePack: [
      "UMRN (Unique Mandate Registration Number) / UPI AutoPay Mandate ID",
      "NPCI ISO 20022 pain.002 return memo with exact dishonour date & reason code",
      "Sanction Letter, Key Fact Statement (KFS) & OTP-verified Loan Agreement",
      "BSA 2023 s.63 certificate signed by NBFC Nodal / IT Officer",
    ],
    actionStep:
      "Dispatch tri-channel Section 25(1)(b) demand notice (Email + WhatsApp + Speed Post RPAD) within 30 days of return memo, demanding strictly the exact bounced EMI amount under Suman Sethi.",
  },
  {
    id: "sme-corporate-141",
    tabLabel: "SME / Corporate s.141",
    badge: "Director Liability",
    title: "SME Working Capital & Corporate Borrower Mandate Bounce",
    trigger:
      "Private limited company or LLP borrower defaults on ₹5 Lakh–₹75 Lakh unsecured business loan e-NACH mandate; promoters claim corporate veil immunity.",
    statutoryPath:
      "PSS Act s.25(3) read with NI Act s.141 (vicarious criminal liability of Managing Directors, Whole-Time Directors & Authorised Signatories) + s.143A 20% interim compensation.",
    evidencePack: [
      "Board Resolution / Partner Authorization approving NACH mandate execution",
      "MCA Master Data & DIR-12 showing active Directors in charge of day-to-day affairs",
      "Separate Section 25(1)(b) notices addressed to Company AND each named Director",
      "Statement of Account & NPA/SMA-2 classification ledger",
    ],
    actionStep:
      "Name the corporate borrower as Accused No. 1 and executive directors as Accused Nos. 2–N with specific averments of day-to-day operational control in both notice and Magistrate complaint.",
  },
  {
    id: "stop-mandate-revoked",
    tabLabel: "Stopped / Frozen Mandate",
    badge: "Tactical Evasion",
    title: "Borrower Revokes e-NACH Mandate or Freezes Account Pre-EMI",
    trigger:
      "Borrower cancels e-NACH/UPI AutoPay mandate at bank portal or triggers R04 (Payment Stopped by Drawer) / R05 (Account Frozen) while principal remains unpaid.",
    statutoryPath:
      "PSS Act s.25(1) covers dishonour where instruction is stopped/closed to evade subsisting debt; s.25(4) creates statutory presumption of liability unless disproved.",
    evidencePack: [
      "Original irrevocable mandate consent log & loan disbursement UTR proof",
      "NPCI R04 / R05 return memo establishing deliberate payment stoppage",
      "Pre-presentation SMS/email EMI intimation sent 3–5 days prior to debit date",
      "Loan recall / acceleration notice (kept separate from s.25(1)(b) EMI demand)",
    ],
    actionStep:
      "Issue Section 25(1)(b) notice within 30 days citing R04/R05 dishonour; if uncured in 15 days, file criminal complaint at creditor home-bank Magistrate Court alongside parallel s.21 ODR arbitration.",
  },
  {
    id: "batch-multi-emi",
    tabLabel: "Batch & Multi-EMI Clubbing",
    badge: "Institutional Scale",
    title: "Batch Prosecution & Clubbing Multiple Bounced EMIs",
    trigger:
      "Borrower defaults on 3 consecutive monthly e-NACH EMIs; NBFC litigation team seeks to consolidate notices and criminal complaints without hitting limitation bars.",
    statutoryPath:
      "PSS Act s.25(2) + CrPC s.219 / BNSS s.242 (up to 3 offences of same kind within 12 months may be tried together if statutory 30+15+30 day clocks align) + s.142(2) home-bank jurisdiction.",
    evidencePack: [
      "Separate NPCI return memos for each bounced EMI with independent 30-day notice clocks",
      "Consolidated or itemized Schedule-A annexure listing each EMI date, UMRN & exact amount",
      "RPAD tracking delivery receipts & WATI/Email delivery logs under BSA s.63",
      "CSV batch manifest for centralized Magistrate Court e-filing",
    ],
    actionStep:
      "Never wait 90 days for NPA to send the first Section 25 notice—EMI #1 expires at Day 30. Trigger automated Day-7/Day-15 notice waves per bounce via bulk CSV engine.",
  },
];

export default function Section25ScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Section 25 PSS Act Lender Scenarios"
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4"
      >
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {current.title}
          </h3>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Operational Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.trigger}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              Statutory &amp; Procedural Path
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryPath}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Mandatory Creditor Evidence Pack
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {current.evidencePack.map((doc) => (
              <li
                key={doc}
                className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
              >
                <span className="text-emerald-600 font-bold mt-0.5">&#10003;</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 border border-slate-800">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
            Creditor Execution Directive
          </p>
          <p className="text-xs sm:text-sm leading-relaxed">{current.actionStep}</p>
        </div>
      </div>
    </div>
  );
}
