"use client";

import React, { useState } from "react";

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
    id: "pmc-stalling-joint-measurement",
    tabLabel: "PMC Stalling Measurement",
    title: "Project Management Consultant (PMC) Sits on Measurement Book (MB) & Withholds RA Bill",
    cause:
      "The contractor submits the monthly Running Account (RA) bill with quantity sheets, pour cards, and test reports. The developer's PMC or Quantity Surveyor (QS) deliberately avoids scheduling joint site measurements, sends evasive emails asking for repetitive re-submissions, and sits on the bill for 60 to 90 days to conserve developer cash flows without issuing formal certification or rejection.",
    legalBasis:
      "Under CPWD Works Manual (Clauses 7 and 9), FIDIC Red Book (Sub-Clauses 14.3 and 14.6), and standard EPC General Conditions of Contract (GCC), interim measurement is a time-bound statutory and contractual obligation. If the Employer or Engineer fails to record joint measurements within the stipulated notice window (typically 7 to 10 days), unilateral measurements recorded by the contractor acquire deemed finality. Under Sections 53 and 54 of the Indian Contract Act, 1872, the employer cannot benefit from its own default in certifying works.",
    steps: [
      {
        step: "7-Day Formal Joint Measurement Notice",
        description:
          "Issue a registered notice calling upon the Engineer-in-Charge / PMC to attend joint measurement on site on a specific date and hour, intimating that failure to attend will result in unilateral recording.",
      },
      {
        step: "Unilateral Recording & Chartered Engineer Certification",
        description:
          "If the PMC defaults, record the measurements unilaterally with site photographs, RFI records, and have an independent Chartered Engineer counter-sign the measurement sheets.",
      },
      {
        step: "Deemed Certification & Commercial Demand Notice",
        description:
          "Submit the RA bill under the contractual 'Deemed Certification' clause, demanding immediate disbursement within 15 days along with 18% commercial interest under the Commercial Courts Act.",
      },
    ],
    statutoryRule: "Contract Act 1872 ss. 53/54, CPWD Clause 7/9 & FIDIC Sub-Clause 14.3/14.6",
  },
  {
    id: "coerced-no-claim-certificate",
    tabLabel: "Coerced No-Claim Certificate",
    title: "Developer Forces Full-and-Final 'No-Claim Certificate' (NDC) Before Releasing Admitted Final Bill",
    cause:
      "The project reaches substantial completion or handover. The contractor's Final Bill totals ₹3.5 Crore, including ₹1.2 Crore of extra items and statutory price escalation. The developer's CFO holds back even the admitted ₹1.8 Crore base bill, stating: 'Sign an unconditional, non-protest No-Claim Certificate waiving all extra items, retention disputes, and escalation claims, or not a single rupee will be released.'",
    legalBasis:
      "The Supreme Court of India in Ambica Construction v. Union of India (2006) 13 SCC 475 & (2015) 13 SCC 644, National Insurance Co. Ltd. v. Boghara Polyfab Pvt. Ltd. (2009) 1 SCC 267, and R.L. Kalathia & Co. v. State of Gujarat (2011) 2 SCC 400 has conclusively settled that a No-Claim Certificate or No-Dues Certificate signed under financial duress, economic coercion, or as a condition precedent for releasing undisputed admitted amounts does NOT extinguish genuine claims or bar reference to arbitration.",
    steps: [
      {
        step: "Pre-Execution Protest Letter ('Without Prejudice')",
        description:
          "Endorse the payment voucher or cover letter explicitly: 'Accepted under severe financial duress and economic coercion, without prejudice to our legitimate pending claims set out in our Final Bill dated [Date]'.",
      },
      {
        step: "Immediate 48-Hour Repudiation Notice",
        description:
          "If the developer forced a pre-printed un-amended NDC format, dispatch a registered advocate notice within 24 to 48 hours of bank credit repudiating the NDC under the Supreme Court Kalathia doctrine.",
      },
      {
        step: "Section 21 Arbitration Invocation",
        description:
          "Invoke arbitration under Section 21 of the Arbitration and Conciliation Act, 1996 for the balance unpaid claims, variation items, and interest, attaching the economic duress proof.",
      },
    ],
    statutoryRule: "Supreme Court Ambica Construction / R.L. Kalathia Doctrine & Contract Act s.15/19",
  },
  {
    id: "unapproved-extra-items-variations",
    tabLabel: "Unapproved Extra Items",
    title: "Substantial Extra-Item Quantities Executed on Oral PMC Instructions (>25% BOQ Deviation)",
    cause:
      "During excavation and structural execution, site conditions necessitated deeper foundation depths, unexpected rock strata blasting, additional steel reinforcements, and revised architectural finishes. The Resident Engineer instructed the contractor orally or via site WhatsApp groups to proceed urgently to prevent project stalling, but the developer later disowns the variation orders and strikes them off the RA bills.",
    legalBasis:
      "Under Section 70 of the Indian Contract Act, 1872, where a person lawfully does anything for another person, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is bound to make compensation in respect of the thing done. The Supreme Court in Food Corporation of India v. Evhar and K.N. Sathyapalan held that contractors are entitled to reimbursement for extra work executed with the knowledge and benefit of the employer at prevailing market or schedule rates (DSR/SOR).",
    steps: [
      {
        step: "Collate Contemporaneous Secondary Evidence",
        description:
          "Assemble Request for Inspection (RFI) logs, Daily Progress Reports (DPRs), Pour Cards signed by site engineers, concrete batching plant weigh-slips, and approved revised drawings.",
      },
      {
        step: "Independent Market Rate Analysis (CPWD DSR)",
        description:
          "Prepare an itemized Rate Analysis based on prevailing CPWD Delhi Schedule of Rates (DSR) or State PWD Schedule of Rates (SOR) for all extra and substituted items.",
      },
      {
        step: "Statutory Section 70 Restitution Demand",
        description:
          "Serve a formal statutory notice under Section 70 demanding restitution and payment for non-gratuitous benefits enjoyed, warning of commercial suit or arbitral reference.",
      },
    ],
    statutoryRule: "Indian Contract Act, 1872 (Section 70) & Supreme Court FCI v. Evhar Precedent",
  },
  {
    id: "wrongful-termination-pbg-threat",
    tabLabel: "Threat of PBG Invocation",
    title: "Contractor Pauses Work Due to Unpaid RA Bills; Employer Threatens PBG Invocation & Termination",
    cause:
      "After three consecutive Running Account bills remain unpaid for over 120 days, the contractor slows down or suspends site operations. The developer retaliates by issuing a 7-day cure notice alleging willful abandonment, threatening contract termination at risk-and-cost, and moving to invoke the Performance Bank Guarantee (PBG).",
    legalBasis:
      "Payment of interim RA bills is a foundational reciprocal promise under Sections 51, 52, and 54 of the Indian Contract Act, 1872. An employer in default of payment cannot demand continued performance or allege breach against the contractor. The Supreme Court in U.P. State Sugar Corporation and Vinitec Electronics recognized 'special equities' and 'irretrievable injustice' as established exceptions to the unconditional bank guarantee rule where an employer causes financial ruin through its own foundational default.",
    steps: [
      {
        step: "Statutory Reciprocal Default Notice (ss. 53/54)",
        description:
          "Serve an urgent reply establishing that employer's failure to pay interim bills constitutes breach of reciprocal promises, legally excusing work suspension without any Liquidated Damages (LD) liability.",
      },
      {
        step: "Crystallize Idling Machinery & Overhead Claims",
        description:
          "Issue a contemporaneous notice of claim quantifying daily plant, machinery, scaffolding, crane idling charges, and site establishment overheads under Hudson's / Emden's formula.",
      },
      {
        step: "Urgent Section 9 Commercial Court Petition",
        description:
          "File an urgent Section 9 petition under the Arbitration Act before the Commercial Court seeking an interim injunction restraining the employer from invoking the PBG and encashing bank limits.",
      },
    ],
    statutoryRule: "Contract Act ss. 51-54, Arbitration Act s.9 & Commercial Courts Act s.2(1)(c)(vi)",
  },
];

export default function UncertifiedRABillScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);

  const activeScenario =
    SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-100 px-3 py-1 rounded-full">
            Commercial Failure Mode
          </span>
          <span className="text-[11px] font-mono text-slate-500 font-semibold">
            {activeScenario.statutoryRule}
          </span>
        </div>

        <p className="text-base sm:text-lg font-black text-slate-900 mb-3">
          {activeScenario.title}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Employer / PMC Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Contractual & Statutory Rights
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Contractor Step-by-Step Escalation Protocol:
          </p>
          <div className="space-y-3">
            {activeScenario.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    {st.step}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
