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
    id: "oc-delay-beneficial-occupation",
    tabLabel: "1. The OC Delay / Deemed DLP Trap",
    title: "Developer Withholds Retention Claiming 'Project OC Not Yet Issued', Even Though Buyers Have Occupied Units",
    badge: "Beneficial Occupation = Deemed Virtual Completion",
    buyerProfile:
      "Civil, Facade, Waterproofing, Turnkey MEP (HVAC, Electrical, Plumbing, Firefighting) and Lift Contractors executing commercial towers, residential townships, and industrial warehouses.",
    pretext:
      "The contractor completed all physical civil and MEP works 14 months ago. The developer took possession, commenced interior fit-outs, and handed over keys to commercial tenants or flat buyers. However, when the contractor applies for final retention release (5%–10% of total contract value), the developer's finance team responds: 'Under Clause 14.2, DLP only commences upon the issuance of the statutory Occupancy Certificate (OC) by the Municipal Corporation / Town Planning Authority. Because the developer's composite OC application is pending administrative clearance, your Defect Liability Period has not even started.'",
    legalReality:
      "Under settled Indian construction law and Supreme Court jurisprudence (*Ambica Construction*, *Brij Bhushan*, and FIDIC / CPWD standard conditions), taking 'Beneficial Occupation' of the works constitutes deemed Virtual Completion. A developer cannot enjoy commercial use, collect rent, or hand over units to buyers while simultaneously denying completion against the contractor. The statutory limitation clock for DLP starts on the date the employer enters physical or beneficial possession. Withholding retention beyond 12 months from beneficial possession is an unlawful forfeiture under Sections 73 and 74 of the Indian Contract Act, 1872.",
    statutoryHook:
      "Indian Contract Act 1872 ss. 73 & 74 + Doctrine of Deemed Virtual Completion + Order XXXVII CPC",
    actionProtocol: [
      "Collate documented proof of Beneficial Occupation: buyer fit-out NOCs, electricity energization logs, security register entries, and municipal property tax assessments.",
      "Issue a formal Notice of Deemed Virtual Completion invoking the actual possession date as the statutory inception of the 12-month Defect Liability Period.",
      "Demolish the OC dependency by demonstrating that municipal clearance delays relate to external developer obligations (setback violations, parking compliance) wholly outside the contractor's scope.",
      "Serve a 15-day statutory demand under Order XXXVII CPC for principal retention plus 18% p.a. commercial interest from the exact DLP expiry date.",
    ],
  },
  {
    id: "invented-post-dlp-snags",
    tabLabel: "2. Invented Post-DLP Punch Lists",
    title: "Developer Fabricates Brand-New Snag Lists at Month 13 to Evade Releasing Retention Funds",
    badge: "Contract Act s.73/74 Bar on Post-Facto Defect Allegations",
    buyerProfile:
      "Finishing, Facade, Waterproofing, Tile, Flooring, and Painting Contractors who executed high-specification surfaces.",
    pretext:
      "During the active 12-month DLP, the developer's project management consultants (PMC) never served a single formal snag notice or defect rectification memorandum. The contractor kept maintenance teams on site for the mandatory period. Exactly when the 365-day DLP lapses and the contractor submits the Final Retention Release Bill, the developer sends a sudden 40-page photographic report alleging paint fading, hairline plaster shrinkage, and joint sealant wear, claiming: 'Retention money of ₹65 Lakh is being forfeited against rectification expenses incurred by third-party vendors.'",
    legalReality:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, an employer cannot forfeit retention security as a unilateral penalty. To lawfully adjust or forfeit retention, the employer must strictly prove: (1) written notification of specific defects *during* the contractual DLP window; (2) contractor's failure to rectify after reasonable contractual notice; and (3) actual vouchers showing genuine commercial expenditure incurred in rectifying those exact defects (*Kailash Nath Associates v. DDA* (2015) 4 SCC 136). Post-DLP snag lists and unverified debit notes have zero evidentiary standing in court.",
    statutoryHook:
      "Kailash Nath Associates v. DDA (2015) 4 SCC 136 + Contract Act ss. 73, 74 + BSA 2023 s.63",
    actionProtocol: [
      "Issue an immediate rebuttal rejecting the post-facto snag list as legally void, time-barred, and manufactured in bad faith after the expiry of the DLP.",
      "Demand certified copies of contemporaneous defect notices issued within the 365-day window, along with third-party tender documents and actual payment receipts for rectification.",
      "Place on record all joint inspection sign-offs, testing and commissioning certificates, and handover inspection sheets signed by PMC engineers.",
      "Dispatch an Advocate Legal Demand Notice warning that unilateral debit notes constitute civil debt default and bad-faith breach of contract under Section 73.",
    ],
  },
  {
    id: "main-contractor-pass-through",
    tabLabel: "3. Main Contractor Pass-Through Refusal",
    title: "Main EPC Contractor Withholds Subcontractor Retention Under 'Pay-When-Paid' Pretext",
    badge: "Independent Subcontract Privity & ODR Escalation",
    buyerProfile:
      "MEP Subcontractors, Piling & Foundation Vendors, Structural Steel Fabricators, and HVAC Installers working under Tier-1 General Contractors (L&T, Shapoorji, Tata Projects, etc.).",
    pretext:
      "The subcontractor completed its package, successfully cleared all testing, and completed its DLP obligations. However, the Tier-1 General Contractor refuses to release the 5% retention deposit, arguing: 'The project owner / institutional client has withheld our composite project retention pool and final bill due to unresolved delay claims. Under the back-to-back pass-through clause in our Work Order, we are only liable to release your retention when the developer releases ours.'",
    legalReality:
      "Under Indian contract law, 'pay-when-paid' or 'pay-if-paid' covenants are interpreted strictly as timing mechanisms, not indefinite conditions precedent. An EPC general contractor cannot permanently withhold payment for completed and accepted works merely because it has independent commercial disputes with the project employer. Unless the contract establishes an unequivocal assumption of insolvency risk, the subcontractor is entitled to its retention within a reasonable period post-DLP. Furthermore, MSME-registered subcontractors can enforce statutory timelines regardless of contrary contractual clauses.",
    statutoryHook:
      "Indian Contract Act s.73 + MSMED Act 2006 ss. 15–18 (for qualifying supply/installation packages) + Commercial Summary Suit",
    actionProtocol: [
      "Review the Work Order: ascertain whether the clause creates an absolute condition precedent or merely specifies an administrative settlement timeframe.",
      "Establish lack of privity with the ultimate developer: demand immediate release from the general contractor based on independent defect-free performance.",
      "If registered as a Micro/Small enterprise, examine the invoice split between goods supply and works to determine MSMED Act / Section 43B(h) applicability.",
      "Serve a 15-day statutory demand on the Main Contractor holding managing directors personally liable for intentional diversion of project retention funds.",
    ],
  },
  {
    id: "developer-distress-rera-escrow",
    tabLabel: "4. Developer Distress & Escrow Diversion",
    title: "Developer Facing Stalled Projects, Liquidity Crunch, or RERA Inquiry Ignores Retention Demands",
    badge: "RERA Section 4(2)(l)(D) Escrow & Insolvency Preemption",
    buyerProfile:
      "Turnkey Contractors and Specialized Civil Contractors working on high-density residential housing or commercial IT parks.",
    pretext:
      "The project was completed and DLP concluded, but the developer has defaulted on senior bank debts, is facing homebuyer litigation before RERA or NCLT, and has ceased answering telephone calls, emails, or registered letters. The developer treats the accumulated contractor retention money (often ₹1 Cr to ₹10 Cr across packages) as an interest-free working capital loan to keep its corporate office functioning.",
    legalReality:
      "Contractor retention money deducted from Running Account (RA) bills is held in a fiduciary capacity strictly as security against defect rectification, not as general corporate assets of the developer. Under Section 4(2)(l)(D) of RERA, 70% of all project collections must be deposited in a designated escrow account to cover construction costs. Diverting construction allocations while withholding contractor retention violates statutory escrow mandates. Contractors have urgent remedies under Order XXXVIII Rule 5 CPC (attachment before judgment) and Section 9 of the Arbitration Act to freeze unsold inventory or project escrow accounts.",
    statutoryHook:
      "RERA Act 2016 s.4(2)(l)(D) + CPC Order XXXVIII Rule 5 + Arbitration Act s.9 (Interim Asset Freeze)",
    actionProtocol: [
      "Conduct immediate asset and escrow tracing: identify the developer's designated RERA project account, unsold flat inventory, and commercial leasing receivables.",
      "Issue an urgent composite Demand Notice asserting fiduciary breach and breach of trust under BNS Section 316 for converting security deductions into corporate funds.",
      "File an urgent pre-decree attachment application under Order XXXVIII Rule 5 CPC or Section 9 Arbitration Act to secure the retention claim amount against bank accounts.",
      "Initiate Section 12A Commercial Courts Pre-Institution Mediation or section 21 Arbitration notice to prevent limitation from lapsing.",
    ],
  },
];

export default function RetentionRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Tab Navigation Header */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto scrollbar-none">
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeTab;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`shrink-0 px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              <span>{sc.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-3">
            {currentScenario.badge}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {currentScenario.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            <strong>Target Contractor Profile:</strong> {currentScenario.buyerProfile}
          </p>
        </div>

        {/* 2-Column Comparison: Developer Pretext vs Statutory Reality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Developer Pretext & Commercial Stall
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.pretext}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Statutory Ground & Judicial Reality
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentScenario.legalReality}
            </p>
            <div className="mt-3 pt-3 border-t border-emerald-200/60">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                Key Law:{" "}
              </span>
              <span className="text-xs font-semibold text-emerald-950">
                {currentScenario.statutoryHook}
              </span>
            </div>
          </div>
        </div>

        {/* Action Protocol Steps */}
        <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800">
          <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
            Contractor Enforcement Protocol
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {currentScenario.actionProtocol.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
