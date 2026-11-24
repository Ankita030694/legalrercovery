"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  triggerFact: string;
  statutoryTrap: string;
  creditorMove: string[];
  outcomeMetric: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "gravure-handover-default",
    tabLabel: "1. 8-Colour Cylinders + Unpaid Laminates",
    badge: "General Lien vs s.170",
    title: "FMCG Brand Demands 8 Copper Gravure Cylinders While Owing ₹18 Lakh for Printed Pouches",
    triggerFact:
      "A snacks or spice brand shifts to a cheaper converter and emails your plant demanding immediate pickup of its 8-colour rotogravure cylinder set (originally billed at ₹1.44 Lakh as 'Cylinder Development Charges'), while 11 overdue GST invoices totalling ₹18.00 Lakh for printed BOPP/PET laminates remain unpaid past 75 days.",
    statutoryTrap:
      "Under Section 170 of the Indian Contract Act, 1872, a bailee's particular lien applies only to unpaid labour/skill expended on the cylinders themselves—NOT to separate unpaid laminate supply bills. If you hold buyer-owned cylinders solely on s.170 without an express contractual general-lien clause or title-retention terms, the brand may move a Civil Court for mandatory injunction.",
    creditorMove: [
      "Audit the original Cylinder Quotation, PO, and HSN 8442 Tax Invoice to establish whether the payment was a non-transferable 'Cylinder Development / Origination Contribution' (retaining base steel/copper title under Sale of Goods Act s.19) or an outright capital sale.",
      "Invoke the Express Contractual General-Lien Clause on your quotation/invoice terms (permissible alongside s.171 by express contract under SC Port of Bombay v. Sriyanesh Knitters) linking cylinder release strictly to 100% settlement of the running laminate ledger.",
      "Issue a simultaneous 15-day Composite Legal Notice asserting (a) MSMED Act ss.15–18 compound interest at 3x RBI Bank Rate, (b) Income Tax Section 43B(h) expense disallowance warning to the brand's CFO/Statutory Auditor, and (c) conditional cylinder release only against RTGS clearance.",
    ],
    outcomeMetric:
      "Because replacing an 8-colour cylinder set takes 14–21 days of re-engraving plus Pantone shade-matching downtime (costing the FMCG brand ₹10–25 Lakh/week in lost retail fill-rate), a tightly drafted contractual-lien + s.43B(h) notice forces immediate ledger settlement before handover.",
  },
  {
    id: "partial-development-fee",
    tabLabel: "2. Partial 'Development Charge' Ownership",
    badge: "Sale of Goods Act s.19",
    title: "Buyer Paid Subsidised 50% 'Cylinder Origination Fee' & Claims Absolute Ownership",
    triggerFact:
      "To win an annual flexible-packaging contract, your plant charged only ₹9,000 per cylinder as a 'One-Time Cylinder Development Contribution' (against actual engraving + copper base cost of ₹19,500 per cylinder), amortising the balance across promised 12-month laminate tonnage. After 2 trial lots, the buyer cancels orders and demands the cylinders free of cost.",
    statutoryTrap:
      "Procurement teams deliberately conflate 'paying a cylinder fee' with acquiring unconditional ownership of the steel shaft, dynamic balancing, copper layer, and chrome plating. Without an immediate formal rebuttal citing Sale of Goods Act s.19, silence gets misread as admission of buyer title.",
    creditorMove: [
      "Put on record that the invoice description ('Cylinder Origination / Setup Contribution' rather than 'Sale of Steel-Base Cylinder Asset') never transferred proprietary title under Section 19 of the Sale of Goods Act, 1930.",
      "Produce the original cylinder-engraver vendor invoice (showing actual capex paid by your factory) alongside the committed tonnage mail/WhatsApp thread certified under BSA 2023 s.63.",
      "Offer two transparent commercial exit tracks in the advocate notice: (i) pay the unamortised cylinder capex differential + overdue pouch bills for full title transfer, OR (ii) accept written de-chroming & brand-artwork erasure certificate while your plant retains its own steel base shafts.",
    ],
    outcomeMetric:
      "Eliminates the brand's claim of 'illegal detention of buyer property' in court and converts an abandoned trial account into full capex recovery.",
  },
  {
    id: "flexo-dies-fir-threat",
    tabLabel: "3. Flexo Plates, Cutting Dies & FIR Threat",
    badge: "Pre-Empting BNS s.316",
    title: "Mono-Carton or Label Brand Threatens Police FIR (BNS s.316) for Holding Dies & Polymer Plates",
    triggerFact:
      "A pharma or cosmetics buyer owes ₹9.5 Lakh across four mono-carton and self-adhesive label dispatches. When your factory refuses to hand over custom laser-cut birchwood punching dies, brass embossing blocks, and digital photopolymer flexo plates, the brand's legal team sends a threatening email alleging 'Criminal Breach of Trust under BNS s.316 (formerly IPC s.406)'.",
    statutoryTrap:
      "Photopolymer flexo plates and steel-rule cutting dies are machine-specific consumables calibrated to your press cylinder repeat, nip pressure, and Bobst/Heidelberg chase dimensions—often carrying zero utility on a competitor's press unless deliberately used to intimidate you via police pressure.",
    creditorMove: [
      "Dispatch an immediate Advocate Reply & Pre-Emptive Representation recording that possession is lawful commercial custody backed by documented unpaid GST invoices, stripping away any element of 'dishonest misappropriation' required for BNS s.316.",
      "Cite the Supreme Court's settled mandate in Indian Oil Corporation v. NEPC India Ltd. (2006) 6 SCC 736 barring criminalization of commercial payment and contractual lien disputes.",
      "File a parallel MSEFC Samadhaan reference (or Order XXXVII CPC summary recovery notice) and explicitly offer to deposit the dies/plates upon full payment or court-ordered bank guarantee—neutralizing any police or Magistrate coercion.",
    ],
    outcomeMetric:
      "Police stations routinely close commercial die/plate complaints as 'civil disputes' once a fact-verified ledger, PO lien clause, and BSA s.63 correspondence pack are placed on record.",
  },
  {
    id: "idle-cylinders-dechroming",
    tabLabel: "4. Idle Cylinders (2+ Years) & De-Chroming",
    badge: "s.44 Storage & Disposal",
    title: "300+ Idle Cylinders Occupying Factory Racks for Over 24 Months With Zero Repeat Orders",
    triggerFact:
      "A D2C brand changed SKU sizes or shut down its product line 26 months ago, leaving 48 heavy steel-core copper cylinders occupying your climate-controlled rack space and locking up ₹4.2 Lakh in scrap/re-base value—plus ₹3.8 Lakh in unpaid final pouch invoices.",
    statutoryTrap:
      "Scrapping or re-engraving a brand's cylinder WITHOUT a formal prior disposal notice risks a trademark/copyright or civil conversion suit; conversely, holding dead cylinders indefinitely drains factory floor space and insurance premiums without compensation.",
    creditorMove: [
      "Audit the cylinder aging register to isolate all sets dormant beyond 12–24 months (matching standard Indian flexible-packaging trade custom and PO dormancy clauses).",
      "Serve a 30-Day Statutory Storage-Rent & Final De-Chroming / Disposal Notice via Speed Post RPAD + Registered Email + WhatsApp invoking Section 44 of the Sale of Goods Act, 1930 (accruing rack/godown rent per cylinder per month from notice date).",
      "Clearly stipulate that upon failure to clear overdue pouch bills + storage rent and lift the cylinders within 30 days, your plant will chemically strip/de-chrome the copper engraving to permanently destroy all brand logos/FSSAI artwork (preserving zero IP infringement), video-record the erasure under BSA s.63, and adjust verified metal salvage against accrued dues.",
    ],
    outcomeMetric:
      "Creates an ironclad documentary shield against conversion claims while either waking up dormant buyers to settle or lawfully liberating high-value rack space and steel cores.",
  },
];

export default function CylinderLienScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Strip */}
      <div
        role="tablist"
        aria-label="Cylinder, plate and die dispute scenarios"
        className="flex flex-wrap gap-2 mb-6"
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
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border text-left ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {current.badge}
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Commercial Flashpoint
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.triggerFact}
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Statutory Trap to Avoid
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.statutoryTrap}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-3">
            Creditor-Side Legal Action Sequence
          </p>
          <ol className="space-y-2.5">
            {current.creditorMove.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
            Expected Commercial Leverage
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
            {current.outcomeMetric}
          </p>
        </div>
      </div>
    </div>
  );
}
