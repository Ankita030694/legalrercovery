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
    id: "forced-shell-airline-cancellation",
    tabLabel: "Airline Forced Shell",
    title: "Flight Cancelled by Airline & Ticket Fare Dumped into Forced Credit Shell",
    cause:
      "When an airline cancels a flight for operational or commercial reasons, automated ticketing engines routinely default to generating an airline credit shell or travel voucher instead of crediting the passenger's original payment method. The airline's automated system sends an SMS or email stating 'Your credit shell is ready for future travel' without ever presenting the passenger with a cash refund button.",
    legalBasis:
      "Under DGCA CAR Section 3, Series M, Part IV (Clause 3.3.2) and Section 3, Series M, Part II, when a flight is cancelled by an airline and alternate arrangements are unacceptable to the passenger, the airline must refund the full ticket value immediately to the source bank account. Under the Supreme Court ruling in Pravasi Legal Cell v. Union of India (2020) 10 SCC 724, credit shells can only be created with the express, voluntary consent of the passenger.",
    steps: [
      {
        step: "Issue Immediate Written Rejection of Credit Shell",
        description:
          "Send an email immediately to the airline nodal officer and customer care stating: 'I expressly decline the credit shell created for PNR [Number]. Under DGCA CAR Series M Part IV and the Supreme Court ruling in Pravasi Legal Cell, I demand 100% refund to my original payment source.'",
      },
      {
        step: "Lodge Ticket on AirSewa Portal",
        description:
          "Register a formal grievance on airsewa.gov.in under 'Airlines > Refund > Forced Voucher / Credit Shell' uploading your cancellation notice, PNR slip, and the airline's credit shell email.",
      },
      {
        step: "Serve Advocate Statutory Legal Demand Notice",
        description:
          "If the airline fails to reverse the shell into cash within 7 working days, serve a 15-day statutory legal notice under Section 35 of the Consumer Protection Act, 2019, claiming the fare, 18% interest, and compensation.",
      },
    ],
    statutoryRule: "DGCA CAR Series M Part IV (Cl. 3.3.2) & Supreme Court Pravasi Legal Cell Ruling",
  },
  {
    id: "ota-wallet-credit-lock",
    tabLabel: "OTA Locked Wallet",
    title: "Online Travel Agency (OTA) Converted Flight Refund into Non-Withdrawable App Wallet",
    cause:
      "When tickets are booked through aggregators like MakeMyTrip, Cleartrip, EaseMyTrip, or Goibibo, the airline often releases refund funds to the OTA's B2B agent balance. The OTA then traps the passenger's money by converting it into proprietary wallet credits (such as MMT MyCash, Clearcash, or EMT Wallet) that cannot be transferred to a bank account and carry arbitrary expiration dates.",
    legalBasis:
      "Under DGCA CAR Series M Part II (Clause 3.3.2), travel agents and OTAs are merely facilitators and must remit refunds directly back to the passenger's original payment mode within statutory timelines. Furthermore, the Central Consumer Protection Authority (CCPA) Dark Patterns Guidelines, 2023 expressly ban 'Forced Action' and unconsented conversion of cash refunds into store credits or digital wallets under Section 2(47) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Demand Payment Gateway ARN & Direct Bank Remittance",
        description:
          "Write to the OTA's Grievance Officer rejecting wallet credits and demanding the 12-digit Acquirer Reference Number (ARN) or UTR confirming inward credit to your bank account or credit card.",
      },
      {
        step: "File Joint Escalation on National Consumer Helpline (NCH)",
        description:
          "Lodge a complaint on consumerhelpline.gov.in (NCH 1915) impleading both the OTA and the operating airline for unfair trade practices and dark-pattern fund withholding.",
      },
      {
        step: "Issue Advocate Notice for Wallet De-linking & Bank Credit",
        description:
          "Serve a joint statutory legal demand notice on both the OTA corporate entity and the airline demanding immediate liquidation of the locked wallet balance into bank funds.",
      },
    ],
    statutoryRule: "CCPA Dark Patterns Guidelines 2023 & Section 2(47) Unfair Trade Practice CPA 2019",
  },
  {
    id: "expired-credit-shell-forfeiture",
    tabLabel: "Expired Shell Forfeiture",
    title: "Airline Confiscated Unutilized Credit Shell Upon Reaching Expiry Date",
    cause:
      "Airlines frequently impose artificial validity windows of 6 to 12 months on credit shells. If a passenger does not book a new flight before the deadline, airline support agents assert that the funds have 'lapsed' or 'expired', claiming their terms of carriage permit outright forfeiture of unutilized ticket money.",
    legalBasis:
      "Airlines have zero legal right to confiscate unutilized passenger money. In Pravasi Legal Cell v. Union of India, the Supreme Court mandated that any credit shell remaining unutilized by the passenger upon expiry must be immediately refunded to the passenger in cash with accrued statutory interest (up to 0.75% per month). Withholding expired credit shells constitutes unjust enrichment and criminal breach of trust under the Bharatiya Nyaya Sanhita, 2023 (BNS Section 316).",
    steps: [
      {
        step: "Retrieve Historical PNR & Credit Shell Issuance Records",
        description:
          "Download your original electronic ticket, cancellation confirmation, and the credit shell balance statement showing the total unutilized balance and stated expiry date.",
      },
      {
        step: "Invoke Supreme Court Compliance Mandate",
        description:
          "Write to the airline's Director of Revenue Management and Nodal Grievance Cell citing Paragraph 14 of Pravasi Legal Cell v. UOI requiring automatic cash remittance upon shell expiration.",
      },
      {
        step: "Statutory Legal Notice with Interest & Punitive Damages",
        description:
          "Have an advocate dispatch a legal notice demanding instant bank remittance of the expired principal plus statutory interest and litigation costs within 15 calendar days.",
      },
    ],
    statutoryRule: "Supreme Court Pravasi Legal Cell Ruling (Para 14) & BNS Section 316 / CPA 2019",
  },
  {
    id: "unsolicited-voucher-schedule-change",
    tabLabel: "Major Schedule Delay",
    title: "Flight Rescheduled by Over 4 Hours & Airline Refuses Cash Refund",
    cause:
      "When an airline drastically alters flight timings (rescheduling departures by 4 to 24 hours), passengers who cannot accept the new flight times are often told they can only reschedule for free or receive a credit voucher for future flights, while cash refunds are outright refused.",
    legalBasis:
      "Under DGCA CAR Section 3, Series M, Part IV (Clause 3.3), if a flight departure is delayed by more than 2 to 4 hours (depending on flight block time) or the schedule is substantially modified, passengers who elect not to travel are legally entitled to an immediate 100% cash refund. Airlines cannot compel passengers to accept vouchers when the service disruption originates from the carrier's side.",
    steps: [
      {
        step: "Capture Flight Reschedule Notification & Rejection Proof",
        description:
          "Preserve the SMS, WhatsApp alert, or email from the airline showing the revised flight schedule alongside your immediate written reply refusing the revised schedule.",
      },
      {
        step: "Refuse Airline Reschedule Voucher Option",
        description:
          "Do not click 'Accept Flight Modification' or 'Generate Voucher' on the airline portal. Opt strictly for 'Cancel & Refund to Source'.",
      },
      {
        step: "Serve Advocate Legal Notice for 100% Refund & Inconvenience",
        description:
          "Serve a formal statutory notice under DGCA CAR Part IV demanding full refund of base fare, taxes, and passenger fees without cancellation fee deductions.",
      },
    ],
    statutoryRule: "DGCA CAR Series M Part IV (Clause 3.3) & Section 2(11) CPA 2019",
  },
  {
    id: "non-transferable-voucher-trap",
    tabLabel: "Non-Transferable Trap",
    title: "Airline Refuses to Allow Family Member to Use Shell or Provide Cash",
    cause:
      "A passenger books tickets for multiple family members or colleagues. When travel is disrupted, the airline splits the refund into individual non-transferable credit shells restricted strictly to each passenger's name, preventing the primary payer from utilizing the total ticket sum or retrieving it into their bank.",
    legalBasis:
      "Under Indian contract law and the Consumer Protection Act, 2019, the contractual privity and consideration flowed from the primary purchasing passenger who paid the fare. Restricting unspent credits to non-travelling passengers while denying cash refund to the purchasing cardholder constitutes an unfair contract term under Section 2(46) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Assemble Payment Proof & Booking Invoice",
        description:
          "Show bank statement debit proving you were the sole financier of the PNR alongside the passenger manifest.",
      },
      {
        step: "Demand Consolidated Cash Reversal to Payer's Account",
        description:
          "Submit a formal representation demanding that split credit shells be dissolved and remitted as a single consolidated cash transfer to the source bank account.",
      },
      {
        step: "Legal Notice for Unfair Contract Term Elimination",
        description:
          "Serve a statutory legal demand notice challenging the non-transferability clause as an oppressive unilateral consumer restriction under Section 2(46) CPA.",
      },
    ],
    statutoryRule: "Section 2(46) (Unfair Contract) & Section 2(47) CPA 2019",
  },
];

export default function CreditShellProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Archetype G5 / B3 Scenario Selector
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific Credit Shell or Voucher Dispute Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any common airline refund trap below to see why it happens, the exact statutory violation, and the step-by-step legal remedy:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Credit Shell Dispute Scenarios"
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
                  ? "bg-[#1E293B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedProblem.id}`}
        aria-labelledby={`tab-${selectedProblem.id}`}
        className="space-y-6 focus:outline-none"
      >
        <div>
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 mb-2">
            {selectedProblem.title}
          </h4>
          <div className="inline-block px-3 py-1 bg-red-50 text-[#DC2626] rounded-md text-xs font-bold border border-red-200/70">
            Statutory Violation: {selectedProblem.statutoryRule}
          </div>
        </div>

        {/* Why this happened */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
          <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-1 uppercase tracking-wider">
            Why Airlines &amp; OTAs Do This:
          </strong>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selectedProblem.cause}
          </p>
        </div>

        {/* Legal Reality */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5">
          <strong className="text-xs sm:text-sm font-bold text-amber-950 block mb-1 uppercase tracking-wider">
            The Governing Law &amp; Judicial Protection:
          </strong>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            {selectedProblem.legalBasis}
          </p>
        </div>

        {/* Action Steps */}
        <div className="space-y-3">
          <strong className="text-xs sm:text-sm font-bold text-slate-900 block uppercase tracking-wider">
            Immediate 3-Step Escalation Protocol:
          </strong>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {selectedProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900">
                      {s.step}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contextual Link */}
        <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <span>
            Facing this exact issue right now? Issuing a pre-litigation advocate demand notice resolves over 85% of voucher disputes before court.
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-1"
          >
            View notice pricing &amp; process →
          </Link>
        </div>
      </div>
    </div>
  );
}
