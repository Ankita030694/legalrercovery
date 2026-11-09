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
    id: "arbitrary-deduction",
    tabLabel: "Arbitrary Deductions",
    title: "College Deducts 50% to 100% Fees Despite Timely Withdrawal",
    cause:
      "When a student withdraws admission before the commencement of classes or prior to the cut-off date to join another institution, colleges often deduct arbitrary sums—such as 50% tuition, development fees, or seat-vacancy fines—citing internal management policies, seat wastage, or admission handbook terms.",
    legalBasis:
      "Under the University Grants Commission (UGC) Fee Refund Policy, higher education institutions are legally bound to refund 100% of the total fees collected (subject only to a processing deduction capped at ₹1,000) when cancellation is submitted 15 days or more before the formally notified last date of admission. Internal institutional rules cannot supersede statutory UGC directives or Section 2(47) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Collate Written Withdrawal Receipt & Cut-off Notice",
        description:
          "Retrieve your formal admission withdrawal email or acknowledgment slip bearing date and time stamp, along with the official university admission cut-off date notification.",
      },
      {
        step: "Lodge Formal Complaint on UGC e-Samadhan Portal",
        description:
          "Submit an online grievance at samadhan.ugc.ac.in under 'Refund of Fees' category against the specific university and college, providing the payment receipt and withdrawal proof.",
      },
      {
        step: "Serve Advocate Statutory Demand Notice",
        description:
          "If the college fails to remit the full refund within 15 days, have a legal recovery advocate issue a formal 15-day statutory notice citing UGC Guidelines and NCDRC precedents.",
      },
    ],
    statutoryRule: "UGC Fee Refund Guidelines & Section 2(47) CPA 2019",
  },
  {
    id: "withholding-certificates",
    tabLabel: "Withholding Certificates",
    title: "Institution Withholds Original Marksheets, TC or Migration Certificates",
    cause:
      "Several private colleges, deemed universities, and professional institutions unlawfully retain students' original Class 10/12 marksheets, school leaving certificates, transfer certificates (TC), or migration certificates to coerce students into paying full course fees or forfeiting their refund rights.",
    legalBasis:
      "UGC Regulation on Promotion of Equity in Higher Educational Institutions and successive Fee Refund Guidelines strictly prohibit any college or university from retaining original academic certificates. Institutions are only permitted to physically verify originals at the time of admission and immediately return them. Withholding originals constitutes an unfair trade practice under Section 2(47) CPA 2019 and actionable coercion under Indian criminal and civil law.",
    steps: [
      {
        step: "Draft Written Demand Letter for Return of Certificates",
        description:
          "Submit a formal letter to the Principal/Registrar demanding unconditional release of original documents within 48 hours pursuant to UGC guidelines.",
      },
      {
        step: "Report to State Higher Education Department & UGC",
        description:
          "Escalate the refusal to the UGC Ombudsperson and the affiliating state university, noting that retention of certificates jeopardizes alternative academic enrollment.",
      },
      {
        step: "Serve Pre-Litigation Legal Notice Warning Criminal & Consumer Action",
        description:
          "Dispatch an urgent legal notice demanding immediate return of certificates and warning of police reporting for wrongful retention alongside an e-Jagriti consumer complaint.",
      },
    ],
    statutoryRule: "UGC Notification on Non-Retention of Original Certificates",
  },
  {
    id: "no-refund-clause",
    tabLabel: "'No Refund' Prospectus Clause",
    title: "College Cites 'Fees Once Paid Shall Not Be Refunded' Prospectus Clause",
    cause:
      "College administration points to standard boilerplate text in their application form, fee receipt, or prospectus stating 'Fees once paid will not be refunded under any circumstances', arguing that the parent or student signed an agreement agreeing to these terms.",
    legalBasis:
      "The Supreme Court of India in Islamic Academy of Education (2003) and the National Consumer Disputes Redressal Commission (NCDRC) in Sehgal School of Competition v. Dalbir Singh have repeatedly ruled that 'no refund' clauses in educational prospectuses are unconscionable, void ab initio, and constitute unfair trade practice. Institutions cannot enrich themselves by retaining fees for educational services they did not render.",
    steps: [
      {
        step: "Highlight Judicial Invalidation in Formal Reply",
        description:
          "Reply to the college management in writing, explicitly citing NCDRC and Supreme Court rulings establishing that prospectus disclaimer clauses are legally invalid.",
      },
      {
        step: "Lodge Dispute with the Student Grievance Redressal Committee (SGRC)",
        description:
          "File a written petition before the college SGRC and University Ombudsperson constituted under the UGC Student Grievance Regulations, 2023.",
      },
      {
        step: "File Consumer Complaint for Unfair Contract",
        description:
          "Challenge the clause under Section 2(46) ('unfair contract') and Section 2(47) of the Consumer Protection Act, 2019 before the District Consumer Commission via e-Jagriti.",
      },
    ],
    statutoryRule: "Sehgal School Precedent & Section 2(46)/2(47) CPA 2019",
  },
  {
    id: "delayed-refund",
    tabLabel: "Delayed Refund & Caution Money",
    title: "College Agrees to Refund in Principle but Delays Payment for Months",
    cause:
      "The college administration accepts the cancellation application but claims that 'management approval is pending', 'audit reconciliation takes 6 months', or withholds caution money, library deposits, and hostel fees indefinitely.",
    legalBasis:
      "UGC mandates that all eligible fee refunds must be credited to the student's bank account within 15 days of receiving the cancellation application. Furthermore, caution money and security deposits are 100% refundable without any deduction regardless of when the student withdraws. Unreasonable delays trigger statutory interest liabilities of 9% to 12% per annum under consumer jurisprudence.",
    steps: [
      {
        step: "Issue 7-Day Final Demand Over Official Email",
        description:
          "Send an email to the Accounts Officer, Principal, and Vice-Chancellor attaching previous correspondence, bank details, and demanding immediate electronic transfer.",
      },
      {
        step: "Serve Advocate Legal Notice Demanding 18% Commercial Interest",
        description:
          "Issue a formal advocate notice demanding the principal refund alongside 18% penal interest and legal expenses for wrongful detention of student funds.",
      },
      {
        step: "Approach District Consumer Disputes Redressal Commission",
        description:
          "Submit an online claim on e-Jagriti seeking the refund amount, interest from the 16th day of withdrawal, mental agony compensation, and litigation costs.",
      },
    ],
    statutoryRule: "UGC 15-Day Processing Rule & Section 35 CPA 2019",
  },
];

export default function UgcRefundProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 block mb-1">
            Common College Defenses &amp; Legal Remedies
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Select Your Fee Dispute Scenario
          </h3>
        </div>
        <span className="text-xs text-slate-500 font-semibold">
          4 Institutional Dispute Scenarios
        </span>
      </div>

      {/* Tabs Pill Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-thin">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
              activeTab === problem.id
                ? "bg-[#111827] text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Institutional Objection &amp; Legal Assessment
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {currentProblem.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {currentProblem.cause}
          </p>

          <div className="bg-red-50/70 border-l-4 border-red-600 p-4 rounded-r-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
              Binding Statutory Law &amp; Judicial Mandate
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
            <div className="mt-2 text-[11px] font-semibold text-red-700">
              Authority: {currentProblem.statutoryRule}
            </div>
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
            Recommended Action Steps
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900">{s.step}</h5>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 text-xs text-slate-600">
          <div>
            Need to challenge withholding of certificates or tuition fees? Also see our guide on{" "}
            <Link
              href="/send-a-legal-notice/school-college-fee-refund-admission-cancellation"
              className="text-red-600 hover:text-red-700 font-semibold underline"
            >
              School &amp; College Admission Cancellation Notices
            </Link>{" "}
            and{" "}
            <Link
              href="/law/coaching-centre-refund-guidelines-2024"
              className="text-red-600 hover:text-red-700 font-semibold underline"
            >
              2024 Coaching Centre Refund Guidelines
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
