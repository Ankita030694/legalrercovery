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

const MARKETING_RECOVERY_SCENARIOS: ScenarioTab[] = [
  {
    id: "low-roas-d2c-trap",
    tabLabel: "D2C 'Low ROAS' Trap",
    title: "D2C Brand Withholds Last 2 Months Retainer Blaming 'ROAS Dropped to 2.2x' While Still Running Agency Creatives",
    modusOperandi:
      "A fast-growing D2C lifestyle or apparel brand engages a performance marketing agency on a monthly retainer of ₹1.5 Lakhs plus ad management. At month 4, seasonal ad CPMs rise or the client changes product pricing, causing blended ROAS to drop from 3.8x to 2.2x. The brand unilaterally stops paying invoices, claiming 'we suffered losses because of poor performance.' Meanwhile, Meta Ad Library reveals the brand continues spending ₹10 Lakh/month actively running the agency's exact high-converting video hooks, UGC edits, and landing page funnels.",
    legalDoctrine:
      "Best-Efforts Service Doctrine & Copyright Act Section 19(2)/51. In Indian contract law (M/s Alopi Parshad & Sons v. Union of India), a service contract is an obligation of best efforts, not an insurance policy guaranteeing commercial profit. The agency controls ad buying, copywriting, and creative testing; it does not control retail pricing, supply chain delivery, product fit, or checkout payment gateway drop-offs. Crucially, under Section 19(2) and Section 19(8) of the Copyright Act, 1957, intellectual property in bespoke creatives, video edits, and ad copies transfers to the client ONLY upon full payment of agreed consideration. Using unpaid creatives while refusing payment constitutes willful copyright infringement.",
    actionProtocol: [
      {
        phase: "Phase 1: Creative & Telemetry Freeze",
        description:
          "Export full Meta Ads Manager and Google Ads change logs proving campaign build-out, audience testing, and creative delivery. Capture screen recordings and timestamped URLs of the client actively running your video ads via the Meta Ad Library and Google Ads Transparency Center.",
      },
      {
        phase: "Phase 2: Formal Deliverable Acceptance Lock",
        description:
          "Compile Slack/WhatsApp/email approvals where the brand manager approved ad scripts, creative assets, and monthly roadmaps without raising deliverable defects within the contractual inspection window.",
      },
      {
        phase: "Phase 3: Dual-Barreled Statutory Demand & DMCA Notice",
        description:
          "Serve an advocate-vetted Legal Demand Notice demanding payment of overdue retainers within 7 days, accompanied by a 48-hour Copyright Infringement Cease-and-Desist warning under Section 51 of the Copyright Act to file takedown strikes on Meta, YouTube, and Shopify CDN.",
      },
    ],
    statutoryHook: "Indian Contract Act s.70/73 + Copyright Act 1957 s.19, s.51 & s.55",
    recommendedRemedy: "100% Retainer Recovery + Immediate Cease-and-Desist or Statutory Copyright Damages",
  },
  {
    id: "skipped-notice-lockout",
    tabLabel: "Skipped Notice & Lockout",
    title: "Client Unilaterally Revokes Ad Account Access & Skips Mandatory 60-Day Contractual Notice Period",
    modusOperandi:
      "A real estate developer or enterprise B2B company signs a 12-month agency agreement specifying a mandatory 60-day written notice period for termination to allow smooth handover and team resource reallocation. On a Friday evening, the client abruptly revokes the agency's Business Manager permissions, emails 'we are pausing services with immediate effect,' and refuses to clear the current month's invoice or pay the 60-day notice period fees.",
    legalDoctrine:
      "Breach of Express Contractual Covenant & Section 73 Indian Contract Act, 1872. A stipulated notice period in a commercial contract is a binding condition precedent. The agency dedicated account managers, copywriters, and media buyers whose salaries are incurred during the contractual notice window. Unilateral termination without serving contractual notice constitutes an actionable breach of contract. Section 73 mandates compensation for any loss or damage naturally arising in the usual course of things from such breach.",
    actionProtocol: [
      {
        phase: "Phase 1: Lockout Timestamp Logging",
        description:
          "Log the exact server timestamp and audit history showing sudden admin access revocation on Meta Business Manager, Google Marketing Platform, or HubSpot.",
      },
      {
        phase: "Phase 2: Notice Period Invoicing",
        description:
          "Issue a formal GST invoice for the full unserved 60-day notice period fees pursuant to Clause [Termination & Notice] of the signed Master Service Agreement (MSA).",
      },
      {
        phase: "Phase 3: Commercial Breach Legal Demand",
        description:
          "Dispatch an Advocate Legal Notice citing breach of Section 73 of the Contract Act and Section 15 of the MSMED Act, demanding full notice fees plus 3x RBI bank rate compound interest for registered MSMEs.",
      },
    ],
    statutoryHook: "Indian Contract Act Section 73 (Notice Period Damages) & MSMED Act Section 15–16",
    recommendedRemedy: "Full Unpaid Balance + Complete 60-Day Notice Period Compensation + MSME Compound Interest",
  },
  {
    id: "low-lead-quality-bluff",
    tabLabel: "EdTech/B2B 'Lead Quality' Bluff",
    title: "Client Withholds Payment Claiming 'Leads Did Not Convert into Paying Admissions or Enterprise Deals'",
    modusOperandi:
      "An EdTech institute or B2B SaaS company contracts an agency to generate qualified CPL (Cost-per-Lead) inquiries via LinkedIn and Google Search Ads. The agency hits all contracted key performance indicators (KPIs)—delivering 1,200 leads at ₹450 CPL with phone verification. At the end of the quarter, the client's internal sales telecallers fail to close sales, and the client emails: 'The leads were junk; students refused to enroll. We will not pay your Q3 invoice.'",
    legalDoctrine:
      "Separation of Marketing Obligations vs Sales Closure (Doctrine of Commercial Remoteness). Under Section 73 of the Indian Contract Act, 1872, liability extends only to proximate contractual breaches. Unless the contract explicitly makes the agency's fee contingent upon closed revenue (a pure commission structure), marketing agreements are service level agreements (SLAs) measured by traffic, CTR, impressions, and lead delivery. The agency has zero control over the client's sales team script, telecaller follow-up turnaround time, product pricing, or refund policies.",
    actionProtocol: [
      {
        phase: "Phase 1: Telemetry & Delivery Reconciliation",
        description:
          "Pull CSV exports from Meta Instant Forms, Google Ads Webhook integrations, and CRM sync timestamps proving successful lead ingestion into the client's CRM.",
      },
      {
        phase: "Phase 2: Telecaller Response Time Audit",
        description:
          "Highlight CRM response logs showing client's telecallers delayed calling leads by 4 to 14 days, demonstrating that poor conversion was directly caused by internal sales lethargy rather than lead generation defects.",
      },
      {
        phase: "Phase 3: Summary Recovery Notice",
        description:
          "Issue a formal demand emphasizing Section 70 (Quantum Meruit) and Order XXXVII CPC for liquidated debt arising out of verified ad deliverables accepted and received into client's database.",
      },
    ],
    statutoryHook: "Contract Act s.70 (Quantum Meruit), s.73 (Proximate Cause) & Order XXXVII CPC",
    recommendedRemedy: "Immediate Release of Full Invoiced Retainer Without Unauthorized Sales Penalties",
  },
  {
    id: "seo-lockin-breach",
    tabLabel: "SEO 6-Month Lock-in Breach",
    title: "SEO Client Terminates Contract at Month 3 of 6-Month Minimum Commitment Claiming 'No Rank 1 Yet'",
    modusOperandi:
      "An organic SEO client signs a 6-month minimum lock-in agreement acknowledging that search engine crawling, indexation, technical remediation, and backlink authority building require 4 to 6 months to materialize into top 3 organic rankings. At month 3, despite the agency delivering 100% of agreed technical audits, 24 optimized articles, schema implementations, and high-authority backlinks, the client abruptly cancels, stating 'organic traffic hasn't doubled yet' and refuses to pay months 4 to 6.",
    legalDoctrine:
      "Enforceability of Minimum Lock-in Term & Anticipatory Breach under Section 39 ICA 1872. Indian courts consistently uphold commercial lock-in clauses in service contracts where the pricing structure is amortized across a multi-month tenure. Terminating prior to the agreed lock-in term without curing any alleged material breach constitutes anticipatory breach of contract under Section 39, entitling the agency to the remaining tenure fees as liquidated damages.",
    actionProtocol: [
      {
        phase: "Phase 1: Deliverable Repository Verification",
        description:
          "Generate an exhaustive delivery audit including GitHub PRs, CMS publishing logs, Google Search Console indexing snapshots, and Ahrefs/Semrush backlink reports.",
      },
      {
        phase: "Phase 2: Algorithmic Disclaimer Enforcement",
        description:
          "Cite the Master Service Agreement clause where the client expressly acknowledged that search engine algorithms (Google core updates) operate independently of agency control.",
      },
      {
        phase: "Phase 3: Demand for Remainder of Lock-in Tenure",
        description:
          "Serve an Advocate Notice claiming the balance 3 months of the committed tenure under Contract Act Section 39 and Section 73, along with a formal revocation of copyright in all published articles and graphics until full settlement.",
      },
    ],
    statutoryHook: "Indian Contract Act s.39 (Repudiation), s.73 (Expectation Damages) & Copyright Act s.14",
    recommendedRemedy: "Payment of Remaining Lock-in Tenure Fees or Takedown of Published SEO Content",
  },
];

export default function DigitalMarketingRetainerScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(MARKETING_RECOVERY_SCENARIOS[0].id);

  const currentScenario =
    MARKETING_RECOVERY_SCENARIOS.find((s) => s.id === activeTab) || MARKETING_RECOVERY_SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8">
      {/* Mobile Tab Selector */}
      <div className="sm:hidden mb-5">
        <label htmlFor="scenario-select" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Select Retainer Dispute Scenario:
        </label>
        <select
          id="scenario-select"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-800 shadow-xs focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
        >
          {MARKETING_RECOVERY_SCENARIOS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.tabLabel}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop / Tablet Tab Buttons */}
      <div className="hidden sm:flex flex-wrap gap-2 pb-5 border-b border-slate-200">
        {MARKETING_RECOVERY_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="pt-5 space-y-5">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            Dispute Archetype &bull; {currentScenario.tabLabel}
          </span>
          <p className="text-base sm:text-lg font-black text-slate-900 leading-snug">
            {currentScenario.title}
          </p>
        </div>

        {/* Modus Operandi & Legal Doctrine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
            <span className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1.5">
              Client Default Modus Operandi
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.modusOperandi}
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 border border-slate-800 shadow-2xs">
            <span className="block text-[11px] font-black uppercase tracking-wider text-red-400 mb-1.5">
              Statutory Doctrine &amp; Legal Weapon
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {currentScenario.legalDoctrine}
            </p>
          </div>
        </div>

        {/* Action Protocol Steps */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
          <span className="block text-[11px] font-black uppercase tracking-wider text-slate-900 mb-3">
            Agency Recovery Action Protocol
          </span>
          <div className="space-y-3">
            {currentScenario.actionProtocol.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs flex items-center justify-center shrink-0 border border-red-200 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900 mb-0.5">{step.phase}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Hook & Recommended Remedy Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-0.5">
              Applicable Statute
            </span>
            <span className="text-xs font-bold text-amber-950 font-mono">
              {currentScenario.statutoryHook}
            </span>
          </div>
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">
              Enforceable Creditor Remedy
            </span>
            <span className="text-xs font-bold text-emerald-950">
              {currentScenario.recommendedRemedy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
