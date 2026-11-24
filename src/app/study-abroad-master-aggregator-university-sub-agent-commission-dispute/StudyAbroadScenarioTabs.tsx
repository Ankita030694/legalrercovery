"use client";

import React, { useState } from "react";

interface ScenarioItem {
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

const SCENARIOS: ScenarioItem[] = [
  {
    id: "second-semester-withheld",
    tabLabel: "2nd Semester Hold",
    title: "Student Enrolled in Second Semester Abroad, Aggregator Still Withholds Commission",
    cause:
      "Regional IELTS and study-abroad partners frequently complete full visa filing and student onboarding for UK, Canada, or Australia intakes, yet the master aggregator stalls payouts for 9 to 14 months claiming 'foreign university reconciliation is pending' even after the student has paid Term-2 tuition.",
    legalBasis:
      "Under Section 213 of the Indian Contract Act, 1872, an agent or sub-agent intermediary receiving funds on an agreed commission split is statutorily bound to render proper, verifiable accounts on demand. Once the census date or drop-dead withdrawal window passes and the student remains enrolled, the commission crystallizes into an admitted liquidated debt actionable via Order XXXVII CPC summary suit.",
    steps: [
      {
        step: "Serve Section 213 Accounting & University Remittance Demand",
        description:
          "Issue a fact-verified notice demanding line-item university remittance advice, FX credit dates, and CAS/CoE enrolment status within 15 days.",
      },
      {
        step: "Lock Census-Date Enrolment & Tuition Payment Proof",
        description:
          "Compile student fee-receipt confirmations, university portal status screenshots, and original sub-agent commission slab sheets under BSA Section 63.",
      },
      {
        step: "File Order XXXVII Summary Suit or MSMED s.18 Claim",
        description:
          "Convert confirmed portal enrolment logs and unpaid tax invoices into an expedited summary decree or 3x RBI bank rate compound interest award.",
      },
    ],
    statutoryRule: "Contract Act s.213 + Order XXXVII CPC + MSMED Act s.15–18",
  },
  {
    id: "clawback-reserve-abuse",
    tabLabel: "Clawback Reserve",
    title: "Blanket 25%–40% 'University Clawback' Reserve Held Across Clean Intakes",
    cause:
      "Master EdTech aggregators routinely deduct or indefinitely freeze 20% to 40% of earned sub-agent commissions as a 'rolling clawback buffer' across all intakes—even when zero students in the sub-agent's cohort withdrew or triggered a university refund.",
    legalBasis:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, a party cannot retain money as a penalty or speculative indemnity without proving actual loss. Absent a specific university-issued debit note or visa-refusal refund proof for a named student, blanket retention across unrelated enrolled students constitutes wrongful withholding of trust/agency funds.",
    steps: [
      {
        step: "Demand Student-Specific Clawback Debit Notes",
        description:
          "Challenge pooled reserves by requiring the aggregator to produce the foreign university's actual refund credit note for each disputed student ID.",
      },
      {
        step: "Segregate Undisputed Clean-Cohort Balances",
        description:
          "Quantify the undisputed commission on students who cleared census dates and demand immediate release without set-off against unrelated cohorts.",
      },
      {
        step: "Claim 18% Commercial / MSMED Interest on Arbitrary Holds",
        description:
          "Recover statutory delayed-payment interest from Day 46 onward for every clean-cohort invoice parked in an unsubstantiated clawback bucket.",
      },
    ],
    statutoryRule: "Contract Act ss.73, 74 & 213 + Commercial Courts Act s.2(1)(c)",
  },
  {
    id: "portal-wallet-freeze",
    tabLabel: "Portal Wallet Freeze",
    title: "Master Aggregator Freezes B2B Portal Wallet or Deactivates Sub-Agent Login",
    cause:
      "When regional consultancies escalate overdue payout tickets, some master aggregators suspend portal credentials, lock 'Approved / Payable' wallet balances, or cite vague 'compliance audit' flags—cutting off the sub-agent's access to historical student enrolment logs.",
    legalBasis:
      "Unilateral suspension of portal access to suppress commission ledgers triggers adverse evidentiary inference under Section 119 of the Bharatiya Sakshya Adhiniyam, 2023 (withholding material evidence in possession). Simultaneously, archived portal exports, email confirmations, and WhatsApp account-manager threads remain fully admissible under BSA Section 63.",
    steps: [
      {
        step: "Preserve Timestamped Wallet & Dashboard Exports Immediately",
        description:
          "Capture full-page screen recordings, CSV wallet exports, and email approval threads with SHA-256 hashes before raising formal legal escalation.",
      },
      {
        step: "Serve Pre-Litigation Preservation & Anti-Spoliation Notice",
        description:
          "Put the aggregator's Directors and Compliance Officer on formal notice prohibiting deletion or alteration of student application IDs and payout ledgers.",
      },
      {
        step: "Seek Order XI / Section 9 Interim Disclosure & Freeze",
        description:
          "Move for mandatory production of university remittance logs or interim security deposit under Order XXXVIII Rule 5 CPC / Arbitration Act s.9.",
      },
    ],
    statutoryRule: "BSA 2023 ss.63 & 119 + CPC Order XI / Arbitration Act s.9",
  },
  {
    id: "gst-tds-invoice-block",
    tabLabel: "GST & TDS Disputes",
    title: "Aggregator Blocks Payout Citing Zero-Rated GST Export or Section 194H TDS Mismatch",
    cause:
      "Sub-agents invoicing Indian aggregator entities for UK, Australia, or Canada university placements often face last-minute invoice rejections over whether the supply qualifies as zero-rated export of services under IGST s.16 or domestic B2B marketing with 18% GST and TDS s.194H.",
    legalBasis:
      "Where the sub-agent's contract is strictly with an Indian master aggregator company (not directly with the foreign university), the place of supply is domestic under Section 13(8)(b) / Section 12 of the IGST Act, 2017—meaning the Indian aggregator cannot use export-of-service ambiguity to withhold undisputed principal commission.",
    steps: [
      {
        step: "Audit Contracting Counterparty & Place of Supply",
        description:
          "Verify whether your agreement is with an Indian Pvt Ltd aggregator or an offshore parent entity (Singapore/UK/US) to lock correct GST/FEMA treatment.",
      },
      {
        step: "Separate Tax Reconciliation from Principal Release",
        description:
          "Demand immediate release of the undisputed base commission while issuing compliant GST credit/debit adjustments or Form 26AS TDS verification.",
      },
      {
        step: "Enforce Payment Timeline Under MSMED Act Section 15",
        description:
          "Statutory tax-classification queries do not extend the mandatory 45-day payment ceiling once student enrolment milestones are verified.",
      },
    ],
    statutoryRule: "IGST Act ss.2(6), 13(8)(b) & 16 + Income Tax s.194H + MSMED s.15",
  },
];

export default function StudyAbroadScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector */}
      <div
        role="tablist"
        aria-label="Study-abroad aggregator commission failure modes"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-slate-200 pb-4">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white shrink-0">
            {activeScenario.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-black uppercase tracking-widest text-amber-700 mb-1.5">
              Commercial Failure Trigger
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-1.5">
              Creditor Statutory Weapon
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <span className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-3">
            3-Step Sub-Agent Recovery Action Plan
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((st, idx) => (
              <div
                key={st.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {st.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
