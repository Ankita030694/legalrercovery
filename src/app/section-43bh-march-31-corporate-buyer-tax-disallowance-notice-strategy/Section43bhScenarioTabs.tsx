"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  buyerProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "udyam-cancellation-coercion",
    tabLabel: "1. Udyam Coercion / Downgrade",
    title: "Buyer Demands Supplier Cancel Udyam Registration or Sign 'Non-MSME' Declaration",
    badge: "Coercive Vendor Contracting & Tax Evasion",
    buyerProfile:
      "Large Tier-1 automotive ancillaries, engineering conglomerates, listed OEMs, and infrastructure EPC contractors with aggressive procurement mandates.",
    pretext:
      "In January or February, the corporate buyer's procurement head issues an ultimatum: 'Our ERP vendor master does not permit MSME payment terms beyond 45 days. If you want continued purchase orders next financial year, surrender your Udyam certificate, re-register as a Medium enterprise, or sign our standard declaration certifying you waive MSMED Act protections.' The buyer's accounts team threatens to block pending vendor payments until the declaration is signed.",
    legalReality:
      "Section 24 of the MSMED Act, 2006 contains a mandatory non-obstante clause that explicitly overrides any contract, agreement, or declaration. Any waiver of MSME status or agreement to extend payment beyond 45 days extracted through commercial coercion is void ab initio under Section 23 of the Indian Contract Act, 1872 as defeating the provisions of law. Furthermore, coercing a vendor to cancel Udyam to evade Section 43B(h) disallowance constitutes willful tax fraud under Section 276C of the Income Tax Act, 1961, exposing directors to severe criminal penalties.",
    statutoryHook:
      "MSMED Act 2006 s.24 + Indian Contract Act s.23 (Void Contracts) + Income Tax Act s.43B(h) & s.276C",
    actionProtocol: [
      "Never sign 'Non-MSME' declarations or surrender your Udyam registration; existing Udyam remains valid and retroactive for all supplies executed under that certificate.",
      "Issue a formal written objection rejecting the waiver, attaching your active Udyam Certificate showing Enterprise Category (Micro or Small) and manufacturing NIC codes.",
      "Serve a fact-verified Section 43B(h) Statutory Disclosure Notice directly to the corporate buyer's Managing Director, CFO, and Audit Committee.",
      "Inform the buyer that any ongoing procurement boycott based on MSME status violates Competition Act Section 4 (abuse of dominant position) and Section 15 of MSMED Act.",
    ],
  },
  {
    id: "retention-withholding-march-31",
    tabLabel: "2. Retention & Tooling Holdback",
    title: "Buyer Withholds 10–20% Retention Money or Tooling Amortization Past March 31",
    badge: "Form 3CD Clause 22 Disallowance",
    buyerProfile:
      "Automotive OEMs, machinery procurement divisions, turnkey assembly contractors, and industrial equipment buyers holding back retainage balances.",
    pretext:
      "The corporate buyer took delivery of custom machinery, tooling fixtures, or precision components, approved initial inspections, and paid 80%–90%. However, they withhold the final 10%–20% retention (or ₹15L–₹60L in tooling development costs) under a standard PO clause mandating a 12-month Defect Liability Period (DLP). As March 31 nears, the buyer's treasury refuses to disburse the retention, claiming 'retention money is exempt from Section 43B(h) until DLP completion.'",
    legalReality:
      "CBDT and judicial guidance clarify that Section 43B(h) applies to all operational sums payable for goods or services supplied by Micro and Small enterprises. Unless the supplier is specifically contractually engaged under a pure Works Contract with distinct milestone certifications, withholding retention on completed manufacturing supplies past 45 days triggers automatic Section 43B(h) tax disallowance on March 31. Under MSMED Act Section 15, the statutory 45-day ceiling supersedes contradictory 12-month PO retention terms.",
    statutoryHook:
      "Income Tax Act s.43B(h) + MSMED Act 2006 ss. 15, 16 & 24 + Form 3CD Clause 22",
    actionProtocol: [
      "Reconcile all delivery challans, inspection sign-offs, and commercial invoices showing delivery and deemed acceptance took place >45 days prior.",
      "Calculate the buyer's immediate tax hit: add 25.17% to 34.94% corporate tax plus surcharge/cess onto the entire unpaid retention balance.",
      "Send a pre-March 31 CFO Notice demanding immediate payment or provision of a 100% bank release, warning of Form 3CD Clause 22 audit exposure.",
      "Charge compound interest at 3 times RBI Bank Rate from Day 46 onwards under Section 16 MSMED Act, which itself cannot be deducted as an expense.",
    ],
  },
  {
    id: "sham-defect-day-44",
    tabLabel: "3. Sham Day-44 Defect Dispute",
    title: "Buyer Fabricates Quality Complaints on Day 44 to Evade Form 3CD Auditor Reporting",
    badge: "Pre-Emption of Fabricated Disputes",
    buyerProfile:
      "Mid-sized to large corporate buyers using bad-faith rejection emails at the end of the statutory credit period to manufacture artificial disputes.",
    pretext:
      "Goods were supplied, delivered to the buyer's warehouse with signed GRNs, and integrated into plant processes. On Day 44 (one day prior to statutory overdue status), the buyer's purchase team abruptly shoots an email: 'We have identified surface scratches/dimensional variances in Batch #441. The invoice is placed on dispute hold until re-inspection.' No technical rejection report or physical return of goods follows, yet the buyer withholds payment indefinitely.",
    legalReality:
      "Under the Explanation to Section 15 of the MSMED Act, an objection regarding defect or deficiency must be communicated in writing within 15 days from the date of delivery. If no formal objection is raised within 15 days, 'deemed acceptance' occurs by operation of law. A belated objection raised on Day 44 is legally time-barred, void, and ineffective to stop either the 45-day MSMED countdown or Section 43B(h) disallowance on March 31.",
    statutoryHook:
      "MSMED Act 2006 s.2(b) & s.15 (15-Day Objection Bar) + Sale of Goods Act 1930 s.42 (Deemed Acceptance)",
    actionProtocol: [
      "Prove conclusively that the buyer failed to issue a written objection within the mandatory 15-day statutory window following delivery.",
      "Submit electronic logs (e-Way bills, GRNs, gate inward passes) confirming receipt and lapse of 15 days without technical complaint.",
      "Issue a rejoinder establishing that under Section 15 Explanation, deemed acceptance occurred on Day 15, nullifying the Day 44 pretext.",
      "Deliver the Section 43B(h) CFO intimation detailing that statutory auditors cannot treat a time-barred email as a bona fide legal dispute.",
    ],
  },
  {
    id: "q4-advance-tax-leverage",
    tabLabel: "4. Q4 Advance Tax Leverage",
    title: "Exploiting the March 15 Advance Tax & March 31 Year-End Balance Sheet Window",
    badge: "Q4 CFO Collection Strategy",
    buyerProfile:
      "Listed enterprises, public limited corporations, and mid-market companies subject to mandatory quarterly advance tax installments and statutory audits.",
    pretext:
      "Suppliers with invoices outstanding for 60 to 180 days are routinely told by accounts payable: 'Our payment cycle is quarterly; check back next month.' The vendor languishes in the corporate payment backlog while the corporate buyer utilizes vendor credit as free zero-interest working capital to inflate operating cash flows.",
    legalReality:
      "Under Section 211 of the Income Tax Act, corporate buyers must pay 100% of their estimated advance tax liability by March 15. If a buyer fails to pay its overdue MSME invoices by March 31, Section 43B(h) forbids them from claiming those purchase costs. This artificially inflates the buyer's net taxable profit, triggering massive advance tax shortfalls, interest penalties under Section 234B and 234C, and compulsory Form 3CD qualification.",
    statutoryHook:
      "Income Tax Act ss. 43B(h), 211, 234B, 234C + Companies Act 2013 s.143(3) (Auditor Reporting)",
    actionProtocol: [
      "Launch your Q4 Recovery Drive between January 15 and March 10, preceding the March 15 fourth advance tax installment deadline.",
      "Serve the CFO and Head of Taxation with a scheduled 'Disallowance Impact Statement' listing exact invoice numbers, dates, and tax penalties.",
      "Provide a crystal-clear calculation demonstrating that settling the invoice saves the company 30%+ in cash tax outflow before March 31.",
      "Copy the statutory auditor and audit committee chair, creating immediate audit risk if the management conceals overdue MSME payables.",
    ],
  },
];

export default function Section43bhScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Mobile Selector */}
      <div className="sm:hidden mb-4">
        <label htmlFor="scenario-select" className="sr-only">
          Select Corporate Evasion Scenario
        </label>
        <select
          id="scenario-select"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-900 shadow-xs focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
        >
          {SCENARIOS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.tabLabel}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop / Tablet Tab Buttons */}
      <div className="hidden sm:flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((s) => {
          const isActive = s.id === activeTab;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveTab(s.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {s.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="mt-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 transition-all">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-[11px] text-slate-500 font-mono">
            Scenario Analysis &bull; IND-06
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Target Corporate Profile
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              {current.buyerProfile}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-600 mb-1">
              Corporate Default Pretext
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              {current.pretext}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border-l-4 border-[#DC2626] border-y border-r border-slate-200 mb-5 shadow-2xs">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
            Statutory Reality &amp; Legal Protection
          </p>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            {current.legalReality}
          </p>
          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Statutory Hook:
            </span>
            <span className="text-xs font-semibold text-slate-900">
              {current.statutoryHook}
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            Action Protocol for Micro &amp; Small Suppliers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {current.actionProtocol.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700 shadow-2xs"
              >
                <span className="shrink-0 w-5 h-5 rounded-full bg-red-50 text-[#DC2626] font-bold flex items-center justify-center text-[10px] border border-red-200 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
