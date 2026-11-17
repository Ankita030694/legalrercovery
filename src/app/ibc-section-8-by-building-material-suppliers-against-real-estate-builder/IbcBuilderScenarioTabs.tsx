"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  builderTrap: string;
  statutoryHook: string;
  creditorPlaybook: string[];
  caseLawCitation: string;
  financialImpact: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "principal-plus-interest",
    tabLabel: "1. ₹85L Principal + Interest >= ₹1 Cr",
    title: "Using Contractual Invoice Interest to Cross the ₹1 Crore Section 4 IBC Floor",
    badge: "Prashat Agarwal NCLAT Rule",
    builderTrap:
      "A real estate developer owes your TMT steel or RMC company ₹84.50 Lakh in unpaid principal across 18 tax invoices. The builder's CFO mocks your demand, calculating that your principal is ₹15.50 Lakh below the ₹1 Crore Section 4 IBC threshold—and assumes you are stuck in a slow civil recovery suit for 4 years.",
    statutoryHook:
      "Under Section 5(21) of the IBC, 2016, 'operational debt' encompasses a claim in respect of the provision of goods or services, including contractual interest stipulated on the tax invoice or Purchase Order. In Prashat Agarwal v. Vikash Parasrampuria (NCLAT, 2022), the Appellate Tribunal confirmed that accrued contractual interest printed on accepted invoices must be clubbed with principal to satisfy the ₹1 Crore Section 4 threshold.",
    creditorPlaybook: [
      "Audit every tax invoice and Purchase Order for the '24% p.a. delayed payment interest' clause and verify buyer GST ITC availment in GSTR-2B.",
      "Prepare a chronological invoice-wise interest ledger up to the Form 3 dispatch date showing Principal (₹84.50L) + Interest (₹21.85L) = ₹1.0635 Crore.",
      "Serve Form 3 Demand Notice under Section 8 IBC on the builder company's MCA-registered office and Director emails simultaneously.",
      "Once the 10-day window under Section 8(2) expires without a pre-existing dispute, file Section 9 petition before NCLT—forcing immediate settlement talks before IRP appointment.",
    ],
    caseLawCitation:
      "Prashat Agarwal v. Vikash Parasrampuria (Company Appeal (AT) (Ins) No. 690 of 2022, NCLAT New Delhi)",
    financialImpact: "Unlocks Solo Section 9 NCLT Leverage on ₹80L–₹95L Principal Defaults",
  },
  {
    id: "elevator-mep-retention",
    tabLabel: "2. Lift / MEP Final Bill & Retention",
    title: "Elevator, HVAC & MEP Contractors Recovering ₹1.2 Cr+ Handover & Retention Dues",
    badge: "No 100-Allottee Bar",
    builderTrap:
      "You supplied and commissioned 8 high-speed passenger elevators or central HVAC chillers for a 32-storey residential tower. The builder obtained Occupancy Certificate (OC) and handed over flats to 250 homebuyers, yet withholds ₹1.35 Crore (final milestone + 5% retention) citing vague 'snag list pending' excuses while telling you 'homebuyers couldn't even admit us in NCLT without 100 signatures.'",
    statutoryHook:
      "The second proviso to Section 7(1) of the IBC—requiring 100 allottees or 10% of total allottees—applies EXCLUSIVELY to Financial Creditor homebuyers. As an Operational Creditor under Sections 8 and 9, a single elevator, glass, or MEP vendor owed ₹1 Crore+ can initiate CIRP independently without joining a single homebuyer or co-creditor.",
    creditorPlaybook: [
      "Compile signed Commissioning Certificates, PWD/Lift Inspector statutory safety clearances, and Occupancy Certificate handover proof.",
      "Demonstrate that commercial operation of the lifts/MEP systems by tower residents proves defect-free acceptance under Sale of Goods Act s.42.",
      "Serve Form 3 Demand Notice demanding full milestone + released retention arrears within 10 days under Section 8(1).",
      "Highlight in the covering letter that Section 9 admission will suspend the builder's Board of Directors across the RERA project.",
    ],
    caseLawCitation:
      "Manish Kumar v. Union of India (2021) 5 SCC 1 (Supreme Court) — 100-Allottee Proviso Restricted Strictly to Section 7",
    financialImpact: "100% Milestone + Retention Recovery Within 10-Day Statutory Notice Window",
  },
  {
    id: "sham-quality-dispute",
    tabLabel: "3. Post-Notice Fake Quality Email",
    title: "Defeating Fabricated 'Cube Failure' or 'Steel Grade' Replies Sent After Form 3",
    badge: "Mobilox Moonshine Test",
    builderTrap:
      "For 8 months after RMC pouring or steel delivery, the builder's site engineer signed every delivery challan, availed full GST Input Tax Credit, and promised payment via WhatsApp ('releasing ₹40L next week'). Immediately upon receiving your Section 8 Form 3 Demand Notice, the builder replies on Day 8 alleging '28-day concrete cube failure' or 'rusting in TMT bars' to manufacture a Section 8(2) dispute.",
    statutoryHook:
      "In Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018) 1 SCC 353, the Supreme Court laid down the strict 'plausible contention' test: a dispute under Section 8(2)(a) must be pre-existing—documented prior to receipt of the Form 3 Demand Notice—and must not be a 'patently feeble legal argument or an assertion of fact unsupported by evidence' (a spurious or moonshine defense).",
    creditorPlaybook: [
      "Preserve WhatsApp chats, emails, and signed ledger confirmations acknowledging debt without any quality complaint prior to Form 3.",
      "Attach BSA 2023 Section 63 certificate for all digital communications, GST E-Way Bills, Weighbridge Slips, and Mill Test Certificates (MTC).",
      "File Section 9(3)(b) affidavit demonstrating zero contemporaneous quality objection within the statutory inspection window.",
      "Expose the Day-8 reply before NCLT as a classic post-notice moonshine fabrication barred by Mobilox.",
    ],
    caseLawCitation:
      "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018) 1 SCC 353 (Supreme Court of India)",
    financialImpact: "Disqualifies Post-Notice Sham Defenses; Clears Path for Section 9 Admission",
  },
  {
    id: "project-wise-cirp",
    tabLabel: "4. Multi-Project Builder & Reverse CIRP",
    title: "Leveraging Project-Wise Insolvency Threat Against Multi-Tower Developers",
    badge: "NCLAT Real Estate Jurisprudence",
    builderTrap:
      "A large developer runs 6 RERA towers under one parent Special Purpose Vehicle (SPV) or Corporate Debtor entity. They default on ₹1.80 Crore of your cement and ready-mix concrete supplied to 'Tower C', claiming cash-flow Ring-Fencing ('Tower C escrow is dry, wait until Phase 3 launches').",
    statutoryHook:
      "Under Section 9 of the IBC, insolvency is initiated against the Corporate Debtor legal entity (the registered company holding the project), not an isolated bank escrow. Even where NCLAT applies project-wise or reverse CIRP frameworks (as in Flat Buyers Association Winter Hills-77 v. Umang Realtech), the builder faces immediate IRP takeover of the defaulting project's RERA receivables, cash flows, and sales control unless the operational creditor is paid.",
    creditorPlaybook: [
      "Verify the exact Corporate Identification Number (CIN) and GSTIN on your tax invoices to confirm liability sits with the parent builder company or project SPV.",
      "Ensure Form 3 is addressed to the Corporate Debtor's registered office per MCA Master Data, not merely the site office.",
      "Pair Section 8 Form 3 with parallel Section 138 NI Act proceedings against signatory directors if security/post-dated cheques bounced.",
      "Negotiate a Consent Term / Settlement Agreement filed before NCLT with an automatic revival clause upon single-EMI default.",
    ],
    caseLawCitation:
      "Flat Buyers Association Winter Hills-77 v. Umang Realtech Pvt. Ltd. (NCLAT) & Macquarie Bank Ltd. v. Shilpi Cable (2018) 2 SCC 674",
    financialImpact: "Forces Parent Corporate Treasury to Release Cash to Protect RERA Project Control",
  },
];

export default function IbcBuilderScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-5">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            {activeScenario.financialImpact}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4">
          {activeScenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Builder&apos;s Default &amp; Delay Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.builderTrap}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              IBC Statutory Counter-Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.statutoryHook}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 mb-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 mb-2.5">
            4-Step Operational Creditor Execution Protocol
          </p>
          <ul className="space-y-2">
            {activeScenario.creditorPlaybook.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-slate-600 font-semibold">
          <span className="text-slate-900 font-bold">Binding Authority:</span>{" "}
          {activeScenario.caseLawCitation}
        </p>
      </div>
    </div>
  );
}
