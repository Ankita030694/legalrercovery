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
    id: "terminated-pregnancy",
    tabLabel: "Fired While Pregnant",
    title: "Termination or Forced Resignation During Pregnancy or Maternity Leave",
    cause:
      "Employers often initiate bogus performance reviews, sudden pip (performance improvement plan), or claim organizational restructuring as an excuse to discharge a pregnant employee just before or during her 26-week maternity leave to evade paying maternity wages.",
    legalBasis:
      "Section 12 of the Maternity Benefit Act, 1961 categorically prohibits the discharge or dismissal of a woman during, or on account of, her absence on maternity leave. Any termination notice given during pregnancy or expiring during maternity leave is void ab initio. Under Section 12(2), even if an employee is dismissed for reasons unrelated to pregnancy, she does not forfeit her statutory right to full maternity benefit and medical bonus.",
    steps: [
      {
        step: "Preserve All Medical Intimations & HR Chats",
        description:
          "Export your formal pregnancy intimation email to HR, medical fitness certificate, approval of leave, and any subsequent termination or PIP emails.",
      },
      {
        step: "Reject Resignation & Assert Section 12 Protection",
        description:
          "Do not sign any mutual separation agreement or resign. Send a formal written protest citing Section 12 of the Act and demanding immediate withdrawal of the termination letter.",
      },
      {
        step: "Serve Advocate Statutory Legal Notice",
        description:
          "Issue a formal advocate legal demand notice demanding reinstatement with full back-wages, 26 weeks maternity benefit, and compensation for mental harassment under penal Section 21.",
      },
    ],
    statutoryRule: "Section 12 & 21, Maternity Benefit Act, 1961 & Section 65, Code on Social Security, 2020",
  },
  {
    id: "salary-stopped",
    tabLabel: "Maternity Pay Withheld",
    title: "Maternity Leave Sanctioned but Monthly Salary Stopped or Deferred",
    cause:
      "The employer approved 26 weeks of statutory leave but failed to credit monthly salary on the regular payroll date, falsely insisting that maternity pay will only be disbursed as a lump sum upon returning to office, or withholding pay citing company cash flow problems.",
    legalBasis:
      "Section 5(1) mandates payment at the average daily wage rate. Furthermore, Section 6(5) prescribes that maternity benefit must be paid in advance for the pre-natal period upon submission of proof of pregnancy, and post-natal dues within 48 hours of furnishing delivery proof. Under Section 17(1) of the Code on Wages, 2019, monthly wages must be cleared on or before the 7th of every month.",
    steps: [
      {
        step: "Generate Bank Statement & Salary Slips",
        description:
          "Collect your previous 3 months' payslips demonstrating regular wage payment and your bank statement showing non-credit of salary during maternity leave.",
      },
      {
        step: "Issue Formal Statutory Demand to Payroll & HR",
        description:
          "Issue a written intimation invoking Section 6(5) of the Maternity Benefit Act and Section 17 of the Code on Wages giving 3 business days for payment release.",
      },
      {
        step: "File Labour Inspector / Social Security Complaint",
        description:
          "If unpaid after 7 days, file an online complaint with the Labour Commissioner / Social Security Inspector under Section 17 of the Act and dispatch an advocate legal notice.",
      },
    ],
    statutoryRule: "Section 5 & 6, Maternity Benefit Act & Section 17, Code on Wages, 2019",
  },
  {
    id: "contract-consultant",
    tabLabel: "Contract / Fixed-Term Denial",
    title: "Contractual, Consultant or Fixed-Term Employee Denied Maternity Benefit",
    cause:
      "Management claims that because an employee was hired on an annual fixed-term contract, retainership agreement, third-party vendor payroll, or consultant terms, the Maternity Benefit Act does not apply, or terminates benefit because the contract ended during leave.",
    legalBasis:
      "In the landmark Supreme Court ruling Dr. Kavita Yadav v. Ministry of Health & Family Welfare (2024 INSC), the Apex Court affirmed that once a female employee completes 80 days of work in the preceding 12 months, she is entitled to full 26 weeks of maternity benefits, even if her fixed-term contract expires during her maternity leave. The earlier ruling Municipal Corporation of Delhi v. Female Workers (2000) also ruled that casual, muster roll, and contract workers have equal statutory rights.",
    steps: [
      {
        step: "Verify the 80-Day Work Threshold",
        description:
          "Calculate days of active work under Section 5(2). You must have worked at least 80 days in the 12 months preceding your expected date of delivery.",
      },
      {
        step: "Collate Invoices, Attendance & Contract Logs",
        description:
          "Preserve contract agreements, work email logs, attendance records, TDS certificates (Form 16/16A), and bank credits demonstrating regular employment continuity.",
      },
      {
        step: "Dispatch Advocate Legal Notice Citing SC Precedents",
        description:
          "Serve an advocate demand notice citing Dr. Kavita Yadav (2024 SC) and MCD v. Female Workers (2000 SC), demanding full 26 weeks salary with 18% penal interest.",
      },
    ],
    statutoryRule: "Supreme Court Rulings (Dr. Kavita Yadav 2024 & MCD 2000) & Section 5(2) MBA 1961",
  },
  {
    id: "startup-exemption",
    tabLabel: "Probation / Headcount Excuses",
    title: "Employer Claims 'Probation Exemption' or 'Startup With Few Staff'",
    cause:
      "Startups and MSMEs frequently inform female employees that probationers are not entitled to paid maternity leave, or claim the business has fewer than 10 employees to avoid statutory compliance.",
    legalBasis:
      "The Maternity Benefit Act makes no distinction between probationers, permanent staff, or trainees. Section 5(2) contains only one statutory eligibility criterion: 80 days of work in the preceding 12 months. Any internal company HR policy or employee handbook clause denying probationers maternity leave is null and void under Section 27 (Act has overriding effect over employment contracts). Any establishment with 10 or more employees is strictly governed by the Act.",
    steps: [
      {
        step: "Gather Evidence of Organizational Headcount",
        description:
          "Save company directory screenshots, Slack/Teams member counts, LinkedIn company insights, and office photos confirming establishment headcount meets or exceeds 10.",
      },
      {
        step: "Cite Section 27 Overriding Mandatory Effect",
        description:
          "Remind HR in writing that Section 27 overrides conflicting employment agreements, offer letters, or company probation policies.",
      },
      {
        step: "Initiate Legal Notice with Labour Commissioner Copy",
        description:
          "Serve a formal statutory advocate legal notice to company directors with a copy marked to the State Labour Welfare Commissioner.",
      },
    ],
    statutoryRule: "Section 27 (Overriding Effect) & Section 2(1) (Coverage), Maternity Benefit Act, 1961",
  },
];

export default function MaternityProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tabs navigation bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-5">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab panel content */}
      <div className="space-y-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
            {currentProblem.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mt-2">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <strong className="text-slate-900 font-bold block">Root Cause / Employer Pretext:</strong>
            <p className="leading-relaxed">{currentProblem.cause}</p>
          </div>
          <div className="p-4 bg-red-50/60 border border-red-200 rounded-xl space-y-1.5">
            <strong className="text-red-900 font-bold block">Statutory Legal Remedy:</strong>
            <p className="text-slate-800 leading-relaxed">{currentProblem.legalBasis}</p>
          </div>
        </div>

        <div className="pt-2">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2.5 uppercase tracking-wider">
            Mandatory Action Steps:
          </h4>
          <div className="space-y-2.5">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm"
              >
                <span className="w-5 h-5 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <strong className="font-bold text-slate-900">{st.step}: </strong>
                  <span className="text-slate-700">{st.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="text-slate-600">
            Need advocate help issuing a notice for this dispute?
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-red-600 font-bold hover:underline inline-flex items-center gap-1"
          >
            Check transparent notice charges →
          </Link>
        </div>
      </div>
    </div>
  );
}
