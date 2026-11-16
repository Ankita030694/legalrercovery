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
    id: "production-deploy-uat-stall",
    tabLabel: "1. Live Deploy Without Sign-Off",
    title: "Client Deploys Code to Production & Onboards Real Users While Withholding Final 35% Milestone",
    badge: "Deemed Acceptance & Contract Act s.55",
    buyerProfile:
      "Venture-funded startup, mid-market enterprise, or D2C consumer platform contracting a custom mobile app, enterprise SaaS portal, or AI workflow.",
    pretext:
      "The agency deploys Release Candidate 1.0 to the staging environment for standard 14-day UAT. Without issuing written approval, the client's internal dev team exports the build, configures custom production DNS, points live API endpoints, submits mobile apps to the Apple App Store and Google Play, and initiates paid customer onboarding. However, when the dev agency submits the final 35% milestone invoice (₹16.5 Lakh), the client's PM stalls: 'We cannot sign off on UAT because our live users are discovering intermittent UI edge cases, so UAT remains open indefinitely.'",
    legalReality:
      "Deploying software to live production environments and transacting commercial traffic constitutes constructive or 'Deemed Acceptance' as an absolute matter of law. Under Indian contract jurisprudence and Section 42 of the Sale of Goods Act, 1930 read with Sections 55 and 70 of the Indian Contract Act, 1872, exercising dominion over software and deriving commercial utility is fundamentally inconsistent with rejecting the deliverable. The client is legally estopped from withholding contractual milestone payments on the pretext of incomplete UAT while reaping live operational benefits.",
    statutoryHook:
      "Sale of Goods Act 1930 s.42 (Deemed Acceptance) + Indian Contract Act 1872 ss. 55 & 70 + Doctrine of Estoppel by Conduct",
    actionProtocol: [
      "Collate immutable third-party evidence under BSA 2023 Section 63: production DNS CNAME pointing records, WHOIS records, App Store release timestamps, and public marketing announcements.",
      "Capture live application telemetry, Google Analytics / Mixpanel active user metrics, and payment gateway transaction receipts proving commercial utilization.",
      "Issue a formal Advocate 'Notice of Deemed Acceptance' establishing that production deployment extinguished the conditional UAT inspection window under Section 55.",
      "Demand immediate disbursement of the final milestone within 10 days, warning that continued production use without payment revokes software license rights under Copyright Act Section 51.",
    ],
  },
  {
    id: "cosmetic-bug-scope-creep",
    tabLabel: "2. Infinite Cosmetic Bug Loop",
    title: "Client Raises 50+ Cosmetic UI Tweaks & Unbudgeted Feature Demands Disguised as 'UAT Blockers'",
    badge: "SOW Segregation & Contract Act s.70 Quantum Meruit",
    buyerProfile:
      "Non-technical corporate client, traditional manufacturing firm, or first-time digital founder lacking technical product management frameworks.",
    pretext:
      "During the 14-day UAT window, the client ignores the signed Statement of Work (SOW) and Acceptance Criteria. Instead, their team floods Jira and Slack with 54 new tickets—demanding complete redesign of onboarding workflows, alternate payment gateways, custom animation physics, and multi-currency reporting. They categorize all 54 items as 'Critical Blocker Bugs' and refuse to sign the UAT milestone or disburse ₹12.0 Lakh until every item is coded and deployed for free.",
    legalReality:
      "In software contract law, a 'defect' or 'bug' is strictly defined as an objective failure of the delivered code to conform to the explicit Functional Specification Document (FSD) or signed SOW. Enhancements, aesthetic re-themes, workflow variations, and newly imagined features are Change Requests (CRs). Under Section 70 of the Indian Contract Act (Quantum Meruit), a beneficiary cannot compel gratuitous labor outside agreed consideration. The dev shop is entitled to freeze out-of-scope tasks and demand full milestone payment for delivered SOW features.",
    statutoryHook:
      "Indian Contract Act 1872 s.70 (Quantum Meruit) + MSMED Act 2006 s.15 (Statutory 45-Day Payment Limit) + Commercial Courts Act 2015 s.2(1)(c)(xviii)",
    actionProtocol: [
      "Execute an objective Defect Severity Audit, cross-referencing all 54 tickets against the signed SOW, Figma prototypes, and technical architecture baselines.",
      "Segregate tickets into two schedules: Schedule A (true warranty defects to be patched within 5 business days) and Schedule B (Scope Creep Change Requests with associated man-hour estimates).",
      "Issue a formal Milestone Delivery Notice declaring core SOW functionality complete, verified, and ready for sign-off under the contract's acceptance terms.",
      "State unequivocally that Schedule B Change Requests will be scheduled under a separate billable Change Order only after the baseline milestone invoice is cleared.",
    ],
  },
  {
    id: "github-source-code-extortion",
    tabLabel: "3. GitHub Repo Hostage & IP Extortion",
    title: "Client Demands Full GitHub Admin Rights & Root AWS Credentials Before Paying Outstanding Invoices",
    badge: "Copyright Act 1957 s.17/s.19 Statutory IP Lien",
    buyerProfile:
      "Enterprise buyer or venture-backed entity attempting to cut ties with the dev agency to transition maintenance to an in-house team without settling final dues.",
    pretext:
      "With 35% of the total project milestone fee (₹18.5 Lakh) and ₹6.0 Lakh in approved change orders remaining unpaid, the client's CTO sends an aggressive legal notice: 'You must transfer primary ownership of the GitHub organization, hand over all AWS/GCP root credentials, and push raw unminified source code immediately. If you fail to do so within 48 hours, you are in breach of contract and we will initiate legal proceedings.'",
    legalReality:
      "Under Sections 17 and 19 of the Copyright Act, 1957, the software agency or developer is the first author and legal owner of copyright in the bespoke source code, database schemas, and AI architectures until a formal written assignment is executed. Under settled Indian contract law and standard technology MSAs, intellectual property assignment is an explicitly conditional covenant: IP transfers if and only if full contract consideration is paid. A client cannot legally compel source code handover while holding unpaid milestone invoices.",
    statutoryHook:
      "Copyright Act 1957 ss. 17, 19, 51 & 63 (Criminal Infringement) + Indian Contract Act 1872 ss. 51–54 (Reciprocal Promises)",
    actionProtocol: [
      "Assert a formal Statutory Vendor IP Lien under Section 19 of the Copyright Act and Section 51 of the Indian Contract Act (performance of reciprocal promises).",
      "Serve an Advocate Legal Notice confirming that source code assignment covenants remain unvested and contingent upon full realization of cleared funds.",
      "Advise the client in writing that unauthorized copying, decompilation, or deployment of staging builds constitutes willful copyright infringement under Section 51, exposing directors to damages and criminal prosecution under Section 63.",
      "Offer escrow or simultaneous closing: release of full Git admin credentials against verified RTGS/NEFT settlement or bank escrow disbursement.",
    ],
  },
  {
    id: "agile-sprint-scope-ambush",
    tabLabel: "4. Agile Sprint Scope Ambush",
    title: "Client Enforces Fixed-Bid Budget While Demanding Open-Ended Agile Sprints & Endless Pivots",
    badge: "Contract Act s.39 Repudiation & Order XXXVII CPC",
    buyerProfile:
      "Corporate client executing an agency contract drafted with hybrid ambiguity: fixed-price milestone fee combined with Agile Scrum sprint ceremonies.",
    pretext:
      "The client contracted the agency to develop an AI-powered logistics SaaS platform for a fixed budget of ₹28.0 Lakh across an estimated 6 sprints (12 weeks). During development, the client changed product direction four times, adding real-time route optimization, multi-vendor marketplaces, and telematics hardware integrations. By Sprint 6, all 240 contracted story points were delivered, but the client's PM refuses to pay the final ₹9.5 Lakh milestone, arguing: 'Scrum is iterative; you must continue sprint cycles for free until our entire backlog is finished.'",
    legalReality:
      "A fixed-bid contract legally requires a fixed, immutable scope. An agile delivery model prices iterative engineering capacity (Time & Materials). Where a client contracts under a hybrid model, the delivery capacity is bounded by the agreed story points and sprint hours. When a client consumes all contracted engineering velocity and then demands unlimited free developer capacity while refusing sprint milestone payments, the client repudiates the contract under Section 39 of the Indian Contract Act.",
    statutoryHook:
      "Indian Contract Act 1872 ss. 39 & 73 (Repudiation & Compensatory Damages) + Commercial Courts Act 2015 s.12A Pre-Institution Mediation",
    actionProtocol: [
      "Produce a certified Sprint Velocity & Story Point Completion Report from Jira/Linear, documenting the exact delivery of the 240 contracted story points.",
      "Issue a formal Notice of Sprint Budget Exhaustion under Section 39 of the Contract Act, giving the client 7 business days to cure default and fund additional sprint cycles.",
      "Immediately suspend active engineering resources, standups, and deployment pipelines to mitigate further unbilled agency payroll burn.",
      "File an application for Pre-Institution Mediation under Section 12A of the Commercial Courts Act or lodge an MSMED Act claim for 3x compound interest.",
    ],
  },
];

export default function SoftwareUatScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((s) => {
          const isActive = s.id === activeTab;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveTab(s.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {s.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {scenario.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Commercial Dispute Pattern
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mb-3 leading-snug">
          {scenario.title}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">
              Debtor Profile &amp; Project Setting
            </p>
            <p>{scenario.buyerProfile}</p>
          </div>

          <div className="bg-red-50/70 border-l-4 border-red-500 p-4 rounded-r-xl">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-red-600 mb-1">
              The Client's Stonewalling Pretext
            </p>
            <p className="text-slate-800 italic">"{scenario.pretext}"</p>
          </div>

          <div className="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-xl">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 mb-1">
              The Statutory &amp; Contractual Reality
            </p>
            <p className="text-slate-800">{scenario.legalReality}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">
              Governing Statutory Hooks
            </p>
            <p className="font-semibold text-slate-900">{scenario.statutoryHook}</p>
          </div>

          <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-red-400 mb-2">
              Agency Operational &amp; Legal Action Protocol
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {scenario.actionProtocol.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-black text-[#DC2626] shrink-0">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
