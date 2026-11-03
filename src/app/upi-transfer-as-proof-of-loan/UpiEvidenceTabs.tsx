"use client";

import React, { useState } from "react";
import Link from "next/link";

interface EvidenceScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  challenge: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: EvidenceScenarioTab[] = [
  {
    id: "upi-screenshot-only",
    tabLabel: "UPI Slip Only",
    title: "You Have UPI / Bank Statements but No Loan Agreement or Chats",
    challenge:
      "A UPI transaction slip or bank statement proves that money moved from your account to the borrower's account. However, Indian civil law does not presume every money transfer is a loan. Without a written agreement, promissory note, or contemporaneous chat messages, the debtor may falsely argue the transfer was in discharge of an earlier cash liability, business payment, or shared family contribution.",
    legalBasis:
      "Under Section 70 of the Indian Contract Act, 1872, when a person lawfully does anything for another or delivers anything not intending to do so gratuitously, the beneficiary is bound to compensate or restore it. Furthermore, under Supreme Court precedents (K.S. Satyanarayana v. V.R. Narayana Rao), once receipt of consideration is admitted via banking records, the burden shifts to the recipient to demonstrate the legal reason for retaining the funds.",
    steps: [
      {
        step: "Download Certified Bank Statement with 12-Digit UTR",
        description:
          "Do not rely solely on screenshot thumbnails. Download your official bank e-statement showing your account number, recipient's VPA / UPI ID, date, exact amount, and 12-digit Unique Transaction Reference (UTR).",
      },
      {
        step: "Extract Written Acknowledgment via Fresh Message",
        description:
          "Send a calm, specific text message asking for a repayment schedule for the specific amount transferred on that date. Even an apology, request for more time, or silent acknowledgment creates written electronic evidence.",
      },
      {
        step: "Serve Formal Advocate Notice Under Section 70 Contract Act",
        description:
          "An advocate legal notice invokes non-gratuitous delivery and Section 106 BSA (facts especially within knowledge of borrower), requiring them to repay within 15 days or face civil recovery proceedings.",
      },
    ],
    statutoryRule: "Section 70 Indian Contract Act, 1872 & Section 106 BSA, 2023",
  },
  {
    id: "whatsapp-acknowledgment",
    tabLabel: "UPI + WhatsApp",
    title: "UPI Transfer Backed by WhatsApp Messages or Voice Notes",
    challenge:
      "This is the strongest civil recovery scenario. The borrower requested money over WhatsApp, agreed to return it by a specific date, or confirmed receipt with promises to pay back. The primary challenge is ensuring these digital records comply with statutory certification standards so they cannot be dismissed as tampered digital media in court.",
    legalBasis:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act, 1872), electronic records including WhatsApp chats, emails, and call recordings are primary evidence provided they are supported by a mandatory statutory certificate. An admission of liability in writing over WhatsApp also constitutes a valid acknowledgment of debt under Section 18 of the Limitation Act, 1963.",
    steps: [
      {
        step: "Export Complete WhatsApp Chat History (.txt and Media)",
        description:
          "Export the chat without editing. Preserve timestamps, sender phone numbers, delivery receipts (double blue ticks), and accompanying voice notes where the loan terms and repayment promises were discussed.",
      },
      {
        step: "Draft Section 63 BSA Electronic Certificate",
        description:
          "Prepare a formal statutory affidavit under Section 63 BSA identifying the device, mobile number, operating condition, and confirming no hash tampering occurred during extraction.",
      },
      {
        step: "Serve Pre-Litigation Legal Notice Citing Order 37 CPC",
        description:
          "Issue a 15-day statutory demand notice warning the debtor that their written acknowledgment qualifies the debt for an expedited Summary Suit under Order XXXVII of the Code of Civil Procedure.",
      },
    ],
    statutoryRule: "Section 63 BSA 2023, Section 18 Limitation Act & Order 37 CPC",
  },
  {
    id: "gift-defense",
    tabLabel: "Borrower Claims 'Gift'",
    title: "Debtor Falsely Claims the UPI Money Was a 'Gift' or Past Repayment",
    challenge:
      "When confronted, dishonest friends, relatives, or ex-partners often claim: 'You gifted me that money out of natural love and affection' or 'You were returning cash I lent you earlier'. Under Indian law, gifts between non-family members or substantial sums without a registered Gift Deed are subject to intense judicial scrutiny.",
    legalBasis:
      "Under Section 122 and 123 of the Transfer of Property Act, 1882, a gift of movable property must be accompanied by actual delivery with clear intent to transfer ownership gratuitously. Furthermore, Section 25 of the Indian Contract Act voids agreements without consideration unless made on account of natural love and affection between parties standing in a near relation and expressed in registered writing. A casual acquaintance or friend cannot establish a 'gift' of commercial sums.",
    steps: [
      {
        step: "Highlight Absence of Registered Deed or Donative Intent",
        description:
          "Document that no written gift deed exists, no occasion (birthday/wedding) coincided with the transfer, and previous messages discussed mutual financial support or urgent distress.",
      },
      {
        step: "Establish Non-Gratuitous Nature Under Section 70 Contract Act",
        description:
          "Demonstrate in the legal demand that the transfer was made as temporary bridge assistance, not an unconditional gift, making retention of funds unjust enrichment.",
      },
      {
        step: "Serve Advocate Notice Demanding Proof of Gift or Past Debt",
        description:
          "The legal notice formally calls upon the debtor to produce proof of the alleged earlier debt or gift declaration within 15 days, demolishing their fabricated defense before court filing.",
      },
    ],
    statutoryRule: "Section 25 Contract Act, Section 122 Transfer of Property Act & Section 106 BSA",
  },
  {
    id: "part-repayment",
    tabLabel: "Part Repayment Paid",
    title: "Borrower Made a Small Partial Repayment via UPI (Clock Reset)",
    challenge:
      "The loan was given more than 2 years ago, and you fear the 3-year statutory limitation period is expiring. However, the borrower recently transferred ₹2,000, ₹5,000, or a fraction of the principal via UPI with a promise to settle the rest later.",
    legalBasis:
      "Under Section 19 of the Limitation Act, 1963, where payment on account of a debt is made before the expiration of the prescribed limitation period by the person liable to pay, a fresh period of 3 years of limitation shall be computed from the time when the payment was made. An inward UPI credit linked to the borrower's account serves as indisputable digital proof of part-payment.",
    steps: [
      {
        step: "Isolate the Inward UPI Credit in Bank Statement",
        description:
          "Extract the bank statement showing the borrower's UPI VPA and UTR for the partial payment. Match it against your communication where they agreed to pay installments.",
      },
      {
        step: "Calculate the Fresh 3-Year Limitation Expiry",
        description:
          "The 36-month limitation countdown does not run from the original lending date; under Section 19, it restarts entirely from the timestamp of the partial repayment transaction.",
      },
      {
        step: "Issue Advocate Notice for Balance Principal & Statutory Interest",
        description:
          "Serve a demand notice demanding the outstanding balance plus 6% to 18% interest under the Interest Act, 1978, citing the Section 19 limitation revival.",
      },
    ],
    statutoryRule: "Section 19 Limitation Act, 1963 & Section 3 Interest Act, 1978",
  },
];

export default function UpiEvidenceTabs() {
  const [activeTab, setActiveTab] = useState<string>("upi-screenshot-only");
  const selected = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-6">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Selected Tab Content */}
      <div className="space-y-4 animate-in fade-in duration-150">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
            {selected.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mt-2">
            {selected.title}
          </h3>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-1">
              The Legal Problem:
            </strong>
            <p className="leading-relaxed">{selected.challenge}</p>
          </div>

          <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200 text-slate-800">
            <strong className="text-blue-900 font-bold block mb-1">
              Statutory Basis &amp; Judicial Position:
            </strong>
            <p className="leading-relaxed text-blue-950">{selected.legalBasis}</p>
          </div>
        </div>

        <div className="pt-2">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
            Recommended Action Playbook:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selected.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center mb-2">
                    {i + 1}
                  </span>
                  <p className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                    {st.step}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
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
