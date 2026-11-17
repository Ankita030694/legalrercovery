"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  badgeColor: string;
  title: string;
  context: string;
  statutoryTrap: string;
  recoveryPlaybook: string;
  actionableSteps: string[];
  expectedOutcome: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "gstr1-filed-3b-not-paid",
    tabLabel: "GSTR-1 Filed / 3B Skipped",
    badge: "Most Common Corporate Default",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Supplier Uploaded Invoice in GSTR-1 (Appears in GSTR-2B) but Pockets Cash and Never Filed GSTR-3B",
    context:
      "A raw material supplier or super-stockist issues a ₹50,00,000 tax invoice plus 18% GST (₹9,00,000). The buyer pays 100% of the invoice value (₹59,00,000) via RTGS. The invoice reflects in the buyer's auto-populated GSTR-2B because the supplier filed GSTR-1. However, the supplier never files GSTR-3B and absconds with the ₹9,00,000 tax float to fund internal working capital.",
    statutoryTrap:
      "Under Section 16(2)(c) of the CGST Act, 2017, input tax credit is conditional upon tax having been actually deposited with the Government. Two years later, the GST audit officer issues a Form DRC-01 demand notice reversing the entire ₹9,00,000 ITC, demanding 18% penal interest under Section 50(3) and a 100% penalty under Section 122(1).",
    recoveryPlaybook:
      "Deploy a twin-track statutory recovery strategy: (1) Serve an urgent High Court Advocate Legal Notice demanding immediate Challan PMT-06 / GSTR-3B filing within 7 days, warning the supplier's Managing Director and CFO that collecting GST without remitting it violates Section 76 of the CGST Act and constitutes a cognizable offense under Section 132(1)(d). (2) Simultaneously file a protective objection to the GST Assessing Officer citing Calcutta High Court's landmark judgment in Suncraft Energy Pvt. Ltd., barring coercive recovery against the bona fide purchaser before exhausting remedies against the seller.",
    actionableSteps: [
      "Issue 7-Day Advocate Statutory Demand Notice citing CGST Act ss. 76, 122(1)(iv), 132(1)(d), and Contract Act s. 124.",
      "Calculate 18% statutory interest under CGST Section 50 plus commercial damages from the invoice due date.",
      "Submit written reply to DRC-01A citing Suncraft Energy (Calcutta HC) and D.Y. Beathel (Madras HC) demanding supplier audit first.",
      "Lodge formal complaint with the DGGI (Directorate General of GST Intelligence) under Section 76 Anti-Evasion provisions.",
    ],
    expectedOutcome:
      "Vendor files pending GSTR-3B or provides an immediate cash refund of ₹9,00,000 plus interest to pre-empt criminal prosecution.",
  },
  {
    id: "cancelled-gstin-retrospective",
    tabLabel: "Retrospective GSTIN Cancelled",
    badge: "Severe Audit Risk",
    badgeColor: "bg-amber-950/70 border-amber-800 text-amber-300",
    title: "GST Department Cancels Vendor's Registration Retrospectively After Genuine Purchase & Delivery",
    context:
      "A packaging manufacturer or FMCG distributor bought goods in October 2024 with a valid GSTIN verified on the GST Portal, matched with valid E-Way Bills and weighbridge slips. In 2026, the supplier's registration is cancelled retrospectively from April 2024 due to non-filing of consecutive returns or failure to verify registered premises.",
    statutoryTrap:
      "GST audit wings mechanically disallow ITC on the grounds that purchases were made from an 'inactive/cancelled entity'. Officers issue Section 74 SCNs alleging suppression and fraud, treating genuine commercial transactions as bogus billing.",
    recoveryPlaybook:
      "Invoke the binding Madras High Court precedent in Engineering Analysis / D.Y. Beathel and Calcutta High Court rulings establishing that retrospective cancellation cannot prejudice a bona fide buyer who verified active status at the time of supply. Serve a comprehensive contractual indemnity notice on the vendor and its promoters under Indian Contract Act Section 124/125 to recover all departmental demand amounts and legal expenses.",
    actionableSteps: [
      "Collate GST Portal historical search logs showing 'Active' status at the date of invoice and E-Way bill generation.",
      "Compile Section 63 Bharatiya Sakshya Adhiniyam (BSA) digital certificate for bank RTGS debits and transport bilties.",
      "Serve high-stakes Tax Indemnity Notice under Contract Act ss. 124 & 73 demanding deposit or immediate escrow backing.",
      "File writ petition before the High Court if the GST adjudicating authority refuses to recognize Suncraft Energy protections.",
    ],
    expectedOutcome:
      "Adjudicating officer stays coercive ITC recovery; vendor forced into settlement or High Court quashes unilateral DRC-07 demand.",
  },
  {
    id: "fake-invoicing-bogus-vendor",
    tabLabel: "Bogus Billing SCN Defense",
    badge: "DGGI / Anti-Evasion Probe",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Sub-Tier Supplier Accused of Fake Invoicing Syndicate; Department Freezes Corporate Buyer's Credit Ledger",
    context:
      "The buyer purchased goods from a tier-1 distributor who unknowingly sourced from a fraudulent entity in tier-3. The DGGI uncovers a fake invoicing ring and issues widespread DRC-01 notices across the entire supply chain, invoking Rule 86A to block the corporate buyer's Electronic Credit Ledger.",
    statutoryTrap:
      "Department officials frequently freeze credit ledgers under Rule 86A without assigning specific reasons or examining proof of physical goods receipt, crippling the buyer's routine monthly cash flow and outward tax adjustments.",
    recoveryPlaybook:
      "Discharge the Section 155 statutory burden of proof as laid down by the Supreme Court in State of Karnataka v. Ecom Gill Coffee Trading Pvt. Ltd. (2023). Submit an exhaustive 6-point evidentiary dossier: tax invoice, e-way bill, toll plaza FASTag logs, weighbridge slips, Goods Receipt Note (GRN), and bank statement showing banking channel clearance. Serve an immediate legal notice on the vendor demanding contractual indemnification and immediate revocation of false claims.",
    actionableSteps: [
      "Prepare Section 155 Evidence Dossier establishing physical movement of goods and genuine consumption in production.",
      "Challenge Rule 86A ledger blocking on grounds of lack of 'reasons to believe' under Delhi High Court precedent.",
      "Issue urgent Advocate Demand Notice to tier-1 vendor invoking indemnity clauses and demanding indemnification bond.",
      "Initiate Section 9 Arbitration petition or Order 38 Rule 5 CPC interim asset attachment against defaulting vendor.",
    ],
    expectedOutcome:
      "Electronic Credit Ledger unblocked under Rule 86A(3); corporate buyer's liability insulated via proven physical receipt dossier.",
  },
  {
    id: "vendor-wound-up-absconded",
    tabLabel: "Vendor Dissolved / Struck Off",
    badge: "Promoter Personal Liability",
    badgeColor: "bg-slate-800 border-slate-700 text-slate-300",
    title: "Supplier Dissolves Company or Gets Struck Off from MCA Without Depositing Collected GST",
    context:
      "After collecting ₹25,00,000 in GST across multiple fiscal quarters, the supplier's directors abandon the corporate entity, apply for striking off under Companies Act Section 248, or allow the entity to become dormant, leaving buyers stranded with massive DRC-01 notices.",
    statutoryTrap:
      "Corporate buyers assume they have reached a dead end because the corporate vehicle has no bank balance. Defaulting promoters hide behind the corporate veil to evade tax debts and civil recovery.",
    recoveryPlaybook:
      "Pierce the corporate veil under Section 89 of the CGST Act (Director Liability in Private Companies) and Section 339 of the Companies Act (Fraudulent Trading). Under CGST Act Section 89, every person who was a director of a private company during the period for which tax was due is jointly and severally liable unless they prove non-gross neglect. Issue an advocate notice to directors' personal addresses demanding immediate indemnification.",
    actionableSteps: [
      "Extract director DINs, personal asset filings, and home addresses from Ministry of Corporate Affairs (MCA) records.",
      "Serve Advocate Notice invoking CGST Section 89 fastening personal, joint, and several liability on all directors.",
      "File criminal complaint under Bharatiya Nyaya Sanhita (BNS) Section 316 (Criminal Breach of Trust) and Section 318 (Cheating).",
      "Lodge formal objection before the Registrar of Companies (ROC) to prevent company strike-off or dissolution.",
    ],
    expectedOutcome:
      "Directors face personal bank account freezes under CGST s.89, compelling them to settle tax liabilities out of personal funds.",
  },
];

export default function GSTRecoveryScenarioTabs() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeScenarioId;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveScenarioId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md scale-100"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border ${activeScenario.badgeColor}`}
          >
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Actionable Playbook &bull; Creditor Remedy
          </span>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-3">
          {activeScenario.title}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <span className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1">
              Factual Ground Context
            </span>
            <p>{activeScenario.context}</p>
          </div>

          <div className="bg-red-50/70 rounded-xl p-4 border border-red-100">
            <span className="block text-[11px] font-black uppercase tracking-wider text-[#DC2626] mb-1">
              Statutory Vulnerability &amp; SCN Trap
            </span>
            <p className="text-slate-800">{activeScenario.statutoryTrap}</p>
          </div>

          <div className="bg-emerald-50/70 rounded-xl p-4 border border-emerald-100">
            <span className="block text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1">
              Advocate Statutory Recovery Playbook
            </span>
            <p className="text-slate-800">{activeScenario.recoveryPlaybook}</p>
          </div>
        </div>

        {/* Actionable Steps Grid */}
        <div className="mb-6">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            Immediate 4-Step Statutory Action Rail
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.actionableSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Outcome Box */}
        <div className="rounded-xl bg-slate-900 text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 mb-0.5">
              Target Legal Outcome
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-100">
              {activeScenario.expectedOutcome}
            </p>
          </div>
          <a
            href="#dual-track-cta"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors shrink-0"
          >
            Draft Notice &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
