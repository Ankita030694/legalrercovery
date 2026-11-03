"use client";

import React, { useState } from "react";
import Link from "next/link";

interface InstrumentTab {
  id: string;
  tabLabel: string;
  title: string;
  eligibility: string;
  legalBasis: string;
  checklist: string[];
  statutoryRule: string;
}

const INSTRUMENTS: InstrumentTab[] = [
  {
    id: "promissory-notes",
    tabLabel: "Promissory Notes",
    title: "Promissory Notes (On-Demand / Time Dues under Section 4 NI Act)",
    eligibility:
      "A duly executed Promissory Note (Demand Pro-Note) where the borrower unconditionally promises in writing to repay a fixed sum with or without interest. The note must bear adequate revenue stamp (typically ₹1 under the Indian Stamp Act, or state-specific rate) and the debtor's signature across the stamp.",
    legalBasis:
      "Order XXXVII Rule 1(2)(a) explicitly designates suits based upon bills of exchange, hundies, and promissory notes. Under Section 118 of the Negotiable Instruments Act, 1881, the court presumes consideration unless the defendant produces cogent contrary evidence. In the absence of substantial triable defense, the court must decree the suit forthwith.",
    checklist: [
      "Original signed Promissory Note bearing cancelled revenue stamp.",
      "Proof of consideration passing (bank statement, NEFT/RTGS/UPI ledger or cash receipt).",
      "Statutory pre-suit advocate demand notice calling upon payment.",
      "Postal tracking report proving delivery of demand notice.",
    ],
    statutoryRule: "Order XXXVII Rule 1(2)(a) CPC & Section 4 Negotiable Instruments Act 1881",
  },
  {
    id: "bounced-cheques",
    tabLabel: "Cheques & Bills",
    title: "Dishonoured Cheques, Bills of Exchange & Hundis",
    eligibility:
      "Any cheque issued towards discharge of an existing debt that was returned unpaid (dishonoured for insufficient funds, account closed, or payment stopped by drawer). While criminal proceedings proceed under Section 138 NI Act, Order 37 provides a parallel civil track to immediately attach assets and obtain a money decree.",
    legalBasis:
      "Under Order XXXVII Rule 1(2)(a), suits upon dishonoured cheques qualify squarely as summary suits. A criminal complaint under Section 138 NI Act penalizes the drawer, but does not guarantee automatic civil recovery of the full claim with commercial interest. Filing an Order 37 summary suit in parallel allows the creditor to secure an executable money decree without waiting for lengthy criminal trials.",
    checklist: [
      "Original returned cheque and Bank Memo citing reason for return.",
      "Statutory demand notice under Section 138(b) NI Act dispatched within 30 days.",
      "Proof of consideration (tax invoice, loan agreement, or ledger acknowledgment).",
      "Calculated interest from the date of presentation to filing date.",
    ],
    statutoryRule: "Order XXXVII Rule 1(2)(a) CPC & Section 138 Negotiable Instruments Act 1881",
  },
  {
    id: "written-contracts",
    tabLabel: "Written Contracts",
    title: "Written Agreements & Contracts for Liquidated Money Debts",
    eligibility:
      "A written loan agreement, Memorandum of Understanding (MoU), vendor contract, or acknowledged settlement agreement where the defendant agreed to pay a liquidated (definite and fixed) sum of money. The clause must not be an unliquidated penalty or speculative damage calculation.",
    legalBasis:
      "Order XXXVII Rule 1(2)(b)(i) extends summary procedure to suits where the plaintiff seeks only to recover a debt or liquidated demand in money payable by the defendant, with or without interest, arising on a written contract. Courts have ruled that signed acknowledgment receipts, confirmed email settlement letters, and formal loan agreements satisfy this threshold.",
    checklist: [
      "Signed written agreement, MoU, or formal acknowledgment of debt.",
      "Bank statement showing loan disbursal or invoice delivery.",
      "Clear calculation showing the exact principal amount and contracted interest rate.",
      "Explicit recital showing no unresolved counter-obligations or speculative penalties.",
    ],
    statutoryRule: "Order XXXVII Rule 1(2)(b)(i) Code of Civil Procedure 1908",
  },
  {
    id: "guarantees",
    tabLabel: "Guarantees",
    title: "Written Guarantees & Co-Signer Surety Undertakings",
    eligibility:
      "A signed personal or corporate guarantee where a third party undertook to repay the debt if the principal debtor defaulted. Order 37 allows the creditor to file a summary suit directly against both the borrower and the guarantor jointly, or against the guarantor alone.",
    legalBasis:
      "Order XXXVII Rule 1(2)(b)(ii) expressly covers suits where the claim is on an enactment (other than penalty) or on a guarantee, where the claim against the principal is in respect of a debt or liquidated demand only. Under Section 128 of the Indian Contract Act, 1872, the liability of the surety is co-extensive with that of the principal debtor unless the contract stipulates otherwise.",
    checklist: [
      "Deed of Guarantee or written personal guarantee agreement.",
      "Primary loan instrument or contract evidencing the underlying liquidated debt.",
      "Default notice served upon both the borrower and the guarantor.",
      "Proof that no variation was made to terms without the guarantor's written consent.",
    ],
    statutoryRule: "Order XXXVII Rule 1(2)(b)(ii) CPC & Section 128 Indian Contract Act 1872",
  },
  {
    id: "electronic-acknowledgments",
    tabLabel: "WhatsApp / Electronic Acknowledgment",
    title: "Written Electronic Debt Acknowledgments via WhatsApp, Email & UPI",
    eligibility:
      "When a loan was disbursed digitally via UPI or IMPS/NEFT, and the debtor admitted the liability in writing over WhatsApp chats, SMS, or email (e.g., 'I will repay your ₹5 lakh by 31st December'). Under the Limitation Act and new evidence laws, this qualifies as a written acknowledgment of debt.",
    legalBasis:
      "Under Section 18 of the Limitation Act, 1963, a written acknowledgment of liability signed or transmitted by the party restarts a fresh 3-year limitation clock. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records including chat transcripts and email printouts are primary electronic evidence. High Courts have held that unambiguous digital admissions of a liquidated debt satisfy Order XXXVII standards.",
    checklist: [
      "Complete unbroken WhatsApp or email chat export showing debtor's acknowledgment.",
      "Bank statement reflecting exact UPI/IMPS debit matching the acknowledged amount.",
      "Section 63 BSA electronic evidence certificate verifying system integrity.",
      "Pre-suit advocate legal notice demanding payment within 15 days.",
    ],
    statutoryRule: "Section 18 Limitation Act 1963 & Section 63 Bharatiya Sakshya Adhiniyam 2023",
  },
];

export default function Order37DocumentTabs() {
  const [activeTab, setActiveTab] = useState<string>(INSTRUMENTS[0].id);
  const current = INSTRUMENTS.find((item) => item.id === activeTab) || INSTRUMENTS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-100 scrollbar-thin">
        {INSTRUMENTS.map((inst) => {
          const isActive = inst.id === activeTab;
          return (
            <button
              key={inst.id}
              type="button"
              onClick={() => setActiveTab(inst.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#1E293B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {inst.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="mt-5 space-y-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200/60 inline-block mb-2">
            {current.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
            <strong className="text-slate-900 block font-bold mb-1">
              Instrument Eligibility &amp; Legal Threshold:
            </strong>
            <p>{current.eligibility}</p>
          </div>

          <div>
            <strong className="text-slate-900 block font-bold mb-1">
              Order XXXVII CPC Applicability &amp; Judicial Presumption:
            </strong>
            <p>{current.legalBasis}</p>
          </div>
        </div>

        {/* Evidentiary Checklist */}
        <div className="pt-2">
          <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-2">
            Essential Evidentiary Enclosures for the Plaint:
          </strong>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {current.checklist.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200/60"
              >
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100 mt-4">
          <span>
            Need help checking your loan document? View our guide on{" "}
            <Link
              href="/legal-notice-to-recovery-my-loan-from-friend"
              className="text-blue-700 underline font-semibold"
            >
              friendly loan recovery
            </Link>{" "}
            or draft a pre-suit demand.
          </span>
        </div>
      </div>
    </div>
  );
}
