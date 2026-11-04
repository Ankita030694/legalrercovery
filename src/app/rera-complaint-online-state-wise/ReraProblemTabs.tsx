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
    id: "delayed-possession-refund",
    tabLabel: "Delayed Possession (Sec 18)",
    title: "Possession Date Expired in Builder-Buyer Agreement Without Occupancy Certificate (OC)",
    cause:
      "Promoters routinely insert 6-to-12-month 'grace periods' and force majeure clauses into Builder-Buyer Agreements (BBAs), or point to automatic RERA project registration extensions under Section 6 to claim that the homebuyer cannot exit the project. When an allottee asks for a refund, the builder either refuses outright or threatens to forfeit 10% to 20% of the Basic Sale Price (BSP) as 'earnest money'.",
    legalBasis:
      "In M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP (2021 SCC OnLine SC 1044) and Imperia Structures Ltd. v. Anil Patni (2020) 10 SCC 783, the Supreme Court held that an allottee's right under Section 18(1) of RERA to demand a 100% refund with prescribed interest (SBI Highest MCLR + 2% in most states) is unconditional once the BBA possession date passes without a valid Occupancy Certificate. Extension of project registration by the RERA Authority does not alter the contractual possession date in the buyer's agreement.",
    steps: [
      {
        step: "Audit BBA Possession Date & OC Status",
        description:
          "Check the exact possession clause in your registered Agreement for Sale and verify on your state RERA portal (Project Details > Documents) whether the promoter has uploaded a valid statutory Occupancy Certificate (OC).",
      },
      {
        step: "Serve Section 18(1) Withdrawal & Demand Notice",
        description:
          "Dispatch a formal advocate legal notice exercising your statutory option under Section 18(1)(a) to withdraw from the project and demanding 100% principal refund + SBI MCLR + 2% interest from each date of payment within 15 days.",
      },
      {
        step: "File Online Form M Before State RERA Authority",
        description:
          "Log in to your state RERA portal, select Form M (Complaint to Regulatory Authority under Section 31), upload your payment ledger and notice copy, and pay the ₹1,000 (or ₹5,000 in MahaRERA) online filing fee.",
      },
    ],
    statutoryRule: "Section 18(1) RERA 2016 & Newtech Promoters (2021 SC)",
  },
  {
    id: "pre-agreement-cancellation",
    tabLabel: "Booking / Token Forfeiture",
    title: "Builder Forfeiting Booking Amount Before Signing Registered Builder-Buyer Agreement",
    cause:
      "Homebuyers frequently pay ₹1,00,000 to ₹5,00,000 as a booking or expression-of-interest (EOI) advance based on sales brochures. Later, when the builder presents a one-sided Agreement for Sale, delays sanction plans, or when the buyer's home loan is declined, the builder refuses to refund the booking money—citing a fine-print clause on the booking application form stating that 'booking amount is non-refundable'.",
    legalBasis:
      "Section 13(1) of the Real Estate (Regulation and Development) Act, 2016 strictly prohibits a promoter from accepting more than 10% of the apartment cost without first executing and registering a written Agreement for Sale. Furthermore, under Section 12 of RERA, if an allottee makes an advance payment on the basis of false or misleading brochure statements or model flat representations, the promoter must return the entire investment with interest. State RERAs (MahaRERA, UP RERA, HARERA) consistently hold that forfeiting pre-BBA booking amounts is unlawful.",
    steps: [
      {
        step: "Compile Booking Receipts & Brochure Promises",
        description:
          "Preserve the booking application form, bank NEFT/RTGS/cheque UTR receipts, marketing brochures, and email/WhatsApp assurances given by the developer's sales team.",
      },
      {
        step: "Send Formal Booking Cancellation & Section 12/13 Notice",
        description:
          "Serve a written cancellation demand notice pointing out the absence of a registered Section 13 Agreement for Sale (or false brochure representations under Section 12) and demanding full return of the advance.",
      },
      {
        step: "Lodge Online RERA Conciliation or Form M Complaint",
        description:
          "File an online complaint or conciliation request on the state RERA portal (such as MahaRERA Conciliation Forum or UP RERA e-Courts) where pre-agreement token disputes are frequently settled within 2–3 hearings.",
      },
    ],
    statutoryRule: "Sections 12 & 13(1) RERA 2016",
  },
  {
    id: "order-execution-sec-40",
    tabLabel: "RERA Order Not Obeyed (Sec 40)",
    title: "Builder Failing to Pay Refund or Interest Even After Final State RERA Order",
    cause:
      "Winning a favourable refund or delay-interest order under Section 18 is only half the battle. Many defaulting developers ignore the 45-to-60-day compliance window stipulated in the RERA Authority's final order, neither filing a statutory appeal (which requires a mandatory 30% to 100% pre-deposit under Section 43(5)) nor remitting the decreed amount to the homebuyer.",
    legalBasis:
      "Under Section 40(1) of RERA 2016, if a promoter fails to pay any interest, penalty, or refund ordered by the Authority or Adjudicating Officer, the amount is recoverable from the promoter as 'arrears of land revenue'. Furthermore, under Section 40(2) and Order XXI of the Code of Civil Procedure (CPC), the RERA Authority has the power to issue a Recovery Certificate (RC) to the District Collector / Tehsildar to attach the builder's bank accounts, unsold inventory, and project land, and can impose daily penalties under Section 63 for non-compliance.",
    steps: [
      {
        step: "Wait Out Statutory Compliance Window (Typically 45–60 Days)",
        description:
          "Verify the exact compliance period granted in your uploaded RERA order PDF and check whether the builder has deposited the mandatory pre-deposit before the RERA Appellate Tribunal (REAT) under Section 43(5).",
      },
      {
        step: "File Online Execution Application (Non-Compliance Petition)",
        description:
          "Log in to your state RERA citizen dashboard, navigate to 'Execution / Non-Compliance of Order' against your decided complaint number, and pray for issuance of a Section 40(1) Recovery Certificate (RC) and Section 63 penalty.",
      },
      {
        step: "Supply Builder Bank Account & Unsold Unit Details to Collector",
        description:
          "Attach the RERA project escrow bank account details (available on the portal's project page) and unsold unit numbers so the District Collector / Tehsildar can execute immediate bank attachment.",
      },
    ],
    statutoryRule: "Section 40(1), Section 40(2) & Section 63 RERA 2016",
  },
  {
    id: "structural-defect-carpet-area",
    tabLabel: "Structural Defect / Area Shortfall",
    title: "Carpet Area Reduction or Structural Defects Within 5 Years of Possession",
    cause:
      "Upon offering possession, builders often raise final demand letters charging for an inflated 'Super Built-Up Area' while the actual usable RERA Carpet Area (wall-to-wall internal area) is 8% to 15% smaller than promised. Additionally, within months of moving in, homebuyers encounter severe seepage, faulty electrical shaft wiring, or structural plaster failures that the builder's maintenance agency refuses to rectify.",
    legalBasis:
      "Under Section 14(3) of RERA 2016, the promoter is under a strict 5-year statutory warranty from the date of handing over possession to rectify any structural defect or defect in workmanship, quality, or provision of services without further charge within 30 days of notice—failing which the allottee is entitled to compensation. Under Section 14(2) and MahaRERA/HARERA rules, a promoter cannot unilaterally reduce the sanctioned carpet area; any shortfall requires a proportional refund of the excess consideration with SBI MCLR + 2% interest.",
    steps: [
      {
        step: "Commission Certified Architect Carpet Area / Defect Report",
        description:
          "Engage a licensed structural engineer or registered architect to measure the net internal wall-to-wall RERA carpet area under Section 2(k) or document structural seepage with dated photographs.",
      },
      {
        step: "Serve 30-Day Statutory Rectification Notice Under Sec 14(3)",
        description:
          "Send a formal advocate notice putting the promoter on a strict 30-day statutory clock under Section 14(3) to rectify the structural defects at their own cost or refund the excess carpet area price.",
      },
      {
        step: "File Form M (Rectification/Proportional Refund) & Form N (Damages)",
        description:
          "If the builder fails to rectify within 30 days, file an online RERA complaint seeking mandatory repair orders/proportional price refund (Form M) or repair cost compensation (Form N).",
      },
    ],
    statutoryRule: "Section 2(k), Section 14(2) & Section 14(3) RERA 2016",
  },
  {
    id: "subvention-pre-emi-default",
    tabLabel: "Subvention / Pre-EMI Default",
    title: "Builder Stopped Paying Pre-EMI Under Tripartite Subvention Scheme ('No EMI Till Possession')",
    cause:
      "Thousands of homebuyers booked flats under '10:80:10' or 'No Pre-EMI Till Possession' subvention schemes where the bank disbursed 70%–80% of the loan directly to the builder upfront, and the builder contractually agreed to service the monthly Pre-EMI interest to the bank until possession. Midway through construction, the builder stops both construction and Pre-EMI payments, leaving the bank hounding the homebuyer and damaging their CIBIL score.",
    legalBasis:
      "Under the Tripartite Agreement and Section 18 of RERA, the promoter's failure to pay agreed Pre-EMIs alongside delayed possession constitutes a gross breach of promoter obligations under Section 11(4) and Section 18. State RERAs (particularly UP RERA, HARERA, and MahaRERA) regularly pass orders directing the promoter to reimburse all Pre-EMIs paid by the allottee from the date of builder default up to actual possession or complete loan foreclosure upon Section 18 refund.",
    steps: [
      {
        step: "Gather Tripartite Agreement & Bank Loan Ledger",
        description:
          "Download the executed Tripartite Agreement, builder subvention MoU, and your housing finance/bank loan account statement showing exact Pre-EMI instalments debited from your account after the builder defaulted.",
      },
      {
        step: "Dispatch Joint Legal Notice to Builder & Lending Bank",
        description:
          "Serve an advocate legal notice to the promoter demanding immediate reimbursement of paid Pre-EMIs and total loan closure under Section 18, while putting the bank on notice of the builder's upfront disbursement violation.",
      },
      {
        step: "File Online Form M Seeking Loan Foreclosure + Refund",
        description:
          "File an online RERA complaint praying for a direction to the promoter to foreclose the bank loan liability directly and refund your own contribution + paid Pre-EMIs with SBI MCLR + 2% interest.",
      },
    ],
    statutoryRule: "Sections 11(4), 18(1) & 31 RERA 2016",
  },
];

export default function ReraProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Interactive RERA Scenario Selector
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific Builder or RERA Dispute Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any common real-estate bottleneck below to view the builder&apos;s usual excuse, the binding Supreme Court / RERA rule, and the 3-step online remedy:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="RERA Complaint Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {PROBLEMS.map((problem) => {
          const isSelected = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
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
        id={`panel-${selectedProblem.id}`}
        aria-labelledby={`tab-${selectedProblem.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedProblem.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedProblem.statutoryRule}
          </span>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Builder Excuse &amp; Operational Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory RERA Grounds &amp; Supreme Court Precedent
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Online Filing &amp; Notice Fix For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedProblem.steps.map((s, idx) => (
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
            <strong>Need an advocate-drafted pre-RERA notice?</strong> We prepare and dispatch a formal Section 18 / Section 13 statutory demand notice to the builder within 24 hours.
          </span>
          <Link
            href="/builder-booking-cancellation-refund-legal-notice"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Builder Refund Legal Notice Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}
