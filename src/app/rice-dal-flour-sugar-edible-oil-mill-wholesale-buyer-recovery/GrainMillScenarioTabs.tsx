"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  badge: string;
  title: string;
  corridor: string;
  buyerExcuse: string;
  statutoryCounter: string;
  evidenceRequired: string[];
  actionPlan: string;
  outcomeTimeline: string;
}

const SCENARIO_TABS: ScenarioTab[] = [
  {
    id: "bust-out",
    badge: "Organized Bust-Out",
    title: "Naya Bazar / Vashi / Posta 'Bust-Out' Trader (10 Truckloads & Vanished)",
    corridor: "Karnal / Taraori / Raipur -> Naya Bazar (Delhi) / Vashi APMC / Kolkata",
    buyerExcuse:
      "Trader buys 8–12 full truckloads on 15-day credit over 3 weeks, dumps stock below mandi rate for cash, locks the gaddi/godown, and claims 'business insolvency' or blames a partner.",
    statutoryCounter:
      "BNS Section 318 (Cheating with dishonest intention from inception — organized bust-out pattern) + CPC Order XXXVII Summary Suit + Order XXXVIII Rule 5 (Attachment Before Judgment of remaining godown stock or bank accounts) + NI Act s.138/141 against every partner/director.",
    evidenceRequired: [
      "GST E-Invoice IRNs & E-Way Bills proving rapid 21-day bulk off-take spike",
      "Pattern proof of simultaneous defaults against 2+ fellow millers in the same mandi",
      "Signed Bilty / Lorry Receipts & Weighbridge Kanta Slips at buyer unloading point",
      "Bounced PDCs or RTGS commitment messages on WhatsApp (BSA 2023 s.63)",
    ],
    actionPlan:
      "Serve an immediate 7-day Joint Criminal-Cum-Civil Demand Notice invoking BNS s.318 and NI Act s.138, simultaneously instructing counsel to seek urgent Order XXXVIII Rule 5 attachment before stock or receivables are siphoned.",
    outcomeTimeline: "15–30 days for freeze/settlement leverage; 30 days criminal complaint trigger.",
  },
  {
    id: "quality-excuse",
    badge: "Fake Quality Cut",
    title: "Post-Delivery 'High Moisture / Broken % / FFA Acid' Deduction Excuse",
    corridor: "Akola / Latur / Jalgaon / Alwar -> Outstation Dal, Flour & Oil Wholesalers",
    buyerExcuse:
      "After unloading and reselling 70% of the consignment, buyer raises a belated debit note claiming 17% moisture in paddy/rice, >8% broken dal, or high Free Fatty Acid (FFA) in mustard/soybean oil.",
    statutoryCounter:
      "Sale of Goods Act, 1930 Section 42 (Deemed Acceptance — retaining/reselling goods beyond reasonable inspection window bars rejection) + MSMED Act s.15 (15-day maximum written objection window; zero oral/belated deductions).",
    evidenceRequired: [
      "Mill dispatch sealed counter-sample (signed by transporter/broker) + NABL/FSSAI lab slip",
      "Clean Goods Receipt / unloading acknowledgement without contemporaneous quality remark",
      "Buyer's onward GST sale or absence of any rejection notice within 48–72 hours of delivery",
      "Sauda Chitthi specifying tolerance bands (e.g., 14% moisture / 5% broken max)",
    ],
    actionPlan:
      "Reject the belated debit note in writing under Sale of Goods Act s.42, demand immediate release of principal + 3x RBI interest under MSMED s.16, and trigger Income Tax s.43B(h) disallowance warning.",
    outcomeTimeline: "10–21 days to force withdrawal of arbitrary quality cuts.",
  },
  {
    id: "arhatiya-trap",
    badge: "Broker Liability",
    title: "Kacha vs Pakka Arhatiya (Mandi Commission Agent) Finger-Pointing",
    corridor: "All Regional Mandis -> Outstation Commission Agents & Del Credere Brokers",
    buyerExcuse:
      "Buyer claims 'I already settled with the Arhatiya,' while the Mandi Broker claims 'I only earned 1% dalali/commission and bear zero responsibility for the buyer's default.'",
    statutoryCounter:
      "Indian Contract Act Sections 182–238 & Mercantile Custom (Pakka Arhatiya / Del Credere Agent guaranteeing payment or undisclosed principal liability under Section 230).",
    evidenceRequired: [
      "Sauda Chitthi / Broker Slip showing commission structure & payment guarantee terms",
      "WhatsApp/SMS instructions where the Arhatiya directed dispatch and promised 'meri zimmedari'",
      "Historical ledger showing prior payments routed through the Arhatiya's firm account",
      "APMC Mandi Licence number & Firm PAN of both the Arhatiya and ultimate buyer",
    ],
    actionPlan:
      "Issue a Multi-Party Legal Notice naming BOTH the outstation buyer and the Pakka Arhatiya as jointly and severally liable, marking the local APMC Mandi Samiti / Vyapar Mandal conciliation desk where applicable.",
    outcomeTimeline: "12–25 days — brokers settle rapidly to protect mandi trading license.",
  },
  {
    id: "gst-horeca",
    badge: "GST & Modern Trade",
    title: "5% GST Branded vs Unbranded Invoice Dispute & Modern Trade / HoReCa Hold",
    corridor: "Roller Flour / Sugar / Edible Oil Mills -> Supermarket Chains & HoReCa",
    buyerExcuse:
      "Modern Trade / HoReCa buyer withholds ₹12–40 Lakh citing '5% GST branded/pre-packaged HSN mismatch', 'short-weight pouch returns', or '120-day chain credit policy.'",
    statutoryCounter:
      "MSMED Act Section 15 (Overrides any 90/120-day corporate credit policy — 45 days is the absolute statutory ceiling) + Income Tax Act Section 43B(h) (Tax disallowance if unpaid by 31 March / 45 days) + GST Act s.16(2)(aa) ITC reversal leverage.",
    evidenceRequired: [
      "MSME Udyam Certificate (Manufacturing NIC Code 1061/1040/1072 for grain/oil/sugar mills)",
      "GST E-Invoice IRN, GSTR-1 filing proof & signed GRN from Modern Trade warehouse",
      "Tax audit / Section 43B(h) statutory computation sheet showing buyer's 30% tax hit",
      "Contracted Rate Card & PO matching delivered 25kg/50kg/1L SKU weights",
    ],
    actionPlan:
      "Serve a CFO-addressed Statutory Demand Notice highlighting Section 43B(h) tax disallowance + MSMED s.16 3x RBI compound interest and potential GST ITC reversal on unpaid 180-day invoices under Rule 37.",
    outcomeTimeline: "7–18 days for corporate/HoReCa accounts payable release.",
  },
];

export default function GrainMillScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIO_TABS[0].id);
  const activeScenario =
    SCENARIO_TABS.find((t) => t.id === activeTabId) || SCENARIO_TABS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Grain, Pulse and Edible Oil Mill Default Scenarios"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6"
      >
        {SCENARIO_TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(tab.id)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span
                className={`inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-red-50 text-[#DC2626] border border-red-200"
                }`}
              >
                {tab.badge}
              </span>
              <div className="text-xs font-bold leading-snug line-clamp-2">
                {tab.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              {activeScenario.corridor}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              {activeScenario.title}
            </h3>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
            {activeScenario.outcomeTimeline}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 block mb-1.5">
              Debtor / Broker Excuse
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeScenario.buyerExcuse}
            </p>
          </div>
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 block mb-1.5">
              Creditor Statutory Counter
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeScenario.statutoryCounter}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-2.5">
            Mandatory Evidence Packet for This Scenario
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.evidenceRequired.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <span className="w-4 h-4 rounded-full bg-[#DC2626] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 border border-slate-800">
          <span className="text-[10px] font-black uppercase tracking-wider text-red-400 block mb-1">
            Immediate Execution Protocol
          </span>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
            {activeScenario.actionPlan}
          </p>
        </div>
      </div>
    </div>
  );
}
