"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  ticketRange: string;
  statute: string;
  trigger: string;
  licenseeExcuse: string;
  licensorCounterMove: string[];
  timeline: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "mgr-shortfall",
    tabLabel: "1. Unpaid MGR Shortfall",
    title: "Apparel, Toy, or Electronics Licensee Misses Targets & Refuses Minimum Guaranteed Royalty",
    ticketRange: "₹12 Lakh – ₹2.50 Crore",
    statute: "Indian Contract Act s.73 & s.74 + Commercial Courts Act s.2(1)(c)(xvii)",
    trigger:
      "At the end of Year 1 or Q4, the licensee achieves only 42% of projected wholesale net sales. Instead of paying the contracted Minimum Guaranteed Royalty (MGR) shortfall, the licensee demands a post-facto 'pandemic/slowdown waiver' or claims royalties are only payable on actual units sold.",
    licenseeExcuse:
      "Argues that MGR is an unenforceable 'penalty' under Section 74 of the Contract Act or pleads commercial hardship / retail slowdown to convert guaranteed debt into a pure percentage-of-sales arrangement.",
    licensorCounterMove: [
      "Rebut Section 74 immediately: Minimum Guaranteed Royalty (MGR) is primary consideration for exclusive category/character rights—not a penalty—and is payable unconditionally regardless of actual sell-through.",
      "Serve a 15-Day Statutory MGR Debt & Cure Notice via Email, WhatsApp, and Speed Post RPAD, freezing any upcoming seasonal artwork approvals or hologram hang-tag releases.",
      "Present any post-dated MGR security cheques or e-NACH mandates; initiate NI Act s.138 or PSS Act s.25 prosecution upon dishonour.",
      "File a Commercial Summary Suit (CPC Order XXXVII) or Institutional ODR Arbitration for liquidated MGR arrears plus contracted 18% p.a. interest.",
    ],
    timeline: "15 Days Cure Notice → Summary Suit / Fast-Track Award",
  },
  {
    id: "sell-off-dumping",
    tabLabel: "2. Post-Expiry Dumping",
    title: "Terminated Licensee Dumps Branded Stock Past the 60-Day Sell-Off Window",
    ticketRange: "₹20 Lakh – ₹3.00 Crore+",
    statute: "Trade Marks Act 1999 s.29(1)–(4) & s.135 + Commercial Courts Act s.12A Exception",
    trigger:
      "Upon license expiry or termination for non-payment, the contract grants a strict 60-day non-exclusive sell-off window for pre-approved, royalty-paid inventory. Instead, the ex-licensee keeps liquidating branded apparel, luggage, or gadgets on B2B wholesale markets and e-commerce portals months later at 70% off.",
    licenseeExcuse:
      "Claims 'exhaustion of rights' (Trade Marks Act s.30) because the goods were originally manufactured during the license term, and demands that the licensor buy back unsold stock if it wants sales stopped.",
    licensorCounterMove: [
      "Invoke Trade Marks Act s.29 & s.30(3): Once the contracted sell-off period expires—or if royalties on those units were never paid—further sale is NOT exhausted; it is statutory trademark infringement and counterfeiting.",
      "Capture timestamped test-purchase invoices, marketplace ASIN/URL screenshots, and warehouse dispatch logs certified under BSA 2023 s.63.",
      "File an urgent Commercial IP Suit in Mumbai, Delhi, or Bengaluru High Court / Commercial Court (exempt from s.12A mediation under Patil Automation urgency) seeking an ex-parte Anton Piller / Local Commissioner seizure order.",
      "Issue platform takedown notices to marketplaces backed by the court injunction and claim punitive damages plus account of profits under s.135.",
    ],
    timeline: "48 hrs Cease-and-Desist → 3–7 Days Urgent s.135 Injunction",
  },
  {
    id: "audit-evasion",
    tabLabel: "3. Royalty Audit Refusal",
    title: "Licensee Blocks Quarterly Royalty Audit or Masks Branded SKUs Under Plain Invoices",
    ticketRange: "₹8 Lakh – ₹85 Lakh",
    statute: "Commercial Courts Act s.2(1)(c)(xvii) + CPC Order XI Discovery + Contract Act s.73",
    trigger:
      "Quarterly royalty statements show flat sales while retail market checks reveal heavy distribution of your character, sports, or celebrity merchandise. When your licensing agency invokes the contractual 14-day audit clause, the licensee stalls GST GSTR-1/E-Way Bill disclosure.",
    licenseeExcuse:
      "Claims 'vendor confidentiality' over distributor customer lists or alleges that audit requests are 'fishing expeditions' beyond the quarterly summary sheet.",
    licensorCounterMove: [
      "Issue a Formal Audit-Default & Event-of-Default Notice invoking the contractual right to inspect SKU-level ERP logs, factory job-work challans, and hologram serial consumption.",
      "Cross-verify licensed hologram/hang-tag dispatches against reported units sold—unexplained hang-tag variance creates an immediate presumption of unreported sales.",
      "Seek court-ordered discovery and production of GSTR-1 / E-Way Bill ledgers under CPC Order XI (as amended by the Commercial Courts Act) alongside audit-cost reimbursement.",
      "Trigger automatic MGR acceleration if the audit reveals >5% royalty under-reporting.",
    ],
    timeline: "14 Days Audit Demand → Court Discovery / Accelerated MGR",
  },
  {
    id: "sublicense-breach",
    tabLabel: "4. Territory & Sub-License Breach",
    title: "Unauthorized Sub-Licensing, Export Leakage, or Prohibited Discount Channel Sales",
    ticketRange: "₹15 Lakh – ₹1.80 Crore",
    statute: "Trade Marks Act s.29 & s.48–50 + Specific Relief Act s.38 & s.39",
    trigger:
      "A domestic footwear or home-textile licensee licensed strictly for India Tier-1 department stores quietly sub-licenses manufacturing to an unapproved factory or exports branded stock to Middle East / grey-market discounters without written consent.",
    licenseeExcuse:
      "Claims the third-party factory is merely a 'job-worker' and insists territorial restrictions do not bind downstream wholesale buyers.",
    licensorCounterMove: [
      "Serve an Immediate Termination & Trademark Infringement Notice citing breach of Section 48–50 (unregistered/unauthorized permitted user) and quality-control covenants.",
      "File for a permanent and ad-interim mandatory injunction under Specific Relief Act s.38/39 and Trade Marks Act s.135 to recall diverted consignments and seize dies/moulds bearing your brand mark.",
      "Demand liquidated damages for brand-equity dilution plus full acceleration of remaining multi-year MGR installments.",
    ],
    timeline: "Immediate Termination → 7–14 Days Ad-Interim Restraint",
  },
];

export default function BrandLicensingScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-5">
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              {current.statute}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white">
              Exposure: {current.ticketRange}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              {current.timeline}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.trigger}</p>
          </div>
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              Common Licensee Defense / Delay Tactic
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.licenseeExcuse}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-3">
            Licensor Statutory Counter-Playbook
          </p>
          <ul className="space-y-2.5">
            {current.licensorCounterMove.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
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
