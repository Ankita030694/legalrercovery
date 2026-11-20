"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  cluster: string;
  failureMode: string;
  debtorExcuse: string;
  statutoryTrigger: string;
  creditorAction: string[];
  expectedTimeline: string;
  riskNote: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "gandhidham-lc",
    tabLabel: "1. Gandhidham LC Crunch",
    cluster: "Gandhidham / Kandla / Mangaluru / Tuticorin Timber Importers",
    failureMode:
      "Importer retires 90-day USD Letter of Credit (LC) / Buyers Credit at the bank on due date, while downstream interior contractors or furniture factories stretch ₹35L–₹1.2Cr sawn pinewood/teak bills to 150–180 days.",
    debtorExcuse:
      "\"Our end-client project billing is stuck; we will clear your timber account once the next commercial tower tranche releases.\"",
    statutoryTrigger:
      "Order XXXVII CPC (Summary Suit on Confirmed GST Invoices & LRs) + MSMED Act s.16 (if supplier holds Udyam registration) + Section 43B(h) Income Tax disallowance.",
    creditorAction: [
      "Lock in a written balance confirmation or ledger acknowledgment over email/WhatsApp and preserve it with a BSA 2023 s.63 certificate.",
      "Serve a 15-day composite statutory notice invoking Order XXXVII CPC liquidated debt and Section 43B(h) year-end tax disallowance.",
      "If the buyer is a private limited furniture OEM, trigger NI Act s.138 on any dishonored security PDCs to attach personal director accountability.",
    ],
    expectedTimeline: "15–30 Days Notice Settlement | 4–9 Months Summary Decree",
    riskNote:
      "Do not accept undocumented rolling part-payments without written allocation against oldest invoices first (Contract Act s.59–61).",
  },
  {
    id: "yamunanagar-43bh",
    tabLabel: "2. Yamunanagar 43B(h) Trap",
    cluster: "Yamunanagar & Perumbavoor Plywood, Veneer & MDF Mills",
    failureMode:
      "Udyam-registered plywood, blockboard, or face-veneer manufacturer supplies ₹18L–₹65L lots to wholesale dealers or institutional builders on 45-day terms, which stretch past March 31.",
    debtorExcuse:
      "\"Market is slow across NCR/South; everybody in Yamunanagar gives 120 days credit—don't spoil our 5-year relationship over 45-day rules.\"",
    statutoryTrigger:
      "Income Tax Act Section 43B(h) (disallowance of unpaid Micro/Small enterprise purchase beyond 15/45 days) + MSMED Act s.15–18 (3x RBI compound interest at MSEFC).",
    creditorAction: [
      "Include your Udyam Registration Number (Micro/Small category) prominently on every GST invoice, e-Way Bill, and ledger statement.",
      "Serve an Advocate-vetted Section 43B(h) + MSMED s.16 computation notice 45 days before March 31 (or before statutory audit sign-off), quantifying the 30% corporate tax hit to the buyer.",
      "File on the MSME Samadhaan portal (MSEFC) for mandatory conciliation followed by 90-day statutory arbitration.",
    ],
    expectedTimeline: "10–21 Days Audit-Driven Settlement | 90-Day MSEFC Track",
    riskNote:
      "Section 43B(h) applies strictly to Micro & Small manufacturers/service providers (not Medium enterprises or pure traders); verify Udyam classification before citing.",
  },
  {
    id: "core-gap-alibi",
    tabLabel: "3. 6-Month Delamination Alibi",
    cluster: "Plywood, Veneer, Particle Board & Laminate Suppliers",
    failureMode:
      "Dealer or modular kitchen factory raises a sudden 'core-gap, moisture swelling, or veneer delamination' complaint 4–6 months after delivery—solely when the payment demand notice is served.",
    debtorExcuse:
      "\"30% of the BWP marine ply sheets delaminated at site; we are debiting ₹9.5 Lakhs for carpenter rework and holding the rest.\"",
    statutoryTrigger:
      "Sale of Goods Act, 1930 Section 42 (Deemed Acceptance by lapse of reasonable time without rejection) + Order XXXVII CPC (sham/moonshine defense test).",
    creditorAction: [
      "Compile timestamped dispatch QC logs, IS:710 / IS:303 moisture-meter certificates, and zero-complaint WhatsApp/email history across the first 30–60 days.",
      "Rebut the belated debit note immediately in writing, citing Section 42 of the Sale of Goods Act—retention and resale/installation of sheets without timely written rejection constitutes deemed acceptance.",
      "Expose the sham 'pre-existing dispute' before the Commercial Court or Order 37 Judge so leave to defend is either refused or conditioned on 100% court deposit.",
    ],
    expectedTimeline: "15 Days Written Rebuttal | Conditional Deposit in Order 37",
    riskNote:
      "Never ignore an unsubstantiated debit note; an unanswered GST debit note or WhatsApp complaint can be twisted into an 'existing dispute' to block IBC/Summary tracks.",
  },
  {
    id: "pdc-asset-strip",
    tabLabel: "4. PDC Bounce & Godown Strip",
    cluster: "Timber Wholesalers, Sawmills & Veneer Traders",
    failureMode:
      "Dealer's security cheque bounces ('Funds Insufficient' or 'Payment Stopped') while rumors circulate that the dealer is liquidating godown stock and transferring assets.",
    debtorExcuse:
      "\"That cheque was only a security PDC given at onboarding; we closed that account and shifted operations to a sister concern.\"",
    statutoryTrigger:
      "NI Act s.138 & s.141 (Director/Partner Liability; Sripati Singh ruling on security cheques) + s.143A (20% interim deposit) + Order XXXVIII Rule 5 CPC (Attachment Before Judgment).",
    creditorAction: [
      "Issue mandatory NI Act s.138 statutory demand notice within 30 days of the bank return memo via Speed Post RPAD + Email + WhatsApp.",
      "File criminal complaint under s.138/s.141 within 30 days of the 15-day grace period expiry, naming Managing Directors and signatory partners.",
      "Simultaneously move Order XXXVIII Rule 5 CPC in Commercial/Civil Court with evidence of stock shifting to freeze bank accounts or godown inventory before judgment.",
    ],
    expectedTimeline: "15-Day Statutory Window | Urgent Order 38 Rule 5 Interim Freeze",
    riskNote:
      "Missing the 30-day notice window from the cheque return memo permanently kills the criminal s.138 track; diarize bank return dates immediately.",
  },
];

export default function TimberPlywoodScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Timber and Plywood Default Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((item) => {
          const isSelected = item.id === current.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isSelected
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
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
              {current.cluster}
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              {current.tabLabel}
            </h3>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white self-start sm:self-center">
            {current.expectedTimeline}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.failureMode}
            </p>
          </div>
          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              Typical Debtor Excuse
            </p>
            <p className="text-xs sm:text-sm text-amber-950 italic leading-relaxed">
              {current.debtorExcuse}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1.5">
            Controlling Statutory Hook
          </p>
          <p className="text-xs sm:text-sm font-semibold leading-relaxed">
            {current.statutoryTrigger}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
            Creditor Enforcement Sequence
          </p>
          <ul className="space-y-2">
            {current.creditorAction.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 text-xs text-red-900">
          <strong className="font-bold">Critical Risk Guardrail:</strong> {current.riskNote}
        </div>
      </div>
    </div>
  );
}
