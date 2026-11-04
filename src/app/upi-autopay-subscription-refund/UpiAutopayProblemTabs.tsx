"use client";

import React, { useState } from "react";

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
    id: "trial-trap",
    tabLabel: "Free Trial Trap",
    title: "Free Trial Converted to Exorbitant Annual Auto-Debit Without Clear Warning",
    cause:
      "Digital applications, OTT services, and foreign SaaS platforms frequently offer '₹1 or Free 7-Day Trials' while covertly registering a recurring UPI AutoPay mandate for ₹2,999 to ₹14,999 per year. The renewal terms are buried in unscrollable terms, and the app deliberately withholds cancellation links inside its user interface until after the debit occurs.",
    legalBasis:
      "This constitutes an illegal 'Subscription Trap' under Guideline 5 and Annexure 1 (Clause 5) of the CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023. Under Section 2(47) of the Consumer Protection Act, 2019, deceiving users with obscure recurring auto-renewals is an actionable unfair trade practice. In addition, debits without explicit 24-hour pre-transaction warnings violate RBI Circular DPSS.CO.PD.No.1324/02.14.003/2020-21.",
    steps: [
      {
        step: "Revoke Mandate Immediately in UPI App",
        description:
          "Open PhonePe / Google Pay / Paytm / BHIM > Profile > UPI AutoPay / Autopay. Locate the merchant mandate and tap 'Pause' or 'Cancel Mandate' using your UPI PIN to stop future debits.",
      },
      {
        step: "Lodge Dispute with Merchant & Payment Gateway",
        description:
          "Email merchant customer support and the payment aggregator (Razorpay, Cashfree, PayU, Stripe) within 24 hours citing Dark Patterns Guidelines 2023 and requesting a 100% immediate cancellation refund.",
      },
      {
        step: "File National Consumer Helpline (NCH) & Bank Chargeback",
        description:
          "Register a complaint on consumerhelpline.gov.in (Toll-Free 1915) under 'Unfair Trade Practice' and submit a formal chargeback request with your bank citing unnotified subscription debit.",
      },
    ],
    statutoryRule: "CCPA Dark Patterns Guidelines 2023 & Section 2(47) CPA 2019",
  },
  {
    id: "cancelled-debited",
    tabLabel: "Debited After Cancel",
    title: "Money Debited Even After You Successfully Cancelled or Revoked AutoPay",
    cause:
      "You went into your UPI application and successfully cancelled the mandate days in advance, receiving a confirmation SMS. However, due to batch reconciliation synchronization latency between the merchant acquiring bank and NPCI's UPI Mandate Management System (MMS), the scheduled execution file was processed anyway, deducting funds from your account.",
    legalBasis:
      "Once an e-mandate is revoked by the consumer, any subsequent debit constitutes an 'Unauthorised Electronic Transaction' under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18. When reported to your bank within 3 working days, customer liability is strictly ZERO, and the bank must credit a shadow reversal within 10 working days.",
    steps: [
      {
        step: "Gather Revocation Proof",
        description:
          "Capture screenshots of the 'Mandate Cancelled / Revoked' screen on your UPI app showing the exact date, time, and Mandate UMN (Unique Mandate Number).",
      },
      {
        step: "Submit Written Zero-Liability Claim to Bank",
        description:
          "File an immediate dispute through your bank's net banking portal or branch grievance desk claiming zero liability under RBI 2017 regulations, attaching the revocation timestamp.",
      },
      {
        step: "Escalate to RBI Integrated Ombudsman (CMS)",
        description:
          "If your bank fails to credit the full amount within 30 days, submit a statutory complaint to the RBI Ombudsman under Clause 10 of the Integrated Ombudsman Scheme, 2021.",
      },
    ],
    statutoryRule: "RBI Zero Liability Circular 2017 & NPCI UPI MMS Rules",
  },
  {
    id: "no-sms-alert",
    tabLabel: "No 24h Pre-Debit SMS",
    title: "Bank / UPI App Debited Account Without Mandatory 24-Hour Advance Alert",
    cause:
      "The Reserve Bank of India strictly mandates that issuers must dispatch an SMS and email notification at least 24 hours prior to actual mandate debit, allowing the consumer to opt out or cancel. Frequently, issuer banks or telecom gateways experience push-notification failures, and the debit takes place without any advance warning.",
    legalBasis:
      "Clause 2(b) of RBI Circular DPSS.CO.PD.No.447/02.14.003/2019-20 and Circular DPSS.CO.PD.No.1324/02.14.003/2020-21 mandate advance pre-debit intimations. Failure by the bank or payment system operator to provide this notification deprives the user of their statutory opt-out right, constituting gross operational deficiency.",
    steps: [
      {
        step: "Check Telecom & Bank SMS Logs",
        description:
          "Verify your SMS history for the registered mobile number during the 48-hour window before the debit to prove that no pre-transaction mandate intimation was received.",
      },
      {
        step: "Serve Deficiency Notice to Issuer Bank",
        description:
          "Lodge a complaint with your bank's Principal Nodal Officer emphasizing the violation of mandatory RBI e-mandate pre-debit rules and demanding reversal.",
      },
      {
        step: "Claim Delay Compensation Under RBI TAT",
        description:
          "If the bank admits the alert failed or was missing, seek refund plus penal compensation for failed regulatory compliance under the RBI Banking Ombudsman framework.",
      },
    ],
    statutoryRule: "RBI E-Mandate Framework Clause 2(b) & RB-IOS 2021",
  },
  {
    id: "duplicate-mandate",
    tabLabel: "Duplicate Debit",
    title: "Double Debit: Amount Deducted Twice for the Same Recurring Cycle",
    cause:
      "When processing monthly loan EMI mandates, insurance premiums, or software retainers, connectivity blips between the UPI PSP and the sponsor bank can trigger dual presentation of the same clearing file, causing the bank to debit two identical sums on the same day.",
    legalBasis:
      "Under RBI Circular DPSS.CO.PD.No.629/02.01.014/2019-20 on Harmonisation of Turn Around Time (TAT), duplicate or erroneous debits in merchant transactions must be reversed automatically within T+1 working day. A delay beyond T+1 entitles the customer to mandatory compensation of ₹100 per day.",
    steps: [
      {
        step: "Note Both 12-Digit UTRs / RRNs",
        description:
          "Download your bank statement and identify both distinct Transaction Reference Numbers (UTRs) for the duplicate charges.",
      },
      {
        step: "Raise UPI Dispute in App & Bank",
        description:
          "Use the 'Raise Dispute' feature on PhonePe / Google Pay / Paytm selecting 'Duplicate Payment' and forward the same details to the sponsor merchant's accounts team.",
      },
      {
        step: "Demand ₹100/Day RBI TAT Penalty",
        description:
          "If the excess charge is not credited back within 24 hours of notification, file a formal claim for the refund amount plus ₹100 per day delay penalty.",
      },
    ],
    statutoryRule: "RBI TAT Harmonisation Circular (₹100/Day Delay Compensation)",
  },
  {
    id: "hidden-renewal",
    tabLabel: "App Refusing Refund",
    title: "Merchant Claims 'Strict No-Refund Policy' After Immediate Cancellation",
    cause:
      "Consumers realize a subscription debited on AutoPay and immediately cancel within 1 to 2 hours of debit. The merchant responds with automated emails stating: 'Subscriptions are strictly non-refundable per our Terms of Service once billed.'",
    legalBasis:
      "One-sided contract terms that deny refunds for unutilized services while trapping users in digital auto-renewals are void and unenforceable under Section 2(46) ('Unfair Contract') and Section 2(47) of the Consumer Protection Act, 2019. Courts repeatedly hold that consumer protection statutes override boilerplate corporate user agreements.",
    steps: [
      {
        step: "Log Written Cancellation Timestamp",
        description:
          "Preserve emails and portal messages showing you cancelled immediately after the debit and did not consume or access the service for the renewed period.",
      },
      {
        step: "Draft Pre-Litigation Advocate Notice",
        description:
          "Send a formal 15-day statutory legal demand notice through an advocate to the merchant's registered corporate office and directors, threatening CCPA prosecution.",
      },
      {
        step: "File e-Jagriti Consumer Complaint",
        description:
          "File an online consumer complaint via e-Jagriti (edaakhil.nic.in) for refund of subscription fee, compensation for mental harassment, and legal litigation costs.",
      },
    ],
    statutoryRule: "Section 2(46) & 2(47) Consumer Protection Act, 2019",
  },
];

export default function UpiAutopayProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Header */}
      <div className="flex overflow-x-auto no-scrollbar border-b border-slate-200 bg-slate-50/80 p-1.5 sm:p-2 gap-1.5 sm:gap-2">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 shrink-0 self-start sm:self-auto">
            {currentProblem.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          <div className="space-y-2 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
              Why This Debit Happened
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="space-y-2 bg-emerald-50/60 p-4 sm:p-5 rounded-xl border border-emerald-200/70">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800">
              Your Statutory Protection &amp; Legal Grounds
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Step-by-Step Action Plan for this tab */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Immediate Action Plan for this Scenario
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-red-300 transition-colors shadow-2xs relative"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {s.step}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
