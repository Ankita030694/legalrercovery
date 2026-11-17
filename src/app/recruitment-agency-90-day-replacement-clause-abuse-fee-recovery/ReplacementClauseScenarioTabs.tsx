"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  buyerProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "free-credit-pretext",
    tabLabel: "1. The 90-Day Free Credit Bluff",
    title: "Client Holds Day-30 Placement Invoice Stating: 'We Only Pay After the 90-Day Replacement Window Closes'",
    badge: "Condition Precedent Doctrine",
    buyerProfile:
      "Mid-market enterprises, tech scale-ups, and corporate HR departments attempting to convert a limited replacement guarantee into an unauthorized 90-day interest-free supplier credit line.",
    pretext:
      "The candidate joins on January 1. As per contract, placement fee invoice (8.33% to 12.5% of annual CTC, ₹6 Lakh) is raised with 30-day payment terms (due January 31). On January 31, HR states: 'Our corporate policy is to release payment only after candidate completes 90 days of continuous service. If the candidate leaves on Day 85, why should we pay now?'",
    legalReality:
      "This defense is completely illegal under Indian contract law. Under Sections 51, 52, and 54 of the Indian Contract Act, 1872, reciprocal promises must be performed in their contractual order. The placement service was fully executed on the candidate's date of joining. The 90-day free replacement guarantee is a conditional warranty, and timely payment of the invoice within 15 to 30 days is a condition precedent. If the client withholds the placement fee, they breach their primary payment covenant and forfeit the replacement warranty entirely.",
    statutoryHook:
      "Indian Contract Act 1872 ss.51–54 (Reciprocal Promises & Condition Precedent) + MSMED Act 2006 s.15 (Mandatory 45-day statutory payment ceiling)",
    actionProtocol: [
      "Issue a formal Notice of Condition Precedent Breach citing Sections 51-54, putting HR on notice that withholding fee forfeits the replacement guarantee.",
      "Inform the client that invoice aging beyond contractual credit terms triggers statutory compound interest under MSMED Act Section 16 at 3 times RBI Bank Rate.",
      "Warn CFO and Accounts Payable that delayed vendor payments to registered MSME search firms trigger Section 43B(h) income tax disallowances.",
      "Escalate to an advocate-drafted 15-day statutory demand notice prior to filing an Order XXXVII CPC Summary Suit or MSME Samadhaan reference.",
    ],
  },
  {
    id: "layoff-restructuring-refund",
    tabLabel: "2. Layoffs & Constructive Dismissal",
    title: "Client Fired Candidate on Day 75 Due to 'Budget Cuts' or 'Restructuring' and Demands Fee Refund",
    badge: "Exclusion of Client-Side Termination",
    buyerProfile:
      "VC-backed tech startups undergoing sudden headcount downsizing, BFSI corporations restructuring sales units, or GCCs shutting down experimental delivery pods.",
    pretext:
      "A senior VP candidate placed at ₹45 Lakh CTC is terminated on Day 70 because the client's board cancelled the product line. HR emails the agency: 'Under the 90-day replacement clause, the candidate is no longer employed. Provide an immediate cash refund of the ₹4 Lakh placement fee or supply a replacement VP immediately.'",
    legalReality:
      "Commercial placement contracts standardly exclude client-induced terminations from replacement coverage. A free replacement warranty covers voluntary candidate abandonment without just cause or gross candidate misconduct. It does NOT insure the client against corporate downsizing, redundancy, budget cuts, or constructive discharge. Under Section 53 of the Contract Act, when a party prevents contract performance or creates conditions leading to employment cessation, they cannot claim breach or demand refunds.",
    statutoryHook:
      "Indian Contract Act 1872 s.53 (Liability of party preventing event on which contract is to take effect) + Section 73 (No damages for self-created loss)",
    actionProtocol: [
      "Obtain written or electronic evidence of the candidate's termination letter confirming redundancy, corporate restructuring, or layoff without cause.",
      "Formally rebut the refund demand pointing out that the recruitment agency is a talent search partner, not an underwriter of client business solvency or workforce planning.",
      "Declare the placement fee fully earned, non-refundable, and legally crystallized under the executed terms of engagement.",
      "Reserve rights to claim advocate legal costs and commercial damages if the client attempts unauthorized debit notes or accounts payable offsets.",
    ],
  },
  {
    id: "role-change-location-shift",
    tabLabel: "3. Role / CTC / Location Alteration",
    title: "Client Unilaterally Altered Designation, Compensation or Work Location Driving Candidate Resignation",
    badge: "Employer Repudiation & Frustration",
    buyerProfile:
      "Corporate employers baiting candidates with remote work, equity grants, or leadership titles, then unilaterally downgrading terms upon onboarding.",
    pretext:
      "A candidate hired as 'Director of Engineering' in Bengaluru is instructed on Day 45 to relocate to an industrial plant in another state and take up a junior managerial portfolio with reduced incentives. The candidate resigns in protest. The client blames the agency: 'The candidate resigned within 90 days. As per contract, you must provide a free replacement or refund our fee.'",
    legalReality:
      "This constitutes employer breach of the fundamental terms of employment. When an employer materially alters job responsibilities, reporting lines, workplace location, or compensation structure without mutual consent, the resignation is a constructive dismissal directly induced by the employer. Under Section 67 of the Contract Act, if a promisee neglects or refuses to afford reasonable facilities for the performance of the contract, the promisor is excused. The recruitment firm's replacement warranty is fully discharged.",
    statutoryHook:
      "Indian Contract Act 1872 s.67 (Effect of neglect of promisee) + Industrial Disputes Act / Common Law Doctrine of Constructive Dismissal",
    actionProtocol: [
      "Document the candidate's original job description (JD), signed offer letter, and resignation email detailing unilateral changes made by the client.",
      "Submit candidate exit documentation showing employer breach as the direct proximate cause of separation.",
      "Serve a formal legal clarification denying replacement entitlement on the grounds of client-side material breach of employment terms.",
      "Confirm that no credit note or search replacement will be allocated for candidate exits triggered by client-induced employment repudiation.",
    ],
  },
  {
    id: "cash-refund-vs-credit-note",
    tabLabel: "4. Cash Refund vs Credit Note",
    title: "Candidate Resigned on Day 40, But Client Demands Immediate Cash Wire Refund Instead of Free Search",
    badge: "Specific Remedy Doctrine",
    buyerProfile:
      "Corporate procurement and CFO desks seeking liquidity by demanding cash refunds instead of honoring the contractually agreed replacement search mechanism.",
    pretext:
      "A developer resigns voluntarily on Day 40. The placement fee of ₹2.5 Lakh was paid on Day 15. The recruitment agreement states: 'In the event of resignation within 90 days, the agency will provide one free replacement within 60 days, failing which a credit note will be issued.' The client demands: 'We decided not to backfill this position. Wire ₹2.5 Lakh back to our bank account immediately.'",
    legalReality:
      "A creditor is bound strictly by the remedial hierarchy established in the bilateral commercial agreement. In professional recruitment contracts, cash refunds are almost never stipulated; the exclusive remedy is a 'free one-time candidate replacement search' or a 'credit note valid for 12 months for future mandates'. Under Section 73 and Section 74 of the Contract Act, a client cannot unilaterally invent a cash refund remedy when the contract restricts remedies to replacement services or credit notes.",
    statutoryHook:
      "Indian Contract Act 1872 ss.73–74 (Liquidated remedies and contractual stipulations) + Specific Relief Act 1963 (Enforcement of agreed remedial clauses)",
    actionProtocol: [
      "Confirm that the agency has formally commenced the replacement search within the contractually defined 30 to 60 day replacement fulfillment window.",
      "Rebuff the cash refund demand in writing, formally quoting the exclusive 'Replacement or Credit Note' clause of the agreement.",
      "Issue a formal Credit Note with 12-month validity if the client formally freezes the mandate and rejects proposed candidate profiles.",
      "Warn that attempting unilateral debit note deductions against other active search mandates will be treated as an actionable debt default under MSMED Act.",
    ],
  },
];

interface ReplacementClauseScenarioTabsProps {
  className?: string;
}

export default function ReplacementClauseScenarioTabs({
  className = "",
}: ReplacementClauseScenarioTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation Buttons */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-[11px] text-slate-500 font-semibold">
            Target Counterparty: {activeScenario.buyerProfile.split(",")[0]}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-black text-slate-900 mb-3 leading-snug">
          {activeScenario.title}
        </h3>

        {/* Debtor Pretext Box */}
        <div className="mb-4 p-3.5 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl">
          <span className="block text-[10px] font-black uppercase tracking-wider text-amber-800 mb-1">
            Debtor Client Pretext / HR Excuse
          </span>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed italic">
            &ldquo;{activeScenario.pretext}&rdquo;
          </p>
        </div>

        {/* Legal Reality & Statutory Doctrine */}
        <div className="mb-4 p-4 bg-white border border-slate-200 rounded-xl">
          <span className="block text-[10px] font-black uppercase tracking-wider text-[#DC2626] mb-1.5">
            Legal Reality &amp; Statutory Principle
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {activeScenario.legalReality}
          </p>
        </div>

        {/* Statutory Hook Tag */}
        <div className="mb-5 flex items-center gap-2 text-[11px] text-slate-600 bg-slate-100 px-3 py-2 rounded-lg">
          <span className="font-bold text-slate-800">Statutory Hook:</span>
          <span>{activeScenario.statutoryHook}</span>
        </div>

        {/* Action Protocol Checklist */}
        <div>
          <span className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-2.5">
            Creditor Immediate Action SOP:
          </span>
          <ul className="space-y-2">
            {activeScenario.actionProtocol.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#DC2626]/10 text-[#DC2626] font-extrabold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
