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
    id: "discount-clawback-cancellation",
    tabLabel: "1. Mid-Term Repudiation",
    title: "Enterprise Signs 12-Month SaaS Order Form for 30% Discount, Cancels in Month 5",
    badge: "Contract Act s.73/74 Acceleration & Clawback",
    buyerProfile:
      "Mid-to-large enterprise, fintech unicorn, or corporate buyer executing a 'Non-Cancellable' 12-to-36 month SaaS Order Form with discounted quarterly invoicing.",
    pretext:
      "Client requests a 30% volume discount in exchange for committing to a full 1-year committed Annual Contract Value (ACV) of ₹48 Lakh (billed ₹12 Lakh quarterly). At Month 5, following an internal management shakeup or hiring of a new CTO/CIO, the enterprise abruptly emails stating: 'We are discontinuing use of your platform due to internal budget reallocation; please treat this email as termination and cancel Q3 and Q4 invoices.'",
    legalReality:
      "Under Section 73 and Section 74 of the Indian Contract Act, 1872, an explicit non-cancellable annual term represents an indivisible commercial commitment. The vendor priced the software based on an entire year's committed revenue and allocated reserved cloud infrastructure, dedicated customer success personnel, and licensing tiers. The customer's unilateral repudiation constitutes an actionable breach of contract. Under well-drafted acceleration clauses, the vendor has the absolute legal right to accelerate 100% of the remaining unbilled ACV and claw back the upfront 30% enterprise discount.",
    statutoryHook:
      "Indian Contract Act 1872 (ss. 73 & 74) + Commercial Courts Act 2015 s.2(1)(c)(xviii) + Order XXXVII CPC Summary Suit",
    actionProtocol: [
      "Issue a formal legal communication rejecting the unilateral termination as void ab initio and referencing the Non-Cancellable Order Form and Master Subscription Agreement (MSA).",
      "Trigger the contract's Debt Acceleration Clause, issuing an immediate Tax Invoice for the entire remaining unbilled ACV balance (Q3 + Q4) plus full discount clawback.",
      "Preserve comprehensive electronic telemetry under BSA 2023 Section 63 demonstrating uninterrupted platform availability, provisioned tenant seats, and allocated server resources.",
      "Serve a fact-verified 15-Day Statutory Demand Notice initiating pre-institution commercial mediation under Section 12A of the Commercial Courts Act.",
    ],
  },
  {
    id: "sla-uptime-manufactured-defect",
    tabLabel: "2. Spurious SLA / Uptime Pretext",
    title: "Client Manufactures 99.5% vs 99.9% Uptime Defect in Month 7 to Dodge Pending Quarterly Bills",
    badge: "Defeating Mobilox Moonshine SLA Disputes",
    buyerProfile:
      "Corporate SaaS licensee experiencing revenue compression or project abandonment seeking an exit pretext without paying contractually agreed termination fees.",
    pretext:
      "Seven months into a 24-month SaaS contract, the enterprise falls 60 days overdue on its Q3 invoice. When RevOps issues overdue payment reminders, the debtor's legal department replies citing a 45-minute scheduled maintenance downtime from two months prior, alleging a 'material breach of the 99.9% Service Level Agreement (SLA)' and purporting to terminate 'for cause' with zero exit liability.",
    legalReality:
      "Under Indian contract law and the Supreme Court's landmark doctrine in Mobilox Innovations v. Kirusa Software, retrospective, post-facto disputes fabricated after an invoice has matured constitute manufactured 'moonshine' defenses. Standard SaaS SLAs expressly provide that the sole and exclusive contractual remedy for any SLA shortfall is a proportional Service Credit against subsequent usage—not contract termination or total withholding of baseline platform subscription fees. Because the client failed to raise contemporaneous incident tickets during the measurement window, their defense collapses.",
    statutoryHook:
      "Supreme Court Mobilox Doctrine + Specific Relief Act 1963 s.10 + MSMED Act 2006 s.16 3x RBI Compound Interest",
    actionProtocol: [
      "Collate automated third-party server uptime logs (Datadog, AWS CloudWatch, Pingdom) certified by the Engineering VP under BSA 2023 Section 63.",
      "Issue a point-by-point rebuttal demonstrating that scheduled maintenance windows are contractually excluded from uptime calculations.",
      "Enforce the contractual 'Sole Remedy' SLA clause: service credits must be applied against future invoices and do not entitle the licensee to withhold mature subscription fees.",
      "Escalate the mature undisputed invoice amount to the State MSEFC (for Udyam SaaS creditors) or file a Commercial Summary Suit under Order XXXVII CPC.",
    ],
  },
  {
    id: "minimum-seat-commitment-shortfall",
    tabLabel: "3. Minimum Seat Floor Shortfall",
    title: "Enterprise Contracts for 500 Enterprise Seats, Slashes Usage to 100 & Refuses Minimum Billing",
    badge: "Enforcing Take-or-Pay Software Commitments",
    buyerProfile:
      "High-growth IT firm, BPO, or enterprise undergoing downsizing that negotiated enterprise volume tiers with minimum committed seat floors.",
    pretext:
      "The client executed a SaaS Order Form committing to a minimum billing floor of 500 user seats at ₹1,500/seat/month (₹7,50,000 monthly minimum). Following a corporate restructuring in Month 4, the client deletes 400 user accounts and remits payment for only 100 active seats (₹1,50,000), refusing to honor the remaining ₹6,00,000 monthly commitment.",
    legalReality:
      "Enterprise software licensing structures frequently utilize 'minimum commitment' or 'take-or-pay' models. The low per-seat pricing was expressly granted by the SaaS vendor in consideration of the 500-seat minimum volume guarantee. Under Section 73 of the Indian Contract Act, the vendor's damages are the exact shortfall between the guaranteed commitment floor and the actual usage remitted. Unilateral account deactivations by the customer do not relieve them of their binding minimum financial obligation.",
    statutoryHook:
      "Indian Contract Act 1872 s.73 (Expectation Damages) + Commercial Courts Act 2015 s.2(1)(c)(xviii) + IBC 2016 s.8 Form 3 Notice",
    actionProtocol: [
      "Audit tenant administration logs showing the initial provisioning of 500 seats and customer-initiated seat deactivations.",
      "Issue monthly Reconciliation Invoices billing the minimum commitment shortfall as contractually mandated liquidated receivables.",
      "Serve a fact-verified demand notice highlighting that enterprise tier volume pricing was strictly contingent upon the minimum volume guarantee.",
      "If aggregate unpaid shortfall exceeds ₹1.00 Crore across the contract term, issue an IBC Section 8 Demand Notice (Form 3/4) against the corporate debtor.",
    ],
  },
  {
    id: "auto-renewal-window-repudiation",
    tabLabel: "4. Auto-Renewal Repudiation",
    title: "Client Ignores 30-Day Opt-Out Window, Uses Platform for 60 Days, Then Claims 'Never Intended to Renew'",
    badge: "Contractual Auto-Renewal & Estoppel by Conduct",
    buyerProfile:
      "Enterprise customer on a standard annual auto-renewing SaaS subscription agreement where written notice of non-renewal was required 30 to 60 days prior to term expiry.",
    pretext:
      "The initial 1-year SaaS contract term ended on March 31. The MSA clearly specified: 'The subscription shall automatically renew for successive 12-month periods unless either party provides written notice of non-renewal at least 30 days prior to the expiration of the current term.' The client gave no notice, continued daily API calls and employee logins through April and May, and then refused the Year-2 renewal invoice in June, claiming 'our procurement team never approved the renewal.'",
    legalReality:
      "Under Indian contract law and the doctrine of estoppel by conduct, automatic renewal provisions in B2B commercial agreements between sophisticated corporate entities are fully binding. Furthermore, the client's continuous, uninhibited consumption of platform services, API calls, and cloud compute throughout the renewed term constitutes unequivocal implied acceptance and ratification under Section 8 of the Indian Contract Act, 1872. The client cannot enjoy commercial platform benefits while retroactively disowning the renewed subscription commitment.",
    statutoryHook:
      "Indian Contract Act 1872 (ss. 8 & 9 - Implied Contracts) + Doctrine of Estoppel + BSA 2023 s.63 API & Login Telemetry",
    actionProtocol: [
      "Extract immutable tenant activity logs (SSO logins, database queries, webhook triggers, API rate-limit utilization) for the post-renewal period.",
      "Issue a fact-verified notice documenting both the contractual failure to serve timely non-renewal notice and the actual post-renewal consumption.",
      "Offer a structured settlement: either continuation of the renewed annual term with quarterly installments, or immediate payment of a negotiated early termination buy-out fee.",
      "Institute legal proceedings in the designated Commercial Court under the exclusive jurisdiction clause of the SaaS agreement.",
    ],
  },
];

export default function SaasSubscriptionScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 shadow-xs">
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626]">
            {currentScenario.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Enterprise Commercial Pattern
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mb-4 leading-snug">
          {currentScenario.title}
        </h3>

        {/* Grid of Profile and Pretext */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Debtor &amp; Enterprise Profile
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.buyerProfile}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
              The Commercial Non-Payment Pretext
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.pretext}
            </p>
          </div>
        </div>

        {/* Legal Reality */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 mb-5">
          <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
            The Creditor-Side Legal &amp; Statutory Reality
          </span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            {currentScenario.legalReality}
          </p>
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Statutory Hook:
            </span>
            <span className="text-xs font-semibold text-slate-900">
              {currentScenario.statutoryHook}
            </span>
          </div>
        </div>

        {/* Action Protocol Checklist */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl border border-slate-800">
          <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
            Immediate Tactical Action SOP for SaaS RevOps &amp; Legal:
          </span>
          <ul className="space-y-2.5">
            {currentScenario.actionProtocol.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
