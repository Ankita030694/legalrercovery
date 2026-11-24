"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  badgeColor: string;
  title: string;
  context: string;
  statutoryTrap: string;
  recoveryPlaybook: string;
  actionableSteps: string[];
  expectedOutcome: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "cash-flow-float",
    tabLabel: "Working Capital Float",
    badge: "Most Common Corporate Default",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Corporate Tenant Consistently Pays 90% Net Rent & Uses 10% TDS as Internal Working Capital",
    context:
      "A funded mid-market company or retail chain occupying a prime commercial office plate of ₹10,00,000 monthly rent pays ₹9,00,000 every month. The finance team provides payment remittance slips stating 'TDS deducted @ 10% as per Section 194-I'. However, at the close of the financial year, the landlord discovers that zero TDS has been deposited to the Central Government and Form 26AS shows ₹0 credit across all 4 quarters (₹12,00,000 annual tax default).",
    statutoryTrap:
      "Tenants exploit the delay between monthly deduction (due by the 7th of the following month) and the landlord's annual ITR filing window. If the landlord merely sends informal email reminders, the tenant rolls over the funds. Worse, when the landlord files their return, the Income Tax Department's CPC portal disallows the uncredited TDS, raising an immediate tax demand with interest under Section 234B/234C against the landlord!",
    recoveryPlaybook:
      "Serve an urgent High Court Fact-Verified Legal Notice demanding payment of the un-deposited ₹12,00,000 directly to the landlord or proof of Challan ITNS 281 deposit within 7 days. Put the tenant's Board of Directors and Principal Officer on notice that continuing default triggers Section 276B criminal prosecution (up to 7 years rigorous imprisonment) and Section 271C penalty equal to 100% of the defaulted sum. Simultaneously, notify the local CIT (TDS) under Section 201.",
    actionableSteps: [
      "Issue 7-Day Fact-Verified Statutory Demand Notice citing Income Tax Act ss. 194-I, 201(1A), 271C, and 276B.",
      "Calculate 1.5% per month penal interest under Section 201(1A) from the date of each monthly rental deduction.",
      "Inform the tenant that Section 194-I non-deposit constitutes an uncured material breach of lease covenants under Transfer of Property Act Section 106.",
      "File a formal letter with the Jurisdictional Joint Commissioner / CIT (TDS) requesting survey and prosecution under Section 276B.",
    ],
    expectedOutcome: "Immediate Challan ITNS 281 deposit within 7 days or full ₹12L rent arrears reimbursement + 18% penal interest.",
  },
  {
    id: "exiting-tenant-abandonment",
    tabLabel: "Vacated Tenant / No 16A",
    badge: "Post-Exit Tax Exposure",
    badgeColor: "bg-amber-950/70 border-amber-800 text-amber-300",
    title: "Commercial Tenant Vacates at Lease End, Receives Deposit Refund, and Fails to File Q4 Form 24Q/26Q",
    context:
      "A commercial tenant surrendered possession in March after 3 years. The landlord refunded the security deposit after adjusting utility charges and March rent. In August, when the landlord's chartered accountant audits Form 26AS and AIS/TIS, the final two quarters of TDS (₹4,50,000) are entirely missing because the tenant never filed their quarterly TDS return (Form 26Q) and dissolved their local administrative office.",
    statutoryTrap:
      "Commercial landlords mistakenly believe they cannot do anything once the security deposit has been refunded. Defaulting tenants bank on landlords abandoning a ₹4–5 Lakh tax mismatch rather than pursuing litigation.",
    recoveryPlaybook:
      "Deploy a Dual-Track Statutory Enforcement: (1) Invoke Section 205 of the Income Tax Act before the Assessing Officer with bank credit receipts proving the tenant paid only 90% net rent, legally barring the AO from raising a demand on the landlord as per Yashpal Sahni. (2) File a Commercial Court summary suit under Order XXXVII CPC or invoke arbitration for ₹4,50,000 unpaid rent arrears under Section 73 Contract Act, combined with a Section 276B criminal complaint against the company directors.",
    actionableSteps: [
      "Prepare Section 205 Protective Affidavit with BSA 2023 s.63 electronic bank statements showing 90% net credits.",
      "Serve registered notice to the registered office and personal home addresses of all directors listed on MCA portal.",
      "Notify the tenant's statutory auditor regarding non-compliance with TDS withholding and contingent prosecution liabilities.",
      "Lodge formal complaint on the TRACES portal under 'Deductor Grievance / Non-Filing of Form 26Q'.",
    ],
    expectedOutcome: "Zero tax recovery against landlord under s.205 bar; tenant files revised Form 26Q under threat of director prosecution.",
  },
  {
    id: "ao-direct-demand-freeze",
    tabLabel: "AO Tax Demand Notice",
    badge: "Urgent Tax Defense",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Income Tax Assessing Officer Raises Section 143(1) Demand & Threatens Bank Account Freeze",
    context:
      "A commercial landlord declares gross rental revenue of ₹60,00,000 in their ITR and claims ₹6,00,000 TDS credit based on rent invoices. Because the corporate tenant defaulted on deposit, the CPC Bengaluru processing unit rejects the credit and issues a demand notice for ₹6,00,000 plus ₹1,44,000 interest under Section 234B/C. The jurisdictional Assessing Officer threatens bank account attachment under Section 226(3).",
    statutoryTrap:
      "Assessing Officers frequently overlook statutory bars and mechanically enforce automated CPC demands against landlords. If the landlord pays this demand or fails to respond within 30 days, they suffer double taxation—the tenant pocketed 10% and the government extracts another 10%!",
    recoveryPlaybook:
      "File an immediate statutory rectification petition under Section 154 and a stay application citing CBDT Instruction No. 275/29/2014-IT-(B) and the landmark Bombay High Court Division Bench ruling in Yashpal Sahni v. Rekha Hajarnavis (2007) 293 ITR 539. The High Court established that Section 205 explicitly prohibits the revenue from demanding tax from the deductee once tax has been deducted. Simultaneously serve a coercive legal notice on the tenant to deposit the challan.",
    actionableSteps: [
      "Submit formal representation to the Assessing Officer citing CBDT Circular No. 275/29/2014-IT(B) and Yashpal Sahni.",
      "Attach lease deed, monthly rent invoices showing 10% TDS deduction, and bank statements confirming 90% net receipts.",
      "Demand immediate cancellation of the Section 143(1) intimation demand and stay of coercive recovery under Section 220(6).",
      "Serve high-stakes Fact-Verified Notice on the tenant making them liable for all consequential tax penalties and advocate fees.",
    ],
    expectedOutcome: "Immediate stay and cancellation of tax demand against landlord; AO shifts coercive recovery to the defaulting tenant.",
  },
  {
    id: "coworking-reit-bulk-mismatch",
    tabLabel: "REIT / Co-Working Mismatch",
    badge: "Portfolio & Multi-Tenant",
    badgeColor: "bg-emerald-950/70 border-emerald-800 text-emerald-300",
    title: "Co-Working Chain or Commercial REIT Faces 194-I Defaults Across 40+ Corporate Occupiers",
    context:
      "A managed workspace operator or commercial REIT managing 250,000 sq. ft. across multiple IT parks discovers at year-end that out of 85 enterprise clients, 28 corporate tenants have defaulted on quarterly TDS deposits or entered wrong PAN numbers, resulting in a ₹1.85 Crore missing credit in the REIT's consolidated Form 26AS/AIS ledger.",
    statutoryTrap:
      "Handling 28 defaulting tenants through fragmented phone calls or disorganized accounting follow-ups leads to statutory limitation expiries, auditor qualifications on financial statements, and substantial deferred tax asset write-downs.",
    recoveryPlaybook:
      "Implement the Institutional Bulk TDS Remediation Protocol via LegalRecovery. Deploy automated batch reconciliations comparing bank inward remittances against PAN-linked 26AS credits, issue batched Advocate Section 194-I Demand Notices via registered email and Speed Post RPAD, and execute a master representation to the Principal Director General of Income Tax (Systems) and CIT-TDS.",
    actionableSteps: [
      "Upload multi-tenant rent ledgers to the LegalRecovery Bulk CSV Desk to identify exact PAN mismatches and deficit quarters.",
      "Dispatch standardized fact-verified cure notices giving tenants 10 days to file revised Form 26Q returns and provide Challan ITNS 281 details.",
      "Incorporate mandatory TDS compliance warranties and immediate deposit clauses with 18% penal interest in standard lease renewals.",
      "Submit collective Section 205 immunity schedule to the REIT statutory auditors to prevent balance-sheet audit qualifications.",
    ],
    expectedOutcome: "92%+ TDS compliance achieved within 21 days; complete insulation of REIT/landlord balance sheet from direct tax demands.",
  },
];

export default function TDSRecoveryScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${activeScenario.badgeColor}`}
          >
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Remedy: Income Tax Act ss. 194-I, 205, 201(1A) &amp; 276B
          </span>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-snug">
          {activeScenario.title}
        </h3>

        {/* Commercial Context & Statutory Trap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Commercial Reality &amp; Default Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.context}
            </p>
          </div>

          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4 shadow-sm">
            <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">
              The Legal Trap for Commercial Landlords
            </p>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
              {activeScenario.statutoryTrap}
            </p>
          </div>
        </div>

        {/* Recovery Playbook */}
        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 mb-6 shadow-md">
          <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
            The LegalRecovery Statutory Playbook
          </p>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {activeScenario.recoveryPlaybook}
          </p>
        </div>

        {/* Actionable Steps */}
        <div className="mb-6">
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Immediate Tactical Action Plan
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.actionableSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Outcome Strip */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
              Enforceable Commercial Outcome
            </p>
            <p className="text-xs sm:text-sm font-bold text-emerald-950">
              {activeScenario.expectedOutcome}
            </p>
          </div>
          <a
            href="#dual-track-cta"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors shadow-sm shrink-0"
          >
            Draft Notice Now &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
