"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FnfProblemTab {
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

const PROBLEMS: FnfProblemTab[] = [
  {
    id: "resignation-delay",
    tabLabel: "Resignation & 45-Day Myth",
    title: "Employer Withholds FnF Citing 'Internal 30–45 Day Payroll Cycle'",
    cause:
      "Most Indian corporations and MNCs traditionally process exit settlements during the next month's payroll cycle or enforce a blanket 30, 45, or 60-day FnF window in employee handbooks. HR managers routinely inform resigning employees that 'finance only releases final cheques on the 25th of next month' or that 'exit settlements require multi-tier regional approvals'.",
    legalBasis:
      "Section 17(2) of the Code on Wages, 2019 completely overrules all company employment contracts, offer letters, and HR handbooks. The statute states in unambiguous, mandatory terms: 'Where an employee has resigned from service, the wages payable to him shall be paid within two working days of his resignation.' Under the Indian Contract Act and established labor law jurisprudence, any employment agreement clause conflicting with an enacted central statute is void ab initio.",
    steps: [
      {
        step: "Deliver Formal Written Demand Citing Section 17(2)",
        description:
          "On Day 3 post-relieving date, send a formal email to HR and the Head of Finance citing Section 17(2) of the Code on Wages, attaching your relieving letter / resignation acceptance, and demanding full settlement credit within 24 hours.",
      },
      {
        step: "Highlight Criminal Liability Under Section 54 & 56",
        description:
          "Inform HR and company directors that withholding wages past statutory timelines constitutes an offence punishable by statutory fines and personal liability of the Managing Director under Section 56 of the Code on Wages.",
      },
      {
        step: "Serve Statutory Advocate Legal Notice",
        description:
          "If the company fails to remit dues within 7 days, engage an advocate to dispatch an official statutory legal demand notice giving a final 15-day window before moving the Labour Authority under Section 45.",
      },
    ],
    statutoryRule: "Section 17(2) Code on Wages, 2019 & Section 23 Indian Contract Act, 1872",
  },
  {
    id: "laptop-asset-clearance",
    tabLabel: "Asset / Laptop Clearance Hold",
    title: "HR Withholds 100% Salary Pending Laptop, ID Card, or IT No-Dues Clearance",
    cause:
      "Companies routinely withhold the entirety of an employee's final salary, leave encashment, and bonuses because an IT ticket is pending, a laptop courier is delayed in transit, or a manager has not approved an internal clearance checklist. In some cases, employers claim hypothetical damage to company property to confiscate months of earned compensation.",
    legalBasis:
      "Section 18 of the Code on Wages, 2019 permits deductions for damage to or loss of goods expressly entrusted to the employee, but strictly requires: (1) an opportunity to show cause before making the deduction, (2) limiting total deductions across all heads to a statutory ceiling of 50% of wages under Section 18(3), and (3) actual proof of willful neglect. The employer has zero statutory authority to withhold 100% of earned wages while clearance tickets are processed.",
    steps: [
      {
        step: "Preserve Handover Proof & Courier Waybills",
        description:
          "Retain physical handover receipts, IT asset return sign-off sheets, or courier tracking confirmations proving the equipment was dispatched to the designated company office.",
      },
      {
        step: "Issue Formal Objection Against Unlawful Blanket Withholding",
        description:
          "Notify HR in writing that withholding 100% of earned salary violates Section 18(3) (which caps deductions at 50%) and Section 17(2) (which mandates payment within two working days), regardless of pending internal tickets.",
      },
      {
        step: "Escalate via Advocate Demand Notice for Illegal Wage Retention",
        description:
          "Serve a formal statutory notice demanding immediate release of wages and reserving rights to claim 10x statutory compensation before the Labour Commissioner.",
      },
    ],
    statutoryRule: "Section 18(2)(c), Section 18(3) & Section 17(2) Code on Wages, 2019",
  },
  {
    id: "termination-layoff",
    tabLabel: "Abrupt Layoff / Termination",
    title: "Employee Terminated or Retrenched Without Immediate 48-Hour Dues Release",
    cause:
      "During sudden corporate restructurings, layoffs, or 'performance-based' summary dismissals, employers frequently revoke system access immediately while leaving severance, unpaid salary for days worked, and notice pay in limbo for months. Terminated employees are left without income while HR insists on prolonged exit formalities.",
    legalBasis:
      "Section 17(2)(i) and (ii) specifically cover employees who are 'removed or dismissed from service, or retrenched'. The clock begins ticking the moment notice of termination takes effect. The employer must remit all wages, earned salary, and notice pay within two working days. Furthermore, under the Industrial Relations Code and Chapter V-A of the Industrial Disputes Act, retrenchment compensation must be tendered concurrently with termination.",
    steps: [
      {
        step: "Request Written Termination Letter & Unpaid Days Computation",
        description:
          "Ensure you possess written evidence of termination (email or letter) stating your last working date, along with attendance records / timesheets for unpaid days.",
      },
      {
        step: "Submit Written Notice of Section 17(2) Breach",
        description:
          "Email management pointing out that the statutory 2-working-day timeline has lapsed and demanding full bank remittance including notice in lieu of termination.",
      },
      {
        step: "File Section 45 Application Before Labour Authority",
        description:
          "Serve a statutory advocate notice and simultaneously file a claim before the Authority under Section 45 of the Code on Wages seeking up to 10 times the unpaid amount as compensation.",
      },
    ],
    statutoryRule: "Section 17(2)(i)-(ii) & Section 45 Code on Wages, 2019",
  },
  {
    id: "notice-deduction-dispute",
    tabLabel: "Notice Period Deduction",
    title: "Company Deducts Full Gross CTC for Shortfall or Demands Extortionate Buyout",
    cause:
      "When an employee requests early release or resigns with a shortened notice period, employers frequently calculate notice pay deductions on gross CTC (including employer PF, medical insurance, and discretionary variables) rather than basic pay, or deduct amounts exceeding the actual shortfall days, leaving the employee with a negative FnF statement.",
    legalBasis:
      "Notice buyout deductions are governed by the law of liquidated damages under Section 73 and Section 74 of the Indian Contract Act, 1872, and Section 18 of the Code on Wages. Deductions can only represent reasonable compensation for actual damage suffered, not an in terrorem penalty. Notice deductions must be calculated on basic wages, not gross CTC or employer perks, and Section 18(3) prohibits deductions exceeding 50% of the wage payable.",
    steps: [
      {
        step: "Scrutinize the FnF Ledger & Demand Itemized Breakdown",
        description:
          "Insist on an itemized pay slip showing how the notice shortfall deduction was computed (Gross CTC vs Basic Salary per day).",
      },
      {
        step: "Challenge the 50% Ceiling Violation",
        description:
          "Remind HR that under Section 18(3) of the Code on Wages, total deductions from wages cannot exceed 50%, making negative FnF statements unlawful.",
      },
      {
        step: "Send Advocate Notice for Notice Pay Arbitrariness",
        description:
          "Have an advocate issue a demand contesting the excessive calculation and demanding refund of the illegally retained salary components.",
      },
    ],
    statutoryRule: "Section 18(3) Code on Wages, 2019 & Section 74 Indian Contract Act, 1872",
  },
  {
    id: "startup-closure",
    tabLabel: "Company Closure / Shutdown",
    title: "Startup or Company Shuts Down With Months of Unpaid Salary & FnF Pending",
    cause:
      "Founders and startup executives often shut down operations, freeze bank accounts, or stop responding to emails, informing employees that 'funds have run out' and exit settlements can only be paid if a future funding round or asset sale concludes.",
    legalBasis:
      "Section 17(2) specifically mandates that when an employee 'became unemployed due to closure of the establishment, the wages payable to him shall be paid within two working days of closure'. Under Section 56 of the Code on Wages, directors and executives who were in charge of the business at the time of default are personally liable to criminal prosecution and fines. Furthermore, under the Insolvency and Bankruptcy Code (IBC), employees are operational creditors with priority under Section 53.",
    steps: [
      {
        step: "Establish Direct Liability of Company Directors",
        description:
          "Gather company registration details, CIN, and Director Identification Numbers (DIN) from the Ministry of Corporate Affairs (MCA) portal.",
      },
      {
        step: "Dispatch Joint Statutory Legal Notice to All Board Members",
        description:
          "Issue a statutory legal demand notice to the company and all directors at their registered addresses invoking Section 17(2) and Section 56 personal liability.",
      },
      {
        step: "Initiate Section 9 IBC Demand or Labour Commissioner Action",
        description:
          "For debts meeting statutory thresholds, issue a Form 3 Demand Notice under the IBC, or file an immediate recovery certificate application before the Labour Court.",
      },
    ],
    statutoryRule: "Section 17(2), Section 56 Code on Wages, 2019 & Section 9 IBC, 2016",
  },
];

export default function FnfProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Header */}
      <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50/80 p-2 gap-1.5 scrollbar-thin">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-red-600 shadow-xs border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        <div>
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block mb-2">
            Dispute Scenario
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
        </div>

        {/* Cause and Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
              The Employer&apos;s Stance / Root Cause
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50/40 border border-red-100 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-red-700 block">
              The Statutory Counter-Position
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3 Immediate Escalation Steps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Recommended Statutory Action Steps:
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 sm:p-3.5 bg-slate-50/50 rounded-xl border border-slate-200/70"
              >
                <span className="w-5 h-5 rounded-full bg-[#1E293B] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-0.5">
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
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

        {/* Footer Statutory Citation */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-semibold text-slate-500">
            Applicable Statute: <span className="text-slate-800 font-bold">{currentProblem.statutoryRule}</span>
          </span>
          <Link
            href="/legal-notice-for-full-and-final-settlement-delay"
            className="text-blue-700 hover:text-blue-900 font-bold underline"
          >
            Read FnF Settlement Delay Notice Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}
