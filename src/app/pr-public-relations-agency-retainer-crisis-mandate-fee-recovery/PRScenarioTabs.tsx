"use client";

import React, { useState } from "react";

interface PRScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  founderExcuse: string;
  legalReality: string;
  statutoryRemedy: string;
  recommendedAction: string;
  evidenceItems: string[];
}

const PR_SCENARIOS: PRScenario[] = [
  {
    id: "funding-announcement-ghosting",
    tabLabel: "1. Post-Funding Ghosting",
    badge: "Most Common Default (Series A/B)",
    title: "Startup Founders Announce Funding on Front Page, Then Cease Retainer Payments",
    founderExcuse:
      "\"We only wanted the Series-A press release out. We don't need any more PR services for the remaining 5 months of the 6-month contract. We consider our engagement fulfilled and will not pay further invoices.\"",
    legalReality:
      "A signed retainership contract is a fixed-term bilateral agreement under Section 73 of the Indian Contract Act, 1872. A client cannot unilaterally truncate a lock-in period or eliminate mandatory 60-day notice period fees after extracting peak commercial value from your media relationships.",
    statutoryRemedy:
      "Immediate demand notice under Indian Contract Act §73 & MSMED Act §15 (if registered). Enforce accrued retainer fees plus liquidated damages or notice-period retainer for the unexpired lock-in duration.",
    recommendedAction:
      "Compile press distribution logs, media wire pickup proofs, and WhatsApp exchanges confirming approval of the press release. Serve a fact-verified notice holding directors personally accountable if fraud or misrepresentation occurred.",
    evidenceItems: [
      "Counter-signed Master Services Agreement (MSA) with explicit 6-month lock-in / 60-day notice clause",
      "Email/WhatsApp written sign-off on the final funding press release copy and target media list",
      "Published media clipping report proving dissemination in national dailies (ET, Mint, YourStory, Inc42)",
      "Unpaid monthly invoices timestamped with GST e-invoice IRN numbers",
    ],
  },
  {
    id: "earned-media-guarantee-trap",
    tabLabel: "2. Front-Page Placement Trap",
    badge: "Editorial Disallowance Dispute",
    title: "Client Withholds 3 Months' Retainers Claiming 'Mint Didn't Run My Solo Photo on Page 1'",
    founderExcuse:
      "\"We hired you to put our CEO on the front cover of Forbes India and Economic Times page 1. The journalist only quoted us as an industry source in paragraph four. You failed on deliverables, so we are withholding Q2 fees.\"",
    legalReality:
      "Under the Press Council of India Norms of Journalistic Conduct, editorial coverage cannot be bought, guaranteed, or commercially bartered. PR retainers are advisory and media-relations efforts, strictly distinct from paid media buying/advertorials.",
    statutoryRemedy:
      "Enforce the contractual 'Earned Media Disclaimer' clause. In Indian commercial law, an advisory retainer is judged on diligent execution (best-efforts pitch & briefing notes), not editorial decisions of third-party journalists.",
    recommendedAction:
      "Issue a formal statutory response distinguishing Earned Media from Paid Media. Provide pitching logs, journalist interactions, press kits, and MSMED Section 16 interest notice highlighting that withholding fees for independent editorial judgment is bad in law.",
    evidenceItems: [
      "MSA Scope of Work explicitly defining scope as 'Media Relations & Editorial Pitching' with Best-Efforts disclaimer",
      "Media outreach pitch decks, email pitches to senior bureau correspondents, and interview coordination logs",
      "Proof that the client attended scheduled journalist briefings or provided delayed answers causing editorial cuts",
      "MSME Samadhaan pre-filing notice citing penal interest under MSMED Section 16",
    ],
  },
  {
    id: "crisis-mandate-abandonment",
    tabLabel: "3. Crisis PR / 24x7 Mandate",
    badge: "Emergency Firefighting Default",
    title: "Brand Survived Regulatory / Social Media Crisis, Then Repudiates Emergency Mandate Invoices",
    founderExcuse:
      "\"The negative social media storm died down in 72 hours thanks to our own product changes, not your statements. Your emergency weekend retainer surcharge of ₹5 Lakhs was excessive and we refuse to pay it.\"",
    legalReality:
      "Under Section 70 of the Indian Contract Act (obligation of person enjoying benefit of non-gratuitous act) read with emergency mandate agreements, services rendered during weekend crisis hours at urgent executive request create an enforceable debt.",
    statutoryRemedy:
      "Section 70 Indian Contract Act claim combined with Commercial Court summary suit under Order XXXVII CPC or MSME MSEFC arbitration for non-gratuitous 24/7 crisis counsel.",
    recommendedAction:
      "Preserve WhatsApp/Slack communications where the founder requested 24/7 emergency holding statements, drafted responses to investigative reporters, and media monitoring alerts during the crisis window.",
    evidenceItems: [
      "Emergency mandate letter, email confirmation, or WhatsApp authorization authorizing crisis advisory rates",
      "Time-stamped audit logs of crisis press holding statements, media spokesperson briefing Q&As, and reporter handling",
      "Evidence of founder/management adopting and publishing the crisis statement drafted by your firm",
      "Itemized timesheets and out-of-pocket distribution disbursements",
    ],
  },
  {
    id: "ipo-drhp-roadshow-default",
    tabLabel: "4. IPO / Investor PR Mandate",
    badge: "Pre-IPO Compliance Evasion",
    title: "Pre-IPO Firm Lists or Shelves DRHP and Refuses Success / Advisory Retainers",
    founderExcuse:
      "\"Because the market turned volatile and we postponed our DRHP filing, the IPO PR advisory retainer cannot be disbursed. We will settle once the merchant bankers re-initiate the roadshow next financial year.\"",
    legalReality:
      "Corporate communications work for SEBI quiet-period management, media monitoring, and institutional messaging is not contingent on IPO listing approval unless expressly drafted as a pure contingency fee in the SOW.",
    statutoryRemedy:
      "Statutory demand under Section 8 of the Insolvency and Bankruptcy Code (IBC) if debt exceeds ₹1 Crore, or MSEFC arbitration under Section 18 MSMED Act with compound interest at 3× RBI repo rate.",
    recommendedAction:
      "Submit complete compliance media monitoring reports, SEBI compliant media releases, and executive interview preparation dossiers directly to the Board of Directors and Lead Merchant Banker.",
    evidenceItems: [
      "Board-approved or CFO-signed engagement letter for IPO/Investor Relations communications",
      "SEBI publicity guideline compliance memos and media tracking logs prepared during the pre-filing quiet period",
      "Confirmation of attendance at investor roadshows and financial press roundtables",
      "GST invoices delivered with proof of delivery to corporate finance desk",
    ],
  },
];

export default function PRScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(PR_SCENARIOS[0].id);
  const currentScenario = PR_SCENARIOS.find((s) => s.id === activeTab) || PR_SCENARIOS[0];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-100 border border-red-200 mb-2">
          Diagnostic Scenario Matrix
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Select Your PR Default Commercial Pattern
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Explore tactical statutory remedies and evidentiary dossiers for common PR agency fee disputes across India.
        </p>
      </div>

      {/* Tabs Header */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {PR_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-left flex items-center gap-2 ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm ring-2 ring-red-600 ring-offset-1"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>{scenario.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="mt-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {currentScenario.badge}
          </span>
          <span className="text-[11px] font-mono text-slate-500 font-semibold">
            Section 70/73 ICA & MSMED Rail
          </span>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {currentScenario.title}
          </h4>
        </div>

        {/* Comparison Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-red-900 mb-1.5 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              Common Debtor Founder Defense
            </span>
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              {currentScenario.founderExcuse}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-900 mb-1.5 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Statutory Reality & Enforceability
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {currentScenario.legalReality}
            </p>
          </div>
        </div>

        {/* Action Strategy */}
        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs uppercase tracking-widest text-slate-300 font-bold">
              Legal Recovery Strategy & Pre-Litigation Rail
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong className="text-white">Remedy: </strong>
            {currentScenario.statutoryRemedy}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Recommended Play: </strong>
            {currentScenario.recommendedAction}
          </p>
        </div>

        {/* Evidence Dossier Box */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2.5">
          <span className="block text-xs font-black uppercase tracking-wider text-slate-900">
            Mandatory Evidence Checklist for this Default (BSA 2023 §63 Compliant)
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            {currentScenario.evidenceItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
