"use client";

import React, { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  badge?: string;
  title: string;
  rbiRule: string;
  description: string;
  statutoryLimit: string;
  actionableSteps: string[];
  sampleGrounds: string;
}

const TABS: TabItem[] = [
  {
    id: "min-balance",
    label: "Minimum Balance (MAB)",
    badge: "RBI Circular 2014 & 2015",
    title: "Non-Maintenance of Minimum Average Balance (MAB / QAB)",
    rbiRule: "RBI/2014-15/308 (DBOD.No.Dir.BC.65/13.03.00/2014-15) & Master Direction DBR.Dir.No.84/13.03.00/2015-16",
    description:
      "Commercial banks often levy aggressive penalties ranging from ₹150 to ₹600 + 18% GST per month when account balances fall below the threshold. Under binding RBI directives, banks are strictly prohibited from turning a savings account balance into a negative sum. Furthermore, prior 30-day notice via SMS/Email must be served before any deduction is effected.",
    statutoryLimit: "Zero Negative Balance Rule: Penal charges can never exceed the shortfall, nor turn account balance negative.",
    actionableSteps: [
      "Obtain your official bank statement highlighting dates when balance breached minimum threshold vs dates when penalty debits were executed.",
      "Check registered mobile number SMS logs and email inbox for the mandatory 30-day prior shortfall intimation notice.",
      "If the bank failed to provide advance intimation, or if fees turned your savings balance into a negative figure (minus balance), file a written grievance citing RBI Circular DBOD.No.Dir.BC.65/13.03.00/2014-15.",
      "Demand an immediate reversal of both the penal charge and the associated GST, followed by account re-regularisation without lien.",
    ],
    sampleGrounds:
      "The opposite party bank illegally debited penal charges for MAB non-maintenance without serving statutory 30-day prior shortfall notice and unlawfully caused the savings account balance to run into negative balance in direct defiance of RBI Master Direction Section 6(b).",
  },
  {
    id: "ecs-bounce",
    label: "ECS / NACH / EMI Bounce",
    badge: "RBI Penal Charges Circular 2023/24",
    title: "Cascading ECS / NACH Debit Bounce Fees & Penal Interest",
    rbiRule: "RBI/2023-24/53 (DOR.MCS.REC.28/01.01.001/2023-24) Fair Practices Code - Penal Charges in Loan Accounts",
    description:
      "When an automated loan EMI or mutual fund SIP bounces due to insufficient funds, customers often face double jeopardy: the lender bank slaps ₹450–₹590 bounce fee, the destination NBFC adds another ₹500 bounce fee, and recurring daily presentation attempts multiply charges by 3x to 5x within a single billing cycle.",
    statutoryLimit: "Penal charges must be reasonable, non-compoundable, and never used as a revenue-enhancement tool under RBI Fair Practices Code.",
    actionableSteps: [
      "Collate transaction logs showing multiple NACH debit representation attempts on consecutive days without customer authorization.",
      "Verify whether the bank or NBFC capitalized penal charges into loan principal or compounded interest on unpaid bounce fees (expressly illegal under 2024 RBI circular).",
      "Draft a formal protest notice demanding waiver of repetitive representations where the underlying mandate was already flagged for presentation failure.",
      "Escalate the systemic gouging to the Banking Ombudsman under Clause 11 of the Reserve Bank - Integrated Ombudsman Scheme, 2021.",
    ],
    sampleGrounds:
      "The lender bank subjected the consumer's account to multiple automated NACH debit retries within a 48-hour window, compounding bounce fees as interest and capitalizing penal charges into the loan ledger in willful violation of RBI Notification DOR.MCS.REC.28/01.01.001/2023-24.",
  },
  {
    id: "hidden-annual",
    label: "Hidden SMS & Card Fees",
    badge: "Master Direction on Debit Cards 2022",
    title: "Unauthorized Annual Maintenance Charges (AMC) & Bundled SMS Fees",
    rbiRule: "RBI/2022-23/92 (DoR.AUT.REC.No.27/24.01.041/2022-23) Master Direction - Credit Card and Debit Card - Issuance and Conduct",
    description:
      "Banks frequently debit annual debit card fees (₹200–₹1,000 + GST) for unsolicited premium cards, international debit variants dispatched without request, or charge quarterly SMS alert fees far exceeding actual telecom cost, without upfront consent at account opening.",
    statutoryLimit: "Express customer consent mandatory before dispatching upgraded card variants or debiting unagreed recurring charges.",
    actionableSteps: [
      "Inspect welcome kit and account opening form (AOF) schedules of charges (SOC) to identify whether the fee was contracted.",
      "Check whether an unsolicited card variant (e.g. Platinum/Signature instead of Classic Rupay) was issued without explicit opt-in.",
      "Issue a formal statutory reversal demand under Section 2(47) Consumer Protection Act, 2019 for unfair trade practices.",
      "Invoke RBI debit card Master Directions requiring unconditional reversal if an unsolicited card is issued and charges levied.",
    ],
    sampleGrounds:
      "The bank unilaterally dispatched an unsolicited premium international debit card variant and levied annual maintenance charges without signed opt-in mandate, amounting to unfair trade practice under Section 2(47) CPA 2019 and RBI Card Regulations.",
  },
  {
    id: "foreclosure",
    label: "Foreclosure / Prepayment Penalty",
    badge: "RBI Floating Rate Directives",
    title: "Illegal Foreclosure Fees on Floating Rate Personal & Home Loans",
    rbiRule: "RBI Circular DBOD.Dir.BC.107/13.03.00/2011-12 & Master Direction FIDD.CO.Plan.BC.08/04.09.01/2021-22",
    description:
      "RBI directives unequivocally forbid banks and NBFCs from charging foreclosure charges or prepayment penalties on all floating-rate term loans sanctioned to individual borrowers (whether for personal, business, or housing purposes). Banks nonetheless disguise these as 'processing or administrative exit fees'.",
    statutoryLimit: "Zero foreclosure penalty permissible on floating-rate individual loans, irrespective of source of prepayment funds.",
    actionableSteps: [
      "Review the loan sanction letter and closure statement showing the exact deduction header (e.g., 'Foreclosure Cess', 'Exit Processing Fee').",
      "Establish borrower status as an individual (non-corporate / non-entity entity) and loan type as floating benchmark linked.",
      "Serve an advocate demand notice invoking binding RBI circulars demanding 100% refund of foreclosure charges with 18% penal interest.",
      "Approach the Consumer Commission (DCDRC) for deficiency of service if the bank fails to reverse within 30 days of notice.",
    ],
    sampleGrounds:
      "The respondent bank unlawfully levied a 2% to 4% foreclosure charge upon early pre-closure of an individual floating-rate loan, directly defying the absolute prohibition enacted under RBI Banking Regulations.",
  },
];

export default function BankChargesProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>("min-balance");
  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-8">
      {/* Header bar */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800">
        <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
          Dispute Category Breakdown
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Identify Your Bank Charge Dispute &amp; Statutory Legal Grounds
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm mt-1">
          Select your deduction type below to inspect applicable RBI guidelines, zero-negative limits, and legal notice triggers.
        </p>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-thin">
        {TABS.map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[160px] sm:min-w-[190px] py-3.5 px-4 text-xs sm:text-sm font-semibold transition-all duration-150 text-center border-b-2 cursor-pointer ${
                isSelected
                  ? "bg-white text-red-600 border-red-600 shadow-sm"
                  : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="mt-1 text-[10px] font-normal text-slate-500">
                    {tab.badge}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      <div className="p-5 sm:p-7 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
          <div>
            <span className="inline-block text-[11px] font-semibold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full mb-1">
              Applicable Mandate
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              {currentTab.title}
            </h4>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
            {currentTab.rbiRule}
          </span>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-5">
          {currentTab.description}
        </p>

        {/* Callout box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-6">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-amber-600 mt-0.5 mr-2.5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="text-xs sm:text-sm font-bold text-amber-900">
                Statutory Limitation Rule
              </p>
              <p className="text-xs sm:text-sm text-amber-800 mt-0.5">
                {currentTab.statutoryLimit}
              </p>
            </div>
          </div>
        </div>

        {/* Action Steps */}
        <div className="mb-6">
          <h5 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            Recommended Actionable Steps to Secure Refund:
          </h5>
          <ol className="space-y-2.5">
            {currentTab.actionableSteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start text-xs sm:text-sm text-slate-700 leading-normal"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs mr-3 shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Sample legal notice grounds */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Advocate Drafted Notice Ground:
          </span>
          <p className="text-xs sm:text-sm font-mono text-slate-800 italic bg-white p-3 rounded-lg border border-slate-200">
            &ldquo;{currentTab.sampleGrounds}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
