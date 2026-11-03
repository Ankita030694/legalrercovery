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
    id: "tender-accepted-no-payout",
    tabLabel: "Buyback Tender Withheld",
    title: "Company Accepted ESOP Buyback Tender but Withheld Bank Payout",
    cause:
      "The startup formally rolled out an ESOP buyback, tender offer, or secondary share sale. You executed the option surrender / share transfer forms, agreed to the discounted or fair market price per share, and received written confirmation from the Compensation Committee. Months later, the company cites 'cash flow constraints', 'delayed investor tranche', or internal audits to indefinitely postpone transferring the purchase funds to your bank account.",
    legalBasis:
      "Once an option surrender or repurchase agreement is executed, a binding bilateral commercial contract is established under Section 2(h) and Section 73 of the Indian Contract Act, 1872. Under Section 68 of the Companies Act, 2013 and Rule 17 of the Companies (Share Capital and Debentures) Rules, 2014, buyback proceeds must be deposited in a separate bank account and discharged within statutory closure windows. Retaining consideration after taking surrender of options constitutes unjust enrichment and an actionable commercial debt.",
    steps: [
      {
        step: "Extract Written Tender Acceptance & Price Lock",
        description:
          "Preserve the signed Repurchase Agreement, Offer Letter, Cap Table or Option Portal (Carta/MyStartupEquity) confirmation showing accepted shares, unit price, and net payout calculation.",
      },
      {
        step: "Issue Formal Contractual Demand to Board & CFO",
        description:
          "Send a written demand letter citing Section 73 of the Indian Contract Act demanding wire transfer of the admitted purchase sum within 7 business days, including 18% per annum commercial default interest.",
      },
      {
        step: "Serve Advocate Statutory Demand Notice",
        description:
          "If funds are not remitted, engage counsel to dispatch an advocate legal notice under Section 68 Companies Act and Section 73 Contract Act, preparing for a Commercial Summary Suit under Order 37 of the CPC.",
      },
    ],
    statutoryRule: "Section 68 Companies Act 2013 & Section 73 Indian Contract Act 1872",
  },
  {
    id: "vested-options-cancelled",
    tabLabel: "Vested Options Cancelled",
    title: "Employer Cancelled Vested ESOPs Upon Resignation as 'Bad Leaver'",
    cause:
      "Upon tendering your resignation or completing your notice period, the HR department or founders claim that your vested stock options are cancelled or forfeited under a punitive 'bad leaver' clause or unnotified internal policy amendment, treating voluntary exit as equivalent to gross misconduct.",
    legalBasis:
      "Vested stock options represent deferred wages and accrued proprietary rights earned through rendered past service. Under Section 27 of the Indian Contract Act, 1872, clauses imposing restraint on lawful profession or punitive forfeiture upon lawful resignation are void. The Delhi High Court in Mukul Goel v. Info Edge and Karnataka High Court in Novell Software have confirmed that while unvested options lapse upon separation, vested options cannot be confiscated retroactively.",
    steps: [
      {
        step: "Secure All Vesting Confirmations & Grant Agreements",
        description:
          "Download your original ESOP Grant Letter, signed ESOP Scheme 2014/2020, and all periodic vesting statements reflecting exact vested units prior to your date of resignation.",
      },
      {
        step: "Challenge Forfeiture Notice in Writing",
        description:
          "Submit a formal objection to the Board and Nomination Committee asserting that vested rights are irrevocable property rights, referencing Section 62(1)(b) of the Companies Act, 2013.",
      },
      {
        step: "Issue Advocate Notice for Reinstatement or Equivalent Damages",
        description:
          "Serve a 15-day statutory advocate demand notice requiring the company to reinstate your vested units or deposit equivalent fair market value damages before approaching the Commercial Court.",
      },
    ],
    statutoryRule: "Section 27 Indian Contract Act 1872 & Section 62(1)(b) Companies Act 2013",
  },
  {
    id: "valuation-concealment",
    tabLabel: "Valuation Concealment",
    title: "Founders Conceal Share Valuation or Refuse Statutory Inspection",
    cause:
      "The startup demands that you exercise your options at high strike prices without disclosing the latest audited balance sheet, or pressures you to sell back shares at arbitrary face value or obsolete 409A valuations while raising fresh venture funding at significantly higher multiples.",
    legalBasis:
      "Under Rule 12 of the Companies (Share Capital and Debentures) Rules, 2014, the valuation of ESOP shares must be performed by an independent Registered Valuer. Furthermore, under Section 171 and Section 94 of the Companies Act, 2013, shareholders and vested optionholders have an unequivocal statutory right to inspect corporate registers and statutory records. Forcing ex-employees to sell at artificially deflated rates constitutes oppression and mismanagement under Section 241 of the Companies Act.",
    steps: [
      {
        step: "Formally Demand Independent Valuation Report",
        description:
          "Submit a written request under Rule 12(7) of Companies (Share Capital & Debentures) Rules for the latest Registered Valuer's Fair Market Value (FMV) determination report.",
      },
      {
        step: "File Statutory Inspection Requisition Under S.171",
        description:
          "Requisition formal inspection of the Register of Members, Register of Option Grants (Form SH-6), and Board Minutes relating to ESOP liquidity schemes at the Registered Office.",
      },
      {
        step: "Escalate via Registrar of Companies (ROC) & Legal Notice",
        description:
          "Serve an advocate notice indicating intent to file an ROC complaint under Section 450 and an oppression petition before the National Company Law Tribunal (NCLT) under Section 241.",
      },
    ],
    statutoryRule: "Rule 12(7) PAS Rules 2014 & Section 171 / 241 Companies Act 2013",
  },
  {
    id: "acquisition-carve-out",
    tabLabel: "Acquisition Exclusion",
    title: "Company Acquired or Merged but Excluded Ex-Employees from Payout",
    cause:
      "The startup undergoes a merger, acquisition, slump sale, or restructuring. Current employees and founder shares are cashed out or rolled over into the acquirer, but ex-employees holding vested options or exercised shares are omitted from the distribution waterfall or forced to accept zero-value liquidation preferences.",
    legalBasis:
      "The Board of Directors owes a fiduciary duty under Section 166 of the Companies Act, 2013 to act in good faith and safeguard the interests of all stakeholders, not merely continuing management. Deliberately structuring an M&A transaction or liquidation waterfall to dilute or extinguish ex-employees' vested rights constitutes minority oppression under Section 241-242 and an actionable tort of inducing breach of contract.",
    steps: [
      {
        step: "Obtain Scheme of Arrangement & Acquisition Filing",
        description:
          "Track MCA21 filings for Form MGT-14, Form INC-28, and National Company Law Tribunal (NCLT) scheme petitions to identify transaction valuation and consideration allocations.",
      },
      {
        step: "Lodge Formal Caveat & Objection with the Acquirer",
        description:
          "Serve a legal notice not only to the target company's founders but also to the acquiring corporate entity and escrow agent placing them on notice of accrued employee liabilities.",
      },
      {
        step: "File Injunction / Commercial Suit Before Closing",
        description:
          "Seek an urgent interim injunction restraining distribution of escrow consideration until accrued employee option claims are secured or adjudicated.",
      },
    ],
    statutoryRule: "Section 166 & Section 241-242 Companies Act 2013",
  },
];

export default function EsopProblemTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);
  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 space-y-6">
      {/* Tab Navigation Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3" role="tablist">
        {PROBLEMS.map((prob) => {
          const isActive = prob.id === activeTab;
          return (
            <button
              key={prob.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${prob.id}`}
              onClick={() => setActiveTab(prob.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {prob.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div id={`panel-${current.id}`} role="tabpanel" className="space-y-5">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md inline-block mb-2">
            Statutory Basis: {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">{current.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block">How This Default Manifests:</strong>
            <p className="leading-relaxed">{current.cause}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block">Why Indian Law Is on Your Side:</strong>
            <p className="leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        <div className="space-y-3">
          <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
            Recommended Statutory Action Steps:
          </strong>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-bold text-xs text-slate-900 leading-tight">{st.step}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-7">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
          <span className="text-slate-500 font-medium">
            Tackling this specific dispute? See how an advocate notice halts unilateral option cancellations.
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-red-600 hover:text-red-700 font-bold underline shrink-0"
          >
            Review Advocate Notice Fixed Pricing →
          </Link>
        </div>
      </div>
    </div>
  );
}
