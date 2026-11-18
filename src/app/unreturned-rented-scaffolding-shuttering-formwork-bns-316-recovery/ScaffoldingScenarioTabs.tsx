"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  immediateAction: string;
  statutoryRemedy: string;
  evidenceRequired: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "clandestine-shifting",
    tabLabel: "1. Secret Site Shifting",
    title: "Contractor Shifts Cuplock & Mivan Formwork to an Undisclosed Site",
    trigger:
      "Petty civil contractor stops paying monthly hire bills mid-slab, vacates the original project site overnight, and secretly transports your cuplock verticals, ledgers, and aluminium formwork panels to a third-party site without written NOC.",
    immediateAction:
      "Serve an immediate 7-Day BNS Section 316 Bailee Termination & Return Notice via Email, WhatsApp, and Speed Post RPAD—using LegalRecovery's policeStationEmail CC feature to copy the jurisdictional SHO where the original site and godown are located.",
    statutoryRemedy:
      "Dishonest removal or conversion of bailed shuttering material to an unauthorized location violates Indian Contract Act s.154 (unauthorized use of bailed goods) and constitutes Criminal Breach of Trust by a Bailee under BNS 2023 s.316(2)/(3), enabling police search/seizure and a civil running-hire + replacement suit.",
    evidenceRequired:
      "Signed Outward Delivery Challans with site address, Hire Agreement prohibition against sub-letting or site transfer, gate-exit CCTV/security register entries, and BSA 2023 s.63 certificate.",
  },
  {
    id: "scrap-sale-kabadi",
    tabLabel: "2. Scrap / Kabadi Sale",
    title: "Contractor Sells Rented MS Centering Plates or Pipes to Scrap Dealers",
    trigger:
      "Facing cash crunch, the contractor cuts or repaints your embossed MS centering plates, Acrow props, or ledger pipes and sells them to a local kabadi/scrap dealer for quick cash while blocking your phone calls.",
    immediateAction:
      "File a written BNS s.316 + s.317 police complaint immediately with challan quantities, embossed brand/colour-code photos, and GST purchase invoices proving ownership, and serve the BNS Notice with Police Station Email CC.",
    statutoryRemedy:
      "Selling bailed rental equipment is an aggravated Criminal Breach of Trust under BNS s.316(2) (up to 5 years imprisonment + fine), while the scrap dealer knowingly buying stamped shuttering is liable under BNS s.317 (dishonestly receiving stolen property). Simultaneously claim full New-for-Old Replacement Value.",
    evidenceRequired:
      "Original OEM purchase invoices, paint/stencil/embossing photos of props & Mivan panels, signed Challan-wise Reconciliation Sheet, and witness/driver statements.",
  },
  {
    id: "builder-gate-lockout",
    tabLabel: "3. Builder Gate Lockout",
    title: "Main Builder / Site Owner Locks Your Rented Shuttering Inside Project",
    trigger:
      "Your direct lessee (the labour/RCC subcontractor) defaults, and the main real-estate builder or EPC employer refuses to issue a Gate Pass for your shuttering, claiming a lien over site material for the subcontractor's unfinished RCC work.",
    immediateAction:
      "Issue a dual-addressee Legal Notice to BOTH the defaulting subcontractor and the main Builder/Project Head, putting the Builder on formal statutory notice that the scaffolding is third-party bailed property owned by you—not the subcontractor's asset.",
    statutoryRemedy:
      "Under Indian Contract Act s.148–161 and s.178A, a subcontractor cannot create a valid pledge or lien over rented goods against the true owner once the Builder has notice of title. File an urgent CPC Order XL Rule 1 Receiver application or Specific Relief Act s.7/8 recovery suit (or Arbitration s.9 if tri-partite) plus damages for wrongful detention.",
    evidenceRequired:
      "Hire Agreement & E-Way Bills showing your GSTIN as consignor, site security Gate-In stamps, email/WhatsApp notice to Builder's Project Manager, and running daily hire meter.",
  },
  {
    id: "short-return-damaged",
    tabLabel: "4. Short-Return & Damage",
    title: "Contractor Returns 65% Bent/Rusted Material & Refuses Missing Value",
    trigger:
      "After months of delay, the contractor sends back partial, concrete-encrusted, or bent props while 35% of high-value Mivan panels and cuplock jacks are missing—and refuses to pay either the missing replacement rate or the ongoing rent.",
    immediateAction:
      "Conduct a Joint Physical Inspection & Inward Challan Count at your yard (video-recorded), mark every missing/beyond-repair item against outward challans, and serve a Final Challan Reconciliation & Running Rent Notice.",
    statutoryRemedy:
      "Enforce the contractual 'Running Daily Hire Meter until 100% physical return OR full payment of Lost-Material Replacement Rate' under Indian Contract Act s.160–161 and s.73–74. Recover unpaid hire + replacement value via CPC Order XXXVII Summary Suit or MSEFC (if Udyam-registered).",
    evidenceRequired:
      "Outward vs. Inward Challan Reconciliation Table, yard unloading video & weight-bridge slips, contractual Lost/Damaged Replacement Rate Schedule, and MSME Udyam Certificate (if applicable).",
  },
];

export default function ScaffoldingScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Scaffolding and Formwork Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              Default / Theft Trigger
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.trigger}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-1">
              Immediate 48-Hour Action
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.immediateAction}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
              Statutory Remedy &amp; Forum
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryRemedy}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
              Challan &amp; BSA s.63 Proof
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.evidenceRequired}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
