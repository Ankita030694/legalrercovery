"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  contractProfile: string;
  contractorDefense: string;
  legalFailureMode: string;
  recommendedPlaybook: string;
  statutoryCitations: string[];
  recoveryTimeline: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "secret-settlement",
    badge: "Scenario 1: Secret Global Settlement",
    title: "Prime EPC Settled with Developer Behind Subcontractor's Back",
    contractProfile:
      "A Tier-2 HVAC/MEP subcontractor completed ₹4.2 Crore worth of chilled-water piping and air handling unit (AHU) installations on a commercial office tower. The prime contractor issued a subcontract containing a standard 'back-to-back payment upon realization from employer' clause. Months later, the prime contractor entered into a private full-and-final settlement with the developer for ₹38 Crore, but withheld the subcontractor's final bill and ₹42 Lakh retention.",
    contractorDefense:
      "The prime contractor claims the employer deducted massive liquidated damages (LD) from the overall project and that no specific funds were allocated or released for the subcontractor's scope under the global settlement deed.",
    legalFailureMode:
      "Accepting this excuse is commercially fatal. Under the Indian Contract Act, 1872 (Section 53 and Section 67) and the established doctrine of Prevention, once a prime contractor compromises its claim with the employer without the subcontractor's concurrence, the condition precedent is extinguished. The prime contractor cannot compromise the subcontractor's independent right to be paid.",
    recommendedPlaybook:
      "Issue an immediate Section 21 Arbitration notice or Section 12A Commercial Pre-Institution Mediation demand. File an application under Order XI of the CPC or Section 27 of the Arbitration Act demanding mandatory production of the confidential settlement agreement between the prime and the developer. High Courts hold that secret compromises render the back-to-back defense null and void, triggering immediate personal liability against the prime contractor.",
    statutoryCitations: [
      "Indian Contract Act, 1872 (s. 53, s. 67)",
      "Simplex Infrastructures Ltd. v. Siemens Ltd. (Del HC)",
      "Code of Civil Procedure, 1908 (Order XI - Discovery & Production)",
    ],
    recoveryTimeline: "4 to 6 Months via Commercial Court / Fast-Track Sole Arbitrator",
  },
  {
    id: "sit-on-hands",
    badge: "Scenario 2: Sit-on-Hands Inaction",
    title: "Prime Contractor Fails to Sue or Arbitrate Against the Employer",
    contractProfile:
      "A structural steel fabrication subcontractor completed work on an elevated metro corridor package 28 months ago. Measurement books were signed and virtual completion was certified. The prime EPC contractor has withheld ₹1.85 Crore in balance RA bills, asserting that the Metro Rail Corporation has not released the milestone grant due to project prolongation.",
    contractorDefense:
      "Prime contractor relies on a clause stating: 'Subcontractor shall be paid strictly within 15 days of receipt of payment by Main Contractor from the Principal Employer.' The prime has sent two polite reminder letters to the employer but refused to invoke arbitration or file suit.",
    legalFailureMode:
      "Assuming 'pay-when-paid' permits perpetual non-payment. Under Section 46 of the Indian Contract Act, 1872, where no time limit is specified for an event, performance must occur within a 'reasonable time'. A prime contractor cannot sit on its hands indefinitely. The 'prevention principle' dictates that failing to diligently pursue the owner forfeits the conditional payment defense.",
    recommendedPlaybook:
      "Issue a 15-day statutory demand notice asserting that the reasonable time contemplated under Section 46 has lapsed. Establish that the subcontract clause operates merely as a timing mechanism, not a risk-transfer condition precedent. File a Summary Suit under Order XXXVII CPC if the Measurement Book is signed, or invoke Section 11(6) for an independent sole arbitrator. Claim 18% commercial interest from the date of reasonable time expiry.",
    statutoryCitations: [
      "Indian Contract Act, 1872 (s. 46 - Reasonable Time Doctrine)",
      "Larsen & Toubro Ltd. v. Mohan Regional (Del HC)",
      "Interest Act, 1978 (s. 3 - 18% Commercial Rate)",
    ],
    recoveryTimeline: "3 to 5 Months via Order XXXVII CPC or Section 11 Arbitration",
  },
  {
    id: "discrete-milestone",
    badge: "Scenario 3: Certified Discrete Milestone",
    title: "Subcontractor Scope Certified but Main Contractor Delayed on Other Works",
    contractProfile:
      "A specialized piling and deep foundation subcontractor executed diaphragm walls for an IT SEZ basement. The foundation was inspected, tested, and certified by the Project Management Consultant (PMC). The prime contractor subsequently suffered catastrophic delays in the super-structure civil works and curtain wall installation, leading the employer to freeze overall project disbursements.",
    contractorDefense:
      "The prime contractor asserts that under the 'back-to-back' subcontract clause, no payment is due because the employer has frozen total project running bills and encashed the prime's performance bank guarantee.",
    legalFailureMode:
      "Allowing the prime contractor to penalize the subcontractor for breaches committed by other independent trade contractors. High Courts consistently rule that an innocent subcontractor whose work is distinct, approved, and handed over cannot be subjected to broad project-wide set-offs.",
    recommendedPlaybook:
      "Serve a formal legal notice segregating the certified foundation scope from the delayed superstructure works. Invoke Section 70 of the Indian Contract Act (Quantum Meruit) and Section 73 for damages. Emphasize that the employer is beneficially utilizing the subcontractor's diaphragm wall. Where an arbitration clause exists, petition under Section 9 of the Arbitration Act for an order securing the amount in dispute through a bank deposit.",
    statutoryCitations: [
      "Indian Contract Act, 1872 (s. 70 Quantum Meruit, s. 73)",
      "Arbitration and Conciliation Act, 1996 (s. 9 Interim Security)",
      "Commercial Courts Act, 2015 (s. 2(1)(c)(vi))",
    ],
    recoveryTimeline: "60 to 90 Days for Section 9 Interim Asset Security Order",
  },
  {
    id: "direct-garnishee",
    badge: "Scenario 4: Direct Employer Garnishee",
    title: "Overcoming Privity of Contract via Direct Garnishee on Employer",
    contractProfile:
      "An earthwork and site grading subcontractor is owed ₹2.60 Crore by a financially distressed mid-tier EPC contractor executing a national highway package for NHAI. The prime contractor is on the verge of NCLT insolvency proceedings, while NHAI currently holds ₹14 Crore in retention money and pending escrow disbursements payable to the prime.",
    contractorDefense:
      "Both the prime contractor and NHAI assert 'privity of contract'—claiming the subcontractor has no direct cause of action or legal standing against the Principal Employer.",
    legalFailureMode:
      "Waiting for the prime contractor to enter Corporate Insolvency Resolution Process (CIRP) under IBC, which would freeze all debt enforcement under Section 14 moratorium and relegate the subcontractor to an unsecured operational creditor receiving near-zero recovery.",
    recommendedPlaybook:
      "File an immediate commercial proceeding coupled with an application under Order XXXVIII Rule 5 and Order XXI Rule 46 of the Code of Civil Procedure (CPC) or Section 9(1)(ii)(b) of the Arbitration Act. Obtain an interim Garnishee Order directing NHAI to attach and deposit ₹2.60 Crore directly into the High Court / Commercial Court registry from funds earmarked for the main contractor. This bypasses the prime's bank accounts and creates a secured lien prior to any insolvency trigger.",
    statutoryCitations: [
      "Code of Civil Procedure, 1908 (Order XXI Rule 46 & Order XXXVIII Rule 5)",
      "Arbitration and Conciliation Act, 1996 (s. 9(1)(ii)(b) Earmarked Receivables)",
      "Insolvency and Bankruptcy Code, 2016 (s. 14 Pre-Moratorium Security)",
    ],
    recoveryTimeline: "30 to 45 Days for High Court / Commercial Court Garnishee Freeze",
  },
];

export default function PayWhenPaidScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Header Bar */}
      <div className="bg-slate-900 text-white p-4 sm:p-5">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 block mb-1">
          Subcontractor Dispute Scenarios &bull; Tactical Remedies
        </span>
        <h3 className="text-base sm:text-lg font-bold text-white">
          Overcoming Common Back-to-Back Contractor Traps in Indian Construction
        </h3>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-thin">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-4 py-3 text-xs sm:text-sm font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {scenario.badge.split(":")[0]}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="p-5 sm:p-7 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
              {activeScenario.badge}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
              {activeScenario.title}
            </h4>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full self-start sm:self-auto">
            {activeScenario.recoveryTimeline}
          </span>
        </div>

        {/* Contractual Profile */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-1.5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Factual Matrix &amp; Subcontract Profile
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {activeScenario.contractProfile}
          </p>
        </div>

        {/* Defense vs Failure Mode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200 space-y-1.5">
            <p className="text-xs font-bold uppercase tracking-wider text-red-900">
              EPC Main Contractor&apos;s Defense
            </p>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
              {activeScenario.contractorDefense}
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 space-y-1.5">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Contractual &amp; Statutory Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {activeScenario.legalFailureMode}
            </p>
          </div>
        </div>

        {/* Recommended Legal Playbook */}
        <div className="bg-emerald-50 rounded-xl p-4 sm:p-5 border border-emerald-200 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
            Recommended Subcontractor Recovery Playbook
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
            {activeScenario.recommendedPlaybook}
          </p>
        </div>

        {/* Statutory Citations Footer */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Verified Precedents &amp; Statutes:
          </span>
          {activeScenario.statutoryCitations.map((cit, idx) => (
            <span
              key={idx}
              className="text-[11px] font-semibold bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-1 rounded-md"
            >
              {cit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
