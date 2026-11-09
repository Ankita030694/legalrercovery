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
    id: "visa-rejected",
    tabLabel: "Visa Rejected",
    title: "Visa Refused by Embassy: Consultant Forfeits Complete Service Fees",
    cause:
      "A student hires an overseas education agent for university admission and study visa processing (Canada, UK, USA, Australia, Germany, etc.). The study visa gets rejected due to faulty Statement of Purpose (SOP) drafted by the agent, incorrect financial documentation, or failure to disclose past refusals. The consultant retains ₹1,00,000 to ₹3,50,000 claiming 'we did our work, visa decisions rest solely with embassies.'",
    legalBasis:
      "While embassies decide visa outcomes, consumer courts across India (including NCDRC rulings) hold that retaining 100% of consultancy fees when the primary objective failed constitutes an unfair trade practice under Section 2(47) and deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. If the rejection was triggered by the agent's negligent paperwork or omission, the consultant is liable for a full refund plus embassy visa charges and compensation.",
    steps: [
      {
        step: "Procure Official Visa Refusal Letter",
        description:
          "Secure the official refusal letter issued by the immigration authority (e.g. IRCC GCKey notes, UKVI refusal letter, US 214(b) notice) identifying specific grounds of refusal.",
      },
      {
        step: "Audit Agent's Work Product & Filings",
        description:
          "Cross-examine the SOP, financial declarations, and application forms submitted by the agent against the refusal reasons to identify consultant errors or negligent disclosures.",
      },
      {
        step: "Issue Advocate Demand Notice for Refund",
        description:
          "Serve a formal statutory notice demanding refund of consultancy fees and unutilised third-party charges within 15 calendar days under threat of e-Jagriti consumer litigation.",
      },
    ],
    statutoryRule: "CPA 2019 Section 2(11) & Pioneer Institute Precedent",
  },
  {
    id: "no-refund-clause",
    tabLabel: "No-Refund Clause",
    title: "Consultant Relies on Fine-Print 'Non-Refundable' Retainer Clause",
    cause:
      "When a student demands a refund after the agent fails to apply on time or delivers abysmal counseling, the agent points to a boilerplate clause in the registration agreement stating 'Consultancy fees are strictly non-refundable under any circumstances whatsoever.'",
    legalBasis:
      "Under Section 2(46) and Section 47 of the Consumer Protection Act, 2019, one-sided, unilateral contracts that impose unreasonable charges or deny refunds upon non-performance are legally void as 'unfair contracts'. The Supreme Court in Pioneer Urban Land and Central Inland Water Transport Corp has established that unconscionable clauses forced upon consumers lacking bargaining power cannot override statutory recovery rights.",
    steps: [
      {
        step: "Collate Written Service Retainer Agreement",
        description:
          "Isolate the payment receipt, terms sheet, and consultant declaration. Check whether signed copies were provided or merely printed on invoices after payment.",
      },
      {
        step: "Demonstrate Non-Delivery or Deficient Performance",
        description:
          "Catalogue instances where the agent failed to fulfill contractual milestones: missed university intake deadlines, wrong course selection, or unaccredited institutions.",
      },
      {
        step: "Cite Section 47 CPA 2019 in Legal Notice",
        description:
          "Explicitly declare the 'no-refund' clause as void and unenforceable under Section 47 CPA 2019 and Section 23 of the Indian Contract Act, 1872.",
      },
    ],
    statutoryRule: "Section 2(46) & Section 47 Consumer Protection Act 2019",
  },
  {
    id: "admission-failure",
    tabLabel: "Admission Failed",
    title: "Agent Failed to Secure Offer Letter or Targeted Unaccredited Colleges",
    cause:
      "The overseas consultant collected hefty initial retainer fees promising admission into accredited public universities. Instead, the agent failed to meet university intake deadlines, applied to unranked private diploma mills, or failed to secure any Letter of Acceptance (LOA) altogether, causing the student to lose an entire academic year.",
    legalBasis:
      "Failing to secure promised admission after accepting professional retainers is textbook deficiency in service under Section 2(11) CPA 2019. Advertising or guaranteeing admissions to universities without authorization or failing to disclose college eligibility requirements constitutes misleading advertisement under Section 2(28) and unfair trade practice under Section 2(47).",
    steps: [
      {
        step: "Assemble Intake Deadlines & Written Undertakings",
        description:
          "Preserve all WhatsApp chats, emails, brochures, and application logs showing the universities promised and the deadlines the consultant missed.",
      },
      {
        step: "Verify University Portal Submissions",
        description:
          "Request application reference numbers directly from the target universities to verify whether the agent even submitted an application on your behalf.",
      },
      {
        step: "Claim 100% Refund Plus Damages for Lost Academic Year",
        description:
          "Issue a legal notice demanding full refund of consultancy fees plus compensation for loss of an academic career year and psychological stress.",
      },
    ],
    statutoryRule: "CPA 2019 Section 2(11) & Section 2(28) Misleading Representation",
  },
  {
    id: "withheld-documents",
    tabLabel: "Withheld Documents",
    title: "Consultant Refuses to Return Original Marksheets, Degrees, or Passport",
    cause:
      "To exert coercive leverage and prevent students from migrating to another counselor or applying independently, unscrupulous agents withhold original educational degrees, transcripts, IELTS scorecards, or original passports, demanding additional 'cancellation fees' or 'release penalties'.",
    legalBasis:
      "Retaining a student's original documents or passport is strictly illegal under Indian law. A passport is property of the Central Government under the Passports Act, 1967 (Section 12), and no private agency has a lien over personal travel documents. Withholding educational marksheets to extort money amounts to wrongful restraint (Section 126 BNS 2023) and extortion / criminal breach of trust (Section 316 BNS 2023).",
    steps: [
      {
        step: "Deliver Immediate Written Demand for Document Return",
        description:
          "Send an urgent formal demand via email and WhatsApp requiring the immediate, unconditional release of all original documents within 48 hours.",
      },
      {
        step: "Serve Advocate Legal Notice with Criminal Penal Warnings",
        description:
          "Put the consultant on notice for offences under the Passports Act, 1967 and criminal breach of trust under Section 316 BNS 2023.",
      },
      {
        step: "Lodge Police Complaint & Intimate Regional Passport Office",
        description:
          "File an immediate grievance with the local police station and intimate the Regional Passport Office (RPO) regarding unlawful detention of passport.",
      },
    ],
    statutoryRule: "Passports Act 1967 Section 12 & Bharatiya Nyaya Sanhita 2023 Section 316",
  },
  {
    id: "unregistered-fraud",
    tabLabel: "Bogus Agent Scam",
    title: "Consultant Closed Office, Ghosted Student, or Lacked Mandatory Licensing",
    cause:
      "Unregistered travel or visa agents operating without mandatory state licenses (e.g. Punjab Travel Professionals Regulation Act, 2014 or MEA Emigration clearance) collect substantial sums in cash or unverified UPI accounts and shut their offices or block phone numbers when visas fail.",
    legalBasis:
      "Operating an overseas consultancy without state registration or MEA clearance violates statutory licensing laws. Collecting money under false pretenses of guaranteed foreign work or study visas attracts Section 318 BNS 2023 (cheating) and Section 316 BNS 2023 (criminal breach of trust). Victims can simultaneously pursue consumer recovery and criminal prosecution.",
    steps: [
      {
        step: "Establish Legal Ownership via GSTIN / MCA / Local Rent Records",
        description:
          "Trace the proprietor or directors' legal identities using GST registration numbers, bank account IFSC codes, UPI merchant IDs, or local trade licensing.",
      },
      {
        step: "Dispatch Legal Demand Notice to Registered Address & Partners",
        description:
          "Serve a comprehensive legal notice demanding restitution with personal liability warnings against individual proprietors/directors.",
      },
      {
        step: "Lodge Cyber Crime & Economic Offences Wing (EOW) Complaint",
        description:
          "Report the scam on the National Cyber Crime Reporting Portal (cybercrime.gov.in) and file a complaint with the District Police Economic Offences Wing.",
      },
    ],
    statutoryRule: "BNS 2023 Section 318 (Cheating) & State Travel Regulation Acts",
  },
];

export default function StudyAbroadProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Tab Bar */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto scrollbar-thin">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-colors flex-shrink-0 border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-2">
            {activeProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {activeProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
              The Dispute Scenario
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeProblem.cause}
            </p>
          </div>

          <div className="bg-red-50/50 rounded-xl p-4 sm:p-5 border border-red-200/80">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-2">
              Statutory Basis &amp; Consumer Rights
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Step-by-Step Resolution Action */}
        <div className="border-t border-slate-100 pt-5">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-4">
            Actionable Legal Recovery Protocol
          </h4>
          <div className="space-y-3">
            {activeProblem.steps.map((st, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    {st.step}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
