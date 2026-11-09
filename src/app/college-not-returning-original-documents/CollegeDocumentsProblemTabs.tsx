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
    id: "mid-course-withdrawal",
    tabLabel: "Midway Course Withdrawal",
    title: "College Demanding Remaining Years' Fees to Release Original Certificates",
    cause:
      "When a student decides to discontinue or transfer after Year 1 or Year 2 (often upon clearing another competitive exam or due to financial hardship), college administrations routinely lock up Class 10/12 original mark sheets, transfer certificates, and migration documents. Management claims the student must deposit the entire tuition fee for the remaining unstudied semesters (e.g., remaining 3 years of B.Tech or MBBS) to obtain a 'No Objection Certificate' (NOC) and retrieve their certificates.",
    legalBasis:
      "Under Clause 5 of the UGC Fee Refund & Student Entitlement Regulations and the Madras High Court judgment in B. Archana v. SRM Institute of Science and Technology, educational institutions have zero legal authority or lien to hold certificates as security for future fees under Section 171 of the Indian Contract Act, 1872. The Supreme Court and NCDRC have affirmed that charging fees for semesters where no education was imparted constitutes unfair trade practice and unjust enrichment.",
    steps: [
      {
        step: "Submit Written Notice Demanding Unconditional Return",
        description:
          "Submit a formal registered email and written letter to the Registrar and Principal quoting UGC Clause 5, demanding certificate release within 48 hours without conditional fee clearance.",
      },
      {
        step: "File Formal Complaint on UGC e-Samadhan Portal",
        description:
          "Register a Level-1 institutional complaint on samadhan.ugc.ac.in (or AICTE Grievance Portal for engineering colleges) attaching proof of admission and the college's unlawful demand note.",
      },
      {
        step: "Dispatch Advocate Statutory Legal Demand Notice",
        description:
          "If the institution refuses release within 7 days, issue a formal statutory advocate legal notice warning of High Court Mandamus proceedings under Article 226 and an e-Jagriti consumer complaint claiming career loss damages.",
      },
    ],
    statutoryRule: "UGC Notification Clause 5 & Madras HC in B. Archana v. SRM Institute (2017)",
  },
  {
    id: "admission-cancellation",
    tabLabel: "Admission Cancellation",
    title: "Original Certificates Trapped After Early Admission Cancellation",
    cause:
      "A student secures provisional admission in College A, submitting original mark sheets and migration certificates during verification. Subsequently, the student receives an allotment in a premier government or preferred institution (via JEE, NEET, or CUET counseling) and requests cancellation. College A deliberately delays returning the documents or falsely asserts that 'documents are sealed at the central affiliating university' until the admission deadline lapses.",
    legalBasis:
      "UGC mandates that educational institutions cannot insist on taking custody of original certificates during admission. Higher educational institutions (HEIs) are permitted only to physically inspect original documents and immediately return them, retaining attested photocopies. Withholding documents to coerce a student into forfeiting their preferred seat violates UGC guidelines and constitutes gross deficiency of service under Section 2(11) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Obtain Written Acknowledgement of Cancellation Request",
        description:
          "Submit the official withdrawal form in person or via registered email, capturing date-stamped proof of submission before the session commencement cut-off date.",
      },
      {
        step: "Escalate to Affiliating University Dean & Student Welfare Officer",
        description:
          "Mark a direct complaint to the Vice-Chancellor and Dean of College Development Council of the parent university to which the college is affiliated.",
      },
      {
        step: "Issue Urgent Statutory Advocate Notice for 48-Hour Surrender",
        description:
          "Serve an urgent 48-hour legal demand notice highlighting that the deliberate retention threatens the candidate's impending admission cut-off, exposing the management to personal damages.",
      },
    ],
    statutoryRule: "UGC Fee Refund Policy 2024-2026 & Section 2(11) Consumer Protection Act 2019",
  },
  {
    id: "disputed-fines-dues",
    tabLabel: "Disputed Dues & Fines",
    title: "Degree or Transfer Certificate Blocked Over Disputed Hostel, Lab, or Attendance Fines",
    cause:
      "At the completion of the degree or upon exit, the accounts or hostel administration refuses to clear the student's 'No Dues Certificate', alleging arbitrary library replacement charges, inflated hostel damage penalties, broken laboratory equipment fees, or unapproved attendance shortage fines. Original degree certificates, cumulative grade sheets, and character certificates are withheld as leverage.",
    legalBasis:
      "Academic degrees and qualifications earned by a student are their personal constitutional entitlement under Article 21. Colleges cannot exercise a possessory lien over educational credentials for disputed monetary debits. If a college claims property damage or hostel arrears, its remedy lies in civil recovery, not in hostage-taking of educational qualifications that block employment or higher education.",
    steps: [
      {
        step: "Demand Itemized Audit of Disputed Charges",
        description:
          "Submit a formal demand for an itemized bill, invoice receipts, and inventory logs justifying the disputed fine, disputing arbitrary penalty rates.",
      },
      {
        step: "Tender Disputed Amount 'Under Protest' If Deadlines Are Immediate",
        description:
          "If an employment joining or foreign visa deadline is critical, deposit the disputed amount with an explicit written endorsement stating 'Paid Strictly Under Protest Without Prejudice'.",
      },
      {
        step: "Serve Legal Notice Demanding Document Release & Fee Restitution",
        description:
          "Serve a statutory legal demand notice on the Principal demanding the immediate release of certificates and full refund of any coerced penalty plus compensation.",
      },
    ],
    statutoryRule: "Section 171 Indian Contract Act, 1872 & Delhi HC in Ashwini Kumar v. GGSIPU (2020)",
  },
  {
    id: "private-deemed-bonds",
    tabLabel: "Private Deemed University Bonds",
    title: "Private University Enforcing Unilateral 'Document Retention Bond' or Agreement",
    cause:
      "Private deemed-to-be universities and autonomous medical or engineering institutes often force students and parents to execute an indemnity bond or sign a prospectus clause agreeing that 'original certificates will remain with the university until completion of the entire course' or that 'breaching the bond requires paying ₹5 to ₹15 lakhs'.",
    legalBasis:
      "Under Section 23 of the Indian Contract Act, 1872, any contract term opposed to public policy or contrary to statutory regulatory directives (such as UGC and AICTE regulations) is void ab initio. The Supreme Court has repeatedly held that educational institutions cannot enforce unconscionable, one-sided bond clauses against students.",
    steps: [
      {
        step: "Procure Copy of Signed Admission Undertaking",
        description:
          "Collect the admission application, prospectus, and any signed undertaking to identify unilateral and unenforceable forfeiture clauses.",
      },
      {
        step: "Invoke UGC Deemed-to-be University Regulations",
        description:
          "Cite UGC (Institutions Deemed to be Universities) Regulations, which empower the central commission to revoke deemed status for non-compliance with student welfare norms.",
      },
      {
        step: "Serve Pre-Litigation Notice Prior to High Court Writ",
        description:
          "Serve an advocate statutory notice citing High Court precedents. If the university fails to return documents within 15 days, file a Writ of Mandamus before the High Court.",
      },
    ],
    statutoryRule: "Section 23 Indian Contract Act, 1872 & UGC Deemed University Regulations",
  },
];

export default function CollegeDocumentsProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* ARIA-Compliant Scrollable Tab Navigation */}
      <div
        role="tablist"
        aria-label="Document Retention Dispute Scenarios"
        className="flex space-x-2 border-b border-slate-200 pb-3 overflow-x-auto select-none"
      >
        {PROBLEMS.map((prob) => {
          const isSelected = prob.id === activeTab;
          return (
            <button
              key={prob.id}
              role="tab"
              id={`tab-${prob.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${prob.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTab(prob.id)}
              className={`shrink-0 px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-red-600 text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {prob.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content */}
      <div
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="mt-5 space-y-4"
      >
        <div>
          <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
            Statutory Dispute Scenario
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5 text-xs sm:text-sm">
              <span className="text-red-600">✕</span> How Colleges Justify Withholding Documents
            </h4>
            <p className="leading-relaxed">{current.cause}</p>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/80 p-4 rounded-xl">
            <h4 className="font-bold text-emerald-950 mb-1.5 flex items-center gap-1.5 text-xs sm:text-sm">
              <span className="text-emerald-700">✓</span> The Governing Legal Authority &amp; UGC Mandate
            </h4>
            <p className="text-emerald-900 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        {/* 3 Step Action Blueprint */}
        <div className="pt-2">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5">
            Recommended Statutory Action Steps:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center mb-2">
                    {i + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {st.step}
                  </strong>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Citation Box */}
        <div className="p-3 bg-slate-100 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="font-semibold text-slate-700">
            <strong>Applicable Authority:</strong> {current.statutoryRule}
          </span>
          <Link
            href="/send-a-legal-notice/school-college-fee-refund-admission-cancellation"
            className="text-red-700 font-bold hover:underline shrink-0"
          >
            Explore College Fee Refund Notice →
          </Link>
        </div>
      </div>
    </div>
  );
}
