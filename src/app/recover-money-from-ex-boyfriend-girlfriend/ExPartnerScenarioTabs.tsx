"use client";

import React, { useState } from "react";
import Link from "next/link";

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
    id: "upi-whatsapp",
    tabLabel: "UPI / Bank + Chats",
    title: "Money Transferred via UPI / IMPS with Explicit WhatsApp Loan Promises",
    cause:
      "You transferred funds directly to your partner's bank account or UPI VPA upon their request for rent, tuition, business emergency, or travel. The chat history contains explicit discussions like 'will return next month', 'need 50k urgently', or 'returning once salary credits'. Post-breakup, they refuse to settle the balance or delay endlessly.",
    legalBasis:
      "This forms an enforceable oral contract under Section 10 of the Indian Contract Act, 1872. Electronic messages and payment logs are primary admissible evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA). WhatsApp acknowledgments of debt operate under Section 18 of the Limitation Act, 1963 to extend the 3-year statutory recovery window.",
    steps: [
      {
        step: "Preserve Unedited Chat Backups & UPI Statements",
        description:
          "Export complete unedited chat threads in .txt and screenshot format including timestamps, mobile numbers, and voice notes. Download certified bank account statements showing debit UTR numbers.",
      },
      {
        step: "Send a Formal Written Balance Confirmation Demand",
        description:
          "Send a calm, single written message on WhatsApp and email outlining the exact principal ledger: dates of transfers, total amount lent, and a 7-day window to confirm repayment schedule before legal escalation.",
      },
      {
        step: "Dispatch Advocate Statutory Demand Notice",
        description:
          "Engage an advocate to issue a formal 15-day statutory legal notice via Registered Speed Post and email under Indian Contract Act and Section 63 BSA, pre-empting frivolous gift claims.",
      },
    ],
    statutoryRule: "Section 10 & 70 Indian Contract Act, 1872 • Section 18 Limitation Act, 1963",
  },
  {
    id: "gift-defense",
    tabLabel: "Ex Claims 'Gift'",
    title: "Ex-Partner Alleges the Funds Were an Unconditional Romantic Gift",
    cause:
      "When confronted for repayment, the ex-partner claims the money was a love token, voluntary romantic contribution, or shared relationship expenditure that does not carry an obligation of reimbursement.",
    legalBasis:
      "Under Section 25(1) of the Indian Contract Act, 1872, agreements without consideration are void unless made in writing, registered, and expressed on account of 'natural love and affection between parties standing in a near relation'. In Indian law, boyfriend-girlfriend or dating partners do not qualify as 'near relations' under Section 25(1). Furthermore, under Section 102 of BSA 2023, once fund transfer is established, the burden shifts to the party asserting an unconditional gift to prove donative intent.",
    steps: [
      {
        step: "Review Transfer Remarks & Bank Descriptions",
        description:
          "Check bank passbook entries or UPI notes. Descriptions like 'loan', 'advance', 'rent help', or specific rounded sums contradict the notion of romantic gifts or pocket money.",
      },
      {
        step: "Extract Chats Disproving Gratuitous Intent",
        description:
          "Collate messages where the partner sought temporary assistance, apologized for repayment delays, or discussed personal economic distress, proving non-gratuitous character under Section 70 Contract Act.",
      },
      {
        step: "Serve Notice Demanding Strict Proof of Gift",
        description:
          "Serve a formal advocate notice calling upon the borrower to repay within 15 days, explicitly rejecting the sham 'gift' contention and putting them on notice of summary recovery under Order XXXVII CPC.",
      },
    ],
    statutoryRule: "Section 25 & 70 Contract Act • Section 101/102 Bharatiya Sakshya Adhiniyam, 2023",
  },
  {
    id: "credit-card-emis",
    tabLabel: "Credit Card / EMIs",
    title: "Paid Partner's Credit Card Bills, Gadget EMIs, or Personal Loans in Your Name",
    cause:
      "During the relationship, you bought laptops, phones, two-wheelers, or financed their personal expenses on your credit cards or EMIs under an understanding that they would reimburse the monthly instalments. Following separation, they retained the asset while leaving you with bank debt.",
    legalBasis:
      "This constitutes unjust enrichment under Section 70 of the Indian Contract Act (obligation of person enjoying benefit of non-gratuitous act) and Section 72 (liability of person to whom money is paid by mistake or coercion). If they induced you to take loans with zero intent to pay, Section 318 of Bharatiya Nyaya Sanhita, 2023 (cheating) may also apply.",
    steps: [
      {
        step: "Audit Invoices, EMI Schedules & Delivery Addresses",
        description:
          "Retrieve e-commerce invoices showing product delivery to the partner's address, paired with monthly credit card statements displaying corresponding EMI debits.",
      },
      {
        step: "Trace Reimbursement Trail",
        description:
          "Compile records of any partial EMI transfers made by the ex previously. Past reimbursement proves the commercial arrangement that the asset was not funded gratuitously.",
      },
      {
        step: "Demand Asset Surrender or Debt Settlement",
        description:
          "Serve an advocate notice demanding either the immediate clearance of the outstanding principal balance with bank interest or the physical return of the financed asset within 15 days.",
      },
    ],
    statutoryRule: "Sections 70 & 72 Indian Contract Act, 1872 • Section 318 Bharatiya Nyaya Sanhita, 2023",
  },
  {
    id: "blocked-ghosting",
    tabLabel: "Blocked & Ghosted",
    title: "Ex-Partner Blocked Your Number, Social Media, and Relocated",
    cause:
      "Upon realizing that you are formally demanding repayment, the ex-partner abruptly blocks your phone number, WhatsApp, Instagram, and LinkedIn, refusing all amicable communication or changing residences.",
    legalBasis:
      "Blocking does not extinguish civil or criminal liability. Under Section 27 of the General Clauses Act, 1897 and Section 114 of BSA 2023, a legal notice sent to the last known residential or permanent parental address via Registered Speed Post constitutes valid 'Deemed Service' even if refused or returned unclaimed.",
    steps: [
      {
        step: "Establish Verifiable Permanent or Workplace Address",
        description:
          "Locate their registered permanent address (Aadhaar/parental home) or active corporate employer workplace where statutory registered post can be served.",
      },
      {
        step: "Issue Speed Post Notice with Indian Post Barcode Tracking",
        description:
          "Dispatch the notice through an advocate via Speed Post with Acknowledgement Due (AD). Retain the postal booking receipt and download the India Post delivery tracking log.",
      },
      {
        step: "Simultaneous Service via Alternate Digital Channels",
        description:
          "Transmit the notice copy to their active email address and work email ID, supported by a Section 63 BSA certificate to establish complete multi-channel service.",
      },
    ],
    statutoryRule: "Section 27 General Clauses Act, 1897 • Section 63 Bharatiya Sakshya Adhiniyam, 2023",
  },
  {
    id: "cash-hand-loan",
    tabLabel: "Cash Hand Loan",
    title: "Money Handed Over in Physical Cash with No Written Agreement",
    cause:
      "You withdrew cash from your bank account or ATM and handed it over in person during a family or personal crisis. There is no signed loan agreement or promissory note.",
    legalBasis:
      "Under Indian law, hand loans given in cash are valid oral contracts under Section 10 of the Contract Act. While cash is harder to substantiate, corroborative proof—such as bank ATM withdrawal slips matching the exact dates, subsequent WhatsApp chats where the ex acknowledges taking cash, and witness statements—is admissible under BSA 2023.",
    steps: [
      {
        step: "Secure Bank Cash Withdrawal Timestamps",
        description:
          "Download your bank statements showing the exact ATM cash debits or branch withdrawals immediately preceding the date the money was handed over.",
      },
      {
        step: "Induce a Digital Written Acknowledgment",
        description:
          "Send a targeted text asking about the cash amount (e.g., 'Out of the ₹1,20,000 cash I gave you in March for your rent, when can you return the first ₹40,000?'). An answer discussing repayment confirms the debt.",
      },
      {
        step: "Legal Notice Asserting Oral Agreement & Corroboration",
        description:
          "Issue a formal advocate notice detailing the cash transaction chronology, withdrawal records, and subsequent text admissions to establish the civil debt.",
      },
    ],
    statutoryRule: "Section 10 Contract Act • Section 62 & 63 Bharatiya Sakshya Adhiniyam, 2023",
  },
];

export default function ExPartnerScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div className="space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full">
          Scenario Navigator
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
          Select Your Ex-Partner Dispute Scenario for Tailored Legal Strategy
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The legal remedy depends heavily on whether payments were made digitally, whether electronic acknowledgments exist, and how the ex-partner responds.
        </p>
      </div>

      {/* Responsive Horizontal Tab Buttons */}
      <div className="flex overflow-x-auto pb-2 gap-2 border-b border-slate-200 scrollbar-thin">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTabId(scenario.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="space-y-5 animate-in fade-in duration-200">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
            {activeScenario.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {activeScenario.cause}
          </p>
        </div>

        {/* Legal Foundation Box */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
            Statutory Framework &amp; Evidentiary Value
          </span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {activeScenario.legalBasis}
          </p>
          <div className="pt-2 text-[11px] font-semibold text-[#DC2626]">
            Applicable Law: {activeScenario.statutoryRule}
          </div>
        </div>

        {/* Step by Step Protocol */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
            Recommended Action Sequence
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-[10px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900">{st.step}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
