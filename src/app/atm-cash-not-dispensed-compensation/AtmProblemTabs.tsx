"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
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

const ATM_PROBLEMS: ProblemTab[] = [
  {
    id: "debited-no-cash",
    tabLabel: "No Cash Dispensed",
    title: "Account Debited in Full but ATM Machine Failed to Dispense Any Cash",
    cause:
      "A mechanical jam in the cash dispenser cassette, communication timeout between the bank switch and the ATM terminal, or sudden power interruption causes the card-issuing bank's core banking solution (CBS) to record a successful debit while the physical cash shutter never opened.",
    legalBasis:
      "Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 on Harmonisation of Turn Around Time (TAT), customer accounts debited without cash disbursement must be pro-actively reversed within T + 5 calendar days. Failure to credit funds within T + 5 triggers an automatic statutory penalty of ₹100 per day payable to the customer without any formal request.",
    steps: [
      {
        step: "Collect Physical Advice or Capture Screen Timestamp",
        description:
          "Save the printed transaction slip or photograph the ATM screen displaying 'Transaction Failed' / 'Unable to Dispense'. Note the exact ATM Terminal ID and location printed on the machine.",
      },
      {
        step: "Lodge Immediate Dispute Ticket with Card-Issuing Bank",
        description:
          "Call your bank customer care or visit the nearest branch within 24 hours. Request a formal Complaint Reference Number and ensure the dispute is categorized under 'Failed ATM Cash Withdrawal'.",
      },
      {
        step: "Demand Electronic Journal (EJ) & Cash Dispenser Counter Logs",
        description:
          "If the bank delays refund beyond T + 5 days, serve a formal written grievance demanding the machine's EJ log, switch reconciliation log, and cash purge bin audit report.",
      },
    ],
    statutoryRule: "RBI Harmonisation Circular 2019 Item 1; Section 2(11) CPA 2019",
  },
  {
    id: "partial-dispense",
    tabLabel: "Partial Cash Given",
    title: "ATM Dispensed Only Part of Requested Cash but Debited Entire Amount",
    cause:
      "Occurs when an ATM cassette runs out of specific denominations (e.g. ₹500 notes) mid-count or notes get jammed in the transport belt. For instance, a customer requests ₹10,000, receives ₹4,000, but the bank account statement reflects a full debit of ₹10,000.",
    legalBasis:
      "Under the RBI Failed Transaction Harmonisation framework, short-dispensation of currency notes is treated on par with non-dispensation. The card-issuing bank is statutorily mandated to reconcile the physical cash balance of the ATM machine, credit the difference (₹6,000) within T + 5 calendar days, and pay ₹100/day compensation for every subsequent day of delay.",
    steps: [
      {
        step: "Count Dispensed Notes in Front of ATM CCTV Camera",
        description:
          "Immediately hold up and count the received banknotes clearly before the ATM overhead security camera. Retain all currency notes and the printed slip indicating transaction figures.",
      },
      {
        step: "Register Short-Dispensation Ticket Immediately",
        description:
          "Notify your bank immediately specifying: Amount Requested, Amount Received, and Shortage Amount. Obtain a formal complaint tracking number.",
      },
      {
        step: "Insist on ATM Cassette Physical Reconciliation Audit",
        description:
          "The acquiring bank must conduct a physical vault balance audit. The excess currency found in the reject bin or cassette counter must match your claimed shortage exactly.",
      },
    ],
    statutoryRule: "RBI Circular DPSS.CO.PD No.629/2019-20; NCDRC Precedents on Short Dispensation",
  },
  {
    id: "off-us-atm",
    tabLabel: "Other Bank's ATM",
    title: "Transaction Failed at an 'Off-Us' or White-Label ATM (Tata Indicash, Hitachi, etc.)",
    cause:
      "When using a third-party bank ATM or White-Label ATM, the transaction passes through three entities: Card-Issuing Bank, National Financial Switch (NFS / NPCI), and the Acquiring Bank. Reconciliation latency across these inter-bank rails frequently causes delayed credits.",
    legalBasis:
      "Under RBI regulations, the customer has privity of contract strictly with their own card-issuing bank. Your bank cannot evade liability by telling you to contact the ATM-owning bank or third-party vendor. The card-issuing bank is solely responsible for initiating the chargeback via NPCI and reimbursing you within T + 5 calendar days.",
    steps: [
      {
        step: "Address Your Complaint Exclusively to Your Own Bank",
        description:
          "Never waste time running to the other bank branch. File the dispute exclusively with the bank that issued your debit or credit card, quoting the ATM location and owning bank name.",
      },
      {
        step: "Track NPCI Chargeback Raising Timeline",
        description:
          "Your bank must initiate a chargeback on the National Financial Switch within T + 1 days. Ask your branch manager for the NPCI Dispute Reference Number.",
      },
      {
        step: "Enforce Card-Issuing Bank's Liability for ₹100/Day Delay",
        description:
          "Even if the acquiring bank delays settlement, your bank must credit your account on or before Day T + 5 or commence paying ₹100/day penal compensation directly.",
      },
    ],
    statutoryRule: "RBI Master Direction on ATM Operations & NPCI NFS Dispute Resolution Rules",
  },
  {
    id: "bank-claims-successful",
    tabLabel: "Bank Denies Claim",
    title: "Bank Wrongfully Rejects Claim Stating 'Transaction Successful at ATM'",
    cause:
      "Bank customer service representatives frequently issue generic rejection emails quoting a 'successful switch handshake' or machine status '000 - Success', without examining physical cash logs or CCTV video recordings.",
    legalBasis:
      "In State Bank of India v. Ravindra Prasad Sharma and landmark State Commission rulings, consumer courts held that an electronic switch handshake does not prove physical cash collection by the cardholder. The evidentiary burden rests on the bank under Section 63 BSA 2023 to produce the ATM cash dispenser counter log, purge bin log, and time-stamped CCTV camera footage showing actual delivery.",
    steps: [
      {
        step: "Reject Branch Closure & Issue Written Re-examination Notice",
        description:
          "Send a formal letter declining the closure. Explicitly state that software switch logs are rebuttable and demand physical audit logs under RTI (for PSBs) or customer grievance norms.",
      },
      {
        step: "Formally Demand CCTV Footage Preservation",
        description:
          "ATM camera recordings are routinely overwritten after 30 to 90 days. Serve an urgent legal demand requiring the bank to archive and produce CCTV recordings of your transaction window.",
      },
      {
        step: "Escalate to Principal Nodal Officer (PNO) & RBI Ombudsman",
        description:
          "If the bank refuses to furnish physical audit logs within 30 days, file an online statutory complaint before the Reserve Bank Integrated Ombudsman on the CMS portal.",
      },
    ],
    statutoryRule: "Section 63 Bharatiya Sakshya Adhiniyam 2023; NCDRC Case Law on ATM Logs",
  },
  {
    id: "delay-over-t5",
    tabLabel: "Compensation Unpaid",
    title: "Bank Refunded Principal Amount but Refused to Credit ₹100/Day RBI Delay Penalty",
    cause:
      "Banks often quietly credit the debited amount after 15 to 45 days of customer harassment, conveniently omitting the mandatory ₹100 per day statutory delay compensation mandated under RBI directives.",
    legalBasis:
      "Under Clause 3 of RBI Circular DPSS.CO.PD No.629/2019-20, compensation of ₹100 per calendar day beyond T + 5 must be credited proactively and automatically into the customer's account without requiring a separate claim or application. Retaining this compensation constitutes direct regulatory non-compliance and actionable deficiency in service.",
    steps: [
      {
        step: "Calculate Statutory Delay Days Accurately",
        description:
          "Count calendar days starting from T + 6 until the exact date principal funds were credited into your statement. Multiply total delayed days by ₹100.",
      },
      {
        step: "Submit Statutory Penalty Demand Letter",
        description:
          "Send an email and speed post letter to the bank's Nodal Officer citing RBI Circular No. 629 and demanding the exact penalty amount within 7 business days.",
      },
      {
        step: "File CMS Complaint for Compensation Recovery + Mental Harassment",
        description:
          "Approach the RBI Ombudsman or District Consumer Disputes Redressal Commission to claim the ₹100/day penalty plus ₹15,000 to ₹25,000 in mental agony damages and litigation costs.",
      },
    ],
    statutoryRule: "RBI Circular DPSS.CO.PD No.629/2019-20 Clause 3; RB-Integrated Ombudsman Scheme 2021",
  },
];

export default function AtmProblemTabs() {
  const [activeTab, setActiveTab] = useState(ATM_PROBLEMS[0].id);
  const activeProblem = ATM_PROBLEMS.find((p) => p.id === activeTab) || ATM_PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Horizontal Tabs Header */}
      <div className="flex border-b border-slate-200 overflow-x-auto scrollbar-none bg-slate-50/80">
        {ATM_PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Body Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider bg-red-100 text-red-800 mb-2">
            Dispute Diagnosis &amp; Statutory Resolution Rail
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
            {activeProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80">
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-1.5">
              Root Technical Cause
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeProblem.cause}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-1.5">
              Binding RBI Rule &amp; Legal Standpoint
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {activeProblem.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            Immediate 3-Step Recovery Action
          </h4>
          <div className="space-y-3">
            {activeProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-red-50 text-[#DC2626] font-extrabold text-xs flex items-center justify-center shrink-0 border border-red-200 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                    {st.step}
                  </h5>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-500">
            <span className="font-semibold text-slate-700">Legal Authority: </span>
            <span>{activeProblem.statutoryRule}</span>
          </div>
          <Link
            href="/law/rbi-failed-transaction-tat-compensation"
            className="text-red-600 hover:text-red-700 font-bold inline-flex items-center gap-1 group"
          >
            Read RBI Failed Transaction TAT Rules
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
