"use client";

import React, { useState } from "react";
import Link from "next/link";

interface BuyerDefenceTab {
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

const DEFENCES: BuyerDefenceTab[] = [
  {
    id: "quality-dispute-after-15-days",
    tabLabel: "Late Quality Dispute",
    title: "Buyer Raises 'Defective Goods / Poor Service' Excuse After 45 Days",
    cause:
      "When an MSME supplier demands overdue invoice payment or files a reference on the MSME ODR portal, delinquent corporate buyers routinely fabricate backdated quality complaints or allege short supply months after receiving and consuming the goods. They claim the invoice is 'disputed' to evade compound interest.",
    legalBasis:
      "Under Section 2(b) Explanation (i) & (ii) of the MSMED Act, 2006, any objection regarding defects in goods or deficiency in services MUST be raised by the buyer in writing within 15 days from the day of delivery of goods or rendering of services. If no written objection is made within 15 days, the law enforces 'Deemed Acceptance' on the actual day of delivery, and subsequent quality excuses are legally barred.",
    steps: [
      {
        step: "Lock In the 15-Day Silence Window",
        description:
          "Compile your e-Way Bill, signed Delivery Challan (GRN), or service completion email along with the next 15 days of email/WhatsApp logs showing zero written quality objections from the buyer.",
      },
      {
        step: "Cite Section 2(b) Deemed Acceptance in Notice",
        description:
          "In your pre-ODR legal demand notice and ODR portal statement of claim, explicitly plead that statutory 'Deemed Acceptance' crystallized on Day 15, rendering post-facto quality complaints inadmissible.",
      },
      {
        step: "Claim Compound Interest from Appointed Day",
        description:
          "Compute 3× RBI bank rate monthly compound interest starting immediately after the 15-day or 45-day credit period from the delivery date, regardless of when the buyer belatedly raised a dispute.",
      },
    ],
    statutoryRule: "Section 2(b) Explanation (i) & Section 15 MSMED Act, 2006",
  },
  {
    id: "private-arbitration-clause",
    tabLabel: "PO Arbitration Clause",
    title: "Buyer Claims Purchase Order Has an Exclusive Private Arbitration or City Jurisdiction Clause",
    cause:
      "Large corporations and EPC contractors insert standard boilerplate clauses into Purchase Orders (POs) stating that any dispute can only be referred to a private arbitrator appointed by the buyer's Managing Director or exclusively litigated in a distant city's courts.",
    legalBasis:
      "In Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd., (2023) 6 SCC 401, the Supreme Court definitively ruled that Chapter V (Sections 15 to 23) of the MSMED Act, 2006 is a special statute that overrides the general provisions of the Arbitration and Conciliation Act, 1996. A private arbitration agreement or exclusive forum clause in a PO cannot oust the statutory jurisdiction of the MSME ODR / MSEFC located where the supplier is registered.",
    steps: [
      {
        step: "File in Supplier's Home MSEFC / ODR Jurisdiction",
        description:
          "Under Section 18(4) of the MSMED Act, always file your MSME ODR reference in the jurisdiction where you (the supplier) are located, even if the buyer's PO specifies another state.",
      },
      {
        step: "Invoke Section 18(1) Non-Obstante Clause",
        description:
          "Section 18(1) begins with 'Notwithstanding anything contained in any other law for the time being in force' — overriding any private arbitration clause signed by the parties.",
      },
      {
        step: "Attach Mahakali Foods (2023) SC Precedent",
        description:
          "Quote the Supreme Court's 2023 ruling in Mahakali Foods during online mediation and arbitration to defeat any Section 11 or Section 8 jurisdictional objection by the buyer.",
      },
    ],
    statutoryRule: "Section 18(1) & 18(4) MSMED Act + Mahakali Foods (2023) 6 SCC 401",
  },
  {
    id: "udyam-registration-date",
    tabLabel: "Udyam Registration Date",
    title: "Buyer Challenges Eligibility Based on Udyam Registration Date vs Contract Date",
    cause:
      "Many small businesses register on the Udyam portal only after a payment gets stuck. When they file an MSME ODR / Samadhaan complaint, the buyer's lawyers move to dismiss the claim by arguing the supplier was not a registered Micro or Small Enterprise when the contract was executed.",
    legalBasis:
      "In Silpi Industries v. Kerala State Road Transport Corporation, (2021) 18 SCC 790, and Vaishno Enterprises v. Hamilton Medical AG, 2022 SCC OnLine SC 355, the Supreme Court held that to claim benefits under Chapter V of the MSMED Act, the supplier must hold Udyam / EM-II registration on the date of entering into the contract or prior to the supply of goods and services. However, if supplies continued after registration under separate invoices/POs, post-registration supplies remain fully maintainable.",
    steps: [
      {
        step: "Verify Udyam Issue Date Against Invoice Dates",
        description:
          "Check your Udyam Registration Certificate (or legacy Udyog Aadhaar / EM-II) date. Ensure all invoices included in your ODR reference relate to supplies made after your registration date.",
      },
      {
        step: "Segregate Pre-Udyam & Post-Udyam Invoices",
        description:
          "If some invoices pre-date your Udyam certificate and others post-date it, file only the post-Udyam invoices on the MSME ODR portal so the entire reference is not challenged on maintainability.",
      },
      {
        step: "Use Legal Notice + Order 37 Suit for Pre-Udyam Dues",
        description:
          "For invoices raised before Udyam registration, serve a parallel advocate statutory demand notice and pursue a Commercial Court summary suit (Order 37 CPC) or IBC Section 9 notice.",
      },
    ],
    statutoryRule: "Section 2(n) & Section 8 MSMED Act + Silpi Industries (2021) 18 SCC 790",
  },
  {
    id: "90-day-credit-period-clause",
    tabLabel: "60/90-Day Credit Terms",
    title: "Buyer Refuses Interest Citing '90-Day or 120-Day Payment Terms' Printed on PO",
    cause:
      "Corporate buyers frequently force vendors to accept 60-day, 90-day, or 120-day payment cycles on Purchase Orders, or 'Pay-When-Paid' back-to-back clauses in construction and IT subcontracting, and then claim no interest is payable until 90+ days have elapsed.",
    legalBasis:
      "Proviso to Section 15 of the MSMED Act, 2006 imposes an absolute statutory ceiling: 'in no case the period agreed upon between the supplier and the buyer in writing shall exceed forty-five days from the day of acceptance or the day of deemed acceptance.' Any contractual clause specifying 60, 90, or 120 days is void to the extent it exceeds 45 days. Where there is no written agreement on credit days, the statutory deadline drops to 15 days.",
    steps: [
      {
        step: "Determine Whether Credit Term Is in Writing",
        description:
          "If there is no signed contract or PO mentioning payment days, the 'Appointed Day' is the 16th day after delivery. If a written PO mentions 45, 60, or 90 days, the statutory cap fixes the deadline at Day 45.",
      },
      {
        step: "Trigger Section 16 Monthly Compound Interest",
        description:
          "Under Section 16, notwithstanding anything in any agreement, the buyer is liable to pay compound interest with monthly rests at 3× the RBI bank rate from the day immediately following the 15-day or 45-day statutory deadline.",
      },
      {
        step: "Put Buyer's Tax Auditor on Section 43B(h) Notice",
        description:
          "Remind the buyer that under Section 43B(h) of the Income-tax Act, 1961, any MSE invoice unpaid beyond the 15/45-day Section 15 limit crossing March 31 is disallowed as a business expense, adding ~25%–30% tax outflow.",
      },
    ],
    statutoryRule: "Section 15 Proviso & Section 16 MSMED Act + Section 43B(h) Income-tax Act",
  },
];

export default function MsmeOdrStageTabs() {
  const [activeTab, setActiveTab] = useState<string>(DEFENCES[0].id);

  const selectedDefence = DEFENCES.find((d) => d.id === activeTab) || DEFENCES[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Interactive MSME ODR Defence Counter-Matrix
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          How to Defeat the 4 Most Common Buyer Excuses on the MSME ODR Portal
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select the excuse your buyer is using to withhold invoice payment to see the exact MSMED Act provision, Supreme Court ruling, and 3-step counter-strategy:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="MSME Buyer Defence Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {DEFENCES.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedDefence.id}`}
        aria-labelledby={`tab-${selectedDefence.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedDefence.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedDefence.statutoryRule}
          </span>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              The Buyer&apos;s Delay Tactic
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedDefence.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Override &amp; Supreme Court Law
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedDefence.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Counter-Strategy in Your Notice &amp; ODR Filing
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedDefence.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Dispute Action Link */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Need advocate representation for your unpaid MSME invoices?</strong> We draft and serve a formal statutory notice citing Sections 15, 16, 18 &amp; Section 43B(h) within 24 hours.
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            View Notice Charges →
          </Link>
        </div>
      </div>
    </div>
  );
}
