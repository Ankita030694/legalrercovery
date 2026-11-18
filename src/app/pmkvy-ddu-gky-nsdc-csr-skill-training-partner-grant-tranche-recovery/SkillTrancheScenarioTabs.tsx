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
    id: "ssdm-tranche-hold",
    tabLabel: "1. SSDM Tranche-2/3 Hold",
    title: "State Skill Mission Holds 30%–50% Placement Tranche for 18–36 Months Post-Audit",
    cause:
      "Under PMKVY 3.0/4.0 and DDU-GKY Common Norms, Training Partners (TPs) self-fund residential mobilisation, trainer salaries, and lab rentals upfront, receiving Tranche-1 (30%) on batch commencement and Tranche-2/3 (30%–50%) only after Sector Skill Council (SSC) certification and 70% placement verification. State Skill Development Missions (SSDMs) routinely stall final payouts for 2+ years citing 'central fund release pending' or repetitive desk re-verification, pushing TPs toward bank NPAs.",
    legalBasis:
      "Once AEBAS biometric attendance, SSC assessment results, and 3-month continuous bank-credited salary / EPFO-UAN placement proofs are uploaded and audited on Skill India Portal or Kaushal Bharat, the liability transforms into an admitted, crystallized contractual debt. Under Article 226 of the Constitution (ABL International Ltd. v. Export Credit Guarantee Corpn. of India Ltd., (2004) 3 SCC 553), arbitrary withholding of undisputed contractual dues by a State instrumentality violates Article 14, permitting Writ Mandamus where no disputed questions of fact remain.",
    steps: [
      {
        step: "Serve Statutory Section 80 CPC Notice on SSDM Mission Director",
        description:
          "Issue a formal 60-day Section 80 CPC notice to the State Principal Secretary (Skill Development) and SSDM Mission Director annexing batch-wise AEBAS logs, SSC result sheets, and Chartered Accountant-certified Utilisation Certificates (UCs).",
      },
      {
        step: "Invoke MOU Arbitration or File High Court Writ Mandamus",
        description:
          "Where the SSDM MOU lacks an arbitration clause or the Mission admits the audited bill while citing budget unavailability, file an Article 226 Writ Petition seeking time-bound release with interest; otherwise trigger Section 21 Arbitration.",
      },
      {
        step: "Claim Interest on Delayed Public-Sector Receivables",
        description:
          "For non-grant commercial service contracts with PSUs or NSDC-empanelled agencies where the TP holds Udyam MSME registration for training/testing services, evaluate MSEFC conciliation under Sections 15–18 MSMED Act.",
      },
    ],
    statutoryRule: "Section 80 CPC (60-Day Notice) | Article 226 Constitution of India | ABL International (2004) 3 SCC 553",
  },
  {
    id: "wrongful-bg-invocation",
    tabLabel: "2. Wrongful BG Invocation",
    title: "SSDM Threatens Performance Bank Guarantee (PBG) Encashment During Pending Reconciliation",
    cause:
      "Training Partners furnish 5%–10% Performance Bank Guarantees (PBGs) to SSDMs or NSDC. When a TP demands overdue Tranche-2/3 payments or disputes unilateral drop-out penalties caused by State portal downtime, Mission officials threaten immediate PBG invocation and blacklisting to coerce a 'no-claim' settlement.",
    legalBasis:
      "While courts ordinarily restrain interference with unconditional Bank Guarantees, an injunction under Section 9 of the Arbitration and Conciliation Act, 1996 (or Order XXXIX Rules 1–2 CPC / Article 226) is maintainable where invocation involves egregious fraud, special equities, or irretrievable injustice—particularly when the invoking State agency itself owes 3x–5x the BG value in audited, unpaid tranches.",
    steps: [
      {
        step: "File Urgent Section 9 Arbitration / Writ Interim Application",
        description:
          "Move the Commercial Court or High Court prior to bank encashment with audited tranche ledgers proving that the SSDM is in net default and invoking the PBG solely as a retaliatory pressure tactic.",
      },
      {
        step: "Put the Issuing Bank on Formal Written Notice of Fraud / Special Equities",
        description:
          "Serve the court filing receipt and reconciliation ledger on the issuing bank branch manager so the bank records the pending judicial scrutiny before honouring any demand.",
      },
      {
        step: "Challenge Unilateral Blacklisting Without Show-Cause Hearing",
        description:
          "Under settled Supreme Court precedent (Gorkha Security Services / Kulja Industries), debarment or blacklisting without a specific show-cause notice and reasoned speaking order is void under Article 14.",
      },
    ],
    statutoryRule: "Section 9 Arbitration Act, 1996 | Order XXXIX CPC | Article 14 Natural Justice (Kulja Industries)",
  },
  {
    id: "csr-foundation-freeze",
    tabLabel: "3. Corporate CSR Freeze",
    title: "Corporate CSR Foundation or PSU Withholds Milestone Disbursements After Training Delivery",
    cause:
      "Under Section 135 of the Companies Act, 2013, listed corporates and PSUs route skill-development budgets through Section 8 CSR Foundations or direct Implementing Agency (IA) MOUs. When CSR heads change or the corporate's FY budget lapses on 31 March, final 30%–40% outcome tranches are frozen citing 'unapproved placement variance' despite 100% batch completion.",
    legalBasis:
      "CSR Implementing Agency agreements are enforceable commercial contracts under the Indian Contract Act, 1872—not gratuitous charity. Unlike sovereign SSDMs, Section 8 CSR Foundations and corporate sponsors do not enjoy Section 80 CPC immunity and are directly amenable to Order XXXVII CPC Summary Suits (for liquidated milestone invoices), Commercial Courts Act s.12A pre-institution mediation, and Section 138 NI Act / Section 25 PSS Act prosecution if milestone cheques or NACH mandates bounce.",
    steps: [
      {
        step: "Audit the CSR MOU & Form CSR-1 / Impact Assessment Obligations",
        description:
          "Extract the exact milestone schedule, Form CSR-1 registration, and quarterly Utilisation Certificate acknowledgments signed by the corporate CSR committee or project monitor.",
      },
      {
        step: "Issue Commercial Demand Notice + s.12A Mediation / Order 37 Suit",
        description:
          "Serve an Advocate Demand Notice on the CSR Foundation and its parent corporate sponsor (where co-signatory) claiming principal tranche + 18% contractual/commercial interest under the Interest Act, 1978.",
      },
      {
        step: "Prosecute Dishonoured Milestone Cheques Under NI Act s.138",
        description:
          "Where a CSR Foundation issued a post-dated or milestone cheque that returned unpaid ('Account Closed' or 'Funds Insufficient'), trigger the mandatory 30-day statutory demand notice under Section 138 NI Act.",
      },
    ],
    statutoryRule: "Section 135 Companies Act, 2013 | Commercial Courts Act s.12A | Order XXXVII CPC | NI Act s.138",
  },
  {
    id: "arbitration-vs-writ",
    tabLabel: "4. MOU Arbitration Clause",
    title: "SSDM MOU Contains a Unilateral 'Mission Director as Sole Arbitrator' Clause",
    cause:
      "Older SSDM and State skill-tender MOUs routinely stipulate that 'any dispute shall be referred to the sole arbitration of the Mission Director / Principal Secretary, whose decision shall be final.' Training Partners hesitate to invoke arbitration fearing institutional bias.",
    legalBasis:
      "Under Section 12(5) read with the Seventh Schedule of the Arbitration and Conciliation Act, 1996—as settled by the Supreme Court in Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) 20 SCC 760 and reaffirmed by the 5-Judge Constitution Bench in Central Organisation for Railway Electrification (CORE) (2024)—an official of a contracting State agency or anyone nominated unilaterally by an interested party is statutorily ineligible to act as or appoint a sole arbitrator.",
    steps: [
      {
        step: "Serve Section 21 Arbitration Invocation Demanding Independent Tribunal",
        description:
          "Issue a Section 21 notice invoking arbitration while expressly objecting to any unilateral Mission Director nomination under Section 12(5) and proposing a neutral 3-name panel or institutional arbitration.",
      },
      {
        step: "File Section 11(6) Petition Before the High Court",
        description:
          "If the SSDM fails to concur on an independent arbitrator within 30 days (or insists on an ineligible departmental officer), petition the jurisdictional High Court under Section 11(6) for appointment of a retired Judge / neutral arbitrator.",
      },
      {
        step: "Fast-Track Award & Section 36 Execution",
        description:
          "Under Section 29A, arbitral proceedings must conclude within 12 months (extendable by 6 months), yielding an enforceable money decree executable against State agency bank accounts under Section 36 read with Order XXI CPC.",
      },
    ],
    statutoryRule: "Section 12(5) & Section 11(6) Arbitration Act | Perkins Eastman (2020) 20 SCC 760 | CORE 5-Judge Bench",
  },
];

export default function SkillTrancheScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Strip */}
      <div
        role="tablist"
        aria-label="Skill Training and CSR Tranche Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="border-b border-slate-200 pb-4">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            Creditor Playbook
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Operational Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.cause}</p>
          </div>

          <div className="bg-white border-l-4 border-[#DC2626] border-y border-r border-slate-200 rounded-r-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Binding Statutory &amp; Judicial Hook
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-3">
            3-Step Institutional Execution Sequence
          </p>
          <div className="space-y-3">
            {current.steps.map((item, idx) => (
              <div
                key={item.step}
                className="flex items-start gap-3.5 bg-white border border-slate-200 rounded-xl p-4"
              >
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-1">{item.step}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl px-4 py-3 text-xs font-semibold flex flex-wrap items-center gap-2">
          <span className="text-red-400 font-extrabold uppercase tracking-wider">Authority:</span>
          <span>{current.statutoryRule}</span>
        </div>
      </div>
    </div>
  );
}
