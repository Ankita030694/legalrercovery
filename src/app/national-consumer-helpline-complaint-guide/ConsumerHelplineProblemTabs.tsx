"use client";

import { useState } from "react";
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
    id: "ecommerce-refund",
    tabLabel: "E-Commerce & Quick Commerce",
    title: "E-Commerce Return Picked Up but Refund Stuck or Refused",
    cause:
      "Online platforms (Amazon, Flipkart, Meesho, Blinkit, Zepto, Myntra) frequently cancel returns at doorstep, claim 'incorrect item returned', or leave refunds stuck in 'initiated' status indefinitely. Customer care bots issue circular ticket numbers without releasing money.",
    legalBasis:
      "Under Rule 4(4) and Rule 5(3)(e) of the Consumer Protection (E-Commerce) Rules, 2020, and Section 2(47) CPA 2019, refusing to refund payment upon return of goods within the stipulated period is an unfair trade practice. Marketplaces cannot disown liability under intermediary status when they control logistics and return fulfillment.",
    steps: [
      {
        step: "Generate NCH 1915 / INGRAM Grievance",
        description:
          "Dial 1915 or log on to consumerhelpline.gov.in. Select the e-commerce company as a convergence partner. Enter your Order ID, tracking number, and invoice. You receive an instant 7-digit NCH docket number.",
      },
      {
        step: "Wait 45-Day Convergence Window & Download Log",
        description:
          "Monitor status on consumerhelpline.gov.in. If the company updates with evasive replies or summarily marks 'Closed - Unresolved', download the full INGRAM PDF docket history with timestamps.",
      },
      {
        step: "Serve 15-Day Statutory Legal Demand Notice",
        description:
          "Instruct an advocate to serve a formal legal notice to the e-commerce company's registered headquarters and nodal grievance officer, citing the NCH docket as proof of pre-litigation conciliation failure.",
      },
    ],
    statutoryRule: "Consumer Protection (E-Commerce) Rules, 2020 & Section 2(47) CPA 2019",
  },
  {
    id: "telecom-broadband",
    tabLabel: "Telecom & Internet Service",
    title: "Broadband Line Inactive for Weeks but Rental Billed & Deposit Withheld",
    cause:
      "Telecom and fiber broadband providers (Airtel, Jio, ACT, Vodafone Idea, BSNL) routinely suffer prolonged optical fiber cuts or ONT hardware failures. Despite multiple tickets, lines remain down while billing continues unabated, and security deposits are withheld upon disconnection.",
    legalBasis:
      "TRAI Quality of Service (QoS) Regulations mandate rebate in billing if telephone or broadband service remains disrupted beyond 3 days. Under Section 2(11) CPA 2019, charging full monthly rental during active service outages constitutes clear deficiency in service and unfair trade practice.",
    steps: [
      {
        step: "Register INGRAM Complaint Against Telecom Service Provider",
        description:
          "Select the Telecom sector on NCH INGRAM. Provide your broadband account number (CAN), date of initial outage complaint, and copies of unanswered email escalations.",
      },
      {
        step: "Record Automated SMS Updates & Ticket Closures",
        description:
          "Retain all SMS alerts where the provider falsely claims 'fault resolved' while physical connectivity remains down. These prove fraudulent service closure.",
      },
      {
        step: "Issue Advocate Notice Demanding Rental Rebate + Security Deposit",
        description:
          "Serve a 15-day statutory demand notice for refund of wrongful rentals, return of security deposit, and compensation for lost working hours before the District Commission.",
      },
    ],
    statutoryRule: "TRAI QoS Regulations 2024 & Section 2(11) CPA 2019",
  },
  {
    id: "airlines-travel",
    tabLabel: "Airlines & Travel Portals",
    title: "Flight Cancelled by Airline but Travel App Withholds Ticket Refund",
    cause:
      "When airlines cancel flights or alter flight schedules by more than 6 hours, online travel aggregators (MakeMyTrip, EaseMyTrip, Yatra, Cleartrip) trap customer money in wallet balances or blame the carrier's GDS refund queue, withholding thousands of rupees for months.",
    legalBasis:
      "DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part II, mandates full, immediate refund within 7 working days for credit card bookings and immediate refund for cash/debit bookings. The Supreme Court in Pravasi Legal Cell (2020) confirmed that lockdown or commercial excuses cannot justify retaining passenger ticket funds.",
    steps: [
      {
        step: "Lodge Dual NCH INGRAM Grievance",
        description:
          "File on consumerhelpline.gov.in tagging both the operating airline and the booking OTA platform. Attach the airline's cancellation SMS/email and PNR ticket copy.",
      },
      {
        step: "Track AirSewa Portal & NCH Escalation",
        description:
          "Cross-reference the NCH docket on the Ministry of Civil Aviation AirSewa portal to verify whether the airline has already remitted funds back to the agent.",
      },
      {
        step: "Serve Formal Demand Notice for 100% Refund + Statutory Interest",
        description:
          "If 14 days elapse without credit, serve a joint statutory legal notice to the airline and booking aggregator holding them jointly and severally liable under CPA 2019.",
      },
    ],
    statutoryRule: "DGCA CAR Section 3 Series M Part II & Section 2(11) CPA 2019",
  },
  {
    id: "banking-fintech",
    tabLabel: "Banking & Payment Gateways",
    title: "Money Debited via UPI / Card but Merchant Order Failed & No Reversal",
    cause:
      "Payment gateway dropouts (Razorpay, Cashfree, PayU, PhonePe, Paytm, Google Pay) cause customer bank accounts to be debited while the destination merchant order fails. Banks advise customers to wait 7-10 days, then repudiate chargeback claims stating 'settlement completed'.",
    legalBasis:
      "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) (DPSS.CO.PD No.629/02.01.014/2019-20) mandates auto-reversal within T+1 day for failed e-commerce transactions, with ₹100 per day penalty for delay payable directly to the customer.",
    steps: [
      {
        step: "Retrieve 12-Digit Bank UTR & File NCH Grievance",
        description:
          "Extract the 12-digit UTR/RRN from your bank statement. File an NCH complaint under the Banking/Fintech category providing transaction timestamp and merchant details.",
      },
      {
        step: "Lodge Parallel Complaint with RBI CMS Portal",
        description:
          "Submit a complaint on cms.rbi.org.in against your card-issuing bank quoting the failure to auto-reverse funds under the RBI TAT circular.",
      },
      {
        step: "Issue Statutory Legal Demand Notice",
        description:
          "If the bank and payment gateway refuse auto-reversal within 30 days, serve a statutory advocate notice claiming refund, RBI statutory penalty of ₹100/day, and litigation damages.",
      },
    ],
    statutoryRule: "RBI Harmonisation of TAT Circular 2019 & Section 2(47) CPA 2019",
  },
  {
    id: "electronics-warranty",
    tabLabel: "Appliances & Electronics Warranty",
    title: "Authorized Service Center Denies Warranty on Unsubstantiated Pretexts",
    cause:
      "Brands (Samsung, Apple, LG, Whirlpool, Sony) and their authorized service franchises routinely reject legitimate warranty claims on high-value televisions, refrigerators, and smartphones, alleging 'customer physical damage' or 'moisture exposure' without technical inspection reports.",
    legalBasis:
      "Under Section 2(10) and Section 84 of the Consumer Protection Act, 2019 (Product Liability), manufacturers and service providers are legally obligated to repair manufacturing defects free of cost during warranty. The burden of proving external consumer tampering rests entirely upon the manufacturer.",
    steps: [
      {
        step: "Demand Written Job Sheet & File on INGRAM",
        description:
          "Demand a signed physical job sheet from the service center stating the rejection ground. Register an INGRAM docket against the manufacturer brand.",
      },
      {
        step: "Retain Photographs & Service Center Communication",
        description:
          "Capture clear timestamped photographs of the device, screen, and serial number tag to disprove physical abuse claims.",
      },
      {
        step: "Issue 15-Day Advocate Notice to Corporate HQ",
        description:
          "Serve an advocate statutory notice to the brand's India Managing Director demanding immediate repair, unit replacement, or full invoice refund under threat of consumer court prosecution.",
      },
    ],
    statutoryRule: "Sections 2(10), 84 & 85 CPA 2019 (Product Liability Framework)",
  },
];

export default function ConsumerHelplineProblemTabs() {
  const [activeTabId, setActiveTabId] = useState(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden w-full">
      {/* Scrollable Tab Navigation */}
      <div className="border-b border-slate-200 bg-slate-50/80 px-3 pt-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 min-w-max pb-3">
          {PROBLEMS.map((problem) => {
            const isActive = problem.id === activeTabId;
            return (
              <button
                key={problem.id}
                type="button"
                onClick={() => setActiveTabId(problem.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#111827] text-white shadow-md shadow-slate-900/20"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {problem.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab Panel */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
              Statutory Sector Framework
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {activeProblem.title}
            </h3>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-lg shrink-0 self-start">
            {activeProblem.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              The Root Cause & Corporate Practice
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeProblem.cause}
            </p>
          </div>

          <div className="bg-amber-50/60 rounded-xl p-4 sm:p-5 border border-amber-200/80 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Statutory Consumer Law Position
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {activeProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Sequence */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#DC2626] rounded-full" />
            3-Step Escalation Protocol for this Sector
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    {st.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA Footer within Tab */}
        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-white">
              Has the company closed your NCH docket without resolution in this category?
            </p>
            <p className="text-slate-400 text-xs mt-0.5">
              A formal legal notice cites this unfulfilled docket to establish willful deficiency in court.
            </p>
          </div>
          <Link
            href="/send-legal-notice-online-india"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold tracking-wide transition-colors"
          >
            Draft Statutory Notice →
          </Link>
        </div>
      </div>
    </div>
  );
}
