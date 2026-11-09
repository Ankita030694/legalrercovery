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
    id: "admission-cancelled-before-session",
    tabLabel: "Admission Cancelled",
    title: "Admission Surrendered Before Session: College Refusing Hostel & Mess Advance Refund",
    cause:
      "A student secures a better seat in counseling (JEE, NEET, CUET, or state CET) and withdraws admission before the university session begins or within the UGC cut-off window. Despite never moving into the hostel or eating a single meal, the college accounts office declares that hostel rent and mess deposits are completely forfeited under institutional rules.",
    legalBasis:
      "Under the University Grants Commission (UGC) Guidelines on Refund of Fees and Section 2(47) of the Consumer Protection Act, 2019, higher education institutions are legally barred from retaining unearned money. Hostel accommodation and mess catering are ancillary, user-based facilities. When a student cancels admission prior to occupying the room, retaining boarding and catering charges constitutes unjust enrichment and an unfair trade practice. Consumer commissions routinely order a 100% refund of hostel rent and mess advances, permitting only a nominal administrative deduction of up to ₹1,000 for tuition processing.",
    steps: [
      {
        step: "Preserve the Admission Withdrawal & Room Surrender Acknowledgment",
        description:
          "Ensure you possess a timestamped email or counter-signed physical copy of your formal admission cancellation application submitted to the Registrar before hostel check-in.",
      },
      {
        step: "Audit Fee Breakdown Receipts (Hostel Rent vs Mess Advance vs Caution Deposit)",
        description:
          "Segregate academic tuition from hostel room rent, mess advance, and refundable security deposit on your fee payment vouchers to prevent bundled forfeiture arguments.",
      },
      {
        step: "Serve an Advocate Legal Notice Citing UGC Mandates & CPA Section 2(47)",
        description:
          "If the university accounts department delays disbursement past 15 days, issue a formal statutory notice demanding immediate electronic transfer alongside 12% statutory interest.",
      },
    ],
    statutoryRule: "UGC Fee Refund Guidelines & Section 2(47) Consumer Protection Act, 2019",
  },
  {
    id: "vacated-hostel-midway",
    tabLabel: "Vacated Hostel Midway",
    title: "Student Left Hostel Midway: University Forfeiting Full Academic Year Hostel & Mess Fees",
    cause:
      "A student shifts to a local PG, becomes a day scholar, or withdraws midway through the semester due to medical reasons, family emergencies, or college transfer. The university demands the entire remaining annual hostel fee and refuses to return advance mess charges, asserting that hostel seats cannot be reallotted.",
    legalBasis:
      "The National Consumer Disputes Redressal Commission (NCDRC) in Registrar, Rajiv Gandhi National University of Law v. Amitesh Anand (2018) and Pushpa Balachandran v. SRM Institute firmly established that universities cannot charge for services never provided. While a reasonable proportionate deduction for actual days of hostel room occupation is permissible, retaining advance mess charges (which represent future food procurement) and remaining semester rent is unlawful. Charging for meals that were never prepared or consumed constitutes gross deficiency of service under Section 2(11) CPA 2019.",
    steps: [
      {
        step: "Secure Counter-Signed Warden Clearance & Key Handover Slip",
        description:
          "Obtain an official hostel room vacation receipt from the Chief Warden recording the exact date and time the room was locked and keys surrendered.",
      },
      {
        step: "Submit Written Request for Pro-Rata Rent & Balance Mess Advance",
        description:
          "Submit a formal calculation deducting only the actual stay duration (per-day or per-month rate) and demanding refund of unconsumed mess balance and full caution money.",
      },
      {
        step: "Issue Formal Pre-Litigation Notice Before District Consumer Commission",
        description:
          "If the Dean or Finance Officer rejects the pro-rata settlement, dispatch a 15-day statutory advocate notice prior to filing an online e-Jagriti consumer complaint.",
      },
    ],
    statutoryRule: "NCDRC Precedent (RGNUL v. Amitesh Anand) & Section 2(11) CPA 2019",
  },
  {
    id: "caution-deposit-delayed",
    tabLabel: "Caution Money Delayed",
    title: "Hostel Caution & Security Deposit Unreasonably Delayed or Arbitrarily Deducted",
    cause:
      "The student completes the degree or vacates the hostel with all clearance slips signed. Months later, the accounts branch withholds the ₹10,000 to ₹30,000 refundable caution money, citing 'pending committee audits', 'batch clearance cycles', or arbitrary collective hostel damages without individual liability proof.",
    legalBasis:
      "Caution money and hostel security deposits are held by the university in a fiduciary capacity under bailment principles. The institution has no proprietary claim over these funds. Unless the institution can present an itemized room condition inspection report signed by the student at check-out showing specific physical damage caused by that student, general or collective damage deductions are legally invalid. Indefinite delay in refunding security deposits constitutes deficiency of service, entitling the student to 9% to 12% annual interest.",
    steps: [
      {
        step: "Produce Clear Warden 'No Dues' Certificate (NOC)",
        description:
          "Compile the signed hostel inventory clearance form confirming all room furniture, electrical fixtures, and keys were returned in good condition.",
      },
      {
        step: "Challenge Collective or Arbitrary Hostel Damage Deductions",
        description:
          "Demand written documentary evidence under consumer disclosure norms if the college claims unilateral deductions for common hostel repairs.",
      },
      {
        step: "Demand Immediate Bank Transfer with Statutory Interest",
        description:
          "Serve a 15-day demand notice holding the Registrar and Finance Officer personally responsible for withholding trust funds without legal cause.",
      },
    ],
    statutoryRule: "Principles of Fiduciary Bailment & Section 2(11) Consumer Protection Act, 2019",
  },
  {
    id: "unfair-no-refund-clause",
    tabLabel: "Unfair 'No-Refund' Clause",
    title: "College Enforcing Prospectus Clause: 'Hostel and Mess Fees Non-Refundable Under Any Circumstances'",
    cause:
      "When a parent or student requests a refund of unutilized hostel funds, college administrators dismiss the application by pointing to a clause in the information brochure or an admission declaration signed by the parent stating that fees are strictly non-refundable.",
    legalBasis:
      "The Supreme Court of India in Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan (2019) and the NCDRC in Sehgal School of Competition v. Dalbir Singh (2009) have repeatedly ruled that standard-form, non-negotiable adhesion contracts containing unilateral forfeiture terms are void and unenforceable. Under Section 2(46) of the Consumer Protection Act, 2019, any contractual term that imposes an unreasonable charge, penalty, or forfeiture on a consumer constitutes an 'unfair contract'. Such clauses cannot override statutory consumer protections or binding UGC directives.",
    steps: [
      {
        step: "Do Not Accept Oral Dismissals from Admission Counselors",
        description:
          "Obtain the college's written refusal or document their silence via registered correspondence to establish a clear evidentiary paper trail.",
      },
      {
        step: "Cite Section 2(46) 'Unfair Contract' & NCDRC Precedents",
        description:
          "Highlight in your formal correspondence that boilerplate brochure clauses have been declared null and void by the Supreme Court and National Commission.",
      },
      {
        step: "File a Pre-Litigation Legal Notice via Registered Speed Post",
        description:
          "Engage an advocate to issue a 15-day statutory notice warning of immediate proceedings before the District Consumer Disputes Redressal Commission.",
      },
    ],
    statutoryRule: "Section 2(46) Unfair Contracts & Pioneer Urban Land (2019) 5 SCC 725",
  },
];

export default function HostelRefundProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-5 border-b border-slate-200" role="tablist" aria-label="Hostel Refund Dispute Scenarios">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${problem.id}`}
              id={`tab-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div
        id={`panel-${currentProblem.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentProblem.id}`}
        className="pt-6 space-y-6"
      >
        <div className="space-y-2">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
            Statutory Governing Principle: {currentProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              The Institutional Defense / Ground Reality
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-red-50/60 border border-red-200/80 rounded-xl p-4 sm:p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 block">
              The Legal Standing &amp; Judicial Protection
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Immediate Recommended Action Steps:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs flex flex-col justify-between space-y-2"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold mb-2">
                    {idx + 1}
                  </span>
                  <strong className="block text-xs font-bold text-slate-900 leading-snug">
                    {st.step}
                  </strong>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Contextual Link */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 border-t border-slate-100">
          <span>Need a customized demand notice for this exact scenario?</span>
          <Link
            href="/legal-notice-charges"
            className="text-red-600 font-bold hover:underline inline-flex items-center gap-1"
          >
            Check transparent advocate notice fees →
          </Link>
        </div>
      </div>
    </div>
  );
}
