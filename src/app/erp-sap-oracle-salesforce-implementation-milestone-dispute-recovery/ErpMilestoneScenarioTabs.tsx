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
    id: "legacy-master-data-delay",
    tabLabel: "1. Master Data Delay",
    title: "Client's Finance Team Fails to Clean Legacy Tally Data, Stalling Go-Live Milestone by 8 Months",
    badge: "Contract Act s.53 Reciprocal Breach",
    buyerProfile:
      "Mid-market manufacturing conglomerate, multi-location retail chain, or pharmaceutical distributor migrating from legacy Tally/Busy/FoxPro to SAP S/4HANA, Microsoft Dynamics 365, or Odoo ERP.",
    pretext:
      "Under the Statement of Work (SOW), Go-Live was slated for Month 6, triggering a 30% milestone invoice (₹45,00,000). The client's internal accounting team delays furnishing reconciled Opening Balances, Chart of Accounts mapping, and clean Customer/Vendor master data for over 240 days. Despite the implementation partner keeping a dedicated team of 6 functional consultants and ABAP developers on stand-by, the client refuses to pay both the pending milestone and the ₹28,00,000 T&M delay burn, claiming: 'Go-Live has not occurred, so no further payment is due under the fixed-price SOW.'",
    legalReality:
      "Under Section 53 and Section 54 of the Indian Contract Act, 1872, an ERP implementation constitutes an indivisible chain of reciprocal promises. The implementation partner's promise to execute data cutover and achieve Go-Live is strictly contingent upon the client performing their antecedent promise: providing validated, cleansed legacy data. When the client prevents performance through organizational inaction, the partner is legally entitled to treat the milestone as deemed achieved, bill for idle consultant capacity, and claim statutory damages under Section 73.",
    statutoryHook:
      "Indian Contract Act 1872 (ss. 53, 54 & 73) + Commercial Courts Act 2015 s.12A + BSA 2023 s.63 Cutover Logs",
    actionProtocol: [
      "Collate timestamped Jira/Azure DevOps tickets, email demand notices, and Steering Committee (SteerCo) minutes establishing repeated missed data submission deadlines by the client.",
      "Issue a formal Reciprocal Promise Notice under Section 53 of the Indian Contract Act establishing that client non-performance prevented Go-Live cutover.",
      "Submit an aggregated adjustment invoice billing for extended consultant bench hours under standard SOW Rate Cards and declaring deemed milestone maturity.",
      "Serve a 15-Day Fact-Verified Demand Notice initiating pre-institution commercial mediation under Section 12A of the Commercial Courts Act.",
    ],
  },
  {
    id: "scope-creep-disputed-cr-log",
    tabLabel: "2. Disputed CR Logs",
    title: "Client Requests 45+ Custom ABAP/Apex Workflows via Jira, Then Disowns ₹38 Lakh Change Requests",
    badge: "Enforcing Oral/Digital CR Authorizations",
    buyerProfile:
      "Tier-1 enterprise or corporate borrower implementing Salesforce CRM, Oracle Cloud ERP, or SAP with high customization requirements across manufacturing, supply chain, and billing.",
    pretext:
      "During the realization phase, the client's operations leads insist on extensive bespoke functionality (custom e-invoicing APIs, automated batch-tracking, non-standard commission matrices) not included in the signed Business Blueprint Document (BBD). The partner logs 45 Change Requests (CRs) in Jira and delivers the code. At final billing, the client CFO audits invoices, rejects the ₹38,00,000 CR bill, and claims: 'No formal physical Change Order was countersigned by our Director; this was all part of baseline implementation.'",
    legalReality:
      "Under Section 10A of the Information Technology Act, 2000 and Section 70 of the Indian Contract Act, 1872 (Quantum Meruit), contracts and binding variations formed electronically through Jira approvals, email instructions, and Steering Committee sign-offs are valid and enforceable. Having accepted, tested, and retained the custom ABAP/Apex codebase in their staging and production environments, the client cannot lawfully enjoy non-gratuitous software development services without paying contractual consideration.",
    statutoryHook:
      "IT Act 2000 s.10A + Indian Contract Act s.70 (Quantum Meruit) + Copyright Act s.19 IP Lien",
    actionProtocol: [
      "Extract complete audit trails from Jira/Azure DevOps/Git demonstrating specific client user stories, test case approvals, and pull-request authorizations.",
      "Serve formal Quantum Meruit demand segregating baseline SOW milestones from custom change requests under Section 70.",
      "Assert statutory Intellectual Property lien under Section 19(8) of the Copyright Act, 1957, withholding IP assignment for custom middleware and ABAP scripts.",
      "Institute fast-track Commercial Summary Suit under Order XXXVII CPC for mature acknowledged engineering hours.",
    ],
  },
  {
    id: "uat-abandonment-spoc-churn",
    tabLabel: "3. UAT Stalls & SPOC Churn",
    title: "Client CIO Resigns, Successor Disowns Signed Blueprint & Refuses Go-Live Sign-Off",
    badge: "Doctrine of Deemed Acceptance",
    buyerProfile:
      "Rapidly scaling venture-backed startup or restructuring legacy business experiencing high executive turnover in IT leadership during system deployment.",
    pretext:
      "After the implementation partner delivers all functional modules matching the signed Business Blueprint Document (BBD), the client's Chief Information Officer and Project Sponsor resigns. The incoming IT Director repudiates the predecessor's architectural choices, refuses to execute User Acceptance Testing (UAT) sign-offs, demands a complete re-architecting of the finance ledger, and freezes the ₹52,00,000 Go-Live milestone payment indefinitely.",
    legalReality:
      "A change in client management or internal leadership does not invalidate binding commercial agreements executed by authorized corporate officers. Under the corporate governance doctrine of Indoor Management and Indian contract law, signed Blueprint documents and accepted stage deliverables bind the corporate entity. Furthermore, where a client fails to provide specific, reproducible bug logs within the contractual UAT window (typically 14 to 30 days), the contractual and legal 'Doctrine of Deemed Acceptance' triggers automatically.",
    statutoryHook:
      "Doctrine of Indoor Management + Indian Contract Act s.37 + MSMED Act 2006 s.16 (3x RBI Interest)",
    actionProtocol: [
      "Submit the countersigned Business Blueprint Document (BBD) and predecessor executive sign-offs as conclusive corporate admissions.",
      "Issue a formal Deemed Acceptance Notice notifying the corporate board that the contractual 15-day UAT objection window has expired without critical Severity-1 defect logs.",
      "Notify the client's Chief Financial Officer of statutory interest liability under Section 16 of the MSMED Act (for Udyam-registered partners) compounding monthly.",
      "Deliver Section 43B(h) Income Tax disallowance notification warning the client of audit disallowance on overdue technology consulting fees.",
    ],
  },
  {
    id: "hypercare-retainage-holdback",
    tabLabel: "4. Hypercare & AMC Hold-Up",
    title: "Client Runs Live Production on ERP for 6 Months, Withholding 20% Retainage Over Cosmetic Tickets",
    badge: "Commercial Use Bars Milestone Withholding",
    buyerProfile:
      "Enterprise client actively utilizing SAP S/4HANA, Oracle NetSuite, or Salesforce across multiple branch offices, plants, and sales teams.",
    pretext:
      "The ERP system achieved technical Go-Live 180 days ago; the client has generated over 50,000 commercial GST tax invoices, processed payroll, and reconciled supply chain inventory on the new system daily. However, the client refuses to release the final 20% milestone and post-Go-Live Hypercare retainage (₹35,00,000), pointing to 8 open low-priority cosmetic user tickets (e.g., custom UI font alignment or secondary report export formatting).",
    legalReality:
      "Under settled commercial law and the Sale of Goods / Services jurisprudence, putting software into live commercial production constitutes unequivocal constructive acceptance. An enterprise cannot harvest the full economic benefit of an ERP system for core business operations while simultaneously claiming the system is not 'Live' to withhold milestone payments. Minor post-deployment enhancements fall exclusively under warranty or Annual Maintenance Contract (AMC) SLA tiers, not milestone withholding.",
    statutoryHook:
      "Commercial Courts Act 2015 s.2(1)(c)(xviii) + Order XXXVII CPC + IBC 2016 s.8 Form 3 Notice (≥ ₹1 Cr)",
    actionProtocol: [
      "Capture database telemetry and server logs under BSA 2023 Section 63 demonstrating daily transactional volume, active user counts, and core GL processing.",
      "Issue legal demand establishing that commercial deployment constitutes absolute waiver of milestone withholding rights under settled High Court precedents.",
      "Provide formal notice of impending suspension of Hypercare support, patch deployment, and proprietary connector licenses.",
      "Initiate Section 12A commercial mediation followed by Commercial Summary Suit or NCLT Section 9 CIRP petition for corporate debts.",
    ],
  },
];

export default function ErpMilestoneScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
            Interactive Playbook &bull; ERP &amp; CRM Breach Scenarios
          </span>
          <p className="text-base sm:text-lg font-bold text-slate-900 mt-2">
            Select Your Implementation Bottleneck to Reveal the Statutory Remedy
          </p>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          4 Real-World Partner Scenarios
        </span>
      </div>

      {/* Tabs Bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-950/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Target: {activeScenario.buyerProfile.split(",")[0]}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-4">
          {activeScenario.title}
        </h3>

        <div className="space-y-4 mb-6">
          <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl">
            <span className="block text-[11px] font-extrabold uppercase tracking-widest text-amber-800 mb-1">
              Client Excuse &amp; Non-Payment Pretext:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeScenario.pretext}
            </p>
          </div>

          <div className="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-xl">
            <span className="block text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 mb-1">
              Statutory Position &amp; Judicial Reality:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeScenario.legalReality}
            </p>
          </div>

          <div className="bg-slate-100 border border-slate-200 p-3 sm:p-4 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">Statutory Hook:</span>
            <span className="text-xs font-mono font-bold text-[#DC2626]">
              {activeScenario.statutoryHook}
            </span>
          </div>
        </div>

        <div>
          <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
            Recommended Action Protocol:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeScenario.actionProtocol.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
