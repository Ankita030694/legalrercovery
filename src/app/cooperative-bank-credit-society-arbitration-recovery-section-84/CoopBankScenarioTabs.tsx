"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  statutoryHook: string;
  challenge: string;
  remedy: string;
  actionItems: string[];
  precedentRef: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "ucb-secured-mortgage",
    tabLabel: "UCB Secured NPA",
    title: "Enforcing Secured Mortgages Directly Under SARFAESI Instead of Waiting 3 Years in Registrar Courts",
    statutoryHook: "SARFAESI s.13(2), s.13(4), s.14 & Banking Regulation Act s.56",
    challenge:
      "Many Urban Co-operative Banks (UCBs) and District Central Co-operative Banks (DCCBs) still route ₹15 Lakh–₹3 Crore mortgaged commercial loans through slow Registrar arbitration or State Co-operative Courts, allowing defaulting borrowers to alienate property or stall proceedings through repeated adjournments.",
    remedy:
      "Following the 5-Judge Supreme Court Constitution Bench ruling in Pandurang Ganpati Chaugule v. Vishwasrao Patil Murgud Sahakari Bank Ltd. (2020), every cooperative bank holding an RBI banking licence under Section 22 read with Section 56 of the Banking Regulation Act, 1949 qualifies as a 'bank' under SARFAESI Section 2(1)(c)(iva). Once the mortgage is registered on CERSAI under Section 26D, the UCB Authorized Officer can issue a 60-day Section 13(2) demand notice and secure physical possession through the DM/CMM under Section 14 without waiting for a civil decree or Registrar award.",
    actionItems: [
      "Verify CERSAI registration (Asset ID & Form I) under SARFAESI s.26D before classifying and issuing the Section 13(2) demand notice.",
      "Serve simultaneous Section 13(2) notices on the principal borrower, mortgagor, and all personal sureties via Speed Post RPAD, email, and WhatsApp with BSA 2023 s.63 logs.",
      "Ensure the Authorized Officer (Chief Manager / CEO rank authorized by Board Resolution under Rule 2(a)) disposes of Section 13(3A) objections within 15 days via a reasoned order.",
      "Request appointment of an Advocate Commissioner under Section 14(1A) (validated in NKGSB Cooperative Bank v. Subir Chakravarty) to execute lock-breaking and vacant possession swiftly.",
    ],
    precedentRef: "Pandurang Ganpati Chaugule v. Vishwasrao Patil Murgud Sahakari Bank Ltd. (2020) 9 SCC 215",
  },
  {
    id: "mscs-section-84",
    tabLabel: "MSCS s.84 Arbitration",
    title: "Bulletproofing Multi-State Co-operative Society Section 84 Arbitration Against Section 34 Set-Aside",
    statutoryHook: "MSCS Act 2002 ss.84, 85, 94 & Arbitration Act 1996",
    challenge:
      "Multi-State Co-operative Banks and Multi-State Credit Societies frequently suffer dismissal or Section 34 District Court set-aside of Section 84 arbitral awards because branch officers serve informal reminder slips only to the principal borrower, omit the two statutory sureties, or file claims without itemized penal-charge separation.",
    remedy:
      "Under Section 84 of the Multi-State Co-operative Societies Act, 2002, loan recovery disputes with members, past members, and guarantors must be referred exclusively to an Arbitrator appointed by the Central Registrar of Co-operative Societies (CRCS), and Section 84(5) imports the Arbitration and Conciliation Act, 1996. A pre-arbitration tri-party legal notice addressed simultaneously to the borrower and both sureties establishes clear cause of action, satisfies natural justice, prevents limitation objections under Section 85, and turns the final Section 84 award into an executable decree under Section 94.",
    actionItems: [
      "Dispatch a consolidated pre-arbitration demand notice to Borrower + Surety 1 + Surety 2 with itemized principal, contractual interest, and non-capitalized penal charges.",
      "Attach certified CBS Statement of Account under Bankers' Books Evidence Act s.2A/4 and BSA 2023 s.63 certificate alongside original loan bond and surety deeds.",
      "File the Section 84 Claim Petition before the CRCS-appointed Arbitrator well within the Section 85 limitation window with an application for interim attachment of property.",
      "Upon award expiry of the 90-day s.34 period, execute directly under Section 94 as a Civil Court decree or via Collector recovery as arrears of land revenue.",
    ],
    precedentRef: "MSCS Act 2002 s.84(1)(b) & s.94 Execution Framework (Read with Greater Bombay Co-op. Bank v. United Yarn Tex (2007) 6 SCC 236)",
  },
  {
    id: "state-registrar-101",
    tabLabel: "Credit Society s.101 / s.70",
    title: "Accelerating State Registrar Recovery Certificates for Non-Banking Credit Societies",
    statutoryHook: "MCS Act s.101 / Rules 86A–86F, DCS s.70, KCS s.70 & UPCS s.70",
    challenge:
      "Over 1,00,000 primary agricultural and urban credit co-operative societies do not hold an RBI banking licence and therefore cannot invoke SARFAESI. When their summary Recovery Certificate petitions (such as Maharashtra s.101 or Karnataka/Delhi s.70) fail Registrar scrutiny due to missing Board resolutions or defective surety service, recovery stalls for 18–24 months.",
    remedy:
      "State Co-operative Acts provide a rapid quasi-judicial summary recovery mechanism designed specifically for non-banking credit societies—avoiding regular Civil Court trials and ad-valorem court fees. By serving a compliant 15-day statutory demand notice on the borrower and two sureties before filing the s.101 / s.70 application, attaching the Managing Committee sanction resolution and certified audit ledger, the society secures a binding Recovery Certificate executable by the Special Recovery Officer (SRO) under s.156 (Maharashtra) or equivalent State Rules.",
    actionItems: [
      "Pass a specific Managing Committee / Board Resolution authorizing the Secretary or Recovery Officer to initiate Registrar Recovery Certificate / Arbitration proceedings.",
      "Serve mandatory pre-filing statutory demand notice on the borrower and both sureties at registered residential and employer addresses with Speed Post RPAD tracking.",
      "Verify strict compliance with State Rules (e.g., Maharashtra Rules 86A–86F itemized ledger, notice proof, and hearing compliance) to avoid High Court Article 226 remand.",
      "Upon certificate issuance, immediately trigger Special Recovery Officer (SRO) attachment of movables, immovable property encumbrance entry (7/12 extract / mutation), and public auction.",
    ],
    precedentRef: "Pandurang Ganpati Chaugule (2020) 9 SCC 215 (Clarifying State Co-op Act Track for Non-Banking Credit Societies)",
  },
  {
    id: "salary-surety-attachment",
    tabLabel: "Salaried Surety Deduction",
    title: "Enforcing Mandatory Employer Salary Deduction & Share Capital Set-Off on Unsecured Society Loans",
    statutoryHook: "MSCS Act ss.59–60, MCS Act s.49, CPC s.60(1)(i) & NI Act s.138",
    challenge:
      "Employee credit societies, teachers' societies, and railway/PSU co-operative societies lend ₹2 Lakh–₹12 Lakh without land mortgages, relying on two co-employee sureties. When the borrower resigns, absconds, or takes unauthorized leave, employers delay salary deductions citing payroll privacy or lack of court orders.",
    remedy:
      "Co-operative statutes grant societies two powerful self-help and quasi-statutory remedies unavailable to ordinary lenders: (1) statutory set-off/first charge over member share capital, thrift deposits, and dividends (MSCS s.59 / State equivalents), and (2) binding employer salary-deduction requisitions where the borrower and sureties signed an irrevocable deduction undertaking (MSCS s.60 / Maharashtra s.49 / TN s.48). Pairing a formal Legal Notice to the Defaulting Member + Two Sureties with a Statutory Requisition Notice to the Drawing & Disbursing Officer (DDO) and parallel NI Act s.138 / PSS s.25 action recovers unsecured dues rapidly.",
    actionItems: [
      "Exercise immediate statutory lien and adjustment over the defaulting borrower's paid-up share capital, compulsory thrift deposits, and accrued dividends under s.59 / State Rules.",
      "Issue a statutory requisition notice under MSCS s.60 / State Salary Deduction section enclosing the signed employer-deduction undertaking directly to the DDO / HR Payroll Head.",
      "Serve simultaneous surety invocation legal notices on both co-employee guarantors notifying them of joint and several liability under Indian Contract Act s.128.",
      "Trigger parallel Section 138 NI Act (on security cheques) or Section 25 PSS Act (on bounced e-NACH mandates) within the strict 30-day statutory notice window.",
    ],
    precedentRef: "MSCS Act 2002 ss.59–60 & Indian Contract Act 1872 s.128 (Co-Extensive Surety Liability)",
  },
];

export default function CoopBankScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-6">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400 block mb-1">
            Interactive Cooperative Recovery Playbook
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            Select Your Institutional Recovery Bottleneck
          </h3>
        </div>
        <span className="text-[11px] text-slate-400 font-medium">
          4 Co-op Bank &amp; Credit Society Tracks:
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
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {activeScenario.title}
          </h4>
          <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-900/40 px-2.5 py-1 rounded-md self-start sm:self-auto shrink-0">
            {activeScenario.statutoryHook}
          </span>
        </div>

        {/* Challenge vs Remedy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1.5">
              Institutional Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeScenario.challenge}
            </p>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1.5">
              Statutory Remedy &amp; Execution Path
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeScenario.remedy}
            </p>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
            Recovery Officer Action Checklist
          </span>
          <ul className="space-y-2">
            {activeScenario.actionItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Precedent Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
          <span>
            <strong className="text-slate-200">Authority:</strong> {activeScenario.precedentRef}
          </span>
          <span className="text-emerald-400 font-semibold">Creditor-Verified SOP</span>
        </div>
      </div>
    </div>
  );
}
