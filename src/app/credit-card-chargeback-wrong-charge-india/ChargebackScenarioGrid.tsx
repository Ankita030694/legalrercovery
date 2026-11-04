"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  cardTitle: string;
  odds: string;
  oddsColor: string;
  summary: string;
  legalRule: string;
  evidenceNeeded: string[];
  actionPath: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "double-charge",
    tabLabel: "Double Debited",
    cardTitle: "Charged Twice for One Single Purchase or POS Swipe",
    odds: "99% Refund Success",
    oddsColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    summary:
      "Your card statement shows two identical debits with the same merchant ID, amount, and authorization timestamp due to network timeout, batch glitch, or multiple EDC machine swipes.",
    legalRule:
      "RBI DPSS Harmonisation of Turn Around Time (TAT) 2019: Auto-reversal mandate within T+1 day. Card networks (Visa Reason Code 12.6, Mastercard Reason Code 4834 - Duplicate Processing) hold the acquiring bank strictly liable.",
    evidenceNeeded: [
      "Credit card statement displaying both transaction references (RRN / Auth Codes)",
      "Single tax invoice or merchant till receipt proving only one purchase order",
      "SMS alerts showing timestamped debits within minutes of each other",
    ],
    actionPath:
      "File duplicate processing chargeback immediately with issuing bank. If not resolved within T+1 day, claim ₹100/day statutory compensation under RBI TAT guidelines.",
  },
  {
    id: "wrong-amount",
    tabLabel: "Wrong Amount",
    cardTitle: "Merchant Charged Higher Amount Than Authorized or Invoiced",
    odds: "95% Refund Success",
    oddsColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    summary:
      "You authorized a transaction for ₹1,500, but the statement reflects ₹15,000, or a restaurant/hotel altered the tip/total post-swipe without your written consent.",
    legalRule:
      "Card Network Rule 12.5 (Incorrect Transaction Amount). The cardholder is only liable for the amount authenticated on the EDC signed terminal slip or 2FA OTP submission.",
    evidenceNeeded: [
      "Original physical merchant bill / invoice stating the agreed amount",
      "Customer copy of EDC charge slip (if POS swipe) or order confirmation screenshot",
      "Credit card statement reflecting the inflated deduction",
    ],
    actionPath:
      "Submit dispute form for difference amount. Bank issues provisional credit within 7 working days pending presentment slip production by the merchant.",
  },
  {
    id: "undelivered-goods",
    tabLabel: "Undelivered Goods",
    cardTitle: "Merchant Took Payment but Failed to Deliver Goods or Services",
    odds: "90% Refund Success",
    oddsColor: "bg-blue-100 text-blue-800 border-blue-300",
    summary:
      "E-commerce merchant, airline, coaching institute, or vendor took payment upfront, cancelled or delayed dispatch indefinitely, and refuses or ghosts your refund request.",
    legalRule:
      "Visa Reason Code 13.1 / Mastercard 4853 (Services Not Provided / Merchandise Not Received). Section 2(47) Consumer Protection Act 2019 (Unfair Trade Practice).",
    evidenceNeeded: [
      "Order confirmation email or invoice detailing expected delivery date",
      "Written cancellation notice or email thread demanding delivery/refund",
      "Courier tracking showing 'cancelled', 'returned to seller', or never dispatched",
    ],
    actionPath:
      "Wait until agreed delivery date lapses. Serve written demand to merchant. On non-response within 48h, initiate chargeback citing non-delivery with merchant communications attached.",
  },
  {
    id: "cancelled-recurring",
    tabLabel: "Cancelled Autopay",
    cardTitle: "Subscription / Autopay Debited After Express Cancellation",
    odds: "92% Refund Success",
    oddsColor: "bg-blue-100 text-blue-800 border-blue-300",
    summary:
      "SaaS, gym, streaming platform, or app charged your credit card on an recurring e-mandate even though you terminated the subscription prior to the renewal billing cycle.",
    legalRule:
      "RBI Framework for Processing of e-mandates for Recurring Transactions (2021) + Visa Reason Code 13.7 (Cancelled Recurring Transaction). Issuer must provide mandate opt-out.",
    evidenceNeeded: [
      "Cancellation confirmation email or screenshot of dashboard status 'Cancelled'",
      "Timestamp showing cancellation was done prior to the billing cut-off date",
      "Credit card statement showing subsequent unauthorized debit",
    ],
    actionPath:
      "Revoke the e-mandate via your bank's netbanking SI portal and lodge a chargeback under recurring cancellation code. Bank must reverse unauthorized recurring runs.",
  },
  {
    id: "defective-service",
    tabLabel: "Defective / Counterfeit",
    cardTitle: "Received Broken, Counterfeit, or Grossly Misrepresented Item",
    odds: "80% Refund Success",
    oddsColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary:
      "Delivered goods are fake, severely damaged, or materially different from the seller's catalog description, and merchant refuses return policy compliance.",
    legalRule:
      "Consumer Protection (E-Commerce) Rules, 2020 & Card Scheme Dispute Rules (Condition: Not as Described / Defective Merchandise).",
    evidenceNeeded: [
      "Photographs / unboxing video clearly establishing damage, counterfeit tags, or mismatch",
      "Return courier waybill or proof of attempt to return item to merchant address",
      "Seller rejection correspondence refusing lawful return policy adherence",
    ],
    actionPath:
      "Attempt formal return first. If rejected or ignored after 14 days, lodge chargeback with proof of return shipment or physical unboxing evidence.",
  },
  {
    id: "unauthorised-fraud",
    tabLabel: "Unauthorised / Fraud",
    cardTitle: "Card Stolen, Cloned, or Compromised (No OTP / Non-2FA)",
    odds: "95% If Reported < 3 Days",
    oddsColor: "bg-purple-100 text-purple-800 border-purple-300",
    summary:
      "Unauthorized transactions appearing on your statement while card is in your possession, international transactions without OTP, or skimming debits.",
    legalRule:
      "RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18: Zero liability if notified within 3 working days. Bank must provide shadow credit within 10 working days.",
    evidenceNeeded: [
      "Immediate card blocking SMS / Reference number",
      "Police cyber crime complaint acknowledgement (cybercrime.gov.in / 1930)",
      "Cardholder statement demonstrating absence of shared credentials or negligence",
    ],
    actionPath:
      "Immediately hotlist card. File cyber complaint. Send zero-liability notification to bank nodal officer within 72 hours. Claim shadow reversal under RBI 2017 mandate.",
  },
];

export default function ChargebackScenarioGrid() {
  const [selectedScenario, setSelectedScenario] = useState<string>(SCENARIOS[0].id);

  const active = SCENARIOS.find((s) => s.id === selectedScenario) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === selectedScenario;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setSelectedScenario(scenario.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card Preview */}
      <article className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
              Dispute Category: {active.tabLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">{active.cardTitle}</h3>
          </div>
          <div className="self-start sm:self-center">
            <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold border ${active.oddsColor}`}>
              {active.odds}
            </span>
          </div>
        </div>

        <div className="py-4">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{active.summary}</p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mb-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Governing Legal Basis &amp; Network Rule
          </h4>
          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{active.legalRule}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="border border-slate-100 bg-white rounded-xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Essential Evidence Required
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {active.evidenceNeeded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-slate-100 bg-white rounded-xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Prescribed Action Path
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">{active.actionPath}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
