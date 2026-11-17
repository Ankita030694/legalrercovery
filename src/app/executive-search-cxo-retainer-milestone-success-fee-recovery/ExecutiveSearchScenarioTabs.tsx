"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  modusOperandi: string;
  legalDoctrine: string;
  actionProtocol: {
    phase: string;
    description: string;
  }[];
  statutoryHook: string;
  recommendedRemedy: string;
}

const SEARCH_DEFAULT_SCENARIOS: ScenarioTab[] = [
  {
    id: "shortlist-freeze",
    tabLabel: "Shortlist Received & 'Role Frozen'",
    title: "Client Absorbed Competitor Talent Map & 5 Finalists, Then 'Froze' Mandate to Evade Tranche-2",
    modusOperandi:
      "After the search firm delivers the exhaustive market intelligence report, competitor compensation benchmarking, and 5 thoroughly vetted CXO profiles (with video interview transcripts and psychometric assessments), the promoter or CHRO issues an email claiming: 'Due to macroeconomic headwinds or internal restructuring, the Board has placed this leadership search on indefinite hold.' Weeks later, the client initiates direct contact with shortlisted candidates without paying the Tranche-2 (33.33%) milestone invoice.",
    legalDoctrine:
      "Under Section 70 of the Indian Contract Act, 1872 (Quantum Meruit) and the doctrine of Prevention of Performance (Section 53), when a service provider has completed the defined contractual deliverable (delivery of qualified candidate slate conforming to the Search Specification), the client's obligation to pay the milestone crystallizes unconditionally. A unilateral internal operational hold does not negate contractual completion of the intellectual deliverable.",
    actionProtocol: [
      {
        phase: "Step 1: Formal Delivery Acknowledgement Audit",
        description:
          "Preserve transmission logs, email threads, calendar invites, and ATS timestamps demonstrating the receipt and review of the 5 finalist profiles and confidential compensation intelligence report under BSA 2023 Section 63.",
      },
      {
        phase: "Step 2: Milestone Invoicing & Strict 15-Day Cure Notice",
        description:
          "Issue the Tranche-2 invoice immediately citing Clause 4 of the Retained Mandate Agreement. Send a formal intimation stating that under Section 53 of the Contract Act, readiness and delivery of the shortlist vests the debt, regardless of internal corporate hiring freezes.",
      },
      {
        phase: "Step 3: Summary Suit under Order XXXVII CPC",
        description:
          "File an Order XXXVII Summary Suit in the designated Commercial Court, supported by the executed mandate letter and documented email confirmation of shortlist delivery, barring the debtor from entering unconditional defense.",
      },
    ],
    statutoryHook: "Contract Act s.53 & s.70 | Commercial Courts Act s.2(1)(c)(xviii) | Order XXXVII CPC",
    recommendedRemedy: "Immediate Tranche-2 Invoice Enforcement + 18% MSMED Act Interest Compounding.",
  },
  {
    id: "cancelled-search-kill-fee",
    tabLabel: "Cancelled Search & Defaulted Kill Fee",
    title: "Client Cancelled Executive Search Mid-Mandate and Disputed the 50%–75% Kill Fee Clause",
    modusOperandi:
      "Sixty days into a VP/CXO search, the corporate sponsor acquires another entity or appoints an internal candidate. When the search partner bills the standard Retained Kill Fee (stipulating payment of two-thirds of the total fee or a minimum flat 66% retainer if the client aborts the mandate prior to final offer rollout), corporate finance disallows the invoice, alleging that 'no actual hiring occurred, so no further fees are payable.'",
    legalDoctrine:
      "Executive search is an intellectual advisory engagement requiring dedicated partner bandwidth, competitive market intelligence, and executive reputational capital, not a contingent broker service. Indian courts enforce pre-agreed contractual cancellation fees under Section 74 of the Indian Contract Act, 1872 as genuine pre-estimates of operational damages and opportunity loss, provided the fee is not an unconscionable penalty.",
    actionProtocol: [
      {
        phase: "Step 1: Resource Allocation & Partner Hours Log",
        description:
          "Compile timesheets, market mapping decks, candidate outreach logs, and board presentation decks to establish that substantial performance and professional expenditure were expended prior to notice of cancellation.",
      },
      {
        phase: "Step 2: Issue Section 74 / Order XXXVII Legal Notice",
        description:
          "Serve an advocate-vetted demand notice establishing that the Kill Fee constitutes liquidated compensation under Section 74, contractually agreed between two sophisticated commercial entities with equal bargaining power.",
      },
      {
        phase: "Step 3: Section 12A Pre-Institution Commercial Mediation",
        description:
          "Initiate mandatory pre-institution mediation under the Commercial Courts Act, 2015. Over 72% of corporate boards settle kill fees during mediation to preserve industry reputation and prevent public disclosure of broken mandates.",
      },
    ],
    statutoryHook: "Contract Act s.74 (Liquidated Compensation) | Commercial Courts Act s.12A Mediation",
    recommendedRemedy: "Enforce Contractual Kill Fee with pre-litigation Commercial Mediation and MSME filing.",
  },
  {
    id: "understated-ctc-esop",
    tabLabel: "Understated CTC & Hidden ESOPs",
    title: "Promoter Reported ₹80L Base CTC to Depress 25% Success Fee, Concealing ₹45L Sign-on & Pre-IPO ESOPs",
    modusOperandi:
      "The client hires the search partner's finalist for an executive role. The client's HR department sends an email stating: 'The candidate accepted at a gross Cost-to-Company (CTC) of ₹80 Lakh, please generate your 25% final Tranche-3 invoice for ₹20 Lakh.' However, through discreet candidate confirmations or subsequent MCA filings, the search firm discovers the actual compensation package included a ₹25 Lakh upfront sign-on bonus, ₹20 Lakh guaranteed first-year retention bonus, and 50,000 pre-IPO stock options valued at ₹35 Lakh.",
    legalDoctrine:
      "Section 17 and Section 18 of the Indian Contract Act (Fraud and Misrepresentation) combined with the Search Agreement's Compensation Definition Clause. Retained search contracts explicitly define Annual Compensation to incorporate all guaranteed cash allowances, signing bonuses, guaranteed annual performance incentives, and the fair market value of equity/ESOP allocations. Concealing compensation components constitutes actionable civil fraud and willful breach of contract.",
    actionProtocol: [
      {
        phase: "Step 1: Requisition Full Appointment Letter & Annexures",
        description:
          "Invoke the Contractual Audit & Disclosure Clause demanding certified copies of the candidate's complete Form 16, Offer Letter, Annexure A (Salary Breakup), and Board Resolution approving ESOP grants.",
      },
      {
        phase: "Step 2: Recalculate Total Cost-to-Company (TCTC)",
        description:
          "Recompute the 25% search fee against the true aggregate remuneration (₹1.60 Crore instead of ₹80 Lakh), crystallizing a ₹20 Lakh deficit fee plus GST and compounding commercial interest.",
      },
      {
        phase: "Step 3: Forensic Discovery & Legal Notice for Civil Fraud",
        description:
          "Serve a stern legal notice demanding reconciliation within 15 days. Highlight that failure to disclose triggers MCA/ROC scrutiny, auditor disclosure of contingent liability, and an application for production of employment contracts under Order XI Rule 14 CPC.",
      },
    ],
    statutoryHook: "Contract Act s.17/18 & s.73 | CPC Order XI Rule 14 (Production of Documents)",
    recommendedRemedy: "Audit Requisition Notice followed by Commercial Court Suit with mandatory discovery.",
  },
  {
    id: "subsidiary-circumvention",
    tabLabel: "Subsidiary & Affiliate Circumvention",
    title: "Candidate Rejected by Listed Parent Company, Covertly Hired by Unlisted Subsidiary or Group JV",
    modusOperandi:
      "The search partner presents a senior Chief Technology Officer (CTO) to the parent technology enterprise. The hiring committee rejects the profile citing lack of domain fit. Four months later, the candidate is appointed as Managing Director or CTO of an unlisted fintech joint venture or holding company subsidiary owned by the same promoter family, entirely bypassing the exclusive retained search agreement.",
    legalDoctrine:
      "Lifting the Corporate Veil (Doctrine of Alter Ego) and Section 73 of the Indian Contract Act. Indian Commercial Courts pierce the corporate veil where subsidiary entities are deployed as mere cloaks or devices to evade prior contractual obligations and introduction commissions. The standard 12-to-24 month ownership clause binds all affiliates, group entities, and parent companies under established corporate jurisprudence.",
    actionProtocol: [
      {
        phase: "Step 1: Establish Promoter & Corporate Shareholding Nexus",
        description:
          "Obtain MCA Master Data, Director DIN filings, and annual reports establishing identical beneficial ownership, common directors, and corporate linkage between the signatory parent and hiring subsidiary.",
      },
      {
        phase: "Step 2: Triangulate Introduction Timestamps with Appointment Date",
        description:
          "Collate the initial candidate submission dossier, NDA, interview coordination emails, and the MCA DIR-12 appointment filing or LinkedIn public announcement verifying appointment within the 12-month protection window.",
      },
      {
        phase: "Step 3: Joint and Several Demand Notice to Parent & Affiliate",
        description:
          "Issue a combined legal demand notice holding both the parent company and the hiring affiliate jointly and severally liable for the full placement fee plus 100% liquidated penalty for bad-faith circumvention.",
      },
    ],
    statutoryHook: "Doctrine of Piercing Corporate Veil | Contract Act s.70 & s.73 | MCA DIN Filings",
    recommendedRemedy: "Joint & Several Recovery Notice against Parent Company and Subsidiary Directors.",
  },
];

export default function ExecutiveSearchScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SEARCH_DEFAULT_SCENARIOS[0].id);

  const current = SEARCH_DEFAULT_SCENARIOS.find((s) => s.id === activeTab) || SEARCH_DEFAULT_SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-xl">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 flex-wrap gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-red-400 font-bold block mb-1">
            Tactical Case Simulator
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            4 Executive Search Default Modes & Counter-Action Playbooks
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
          Select Failure Mode Below
        </span>
      </div>

      {/* Tabs list */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SEARCH_DEFAULT_SCENARIOS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                isActive
                  ? "bg-[#DC2626] text-white border-red-500 shadow-md"
                  : "bg-slate-800/70 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-white" : "bg-red-400"
                  }`}
                />
                <span className="text-[10px] uppercase tracking-wider opacity-80">Scenario</span>
              </div>
              <span className="line-clamp-2 leading-snug">{tab.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-800/90 rounded-xl p-5 sm:p-6 border border-slate-700/80 space-y-5">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white leading-snug mb-2">
            {current.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-lg border border-slate-700/50">
            <strong className="text-red-400 block mb-1 uppercase text-[10px] tracking-wider">
              Client Modus Operandi:
            </strong>
            {current.modusOperandi}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-700/40">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Applicable Legal Doctrine
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.legalDoctrine}
            </p>
          </div>
          <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-700/40">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Statutory Hook & Recommended Remedy
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              {current.statutoryHook}
            </p>
            <p className="text-xs font-semibold text-emerald-400 mt-2">
              Action: {current.recommendedRemedy}
            </p>
          </div>
        </div>

        {/* Action Protocol Steps */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
            Standard Escalation Protocol
          </span>
          <div className="space-y-2.5">
            {current.actionProtocol.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30"
              >
                <div className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="text-xs">
                  <strong className="text-slate-100 block mb-0.5">{step.phase}</strong>
                  <span className="text-slate-400 leading-relaxed">{step.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
