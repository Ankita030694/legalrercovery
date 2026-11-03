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

const PROBLEMS: ProblemTab[] = [
  {
    id: "tdr-rejected",
    tabLabel: "TDR Rejected",
    title: "IRCTC Ticket Deposit Receipt (TDR) Rejected by Zonal Railways",
    cause:
      "IRCTC acts as an intermediary booking agent for Indian Railways. When you file an online TDR for reasons such as train delayed > 3 hours, passenger did not travel, or train diverted, IRCTC forwards the claim to the concerned Zonal Railway Commercial Department (CCM). If the Zonal Railway marks 'Chart checked, passenger traveled' or fails to reconcile the TTE physical chart with the Electronic Reservation Chart within 90 days, IRCTC summarily closes the TDR as 'Rejected' with zero manual human review.",
    legalBasis:
      "Under Rule 6 and Rule 13 of the Railway Passengers (Cancellation of Ticket and Refund of Fare) Rules, 2015, and Section 2(11) of the Consumer Protection Act, 2019, IRCTC and Indian Railways bear joint responsibility. Zonal internal delays cannot be used to forfeit a passenger's money. In repeated judgments, consumer forums have ruled that a blanket computer-generated rejection without providing the TTE's signed chart endorsement constitutes deficiency of service.",
    steps: [
      {
        step: "Extract Zonal Docket & Repudiation Note",
        description:
          "Log in to irctc.co.in > My Transactions > Ticket Refund History > TDR Status. Take a complete screenshot showing the TDR Reference ID, PNR, filing timestamp, and the specific rejection reason text.",
      },
      {
        step: "Lodge Escalation on RailMadad Portal",
        description:
          "File an immediate grievance on railmadad.indianrailways.gov.in under 'Ticketing & Refunds' quoting the PNR and TDR ID. Explicitly state that you did not board and demand the certified extract of the TTE Chart.",
      },
      {
        step: "Serve Advocate Statutory Legal Demand Notice",
        description:
          "If RailMadad closes the ticket without refunding fare, serve a formal statutory legal notice to IRCTC Corporate Office (Barakhamba Road, New Delhi) and the Zonal General Manager demanding 100% fare plus interest within 15 days.",
      },
    ],
    statutoryRule: "Rule 13(1) Railway Passengers Refund Rules & Section 2(11) CPA 2019",
  },
  {
    id: "failed-transaction",
    tabLabel: "Failed Transaction",
    title: "Payment Debited from Bank / UPI but IRCTC Ticket Not Generated",
    cause:
      "During Tatkal booking rushes or peak reservation hours, IRCTC payment gateway sessions often time out or encounter database locks. Your bank account, debit card, or UPI wallet is debited instantly, but IRCTC's server drops the transaction before booking confirmation. Instead of an automated reversal within 24 to 72 hours, the funds become marooned in the intermediate merchant acquiring settlement pool.",
    legalBasis:
      "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions (RBI/2019-20/67) mandates auto-reversal within T+1 working day for failed e-commerce transactions. If the merchant fails to reverse the debit within T+1 day, the customer is legally entitled to compensation of ₹100 per day of delay under RBI directives.",
    steps: [
      {
        step: "Obtain Bank Transaction UTR / RRN",
        description:
          "Check your bank passbook or net banking statement. Note down the 12-digit Unique Transaction Reference (UTR) for UPI / IMPS or Bank Reference Number for card payments showing debit to IRCTC.",
      },
      {
        step: "Query IRCTC Failed Transaction Rail",
        description:
          "Check 'Failed Transactions' under your IRCTC profile. Send an email to tickets@irctc.co.in and care@irctc.co.in with subject: 'Refund Not Received - Failed Transaction - UTR [Number]'.",
      },
      {
        step: "Enforce RBI TAT Compensation & Notice",
        description:
          "If funds are not returned within 5 business days, demand ₹100/day penal compensation under RBI guidelines via a formal legal notice dispatched to IRCTC and the payment aggregator.",
      },
    ],
    statutoryRule: "RBI Circular RBI/2019-20/67 (TAT & Penalty) & Section 2(47) CPA 2019",
  },
  {
    id: "waitlist-auto-cancellation",
    tabLabel: "Waitlist Refund Missing",
    title: "Fully Waitlisted (WL) E-Ticket Cancelled but Refund Not Credited",
    cause:
      "Under Indian Railway booking rules, fully waitlisted (WL) e-tickets are automatically dropped from the chart upon chart preparation (4 to 8 hours prior to train departure). The system is programmed to initiate an automated refund after deducting nominal clerkage fees (₹60 per passenger + GST). However, due to batch reconciliation errors between IRCTC and third-party payment aggregators (Paytm, PhonePe, Razorpay, or banks), the refund transaction frequently stalls in 'Processed' status without ever arriving in the passenger's bank account.",
    legalBasis:
      "Under Rule 7(3) of Railway Passengers (Cancellation of Ticket and Refund of Fare) Rules, 2015, the refund of fare on fully waitlisted e-tickets must be made automatically to the customer's account without any manual cancellation requirement by the passenger. Withholding this credit beyond 5 banking days amounts to unauthorized retention of consumer funds under Section 2(47) CPA 2019.",
    steps: [
      {
        step: "Verify Charting Dropped Status",
        description:
          "Check PNR status post-chart preparation to confirm all passenger statuses show 'CAN' (Cancelled by System) and that no berths were confirmed or converted to RAC.",
      },
      {
        step: "Verify Inward Bank Credits with Detailed Statement",
        description:
          "Download an official PDF bank statement for the 15 days following the travel date to confirm no matching inward credit from IRCTC or CRIS appears in your account.",
      },
      {
        step: "Serve Legal Demand for Bank Reversal",
        description:
          "If IRCTC claims the refund was 'settled' but your bank confirms zero inward credit, serve an advocate demand notice holding IRCTC strictly liable as the principal merchant.",
      },
    ],
    statutoryRule: "Rule 7(3) Railway Passengers Refund Rules 2015",
  },
  {
    id: "train-cancelled-delayed",
    tabLabel: "Train Cancelled / > 3h Late",
    title: "Train Cancelled by Railways or Delayed More Than 3 Hours",
    cause:
      "When Indian Railways cancels a train due to weather, accidents, or operational reasons, e-tickets are supposed to be refunded automatically in full without any clerkage deduction. For trains delayed by more than 3 hours at the journey originating station, passengers have the statutory right not to travel and receive a 100% refund upon filing an online TDR before the actual departure of the train. Yet passengers frequently find their TDRs repudiated on arbitrary grounds.",
    legalBasis:
      "Rule 6 of Railway Refund Rules explicitly mandates a 100% full refund with zero cancellation charges when a train is cancelled. Rule 8 mandates a 100% refund without any deduction if the train is delayed by more than 3 hours and the passenger elects not to travel. National Consumer Commission (NCDRC) has upheld that IRCTC cannot deduct even clerkage fees in such events.",
    steps: [
      {
        step: "Capture Official Delay / Cancellation Evidence",
        description:
          "Take screenshots from the National Train Enquiry System (NTES) or RailMadad proving the train was cancelled or departed > 3 hours past scheduled time.",
      },
      {
        step: "File TDR Before Departure (or Within 72h for Cancelled)",
        description:
          "Ensure online TDR is logged with correct reason code: 'Train Late More than 3 Hours and Passenger Not Travelled' or 'Train Cancelled by Railways'.",
      },
      {
        step: "Legal Notice for Principal + Inconvenience Damages",
        description:
          "When IRCTC or Zonal Railway withholds fare or deducts wrongful penalties, an advocate legal notice demands full fare reimbursement, travel disruption compensation, and legal costs.",
      },
    ],
    statutoryRule: "Rules 6 & 8 Railway Passengers Refund Rules 2015 & NCDRC Precedents",
  },
  {
    id: "ac-failure-downgrade",
    tabLabel: "AC Failure / Downgrade",
    title: "AC Failure During Journey or Involuntary Class Downgrade",
    cause:
      "Passengers booking AC First Class (1A), AC 2-Tier (2A), AC 3-Tier (3A), or AC Chair Car (CC) frequently experience total air-conditioning failure during transit, or find their coach replaced by a lower non-AC class (Sleeper) due to technical snags. While passengers are statutorily entitled to a refund of the difference between AC and non-AC fare, IRCTC routinely rejects TDRs citing lack of physical TTE certificate verification.",
    legalBasis:
      "Rule 10 of Railway Refund Rules mandates refund of the entire difference between the booked fare and the lower class actually travelled, or between AC fare and Sleeper class fare for the affected distance. The Supreme Court and Consumer Commissions have held that failing to provide paid-for AC comfort constitutes severe service deficiency under Section 2(11) CPA 2019.",
    steps: [
      {
        step: "Obtain TTE Certificate (Guard / EFT Certificate)",
        description:
          "Insist that the Travelling Ticket Examiner (TTE) issues an electronic or physical Certificate of AC Failure (EFT) stating the coach number, failure duration, and stations.",
      },
      {
        step: "File Online TDR Within 72 Hours of Arrival",
        description:
          "Log into IRCTC and file a TDR selecting 'AC Failure for Distance' or 'Passenger Travelled in Lower Class'. Upload a scan of the TTE certificate.",
      },
      {
        step: "Serve Advocate Legal Notice for Breach of Contract",
        description:
          "If the difference of fare is denied or not remitted within 30 days, serve a statutory legal notice claiming fare difference, 18% interest, and consumer damages.",
      },
    ],
    statutoryRule: "Rule 10 Railway Passengers Refund Rules & Section 2(11) CPA 2019",
  },
];

export default function IrctcProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Archetype B3 Problem Selector
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific IRCTC Dispute Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any common railway refund bottleneck below to see the operational cause, statutory rule, and immediate 3-step legal fix:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="IRCTC Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {PROBLEMS.map((problem) => {
          const isSelected = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedProblem.id}`}
        aria-labelledby={`tab-${selectedProblem.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedProblem.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedProblem.statutoryRule}
          </span>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Operational Bottleneck & Cause
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Legal Grounds & Precedent
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Practical Fix For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedProblem.steps.map((s, idx) => (
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
            <strong>Need advocate representation?</strong> We draft and dispatch a formal statutory notice directly to IRCTC and the Zonal Railway within 24 hours.
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Review Notice Charges →
          </Link>
        </div>
      </div>
    </div>
  );
}
