"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  badge: string;
  title: string;
  trigger: string;
  legalBasis: string;
  actionSteps: string[];
  evidenceNeeded: string[];
  timeline: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "extranet-hold",
    badge: "Scenario 01",
    title: "Frozen Extranet Wallet & Unilateral Ledger Holds",
    trigger:
      "An OTA freezes 100% of your property's weekly payout cycle citing 'pending audit', 'rate parity variance', or unverified guest complaints — locking up ₹3 Lakh to ₹25 Lakh of completed stay revenue.",
    legalBasis:
      "MSMED Act, 2006 Sections 15–18 (for Udyam-registered hotels as Service MSMEs) + Indian Contract Act s.73 (ban on arbitrary set-off without adjudicated breach).",
    actionSteps: [
      "Export the complete Extranet Payout Ledger and Reconciliation Statement before portal access is throttled.",
      "Serve a formal Extranet Reconciliation & Statutory Demand Notice to the OTA's Nodal Officer and General Counsel granting a 15-day cure window.",
      "File a delayed-payment reference on the MSME Samadhaan portal (MSEFC) claiming principal plus 3x RBI Bank Rate compound interest under Section 16.",
      "If the OTA agreement contains an arbitration clause, issue a Section 21 invocation notice naming an independent neutral institutional roster.",
    ],
    evidenceNeeded: [
      "Udyam Registration Certificate (NIC 55101 / 55102)",
      "Signed PMS Guest Registration Cards (GRCs) & Checkout Tax Invoices",
      "Extranet Payout Hold Screenshot & Support Ticket History",
    ],
    timeline: "15-Day Notice Cure -> MSEFC / Section 21 Escalation",
  },
  {
    id: "vcc-decline",
    badge: "Scenario 02",
    title: "Declined or Expired Virtual Credit Card (VCC) Post-Checkout",
    trigger:
      "Your front desk checks in a prepaid OTA or global bed-bank booking, but when night audit attempts to settle the single-use Virtual Credit Card (VCC) at checkout, the terminal returns 'Expired', 'Zero Balance', or 'Insufficient Funds'.",
    legalBasis:
      "Order XXXVII CPC Summary Suit on confirmed booking vouchers + Indian Contract Act s.70 (non-gratuitous hospitality service rendered) + BSA 2023 s.63 electronic POS logs.",
    actionSteps: [
      "Capture the exact POS terminal decline receipt, authorization error code, and timestamped Channel Manager booking confirmation.",
      "Raise an immediate automated dispute ticket on the OTA/bed-bank partner portal within 24 hours of checkout to defeat 'late-claim' waivers.",
      "Issue an Advocate Demand Notice bundling all unpaid VCC booking IDs into a single quantified schedule with GSTR-1 invoice references.",
      "Escalate to Commercial Court / Order XXXVII Summary Suit or MSEFC if the B2B intermediary fails to re-issue valid settlement funds.",
    ],
    evidenceNeeded: [
      "POS / Payment Gateway VCC Decline Receipt & Error Code",
      "OTA / Bed-Bank Prepaid Booking Voucher & Rate Confirmation",
      "Guest ID Proof Copy & Signed Checkout Folio",
    ],
    timeline: "24-Hr Portal Flag -> 15-Day Legal Demand -> Summary Suit / MSEFC",
  },
  {
    id: "relocation-penalty",
    badge: "Scenario 03",
    title: "Arbitrary 'Guest Relocation' (Walk-Out) Debit Notes",
    trigger:
      "The OTA deducts ₹15,000–₹1,20,000 per booking from your future settlements claiming your hotel 'walked' a guest, even when the guest arrived past cut-off, had no valid ID, or the overbooking was caused by the OTA's own channel-sync lag.",
    legalBasis:
      "Indian Contract Act Section 74 (penalties cannot be enforced without proof of actual loss) + Competition Commission of India (CCI) FHRAI parity & unfair-terms principles.",
    actionSteps: [
      "Audit the Channel Manager API / XML inventory push logs to prove zero rooms were available or that the OTA delayed transmitting a cancellation.",
      "Contest the debit note in writing within the contract's dispute window, demanding actual third-party relocation invoice proof.",
      "Include unlawful relocation deductions in your statutory MSMED / Arbitration claim as unauthorized wrongful withholding.",
    ],
    evidenceNeeded: [
      "Channel Manager XML/API Inventory Sync Logs",
      "CCTV / Front-Desk Check-In Register & No-Show Timestamp",
      "Written Demand for Third-Party Relocation Tax Invoice",
    ],
    timeline: "Immediate API Audit -> 15-Day Disallowance Challenge",
  },
  {
    id: "bedbank-default",
    badge: "Scenario 04",
    title: "B2B Tour Wholesaler, DMC & Bed-Bank Ledger Defaults",
    trigger:
      "A domestic or outbound DMC, wedding tour wholesaler, or B2B bed-bank books 30–150 room nights on 30-day credit, collects full payment from end-travelers, and then defaults or issues a dishonoured security cheque.",
    legalBasis:
      "Negotiable Instruments Act s.138 (for bounced post-dated/security cheques) + Order XXXVII CPC + MSMED Act s.15–18 + Section 43B(h) Income Tax leverage.",
    actionSteps: [
      "Reconcile all rooming lists, group check-in sheets, and GST B2B tax invoices (matching GSTR-1 / GSTR-2B).",
      "If a security or settlement cheque bounces, serve a mandatory Section 138 NI Act demand notice within 30 days of the bank return memo.",
      "Remind the corporate buyer that under Section 43B(h) of the Income Tax Act, unpaid MSME hotel invoices beyond 45 days trigger tax disallowance in their books.",
    ],
    evidenceNeeded: [
      "Signed Group Rooming List & B2B Credit Application",
      "GSTR-1 Filed Tax Invoices & Ledger Confirmation",
      "Original Dishonoured Cheque + Bank Return Memo (if applicable)",
    ],
    timeline: "30-Day Cheque Memo Window -> 15-Day Cure -> Criminal / Civil Filing",
  },
];

export default function OtaScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`text-left p-3.5 rounded-xl border transition-all duration-150 cursor-pointer ${
                isSelected
                  ? "bg-slate-900 border-slate-900 text-white shadow-md"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                  isSelected ? "text-red-400" : "text-[#DC2626]"
                }`}
              >
                {scenario.badge}
              </span>
              <span className="block text-xs font-bold leading-snug">{scenario.title}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              {current.badge} &bull; Operational Playbook
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">{current.title}</h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
            {current.timeline}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Failure Trigger
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">{current.trigger}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Governing Statutory Hook
            </p>
            <p className="text-sm text-slate-800 font-medium leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Step-by-Step Recovery Protocol
            </p>
            <ol className="space-y-2.5">
              {current.actionSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
              Mandatory Evidence Pack
            </p>
            <ul className="space-y-2.5">
              {current.evidenceNeeded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <span className="text-emerald-400 font-bold shrink-0">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
