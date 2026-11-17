"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  legalBasis: string;
  steps: {
    step: string;
    detail: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "late-form-205",
    tabLabel: "Missed Form 205 / Delay",
    title: "Technical Claim Rejection Over Late Form 205 or Overdue Report of Default",
    trigger:
      "Exporters frequently miss the 30-day window from the due date to file Form 205 (Monthly Declaration of Overdue Payments) or the Report of Default (within 4 months of due date), prompting ECGC branch offices to reject the 80%–90% claim outright on technical grounds.",
    legalBasis:
      "Under ECGC Standard Policy / SCR terms, timely declaration of overdue bills and Report of Default are conditions precedent so ECGC can freeze credit limits on the buyer globally. However, where premium was duly paid and no prejudice was caused to ECGC's subrogation rights, exporters can file a structured Condonation / Appeal representation before the ECGC Regional Review Committee / Grievance Redressal Officer backed by continuous recovery correspondence and Advocate Legal Notice proof.",
    steps: [
      {
        step: "Audit All Form 203 & Form 205 Filings",
        detail:
          "Compile every monthly shipment declaration (Form 203), premium ledger, and bank-realization follow-up email to prove absence of suppression or moral hazard.",
      },
      {
        step: "Serve Immediate Audit-Ready Legal Notice",
        detail:
          "Even if Form 205 was delayed, immediately serve a formal Advocate Demand Notice on the foreign buyer to establish continuous, bonafide loss-mitigation efforts.",
      },
      {
        step: "File Condonation & Grievance Representation",
        detail:
          "Submit a reasoned condonation petition citing zero prejudice to ECGC subrogation, attaching courier PODs, BSA 2023 s.63 email logs, and AD Bank follow-ups.",
      },
    ],
    statutoryRule: "ECGC Policy Conditions (Form 203/205 & ROD) + IRDAI Protection of Policyholders' Interests",
  },
  {
    id: "sham-quality-dispute",
    tabLabel: "Fake Quality Dispute",
    title: "Foreign Buyer Fabricates Quality/Delay Dispute to Block ECGC Protracted Default",
    trigger:
      "Standard ECGC policies exclude 'commercial disputes' until resolved or adjudicated. Defaulting overseas buyers exploit this by sending a vague email alleging colour/spec defects 60 days after clearing customs, causing ECGC to suspend the claim.",
    legalBasis:
      "ECGC requires the exporter to prove that the buyer's refusal is a sham excuse for insolvency or protracted default rather than a genuine commercial breach. Under Sections 41 and 42 of the Sale of Goods Act, 1930 (and CISG Article 38/39 principles in cross-border sales), a buyer who clears goods through destination customs and retains them beyond a reasonable inspection window without contemporaneous surveyor notice is deemed to have accepted the goods.",
    steps: [
      {
        step: "Lock Pre-Shipment & Customs Inspection Proof",
        detail:
          "Assemble SGS/Intertek inspection certificates, Bill of Lading clean-on-board endorsement, and buyer's customs clearance confirmation.",
      },
      {
        step: "Rebut Sham Dispute via Advocate Legal Notice",
        detail:
          "Issue a point-by-point Advocate Notice invoking deemed acceptance, citing zero contemporaneous rejection, and demanding full USD/EUR invoice settlement within 15 days.",
      },
      {
        step: "Submit Rebuttal Dossier to ECGC Claims Desk",
        detail:
          "Forward the unanswered Legal Notice, courier delivery receipt, and inspection certificates to ECGC to classify the default as 'Protracted Default' rather than an unresolved commercial dispute.",
      },
    ],
    statutoryRule: "ECGC Commercial Dispute Exclusion Clause + Sale of Goods Act ss. 41–42",
  },
  {
    id: "embassy-vs-notice",
    tabLabel: "Embassy vs. Legal Notice",
    title: "Indian Mission / Embassy Debt Intervention vs. Formal Advocate Legal Notice",
    trigger:
      "Many exporters rely solely on emailing the Indian Embassy/High Commission Commercial Wing or sending informal WhatsApp reminders, only to be told by ECGC that 'all reasonable steps to minimize loss' were not taken.",
    legalBasis:
      "ECGC policy mitigation clauses mandate that the insured exporter act as a prudent uninsured seller—meaning formal legal demand, collection agency/advocate escalation, and preservation of limitation periods in the buyer's jurisdiction. While Indian Mission trade complaints create diplomatic pressure, embassies have zero judicial enforcement power. An Advocate-drafted International Legal Notice served via Email + International Courier (DHL/FedEx POD) satisfies both ECGC's mitigation audit and AD Category-I Bank EDPMS proof.",
    steps: [
      {
        step: "Dual-Track Escalation (Legal + Diplomatic)",
        detail:
          "File a trade dispute complaint on the DGFT / Indian Mission portal while simultaneously dispatching an Advocate Legal Demand Notice to the buyer's registered corporate office.",
      },
      {
        step: "Preserve Tri-Channel Service & BSA s.63 Logs",
        detail:
          "Retain signed courier Airway Bill + POD, SMTP email delivery headers, and WhatsApp Business delivery timestamps with a Section 63 BSA 2023 certificate.",
      },
      {
        step: "Trigger Foreign Collection / Arbitral Escalation",
        detail:
          "If unpaid after 15 days, initiate local debt-collection or arbitration/CPC s.44A reciprocating enforcement steps as required by ECGC's legal-action directive.",
      },
    ],
    statutoryRule: "ECGC Loss-Mitigation Covenant + BSA 2023 s.63 + DGFT Trade Dispute Framework",
  },
  {
    id: "clause-c24-edpms",
    tabLabel: "Clause C.24 EDPMS Closure",
    title: "Clearing the Uninsured 10%–20% Balance in EDPMS via RBI Clause C.24",
    trigger:
      "Even after ECGC pays 80% or 90% of the export bill, the exporter's AD Category-I Bank keeps the Shipping Bill open in RBI's EDPMS for the remaining 10%–20% uninsured balance—threatening RBI Caution Listing and blocking RoDTEP/Duty Drawback.",
    legalBasis:
      "Under the RBI Master Direction on Export of Goods and Services (Part C.24 — Write-off of unrealized export bills), while normal exporter self-write-off is capped at 5% and AD-Bank write-off at 10% of total export proceeds realized in the preceding calendar year, Clause C.24 creates an unconditional exception: where the export bill is covered by ECGC and ECGC has settled the claim, the AD Category-I Bank is authorized to write off the remaining unrealized balance in full without any 10% ceiling.",
    steps: [
      {
        step: "Obtain ECGC Claim Settlement & Subrogation Advice",
        detail:
          "Collect the official ECGC Claim Payment Advice confirming percentage settled (80%/90%) and execution of the Letter of Subrogation.",
      },
      {
        step: "Submit Clause C.24 Closure Application to AD Bank",
        detail:
          "File a formal request with your AD Category-I Bank citing RBI Master Direction Clause C.24, enclosing the ECGC settlement letter, Shipping Bill, e-BRC, and Legal Notice proof.",
      },
      {
        step: "Verify EDPMS Status & Caution-List Clearance",
        detail:
          "Ensure the AD Bank marks the Shipping Bill 'Closed / Written Off under ECGC Settlement' in EDPMS and issues a clean realization closure confirmation.",
      },
    ],
    statutoryRule: "RBI Master Direction on Export of Goods & Services — Clause C.24 (No 10% Cap)",
  },
];

export default function EcgcScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="ECGC Claim Failure Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
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
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Operational Failure Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.trigger}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory Counter-Position
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            3-Step Creditor Action Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={st.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {st.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
