"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  context: string;
  debtorPretext: string;
  statutoryRemedy: string;
  actionPlan: string[];
  keyRisk: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "grn-freeze",
    tabLabel: "Approved GRN Frozen",
    badge: "Operational Bottleneck",
    title: "Hospital Store GRN Acknowledged, but Accounts Payable Deliberately Freezes Disbursement",
    context:
      "Surgical disposable manufacturer delivers 25,000 IV cannulas, sterile gloves, and suture packs. Hospital Central Store or CSSD accepts goods, inspects carton counts, and issues an official Goods Received Note (GRN) or stamped Delivery Challan. However, the Finance/Accounts Department withholds payment for 120–180+ days, claiming internal ERP migration, unapproved management signatories, or pending doctor consumption clearance.",
    debtorPretext:
      "\"Our central accounts audit hasn't cleared the invoice batch yet. Our finance committee meets next month; please continue supplies to avoid hospital stock-outs.\"",
    statutoryRemedy:
      "Under Section 42 of the Sale of Goods Act, 1930, an executed GRN without written rejection within the inspection window is conclusive deemed acceptance. Furthermore, under Section 15 of the MSMED Act, 2006, the statutory payment clock runs from the 'day of acceptance' (the GRN date). Irrespective of internal accounts routing, payment cannot be deferred beyond 45 days. Section 16 mandates monthly compounding interest at 3x the RBI Bank Rate.",
    actionPlan: [
      "Obtain certified hard copies or portal screenshots of the approved GRN with storekeeper stamp and serial number.",
      "Issue an Advocate Statutory Notice on Letterhead demanding release within 10 days, citing MSMED Act s.15 & s.16 compound interest.",
      "Attach Udyam Registration Certificate and invoke Section 43B(h) Income Tax disallowance alert addressed to the Chief Financial Officer and statutory auditors.",
      "File a formal Samadhaan application before the State MSEFC if the hospital fails to credit funds within the 10-day notice period.",
    ],
    keyRisk:
      "Continuing fresh deliveries on verbal promises while older approved GRNs remain unpaid beyond 90 days compromises working capital and weakens commercial leverage.",
  },
  {
    id: "medical-gas",
    tabLabel: "Medical Gas Arrears",
    badge: "Critical Life-Support Arrears",
    title: "Liquid Medical Oxygen (LMO) & Cylinder Arrears: Hospital Uses Public Health Leverage",
    context:
      "A medical gas supplier maintains cryogenic storage tanks (VIE) and supplies daily bulk liquid medical oxygen (LMO) and high-pressure manifold gas cylinders (Nitrous Oxide, Carbon Dioxide, Medical Air) to an intensive care tertiary hospital. The hospital accumulates ₹60L–₹2Cr in outstanding arrears but threatens the supplier with police complaints under the Essential Services Maintenance Act (ESMA) or criminal negligence if supplies are halted.",
    debtorPretext:
      "\"Liquid oxygen is a critical life-support medicine. You cannot legally disconnect cryogenic tanks or stop manifold deliveries. We will pay when insurance claims clear.\"",
    statutoryRemedy:
      "Hospitals cannot weaponize patient safety to force involuntary credit from private suppliers. The Supreme Court has repeatedly clarified that while hospitals must preserve life, they remain commercially bound to contract terms and statutory payment obligations. The supplier can issue a structured 'Commercial Supply Transition Notice' giving 15-day advance intimation to the District Magistrate (DM), Chief Medical Officer (CMO), and Hospital Medical Superintendent, placing full responsibility for emergency oxygen replenishment on hospital administration while initiating summary recovery under Order XXXVII CPC or MSMED Act.",
    actionPlan: [
      "Collate cryogenic telemetry data, weighbridge slips, PESO (Petroleum and Explosives Safety Organization) manifold testing logs, and signed delivery receipts.",
      "Issue an urgent Advocate Legal Intimation to the Hospital Board with formal copies marked to the District Administration and State Drugs Controller.",
      "Provide a precise 15-day cure window to discharge overdue arrears or face formal suspension of non-emergency supply schedules.",
      "Initiate Commercial Summary Suit (Order XXXVII CPC) with an application for interim attachment of the hospital's private insurance and TPA receivables under Order XXXVIII Rule 5.",
    ],
    keyRisk:
      "Abrupt unannounced disconnection without administrative notice can invite regulatory blowback; formal advance statutory notification neutralizes hospital bad-faith tactics.",
  },
  {
    id: "rate-contract-emd",
    tabLabel: "Rate Contract & EMD",
    badge: "Deposit & Deduction Dispute",
    title: "Hospital Refuses to Refund Security Deposit / EMD After Rate Contract Expiry",
    context:
      "A medical consumables distributor completes a 2-year hospital supply rate contract for surgical linen, bedsheets, gowns, and gauze bandages. The hospital administration retains ₹15 Lakhs in Earnest Money Deposit (EMD) or Performance Bank Guarantee (PBG) margin money. Even after contract expiration and successful audit of all delivered lots, the hospital indefinitely defers deposit refunds, alleging arbitrary retrospective penalties or phantom patient complaints.",
    debtorPretext:
      "\"Our quality control committee is reviewing linen shrinkage rates from 18 months ago. Security deposits are only released once the annual audit closes.\"",
    statutoryRemedy:
      "Retaining security deposits after contract fulfillment without a quantified, contemporaneous, and contractually valid liquidated damages notice violates Section 74 of the Indian Contract Act, 1872. In the absence of actual proved loss, security deposit retention constitutes unlawful enrichment. Under the MSMED Act, 2006, deposits linked to goods supply fall within the definition of operational dues subject to statutory adjudication.",
    actionPlan: [
      "Collate contract completion certificates, no-objection clearances from the laundry/housekeeping department, and expiry date of the rate contract.",
      "Issue a formal Demand Notice for Immediate Release of Security Deposit with 18% p.a. interest under the Indian Contract Act and MSMED Act.",
      "Challenge retrospective quality penalties by demanding contemporaneous laboratory test reports; demonstrate absence of any timely contractual dispute.",
      "Serve Section 8 Demand Notice under the Insolvency and Bankruptcy Code (IBC) if the hospital is a corporate entity and total defaulted dues exceed ₹1.00 Crore.",
    ],
    keyRisk:
      "Allowing performance bank guarantees (PBGs) to remain live after contract expiry enables bad-faith hospitals to unilaterally encash them during dispute escalation.",
  },
  {
    id: "corporate-chain-ma",
    tabLabel: "Corporate Hospital M&A",
    badge: "Acquisition & Restructuring",
    title: "Corporate Healthcare Chain Acquires Local Hospital and Disavows Vendor Liabilities",
    context:
      "A large multi-specialty healthcare corporate chain acquires a mid-sized 150-bed private hospital. The vendor has ₹35 Lakhs in unpaid surgical consumable invoices supplied to the erstwhile management. Post-acquisition, the new corporate management takes over all assets, operational beds, and billing streams but informs vendors that historical debts belong to the old promoter entity and must be pursued separately.",
    debtorPretext:
      "\"We acquired only the business assets under a Business Transfer Agreement (BTA). Vendor liabilities remain with the previous promoter company.\"",
    statutoryRemedy:
      "Under corporate law principles, transferee liability depends on the transaction architecture (Slump Sale, BTA, or Amalgamation Scheme). If the acquiring company assumed ongoing running operations, hospital goodwill, and patient inventory under an ongoing-concern principle, courts can pierce the corporate veil or hold the operating hospital company liable. Moreover, if the vendor's GST invoices reflect the hospital's registered clinical entity, the operating unit cannot evade statutory claims under MSMED Act or Order XXXVII CPC.",
    actionPlan: [
      "Review the public MCA filings, RoC registers, and NCLT approval orders for the corporate takeover, slump sale, or amalgamation scheme.",
      "Address a dual-entity Legal Notice jointly naming both the erstwhile promoters and the new corporate parent hospital chain.",
      "Notify the corporate chain's statutory auditors regarding unprovisioned contingent liabilities under Section 43B(h) of the Income Tax Act.",
      "Institute proceedings before the Commercial Court or NCLT, seeking joint and several decrees against both operating and holding entities.",
    ],
    keyRisk:
      "Signing fresh vendor empaneled terms with the new management without a written acknowledgment of legacy receivables can extinguish vendor claims.",
  },
];

export default function SurgicalConsumablesScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Tab Navigation Header */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto scrollbar-none">
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-colors border-b-2 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              <span>{item.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200">
            {current.badge}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            Clinical Supply Failure Mode #{SCENARIOS.findIndex((s) => s.id === current.id) + 1}
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {current.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {current.context}
          </p>
        </div>

        {/* Debtor Pretext Quote Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl">
          <p className="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1">
            Common Hospital Administrative Pretext
          </p>
          <p className="text-xs sm:text-sm text-amber-950 italic leading-relaxed font-serif">
            {current.debtorPretext}
          </p>
        </div>

        {/* Statutory Remedy */}
        <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-4 sm:p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Statutory Creditor Remedy &amp; Legal Shield
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
            {current.statutoryRemedy}
          </p>
        </div>

        {/* Action Plan */}
        <div>
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
            Recommended Operational Protocol
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {current.actionPlan.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-[10px] shrink-0 flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Risk Warning */}
        <div className="p-3.5 rounded-xl bg-red-50/70 border border-red-200 text-xs text-red-900 flex items-start gap-2.5">
          <svg
            className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div>
            <span className="font-bold">Critical Strategic Caveat: </span>
            {current.keyRisk}
          </div>
        </div>
      </div>
    </div>
  );
}
