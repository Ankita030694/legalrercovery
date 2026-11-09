"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CoachingProblemTab {
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

const COACHING_PROBLEMS: CoachingProblemTab[] = [
  {
    id: "midway-dropout",
    tabLabel: "Midway Dropout",
    title: "Student Left JEE / NEET / UPSC Course Midway; Institute Refuses Pro-Rata Refund",
    cause:
      "A student enrols in a 1-year or 2-year competitive coaching program, pays the full advance fee (or two bulky instalments), and decides to withdraw after 2 to 4 months due to academic stress, health reasons, or a change of academic stream. The coaching centre management rejects the refund application citing fine-print admission terms stating 'Fees once paid will not be refunded under any circumstances.'",
    legalBasis:
      "Clause 11 of the Ministry of Education Guidelines for Regulation of Coaching Centres (2024) expressly mandates that if a student leaves a course midway, the coaching centre must calculate and release the balance tuition fee on a pro-rata basis within 10 days. The Supreme Court and National Consumer Commission (NCDRC) in FIITJEE v. Dr. Minathi Rath have held that retaining fees for classes not delivered is an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Submit Written Notice of Course Discontinuation",
        description:
          "Formally email the coaching centre director, regional head, and billing desk with subject 'Course Discontinuation & Pro-Rata Refund Demand — Student ID [ID]'. State the last date of attendance and reference Clause 11 of the MoE 2024 Guidelines.",
      },
      {
        step: "Compute and Present the Pro-Rata Formula",
        description:
          "Provide the mathematical breakdown: (Total Fee ÷ Total Course Weeks) × Unattended Weeks = Refund Due. Demand payment within the 10-day statutory window.",
      },
      {
        step: "Serve Advocate Statutory Demand Notice",
        description:
          "If the centre stonewalls or fails to credit the amount within 10 days, dispatch a formal statutory advocate demand notice via Registered Speed Post and email, warning of CCPA penalty up to ₹1,00,000 and e-Jagriti consumer court proceedings.",
      },
    ],
    statutoryRule: "MoE 2024 Guidelines Clause 11 & Section 2(47) CPA 2019",
  },
  {
    id: "hostel-mess-trapped",
    tabLabel: "Hostel & Mess Fees",
    title: "Tied Hostel, Mess, or PG Advance Fees Withheld on Early Departure",
    cause:
      "Institutes in education hubs (Kota, Delhi, Hyderabad, Sikar, Patna) bundle residential hostel, PG accommodation, and mess charges into the overall admission package, often collecting 6 to 12 months in advance. When the student vacates the hostel upon course withdrawal, the hostel management or institute refuses to refund the unexpired months or return the caution deposit.",
    legalBasis:
      "Guideline 11(2) of the MoE 2024 Coaching Guidelines explicitly mandates that hostel and mess fees paid in advance must be refunded on a pro-rata basis for the remaining period within 10 days. Furthermore, withholding caution deposits violates Section 2(11) (deficiency in service) of the Consumer Protection Act, 2019, as caution money is held only in trust against physical damages.",
    steps: [
      {
        step: "Obtain Physical Hostel Clearance & Key Handover Acknowledgment",
        description:
          "Secure a written or stamped clearance slip from the hostel warden confirming the exact date of vacating the room and verifying zero physical damage to furniture or premises.",
      },
      {
        step: "Formal Claim for Caution Deposit and Unused Food/Rent Days",
        description:
          "Submit a documented refund request via email attaching the clearance slip, room inventory checklist, and bank account details for direct NEFT/RTGS transfer.",
      },
      {
        step: "Issue Legal Notice to Joint Operators",
        description:
          "If the coaching institute and hostel operate under separate vendor agreements, serve the legal demand notice jointly upon both entities establishing operational agency.",
      },
    ],
    statutoryRule: "MoE Guidelines Guideline 11(2) & CPA 2019 Section 2(11)",
  },
  {
    id: "excessive-kit-deduction",
    tabLabel: "Inflated Kit Deductions",
    title: "Centre Deducting ₹40,000+ for 'Study Material' & 'Registration Kit'",
    cause:
      "When a parent requests a pro-rata refund, the coaching centre superficially agrees but computes deductions unfairly: arbitrarily categorizing 40% to 50% of the gross fee as non-refundable 'Administrative Processing', 'Tech Portal Access', or 'Printed Material Costs', leaving a negligible token amount for the family.",
    legalBasis:
      "The Central Consumer Protection Authority (CCPA) and National Consumer Commission (NCDRC) have repeatedly ruled that administrative and material deductions must be transparent, verifiable, and strictly proportionate to actual costs incurred. Inflating registration charges to nullify refund mandates constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019 and a deceptive dark pattern.",
    steps: [
      {
        step: "Demand Itemized Cost Breakdown",
        description:
          "Write to the centre finance head requesting the certified cost sheet of study materials actually handed over versus future modules that were never printed or dispatched.",
      },
      {
        step: "Offer Physical Return of Unopened Study Material Modules",
        description:
          "Formally offer to return sealed books, tablet devices, or unused test packs, disallowing the centre from claiming complete forfeiture of material fees.",
      },
      {
        step: "Statutory Notice Contesting Disproportionate Retentions",
        description:
          "Serve an advocate demand notice highlighting NCDRC precedents that cap administrative processing charges to reasonable nominal thresholds (typically under 10%).",
      },
    ],
    statutoryRule: "Section 2(47) Consumer Protection Act 2019 & CCPA Guidelines",
  },
  {
    id: "misleading-faculty-claims",
    tabLabel: "Misleading Faculty",
    title: "Star Faculty Replaced, Substandard Teaching, or False Batch Promises",
    cause:
      "Parents enroll their children based on promotional seminars, billboards, and prospectus assurances promising celebrity 'star faculty', small batch sizes (e.g., under 40 students), or specialized doubt-clearing sessions. Post-admission, the promised teachers leave, batches are merged to 150+ students, or recorded videos are played instead of live classes.",
    legalBasis:
      "Under Guidelines 6 and 9 of the MoE 2024 Coaching Guidelines, coaching centres are legally prohibited from publishing misleading advertisements, making exaggerated success claims, or misrepresenting faculty qualifications. Section 2(28) and Section 89 of CPA 2019 penalize false or misleading advertisements, rendering the contract voidable at the option of the student with full refund entitlements.",
    steps: [
      {
        step: "Preserve Promotional Collateral and Admission Commitments",
        description:
          "Archive brochures, WhatsApp assurances from sales counsellors, fee receipts mentioning specific batches, and class timetables demonstrating faculty substitutions.",
      },
      {
        step: "Lodge Written Protest with Branch Management",
        description:
          "Send an email pointing out the direct breach of representations made during enrolment, giving 7 days to rectify the faculty allocation or process a complete refund.",
      },
      {
        step: "Escalate to CCPA and Serve Advocate Notice",
        description:
          "File an unfair trade practice grievance before the National Consumer Helpline (NCH) and CCPA, backed by an advocate notice demanding 100% fee refund plus compensation for lost academic time.",
      },
    ],
    statutoryRule: "MoE Guidelines Rule 6 & CPA 2019 Sections 2(28), 2(47), and 89",
  },
  {
    id: "edtech-loan-traps",
    tabLabel: "Fintech EMI / Loan Trap",
    title: "Course Dropped but NBFC Continues Deducting Auto-Debit EMIs",
    cause:
      "During admission, sales counsellors convince parents to opt for a 'Zero Cost EMI' scheme, which in reality is a third-party non-banking financial company (NBFC) education loan. When the student quits the institute, the coaching centre stops acknowledging the loan, and the NBFC continues executing NACH / auto-debit deductions every month, threatening CIBIL damage.",
    legalBasis:
      "The Reserve Bank of India (RBI) Fair Practices Code for NBFCs and digital lending guidelines mandate that credit facilities tied to commercial services must have transparent cancellation protocols. Under Section 2(11) and 2(47) CPA 2019, coaching institutes and lending partners act in common commercial enterprise; upon course cancellation, the institute is legally obliged to settle the loan principal directly with the financier.",
    steps: [
      {
        step: "Notify Both Coaching Centre and NBFC Simultaneously",
        description:
          "Issue a formal cancellation notice to both the institute billing desk and the customer care of the lending partner (e.g., Bajaj Finserv, Avanse, Propelld, Liquiloans) demanding immediate loan foreclosure.",
      },
      {
        step: "Revoke NACH / e-Mandate via Net Banking",
        description:
          "Log into your bank portal and place a stop-mandate on the recurring auto-debit, citing the formal withdrawal dispute with the primary merchant.",
      },
      {
        step: "Serve Statutory Notice for Credit Score Protection",
        description:
          "Serve an advocate demand notice instructing the NBFC not to report adverse entries to CIBIL / Experian, while holding the coaching centre liable for any ongoing interest debits.",
      },
    ],
    statutoryRule: "RBI Digital Lending Guidelines & CPA 2019 Section 2(47)",
  },
];

export default function CoachingProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(COACHING_PROBLEMS[0].id);

  const currentProblem =
    COACHING_PROBLEMS.find((p) => p.id === activeTab) || COACHING_PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Tab Navigation Header */}
      <div className="border-b border-slate-200 bg-slate-50/80 px-2 sm:px-4 pt-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-1 sm:gap-2 min-w-max pb-3">
          {COACHING_PROBLEMS.map((problem) => {
            const isActive = activeTab === problem.id;
            return (
              <button
                key={problem.id}
                type="button"
                onClick={() => setActiveTab(problem.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-100"
                }`}
              >
                {problem.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-100 text-red-800 mb-2">
            Dispute Scenario
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
            {currentProblem.title}
          </h3>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              How the Dispute Arises
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Statutory Legal Ground
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Recommended Action Steps to Enforce Refund
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center mb-2">
                    {i + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 mb-1.5">{st.step}</p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Rule Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="font-bold text-slate-700">Enforcement Authority:</span>
            <span>{currentProblem.statutoryRule}</span>
          </div>
          <a
            href="#heading-how-to-use"
            className="font-bold text-red-600 hover:text-red-700 hover:underline"
          >
            Start legal notice process →
          </a>
        </div>
      </div>
    </div>
  );
}
