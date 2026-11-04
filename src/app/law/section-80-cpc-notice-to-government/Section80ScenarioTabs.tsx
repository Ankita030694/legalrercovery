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
    id: "contractor-bill-pending",
    tabLabel: "Contractor Bill Pending",
    title: "Government Department (PWD / CPWD / Irrigation) Withholding Running or Final Bills",
    cause:
      "After a civil or supply contractor completes the work order and the Junior/Assistant Engineer records entries in the Measurement Book (MB), bills often stall at the Executive Engineer or Pay & Accounts Office (PAO) citing 'non-availability of budget grant', 'audit objection', or 'administrative sanction pending'. Contractors wait months fearing that legal action will hurt future tenders, while their 3-year limitation clock quietly expires.",
    legalBasis:
      "Under Section 70 and Section 73 of the Indian Contract Act, 1872, read with Section 80 of the Code of Civil Procedure, 1908, lack of internal departmental budget allocation is never a valid legal defense to withhold payment for accepted work. The Supreme Court in Surya Constructions v. State of Uttar Pradesh (2019) held that where measurement and work completion are undisputed, the State cannot act arbitrarily to withhold admitted contractor bills.",
    steps: [
      {
        step: "Secure Certified Measurement Book (MB) & Completion Certificate",
        description:
          "Obtain copies of the final Measurement Book abstract, Work Completion Certificate, and GST tax invoices acknowledged by the Subdivision/Division office (use RTI if copies are withheld).",
      },
      {
        step: "Serve Section 80(1) Notice on Secretary & District Collector",
        description:
          "Dispatch a formal statutory notice under Section 80 CPC to the Chief Secretary / Departmental Secretary AND the District Collector, copying the Chief Engineer and Executive Engineer.",
      },
      {
        step: "Institute Commercial Suit or MSME ODR After 60 Days",
        description:
          "Upon expiry of the 2-month statutory notice window, file a summary/commercial recovery suit (claiming Section 15(2) Limitation Act exclusion) or initiate MSME ODR proceedings if Udyam-registered.",
      },
    ],
    statutoryRule: "Section 80(1) CPC + Section 15(2) Limitation Act, 1963",
  },
  {
    id: "emd-security-forfeiture",
    tabLabel: "EMD / Security Deposit Stuck",
    title: "Unlawful Retention or Forfeiture of Earnest Money (EMD) & Performance Security",
    cause:
      "Government tendering authorities frequently refuse to release the 5%–10% Security Deposit (SD) or Performance Bank Guarantee (PBG) even after the Defect Liability Period (DLP) has expired. Alternatively, departments summarily forfeit EMD alleging tender non-compliance without issuing a show-cause notice or proving actual financial loss.",
    legalBasis:
      "Under Section 74 of the Indian Contract Act, 1872, and the Supreme Court ruling in Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136, a government authority cannot forfeit Earnest Money or Security Deposit as a windfall penalty where no actual loss is suffered or proved. Once the Defect Liability Period expires without notified defects, retention of security money becomes unlawful enrichment.",
    steps: [
      {
        step: "Document Expiry of Defect Liability Period (DLP)",
        description:
          "Compile the tender terms, date of virtual completion, DLP expiry date, and 'No-Defect / No-Demand' clearance letters from the site engineer.",
      },
      {
        step: "Issue Section 80 Notice Challenging Arbitrary Forfeiture",
        description:
          "Serve a Section 80 CPC notice citing Kailash Nath Associates v. DDA, demanding release of the EMD/FDR/Bank Guarantee along with 18% commercial interest within 60 days.",
      },
      {
        step: "Seek Restitution & Interest in Civil / Commercial Court",
        description:
          "If the department fails to release the deposit within two months, file a suit for recovery of retained security deposit with pendente lite interest and full litigation costs.",
      },
    ],
    statutoryRule: "Section 74 Contract Act + Kailash Nath v. DDA (2015) 4 SCC 136",
  },
  {
    id: "psu-vs-department",
    tabLabel: "PSU vs Govt Department",
    title: "Suing a Public Sector Undertaking (NTPC, BHEL, ONGC, NHAI) vs a Government Ministry",
    cause:
      "Vendors often confuse a Government Department (e.g., CPWD, Ministry of Defence, Indian Railways, State PWD) with a Public Sector Undertaking (PSU) incorporated as a company (e.g., NTPC Ltd., BHEL, SAIL, Coal India, GAIL) or a statutory corporation. Serving the wrong entity or omitting the parent Ministry when required leads to technical objections in court.",
    legalBasis:
      "Strictly speaking, a PSU incorporated under the Companies Act has a distinct corporate personality separate from the 'Government' under Section 79 & Section 80 CPC, even if it is 'State' under Article 12 of the Constitution. However, where a statutory body exercises sovereign functions or where a contract involves a Ministry alongside a PSU, serving a composite 60-day notice on both the PSU Managing Director and the Administrative Ministry Secretary insulates the suit from any preliminary threshold objection.",
    steps: [
      {
        step: "Verify Legal Constitution of the Buyer Entity",
        description:
          "Check the work order / PO header: is the buyer the 'President of India / Governor of State' (Govt Dept), a Statutory Authority (e.g., NHAI, DDA), or a Government Company (Ltd.)?",
      },
      {
        step: "Check Parent Statute for Special Notice Clauses",
        description:
          "Many statutory bodies (Municipal Corporations, Port Trusts, Development Authorities) have their own statutory notice clauses (e.g., 30 or 60 days) mirrored on Section 80 CPC.",
      },
      {
        step: "Serve Dual Notice on Company Secretary / MD & Ministry",
        description:
          "For PSUs, serve a 15-to-60 day demand notice on the Managing Director / Company Secretary at the registered office, and copy the Secretary of the parent Ministry if government funds are involved.",
      },
    ],
    statutoryRule: "Section 79 & 80 CPC + Distinct Corporate Personality Rule",
  },
  {
    id: "urgent-injunction-80-2",
    tabLabel: "Urgent Relief s.80(2)",
    title: "Stopping Imminent Bank Guarantee Encashment, Blacklisting or Demolition Without Waiting 60 Days",
    cause:
      "If a government department threatens to encash your unconditional Bank Guarantee tomorrow, blacklist your firm without a hearing, or demolish a structure within 48 hours, waiting 2 months under Section 80(1) CPC would render the entire suit infructuous.",
    legalBasis:
      "Inserted by the CPC (Amendment) Act, 1976, Section 80(2) CPC creates a vital statutory exception: a suit for obtaining an urgent or immediate relief against the Government or a public officer may be instituted WITH THE LEAVE OF THE COURT without serving the two-month notice. However, the court cannot grant interim stay ex-parte; it must issue an immediate short-notice hearing to the Government counsel before passing an interim order.",
    steps: [
      {
        step: "Draft Plaint Along With Separate Section 80(2) Leave Application",
        description:
          "Prepare the suit plaint accompanied by a dedicated interlocutory application under Section 80(2) CPC demonstrating extreme, irreversible urgency.",
      },
      {
        step: "Serve Advance Copy on Government Standing Counsel",
        description:
          "Serve an advance copy of the plaint, Section 80(2) application, and Order XXXIX Rule 1 & 2 stay application on the Nominated Government Standing Counsel / Government Pleader.",
      },
      {
        step: "Obtain Court Leave & Bi-Parte Interim Protection",
        description:
          "Satisfy the judge that waiting 60 days will cause irreparable injury. Once leave is granted and the Government Pleader is heard, the court can pass an interim injunction.",
      },
    ],
    statutoryRule: "Section 80(2) CPC (Urgent Leave Exception — 1976 Amendment)",
  },
  {
    id: "msme-gov-procurement",
    tabLabel: "MSME Govt Tender Dues",
    title: "Udyam-Registered MSME Recovering Delayed Payments From Government Departments & PSUs",
    cause:
      "Central Ministries, State Departments, and CPSEs are mandated to procure at least 25% of their annual goods and services from Micro and Small Enterprises (MSEs) via GeM (Government e-Marketplace). Yet government buyers routinely delay invoice payments beyond 45 days and claim that contract clauses prohibit interest claims.",
    legalBasis:
      "Sections 15 to 24 of the MSMED Act, 2006 have overriding effect over all government tender conditions and contract clauses banning interest. Any government department or PSU that fails to pay an MSE supplier within 45 days of acceptance (or deemed acceptance within 15 days of delivery) is statutorily liable to pay compound interest with monthly rests at 3 times the RBI Bank Rate. An MSE can serve a legal notice and file directly on the MSME ODR Portal without waiting for a civil suit.",
    steps: [
      {
        step: "Download GeM Consignee Receipt & Acceptance Certificate (CRAC)",
        description:
          "Extract the GeM CRAC or physical store receipt proving the exact date of delivery and deemed acceptance under Section 2(b) of the MSMED Act.",
      },
      {
        step: "Serve Composite Section 80 CPC + Section 16 MSMED Demand Notice",
        description:
          "Serve a formal notice on the Head of Department / PSU MD demanding principal plus 3x RBI compound interest, citing the overriding mandate of Section 24 MSMED Act.",
      },
      {
        step: "Escalate to MSME ODR Portal for Binding Arbitration",
        description:
          "If unpaid within 15–60 days, lodge an online reference on the MSME ODR Portal for statutory conciliation and time-bound arbitration.",
      },
    ],
    statutoryRule: "Sections 15, 16, 18 & 24 MSMED Act, 2006 + GeM Mandate",
  },
];

export default function Section80ScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const selectedScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Interactive Government Dispute Matrix
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific Government or PSU Dispute Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any scenario below to inspect the departmental bottleneck, governing Supreme Court rule, and 3-step recovery action:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Section 80 CPC Government Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              role="tab"
              id={`tab-${scenario.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${scenario.id}`}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedScenario.id}`}
        aria-labelledby={`tab-${selectedScenario.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedScenario.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedScenario.statutoryRule}
          </span>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Departmental Bottleneck &amp; Cause
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedScenario.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Legal Grounds &amp; Precedent
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedScenario.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Statutory Fix For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedScenario.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
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

        {/* Quick Dispute Action Link */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Need advocate representation?</strong> We draft and serve a statutorily compliant Section 80 CPC notice on the Secretary, District Collector, or PSU Managing Director within 24 hours.
          </span>
          <Link
            href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Compare MSME &amp; Notice Routes →
          </Link>
        </div>
      </div>
    </div>
  );
}
