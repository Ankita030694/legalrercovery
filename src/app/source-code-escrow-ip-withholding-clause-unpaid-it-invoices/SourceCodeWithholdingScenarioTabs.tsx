"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  clientPretext: string;
  legalReality: string;
  criminalRiskFlag: string;
  lawfulActionPlan: string[];
  statutoryHook: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "git-repo-withholding",
    tabLabel: "1. Private Git Repo Withholding",
    badge: "IP Lien & Non-Delivery",
    title: "Client Demands Full Git Repo Transfer Prior to Milestone Clearance",
    clientPretext:
      "\"You are contractually contracted to build our application. Withholding our Git repository or withholding production branches is extortion and cyber blackmail. Release the GitHub repository immediately or we will file an FIR under IT Act Section 66.\"",
    legalReality:
      "Under Sections 51, 52, and 54 of the Indian Contract Act, 1872, agreements consisting of reciprocal promises do not require the vendor to perform their promise (transferring proprietary source code and deliverable assets) unless the buyer is ready and willing to perform their reciprocal promise (paying the agreed milestone consideration). Furthermore, under Section 19 of the Copyright Act, 1957, software copyright assignment does not automatically vest in the buyer until contractual consideration is fully realized.",
    criminalRiskFlag:
      "ZERO criminal liability under Section 66 IT Act as long as the code resides on the agency's private Git server, organization account, or developer machines. Withholding non-transferred source code is a valid contractual and IP defense, not unauthorized system hacking.",
    lawfulActionPlan: [
      "Retain the repository on your private GitLab/GitHub organization account without granting write/clone access to client teams.",
      "Never push obfuscated or destructive commits into any shared repository already under client ownership.",
      "Dispatch an Advocate Cure-Cum-Suspension Notice establishing that copyright assignment remains conditional upon receipt of full payment under Section 19.",
      "Serve formal notice that continued uncredited deployment or reverse-engineering of previously delivered compiled binaries constitutes statutory copyright infringement under Section 51 of the Copyright Act.",
    ],
    statutoryHook: "Contract Act s.51–54 · Copyright Act s.19 & s.51",
  },
  {
    id: "staging-vs-production",
    tabLabel: "2. Staging vs Production Hosting",
    badge: "Cloud Infrastructure",
    title: "Suspending Vendor-Funded Staging Server vs Client Production Database",
    clientPretext:
      "\"You built our software on AWS. Because an invoice is disputed, you logged into our cloud console, severed our API gateway, and threatened to delete our customer database unless we wire payment within 24 hours.\"",
    legalReality:
      "There is an absolute, non-negotiable legal boundary between vendor staging infrastructure and client production infrastructure. If the agency hosts the build on its own staging servers/AWS tenant funded by agency credit cards, the agency has zero obligation to incur uncompensated server burn and can lawfully power off staging after written notice. Conversely, accessing a client's AWS/GCP account to delete data, change root passwords, or inject malicious API throttling constitutes an open-and-shut cognizable criminal offense under Sections 43 & 66 of the IT Act, 2000.",
    criminalRiskFlag:
      "HIGH CRIMINAL PERIL (3 Years Imprisonment & Cyber Cell FIR): Logging into client-owned cloud consoles to delete, alter, or hold live customer databases hostage converts a legitimate ₹20 Lakh invoice recovery into a non-bailable extortion and hacking case.",
    lawfulActionPlan: [
      "Strictly separate staging accounts (agency-owned) from production environments (client-owned and client-billed).",
      "If client milestone invoices for staging hosting and sprint labor are overdue, serve a 7-day 'Notice of Staging Decommissioning due to Non-Payment of Infrastructure Costs'.",
      "Immediately revoke all agency developer credentials and SSH keys from the client's production console to eliminate any fabricated allegations of unauthorized access.",
      "Recover infrastructure costs and development dues via Commercial Courts Act Section 12A mediation and Summary Suit under Order XXXVII CPC.",
    ],
    statutoryHook: "IT Act 2000 s.43 & s.66 vs Contract Act s.70",
  },
  {
    id: "escrow-trigger-dispute",
    tabLabel: "3. Source Code Escrow Triggers",
    badge: "Escrow Release Defense",
    title: "Client Claims Vendor Abandonment to Force Source Code Escrow Release",
    clientPretext:
      "\"The vendor failed to push the sprint release on schedule. Under our Tri-Party Software Escrow Agreement, this constitutes Vendor Default and Project Abandonment. We have petitioned the Escrow Agent for immediate release of all master source code packages.\"",
    legalReality:
      "Standard software escrow agreements designate specific, narrow 'Release Conditions' (e.g., formal bankruptcy, winding-up under IBC, liquidation, or material uncured operational abandonment). Commercial fee disputes and non-payment of milestone invoices are NOT lawful release conditions. When a client fabricates an abandonment claim while failing to clear certified milestone invoices, the vendor has statutory rights to file an emergency interim stay application under Section 9 of the Arbitration and Conciliation Act, 1996 or Section 151 CPC.",
    criminalRiskFlag:
      "Escrow agents who release code during an active, notified billing dispute face joint tortious liability. Escrow agents require strict verified confirmation before release.",
    lawfulActionPlan: [
      "Review the dispute notice clause in the Escrow Agreement; submit an immediate formal 'Notice of Commercial Dispute & Bar on Release' to the escrow trustee within the stipulated 5–10 business days window.",
      "Demonstrate reciprocal breach under Contract Act Section 54: performance was suspended solely as a direct consequence of the client's prior breach in withholding milestone funds.",
      "If the escrow agent threatens release, file an emergency Section 9 Petition before the High Court Commercial Division seeking an interim injunction restraining code dissemination.",
      "Simultaneously initiate Section 21 Arbitration or MSEFC delayed payment reference against the buyer for accrued interest and principal dues.",
    ],
    statutoryHook: "Arbitration Act s.9 & s.21 · Contract Act s.54",
  },
  {
    id: "offshore-work-for-hire",
    tabLabel: "4. Cross-Border & 'Work-For-Hire'",
    badge: "Cross-Border IP Dispute",
    title: "Offshore US/UK Client Claims Immediate Work-Made-For-Hire Ownership",
    clientPretext:
      "\"Under US Copyright Law 17 U.S.C. § 101, custom software built by an agency is a Work Made For Hire and we own the copyright ab initio from the very first line of code written. Your refusal to transfer the codebase is illegal.\"",
    legalReality:
      "US 'Work Made For Hire' doctrines do not override territorial Indian copyright law or international private law choice-of-law principles for services rendered in India by Indian corporate entities. Under Section 19(1) of the Indian Copyright Act, 1957, no assignment of copyright in any work is valid unless it is in writing signed by the assignor. Furthermore, Indian standard Master Services Agreements (MSAs) universally specify that intellectual property assignment is effective 'only upon, and contingent upon, receipt of full and final contractual consideration'. Without payment, the license or assignment never legalizes.",
    criminalRiskFlag:
      "Offshore clients frequently bluff using US/UK legal jargon to intimidate Indian IT founders into surrendering Git credentials without payment. In Indian courts, unpaid vendors maintain complete IP ownership.",
    lawfulActionPlan: [
      "Issue an international Advocate Statutory Demand Notice asserting conditional IP vesting and reserving rights under the Berne Convention for the Protection of Literary and Artistic Works.",
      "Notify the client that any deployment of the unassigned software code outside India constitutes willful international copyright piracy subject to extraterritorial statutory damages.",
      "Report unrealized export receivables to Authorized Dealer (AD) Banks to ensure FEMA EDPMS compliance and avoid regulatory scrutiny under RBI Master Directions on Export of Services.",
      "Institute proceedings under the Commercial Courts Act or international arbitration forum stipulated in the cross-border MSA.",
    ],
    statutoryHook: "Copyright Act s.19 · FEMA 1999 & SOFTEX Rules · Berne Convention",
  },
];

export default function SourceCodeWithholdingScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-7 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-800">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-2">
            Interactive Operational Matrix
          </span>
          <p className="text-base sm:text-lg font-bold text-white">
            4 IT Infrastructure &amp; IP Withholding Scenarios
          </p>
        </div>
        <p className="text-xs text-slate-400 font-mono">
          Click tabs below to review statutory boundaries &amp; risk profiles
        </p>
      </div>

      {/* Tabs list */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-left flex flex-col gap-1 border ${
                isActive
                  ? "bg-[#DC2626] text-white border-red-500 shadow-md shadow-red-950"
                  : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="truncate">{scenario.tabLabel}</span>
              <span
                className={`text-[10px] font-normal ${
                  isActive ? "text-red-100" : "text-slate-400"
                }`}
              >
                {scenario.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div className="bg-slate-800/60 rounded-xl p-5 sm:p-6 border border-slate-700/80 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
          <p className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            {currentScenario.title}
          </p>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-slate-900 text-emerald-400 border border-slate-700 shrink-0">
            {currentScenario.statutoryHook}
          </span>
        </div>

        {/* Pretext vs Reality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-red-900/40">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1.5 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Debtor Client Pretext / Cyber FIR Threat
            </p>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              {currentScenario.clientPretext}
            </p>
          </div>

          <div className="bg-slate-900/90 rounded-xl p-4 border border-emerald-900/40">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Legal &amp; Statutory Reality Under Indian Law
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentScenario.legalReality}
            </p>
          </div>
        </div>

        {/* Criminal Risk Banner */}
        <div className="bg-red-950/50 border border-red-800/80 rounded-xl p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-300 mb-1">
            Criminal Risk Assessment &bull; IT Act 2000 Jurisprudence
          </p>
          <p className="text-xs sm:text-sm text-red-100 leading-relaxed font-medium">
            {currentScenario.criminalRiskFlag}
          </p>
        </div>

        {/* Lawful Action Plan */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
            100% Lawful Creditor Action Plan (Advocate-Vetted SOP):
          </p>
          <ul className="space-y-2">
            {currentScenario.lawfulActionPlan.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
