"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioTab {
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

const SCENARIOS: ScenarioTab[] = [
  {
    id: "cash-flow-crunch",
    tabLabel: "Cash Crunch / Funding Delay",
    title: "Employer Delays Salary Citing Startup Runway, Investor Delay or Cash Crunch",
    cause:
      "Founders and management frequently send company-wide emails explaining that an ongoing venture round, debt facility, or client receivables are stuck, requesting employees to 'bear with the management' while salary is deferred past the 7th or disbursed in split tranches over multiple weeks.",
    legalBasis:
      "Under Section 17(1)(d) of the Code on Wages, 2019, the obligation to pay monthly wages before the expiry of the 7th day is strict and absolute. The statute recognizes zero exemptions for cash flow difficulties, delayed venture capital disbursements, or internal fiscal distress. Withholding employee wages to fund operational expenses constitutes unlawful wage retention and renders company directors personally liable under Section 54.",
    steps: [
      {
        step: "Preserve Email & WhatsApp Admissions",
        description:
          "Save all internal circulars, Slack messages, and emails from founders or HR acknowledging the salary delay, promised disbursement dates, and admitted salary arrears.",
      },
      {
        step: "Issue Formal Pre-Notice Demand to Directors",
        description:
          "Submit a written protest citing Section 17(1) Code on Wages, rejecting deferred or phased payouts, and specifying an immediate 48-hour deadline for bank transfer.",
      },
      {
        step: "Serve Advocate Statutory Demand Notice",
        description:
          "If unpaid by Day 10, dispatch an advocate demand notice to all directors and founders demanding full payment with 18% p.a. commercial interest before initiating labour authority proceedings.",
      },
    ],
    statutoryRule: "Section 17(1)(d) & Section 54 Code on Wages, 2019",
  },
  {
    id: "client-invoice-unpaid",
    tabLabel: "Client Invoice Unpaid",
    title: "Salary Withheld Because 'The Client Has Not Cleared Vendor Invoices'",
    cause:
      "IT services, consulting, staffing, and agency employers routinely withhold employee salaries or project allowances with the excuse that the overseas or domestic client has not cleared monthly timesheets or milestone payments, effectively shifting their commercial risk onto salaried workers.",
    legalBasis:
      "Under Indian employment jurisprudence and Section 17 of the Code on Wages, an employee's employment contract is strictly with their direct employer, not the third-party client. Wage disbursement cannot be made contingent upon client collections ('pay-when-paid' clauses are void against public policy under Section 23 of the Indian Contract Act, 1872).",
    steps: [
      {
        step: "Export Approved Timesheets & Deliverables",
        description:
          "Secure certified copies of your approved timesheets, project milestone completions, sprint delivery logs, and manager attendance sign-offs.",
      },
      {
        step: "Reject Client Collection Dependencies in Writing",
        description:
          "Send a formal written rebuttal informing HR that client contract recovery is an independent B2B dispute that cannot suspend statutory wage obligations.",
      },
      {
        step: "Initiate Advocate Notice & Labour Authority Claim",
        description:
          "Issue a statutory legal demand notice holding the employer liable, followed by a Section 45 claim before the competent Labour Authority seeking up to 10x compensation.",
      },
    ],
    statutoryRule: "Section 17(1) Code on Wages & Section 23 Indian Contract Act, 1872",
  },
  {
    id: "arbitrary-deduction",
    tabLabel: "Arbitrary Deductions",
    title: "Salary Slashed or Withheld for Alleged KPI Misses or Company Loss",
    cause:
      "Employers unilaterally deduct large portions of monthly salary or withhold the entire paycheck citing missed sales targets, negative client feedback, project downtime, or alleged financial loss without giving written show-cause notice or domestic inquiry.",
    legalBasis:
      "Section 18 of the Code on Wages exhaustively defines permissible wage deductions (such as statutory PF, professional tax, authorized advances, or court orders). Section 18(2) strictly prohibits punitive deductions for performance shortcomings without due process, and Section 18(3) caps all total deductions at 50% of monthly wages. Withholding 100% of salary is explicitly illegal.",
    steps: [
      {
        step: "Audit Deductions Against Section 18 Clauses",
        description:
          "Review your monthly payslip against the authorized deduction categories in Section 18(2). Any deduction for 'penalty' or 'KPI shortfall' is prima facie unlawful.",
      },
      {
        step: "File Formal Rebuttal Demanding Refund",
        description:
          "Submit a formal objection to HR demanding an immediate refund of the unauthorized deduction and citing the 50% statutory ceiling under Section 18(3).",
      },
      {
        step: "Serve Legal Notice & Section 45 Wage Claim",
        description:
          "Engage an advocate to issue a statutory demand notice. If unreversed, petition the Labour Authority for full recovery plus statutory penalty compensation.",
      },
    ],
    statutoryRule: "Section 18(2), 18(3) & Section 45 Code on Wages, 2019",
  },
  {
    id: "delayed-payroll-batch",
    tabLabel: "Silent HR / Moved Payroll",
    title: "Employer Shifts Monthly Salary Date from 7th to 15th, 20th or 30th",
    cause:
      "Companies unilaterally alter employee handbooks or send casual notifications shifting salary disbursement dates to the 15th, 20th, or end of the following month, claiming internal administrative convenience or payroll consolidation.",
    legalBasis:
      "Section 17(1)(d) of the Code on Wages mandates that monthly wages must be paid before the expiry of the 7th day of the succeeding month. Company HR policies, internal bylaws, or offer letter clauses cannot override a central statutory enactment. Any clause postponing salary disbursement beyond the 7th is null, void, and unenforceable in law.",
    steps: [
      {
        step: "Cite Section 17(1) Central Enactment Priority",
        description:
          "Respond to the HR notification pointing out that central labour statutes supersede internal company policies, and that delayed disbursement triggers daily default.",
      },
      {
        step: "Collate Prior Timely Payslips & Bank Statements",
        description:
          "Assemble previous salary slips and bank credit statements proving the established monthly wage cycle and the date on which default commenced.",
      },
      {
        step: "Issue Legal Demand Notice & Inspector Complaint",
        description:
          "Serve a formal legal notice to the management, and copy the jurisdictional Inspector-cum-Facilitator appointed under Section 51 of the Code on Wages.",
      },
    ],
    statutoryRule: "Section 17(1)(d) & Section 51 Code on Wages, 2019",
  },
  {
    id: "resignation-notice-delay",
    tabLabel: "Notice Period / Exit Delay",
    title: "Monthly Salary Withheld Immediately Upon Resignation or During Notice Period",
    cause:
      "The moment an employee tenders their resignation, companies frequently stop the regular monthly salary cycle, claiming that 'all pending salary will be adjusted only during the Full and Final (FnF) settlement after 45 or 90 days'.",
    legalBasis:
      "An employee serving a notice period remains a full-time salaried employee entitled to regular monthly wages before the 7th under Section 17(1). Freezing running salary during notice is completely illegal. Furthermore, under Section 17(2), all final dues upon exit must be disbursed within two working days of the employee's last day.",
    steps: [
      {
        step: "Confirm Resignation & Ongoing Service Logs",
        description:
          "Retain your resignation acknowledgment, manager acceptance email, and daily biometric/Slack attendance logs proving active service during notice.",
      },
      {
        step: "Demand Running Salary Independent of FnF",
        description:
          "Write to HR stating that running monthly wages under Section 17(1) cannot be legally subsumed into deferred FnF settlement cycles.",
      },
      {
        step: "Serve Combined Wage & FnF Statutory Notice",
        description:
          "Serve a dual statutory demand notice under Section 17(1) for running salary and Section 17(2) for immediate FnF settlement within 2 working days.",
      },
    ],
    statutoryRule: "Section 17(1) & Section 17(2) Code on Wages, 2019",
  },
];

export default function SalaryDelayTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Pill Bar */}
      <div className="bg-slate-100/90 p-2 sm:p-2.5 border-b border-slate-200 overflow-x-auto flex gap-1.5 sm:gap-2">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-[#DC2626] shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        <div>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full inline-block mb-2">
            Dispute Scenario Analysis
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {scenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Employer Conduct &amp; Root Cause
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {scenario.cause}
            </p>
          </div>

          <div className="bg-amber-50/70 p-4 sm:p-5 rounded-xl border border-amber-200/80 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Statutory Benchmark &amp; Why It Fails in Law
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {scenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
            Immediate 3-Step Employee Enforcement Rail
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {scenario.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    {st.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 bg-red-50/60 border border-red-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 block">
              Applicable Legal Provision
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-900">
              {scenario.statutoryRule}
            </span>
          </div>
          <Link
            href="/legal-notice-charges"
            className="inline-flex items-center text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] underline shrink-0"
          >
            Review Advocate Notice Drafting Fees →
          </Link>
        </div>
      </div>
    </div>
  );
}
