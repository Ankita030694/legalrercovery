"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  statutoryHook: string;
  challenge: string;
  remedy: string;
  bankActionItems: string[];
  precedentRef: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "unregistered-tenancy",
    tabLabel: "Bogus Tenancy Claim",
    title: "Overcoming Fabricated Post-Mortgage Leases & Bogus Tenant Objections",
    statutoryHook: "SARFAESI s.14 read with Transfer of Property Act s.65A & Registration Act s.17",
    challenge:
      "When the Court Commissioner arrives for physical possession, a third party produces an unregistered tenancy agreement claiming unexpired possession of 3 to 5 years, alleging tenant protection laws prevent dispossession without Rent Control Court proceedings.",
    remedy:
      "Under the Supreme Court's landmark ruling in Bajarang Shyamsunder Agarwal v. Central Bank of India (2019) and Harshad Govardhan Sondagar v. International Assets Reconstruction Co. (2014), any lease created after the mortgage without written consent of the secured creditor violates Section 65A of the Transfer of Property Act and is void ab initio against the bank. Unregistered leases exceeding 11 months are inadmissible under Section 49 of the Registration Act. The DM/CMM is bound to reject such claims and execute possession.",
    bankActionItems: [
      "Produce registered mortgage deed & CERSAI security interest report establishing priority date.",
      "Demonstrate lack of written consent by the secured creditor under TPA Section 65A.",
      "Check registration status: If tenancy is unregistered or on non-judicial stamp paper without sub-registrar endorsement, invoke Section 17(1)(d) & Section 49 Registration Act.",
      "File affidavit before DM/CMM citing Bajarang Shyamsunder; request issuance of warrant of possession with police assistance.",
    ],
    precedentRef: "Bajarang Shyamsunder Agarwal v. Central Bank of India (2019) 9 SCC 94",
  },
  {
    id: "affidavit-defects",
    tabLabel: "9-Point Affidavit Defects",
    title: "Preventing DM Application Rejections for Affidavit & CERSAI Defects",
    statutoryHook: "SARFAESI s.14(1) Proviso (Clauses i to ix) & s.26D CERSAI Mandatory Bar",
    challenge:
      "Subordinate district administration clerks issue repeated compliance queries or return files because the Authorized Officer's affidavit lacks precise statutory phrasing, omits specific responses to Section 13(3A) borrower objections, or fails to attach CERSAI charge search certificates.",
    remedy:
      "The 2013 amendment to Section 14(1) mandates an exhaustive 9-point affidavit affirming exact statutory events: loan amount, valid mortgage creation, CERSAI registration under s.26D, NPA classification as per RBI norms, s.13(2) notice service with postal tracking, itemized reply to s.13(3A) representation within 15 days, 60-day default expiry, and lawful requirement of possession. Defect-free drafting prevents ministerial query loops.",
    bankActionItems: [
      "Attach live CERSAI Security Interest Report (Form I / Asset ID) — under s.26D, no secured creditor can exercise SARFAESI rights without CERSAI registration.",
      "Include India Post Speed Post track-report + BSA 2023 s.63 electronic certificate proving s.13(2) service.",
      "Provide copy of bank's Section 13(3A) speaking order dispatched within 15 calendar days of receiving borrower's representation.",
      "Ensure Authorized Officer holds valid Board Resolution or Power of Attorney strictly authorized under SARFAESI Rule 2(a).",
    ],
    precedentRef: "Standard Chartered Bank v. V. Noble Kumar (2013) 9 SCC 620",
  },
  {
    id: "law-and-order-resistance",
    tabLabel: "Debtor Physical Resistance",
    title: "Deploying Section 14(2) Force & Women Police for Hostile Repossession",
    statutoryHook: "SARFAESI s.14(2) & Police Act Requisition Powers",
    challenge:
      "Borrower locks premises, places elder relatives or women family members at the entrance, mobilizes local political goons, or threatens self-harm to create a law-and-order situation, forcing the Court Commissioner / Tehsildar to retreat without taking custody.",
    remedy:
      "Section 14(2) of the SARFAESI Act explicitly empowers the DM/CMM to take or cause to be taken such steps and use, or cause to be used, such force as may, in their opinion, be necessary. The bank Authorized Officer can file an urgent memo for additional police protection, deployment of female police constables, and breaking open locks with videography.",
    bankActionItems: [
      "File miscellaneous application under Section 14(2) SARFAESI Act for breaking open outer and inner locks.",
      "Requisition Superintendent of Police (SP) / Commissioner of Police for armed escort and minimum 2 female constables.",
      "Engage an independent video recording team to document the entire panchnama, lock-breaking, and inventory under BSA 2023 s.63.",
      "Arrange certified locksmith, independent local panchas (witnesses), and secure transport for movable goods inside property.",
    ],
    precedentRef: "NKGSB Cooperative Bank Ltd. v. Subir Chakravarty (2022) 10 SCC 286",
  },
  {
    id: "dm-delay-mandamus",
    tabLabel: "DM Pendency > 60 Days",
    title: "Escalating Ministerial Delay to High Court via Article 226 Writ of Mandamus",
    statutoryHook: "SARFAESI s.14(1) Second & Third Provisos (30 to 60-Day Mandate)",
    challenge:
      "The Section 14 application sits pending before the District Magistrate for 6 to 18 months without orders, as the DM erroneously treats the application as an adversarial civil suit, issues summons to the borrower, or delays hearings due to administrative duties.",
    remedy:
      "The Supreme Court in Balkrishna Rama Tarle v. Phoenix ARC (2023) and Kotak Mahindra Bank v. Girnar Corrugators (2023) settled that the DM/CMM exercises purely ministerial functions and has zero adjudicatory power to examine civil disputes, borrower counterclaims, or issue notice to the borrower. If the 30-day (aggregate 60-day) window expires, the High Court issues a peremptory Writ of Mandamus directing disposal within 2 to 4 weeks.",
    bankActionItems: [
      "Compile certified order sheet extracts demonstrating that the 60-day statutory maximum has elapsed without an order.",
      "File Writ Petition (Civil) under Article 226 of the Constitution of India praying for a Writ of Mandamus.",
      "Cite Supreme Court authoritative rulings prohibiting the DM from conducting judicial inquiries or entertaining borrower objections.",
      "Serve advance copy on Government Pleader / State Legal Department to secure a time-bound compliance direction on first listing.",
    ],
    precedentRef: "Balkrishna Rama Tarle v. Phoenix ARC Pvt. Ltd. (2023) 1 SCC 662",
  },
];

export default function SarfaesiSection14ScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-6">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400 block mb-1">
            Section 14 Bottleneck Playbook
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            Resolving 4 Common Section 14 SARFAESI Execution Failure Modes
          </h3>
        </div>
        <span className="text-[11px] text-slate-400 font-medium">
          Select scenario below:
        </span>
      </div>

      {/* Tab Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-red-500 shadow-md shadow-red-900/40"
                  : "bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 sm:p-6 space-y-5 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {activeScenario.title}
          </h4>
          <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-900/40 px-2.5 py-1 rounded-md self-start sm:self-auto">
            {activeScenario.statutoryHook}
          </span>
        </div>

        {/* Challenge vs Remedy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1.5">
              The Execution Challenge
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeScenario.challenge}
            </p>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1.5">
              Statutory Remedy & Precedent
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeScenario.remedy}
            </p>
          </div>
        </div>

        {/* Action Items */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
            Bank Authorized Officer Action Protocol:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.bankActionItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-slate-900/90 border border-slate-800 p-3 rounded-lg text-xs text-slate-200"
              >
                <span className="w-5 h-5 rounded-full bg-red-950 text-red-400 font-bold flex items-center justify-center shrink-0 text-[10px] border border-red-800/40">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Precedent Citation */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>
            Binding Precedent:{" "}
            <strong className="text-slate-200 font-semibold">
              {activeScenario.precedentRef}
            </strong>
          </span>
          <span className="text-emerald-400 font-mono text-[11px]">
            &check; Supreme Court Validated
          </span>
        </div>
      </div>
    </div>
  );
}
