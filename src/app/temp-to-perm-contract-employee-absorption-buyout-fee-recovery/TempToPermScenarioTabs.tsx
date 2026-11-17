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
    id: "covert-direct-absorption",
    tabLabel: "Covert Direct Absorption",
    title: "Client Quietly Converts Contract Engineers to Direct Rolls Without Paying Agreed C2H Buyout Fee",
    cause:
      "Enterprise clients identify high-performing deputed contract staff (software engineers, financial analysts, customer success leads), bypass the staffing vendor, and issue direct employment offer letters. The client evades the 15%–25% CTC buyout fee stipulated in the Master Services Agreement (MSA) by having the employee tender a standard resignation to the staffing firm without disclosing the new employer.",
    legalBasis:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, conversion and buyout clauses represent a legally enforceable liquidated damage and pre-estimated commercial compensation for recruitment, testing, and replacement overheads. Delhi High Court in Wipro v. Beckman Coulter confirmed that commercial non-solicitation and buyout covenants between two corporate entities do NOT violate Section 27 because they do not restrict the employee's fundamental freedom to work, but establish a contractual debt obligation between the corporate parties.",
    steps: [
      {
        step: "Electronic UAN & LinkedIn Audit",
        description:
          "Extract the employee's EPFO Universal Account Number (UAN) transfer logs showing the client's establishment code, corporate email address issuance, and updated employment records under Section 63 BSA 2023.",
      },
      {
        step: "Contractual Buyout Matrix Crystallization",
        description:
          "Apply the exact contractual conversion slab (e.g., 20% CTC if converted within 0–6 months; 15% if 6–12 months) based on original deployment timestamps and issue an immediate conversion fee debit note.",
      },
      {
        step: "Advocate Statutory Demand Notice",
        description:
          "Serve a formal 15-day statutory demand notice invoking Contract Act Sections 73/74, citing the client's direct breach of commercial covenants and demanding immediate remittance of the buyout fee plus 18% GST.",
      },
    ],
    statutoryRule: "Sections 73 & 74 Indian Contract Act, 1872 read with Delhi HC in Wipro v. Beckman Coulter",
  },
  {
    id: "mass-workforce-rebadging",
    tabLabel: "Mass Rebadging to Rival Vendor",
    title: "Enterprise Transfers 50–200 Deployed Associates to a Cheaper Vendor While Freezing Your Final Invoices",
    cause:
      "An enterprise client negotiates a 1% lower markup with an aggressive competitor or vendor-consolidation partner. Instead of sourcing new talent, the enterprise forces 100+ of your trained contract associates to resign en masse on Friday and report on Monday under the new vendor's payroll, while simultaneously freezing your last 60–90 days of pass-through payroll invoices under pretext of 'pending audit and exit handovers'.",
    legalBasis:
      "This constitutes tortious interference with contractual relations and a blatant breach of contractual non-solicitation covenants under Section 73 of the Indian Contract Act. Furthermore, holding undisputed pass-through salary and statutory PF/ESIC invoices hostage is strictly illegal under the Contract Labour (R&A) Act Section 21(4) and attracts mandatory 3x RBI compound interest under Section 16 of the MSMED Act, 2006.",
    steps: [
      {
        step: "Immediate Payroll Ledger Ring-Fencing",
        description:
          "Formally de-link the undisputed historical payroll invoices (disbursed salaries, EPF, ESIC, and GST) from exit handovers, serving an interim payment demand under Section 43B(h) of the Income Tax Act.",
      },
      {
        step: "Collective Buyout & Compensation Quantification",
        description:
          "Calculate the total recruitment replacement cost and buyout entitlement across all rebadged headcount, compiling a consolidated roster of poached staff.",
      },
      {
        step: "Commercial Court Interim Injunction / Pre-Institution Mediation",
        description:
          "Initiate urgent Commercial Courts Act Section 12A mediation or apply for Order 38 Rule 5 attachment before judgment if the client attempts to dissipate vendor balances or transfer funds to the replacement vendor.",
      },
    ],
    statutoryRule: "Contract Labour (R&A) Act s.21(4), MSMED Act s.16 & Commercial Courts Act 2015",
  },
  {
    id: "disguised-freelancer-absorption",
    tabLabel: "Disguised Contractor / LLC Onboarding",
    title: "Client Circumvents C2H Buyout by Onboarding Associate via Third-Party LLC or Freelance Retainer",
    cause:
      "To circumvent clear contractual C2H clauses that prohibit 'hiring as an employee', the enterprise client instructs the deputed associate to incorporate an LLP/Sole Proprietorship or onboard via an offshore entity as an 'independent consultant' or 'vendor partner' doing the exact same role at the same client facility.",
    legalBasis:
      "Indian commercial courts apply the 'substance over form' doctrine. Under Section 70 of the Indian Contract Act, 1872 (Quantum Meruit) and principles of constructive circumvention, the client has knowingly enjoyed the non-gratuitous benefit of the vendor's candidate introduction and continuous deployment. Corporate veils are pierced to reveal that the economic reality is a direct absorption intended to defeat valid contract rights.",
    steps: [
      {
        step: "Scope of Work & Reporting Trail Mapping",
        description:
          "Document that the associate continues reporting to the identical client managers, utilizes client infrastructure/software licenses, and delivers the exact same deliverables.",
      },
      {
        step: "Piercing the Circumvention Vehicle",
        description:
          "Issue a legal notice citing the beneficial ownership and indirect hiring provisions in the MSA, proving that consultant onboarding constitutes circumvention of the C2H buyout obligation.",
      },
      {
        step: "Demand for Standard Buyout + Damages",
        description:
          "Demand the full contractual conversion percentage based on annual billings or compensation, along with interest and advocate costs.",
      },
    ],
    statutoryRule: "Section 70 Indian Contract Act, 1872 (Quantum Meruit & Unjust Enrichment)",
  },
  {
    id: "expired-msa-defense",
    tabLabel: "Expired MSA / No Written Slab Defense",
    title: "Client Claims MSA Expired or Buyout Slab Not Specified in SOW So Absorption is 'Free'",
    cause:
      "The initial 1-year Master Services Agreement expired, and parties operated on informal email extensions and purchase order renewals. When the client absorbs 8 contractors, corporate legal responds: 'Our contract expired 4 months ago, and there is no operative C2H buyout rate, so we owe zero conversion fees.'",
    legalBasis:
      "Under Section 8 of the Indian Contract Act, performance of the conditions of a proposal constitutes acceptance by conduct. When parties continue commercial operations post-expiry of a written term, the substantive covenants (including non-solicitation, C2H buyout slabs, and confidential terms) continue by implied renewal. Even in the absence of an explicit rate card, Section 70 mandates fair commercial compensation on quantum meruit at prevailing industry benchmarks (standard 8.33% to 15% CTC).",
    steps: [
      {
        step: "Establishment of Contract by Conduct",
        description:
          "Compile email exchanges, approved timesheets, and purchase orders issued post-contract expiry proving unbroken commercial engagement under Section 10A IT Act.",
      },
      {
        step: "Industry Standard Quantum Meruit Benchmark",
        description:
          "Formally benchmark market conversion rates (8.33% to 16.66% CTC) supported by expert staffing association norms (e.g., Indian Staffing Federation guidelines).",
      },
      {
        step: "Statutory Summary Suit (Order 37 CPC)",
        description:
          "File an Order 37 CPC summary suit for debt based on written admissions of deployed associate compensation, timesheets, and invoices.",
      },
    ],
    statutoryRule: "Sections 8 & 70 Indian Contract Act, 1872 read with Order XXXVII CPC",
  },
];

export default function TempToPermScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
          Tactical Escalation Playbook
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
          How to Prosecute 4 Common C2H Buyout Evasion &amp; Rebadging Scenarios
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select a commercial dispute scenario to view the legal basis, statutory backing, and step-by-step counter-action.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="space-y-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Commercial Dispute Scenario
          </span>
          <h4 className="text-base sm:text-lg font-black text-slate-900 mb-2">
            {current.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {current.cause}
          </p>
        </div>

        <div className="bg-red-50/70 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
            Statutory Rule &amp; Legal Framework
          </span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium mb-2">
            {current.legalBasis}
          </p>
          <span className="inline-block px-2.5 py-1 rounded-md bg-white border border-red-200 text-[11px] font-bold text-red-700">
            {current.statutoryRule}
          </span>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
            Actionable Legal Escalation SOP
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {st.step}
                    </strong>
                  </div>
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
