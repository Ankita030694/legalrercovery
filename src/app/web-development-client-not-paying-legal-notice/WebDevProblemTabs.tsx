"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "milestone-ghosted",
    tabLabel: "Milestone Ghosted",
    title: "Client Ghosted After Website / App Final Milestone Handover",
    cause:
      "The developer builds the full-stack web application, delivers the staging build or commits to GitHub, and submits the final milestone invoice (typically 30% to 50% balance). The client suddenly stops responding on Slack, WhatsApp, and email, while simultaneously using the web portal or software in production.",
    legalBasis:
      "Under Section 19(1) of the Indian Copyright Act, 1957, an assignment of copyright in software/code is not valid unless it is in writing and executed by the assignor or their duly authorized agent. Crucially, without payment of agreed consideration, copyright does not pass to the client. Using, hosting, or distributing unassigned code constitutes civil infringement under Section 51 and criminal infringement under Section 63 (punishable with imprisonment up to 3 years and fines up to ₹2,00,000).",
    steps: [
      {
        step: "Preserve Digital Delivery & Communication Audit",
        description:
          "Export complete WhatsApp, Slack, email trails, and git commit hashes. Prepare a certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA) to establish digital admissibility.",
      },
      {
        step: "Issue Advocate Notice Citing Section 19 Copyright Lever",
        description:
          "Serve a 15-day statutory demand notice stating that software copyright remains strictly with the developer and that continued commercial use constitutes intentional copyright infringement.",
      },
      {
        step: "Submit DMCA / Host Takedown to Cloudflare, AWS, or Vercel",
        description:
          "If the client fails to cure the default within 15 days, dispatch a formal statutory IP infringement takedown notice to their hosting provider and domain registrar.",
      },
    ],
    statutoryRule: "Section 19 & 63 Copyright Act, 1957; Section 73 Indian Contract Act",
  },
  {
    id: "revision-trap",
    tabLabel: "Endless Revisions",
    title: "Client Weaponizing Endless 'Revisions' to Withhold Final Payment",
    cause:
      "The core scope of work (SOW) agreed in the initial proposal has been 100% completed, but the client keeps requesting moving goalposts, extra pages, uncontracted backend APIs, or visual overhauls, refusing to release milestone payment until every arbitrary tweak is fulfilled.",
    legalBasis:
      "Under Section 37 and 73 of the Indian Contract Act, 1872, parties to a contract must perform their respective promises as agreed. Scope of work is defined by the initial written agreement, email proposal, or WhatsApp exchange. A client cannot unilaterally impose post-contractual alterations or withhold payment for delivered deliverables. Revisions beyond the agreed scope constitute chargeable variations or quantum meruit under Section 70.",
    steps: [
      {
        step: "Draft a Final Scope-Completion Reconciliation Matrix",
        description:
          "Map each contracted feature against its deployed URL, test case, or git PR commit. Document that the agreed SOW has been fully executed.",
      },
      {
        step: "Issue Notice of Acceptance & SOW Closure",
        description:
          "Put the client on written notice that the primary milestone is delivered, additional requests constitute Phase 2 change requests, and final invoice is immediately payable.",
      },
      {
        step: "Escalate via Advocate Demand Notice with Interest",
        description:
          "Demand payment of the principal milestone plus statutory compound interest under Section 16 of the MSMED Act (if Udyam registered) or commercial interest.",
      },
    ],
    statutoryRule: "Section 37, 70 & 73 Indian Contract Act, 1872; Section 16 MSMED Act",
  },
  {
    id: "deployed-without-paying",
    tabLabel: "Code Stolen / Revoked",
    title: "Client Deployed Code to Production and Revoked Developer Access",
    cause:
      "The client gained access to staging source code or production environment credentials (e.g., AWS, Supabase, Vercel, cPanel, or GitHub organization), pushed the application live to paying users, and abruptly removed the developer's administrative access without clearing outstanding invoices.",
    legalBasis:
      "This conduct constitutes a dual breach: civil breach of contract under Section 73 of the Contract Act and criminal misappropriation / cheating under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS, formerly IPC Sections 406 and 420). Because consideration was unpaid, the client possesses zero proprietary title to the source code, rendering their commercial exploitation an actionable tort of software piracy.",
    steps: [
      {
        step: "Document Access Revocation Timestamps & Production Launch",
        description:
          "Capture archive snapshots (Wayback Machine), DNS changes, and audit logs demonstrating the exact moment credentials were removed while invoices remained unpaid.",
      },
      {
        step: "Serve Cease-and-Desist Notice with Commercial Dues Demand",
        description:
          "Advocate notice formally revoking any implied temporary license to operate the software and demanding immediate payment or cessation of website operations.",
      },
      {
        step: "Initiate Emergency Commercial Injunction & Infringement Complaint",
        description:
          "File an intellectual property suit before the Commercial Court seeking an interim injunction against unauthorized website hosting alongside money recovery.",
      },
    ],
    statutoryRule: "Section 51 & 55 Copyright Act; BNS Section 316 & 318 (Criminal Breach)",
  },
  {
    id: "international-client",
    tabLabel: "Overseas Client Default",
    title: "International Client (US, UK, UAE, EU) Refuses to Pay Indian Developer",
    cause:
      "An Indian freelance software engineer or agency delivers custom web or mobile development to an offshore client based in Delaware, London, Dubai, or Singapore. When final payment falls due, the client stops replying or threatens bad platform reviews.",
    legalBasis:
      "India is a signatory to the Berne Convention for the Protection of Literary and Artistic Works and the Universal Copyright Convention. By virtue of the International Copyright Order, 1999 (promulgated under Section 40 of the Indian Copyright Act), copyright originated in India is automatically recognized and protected across 180+ member countries including the US, UK, Canada, and EU. Unpaid code remains protected globally without separate foreign copyright registration.",
    steps: [
      {
        step: "Establish Extraterritorial Copyright Ownership Proof",
        description:
          "Collate git commits, timestamps, and contract terms verifying that the work was authored in India by an Indian resident developer.",
      },
      {
        step: "Dispatch International Legal Demand Notice via Legal Counsel",
        description:
          "Serve a formal statutory notice directly to the overseas corporate registered agent, CEO, and legal counsel via registered international courier and trackable digital dispatch.",
      },
      {
        step: "File DMCA Takedown with US/Global Hosting Providers",
        description:
          "Issue a formal Digital Millennium Copyright Act (17 U.S.C. § 512) takedown notice to AWS, Vercel, GitHub, Google Cloud, or Cloudflare, compelling immediate domain suspension.",
      },
    ],
    statutoryRule: "Section 40 Copyright Act; Berne Convention; 17 U.S.C. § 512 (DMCA)",
  },
  {
    id: "agency-subcontractor",
    tabLabel: "Agency Middleman Default",
    title: "Agency Subcontractor Left Unpaid: 'Client Hasn't Paid Us Yet'",
    cause:
      "A digital marketing or software agency subcontracts frontend, full-stack, or API development to an independent contractor. Upon project completion, the agency claims 'we will pay you once the end-client pays us' (pay-when-paid defense), delaying payment by months.",
    legalBasis:
      "Under Indian contract law, 'pay-when-paid' and 'pay-if-paid' clauses are strictly construed. Unless explicitly stipulated as a conditional precedent in a signed agreement, the agency's liability to its subcontractor is independent of the end-client's billing cycle. The developer performed services for the agency, creating an enforceable debtor-creditor relationship under Section 70 and 73 of the Contract Act. If the developer holds Udyam MSME registration, the agency is legally mandated under Section 15 of the MSMED Act to settle invoices within 45 days.",
    steps: [
      {
        step: "Reject Verbal 'Pay-When-Paid' Claims in Writing",
        description:
          "Send an immediate written reply stating that independent vendor invoices are not contingent on third-party settlements and demand payment within 7 days.",
      },
      {
        step: "Serve Advocate Legal Notice to the Marketing / Tech Agency",
        description:
          "Serve a legal notice demanding full outstanding dues plus 3× RBI compound interest under Section 16 MSMED Act, naming the agency directors personally.",
      },
      {
        step: "Notify the End-Client Regarding Unassigned Copyright",
        description:
          "If the agency remains intransigent, formally notify the end-client that the software powering their business remains the unassigned IP of the subcontractor due to non-payment.",
      },
    ],
    statutoryRule: "Section 15 & 16 MSMED Act, 2006; Section 70 Contract Act",
  },
];

export default function WebDevProblemTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Selectors */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/80 p-1.5 gap-1.5 scrollbar-thin">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer flex-shrink-0 ${
                isActive
                  ? "bg-white text-red-600 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2.5">
            <span>Dispute Scenario</span>
            <span>•</span>
            <span className="font-mono">{currentProblem.statutoryRule}</span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              The Factual Dispute
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-red-50/50 border border-red-100 space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Statutory Legal Stand
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3 Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
            Recommended Action Playbook
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900">{item.step}</p>
                </div>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Context Link */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 font-medium">
            Need this served on advocate letterhead?
          </span>
          <Link
            href="/send-legal-notice-online-india"
            className="text-red-600 font-bold hover:text-red-700 hover:underline flex items-center gap-1"
          >
            Draft &amp; Dispatch Legal Notice Online &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
