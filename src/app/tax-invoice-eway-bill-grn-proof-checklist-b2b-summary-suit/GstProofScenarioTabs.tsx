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
    id: "missing-physical-grn",
    tabLabel: "Missing Stamped GRN",
    title: "Driver Lost Gate-Stamped Delivery Challan; Buyer Denies Material Inward",
    cause:
      "In heavy machinery, fabrication, and auto-ancillary dispatch, transport drivers routinely lose physical signed challans, or factory security staff collect goods without handing back an official Goods Receipt Note (GRN) stamp. Months later, the buyer's procurement team exploits this paperwork lapse to claim goods were never received.",
    legalBasis:
      "Under Section 16(2)(b) of the CGST Act, 2017, a registered person is statutorily prohibited from taking Input Tax Credit unless they have 'received the goods'. Availing ITC in GSTR-3B against the supplier's GSTR-1 invoice establishes an unshakeable statutory admission of receipt under Section 115 of the Indian Evidence Act (now Section 121 Bharatiya Sakshya Adhiniyam, 2023). A buyer cannot claim tax set-off from the sovereign while denying delivery to the supplier.",
    steps: [
      {
        step: "Extract GSTR-2B & Invoice Management System (IMS) Logs",
        description:
          "Download official GST portal logs showing the buyer accepted or did not reject the tax invoice in their GSTR-2B inward statement.",
      },
      {
        step: "Retrieve NIC E-Way Bill Part-B & FASTag Toll Traversal",
        description:
          "Pull the vehicle registration number linked to E-Way Bill Part-B and procure toll plaza RFID crossing timestamps proving the truck entered the buyer's factory industrial zone.",
      },
      {
        step: "Serve Dual-Trigger Estoppel Notice",
        description:
          "Advocate serves formal demand intimating that denying delivery while claiming ITC constitutes tax fraud under CGST Section 122/132, subjecting the buyer to GST audit reporting.",
      },
    ],
    statutoryRule: "CGST Act s.16(2)(b), BSA 2023 s.121 (Estoppel) & s.63 Electronic Proof",
  },
  {
    id: "itc-claimed-leave-to-defend",
    tabLabel: "Order XXXVII Sham Defense",
    title: "Buyer Files Leave to Defend in Summary Suit Alleging 'No Proof of Dispatch'",
    cause:
      "When the creditor files an Order XXXVII Summary Suit for liquidated debt based on unpaid tax invoices, the buyer's litigation counsel files an application for Leave to Defend alleging that delivery is a triable issue requiring a prolonged 5-year civil trial because no signed delivery slip is on record.",
    legalBasis:
      "Under IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017) and Delhi High Court summary suit jurisprudence, leave to defend must be refused or conditioned on 100% pre-deposit if the defense is a moonshine or sham. When the creditor demonstrates that the buyer took ITC credit in GSTR-3B, the court holds that delivery stands admitted by conduct and statutory return. Leave to defend is denied and summary judgment is pronounced.",
    steps: [
      {
        step: "File Order XXXVII Summons for Judgment with Form 26AS/GST Affidavit",
        description:
          "Accompany the summary plaint with an affidavit annexing the buyer's GSTIN filings, GSTR-1 vs GSTR-2B matching table, and Section 63 BSA electronic certificate.",
      },
      {
        step: "Cross-Examine Buyer on Tax Fraud vs Commercial Denial",
        description:
          "Force the defendant in court to state whether their GST filing was fraudulent under CGST Section 74 or whether their denial of delivery is false. High Courts hold this dilemma eliminates any triable issue.",
      },
      {
        step: "Obtain Immediate Summary Decree or 100% Cash Deposit",
        description:
          "The Commercial Court either passes a summary money decree under Order XXXVII Rule 3(6) or mandates 100% deposit of principal in the court registry.",
      },
    ],
    statutoryRule: "CPC Order XXXVII Rules 2 & 3, Commercial Courts Act 2015 s.2(1)(c)(i)",
  },
  {
    id: "transshipment-vehicle-breakdown",
    tabLabel: "Transshipment / Breakdown",
    title: "Truck Broke Down En Route; Transshipped to Second Vehicle Without E-Way Bill Update",
    cause:
      "During long-haul transport across industrial corridors (e.g., Delhi-NCR to Pune or Ahmedabad), the original carrier vehicle suffered axle breakdown. The transporter moved machinery components into a replacement truck without updating Part-B of the E-Way Bill before delivery.",
    legalBasis:
      "While failure to update Part-B creates a technical GST transit infraction (punishable under CGST Section 129), it does not extinguish the commercial validity of delivery if corroborated by secondary proof. Transporter Lorry Receipts (LR), driver consignment notes, weighbridge tickets at destination, and subsequent GSTR-3B tax offset by the buyer confirm delivery under Section 39 Sale of Goods Act, 1930.",
    steps: [
      {
        step: "Procure Transporter Transshipment Memo & Bilateral LR",
        description:
          "Obtain the carrier's breakdown incident report, transshipment challan, and destination weighbridge slip matching exact gross weight with invoice specs.",
      },
      {
        step: "Corroborate Buyer's Factory Weighbridge or Security Entry",
        description:
          "Subpoena or request destination industrial estate security logs and buyer factory gate register via discovery under Order XI CPC.",
      },
      {
        step: "Reconcile with GSTR-2B Deemed Acceptance",
        description:
          "Highlight that the buyer never raised a debit note or GST IMS rejection within the statutory month, establishing full commercial acceptance under SOGA Section 42.",
      },
    ],
    statutoryRule: "Sale of Goods Act 1930 ss.39 & 42, CGST Rule 138(5) & Order XI CPC",
  },
  {
    id: "tds-deducted-belated-dispute",
    tabLabel: "Section 194Q TDS + Debit Note",
    title: "Buyer Deducted Section 194Q TDS on Invoice but Fabricated Belated Quality Rejection",
    cause:
      "Corporate buyers with turnover exceeding ₹10 Crore deduct 0.1% TDS on purchase of goods under Income Tax Section 194Q. After deducting TDS and reflecting it in Form 26AS, the buyer withheld the 100% invoice balance and issued an arbitrary debit note 180 days later.",
    legalBasis:
      "Deduction of TDS under Section 194Q is a conclusive statutory acknowledgment of debt payable under Section 18 of the Limitation Act, 1963. A debtor cannot credit tax to the Central Government under Section 194Q on an invoice it simultaneously claims is invalid or rejected. Furthermore, under Section 42 & 59 of the Sale of Goods Act, retention without timely rejection bars repudiation.",
    steps: [
      {
        step: "Extract Form 26AS / AIS Tax Deduction Record",
        description:
          "Print Form 26AS verifying that the buyer credited TDS against your PAN for the exact disputed invoice amount.",
      },
      {
        step: "Invoke Limitation Act Section 18 Reset",
        description:
          "TDS deduction resets the 3-year commercial limitation clock from the date of TDS filing / TRACES certificate issuance.",
      },
      {
        step: "Strike Out Arbitrary Debit Note Under SOGA Section 59",
        description:
          "Serve legal notice rejecting the debit note as legally ineffective without bilateral credit note issuance under CGST Section 34.",
      },
    ],
    statutoryRule: "Income Tax Act s.194Q, Limitation Act s.18, SOGA 1930 s.42 & CGST s.34",
  },
];

export default function GstProofScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
          Interactive Litigation Scenarios
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2">
          Resolving Delivery Disputes When Physical Documentation Is Challenged
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Select a commercial delivery bottleneck to inspect the exact statutory countermeasure, GST portal evidentiary trail, and procedural litigation rail.
        </p>
      </div>

      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="space-y-5">
        <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
            {activeScenario.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800">Commercial Failure Mode: </strong>
            {activeScenario.cause}
          </p>
        </div>

        <div className="bg-amber-50/70 rounded-xl p-4 sm:p-5 border border-amber-200 text-amber-900">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
            Statutory Estoppel Doctrine &amp; Legal Foundation
          </p>
          <p className="text-xs sm:text-sm leading-relaxed">
            {activeScenario.legalBasis}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Evidentiary SOP &amp; Court Escalation Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold inline-flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 mb-1">{st.step}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium">Controlling Statutory Rules:</span>
          <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
            {activeScenario.statutoryRule}
          </span>
        </div>
      </div>
    </div>
  );
}
