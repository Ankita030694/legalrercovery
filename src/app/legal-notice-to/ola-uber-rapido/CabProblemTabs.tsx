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
    id: "cancellation-fee",
    tabLabel: "Wrong Cancellation Fee",
    title: "Driver Demanded Cash, Refused Ride or Never Moved — Yet You Were Charged Cancellation",
    cause:
      "A frequent cab aggregator grievance occurs when a booked driver calls asking for your drop location or mode of payment, refuses to proceed upon learning it is an online/corporate ride, stays stationary to force you to cancel, or marks 'Arrived' while miles away. When you cancel to book another ride, Ola, Uber or Rapido automatically deducts a cancellation penalty (₹50 to ₹150) without human verification.",
    legalBasis:
      "Under Clause 13(2) of the Ministry of Road Transport and Highways (MoRTH) Motor Vehicle Aggregator Guidelines 2020, if a driver cancels without valid justification, a penalty of 10% of fare (up to ₹100) must be credited to the rider, and aggregators are strictly barred from levying cancellation charges on riders when default rests with the driver. Furthermore, Rule 6 of the Consumer Protection (E-Commerce) Rules 2020 prohibits unilateral cancellation fees on consumers.",
    steps: [
      {
        step: "Preserve Call Logs & GPS Driver Location",
        description:
          "Take immediate screenshots of the driver's stationary position on the app map, your call history showing the driver contacted you before cancellation, and the automatic cancellation fee deduction receipt.",
      },
      {
        step: "Lodge Dispute via In-App Help & National Consumer Helpline",
        description:
          "Report the trip in the app under 'Charged cancellation fee unfairly / Driver asked me to cancel'. If bot deflection closes the ticket, dial 1915 or register on consumerhelpline.gov.in quoting the booking CRN/Trip ID.",
      },
      {
        step: "Serve Statutory Advocate Legal Notice",
        description:
          "If the aggregator refuses a source bank reversal, issue a formal advocate demand notice to ANI Technologies, Uber India Systems, or Roppen Transportation asserting unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.",
      },
    ],
    statutoryRule: "Clause 13(2) MoRTH Aggregator Guidelines 2020 & Rule 6 CPA E-Commerce Rules 2020",
  },
  {
    id: "route-overcharge",
    tabLabel: "Route & Fare Overcharge",
    title: "Trip Billed Far Above Upfront Estimate Due to Detour, Erroneous GPS or Fake Tolls",
    cause:
      "Upon ride completion, the final fare debited from your card, UPI or wallet exceeds the upfront agreed estimate by 30% to 150%. This happens due to inaccurate aggregator GPS calculations, driver taking unrequested circuitous routes, or the platform automatically appending non-existent municipal tolls, state taxes, or peak surge multipliers not disclosed at confirmation.",
    legalBasis:
      "The Central Consumer Protection Authority (CCPA) Dark Patterns Guidelines 2023 explicitly prohibit 'Drip Pricing'—where undisclosed components or inflated amounts are tacked on at payment. Moreover, under Section 2(47) of the Consumer Protection Act 2019, charging more than the agreed upfront estimate without rider consent constitutes an unfair trade practice, and consumer courts consistently mandate full refund of the difference plus compensation.",
    steps: [
      {
        step: "Download Itemized Tax Invoice & Actual Route Map",
        description:
          "Export the official PDF trip receipt containing the base fare, distance traveled, time charges, and toll breakdowns. Compare the billed distance against Google Maps standard route distance.",
      },
      {
        step: "Challenge Toll & Distance Discrepancies in Writing",
        description:
          "Submit a formal fare review via the app detailing the exact kilometer difference and pointing out that no toll plaza was crossed. Demand recalculation based on the upfront booking quote.",
      },
      {
        step: "Demand Inward Bank Reversal via Legal Demand",
        description:
          "When support offers only partial app credits or refuses adjustment, dispatch an advocate legal notice requiring the excess debited amount returned to your bank account with statutory interest.",
      },
    ],
    statutoryRule: "CCPA Dark Patterns Guidelines (Drip Pricing) & Section 2(47) CPA 2019",
  },
  {
    id: "ac-refusal",
    tabLabel: "AC Refusal & Downgrade",
    title: "Driver Refused AC, Demanded Extra Offline Cash or Dispatched Substandard Vehicle",
    cause:
      "During summer months or peak traffic, cab drivers frequently refuse to turn on the vehicle's air conditioner, claiming aggregator commission rates are too low or demanding ₹50 to ₹100 extra in direct cash. In other cases, riders book a premium or sedan category (Uber Premier / Ola Prime) but receive a dented, dirty, or hatchback vehicle with non-functional seatbelts.",
    legalBasis:
      "Charging fares for an AC cab while providing non-AC transit constitutes blatant deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. In multiple consumer commission rulings across Mumbai, Delhi and Bengaluru, courts have held aggregators vicariously liable for driver non-compliance, awarding fare refunds and punitive damages ranging from ₹5,000 to ₹15,000.",
    steps: [
      {
        step: "Record Video / In-Cab Evidence & Audio Disclosures",
        description:
          "Capture a brief video clip inside the cab showing closed windows or the dashboard AC switch turned off, and record any driver demands for offline cash.",
      },
      {
        step: "Submit Urgent In-Ride Safety & Quality Escalation",
        description:
          "Flag the ride immediately through the app's 'Driver refused to switch on AC' option and request immediate fare adjustment down to non-AC / mini rates.",
      },
      {
        step: "Escalate to Platform Grievance Officer & e-Jagriti",
        description:
          "Serve a legal notice to the corporate aggregator highlighting breach of contract and deficiency in service, demanding compensation for physical distress before filing on e-Jagriti.",
      },
    ],
    statutoryRule: "Section 2(11) Deficiency in Service & Consumer Commission Precedents",
  },
  {
    id: "wallet-lockin",
    tabLabel: "Wallet Lock-In / Failed Refund",
    title: "Refund Processed as App Credits / Ola Money / Uber Credits Instead of Bank Transfer",
    cause:
      "When a refund is approved for a cancelled ride or overcharge, cab aggregators routinely credit their own closed-loop wallet (Ola Money, Uber Credits, Rapido Coins) rather than reversing the money to your source payment method (Google Pay, PhonePe, Paytm, or Credit Card). These credits often carry 30-day expiration dates or force future rides.",
    legalBasis:
      "Under Reserve Bank of India (RBI) Master Directions on Prepaid Payment Instruments (PPIs) and Consumer Protection (E-Commerce) Rules 2020, consumers have the unequivocal right to receive refunds in their original source payment mode. Forcing closed-loop vouchers or credits without explicit rider consent is recognized as a dark pattern ('Forced Action') and unfair trade practice.",
    steps: [
      {
        step: "Refuse App Credit Settlement in Writing",
        description:
          "Reply to the support resolution email or ticket stating clearly: 'I reject in-app wallet credits. Under RBI and CPA rules, refund must be credited to source bank/card.'",
      },
      {
        step: "Obtain Payment Gateway ARN / UTR Number",
        description:
          "Check your bank statement. If the aggregator claims the refund was processed to bank, demand the 12-digit Acquirer Reference Number (ARN) or bank UTR to verify inward credit.",
      },
      {
        step: "Issue Advocate Demand Notice for Cash Reversal",
        description:
          "Serve a formal statutory notice demanding immediate remittance to your bank account along with penal interest of 18% per annum for wrongful retention of consumer funds.",
      },
    ],
    statutoryRule: "RBI PPI Master Directions, E-Commerce Rules 2020 & Section 2(47) CPA 2019",
  },
];

export default function CabProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Buttons */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto scrollbar-none">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 py-3.5 px-4 sm:px-5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
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

      {/* Tab Content Display */}
      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full inline-block mb-2">
            {current.statutoryRule}
          </span>
          <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <div>
            <strong className="text-slate-900 font-bold block mb-1">
              Why This Happens on Ola, Uber &amp; Rapido:
            </strong>
            <p className="leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              {current.cause}
            </p>
          </div>

          <div>
            <strong className="text-slate-900 font-bold block mb-1">
              Statutory Legal Grounds for Reversal:
            </strong>
            <p className="leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              {current.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Remedy Plan */}
        <div>
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 mb-3">
            Immediate Action &amp; Escalation Pathway
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-600 block mb-1">
                    Step {i + 1}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-1">
                    {st.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Platform support stalled or rejected your refund? Issue a statutory 15-day demand notice.
          </p>
          <Link
            href="/legal-notice-charges"
            className="text-xs font-bold text-red-600 hover:text-red-700 underline shrink-0"
          >
            Review Legal Notice Process &amp; Fees →
          </Link>
        </div>
      </div>
    </div>
  );
}
