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
    id: "jjm-water-supply",
    tabLabel: "JJM / Jal Nigam Grant Freeze",
    title: "Jal Jeevan Mission / Jal Nigam Stalls Certified Bills Citing 'Central Grant Not Released'",
    cause:
      "Water supply pipelines, overhead tanks (OHT), pump houses, and Functional Household Tap Connections (FHTC) are successfully installed and commissioned. The Executive Engineer (EE) enters measurements in the Measurement Book (MB) and acknowledges completion. However, payment is frozen for 9–24 months with the excuse: 'The State Government has not received the matching 50% central fund grant under JJM, and PFMS portal tokens are blocked.'",
    legalBasis:
      "The Supreme Court of India in M/s Surya Constructions v. State of U.P. & Ors. (2019) 12 SCC 594 explicitly held that when the work is completed and admitted by departmental engineers, the defense of 'lack of budget or financial sanction from the Government' is legally untenable. Inter-governmental grant sharing between Centre and State is an internal administrative arrangement that cannot extinguish or delay the contractor's constitutional right to property under Article 300A and prompt disbursement.",
    steps: [
      {
        step: "Reconcile e-MB & Obtain Written Admission",
        description:
          "Secure certified extracts of the Measurement Book, Passing Order, Test Check reports of Sub-Divisional Officer (SDO) and Superintending Engineer (SE), and written communications acknowledging the passed bill value.",
      },
      {
        step: "Serve 60-Day Section 80 CPC Statutory Notice",
        description:
          "Serve a detailed statutory notice under Section 80 of the Code of Civil Procedure (CPC) to the Principal Secretary (PHE / Jal Shakti), Chief Engineer, and District Magistrate, computing 18% commercial penal interest for wrongful withholding.",
      },
      {
        step: "File High Court Article 226 Writ Petition for Mandamus",
        description:
          "If payment is not released within the statutory window, file an Article 226 Writ Petition in the High Court praying for a Writ of Mandamus directing immediate disbursement of undisputed admitted dues as established in Surya Constructions and Unitech.",
      },
    ],
    statutoryRule: "Supreme Court *Surya Constructions* (2019) & Article 226 Writ of Mandamus",
  },
  {
    id: "pwd-march-budget-lapse",
    tabLabel: "State PWD Budget Lapse",
    title: "State PWD Roads / Bridge Division Claims 'Budget Lapsed on March 31 & Awaiting Re-appropriation'",
    cause:
      "Road surfacing, culvert construction, or government hospital civil works are executed. The Running Account (RA) or final bill was processed in February or March. With the change of financial year on March 31, the departmental budget lapsed back to the State Consolidated Fund. The Executive Engineer informs the contractor: 'Wait for the state assembly supplementary budget or re-appropriation head next quarter.'",
    legalBasis:
      "Under Rule 130 of the General Financial Rules (GFR) and State Public Works Account Codes, once work is contracted against administrative approval and financial sanction, completed and certified works constitute a 'committed departmental liability'. The Supreme Court in State of Uttar Pradesh v. Harish Chandra & Co. (1999) 1 SCC 63 established that government departments cannot evade contract performance or interest liability by relying on departmental administrative delays or budget lapses.",
    steps: [
      {
        step: "Demand Committed Liability Certificate",
        description:
          "Formally request the Executive Engineer and Divisional Accounts Officer (DAO) to issue a written certificate confirming that the bill is passed and queued under 'Committed Unpaid Liabilities' for budget allocation.",
      },
      {
        step: "Crystallize Interest Liability at Commercial Rates",
        description:
          "Issue a formal legal communication placing the department on notice that budgetary re-appropriation delay is incurring statutory commercial interest under Section 34 CPC / Interest Act, 1978.",
      },
      {
        step: "High Court Mandamus or Commercial Summary Enforcement",
        description:
          "Approach the jurisdictional High Court under Article 226 for a direction to the State Finance Department to allocate dedicated treasury tokens for the contractor's admitted vouchers within 4 to 8 weeks.",
      },
    ],
    statutoryRule: "GFR Rule 130, State Works Code & Supreme Court *Harish Chandra* Ruling",
  },
  {
    id: "nhai-cpwd-drb-stalemate",
    tabLabel: "CPWD / NHAI DRB Stalemate",
    title: "CPWD / NHAI EPC Package: Dispute Resolution Committee (DRC) Stalled & Final Bill Withheld",
    cause:
      "A national highway expansion or major institutional building is handed over under Provisional Completion Certificate (PCC). The contractor submits the final bill with price escalation (Clause 10CC / EPC Schedule G). The Engineer-in-Charge (EiC) withholds final bill certification and refers the matter to the Dispute Resolution Committee (DRC) or Dispute Resolution Board (DRB), where proceedings linger for over a year without any award.",
    legalBasis:
      "Under Clause 25 of CPWD General Conditions of Contract (GCC) and NHAI EPC Model Agreement, DRC/DRB conciliation is subject to strict time limits (typically 60 to 90 days). If the DRC fails to resolve the dispute or the competent authority fails to accept recommendations, the conciliation mechanism stands exhausted. The contractor has a statutory right under Section 21 of the Arbitration and Conciliation Act, 1996 to invoke arbitration.",
    steps: [
      {
        step: "Issue Formal Notice of DRC Failure",
        description:
          "Formally record that the statutory time limit under Clause 25 GCC has expired without resolution, formally terminating departmental conciliation.",
      },
      {
        step: "Serve Section 21 Arbitration Invocation Notice",
        description:
          "Serve a Section 21 notice on the Chief Engineer / Director General CPWD / NHAI Project Director, quantifying principal certified dues, price escalation, prolongation overheads, and interest.",
      },
      {
        step: "Section 11(6) Neutral Arbitrator Appointment",
        description:
          "If the department fails to agree on an independent arbitrator or attempts to impose an internal departmental officer contrary to Section 12(5) and Perkins Eastman, petition the High Court under Section 11(6) for a neutral retired High Court/Supreme Court judge appointment.",
      },
    ],
    statutoryRule: "CPWD GCC Clause 25 & Arbitration and Conciliation Act 1996 (ss. 11, 12(5), 21)",
  },
  {
    id: "railways-blacklisting-threat",
    tabLabel: "Railways / Municipal Coercion",
    title: "Railways / Municipal Corporation Threatens Penalty or Blacklisting When Dues Are Demanded",
    cause:
      "A railway track doubling, station redevelopment, or municipal storm water drainage project completes. When the contractor serves demand letters or legal notices for unpaid certified dues, the Senior Divisional Engineer (Sr. DEN) or Municipal Commissioner retaliates by issuing a show-cause notice for alleged delay, imposing arbitrary Liquidated Damages (LD), or threatening blacklisting/debarment from upcoming tenders.",
    legalBasis:
      "The Supreme Court in Gorkha Security Services v. Govt. of NCT of Delhi (2014) 9 SCC 105 and Kulja Industries Ltd. v. Western Telecom (2014) 14 SCC 73 held that blacklisting results in 'civil death' of a business enterprise and must comply with strict natural justice. Blacklisting or penalizing a contractor merely because they legally demanded admitted contractual dues is malicious, arbitrary, and an abuse of sovereign power in direct violation of Article 14 of the Constitution.",
    steps: [
      {
        step: "Exhaustive Reply to Retaliatory Show-Cause Notice",
        description:
          "Submit a comprehensive factual reply citing joint site inspection reports, delayed site handover (hindrance registers), and reciprocal breach by the employer under Indian Contract Act Section 54.",
      },
      {
        step: "Section 9 Urgent Injunction on Bank Guarantees",
        description:
          "If the authority threatens to encash Performance Bank Guarantees (PBG) or Security Deposits to enforce arbitrary LD, file an urgent Section 9 petition in the Commercial Court for interim stay.",
      },
      {
        step: "High Court Article 226 Stay on Debarment",
        description:
          "Approach the High Court under Article 226 to quash any arbitrary debarment proceedings and compel the municipal or railway authority to deposit admitted bill amounts before the court registry.",
      },
    ],
    statutoryRule: "Supreme Court *Gorkha Security Services* & *Kulja Industries* Doctrines",
  },
];

export default function GovernmentContractorScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
          Operational Recovery Scenarios
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          How to Legally Counter 4 Government Bill Withholding Excuses
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select a departmental bottleneck below to examine the exact statutory remedy, Supreme Court precedent, and immediate advocate counter-actions.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-2">
          <p className="text-base sm:text-lg font-bold text-slate-900">
            {current.title}
          </p>
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-red-50 text-[#DC2626] border border-red-200 shrink-0">
            {current.statutoryRule}
          </span>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Departmental Modus Operandi & Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.cause}
            </p>
          </div>

          <div className="p-4 bg-slate-50 border-l-4 border-[#DC2626] rounded-r-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              Statutory Leverage & Supreme Court Position
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            3-Stage Legal Recovery Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-xs font-bold text-slate-900 leading-tight">
                      {st.step}
                    </p>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
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
