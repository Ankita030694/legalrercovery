"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  contractProfile: string;
  employerDefense: string;
  legalFailureMode: string;
  recommendedPlaybook: string;
  statutoryCitations: string[];
  recoveryTimeline: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "turnkey-epc",
    badge: "Scenario 1: Indivisible Turnkey EPC",
    title: "Solar, Substation or Heavy Civil Turnkey Package",
    contractProfile:
      "A registered Small Enterprise enters a single composite EPC contract for civil foundation, equipment supply, erection, and commissioning for ₹8.5 Crore. The main EPC contractor withholds ₹2.4 Crore in milestone RA bills and retention.",
    employerDefense:
      "Debtor files a preliminary objection before MSEFC and threatens a High Court Writ under Article 226/227 citing Konaark Industries v. Tata Projects and Shree Gee Enterprises, asserting the contract is an indivisible works contract outside MSMED Act Section 18.",
    legalFailureMode:
      "Filing before MSEFC is fatal. Even if the Facilitation Council erroneously awards the claim, the High Court will quash the award under Section 34 of the Arbitration Act for total lack of subject-matter jurisdiction, exhausting the 3-year limitation clock.",
    recommendedPlaybook:
      "Abandon MSEFC immediately. Issue a 15-day commercial dispute notice under the contract, move Section 9 of the Arbitration and Conciliation Act in the High Court for interim asset protection or to freeze encashment of Performance Bank Guarantees (PBG), and petition under Section 11(6) for an independent sole arbitrator.",
    statutoryCitations: [
      "Konaark Industries v. Tata Projects Ltd. (Bom HC)",
      "Arbitration and Conciliation Act, 1996 (s. 9 & s. 11)",
      "Commercial Courts Act, 2015 (s. 2(1)(c)(vi))",
    ],
    recoveryTimeline: "6 to 9 Months via Fast-Track Sole Arbitrator",
  },
  {
    id: "mep-hvac",
    badge: "Scenario 2: Commercial MEP / HVAC Works",
    title: "Turnkey HVAC, Electrical & Fire-Fighting Building Packages",
    contractProfile:
      "An MEP subcontractor undertakes supply, installation, ducting, cabling, and testing for an IT park or hospital for ₹3.2 Crore under a single lump-sum Works Contract with integrated Bill of Quantities (BoQ). Outstanding dues: ₹78 Lakh in final RA bills and DLP retention.",
    employerDefense:
      "Real estate developer disputes the bill claiming minor site snagging, invokes the indivisible works contract defense to block MSME Samadhaan, and hides behind a contractual 'pay-when-paid' back-to-back clause.",
    legalFailureMode:
      "MSEFC reference will trigger 18–24 months of jurisdictional hearings on whether chiller supply can be segregated from ducting labor, ultimately resulting in rejection under Section 2(n).",
    recommendedPlaybook:
      "If the developer certified the joint Measurement Book (MB) or issued Handover Sign-Off, file an Order XXXVII CPC Summary Suit in the Commercial Court. Where an arbitration clause exists, issue Section 21 notice, repudiate the back-to-back clause under Indian Contract Act Section 23/28, and demand 18% commercial interest under the Interest Act, 1978.",
    statutoryCitations: [
      "Code of Civil Procedure, 1908 (Order XXXVII)",
      "Shree Gee Enterprises v. UOI (Del HC)",
      "Indian Contract Act, 1872 (s. 23 & s. 70 Quantum Meruit)",
    ],
    recoveryTimeline: "4 to 7 Months via Commercial Court Summary Track",
  },
  {
    id: "dual-po-split",
    badge: "Scenario 3: Restructured Dual-PO Setup",
    title: "Divisible Equipment Supply PO + Separate Erection Contract",
    contractProfile:
      "A prudent MSME fabricator executes two distinct agreements with a solar developer: PO-01 for ₹4.0 Crore covering manufacturing and supply of mounting structures (retaining title till gate delivery), and PO-02 for ₹80 Lakh covering site labor and installation.",
    employerDefense:
      "Developer attempts to conflate both POs into one 'composite economic transaction' to deny MSEFC jurisdiction over the ₹1.1 Crore unpaid supply invoices.",
    legalFailureMode:
      "Contractor risks capitulating to the employer's bluff and abandoning MSME Samadhaan, unaware that High Courts explicitly allow MSEFC references for pure supply contracts even when executed in the same project ecosystem.",
    recommendedPlaybook:
      "Enforce the divisible nature of PO-01 before MSEFC under the Tata Power and Sterling & Wilson exceptions. Present independent E-Way Bills, GST invoices with HSN codes, and gate passes proving complete supply. For PO-02 labor dues, file a simultaneous commercial dispute, keeping the high-ticket supply claim within MSEFC with 3x RBI compound penal interest.",
    statutoryCitations: [
      "MSMED Act, 2006 (s. 2(n), s. 15–18)",
      "Tata Power Company Ltd. Precedent on Divisibility",
      "Sale of Goods Act, 1930 (s. 42 Deemed Acceptance)",
    ],
    recoveryTimeline: "90 to 180 Days before MSEFC (Pure Supply PO)",
  },
  {
    id: "govt-psu",
    badge: "Scenario 4: CPWD / Railways / PWD / PSU",
    title: "Government Infrastructure & Tender Works Contracts",
    contractProfile:
      "A civil contractor executes a ₹12 Crore road, bridge, or railway siding contract. Executive Engineer withholds ₹3.1 Crore across uncertified Measurement Book entries, price variation escalations, and 5% security deposit / DLP retention.",
    employerDefense:
      "PSU/State department cites GCC Clause 64 (unilateral arbitrator panel consisting of its own officers), claims immunity from MSMED Act as a sovereign works entity, and sits on the final bill indefinitely.",
    legalFailureMode:
      "Filing on MSME Samadhaan results in PSU legal cell obtaining an immediate High Court writ stay citing the works contract bar and tender arbitration clause, stalling recovery for 3+ years.",
    recommendedPlaybook:
      "Issue a mandatory 60-day statutory notice under Section 80 of the Code of Civil Procedure (CPC). Once the 60-day window lapses, invoke Section 11 of the Arbitration Act in the High Court to disqualify the department's unilateral panel under the Supreme Court Perkins Eastman and CORE Five-Judge Bench rulings, securing a neutral retired High Court judge as sole arbitrator.",
    statutoryCitations: [
      "Code of Civil Procedure, 1908 (s. 80 Mandatory Notice)",
      "Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020 SC)",
      "Arbitration and Conciliation Act, 1996 (s. 11(6) & Sixth Schedule)",
    ],
    recoveryTimeline: "60-Day Section 80 Notice + 12-Month Fast Arbitration",
  },
];

export default function WorksContractScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-6">
      {/* Tab Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {SCENARIOS.map((scenario) => {
          const isSelected = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                isSelected
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`block text-[10px] font-extrabold uppercase tracking-wider mb-1 ${
                  isSelected ? "text-red-400" : "text-[#DC2626]"
                }`}
              >
                {scenario.badge.split(":")[0]}
              </span>
              <p className="text-xs sm:text-sm font-bold truncate">{scenario.title}</p>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block">
              {activeScenario.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
              {activeScenario.title}
            </h3>
          </div>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full self-start sm:self-auto border border-emerald-200">
            {activeScenario.recoveryTimeline}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider text-slate-500">
              Contract Structure &amp; Claim Profile
            </strong>
            <p className="text-slate-700 leading-relaxed">{activeScenario.contractProfile}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1.5">
            <strong className="text-amber-800 font-bold block text-xs uppercase tracking-wider">
              Employer / Debtor Jurisdictional Objection
            </strong>
            <p className="text-slate-700 leading-relaxed">{activeScenario.employerDefense}</p>
          </div>
        </div>

        <div className="bg-red-50/80 p-4 rounded-xl border border-red-200 space-y-1.5 text-xs sm:text-sm">
          <strong className="text-red-950 font-bold block text-xs uppercase tracking-wider">
            The Fatal MSEFC Failure Mode (Why Samadhaan Fails Here)
          </strong>
          <p className="text-red-900 leading-relaxed">{activeScenario.legalFailureMode}</p>
        </div>

        <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 space-y-2 text-xs sm:text-sm">
          <strong className="text-emerald-950 font-bold block text-xs uppercase tracking-wider">
            Advocate-Engineered Recovery Strategy
          </strong>
          <p className="text-slate-800 leading-relaxed">{activeScenario.recommendedPlaybook}</p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-slate-700">Governing Statutes &amp; Precedents:</span>
            {activeScenario.statutoryCitations.map((cit, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold bg-white px-2.5 py-1 rounded-md border border-emerald-300 text-emerald-800"
              >
                {cit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
