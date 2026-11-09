"use client";

import React, { useState } from "react";
import Link from "next/link";

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
    id: "statutory-two-day-delay",
    tabLabel: "FnF Past 2 Working Days",
    title: "Terminal FnF Settlement Withheld Beyond the Section 17(2) 2-Working-Day Deadline",
    cause:
      "A standard corporate practice in India has been quoting a '45 to 90 days internal FnF policy' post-relieving. Employers routinely freeze terminal salary, earned leave encashment, and bonuses under the guise of inter-departmental clearances, asset inspections, or batch payroll cycles.",
    legalBasis:
      "Section 17(2) of the Code on Wages, 2019 supersedes all internal company handbooks and employment contracts. It mandates: 'Where an employee is removed or dismissed from service, or retrenched or has resigned from service, or became unemployed due to closure of the establishment, the wages payable to him shall be paid within two working days of his removal, dismissal, retrenchment or, as the case may be, his resignation.' Any contractual clause claiming 45 or 90 days is void ab initio under labour law principles.",
    steps: [
      {
        step: "Preserve Resignation Acceptance & Last Working Day (LWD) Confirmation",
        description:
          "Archive the HR email accepting your resignation, formal LWD confirmation, and signed IT/admin clearance handover logs with immutable timestamps.",
      },
      {
        step: "Issue Advocate Demand Notice Citing Section 17(2)",
        description:
          "Serve a formal legal notice demanding complete release of terminal dues within 15 days, asserting statutory simple interest (18% p.a.) and penalty exposure under Section 54.",
      },
      {
        step: "File Recovery Claim Before Labour Commissioner Authority",
        description:
          "If unpaid past the notice window, escalate to the designated Authority under Section 45 of the Code on Wages for a statutory recovery certificate enforceable through the District Collector.",
      },
    ],
    statutoryRule: "Section 17(2) & Section 45, Code on Wages, 2019",
  },
  {
    id: "notice-period-clawback",
    tabLabel: "Notice Pay Deduction",
    title: "Arbitrary Deductions for Notice Period Buyout or Early Relieving Shortfall",
    cause:
      "When an employee requests early release due to medical necessity, imminent joining dates, or toxic work environments, employers frequently deduct 2 to 3 months of gross pay from accrued wages or demand hefty out-of-pocket buyout cheques, ignoring days worked.",
    legalBasis:
      "Section 18 of the Code on Wages limits permissible deductions. Total deductions in any wage period cannot exceed 50% of wages payable (Section 18(3)). Furthermore, under established High Court jurisprudence, notice period damages cannot be penal; employers can only claim actual demonstrated damages, not an arbitrary penalty, and earned wages for days actually worked cannot be unlawfully confiscated.",
    steps: [
      {
        step: "Calculate Worked Days vs Buyout Shortfall",
        description:
          "Reconcile biometric attendance logs and approved leaves to separate earned salary for days physically worked from unserved notice days.",
      },
      {
        step: "Invoke Section 18(3) 50% Ceiling Protection",
        description:
          "Demand immediate payment of at least 50% of the terminal wage bill, contesting blanket zero-pay slips or negative FnF statements.",
      },
      {
        step: "Serve Advocate Legal Notice for Wage Restitution",
        description:
          "Direct the advocate notice to the company Directors under Section 141 principles and HR head, seeking immediate refund of excess deductions.",
      },
    ],
    statutoryRule: "Section 18(3) Code on Wages & Section 74 Indian Contract Act",
  },
  {
    id: "laptop-asset-clearance",
    tabLabel: "Asset Hold Dispute",
    title: "Holding Complete FnF for Alleged Laptop Damage or Asset Clearance Delays",
    cause:
      "Following remote or hybrid work exits, companies frequently hold 100% of an employee's final payout for weeks or months claiming courier transit delays, cosmetic scratches on returned laptops, or unapproved peripheral reconciliations.",
    legalBasis:
      "Under Section 18(2)(c) of the Code on Wages, an employer may only make deductions for damage to or loss of goods expressly entrusted to the employee, and only after giving the employee an opportunity to show cause why the deduction should not be made. Holding lakhs in salary for a minor cosmetic defect or without giving an itemized survey is an illegal deduction.",
    steps: [
      {
        step: "Collect Courier Tracking & POD Delivery Receipts",
        description:
          "Secure the courier consignment tracking number, delivery confirmation slip, and photographic proof of packed items prior to dispatch.",
      },
      {
        step: "Demand Itemized Survey Report Within 48 Hours",
        description:
          "Call upon IT administration to furnish a certified technical inspection log under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
      },
      {
        step: "Serve Legal Notice Against Unlawful Wage Withholding",
        description:
          "Issue a formal advocate notice demanding release of undisputed salary balances immediately, separating bona fide hardware value from earned wages.",
      },
    ],
    statutoryRule: "Section 18(2)(c) Code on Wages & Section 63 BSA 2023",
  },
  {
    id: "gratuity-bonus-withheld",
    tabLabel: "Gratuity & Bonus Withheld",
    title: "Non-Payment of Statutory Gratuity or Contractually Earned Performance Bonus",
    cause:
      "Employers often omit gratuity for employees who completed 4 years and 240 days of continuous service, or claim that annual target bonuses are 'at management sole discretion' despite signed incentive scorecards and target achievement.",
    legalBasis:
      "Section 7(3) of the Payment of Gratuity Act, 1972 mandates that gratuity must be paid within 30 days of becoming due. If not paid within 30 days, Section 7(3A) makes simple interest mandatory (at RBI notified rates, currently 10% p.a.). For bonuses, Section 2(y) of the Code on Wages includes all remuneration payable under the terms of employment.",
    steps: [
      {
        step: "Calculate Five Years / 240-Day Continuous Service",
        description:
          "Confirm continuous tenure under Madras & Supreme Court precedents affirming eligibility upon completing 4 years and 240 days in the 5th year.",
      },
      {
        step: "Submit Statutory Form I for Gratuity Payment",
        description:
          "Formally deliver Form I under the Payment of Gratuity Rules to HR via speed post and registered email.",
      },
      {
        step: "Issue Combined Demand Notice & File Form N with Gratuity Controlling Authority",
        description:
          "Serve an advocate notice demanding 10% penal interest; if unheeded, file Form N before the Assistant Labour Commissioner (Central or State).",
      },
    ],
    statutoryRule: "Section 7(3A) Payment of Gratuity Act & Section 2(y) Code on Wages",
  },
];

export default function SalaryFnFReportTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3 mb-6">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block mb-1">
            Interactive Dispute Resolution
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Select Your FnF or Unpaid Salary Dispute Scenario
          </h3>
        </div>
        <span className="text-xs font-semibold text-slate-500">
          Empirical Data &amp; Legal Remedies
        </span>
      </div>

      {/* Tab Navigation Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm ring-2 ring-slate-900"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Panel */}
      <div className="space-y-5 bg-slate-50/70 rounded-xl p-4 sm:p-6 border border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200">
              Statutory Benchmark: {currentProblem.statutoryRule}
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {currentProblem.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Why Companies Do This (The Ground Reality)
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Your Statutory Legal Protection
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 block mb-3">
            Recommended Action Steps Under Labour Code
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-900">{st.step}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
          <p className="text-xs text-slate-600 font-medium">
            Over 81.6% of such employment wage disputes settle within 12 business days of notice dispatch.
          </p>
          <Link
            href="/send-legal-notice-online-india"
            className="text-xs font-bold text-red-600 hover:text-red-700 underline underline-offset-2 flex items-center gap-1"
          >
            Send statutory demand notice online &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
