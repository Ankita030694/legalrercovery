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
    id: "study-visa",
    tabLabel: "Study Visa Refusal",
    title: "Student Visa Rejected or College Offer Letter Not Obtained",
    cause:
      "Study abroad consultants routinely take hefty advance retainers (₹50,000 to ₹3,00,000) promising guaranteed admission and visa grant. When the university rejects the application, or the foreign high commission/embassy refuses the student visa due to poor documentation prepared by the consultant, the agency refuses to refund the service charge, falsely claiming that embassy visa decisions are beyond their control.",
    legalBasis:
      "While visa grant is sovereign to foreign consulates, admission handling and advisory services constitute commercial services under Section 2(42) of the Consumer Protection Act, 2019. The National Consumer Commission (NCDRC) in 'M/s Oceanic Consultants v. Ramandeep Singh' held that retaining consultation fees when admission is not secured or documents are deficient constitutes deficiency in service under Section 2(11) and unfair trade practice under Section 2(47).",
    steps: [
      {
        step: "Collate Payment Receipts & College Correspondence",
        description:
          "Preserve bank statements showing debit to the consultant, payment receipts, formal retainership agreement, and direct refusal correspondence received from the foreign embassy or university.",
      },
      {
        step: "Deliver Written Demand for Accounting & Refund",
        description:
          "Serve a formal written email to the agency director demanding an itemised statement of actual administrative expenses incurred and an immediate refund of the unspent consultation fee within 7 days.",
      },
      {
        step: "Issue Advocate Statutory Legal Demand Notice",
        description:
          "If the agency refuses or offers an arbitrary credit voucher, issue a statutory 15-day advocate notice under CPA 2019 threatening an e-Jagriti consumer complaint for full refund plus 12% interest and compensation.",
      },
    ],
    statutoryRule: "Section 2(11) CPA 2019 & NCDRC Study Abroad Fee Jurisprudence",
  },
  {
    id: "fake-work-permit",
    tabLabel: "Bogus Work Permit",
    title: "Fake Job Offer Letter, Bogus LMIA or Forged European Work Visa",
    cause:
      "Unscrupulous immigration agents charge candidates ₹2,00,000 to ₹10,00,000 promising overseas employment in Canada, UK, Poland, Germany, or Gulf nations. Candidates are handed fabricated Labour Market Impact Assessments (LMIA), counterfeit sponsor letters, or bogus appointment contracts. When the embassy flags the documents as fraudulent or imposes a multi-year entry ban, the agent evades accountability.",
    legalBasis:
      "Issuing forged employer documents constitutes criminal cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS) and criminal breach of trust under Section 316 BNS. Furthermore, recruiting citizens for overseas employment without a valid registration certificate issued by the Protector General of Emigrants (PGE) violates Section 10 and Section 24 of the Emigration Act, 1983, carrying cognizable criminal liability.",
    steps: [
      {
        step: "Secure Independent Verification of Job Documents",
        description:
          "Verify the sponsor license number with the destination country's official immigration database (e.g., UK Visas and Immigration Sponsor Register, Canadian Job Bank) to prove forgery.",
      },
      {
        step: "Draft Dual-Pronged Advocate Demand Notice",
        description:
          "Serve a stern legal notice demanding immediate refund of total collected amounts within 15 days, explicitly detailing Section 318 BNS criminal exposure and PGE recruitment violations.",
      },
      {
        step: "Lodge Police Complaint & e-Migrate Grievance",
        description:
          "File an online complaint on the MEA MADAD / e-Migrate portal (emigrate.gov.in) and register a formal written complaint with the Economic Offences Wing (EOW) or local Police Cyber Crime Cell.",
      },
    ],
    statutoryRule: "Section 318 BNS (Cheating) & Section 24 Emigration Act 1983",
  },
  {
    id: "pr-express-entry",
    tabLabel: "PR Points Misrepresentation",
    title: "Permanent Residency Retainer Forfeited Without Nomination",
    cause:
      "Immigration consultants lure clients into signing multi-stage retainers (₹2,50,000 to ₹6,00,000) for Canadian Express Entry, Australian PR (Subclass 189/190), or European Golden Visas by inflating Comprehensive Ranking System (CRS) points or promising guaranteed provincial nomination. After years of inactivity and profile expiry, the consultant refuses refunds, claiming file creation charges.",
    legalBasis:
      "Under Section 2(47) of the Consumer Protection Act, 2019, making misleading statements about immigration chances or eligibility criteria constitutes an unfair trade practice. In 'WWICS Ltd. v. Gurpreet Singh', State Consumer Commissions held that immigration agencies cannot pocket exorbitant professional fees when they knew from the outset that the candidate's CRS score was below the competitive threshold.",
    steps: [
      {
        step: "Export Official Immigration Portal Logs",
        description:
          "Obtain login credentials or screenshots of your profile on IRCC (Canada) or SkillSelect (Australia) to establish whether an Expression of Interest (EOI) was ever actually submitted.",
      },
      {
        step: "Challenge Unfair Contract Terms in Writing",
        description:
          "Issue a formal dispute letter rejecting internal administrative deductions and invoking Section 2(46) CPA 2019 regarding unconscionable contract terms.",
      },
      {
        step: "Serve Advocate Statutory Demand for Restitution",
        description:
          "Issue a formal advocate legal notice for complete restitution, interest, and mental harassment damages, followed by an online consumer petition on e-Jagriti.",
      },
    ],
    statutoryRule: "Section 2(46) & Section 2(47) Consumer Protection Act 2019",
  },
  {
    id: "non-refundable-clause",
    tabLabel: "Non-Refundable Clause Trap",
    title: "Agency Cites 'No Refund Under Any Circumstance' Agreement Clause",
    cause:
      "Almost all immigration agreements contain fine-print clauses stating: 'Registration and processing charges once paid are non-refundable under any circumstances whatsoever, even if the application is rejected or cancelled.' When candidates cancel due to delays or embassy rejection, agencies brandish this clause to deny even partial refunds.",
    legalBasis:
      "Under Section 2(46) of the Consumer Protection Act, 2019, any contractual term that imposes unreasonable detriment or creates a significant imbalance in the rights of the consumer is defined as an 'unfair contract'. The Supreme Court in 'Central Inland Water Transport Corp. v. Brojo Nath Ganguly' and consumer commissions across India have established that boilerplate non-refundable clauses in standard form contracts are void ab initio and unenforceable in law.",
    steps: [
      {
        step: "Review Retainer Agreement for Statutory Violations",
        description:
          "Identify clauses that impose unilateral penalties or deny refund rights while relieving the consultant of any performance guarantees.",
      },
      {
        step: "Invoke Section 2(46) CPA 2019 in Legal Notice",
        description:
          "Have an advocate prepare a legal demand notice specifically challenging the non-refundable clause as an unfair contract under Section 2(46) and Section 2(47) of the CPA 2019.",
      },
      {
        step: "Seek Annulment & Full Award Before District Commission",
        description:
          "File on e-Jagriti; consumer commissions routinely declare such clauses unenforceable and direct 100% refund alongside interest and litigation costs.",
      },
    ],
    statutoryRule: "Section 2(46) CPA 2019 (Unfair Contracts) & Supreme Court Precedents",
  },
  {
    id: "ghosting-withholding",
    tabLabel: "Document Withholding / Ghosting",
    title: "Consultant Vanishes or Illegally Withholds Original Passport & Degrees",
    cause:
      "In the most egregious disputes, visa agents withhold original Indian passports, educational degree certificates, and mark sheets, conditioning their release upon the payment of extortionate 'clearance fees'. In other instances, after collecting cash or bank transfers, the agent shuts the physical office, disconnects phone lines, and vanishes completely.",
    legalBasis:
      "Under Section 3 of the Passports Act, 1967, an Indian passport is the sovereign property of the Government of India, and no private agent or agency has any legal right to detain it. Unlawful detention of a passport is a cognizable criminal offence. Retaining educational documents constitutes criminal breach of trust under Section 316 BNS, while sudden absconding triggers Section 318 BNS (cheating).",
    steps: [
      {
        step: "Send Urgent 48-Hour Passport Return Notice",
        description:
          "Serve an emergency legal demand notice demanding the unconditional release of the original passport and academic certificates within 48 hours under Section 3 Passports Act.",
      },
      {
        step: "File Immediate Police Complaint & FIR",
        description:
          "Submit a formal complaint to the District Superintendent of Police or Commissioner of Police under Sections 316 and 318 of BNS and Section 12 of the Passports Act, 1967.",
      },
      {
        step: "Intimate Regional Passport Office (RPO)",
        description:
          "Report the illegal detention to the nearest Regional Passport Officer to prevent misuse of the passport and seek duplicate issuance if necessary.",
      },
    ],
    statutoryRule: "Section 3 & 12 Passports Act 1967 & Section 316 BNS",
  },
];

export default function VisaAgentProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);

  const activeProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 lg:p-7 space-y-6">
      {/* ARIA Tab Buttons */}
      <div
        role="tablist"
        aria-label="Visa Agent Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTabId;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${problem.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTabId(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${activeProblem.id}`}
        aria-labelledby={`tab-${activeProblem.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 border border-red-200/60 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Statutory Benchmark:</span>
            <span>{activeProblem.statutoryRule}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            {activeProblem.title}
          </h3>
        </div>

        {/* Diagnostic Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
              The Dispute Trigger &amp; Consultant Malpractice:
            </strong>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeProblem.cause}
            </p>
          </div>

          <div className="p-4 bg-emerald-50/60 border border-emerald-200/70 rounded-xl space-y-1.5">
            <strong className="text-xs sm:text-sm font-bold text-emerald-950 block">
              Statutory Basis &amp; Consumer Rights:
            </strong>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              {activeProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Step-by-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
            Recommended Action Sequence for This Dispute:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeProblem.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 bg-white border border-slate-200/80 rounded-xl shadow-xs space-y-1"
              >
                <span className="text-[11px] font-black text-red-600 block">
                  Step {i + 1}: {st.step}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contextual Callout */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
          <span className="text-slate-600">
            Need an advocate demand notice served to your immigration consultant?
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-blue-700 hover:text-blue-900 underline font-semibold shrink-0"
          >
            Review Advocate Notice Charges &amp; Speed Post Dispatch →
          </Link>
        </div>
      </div>
    </div>
  );
}
