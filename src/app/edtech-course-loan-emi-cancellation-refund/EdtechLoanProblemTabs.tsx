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
    id: "ghosted-cancellation",
    tabLabel: "Ignored Cancellation",
    title: "Ed-Tech Ghosted After Valid Trial Cancellation Request",
    cause:
      "Sales representatives promise a '14-day zero-risk trial' or '100% refund guarantee'. When you submit a cancellation ticket within the trial window, the ed-tech company intentionally stalls responses, claims technical glitches, passes you between relationship managers, or offers useless 'credit points'. Meanwhile, the cooling-off window expires and the third-party NBFC continues drawing monthly EMIs from your bank account.",
    legalBasis:
      "Under Section 2(47) of the Consumer Protection Act, 2019, refusing to honor a statutory refund or misrepresenting trial periods constitutes an Unfair Trade Practice. Furthermore, the Central Consumer Protection Authority (CCPA) Guidelines on Prevention of Misleading Advertisements, 2022 strictly prohibit bait-and-switch tactics. The company is legally mandated to process cancellations within 10 days of notice.",
    steps: [
      {
        step: "Preserve Timestamped Cancellation Proof",
        description:
          "Export your original cancellation email, support ticket ID, and WhatsApp chats with sales counselors showing the exact date you requested course withdrawal within the trial window.",
      },
      {
        step: "Put Lending NBFC on Immediate Notice",
        description:
          "Email the financing partner's Grievance Redressal Officer (GRO) citing your ed-tech cancellation ticket number and declaring the underlying commercial service revoked.",
      },
      {
        step: "Serve Joint Statutory Advocate Demand Notice",
        description:
          "Serve a joint statutory legal notice to both the Ed-Tech corporate office and NBFC under Section 2(11) & Section 2(47) CPA 2019, demanding immediate loan cancellation and full refund.",
      },
    ],
    statutoryRule: "Section 2(47) CPA 2019 & CCPA Guidelines 2022",
  },
  {
    id: "nbfc-harassment",
    tabLabel: "Recovery Harassment",
    title: "NBFC Debt Collectors Harassing You Over Bounced Auto-Debits",
    cause:
      "When you stop maintaining funds in your bank account to prevent wrongful EMI deductions, the NBFC's automated NACH/e-mandate repeatedly presents debits, levying ₹400–₹600 in bounce charges. Soon, aggressive recovery agents start calling repeatedly, contacting family references, threatening police action, and reporting overdue payment remarks to CIBIL / Experian, causing immediate credit score drops.",
    legalBasis:
      "Under the RBI Master Direction on Fair Practices Code (FPC) and RBI Digital Lending Circular (September 2022), Regulated Entities (REs) and their Lending Service Providers (LSPs) are expressly prohibited from using coercive, humiliating, or intrusive debt recovery tactics. Calling before 8:00 AM or after 7:00 PM, harassing relatives, or visiting without prior intimation violates RBI directives. The borrower is entitled to an immediate cessation of collection efforts during an unresolved commercial dispute.",
    steps: [
      {
        step: "Record Harassment Communications",
        description:
          "Log caller phone numbers, timestamps, call recordings, and threatening WhatsApp/SMS messages. Demand the recovery executive's agent ID and agency name.",
      },
      {
        step: "Lodge Escalation on RBI CMS Portal",
        description:
          "File an urgent complaint on the RBI Complaint Management System (cms.rbi.org.in) against the NBFC for violation of Fair Practices Code and Digital Lending guidelines.",
      },
      {
        step: "Demand Immediate CIBIL Dispute Rectification",
        description:
          "Issue a formal statutory notice demanding the lender freeze recovery actions and submit an interim dispute flag to TransUnion CIBIL, Equifax, and CRIF High Mark.",
      },
    ],
    statutoryRule: "RBI Master Direction DNBR (PD) CC.No.054 & RBI Digital Lending Circular 2022",
  },
  {
    id: "subvention-trap",
    tabLabel: "Fake 0% EMI Loan",
    title: "Deceptive 'Zero Cost EMI' & Unapproved Third-Party Loan Mandate",
    cause:
      "During course orientation, sales executives present the payment plan as an 'internal monthly college installment' or 'in-house monthly subscription'. In reality, they take your Aadhaar and PAN under the guise of 'student verification' and disburse a full third-party personal education loan with an NBFC (e.g., Avanse, LiquiLoans, ShopSe, Propelld, Fibe), pocketing the entire upfront fee while saddling you with a rigid credit facility.",
    legalBasis:
      "Under Para 4.1 of the RBI Digital Lending Guidelines, every digital loan requires explicit, unbundled informed consent, along with the mandatory delivery of a standardized Key Fact Statement (KFS) before loan execution. Financing arranged without explicit disclosure that the student is entering into a legally binding NBFC credit contract is voidable for misrepresentation and fraud under Section 17 & 18 of the Indian Contract Act, 1872.",
    steps: [
      {
        step: "Demand Key Fact Statement (KFS) & Sanction Letter",
        description:
          "Call upon the NBFC to produce your digitally signed KFS, borrower agreement, and OTP verification logs showing explicit consent for an education loan.",
      },
      {
        step: "Challenge Contract Validity for Lack of Consent",
        description:
          "Submit a formal repudiation letter highlighting fraudulent inducement, dark patterns, and absence of upfront loan disclosure at the point of sale.",
      },
      {
        step: "Escalate to Banking Ombudsman & e-Jagriti",
        description:
          "If the lender asserts the loan is binding despite the absence of a compliant KFS, file an e-Jagriti consumer complaint for unfair trade practice and damages.",
      },
    ],
    statutoryRule: "Para 4.1 RBI Digital Lending Guidelines & Section 17/18 Indian Contract Act",
  },
  {
    id: "defective-course",
    tabLabel: "Defective Course",
    title: "Course Discontinued, Fake Placement Guarantee & Missing Mentorship",
    cause:
      "Ed-tech platforms frequently advertise 'Guaranteed ₹10 LPA placement', '1-on-1 industry mentorship', and 'live interactive masterclasses'. Once enrolled, students discover that live classes are replaced by pre-recorded outdated videos, scheduled mentors never show up, and the 'placement cell' merely sends mass LinkedIn links. When the student seeks course exit, the firm cites unilateral 'non-refundable' clauses.",
    legalBasis:
      "Under Section 2(11) of the Consumer Protection Act, 2019, any fault, imperfection, or inadequacy in the quality, nature, and manner of performance of a service constitutes 'deficiency in service'. Furthermore, unilateral terms that restrict refunds or allow the ed-tech firm to alter course commitments arbitrarily are classified as 'Unfair Contracts' under Section 2(46) CPA 2019, which Consumer Commissions have express power to declare null and void.",
    steps: [
      {
        step: "Compile Marketing Brochures & Promised Deliverables",
        description:
          "Gather the original admission brochure, sales email pitches, syllabus documentation, and screenshots of live schedule cancellations or absent faculties.",
      },
      {
        step: "Document Material Breach of Service",
        description:
          "Issue a formal dispute letter stating that the failure of live lectures, mentorship, or placement assistance constitutes a fundamental breach of contract.",
      },
      {
        step: "Claim 100% Restitution with Litigation Damages",
        description:
          "Serve an advocate legal notice seeking full restitution of course fees, termination of financing, and compensation for academic loss and emotional distress.",
      },
    ],
    statutoryRule: "Section 2(11) Deficiency in Service & Section 2(46) Unfair Contract CPA 2019",
  },
];

export default function EdtechLoanProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Scrollable Tab Navigation Bar */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/80 p-1.5 sm:p-2 gap-1.5 scrollbar-thin">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-white text-[#DC2626] shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Body */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 bg-red-50 text-[#DC2626] rounded-md inline-block mb-2">
            Dispute Scenario Analysis
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/70 space-y-2">
            <strong className="text-xs uppercase tracking-wider font-extrabold text-slate-500 block">
              What Is Actually Happening (The Commercial Trap)
            </strong>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-red-50/50 p-4 sm:p-5 rounded-xl border border-red-100 space-y-2">
            <strong className="text-xs uppercase tracking-wider font-extrabold text-red-700 block">
              Your Statutory Legal Shield
            </strong>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
            <span className="inline-block text-[11px] font-bold text-red-800 bg-red-100/70 px-2 py-0.5 rounded mt-2">
              Governing Law: {currentProblem.statutoryRule}
            </span>
          </div>
        </div>

        {/* 3 Step Action Sequence */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Immediate 3-Step Action Playbook For This Scenario:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#111827] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 truncate">
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

        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            Facing this exact issue with BYJU&apos;S, UpGrad, Simplilearn, or an NBFC partner?
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-red-600 font-bold hover:underline"
          >
            Review Advocate Legal Notice Drafting Schedule →
          </Link>
        </div>
      </div>
    </div>
  );
}
