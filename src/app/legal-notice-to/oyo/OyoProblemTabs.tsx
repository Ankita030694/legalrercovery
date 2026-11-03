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

const OYO_PROBLEMS: ProblemTab[] = [
  {
    id: "checkin-denied",
    tabLabel: "Check-in Denied",
    title: "OYO Confirmed Booking but Hotel Property Denied Check-in / Room",
    cause:
      "A frequent consumer grievance occurs when a guest arrives at the booked OYO property with a confirmed, prepaid booking ID, only to be turned away by hotel reception. Hotel owners commonly cite unpaid commission disputes with Oravel Stays Ltd, overbooking, refusal to accept OYO's discounted room tariff, or demanding additional cash on the spot. OYO's automated chat assistant typically promises an 'alternative property' miles away or leaves travelers stranded late at night.",
    legalBasis:
      "Under Section 2(11) (Deficiency in Service) and Section 2(47) (Unfair Trade Practice) of the Consumer Protection Act, 2019, Oravel Stays Ltd cannot disclaim responsibility by labelling itself a 'mere intermediary'. Having received consideration and issued a confirmed reservation voucher, OYO is vicariously and contractually liable. Consumer courts have repeatedly held that denying confirmed accommodation amounts to extreme harassment, mandating 100% refund, compensation for emergency hotel rebooking expenses, and mental agony damages.",
    steps: [
      {
        step: "Document Denial at Reception Immediately",
        description:
          "Capture video or audio evidence at hotel reception confirming check-in refusal, or ask the hotel manager to write 'Check-in Denied' on your booking printout. Take geotagged, timestamped photos outside the property entrance.",
      },
      {
        step: "Log In-App Complaint & Record Call Logs",
        description:
          "Raise an SOS/emergency dispute via the OYO app help section and call OYO customer support. Save screenshots of unresolved chat transcripts and download call recordings showing OYO failed to provide immediate alternative accommodation within 30 minutes.",
      },
      {
        step: "Preserve Alternative Accommodation Invoices",
        description:
          "If forced to book an emergency room at another hotel, preserve the tax invoice and payment slip. This forms the basis of your legal claim for financial restitution against OYO.",
      },
      {
        step: "Serve Advocate Legal Notice to Oravel Stays Ltd",
        description:
          "Issue a formal advocate legal demand notice claiming full refund of the original OYO payment, reimbursement of alternative hotel bills, and damages for harassment before approaching e-Jagriti.",
      },
    ],
    statutoryRule: "Sections 2(11), 2(47) & 86 Consumer Protection Act, 2019",
  },
  {
    id: "forced-wallet-refund",
    tabLabel: "Forced Wallet / OYO Rupee",
    title: "OYO Credited Refund as 'OYO Rupee / Wallet Coins' Instead of Bank Account",
    cause:
      "When a guest cancels a booking within the allowable cancellation period or reports a service failure, OYO frequently routes the refund to its internal closed wallet ('OYO Rupee' or promotional credit) rather than the original payment source (credit/debit card, UPI, or net banking). These closed credits carry short expiry dates and restrictive redemption caps (e.g., maximum 10-20% usable per future booking).",
    legalBasis:
      "Under Rule 5(3)(e) of the Consumer Protection (E-Commerce) Rules, 2020 and the Central Consumer Protection Authority (CCPA) Dark Patterns Prevention Guidelines 2023, converting monetary refunds into non-withdrawable store credits without express consent is an illegal 'Forced Action' and unfair trade practice. Consumers have an absolute statutory right to receive full refunds credited back to the original mode of payment.",
    steps: [
      {
        step: "Screenshot OYO Wallet Ledger & Dispute Message",
        description:
          "Capture screenshots of the OYO wallet screen showing credit of OYO Rupee instead of bank settlement, along with your original bank/card statement proving cash deduction.",
      },
      {
        step: "Send Formal Email Rejecting Wallet Credit",
        description:
          "Email bookings@oyorooms.com and grievances@oyorooms.com rejecting the wallet points and invoking Rule 5 of the E-Commerce Rules, demanding reversal to your source bank account within 48 hours.",
      },
      {
        step: "Escalate via National Consumer Helpline (NCH)",
        description:
          "Register a complaint on consumerhelpline.gov.in (NCH) citing unfair trade practice and forced wallet retention against Oravel Stays Ltd.",
      },
      {
        step: "Dispatch Statutory Advocate Demand Notice",
        description:
          "If bank transfer is withheld past 7 days, issue an advocate legal notice requiring bank settlement with statutory interest under Section 2(47) of CPA 2019.",
      },
    ],
    statutoryRule: "Rule 5(3)(e) E-Commerce Rules 2020 & Dark Patterns Guidelines 2023",
  },
  {
    id: "refund-pending-status",
    tabLabel: "Refund Stuck / Pending",
    title: "OYO Cancellation Refund Stuck in 'Processing' or 'Initiated' Past Statutory Time",
    cause:
      "Consumers who cancel rooms under free cancellation terms often find their refund status stuck on 'Refund Processing' or 'Refund Initiated' for weeks or months. OYO customer support repeatedly offers generic promises of 'resolution in 24-48 hours' while no funds hit the customer's bank account.",
    legalBasis:
      "Under Consumer Protection (E-Commerce) Rules, 2020, e-commerce entities must process refunds within a reasonable timeframe (typically 3 to 7 working days) and must not indefinitely retain customer monies. Retaining consideration after a valid contract termination amounts to unjust enrichment under Section 70 of the Indian Contract Act, 1872 and deficiency of service under Section 2(11) CPA 2019.",
    steps: [
      {
        step: "Demand 12-Digit Bank ARN / UTR Number",
        description:
          "Ask OYO support for the Acquirer Reference Number (ARN) for cards or Unique Transaction Reference (UTR) for UPI/IMPS. If OYO cannot provide a valid bank-authenticated UTR, the refund was never actually released from their accounts.",
      },
      {
        step: "Secure Bank Confirmation Letter",
        description:
          "Obtain an official bank account statement or customer support email confirming zero inward credit for that transaction period.",
      },
      {
        step: "Formal Legal Notice with Interest Demand",
        description:
          "Have an advocate dispatch a legal notice requiring release of the stuck refund along with 18% penal interest from the date of cancellation.",
      },
    ],
    statutoryRule: "Section 2(11) CPA 2019 & Section 70 Indian Contract Act, 1872",
  },
  {
    id: "failed-booking-debit",
    tabLabel: "Failed Transaction Debit",
    title: "Money Debited from Bank / UPI but OYO Booking ID Not Created",
    cause:
      "During peak booking times, payment gateway sessions between your bank/UPI app and OYO's booking server may time out. Your bank account is debited instantly, but the OYO application displays 'Booking Failed' or returns to the search page without generating a confirmed Booking ID.",
    legalBasis:
      "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions (RBI/2019-20/67) mandates auto-reversal within T+1 working day for failed merchant transactions. If Oravel Stays Ltd or its payment aggregator fails to reverse the debit within T+1 business days, the customer is entitled to compensation of ₹100 per day of delay under RBI regulations.",
    steps: [
      {
        step: "Obtain 12-Digit UTR from Bank Statement",
        description:
          "Check your bank SMS or net banking statement. Note down the 12-digit UPI reference number or Bank UTR number showing the debit to OYO.",
      },
      {
        step: "Email OYO Nodal Officer with UTR Record",
        description:
          "Send an email to grievances@oyorooms.com and partner bank support attaching screenshot of the debit and the failed screen.",
      },
      {
        step: "File RBI Ombudsman and Legal Notice Claim",
        description:
          "If the amount is not reversed within 5 days, serve an advocate legal demand notice claiming ₹100/day penal compensation under RBI guidelines alongside full refund.",
      },
    ],
    statutoryRule: "RBI Circular RBI/2019-20/67 on Failed Transaction TAT",
  },
  {
    id: "substandard-property",
    tabLabel: "Substandard / Unlivable Room",
    title: "Property Unlivable, Unhygienic or Grossly Misrepresented (Immediate Vacate)",
    cause:
      "The physical property differs drastically from photos displayed on the OYO app: broken amenities, filthy washrooms, no air-conditioning or running water, safety hazards, or hostile property staff. Guests who vacate immediately within 1-2 hours are denied refunds on the pretext that 'check-in was registered'.",
    legalBasis:
      "Displaying deceptive photographs or false amenities constitutes Misleading Advertisement under Section 2(28) and Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019. Consumer commissions have ruled that a guest is not bound to accept substandard accommodation and is entitled to full refund when rooms fail basic hospitality standards.",
    steps: [
      {
        step: "Record Comprehensive Photo & Video Evidence",
        description:
          "Take clear photos and video walkthroughs of the dirty linens, broken bathroom fittings, inoperative AC, or unhygienic premises before handing back keys.",
      },
      {
        step: "Document Immediate Departure with Reception",
        description:
          "Demand written confirmation of early departure from the hotel counter or send a timestamped email to OYO support within 60 minutes of arrival stating room was rejected.",
      },
      {
        step: "Serve Advocate Legal Notice for Full Restitution",
        description:
          "Issue a statutory legal notice demanding full refund plus compensation for distress, lodging alternative costs, and travel inconvenience.",
      },
    ],
    statutoryRule: "Sections 2(28), 2(47) & 86 Consumer Protection Act, 2019",
  },
];

export default function OyoProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(OYO_PROBLEMS[0].id);

  const activeProblem =
    OYO_PROBLEMS.find((p) => p.id === activeTab) || OYO_PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* ARIA Tablist Navigation */}
      <div
        role="tablist"
        aria-label="OYO Dispute Scenarios"
        className="flex overflow-x-auto no-scrollbar bg-slate-100 border-b border-slate-200/80 p-1.5 sm:p-2 gap-1.5"
      >
        {OYO_PROBLEMS.map((problem) => {
          const isSelected = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                isSelected
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content */}
      <div
        role="tabpanel"
        id={`panel-${activeProblem.id}`}
        aria-labelledby={`tab-${activeProblem.id}`}
        className="p-5 sm:p-7 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
              Dispute Category: {activeProblem.tabLabel}
            </span>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
              {activeProblem.title}
            </h3>
          </div>
          <div className="shrink-0 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 text-right self-start">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">
              Statutory Provision
            </span>
            <span className="text-xs font-bold text-slate-800">
              {activeProblem.statutoryRule}
            </span>
          </div>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Root Cause &amp; Platform Bottleneck
            </h4>
            <p className="leading-relaxed text-slate-600">{activeProblem.cause}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Consumer Law &amp; Judicial Authority
            </h4>
            <p className="leading-relaxed text-slate-600">{activeProblem.legalBasis}</p>
          </div>
        </div>

        {/* Step-by-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
            Mandatory Action Checklist for This Dispute:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeProblem.steps.map((stepItem, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs flex items-start gap-2.5"
              >
                <span className="shrink-0 w-6 h-6 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-0.5">
                  <h5 className="font-bold text-xs sm:text-sm text-slate-900">
                    {stepItem.step}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
          <p className="text-slate-500">
            Forced wallet credits or refused refunds violate CCPA E-Commerce guidelines. Read our detailed guide on{" "}
            <Link
              href="/refund-as-gift-card-or-wallet-legal"
              className="text-blue-700 underline font-semibold"
            >
              forcing wallet credit instead of bank refund
            </Link>.
          </p>
          <a
            href="#heading-cta-block"
            className="shrink-0 inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors cursor-pointer text-center"
          >
            Draft OYO Notice →
          </a>
        </div>
      </div>
    </div>
  );
}
