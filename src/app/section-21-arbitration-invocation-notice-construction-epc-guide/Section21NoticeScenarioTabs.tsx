"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  riskDescription: string;
  statutoryTrap: string;
  legalStrategy: string;
  mandatoryClauses: string[];
  recommendedAction: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "multi-tier-futility",
    tabLabel: "Ignored Pre-Arbitral Tier",
    badge: "Multi-Tier Clause Bypass",
    title: "Employer Stalls Engineer / DRB Review: Invoking the Supreme Court Futility Exception",
    riskDescription:
      "Most FIDIC, CPWD, and EPC contracts stipulate a mandatory multi-tier escalation ladder: referral to the Engineer-in-Charge within 30 days, followed by a Dispute Review Board (DRB) or Managing Director conciliation within 60 days before arbitration can commence. Employers deliberately sit on references without rendering a decision, hoping the 3-year limitation clock runs out.",
    statutoryTrap:
      "If the contractor invokes Section 21 prematurely without documenting tier exhaustion, the employer moves the High Court under Section 11(6) arguing premature invocation and lack of cause of action.",
    legalStrategy:
      "Under the Supreme Court rulings in Demerara Distilleries (2015) and Ravindra Kumar Verma v. BPTP Ltd., pre-arbitral tiers are directory when the employer exhibits an attitude of denial or non-cooperation. The contractor must issue a strict 15-day guillotine notice putting the Engineer/DRB in default, and expressly plead the 'Doctrine of Futility' in the Section 21 notice.",
    mandatoryClauses: [
      "Chronological recitation of previous references to Engineer-in-Charge / DRB with registered tracking proof",
      "Explicit finding of failure by the employer/adjudicator to render a decision within the contractual 60/90-day window",
      "Pleading of the Demerara Distilleries futility doctrine establishing that further waiting causes irremediable prejudice",
      "Unconditional invocation of the arbitration agreement upon expiry of the 15-day cure window",
    ],
    recommendedAction:
      "Dispatch a 15-day 'Curative Pre-Arbitral Notice' notifying default, followed immediately on Day 16 by the formal Section 21 invocation notice nominating your arbitrator.",
  },
  {
    id: "nortel-limitation-clock",
    tabLabel: "Approaching 3-Year Deadline",
    badge: "Article 137 Limitation Shield",
    title: "Stopping the Clock on Stalled Final Bills Under BSNL v. Nortel Networks Rules",
    riskDescription:
      "Contractors often spend years in cordial email exchanges, committee meetings, and joint verification sessions hoping for an amicable release of withheld retention or RA bills. Under Geo Miller (2020) and Secunderabad Railway Network, bilateral settlement talks do not toll or restart the 3-year limitation period under Article 137 of the Limitation Act, 1963.",
    statutoryTrap:
      "A mere commercial demand notice or advocate recovery notice DOES NOT stop the limitation period for arbitration! Limitation only stops on the exact date the Section 21 notice is RECEIVED by the respondent.",
    legalStrategy:
      "The 3-Judge Bench in BSNL v. Nortel Networks (2021) established that limitation for filing a Section 11 application is 3 years from the date of default (expiry of 30 days from Section 21 notice receipt). However, the underlying claim itself must be alive on the date of Section 21 receipt. The notice must explicitly state the accrual date and assert that limitation stands frozen under Section 21.",
    mandatoryClauses: [
      "Precise identification of the accrual of cause of action (date of final bill submission or formal rejection letter)",
      "Unambiguous statutory invocation: 'The Claimant hereby invokes Section 21 of the Arbitration & Conciliation Act, 1996'",
      "Formal request that the limitation clock for all listed heads of claim stands legally arrested upon receipt of this notice",
      "30-day statutory countdown notice for mutual arbitrator concurrence before High Court Section 11(6) filing",
    ],
    recommendedAction:
      "If the dispute is past Month 30 since bill rejection, do not send another commercial reminder. Issue a Section 21 invocation notice immediately via Email and Speed Post RPAD.",
  },
  {
    id: "unilateral-panel-neutralization",
    tabLabel: "Unilateral Panel Trap",
    badge: "Perkins Eastman & CORE 2024",
    title: "Overcoming Employer-Controlled Panels & Unilateral Arbitrator Clauses",
    riskDescription:
      "Many public sector undertakings (PSUs), state road development corporations, and large developers maintain arbitration clauses empowering their Managing Director to appoint a sole arbitrator, or forcing the contractor to select one arbitrator from a narrow 3 to 4-member panel of retired department engineers.",
    statutoryTrap:
      "If the contractor passively agrees to select from the employer's biased panel without objection, the employer argues consent and waiver under Section 12(5) proviso.",
    legalStrategy:
      "Under Perkins Eastman (2020) and the landmark 5-Judge Constitution Bench ruling in Central Organisation for Railway Electrification (CORE, Nov 2024), unilateral appointments and narrow captive panels violate Section 12(5) and the principle of equality under Section 18. The Section 21 notice must object to the unilateral mechanism and propose a neutral retired High Court judge or institutional arbitrator.",
    mandatoryClauses: [
      "Formal challenge to the contractual appointment clause citing Section 12(5) and Seventh Schedule disqualifications",
      "Citation of Supreme Court precedents in Perkins Eastman and CORE 5-Judge Constitution Bench (2024)",
      "Nomination of 3 independent, neutral former High Court / District Judges or an institutional forum (e.g., DIAC, MCIA)",
      "Reservation of right to file Section 11(6) petition in the High Court for independent judicial appointment upon non-concurrence",
    ],
    recommendedAction:
      "Refuse the captive panel in the Section 21 notice itself. Put the employer on 30-day notice to agree on an independent neutral arbitrator, or prepare the Section 11 High Court petition.",
  },
  {
    id: "coerced-no-claim-certificate",
    tabLabel: "Coerced NDC / No-Dues",
    badge: "Accord & Satisfaction Duress",
    title: "Reserving Multi-Crore Extra Claims Despite Signing a Coerced No-Claim Certificate",
    riskDescription:
      "Developers and government agencies routinely refuse to disburse admitted final bill sums or release performance bank guarantees unless the contractor executes a pre-printed, unconditional 'No-Claim Certificate' (NDC) or 'No-Dues Undertaking' waiving all escalation, idling, and variation claims.",
    statutoryTrap:
      "Employers raise a preliminary objection under Section 11/16 that the contract stands fully discharged by 'Accord and Satisfaction', attempting to extinguish the arbitration clause itself.",
    legalStrategy:
      "Under Supreme Court jurisprudence in Ambica Construction (2006) and R.L. Kalathia (2016), an NDC obtained under financial duress and economic coercion does not extinguish valid claims. The Section 21 notice must formally articulate the contemporaneous economic duress, recite prior protest letters, and explicitly refer the disputed extra claims to arbitration.",
    mandatoryClauses: [
      "Recital of economic coercion and unequal bargaining power that forced execution of the NDC to release admitted dues",
      "Contemporaneous reference to protest letters and caveat endorsements lodged before or immediately after payment",
      "Explicit enumeration of all preserved claim heads: unpaid variation items, Price Adjustment/Escalation, and extended stay overheads",
      "Demonstration that the arbitral agreement survives to determine whether discharge by accord and satisfaction was genuine or coerced",
    ],
    recommendedAction:
      "Ensure the Section 21 notice itemizes every suppressed claim head with principal amounts and interest, establishing that the dispute on duress must be referred to arbitration under Section 16.",
  },
];

export default function Section21NoticeScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
      <div className="mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
          Interactive Practice Scenarios
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
          EPC &amp; Infrastructure Section 21 Strategic Action Rails
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select an operational failure mode to inspect the statutory defense pre-emption strategy and mandatory notice clauses.
        </p>
      </div>

      {/* Tab Selector Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((sc) => {
          const isSelected = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`p-3 rounded-xl text-left transition-all duration-150 border cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span
                className={`block text-[10px] font-extrabold uppercase tracking-wider mb-1 ${
                  isSelected ? "text-red-100" : "text-slate-400"
                }`}
              >
                {sc.badge}
              </span>
              <span className="block text-xs sm:text-sm font-bold leading-tight line-clamp-2">
                {sc.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-slate-900 text-white mb-2">
            {activeScenario.badge}
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-slate-900">
            {activeScenario.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Operational Dilemma
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.riskDescription}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              Fatal Statutory Trap
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {activeScenario.statutoryTrap}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
            Advocate Strategy &amp; Judicial Shield
          </span>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
            {activeScenario.legalStrategy}
          </p>
        </div>

        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            Mandatory Pleading Points for Section 21 Notice
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.mandatoryClauses.map((clause, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  &check;
                </span>
                <span className="leading-snug">{clause}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Immediate Creditor Action
            </span>
            <p className="text-xs font-semibold text-slate-900 mt-0.5">
              {activeScenario.recommendedAction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
