"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabTitle: string;
  badge: string;
  situation: string;
  risk: string;
  legalBasis: string;
  sopSteps: string[];
  sampleClause: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "installment-acceleration",
    tabTitle: "1. 4-Installment Default Trap",
    badge: "Section 27 Direct Execution",
    situation:
      "After receiving your demand notice, a corporate buyer admits ₹48 Lakhs liability on email and begs for 4 monthly installments of ₹12 Lakhs each. Your sales team signs an informal MOU—and the buyer defaults on Installment #2.",
    risk:
      "An informal email or plain-paper MOU is only a fresh contract, NOT an executable decree. Upon default on Installment #2, the creditor must still file a 2–3 year commercial suit to prove the debt before attaching assets.",
    legalBasis:
      "Mediation Act, 2023 Section 27 (MSA enforced as a Court Judgment/Decree) & Section 19 (Authentication by Parties & Mediator).",
    sopSteps: [
      "Refuse informal email MOUs; route the debtor's 4-installment proposal into a single 45-minute Section 30 Online Mediation session via an Institutional Mediation Service Provider (MSP).",
      "Draft an explicit Acceleration Clause in the MSA: default on any single installment by >5 days renders the entire remaining balance immediately due with 18% p.a. default interest.",
      "Record the debtor's unequivocal admission of invoice delivery, GST ITC availment, and waiver of all quality/rate disputes.",
      "Execute via IT Act-compliant e-Sign / Aadhaar eSign and obtain the Mediator's Section 19 authentication—converting the payment plan into a Section 27 Decree.",
    ],
    sampleClause:
      "Upon failure by the Second Party to remit any scheduled installment on its due date (subject to a 5-day grace period), the entire unpaid balance along with 18% p.a. default interest shall stand accelerated and become immediately recoverable by execution under Order XXI CPC as a Decree under Section 27 of the Mediation Act, 2023.",
  },
  {
    id: "nbfc-bulk-odr",
    tabTitle: "2. NBFC & Fintech Bulk ODR",
    badge: "Section 30 Online Mediation",
    situation:
      "An NBFC or B2B supply-chain lender holds 1,500+ overdue SME accounts (₹2 Lakhs–₹25 Lakhs ticket size) spread across 18 states, where physical court appearances or ad-hoc arbitration hearings cost more than the interest spread.",
    risk:
      "Traditional arbitration faces Section 12(5) unilateral-appointment challenges (CORE 5-Judge Bench), while physical Lok Adalats require multi-city travel and yield low attendance rates.",
    legalBasis:
      "Mediation Act, 2023 Section 30 (Online Mediation), Section 33–40 (Mediation Service Providers) & Information Technology Act, 2000.",
    sopSteps: [
      "Send a standardized pre-litigation Legal Notice offering a 7-day window to join a neutral Institutional MSP's Section 30 Online Mediation room.",
      "Conduct batch video/asynchronous ODR sessions with an independent empanelled mediator—eliminating unilateral-appointment bias.",
      "Generate standardized digital MSAs carrying party e-Signatures, mediator digital authentication, and electronic audit trails compliant with BSA 2023 Section 63.",
      "On post-MSA default, file an Execution Petition directly in the local Commercial/Civil Court where the debtor's bank accounts or receivables sit.",
    ],
    sampleClause:
      "Both Parties consent to conduct this mediation entirely through Online Mediation under Section 30 of the Mediation Act, 2023 on the designated ODR portal, and agree that electronic signatures affixed herein shall constitute valid execution under Section 19 of the Act.",
  },
  {
    id: "limitation-and-msme",
    tabTitle: "3. Limitation & 43B(h) Protection",
    badge: "Section 29 Exclusion Shield",
    situation:
      "An enterprise supplier's invoices are 29 months old (approaching the 3-year Limitation Act bar), or a registered Micro/Small supplier is negotiating near the March 31 Income Tax Act Section 43B(h) deadline.",
    risk:
      "Debtors deliberately drag out informal settlement talks for 6–8 months until the creditor's 3-year limitation expires, leaving the creditor time-barred from filing a recovery suit or IBC petition.",
    legalBasis:
      "Mediation Act, 2023 Section 29 (Exclusion of mediation duration from Limitation computation) & Section 22 (Confidentiality).",
    sopSteps: [
      "Initiate formal mediation under the Act rather than unrecorded WhatsApp/coffee-table negotiations so the Section 29 statutory limitation clock pauses from commencement until termination.",
      "Capture a written acknowledgment of principal debt inside the mediation initiation record (or Section 18 Limitation Act acknowledgment prior to talks).",
      "For MSME suppliers, ensure any MSA installment schedule explicitly preserves statutory MSMED Act s.16 interest if the buyer defaults on the settled schedule.",
      "Keep all without-prejudice concession offers inside the Section 22 confidentiality wrapper so a failed mediation cannot be twisted into a waiver of your full claim.",
    ],
    sampleClause:
      "In the event of non-payment of any settled tranche, the concession/haircut granted herein shall stand automatically withdrawn, and the Creditor shall be entitled to execute for the full original principal plus contractual/statutory interest, with the mediation period excluded under Section 29 of the Mediation Act, 2023.",
  },
  {
    id: "commercial-court-12a",
    tabTitle: "4. Commercial Suit s.12A Bridge",
    badge: "Patil Automation Compliance",
    situation:
      "Your dispute exceeds ₹3 Lakhs (Commercial Courts Act Specified Value), and you need either an enforceable settlement right now or a clean Non-Starter Report to file a Commercial Suit without risking mandatory rejection under Patil Automation.",
    risk:
      "Filing a Commercial Suit without exhausting Section 12A pre-institution mediation (where no urgent interim relief under Yamini Manohar is pleaded) invites automatic Order VII Rule 11 rejection.",
    legalBasis:
      "Commercial Courts Act, 2015 Section 12A (as harmonized with Mediation Act, 2023); Patil Automation (P) Ltd. v. Rakheja Engineers (2022) 10 SCC 1.",
    sopSteps: [
      "Serve a formal Pre-Litigation Demand Notice giving 10 days to pay or enter structured online mediation.",
      "If the debtor refuses to appear or fails to settle, obtain a formal Non-Settlement / Non-Starter Report within the statutory window.",
      "If the debtor agrees to pay in tranches, convert the schedule into a Section 19/27 MSA—giving you a Court Decree without paying ad-valorem Commercial Court fees.",
      "If urgent asset dissipation is detected (e.g., factory machinery liquidation), bypass mediation with a bona fide Order XXXVIII Rule 5 attachment application under Yamini Manohar.",
    ],
    sampleClause:
      "This Mediated Settlement Agreement is executed in full compliance with Section 19 of the Mediation Act, 2023 and shall operate as a final, binding decree under Section 27, superseding all prior correspondence while preserving execution remedies before the Commercial Court.",
  },
];

export default function MediationActScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const active = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Strip */}
      <div
        role="tablist"
        aria-label="Mediation Act 2023 creditor scenarios"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-slate-200 bg-slate-50"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeId;
          return (
            <button
              key={scenario.id}
              role="tab"
              type="button"
              aria-selected={isSelected}
              onClick={() => setActiveId(scenario.id)}
              className={`px-4 py-3.5 text-left text-xs sm:text-sm font-bold transition-all border-b-2 cursor-pointer ${
                isSelected
                  ? "bg-white text-[#DC2626] border-[#DC2626]"
                  : "text-slate-600 border-transparent hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabTitle}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div role="tabpanel" className="p-5 sm:p-6 md:p-7 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {active.badge}
          </span>
          <span className="text-[11px] font-mono text-slate-500">{active.legalBasis}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Commercial Bottleneck
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{active.situation}</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Creditor Legal Exposure
            </h3>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">{active.risk}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            General Counsel Execution SOP
          </h3>
          <ul className="space-y-2">
            {active.sopSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 text-slate-100 border border-slate-800">
          <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1.5">
            Recommended MSA Operative Clause
          </p>
          <p className="text-xs sm:text-sm font-mono leading-relaxed text-slate-200">
            &ldquo;{active.sampleClause}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
