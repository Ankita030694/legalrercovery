"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  headline: string;
  builderExcuse: string;
  statutoryCounter: string;
  actionSteps: string[];
  forumChoice: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "morbi-tiles-barter",
    tabLabel: "Morbi Tiles & Barter Flat",
    badge: "CERSAI & RERA Trap",
    headline: "Builder Pressures Morbi Tile / Sanitaryware Plant to Accept an Unsold 'Barter Flat' for ₹80L Dues",
    builderExcuse:
      "\"Our project construction loan tranche is frozen till Occupancy Certificate. Adjust your ₹80 Lakh vitrified tile & CP-fitting ledger against Flat No. 904 at ₹1.10 Cr (pay ₹30L balance in cash), or wait 24 months.\"",
    statutoryCounter:
      "Under Section 26D of the SARFAESI Act and CERSAI records, 85%+ unsold developer inventory is already hypothecated under an omnibus project construction charge. Accepting a barter allotment without a written lender NOC leaves you with an unenforceable agreement subordinated to the bank's first charge — and triggers an immediate 18% GST output-liability mismatch.",
    actionSteps: [
      "Pull a ₹100 CERSAI Asset Search and check the state RERA Form-1/2/3 quarterly escrow filings before signing any Memorandum of Understanding (MoU).",
      "Refuse informal 'adjustment letters' and issue an MSMED Act Section 15–18 demand notice claiming 3x RBI bank rate compound interest.",
      "Invoke Income Tax Act Section 43B(h) disallowance warning if your Morbi ceramic/sanitaryware unit holds valid Udyam Micro/Small registration.",
    ],
    forumChoice: "MSME Samadhaan (MSEFC) + Order XXXVII CPC Summary Suit (or NI Act s.138 if PDCs bounced)",
  },
  {
    id: "toughened-glass-facade",
    tabLabel: "Toughened Glass & Facade",
    badge: "Custom-Cut Goods",
    headline: "Architectural Glass Processor Stuck with Custom-Tempered Facade Panels After Builder Cancels PO",
    builderExcuse:
      "\"Tower B elevation design changed; we won't lift the remaining 4,200 sq.ft of custom DGU toughened glass, and we're holding ₹42L on installed panels citing minor shade variation.\"",
    statutoryCounter:
      "Under Section 42 of the Sale of Goods Act, 1930, once toughened glass panels are glazed onto the facade or retained beyond a reasonable inspection window without written rejection, acceptance is legally complete. For custom-cut unlifted DGU panels fabricated to signed shop drawings, Section 73 of the Indian Contract Act entitles the processor to full contract price minus scrap salvage (near zero for tempered glass).",
    actionSteps: [
      "Compile signed shop-drawing approvals, tempering furnace batch logs, and site gate-inward stamps as BSA 2023 Section 63 electronic evidence.",
      "Rebut belated 'shade/thickness variation' excuses by citing ASTM C1048 / IS 2553 tolerances and lack of contemporaneous joint inspection.",
      "Serve an Advocate Evidentiary Notice demanding full payment plus storage/demurrage for unlifted custom-cut inventory.",
    ],
    forumChoice: "Commercial Court (Section 12A Pre-Institution Mediation) or Order XXXVII CPC Summary Suit",
  },
  {
    id: "elevator-handover-15pct",
    tabLabel: "Lifts & Final 15% Balance",
    badge: "Handover Ransom",
    headline: "Elevator / Lift OEM Stuck on Final 15% Commissioning & Handover Tranche Across 6 Towers",
    builderExcuse:
      "\"We haven't received final PWD/Lift Inspector clearance and flat buyers are complaining about minor cabin scratches, so we are freezing your final 15% (₹36 Lakh) indefinitely.\"",
    statutoryCounter:
      "Builders routinely use the final 10–15% commissioning milestone as permanent working-capital float even after using the lifts for interior fit-out haulage. Under Section 53 & 54 of the Indian Contract Act, when the builder delays permanent 3-phase power or shaft readiness, they cannot withhold milestone dues for their own reciprocal breach; and under Contract Act s.170 / retention clauses, unpaid OEMs can suspend non-emergency AMC/software keys strictly per contract.",
    actionSteps: [
      "Document builder-side delays (absence of permanent 3-phase power, shaft waterproofing leaks, unauthorized construction-material haulage in passenger cabs).",
      "Separate snag-list minor rectification value (e.g., ₹45,000) from the undisputed ₹35.55 Lakh balance to defeat any 'pre-existing dispute' defense.",
      "Issue a composite demand notice invoking Order XXXVII CPC on signed handover/testing certificates and NI Act s.138 on retention PDCs.",
    ],
    forumChoice: "Arbitration Section 21 (if OEM contract has clause) or Order XXXVII CPC + MSME MSEFC",
  },
  {
    id: "plywood-wires-project-pricing",
    tabLabel: "Plywood & Switchgear",
    badge: "Project-Rate Clawback",
    headline: "Plywood, Laminate & Electrical Switchgear Supplier Denied 'Project-Rate' Balance After 180-Day Default",
    builderExcuse:
      "\"You gave us special 32% institutional project discount on FR-grade plywood and FRLS cables; we'll pay whenever our Phase-2 bookings pick up.\"",
    statutoryCounter:
      "Institutional project pricing is a conditional commercial concession tied to strict 30/45-day payment discipline. Where the purchase order or tax invoice carries a conditional discount / rate-withdrawal clause, non-payment within the credit window entitles the supplier to withdraw the special project rebate and claim standard MRP/list-price differential plus 24% contractual / 3x RBI MSME interest.",
    actionSteps: [
      "Audit every E-Way Bill Part-A/B, lorry receipt (LR), and site storekeeper GRN to lock delivery across multiple builder project sites.",
      "If the builder is a corporate entity with ₹1 Cr+ aggregate overdue across towers, evaluate an IBC Section 8 Operational Creditor Form 3/4 notice.",
      "Enforce personal/director liability on dishonoured post-dated cheques under NI Act Sections 138, 141 & 143A (20% interim deposit).",
    ],
    forumChoice: "NI Act s.138 + Order XXXVII CPC / IBC s.8 (if ≥ ₹1 Cr corporate debtor)",
  },
];

export default function FinishingMaterialScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Finishing material recovery scenarios"
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-600">
            Recommended Track: <strong className="text-slate-900">{current.forumChoice}</strong>
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
          {current.headline}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              Builder&apos;s Standard Excuse
            </p>
            <p className="text-xs sm:text-sm text-amber-950 italic leading-relaxed">
              {current.builderExcuse}
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor&apos;s Statutory Counter
            </p>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Immediate Execution Steps
          </p>
          <ul className="space-y-2">
            {current.actionSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
