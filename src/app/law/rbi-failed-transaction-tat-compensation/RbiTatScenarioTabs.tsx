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
    id: "upi-p2p-p2m",
    tabLabel: "UPI & IMPS Stuck",
    title: "UPI or IMPS Debited ('Processing' or 'Timed Out') but Beneficiary Not Credited",
    cause:
      "During peak server load on NPCI switches or remitting/beneficiary bank CBS nodes (such as SBI, HDFC, Axis, or Bank of Baroda), a transaction initiated on Google Pay, PhonePe, Paytm, or netbanking shows 'Pending' or 'Failed', yet the money is deducted from your savings account. Customer care tells you to wait 7 to 15 working days for back-end reconciliation.",
    legalBasis:
      "Under Annexure Items 3 and 4 of RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20, person-to-person (P2P) UPI transfers and IMPS transfers must be auto-reversed by the beneficiary/remitting bank latest by T + 1 calendar day (and T + 5 days for UPI Merchant P2M payments where confirmation was not generated). Every single calendar day of delay beyond T + 1 (or T + 5 for P2M) triggers a mandatory ₹100/day financial penalty payable to your account.",
    steps: [
      {
        step: "Extract the 12-Digit UPI Transaction ID / IMPS RRN",
        description:
          "Open your payment app or bank statement and copy the exact 12-digit Retrieval Reference Number (RRN) along with the timestamp of debit (Date T).",
      },
      {
        step: "Raise an Online Chargeback / UDIR Ticket & Email Nodal Officer",
        description:
          "File a dispute in the UPI app (which triggers an NPCI Unified Dispute and Issue Resolution / UDIR flag) and email your bank's Principal Nodal Officer demanding reversal + ₹100/day from Day T+2 (or T+6).",
      },
      {
        step: "Serve a 15-Day Statutory Notice & Escalate to RBI Ombudsman",
        description:
          "If the bank credits only the principal and withholds the ₹100/day compensation—or keeps the principal stuck past 7 days—serve an Advocate Legal Notice and lodge a complaint on cms.rbi.org.in.",
      },
    ],
    statutoryRule: "RBI Circular DPSS.CO.PD No.629 — Annexure Item 3 (IMPS: T+1) & Item 4 (UPI: T+1 / T+5)",
  },
  {
    id: "atm-no-cash",
    tabLabel: "ATM No Cash Dispensed",
    title: "ATM Account Debited but Cash Not Dispensed (Or Partial Cash Dispensed)",
    cause:
      "You insert your debit card at an On-Us or Off-Us ATM (or Micro-ATM), enter the PIN, and hear the cash cassette whirring, but the shutter never opens—or the machine displays 'Unable to Process' while an SMS immediately confirms a ₹10,000 or ₹20,000 debit. Worse, banks frequently close ATM complaints with a one-line rejection claiming 'Transaction Successful as per Electronic Journal (EJ) / Switch Log'.",
    legalBasis:
      "Under Annexure Item 1 of the RBI TAT Circular, banks must proactively reverse failed ATM debits within a maximum of T + 5 calendar days, failing which ₹100 per day of delay accrues automatically. Furthermore, the National Consumer Disputes Redressal Commission (NCDRC) has repeatedly ruled that an internal EJ log is not conclusive proof of cash delivery; the bank must produce both the certified Physical Cash Verification / Excess Cash Tally Certificate of that ATM cassette AND the timestamped CCTV footage showing the customer receiving cash.",
    steps: [
      {
        step: "Preserve the ATM Slip, Screen Photo & Exact Terminal ID",
        description:
          "Note the 8-character ATM ID printed on the machine fascia or receipt, exact time to the minute, and the 12-digit RRN from your SMS alert.",
      },
      {
        step: "Demand CCTV Footage Preservation & Cash Tally Report Within 7 Days",
        description:
          "Because banks overwrite ATM CCTV DVR storage every 30 to 90 days, send an immediate written demand to the Home Branch Manager and Nodal Officer requiring preservation of CCTV camera feeds and the End-of-Day Cash Excess Report.",
      },
      {
        step: "Enforce T+5 Auto-Reversal + ₹100/Day Penalty via Legal Notice",
        description:
          "If the bank repudiates your claim citing 'EJ Successful' without providing CCTV footage or cash balance verification, serve a statutory legal notice under Section 2(11) CPA 2019 before approaching e-Jagriti or the RBI Ombudsman.",
      },
    ],
    statutoryRule: "RBI Circular DPSS.CO.PD No.629 — Annexure Item 1 (ATM / Micro-ATM: T+5 Days + ₹100/Day)",
  },
  {
    id: "card-pos-ecommerce",
    tabLabel: "Card PoS / Online Gateway",
    title: "Debit / Credit Card Swiped at PoS or Used Online — Debited Twice or Session Failed",
    cause:
      "At a retail store PoS terminal, the first swipe times out with no charge-slip printed, so the cashier asks you to pay again via UPI or card. Alternatively, on an airline, utility, IRCTC, or e-commerce checkout page, the payment gateway freezes after OTP submission, debiting your account while the merchant order status says 'Payment Failed'.",
    legalBasis:
      "Under Annexure Item 2(b) (PoS Card Present) and Item 2(c) (Card Not Present / E-Commerce), whenever a card account is debited but confirmation is not received at the merchant system or charge-slip is not generated, the issuing bank must auto-reverse the funds within T + 5 calendar days. Beyond T + 5 days, the issuer owes ₹100 per day of delay. Banks cannot ask the customer to chase the merchant's acquiring bank or payment aggregator.",
    steps: [
      {
        step: "Collect Proof of Alternative Payment or Merchant Failure Screen",
        description:
          "Keep the receipt of the second payment (if paid twice at a store) or the screenshot showing 'Order Failed / Payment Not Received' on the merchant portal.",
      },
      {
        step: "File a Formal Card Dispute / Chargeback Form With Your Issuing Bank",
        description:
          "Notify your card-issuing bank in writing that the transaction failed at T+0 and demand auto-reversal by Day T+5 along with the Acquirer Reference Number (ARN).",
      },
      {
        step: "Claim ₹100/Day Delay Compensation + Reversal of Any Credit Card Interest",
        description:
          "For credit cards, ensure the bank reverses any finance charges or GST levied on the failed debit alongside the ₹100/day statutory penalty.",
      },
    ],
    statutoryRule: "RBI Circular DPSS.CO.PD No.629 — Annexure Item 2(a) (T+1) & Items 2(b)–2(c) (T+5 + ₹100/Day)",
  },
  {
    id: "nach-ecs-revoked",
    tabLabel: "NACH / ECS After Revocation",
    title: "Account Debited Under NACH / ECS Despite Mandate Revocation or Uncredited Salary/EMI",
    cause:
      "You closed a personal loan, car loan, or mutual fund SIP—or submitted a written instruction revoking an e-NACH / ECS auto-debit mandate—yet your bank still allows the debit to go through, or levies repeated 'NACH Return / ECS Bounce Charges' on your account.",
    legalBasis:
      "Annexure Item 7(b) of RBI Circular DPSS.CO.PD No.629 explicitly covers 'Account debited despite revocation of debit mandate with the bank by the customer'. The customer's destination bank is held directly responsible, must complete resolution and reversal within T + 1 day, and must pay ₹100 per day for any delay beyond T + 1 day.",
    steps: [
      {
        step: "Attach Loan Closure NOC or Mandate Cancellation Acknowledgment",
        description:
          "Compile the timestamped email, netbanking request ID, or branch acknowledgment where you requested mandate revocation prior to the debit date.",
      },
      {
        step: "Demand T+1 Reversal of Principal, Bounce Charges & ₹100/Day Penalty",
        description:
          "Write to the bank's Nodal Officer citing Annexure Item 7(b) of Circular DPSS.CO.PD No.629, demanding full reversal of the wrongful debit and any penal return fees.",
      },
      {
        step: "Serve Advocate Legal Notice for Unauthorized Auto-Debit & CIBIL Protection",
        description:
          "If a lender continues presenting NACH mandates after loan closure, serve a joint legal notice on the bank and NBFC/lender to halt presentation and protect your credit score.",
      },
    ],
    statutoryRule: "RBI Circular DPSS.CO.PD No.629 — Annexure Item 7(a) & 7(b) (NACH: T+1 Day + ₹100/Day)",
  },
];

export default function RbiTatScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100" role="tablist" aria-label="Failed Transaction Scenarios">
        {SCENARIOS.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            role="tab"
            aria-selected={activeTab === scenario.id}
            onClick={() => setActiveTab(scenario.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === scenario.id
                ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {scenario.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="pt-5 space-y-4" role="tabpanel">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            Statutory Rule: {activeScenario.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider">
              Why the Failure Happens &amp; Bank Excuse
            </strong>
            <p className="leading-relaxed">{activeScenario.cause}</p>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1.5 text-amber-950">
            <strong className="text-amber-900 font-bold block text-xs uppercase tracking-wider">
              Binding RBI Mandate &amp; Judicial Position
            </strong>
            <p className="leading-relaxed">{activeScenario.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-2.5 pt-2">
          <strong className="text-xs uppercase tracking-wider font-extrabold text-slate-900 block">
            3-Step Recovery Plan for This Scenario:
          </strong>
          <div className="grid grid-cols-1 gap-2.5">
            {activeScenario.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-500">
          Dealing with an unauthorized auto-debit or a merchant claiming they already refunded you? Read our guides on{" "}
          <Link href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal" className="text-blue-700 underline font-semibold">
            reversing unauthorized ECS / NACH bank debits
          </Link>{" "}
          and{" "}
          <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 underline font-semibold">
            tracing refunds marked successful using UTR/ARN codes
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
