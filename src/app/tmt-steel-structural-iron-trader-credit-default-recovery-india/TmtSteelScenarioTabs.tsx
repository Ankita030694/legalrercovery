"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "unsold-inventory-attachment",
    tabLabel: "Order 38 r.5 Attachment",
    title: "Attaching a Defaulting Builder's Unsold Flats & Project Bank Accounts Before Decree",
    cause:
      "A real estate developer takes ₹65 Lakh of Fe-500D/Fe-550D TMT bars across 3 trailer loads on 30-day credit, ties the steel into columns and slabs, and then stalls payment while quietly transferring unsold flats to sister concerns or draining RERA collection accounts.",
    legalBasis:
      "Under Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 (Attachment Before Judgment), a steel distributor suing under Order XXXVII or a Commercial Suit can apply for immediate attachment of the builder's unencumbered, unsold flats, project inventory, or non-RERA operating bank accounts if there is credible proof that the debtor is alienating assets to obstruct execution. Simultaneously, under Section 42 of the Sale of Goods Act, 1930, embedding steel into structural RCC frames permanently extinguishes the builder's right to reject the material.",
    steps: [
      {
        step: "Map Unsold RERA Units & Non-Mortgaged Assets",
        description:
          "Pull the project's latest RERA quarterly inventory disclosure and MCA charge index (Form CHG-1) to identify unencumbered unsold flats or free cash-flow accounts.",
      },
      {
        step: "File Order XXXVII Suit Paired With Order XXXVIII Rule 5 Motion",
        description:
          "Present Tax Invoices, GST E-Way Bills, signed Dharamkanta slips, and third-party alienation indicators to seek urgent interim attachment without Section 12A mediation delay.",
      },
      {
        step: "Serve Garnishee / Bank Freeze Order Under Order XXI / XXXVIII",
        description:
          "Once the court issues a conditional attachment or security-furnishing direction, serve it on the sub-registrar and the builder's banker to compel rapid settlement.",
      },
    ],
    statutoryRule: "CPC Order XXXVIII Rule 5, Order XXXVII & Commercial Courts Act s.12A",
  },
  {
    id: "weight-rust-excuse",
    tabLabel: "Weight & Rust Claims",
    title: "Defeating Post-Delivery 'Weight Shortage' & 'Surface Rust' Debit Notes",
    cause:
      "Sixty days after unloading 30-ton trailers in Kalamboli, Raipur, or Mandi Gobindgarh, a factory buyer or contractor raises a belated complaint alleging a 400 kg weight shortage or surface oxidation (rust) to withhold the entire ₹20 Lakh trailer invoice.",
    legalBasis:
      "Under IS 1786:2008 (High Strength Deformed Steel Bars) and standard rolling-mill trade practice, weighment discrepancies must be verified at the time of delivery via a joint Dharamkanta re-weighment before unloading, and sectional weight tolerance (+/- 3% to 5% depending on bar diameter) applies. Similarly, superficial atmospheric mill scale or light surface rust that does not cause pitting or reduce cross-sectional area below IS 1786 limits is structurally acceptable. Under Section 42 of the Sale of Goods Act, 1930, unloading, stacking, and cutting/bending bars without a 48-hour written protest waives all shortage or rust objections.",
    steps: [
      {
        step: "Pair Mill MTC With Calibrated Dharamkanta Weighbridge Slip",
        description:
          "Match the heat number on the rolling mill's Mill Test Certificate (MTC) with the tare/gross weight timestamp on the Legal Metrology-stamped Dharamkanta slip and E-Way Bill Part-B.",
      },
      {
        step: "Lock Acceptance Via Gate-Entry Register & Unloading Receipt",
        description:
          "Highlight the buyer's storekeeper signature on the delivery challan and LR (Lorry Receipt) showing zero shortage remark at the factory or site gate.",
      },
      {
        step: "Rebut Unilateral Debit Notes Under Contract Act Section 74",
        description:
          "Serve an advocate notice declaring any belated debit note void and unenforceable, while claiming full principal plus 3x RBI compound interest if Udyam-registered.",
      },
    ],
    statutoryRule: "Sale of Goods Act s.42, IS 1786:2008 & Indian Contract Act s.74",
  },
  {
    id: "rtgs-pdc-bounce-s138",
    tabLabel: "PDC / RTGS Bounce s.138",
    title: "Rolling Mill / Dealer PDC Dishonour & Director Liability Under NI Act s.138/141",
    cause:
      "In Mandi Gobindgarh, Jalna, and Durgapur steel mandis, buyers promise RTGS within 15–30 days and hand over post-dated or 'security' cheques. When the 30-day credit expires, the RTGS never arrives and the cheque returns marked 'Funds Insufficient' or 'Payment Stopped by Drawer'.",
    legalBasis:
      "Under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881, dishonour of any cheque—including a security cheque crystallized against overdue steel invoices (Sripati Singh v. State of Jharkhand)—exposes the company and its managing/signing directors to criminal prosecution, up to 2 years imprisonment, and double the cheque amount in fine. Moreover, Section 143A empowers the Magistrate to order up to 20% interim compensation within 60 days of plea.",
    steps: [
      {
        step: "Present Cheque Within Validity & Preserve Bank Return Memo",
        description:
          "Deposit the PDC/security cheque once the 30-day credit period lapses and secure the physical bank return memo bearing the exact dishonour reason and date.",
      },
      {
        step: "Dispatch Statutory 15-Day Demand Notice Within 30 Days",
        description:
          "Send an advocate notice under Section 138(b) to the company and all executive directors (Section 141) via Speed Post RPAD, Email, and WhatsApp.",
      },
      {
        step: "File Parallel s.138 Criminal Complaint + Order XXXVII Summary Suit",
        description:
          "Combine criminal director accountability (plus s.143A 20% interim deposit) with a civil Order XXXVII summary suit for full principal and interest.",
      },
    ],
    statutoryRule: "NI Act 1881 s.138, s.141 & s.143A (20% Interim Deposit)",
  },
  {
    id: "credit-stretch-180-days",
    tabLabel: "30 to 180-Day Stretch",
    title: "Stopping Builders & Factories From Stretching 30-Day Credit to 180 Days Interest-Free",
    cause:
      "Operating on a razor-thin 1.5% trading margin, steel distributors rely on 12x annual working-capital rotation. When a buyer stretches a 30-day bill to 180 days, the trader's own CC/OD bank interest (10%–12% p.a.) completely wipes out the trade margin and turns the sale into a net loss.",
    legalBasis:
      "If the steel distributor or rolling mill holds a valid Micro or Small Udyam Registration on the supply date, Sections 15 and 16 of the MSMED Act, 2006 cap credit at 45 days maximum (regardless of any longer PO term) and mandate 3x the RBI Bank Rate compounded monthly. Additionally, under Section 43B(h) of the Income Tax Act, 1961, any corporate buyer failing to pay a Micro or Small supplier within 45 days loses the income-tax expense deduction for that steel purchase in the relevant financial year.",
    steps: [
      {
        step: "Trigger Day-31 Statutory Interest & s.43B(h) Audit Alert",
        description:
          "Issue a formal demand notice citing your Udyam certificate, statutory 3x RBI monthly compounding, and the buyer's Section 43B(h) tax-disallowance risk.",
      },
      {
        step: "File MSEFC Samadhaan Claim or Order XXXVII Suit",
        description:
          "For Micro/Small suppliers, initiate MSEFC conciliation/arbitration (90-day statutory target) or file an Order XXXVII suit with contractual 18%–24% invoice interest.",
      },
      {
        step: "Escalate >= ₹1 Crore Corporate Defaults to IBC Section 8",
        description:
          "Where combined overdue steel principal and agreed invoice interest reaches ₹1 Crore against a company, serve an IBC Form 3/4 demand notice carrying a 10-day pay-or-face-NCLT window.",
      },
    ],
    statutoryRule: "MSMED Act s.15–18, Income Tax Act s.43B(h) & IBC s.8",
  },
];

export default function TmtSteelScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
      {/* Tab Selector */}
      <div
        role="tablist"
        aria-label="Steel Trade Failure Scenarios"
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Content */}
      <div className="space-y-5">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            {activeScenario.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Weapon
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
            3-Step Creditor Execution Protocol
          </p>
          <div className="space-y-3">
            {activeScenario.steps.map((item, idx) => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
