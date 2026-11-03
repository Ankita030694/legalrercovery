"use client";

import React, { useState } from "react";

interface ProblemScenario {
  id: string;
  tabLabel: string;
  title: string;
  platformTactic: string;
  legalViolation: string;
  immediateActions: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const GIG_SCENARIOS: ProblemScenario[] = [
  {
    id: "id-blocked",
    tabLabel: "ID Blocked / Payout Frozen",
    title: "Sudden Account Deactivation & Withheld Weekly Payout",
    platformTactic:
      "Platforms like Zomato, Swiggy, Zepto, or Blinkit abruptly deactivate the partner app ID citing vague algorithm alerts (e.g., 'customer report', 'unusual activity', or 'violation of terms'). Concurrently, all accumulated weekly earnings, surge incentives, and tips earned over the past 7–14 days are immediately locked in the wallet and refused for disbursement.",
    legalViolation:
      "Under Section 73 of the Indian Contract Act, 1872, once services or deliveries have been rendered by the partner, the platform cannot unilaterally withhold earned contractual consideration. Furthermore, Section 114 of the Code on Social Security, 2020, and State Gig Worker Acts (such as Section 16 of the Rajasthan Platform Based Gig Workers Act, 2023) mandate fair hearing, written cause, and prompt payout disbursement prior to terminating access.",
    immediateActions: [
      {
        step: "Capture Full Digital App Trail",
        description:
          "Before the app session terminates or expires, take full screenshots and screen recordings of your weekly payout screen, trip logs, incentive ledgers, and the exact deactivation banner.",
      },
      {
        step: "Demand Formal Written Explanation via Grievance Officer",
        description:
          "Email the platform's designated Grievance Officer and Partner Support quoting your Registered Partner ID and mobile number, demanding the specific audit log or trip IDs triggering the block.",
      },
      {
        step: "Serve 15-Day Advocate Legal Demand Notice",
        description:
          "If the platform defers or gives automated chatbot responses for 7 days, dispatch an advocate demand notice for immediate payout release with 18% penal interest under Contract Act Section 73.",
      },
    ],
    statutoryRule: "Section 73 Indian Contract Act, 1872 & Section 16 Rajasthan Gig Workers Act, 2023",
  },
  {
    id: "gps-fraud-allegation",
    tabLabel: "Bogus GPS Fraud Allegation",
    title: "Algorithmic Claim of 'GPS Spoofing / Mock Location' Without Audit Trail",
    platformTactic:
      "Ride-hailing apps (Uber, Ola, Rapido) or quick-commerce platforms penalize drivers by asserting that automated backend systems detected 'location spoofing' or 'artificial trip extension'. The platform unilaterally wipes out the driver's trip fares, debits penalty charges into negative balance, and refuses to provide the underlying raw telematics data.",
    legalViolation:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), computer-generated claims cannot be treated as conclusive proof without certified electronic hash and telematics metadata. Unilateral debiting without a show-cause opportunity constitutes Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019, and wrongful loss under BNS Section 318.",
    immediateActions: [
      {
        step: "Preserve Google Maps Timeline & Vehicle Dashcam / Fastag Logs",
        description:
          "Download your verified Google Maps location timeline, toll plaza Fastag transaction stamps, and fuel receipts matching the contested trip timestamp to disprove mock location allegations.",
      },
      {
        step: "File Level-1 Dispute with Telematics Demand",
        description:
          "File an in-app dispute requesting the certified sensor logs and GPS coordinate delta from the aggregator's operations desk.",
      },
      {
        step: "Lodge Labour Authority & Consumer Grievance",
        description:
          "Issue a legal notice citing lack of natural justice (audi alteram partem) and escalate to the Joint Labour Commissioner or e-Jagriti consumer forum.",
      },
    ],
    statutoryRule: "Section 63 BSA 2023 & Section 2(47) Consumer Protection Act, 2019",
  },
  {
    id: "negative-balance",
    tabLabel: "Bogus Negative Balance",
    title: "Unjustified Customer Cancellation Penalties & Fuel Clawback",
    platformTactic:
      "Platforms routinely deduct customer cancellation fees, spilled order claims, or fuel incentive clawbacks directly from rider wallets, often driving the balance into steep negative figures. When the worker logs back in, their new earnings are automatically siphoned to offset the bogus platform penalties.",
    legalViolation:
      "Contractual terms permitting unliquidated, unilateral punitive penalties violate Section 74 of the Indian Contract Act, 1872. A platform cannot act as complainant, judge, and executioner by levying fines that exceed actual proven operational loss caused by the gig worker.",
    immediateActions: [
      {
        step: "Audit All In-App Deduction Slips",
        description:
          "Extract the transaction reference IDs, dates, and order numbers for every penalty deduction reflected in your partner passbook.",
      },
      {
        step: "Submit Written Rebuttal on Customer Cancellation",
        description:
          "Demonstrate that cancellation was caused by customer non-availability, merchant restaurant delay exceeding 20 minutes, or unsafe weather conditions.",
      },
      {
        step: "Enforce Unlawful Penalty Refund via Legal Notice",
        description:
          "Serve a formal demand holding the platform liable for unlawful deduction of earned wages and demanding reversal of negative wallet entries within 15 calendar days.",
      },
    ],
    statutoryRule: "Section 74 Indian Contract Act, 1872 & Section 316 Bharatiya Nyaya Sanhita, 2023",
  },
  {
    id: "cod-dispute",
    tabLabel: "COD Cash Discrepancy",
    title: "Cash on Delivery (COD) Deposit Disputes & Wallet Freeze",
    platformTactic:
      "Quick-commerce delivery partners collecting customer cash are often accused of 'unremitted COD amounts' due to delayed bank deposit machine (CDM) receipts, UPI merchant QR sync failures, or dark store cashier reconciliation errors. The platform blocks the account and withholds all earned delivery fees.",
    legalViolation:
      "Retaining legitimate delivery service fees against an unverified operational accounting difference violates Section 316 of the Bharatiya Nyaya Sanhita, 2023 (Criminal Breach of Trust). The platform must reconcile deposit slips before declaring partner default.",
    immediateActions: [
      {
        step: "Collect CDM Bank Slips & UPI Transaction UTRs",
        description:
          "Keep physical or digital proof of every cash deposit made at Airtel Payments Bank, PayNearby counters, cash deposit kiosks, or store cashiers.",
      },
      {
        step: "Demand Batch Reconciliation Log",
        description:
          "Email dark store hub management and platform finance teams with scanned deposit slips, requesting formal journal clearance within 48 hours.",
      },
      {
        step: "Dispatch Statutory Notice for Wrongful Withholding",
        description:
          "Serve a legal notice warning of criminal breach of trust and civil recovery proceedings if withheld earnings are not released immediately.",
      },
    ],
    statutoryRule: "Section 316 BNS 2023 & Section 73 Indian Contract Act, 1872",
  },
];

export default function GigWorkerScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(GIG_SCENARIOS[0].id);
  const currentScenario = GIG_SCENARIOS.find((s) => s.id === activeTab) || GIG_SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Scrollable Tab Navigation */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto no-scrollbar p-1.5 gap-1.5">
        {GIG_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? "bg-white text-red-600 shadow-xs border border-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content */}
      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
            Statutory Scenario Analysis
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
            {currentScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wide">
              Platform Tactic &amp; Bottleneck:
            </strong>
            <p className="text-slate-700 leading-relaxed">{currentScenario.platformTactic}</p>
          </div>

          <div className="p-4 bg-red-50/50 rounded-xl border border-red-200/70 space-y-1.5">
            <strong className="text-red-950 font-bold block text-xs uppercase tracking-wide">
              Statutory Violation:
            </strong>
            <p className="text-slate-800 leading-relaxed">{currentScenario.legalViolation}</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider">
            Immediate 3-Step Action Plan:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentScenario.immediateActions.map((action, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-snug">
                    {action.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-7">
                  {action.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-slate-100/80 rounded-xl border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            <strong>Governing Statutory Rule:</strong> {currentScenario.statutoryRule}
          </span>
          <span className="text-[11px] font-bold text-red-600">
            Enforceable via Registered Legal Notice
          </span>
        </div>
      </div>
    </div>
  );
}
