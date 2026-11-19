"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  ticketRange: string;
  statute: string;
  trigger: string;
  franchiseeTactic: string;
  brandCounterMove: string[];
  timeline: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "store-lockout",
    tabLabel: "1. Store Padlock & Trapped Stock",
    title: "Franchisee-Landlord Padlocks FOCO Store & Detains ₹35L–₹1.5Cr Brand Inventory",
    ticketRange: "₹35 Lakh – ₹1.50 Crore",
    statute: "BNS 2023 s.316(2) + Arbitration Act s.9 + Specific Relief Act s.7/s.8",
    trigger:
      "After two quarters of lower-than-projected store footfall or delayed Minimum Guarantee (MG) reconciliation, the property-owning franchisee locks the shutter overnight, blocks brand store staff, and demands an illegal 'ransom' payout to release seasonal apparel, jewelry, eyewear, or EV spares.",
    franchiseeTactic:
      "Claims a fictional 'landlord lien' or 'unpaid rent set-off' over company-owned consignment inventory inside the premises, betting that the brand will pay off disputed demands rather than lose a peak festive season.",
    brandCounterMove: [
      "Do NOT break the padlock forcibly—unilateral entry risks a retaliatory BNS s.329 criminal trespass FIR.",
      "Serve a 48-Hour Statutory Inventory Release & Criminal Breach of Trust Notice citing BNS s.316(2) and consignment title clauses.",
      "File an urgent ex-parte Section 9 Arbitration Petition (exempt from s.12A mediation delay) seeking a Court Commissioner / Receiver with local police aid to break seals, prepare a joint Panchnama, and retrieve all barcoded stock.",
      "Simultaneously file a jurisdictional police complaint for dishonest misappropriation of entrusted movable property under BNS s.316.",
    ],
    timeline: "48 hrs Notice → 5–10 Days Urgent s.9 Receiver Order",
  },
  {
    id: "capex-escalation",
    tabLabel: "2. Unpaid CapEx Fit-Out Balance",
    title: "FICO/FOCO Investor Defaults on Store Fit-Out Escalation & Interior CapEx Tranches",
    ticketRange: "₹8 Lakh – ₹45 Lakh",
    statute: "Indian Contract Act s.73 & s.74 + Commercial Courts Act s.2(1)(c)(ix)",
    trigger:
      "Under turnkey FOCO agreements, the brand executes civil interiors, HVAC, lighting, and brand-approved fixtures at cost-plus or fixed-cap rates, while the franchisee investor funds CapEx in 3–4 milestones. Once the store opens, the investor withholds the final 30% fit-out tranche or steel/MEP cost escalation.",
    franchiseeTactic:
      "Alleges minor snag-list defects or delays in mall NOCs as a pretext to freeze the ₹10L–₹35L CapEx balance while continuing to collect monthly store revenue shares.",
    brandCounterMove: [
      "Compile signed Handover Certificates, vendor GST tax invoices, and joint BOQ measurement sheets certified under BSA 2023 s.63.",
      "Issue a Cure-or-Set-Off Notice invoking contractual lien over the investor's Minimum Monthly Guarantee (MMG) payout or revenue share until CapEx arrears clear.",
      "Present any post-dated CapEx security cheques after a 7-day written intimation; prosecute dishonour under NI Act s.138 & s.143A (20% interim compensation).",
      "Escalate unresolved balances above ₹3 Lakh to Commercial Court or Institutional ODR Arbitration under s.2(1)(c)(ix).",
    ],
    timeline: "15-Day Cure Notice → Immediate Revenue-Share Set-Off / s.138",
  },
  {
    id: "working-capital",
    tabLabel: "3. Working Capital Replenishment Default",
    title: "FICO Investor Stops Replenishing Working Capital & Bounces Commissary/Stock NACH",
    ticketRange: "₹5 Lakh – ₹60 Lakh",
    statute: "PSS Act 2007 s.25 + NI Act s.138 + Sale of Goods Act s.25",
    trigger:
      "In FICO (Franchise-Invested, Company-Operated) and hybrid retail models, the investor must maintain a revolving working-capital float or honour weekly NACH debits for automated inventory replenishment. Repeated e-NACH bounces starve the outlet of fast-moving SKUs, depressing brand reputation.",
    franchiseeTactic:
      "Diverts daily store cash/UPI collections to personal accounts or stops funding the escrow/working-capital wallet while blaming the brand's central merchandising team for slow-moving stock.",
    brandCounterMove: [
      "Serve mandatory Section 25(1) PSS Act / Section 138 NI Act statutory demand notices within 30 days of each NPCI e-NACH or cheque return memo.",
      "Freeze further credit dispatches and enforce Sale of Goods Act s.25 Retention of Title on unpaid transit stock.",
      "Audit POS vs bank-deposit variances to establish diversion of trust funds and issue a 15-day Franchise Termination-cum-Deficit Recovery Notice.",
    ],
    timeline: "Within 30 Days of Bounce → 15-Day Cure Expiry → Magistrate Filing",
  },
  {
    id: "mmg-deficit",
    tabLabel: "4. Operational Deficit & MG Reversal",
    title: "Investor Demands Uncontracted MG Refunds or Blocks Store Closure Exit Settlement",
    ticketRange: "₹12 Lakh – ₹80 Lakh",
    statute: "Indian Contract Act s.55 & s.73 + Arbitration Act s.21 & s.29B",
    trigger:
      "When a FOCO store underperforms due to the investor's failure to maintain local landlord utilities (power/DG backup, mall CAM, signage permissions), the investor withholds CAM/electricity payments, triggers mall eviction, and demands full CapEx refund plus unearned Minimum Guarantee.",
    franchiseeTactic:
      "Files frivolous consumer or civil complaints portraying a commercial B2B franchise investment as a 'consumer service' or 'assured-return scheme' to pressure the brand CFO into a distress settlement.",
    brandCounterMove: [
      "Pre-empt Consumer Commission jurisdiction by establishing pure commercial-purpose investment (Commercial Courts Act s.2(1)(c)(ix) + Supreme Court Shrikant Mantri principle).",
      "Invoke Section 21 Arbitration Notice with a quantified Operational Deficit & Mall Penalty Counter-Ledger.",
      "Enforce contractual lock-in damages and recover unamortized brand launch marketing and staff-deployment costs via fast-track Section 29B ODR Arbitration.",
    ],
    timeline: "15-Day Legal Notice → s.21 Invocation → 6-Month s.29B Award",
  },
];

export default function FicoFocoScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="FOCO and FICO franchise dispute scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-1 rounded-full mb-2">
              {current.statute}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
          <div className="shrink-0 bg-slate-900 text-white px-3.5 py-2 rounded-xl text-right">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
              Typical Exposure
            </span>
            <span className="text-sm font-black text-emerald-400">{current.ticketRange}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Commercial Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.trigger}</p>
          </div>
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Franchisee-Investor Bluff / Tactic
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.franchiseeTactic}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Brand / Franchisor Legal Counter-Playbook
            </p>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
              Target Window: {current.timeline}
            </span>
          </div>
          <ul className="space-y-2.5">
            {current.brandCounterMove.map((step, idx) => (
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
