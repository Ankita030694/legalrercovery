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
    id: "cancelled-passing-buck",
    tabLabel: "Cancelled Show / Blame Game",
    title: "Concert Cancelled Entirely: Platform & Organiser Blaming Each Other",
    cause:
      "When a live music tour, festival, or stand-up comedy show is cancelled due to administrative failure, licensing lapses, or artist withdrawal, ticketing apps (such as BookMyShow, Zomato Live, District, or Paytm Insider) frequently email ticket buyers claiming that refunds are the sole responsibility of the third-party event organiser. Concurrently, the event organiser claims funds are locked in the ticketing gateway, leaving ticket buyers caught in an endless loop.",
    legalBasis:
      "Under Rule 5(3)(e) and Rule 6 of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms facilitating consumer transactions must effectuate refunds within a reasonable timeframe. Furthermore, under Section 2(11) (deficiency in service) and Section 2(47) (unfair trade practices) of the Consumer Protection Act, 2019, the ticketing aggregator and the event organiser bear joint and several statutory liability. The platform cannot disown liability when it gathered the money, levied convenience fees, and promoted the event.",
    steps: [
      {
        step: "Preserve Booking Confirmation & Cancellation Notices",
        description:
          "Save the original PDF e-ticket, transaction receipt, SMS confirmation, and the formal cancellation email/notification sent by the ticketing app or promoter.",
      },
      {
        step: "Serve Dual Formal Grievance Escalation",
        description:
          "Email both the Ticketing Platform's designated Grievance Officer and the registered event organiser. Demand 100% refund of the ticket cost and convenience fees within 7 working days.",
      },
      {
        step: "Serve Advocate Statutory Legal Demand Notice",
        description:
          "If the money is not returned within 7 days, serve a 15-day formal legal notice through an advocate arraigning both the platform and the promoter jointly before filing on e-Jagriti.",
      },
    ],
    statutoryRule: "Rule 5(3)(e) E-Commerce Rules 2020 & Section 2(11) CPA 2019",
  },
  {
    id: "rescheduled-lineup-change",
    tabLabel: "Rescheduled Date / Changed Lineup",
    title: "Event Rescheduled or Headline Artist Replaced: Forced Vouchers",
    cause:
      "Promoters frequently postpone shows by several weeks or months, change the venue city, or substitute the headline performer, while unilaterally declaring that existing tickets remain valid for the new date and 'no cash refunds will be entertained'. Consumers who booked travel, hotels, or have conflicts are coerced into accepting unwanted dates or expiring digital credit vouchers.",
    legalBasis:
      "Under Section 39 and Section 56 of the Indian Contract Act, 1872, altering the date, venue, or headline artist amounts to a fundamental breach of contract and frustration of the agreed bargain. Under Section 2(47) of CPA 2019, compelling a buyer to accept a rescheduled show or a wallet voucher instead of cash reimbursement constitutes an unfair trade practice. The consumer holds an absolute legal right to repudiate the contract and demand an immediate 100% bank refund.",
    steps: [
      {
        step: "Explicitly Reject the Rescheduled Date in Writing",
        description:
          "Send an immediate written rejection via email to customer support stating you do not consent to the postponed date or revised artist lineup and demand full monetary restitution.",
      },
      {
        step: "Refuse Digital Credit Shells / Wallet Tokens",
        description:
          "Do not click 'Accept Voucher' or 'Claim Credit Shell' in the app. Make it clear on record that credit vouchers are unlawful substitutes under consumer protection jurisprudence.",
      },
      {
        step: "Initiate Pre-Litigation Legal Demand",
        description:
          "Issue a legal notice citing contract frustration and deficiency in service, demanding the total consideration plus reimbursement for non-refundable travel bookings if applicable.",
      },
    ],
    statutoryRule: "Section 56 & 65 Indian Contract Act, 1872 & Section 2(47) CPA 2019",
  },
  {
    id: "convenience-fee-withheld",
    tabLabel: "Convenience Fee Deducted",
    title: "Ticketing Platform Deducting 'Non-Refundable' Booking & Convenience Fees",
    cause:
      "Upon event cancellation, ticketing aggregators often refund the nominal ticket face value while arbitrarily withholding convenience fees, platform booking charges, and internet handling charges (which often run from ₹200 to ₹1,500+ per ticket), citing app terms and conditions.",
    legalBasis:
      "Under Section 65 of the Indian Contract Act, 1872, when an agreement becomes void or is frustrated, any person who received an advantage under the agreement is bound to restore it. Consumer commissions in landmark rulings (including against major online aggregators) have established that where the underlying service is aborted, convenience fees cannot be retained because no convenience or service was ultimately delivered.",
    steps: [
      {
        step: "Audit the Refund Breakdown",
        description:
          "Compare the exact amount received against your original payment invoice. Calculate the withheld difference representing convenience fees and GST.",
      },
      {
        step: "Lodge NCH Dispute Against Unfair Fee Retention",
        description:
          "File an online grievance on the National Consumer Helpline (consumerhelpline.gov.in) pointing out the illegal retention of convenience fees for a defunct event.",
      },
      {
        step: "Claim Withheld Fees & Damages via Statutory Notice",
        description:
          "Issue a legal notice for the balance convenience fee plus interest and legal charges. Ticketing platforms routinely settle the balance upon receiving a formal advocate notice.",
      },
    ],
    statutoryRule: "Section 65 Indian Contract Act, 1872 & Section 2(47) CPA 2019",
  },
  {
    id: "portal-processed-bank-uncredited",
    tabLabel: "Refund 'Processed' Not Credited",
    title: "App Status Displays 'Refund Processed' but Zero Credit in Bank Account",
    cause:
      "The ticketing app's interface marks the status as 'Refund Credited' or 'Refund Initiated', but days or weeks elapse without any inward credit reflecting in the consumer's bank, debit card, or UPI statement due to broken batch transfers, aggregator reconciliation drops, or nodal account stalls.",
    legalBasis:
      "Under Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions (DPSS.CO.PD No.629/02.01.014/2019-20), the primary digital merchant remains legally liable until the funds reach the customer's account. Generating an internal system voucher or false tracking status without inward bank credit is actionable deficiency of service under Section 2(11) CPA 2019.",
    steps: [
      {
        step: "Demand 12-Digit Acquirer Reference Number (ARN / UTR)",
        description:
          "Request the specific 12-digit ARN (for card payments) or UTR (for UPI/netbanking) from the platform's support desk to verify inward settlement.",
      },
      {
        step: "Obtain Written Bank Statement Certificate",
        description:
          "Obtain an un-credited certificate or stamped account statement from your issuing bank confirming that no funds were settled against the cited transaction reference.",
      },
      {
        step: "Escalate via Statutory Notice with Penal Interest Claim",
        description:
          "Serve a 15-day statutory advocate notice demanding immediate release of funds plus 12% penal interest from the date of promised settlement.",
      },
    ],
    statutoryRule: "RBI TAT Circular DPSS.CO.PD No.629 & Section 2(11) CPA 2019",
  },
];

export default function EventTicketProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
          <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider">
            {currentProblem.statutoryRule}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
          {currentProblem.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <span className="text-rose-600">●</span> Dispute Root Cause
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-rose-50/60 border border-rose-200/80 rounded-xl p-4">
            <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <span className="text-rose-600">●</span> Statutory Legal Ground
            </h4>
            <p className="text-xs sm:text-sm text-rose-950 leading-relaxed font-medium">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">
          Immediate Redressal Steps for This Scenario:
        </h4>

        <div className="space-y-3">
          {currentProblem.steps.map((st, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100"
            >
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</p>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
