"use client";

import React, { useState } from "react";
import { AlertTriangle, CheckCircle2, FileText, Scale } from "lucide-react";

interface Scenario {
  id: string;
  label: string;
  badge: string;
  title: string;
  debtorTactic: string;
  statutoryRebuttal: string;
  evidenceRequired: string[];
  actionStep: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "publisher-switch",
    label: "1. Pre-Session Switch",
    badge: "Peak Jan–Feb Risk",
    title: "School or Campus Bookshop Switches to a Rival Publisher Without Clearing Last March's Ledger",
    debtorTactic:
      "After collecting 100% cash from parents for textbooks, workbooks, uniforms, and stationery in March–April, the school trust or campus bookshop stalls your ₹15–₹40 Lakh invoices till November, then quietly adopts a rival publisher's booklist for the upcoming April session.",
    statutoryRebuttal:
      "Under Order XXXVII of the Code of Civil Procedure, 1908, signed purchase orders, transporter bilties, and acknowledged invoices constitute a liquidated written debt enforceable via Summary Suit—where the school cannot defend without Court leave. Simultaneously, if your publishing house or distributor holds Micro/Small Udyam registration, MSMED Act s.15–16 mandates 3x RBI compound interest beyond 45 days, and Income Tax Act s.43B(h) disallows the expense for audited buyers.",
    evidenceRequired: [
      "Approved annual booklist email / WhatsApp confirmation from Principal or Procurement Head",
      "GST Tax Invoices (HSN 4901 / 4820 / 6203) with E-Way Bills and Transporter Lorry Receipts (Bilty)",
      "Signed delivery challans or school gate-register entries stamped by campus storekeeper",
    ],
    actionStep:
      "Serve a Pre-Session December–January Advocate Legal Notice on the School Trust Chairman, Principal, and Bookshop Proprietor warning of Order 37 CPC Summary Suit & MSEFC reference before new-session admissions open.",
  },
  {
    id: "unsold-dump",
    label: "2. Unsold Book Return Dump",
    badge: "Most Common Trap",
    title: "November 'Excess Unsold Book Return Dump' of Stamped, Torn, or Syllabus-Changed Copies",
    debtorTactic:
      "Seven months after March dispatch, the bookshop or school suddenly ships back 35%–50% of rain-damaged, school-stamped, or old-edition textbooks in November—demanding a credit note against your ₹25 Lakh ledger.",
    statutoryRebuttal:
      "Under Section 15 of the MSMED Act, 2006, if a buyer does not record a written objection within 15 days of delivery, the goods are deemed accepted. Under Sections 42 and 55 of the Sale of Goods Act, 1930, retaining goods beyond a reasonable time without intimating rejection vests property in the buyer and entitles the publisher to sue for the full price—especially where return caps (e.g., max 10% in mint condition by June 30) were breached.",
    evidenceRequired: [
      "Supply agreement / distributor policy capping returns at 10%–15% in resalable condition before June/July",
      "Zero written quality or excess-stock objections raised within 15 days of March–April delivery",
      "Photos/video of returned cartons showing school stamps, moisture damage, or expired syllabus editions",
    ],
    actionStep:
      "Issue a formal Rejection of Unsold Return Notice citing Sale of Goods Act s.42 & MSMED s.15 deemed acceptance, refusing unauthorized credit notes and demanding 100% principal plus statutory interest.",
  },
  {
    id: "pdc-bounce",
    label: "3. Bookshop PDC Bounce",
    badge: "Criminal Leverage",
    title: "Post-Dated Cheques (PDCs) Issued by School Book Vendor or Uniform Contractor Dishonoured",
    debtorTactic:
      "To pacify your October–November follow-ups, the campus bookshop or school trust issues post-dated cheques for ₹8–₹20 Lakh that bounce in December with 'Insufficient Funds' or 'Payment Stopped by Drawer'.",
    statutoryRebuttal:
      "Cheque dishonour triggers parallel criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881 against the proprietor, partners, or school society office-bearers in charge of day-to-day affairs (s.141). Under Section 143A, the Magistrate can direct the accused to pay up to 20% interim compensation within 60 days of plea—while your civil Order 37 Summary Suit proceeds independently.",
    evidenceRequired: [
      "Original dishonoured cheques and Bank Cheque Return Memo (stamped with date of dishonour)",
      "Ledger reconciliation and covering email/WhatsApp proving PDCs were issued toward March–April supply",
      "Strict adherence to the 30-day statutory demand notice deadline from receipt of the bank return memo",
    ],
    actionStep:
      "Dispatch an Advocate NI Act s.138 Statutory Demand Notice within 30 days of the return memo giving 15 days to pay, followed by criminal complaint and s.143A interim compensation motion.",
  },
  {
    id: "govt-aided-school",
    label: "4. Govt / Aided School Delay",
    badge: "Section 80 CPC",
    title: "Government School, KV, Sainik School, or State Textbook Corporation Stalling Disbursement",
    debtorTactic:
      "After supplying textbooks, science lab kits, or school bags against a state tender or Samagra Shiksha work order, payments remain frozen for 8–12 months citing 'treasury budget lapse' or 'audit clearance pending'.",
    statutoryRebuttal:
      "Government schools, state education boards, and public-sector textbook corporations cannot be sued directly in a civil court without first serving a mandatory 2-month (60-day) statutory notice under Section 80 of the Code of Civil Procedure, 1908. Serving a formal Section 80 CPC Notice alongside an MSME Samadhaan reference (which applies even to PSU/government buyers) compels administrative audit clearance before the 60-day window expires.",
    evidenceRequired: [
      "Tender award / GeM contract / Work Order issued by State Education Department or School Principal",
      "Inspection Note / Stock Entry Certificate signed by the Government School Headmaster or Committee",
      "Udyam Registration Certificate for parallel MSEFC Samadhaan filing (45-day statutory ceiling)",
    ],
    actionStep:
      "Serve a formal Section 80 CPC Statutory Notice on the District Education Officer (DEO), Principal, and State Secretary, paired with an online MSEFC claim for 3x RBI compound interest.",
  },
];

export default function PublisherScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`text-left p-3 sm:p-3.5 rounded-xl border transition-all ${
                isActive
                  ? "bg-slate-900 border-slate-900 text-white shadow-md"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span
                className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1.5 ${
                  isActive
                    ? "bg-[#DC2626] text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {scenario.badge}
              </span>
              <span className="block text-xs sm:text-sm font-bold leading-snug">
                {scenario.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-start gap-2.5">
          <Scale className="w-5 h-5 text-[#DC2626] shrink-0 mt-1" />
          <span>{current.title}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> School / Bookshop Tactic
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.debtorTactic}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Creditor Statutory Rebuttal
            </p>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {current.statutoryRebuttal}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#DC2626]" /> Mandatory BSA s.63 &amp; Ledger Evidence
          </p>
          <ul className="space-y-1.5">
            {current.evidenceRequired.map((item, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-slate-700 flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
            Immediate Creditor Action Step
          </p>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
            {current.actionStep}
          </p>
        </div>
      </div>
    </div>
  );
}
