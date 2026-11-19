"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  rogueTactic: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "lookalike-signboard-rebrand",
    tabLabel: "Lookalike Signboard",
    title: "Ex-Franchisee Paints 1–2 Letters Over Your Glow-Sign Board ('Chai Sutta' → 'Chai Shutta')",
    rogueTactic:
      "After termination for 3–4 months of unpaid 8% royalties, the Lucknow or Jaipur franchisee refuses to pull down the ₹2.5 lakh exterior ACP glow-sign board. Instead, they paste vinyl tape or repaint two letters ('Chai Sutta' into 'Chai Shutta' or 'Brew Box' into 'Brew Boxx') using the exact same red-and-black typography, wall murals, menu boards, and staff aprons.",
    statutoryCounter:
      "Under Section 29(1)–(5) of the Trade Marks Act, 1999, unauthorized use of an identical or deceptively similar mark after license termination constitutes per se trademark infringement—no proof of actual consumer confusion is required when the mark and services are identical. Moreover, in ex-franchisee holdover cases, Indian High Courts apply a strict standard of 'triple identity' (same location, same trade dress, same menu/services) and grant ex-parte ad-interim injunctions under Order XXXIX Rules 1–2 CPC alongside Local Commissioner raids under Order XXVI Rule 9 CPC.",
    actionSteps: [
      {
        step: "Capture Geo-Tagged Video & Test-Order Panchnama",
        detail:
          "Send a field auditor to record timestamped video of the altered signboard, interior trade dress, and a UPI/cash bill showing the old brand name or lookalike variant, backed by a BSA 2023 s.63 certificate.",
      },
      {
        step: "Invoke Commercial Courts Act s.12A Urgent Interim Relief",
        detail:
          "Under Yamini Manohar v. T.K.D. Keerthi (2023 SC), trademark infringement suits seeking urgent ex-parte injunctions and Local Commissioner seizures bypass mandatory pre-institution mediation.",
      },
      {
        step: "Execute Order XXVI Rule 9 Local Commissioner Seizure",
        detail:
          "Accompany the Court-appointed Local Commissioner (with local police assistance if ordered) to dismantle the infringing ACP signboard, seize branded packaging/cups, and inventory POS terminals.",
      },
    ],
    legalProvision: "Trade Marks Act ss.29 & 135 | CPC Order XXXIX R.1–2 & Order XXVI R.9 | Commercial Courts Act s.12A",
  },
  {
    id: "swiggy-zomato-gbp-hijack",
    tabLabel: "Swiggy / Zomato / Maps",
    title: "Terminated Outlet Keeps Selling Unapproved Menu on Swiggy, Zomato & Google Business Profile",
    rogueTactic:
      "Even after you terminate the Franchise Agreement, the rogue outlet continues receiving 40–80 daily delivery orders on Swiggy and Zomato under your verified brand listing—routing payouts into the franchisee's local bank account while serving cheap local ingredients that trigger 1-star food-poisoning reviews across your entire national brand.",
    statutoryCounter:
      "Under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 (Rule 3(1)(b)(iv)) and Trade Marks Act s.29(6)(d) (use of a registered mark in advertising and electronic commerce), aggregator platforms and search directories must act on verified Trademark Infringement & Brand Authorization Revocation notices. Simultaneously, a Section 9 Arbitration or Commercial Suit injunction restraining third-party e-commerce listing creates binding contempt exposure if the outlet re-onboards under a dummy FSSAI license.",
    actionSteps: [
      {
        step: "File Aggregator IP & Brand Authorization Takedown",
        detail:
          "Submit your Trade Mark Registration Certificate, signed Termination Notice, RPAD tracking proof, and specific Swiggy/Zomato Restaurant IDs to each platform's Legal & IP Grievance portal for immediate listing suspension.",
      },
      {
        step: "Reclaim or Suspend Google Business Profile (GBP)",
        detail:
          "Use your Primary Owner account or submit a Google Business Trademark Complaint with TM Certificate and termination letter to strip unauthorized store-manager access and mark the rogue pin permanently closed.",
      },
      {
        step: "Serve FSSAI & Police Intimation for Brand Impersonation",
        detail:
          "Put the rogue operator on notice under FSSAI Food Safety regulations and BNS 2023 s.318 (cheating by personation) if they print your FSSAI/brand packaging for unapproved kitchen supplies.",
      },
    ],
    legalProvision: "IT Intermediary Rules 2021 R.3 | Trade Marks Act s.29(6)(d) | BNS 2023 s.318",
  },
  {
    id: "same-shop-non-compete",
    tabLabel: "Same-Shop Non-Compete",
    title: "Enforcing Post-Termination Non-Compete & De-Identification in the Same Rented Premises",
    rogueTactic:
      "The franchisee's counsel replies to your termination notice claiming that any 2-year post-termination non-compete clause barring them from running a competing cafe, salon, or preschool in the same shop is 'void in restraint of trade' under Section 27 of the Indian Contract Act, 1872.",
    statutoryCounter:
      "Indian courts draw a sharp distinction between restricting a person's general livelihood (which s.27 restricts post-term) versus protecting proprietary trade secrets, recipes, SOPs, customer databases, and distinctive trade dress. Under Gujarat Bottling Co. v. Coca Cola (1995) and subsequent High Court rulings, negative covenants during the subsistence of the contract are strictly enforceable, and post-termination courts routinely restrain ex-franchisees from using the franchisor's color palette, menu architecture, proprietary premixes, and customer CRM lists—and enforce liquidated daily holdover penalties (Contract Act s.74) for delayed de-identification.",
    actionSteps: [
      {
        step: "Separate IP/Trade-Dress Injunction from Raw Non-Compete",
        detail:
          "Frame your Section 9 / Commercial Suit prayer around proprietary trade dress, confidential recipes/SOPs, POS customer data, and de-identification—never as a blanket ban on all livelihood.",
      },
      {
        step: "Invoke Landlord Tripartite / Step-In Rights (If Applicable)",
        detail:
          "If your Master Franchise or Tripartite Lease Addendum grants step-in or signage-removal consent, serve a simultaneous intimation to the property owner to avoid vicarious trademark liability.",
      },
      {
        step: "Trigger Per-Day Liquidated De-Identification Damages",
        detail:
          "Quantify the contractual ₹5,000–₹15,000/day holdover de-identification fee from Day 1 post-termination cure expiry alongside unpaid royalty arrears.",
      },
    ],
    legalProvision: "Indian Contract Act ss.27 & 74 | Trade Marks Act s.135 | Arbitration Act s.9",
  },
  {
    id: "royalty-arrears-pdc-recovery",
    tabLabel: "Royalty & PDC Recovery",
    title: "Recovering 4–8 Months of Unpaid 8% Royalty, Commissary Bills & Trademark Damages",
    rogueTactic:
      "Before turning rogue, the franchisee stopped honoring monthly 8% gross-sales royalty invoices, bounced ₹6.5 lakh in commissary raw-material cheques, and demanded adjustment of their ₹3 lakh refundable security deposit against unpaid dues while continuing to trade.",
    statutoryCounter:
      "Franchise royalty arrears and commissary supply invoices are liquidated commercial debts under Commercial Courts Act s.2(1)(c)(ix) (franchise and distribution agreements). Security deposits are held against post-termination de-identification, equipment return, and damages—the franchisee has no unilateral right of set-off while in continuing breach. Dishonoured security or monthly PDCs trigger parallel criminal prosecution under NI Act s.138 (or PSS Act s.25 for e-NACH bounces) alongside a fast-track institutional arbitration claim for principal arrears, 18% contractual interest, and trademark damages/rendition of accounts.",
    actionSteps: [
      {
        step: "Present Security / Monthly PDCs & Issue 15-Day s.138 Notice",
        detail:
          "Where liquidated royalty and commissary arrears exceed the security deposit, present backed PDCs upon written ledger intimation and serve a mandatory 15-day demand notice under NI Act s.138(b) within 30 days of dishonour.",
      },
      {
        step: "Appropriate Security Deposit Strictly Under Contract Terms",
        detail:
          "Issue a formal Ledger Reconciliation Statement adjusting the security deposit first against unreturned signage/equipment and liquidated damages, leaving net royalty arrears crystal clear.",
      },
      {
        step: "Consolidate Claims in Institutional Arbitration / Commercial Suit",
        detail:
          "Combine royalty arrears, commissary dues, and rendition of accounts for post-termination rogue sales into one unified claim so the franchisee cannot split defenses.",
      },
    ],
    legalProvision: "Commercial Courts Act s.2(1)(c)(ix) | NI Act s.138 | PSS Act s.25 | Arbitration Act s.21",
  },
];

export default function RogueFranchiseeScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Strip */}
      <div
        role="tablist"
        aria-label="Rogue Franchisee Holdover Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {activeScenario.title}
          </h3>
          <span className="inline-block shrink-0 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white">
            {activeScenario.legalProvision}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Rogue Holdover Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeScenario.rogueTactic}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Franchisor Statutory Counter
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeScenario.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
            3-Step Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.step}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
