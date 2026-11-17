"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  statutoryRemedy: string;
  keySteps: string[];
  recoveryTimeline: string;
  recommendedCTA: {
    label: string;
    href: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: "whitelisting-unauthorized",
    tabLabel: "Unpaid Whitelisting / Boosting",
    title: "Brand Boosting Reels & Meta Ads After Campaign Window Expired",
    badge: "Copyright Act s.51/55 + Performer's Rights s.38A",
    badgeColor: "bg-red-950/60 text-red-400 border border-red-800/60",
    description:
      "The brand booked a 30-day organic Reel campaign. Despite not clearing the ₹18,50,000 agency invoice, brand media buyers connected Meta Ad Account Whitelisting (Partnership Ads) and have been running paid conversion ads for 120+ days without paying licensing fees.",
    statutoryRemedy:
      "Because consideration was never paid, copyright and performer licenses never vested or stand revoked. The continuous paid boosting constitutes willful commercial infringement under Section 51 of the Copyright Act, 1957. Issuing a Dual Monetary + IP Injunction Notice triggers an immediate Meta Ad Library takedown and statutory copyright damage liabilities.",
    keySteps: [
      "Capture Meta Ad Library active ad IDs, Ad Account fingerprints, and impressions run to prove active monetization.",
      "Dispatch 7-Day Statutory IP Infringement & Injunction Demand terminating all whitelisting tokens immediately.",
      "Notify the client's direct CMO and external media agency of joint vicarious copyright liability under BSA 2023 s.63 electronic proof.",
      "File takedown request with Meta IP Operations citing non-licensed commercial exploitation of creator persona."
    ],
    recoveryTimeline: "3 to 7 Days (Brands settle rapidly to prevent paid ad-account shutdown & influencer boycott)",
    recommendedCTA: {
      label: "Issue IP Revocation & Campaign Notice (₹999)",
      href: "/user/new-recovery",
    },
  },
  {
    id: "agency-fronted-creators",
    tabLabel: "Agency Fronted Creator Payouts",
    title: "Agency Paid 45 Creators Upfront; Corporate Brand Delays 120+ Days",
    badge: "MSMED Act s.15–18 + Order 37 CPC",
    badgeColor: "bg-amber-950/60 text-amber-400 border border-amber-800/60",
    description:
      "To preserve roster loyalty and creator exclusivity, the talent agency disbursed ₹42,00,000 from its own working capital. The corporate brand or media holding company accepted deliverable links but pushes settlement citing 'internal client billing cycles' and 120-day vendor delays.",
    statutoryRemedy:
      "Under Section 15 of the MSMED Act, 2006, payment cannot exceed 45 days. The agency is entitled to mandatory compound interest at 3x the RBI Bank Rate under Section 16. Furthermore, signed SOWs, email approvals, and link logs allow a Summary Suit under Order XXXVII of the CPC where the debtor has no automatic right to defend.",
    keySteps: [
      "Aggregate all individual creator SOWs, live link proof, and agency upfront payment bank receipts.",
      "Calculate 3x RBI compound interest accrued since the 45th day of invoice delivery.",
      "Issue an Advocate-Vetted Institutional Recovery Notice naming the corporate Directors and Media Planning Head.",
      "Lodge a Samadhaan application or initiate Commercial Summary proceedings for unpaid liquidated sums."
    ],
    recoveryTimeline: "15 to 30 Days via Pre-Litigation Notice or 90 Days under MSEFC",
    recommendedCTA: {
      label: "Upload Campaign Roster for Bulk Recovery",
      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
    },
  },
  {
    id: "barter-plus-cash",
    tabLabel: "Barter + Cash Default",
    title: "Brand Sent Gift Hampers but Withholds Contracted Cash Balance",
    badge: "Indian Contract Act s.73/74 + GST s.31",
    badgeColor: "bg-blue-950/60 text-blue-400 border border-blue-800/60",
    description:
      "The agreement stipulated 'Product Gifting worth ₹3L + Fixed Creator Fee of ₹12L'. Brand claims delivery of products satisfies the campaign scope, refusing to release the cash tranche despite published deliverables.",
    statutoryRemedy:
      "Barter deliverable valuations cannot extinguish expressly contracted cash liabilities. Under Section 73 of the Indian Contract Act, 1872, the agency is entitled to compensation for breach of contract, while the brand is liable under GST Act Section 31 for failing to pay against valid tax invoices.",
    keySteps: [
      "Produce the written Scope of Work (SOW) delineating independent barter versus cash milestones.",
      "Document that barter hampers were accepted as promotional collateral, not consideration in lieu of agency fees.",
      "Issue formal demand quantifying cash arrears plus statutory GST compliance default warnings.",
      "Escalate to pre-institution mediation under Commercial Courts Act 2015 s.12A."
    ],
    recoveryTimeline: "7 to 21 Days via Formal Legal Notice",
    recommendedCTA: {
      label: "Start Notice for Unpaid Cash Balance",
      href: "/user/new-recovery",
    },
  },
  {
    id: "agency-roster-bulk",
    tabLabel: "Multi-Brand Roster Default",
    title: "Media Agency / Aggregator Defaulting Across 10–50 Brand Campaigns",
    badge: "IBC 2016 s.8 / s.9 + Bulk Institutional Escalation",
    badgeColor: "bg-emerald-950/60 text-emerald-400 border border-emerald-800/60",
    description:
      "A media planning agency acts as intermediary, booking campaigns for multiple FMCG/D2C clients. They collected funds from end-brands but withheld ₹85,00,000 across 30 separate influencer campaigns, citing cash-flow freezes.",
    statutoryRemedy:
      "Intermediary agencies are independently liable on signed Release Orders. When institutional debt exceeds ₹1 Crore across consolidated contracts, Section 8 Demand Notice under IBC 2016 can be invoked; otherwise, combined MSMED / Commercial Suits enforce direct joint-and-several liability against the media house and the principal brand.",
    keySteps: [
      "Collate multi-campaign invoice ledger, RO numbers, and WhatsApp/Email release approvals.",
      "Issue simultaneous legal demands to both the intermediary media agency and the beneficiary corporate brands.",
      "Notify brand legal teams that secondary liability attaches for unauthorized ongoing usage of creator likeness.",
      "Consolidate multiple claims into institutional dispute resolution track to minimize per-case legal spend."
    ],
    recoveryTimeline: "14 to 45 Days through Multi-Party Demand Enforcement",
    recommendedCTA: {
      label: "Consult Institutional Media Debt Panel",
      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
    },
  },
];

export default function InfluencerScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {SCENARIOS.map((sc) => {
          const isActive = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveTab(sc.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${activeScenario.badgeColor}`}>
            {activeScenario.badge}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Expected Resolution: <strong className="text-slate-800">{activeScenario.recoveryTimeline}</strong>
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{activeScenario.title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{activeScenario.description}</p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
            Statutory Legal Basis & Strategic Remedy
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {activeScenario.statutoryRemedy}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Execution SOP For Agency CFO / Legal Ops
          </h4>
          <ul className="space-y-2.5">
            {activeScenario.keySteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-xs font-bold flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Have similar unpaid campaigns sitting on your aging bucket?
          </p>
          <Link
            href={activeScenario.recommendedCTA.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-sm transition"
          >
            {activeScenario.recommendedCTA.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
