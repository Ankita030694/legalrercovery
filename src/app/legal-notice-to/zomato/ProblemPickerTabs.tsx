"use client";

import React, { useState } from "react";

interface ProblemPanel {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  cause: string;
  legalBasis: {
    statute: string;
    section: string;
    description: string;
  };
  steps: {
    stepNumber: string;
    action: string;
    detail: string;
  }[];
  statutoryTimeline: string;
  templateAnchor: string;
}

const PANELS: ProblemPanel[] = [
  {
    id: "undelivered",
    tabLabel: "Order Never Delivered",
    badge: "Non-Delivery & Rider Default",
    title: "Rider Marked Food 'Delivered' but Order Never Reached Your Doorstep",
    cause:
      "Delivery personnel frequently mark orders as completed prematurely to avoid internal algorithmic delivery-speed penalties or when encountering GPS routing errors. When consumers report non-delivery in the Zomato application, automated chatbot scripts typically insist that 'GPS coordinates confirm the rider arrived near your location' and close the ticket without a refund.",
    legalBasis: {
      statute: "Consumer Protection Act, 2019 & E-Commerce Rules, 2020",
      section: "Section 2(11) (Deficiency in Service), Section 2(47) (Unfair Trade Practice) & Rule 4(5)",
      description:
        "Accepting advance financial consideration while failing to deliver the purchased food constitutes an explicit deficiency in service. E-commerce platforms cannot disclaim liability by asserting that delivery riders are independent contractors.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Capture In-App Chat Logs, Call History & GPS Route",
        detail:
          "Take immediate full-screen screenshots of the order timeline, the abrupt chat termination, rider call records showing unanswered outgoing calls, and any live map tracking displaying incorrect coordinates.",
      },
      {
        stepNumber: "Step 2",
        action: "Demand Written Handover Proof from Zomato Grievance Desk",
        detail:
          "Email grievance@zomato.com and nodalofficer@zomato.com demanding formal proof of delivery (such as OTP verification, recipient signature, or timestamped doorstep photograph). Explicitly state that automated GPS proximity does not establish physical delivery.",
      },
      {
        stepNumber: "Step 3",
        action: "Register NCH Docket & Serve Advocate Legal Demand Notice",
        detail:
          "Dial National Consumer Helpline 1915 to create an official INGRAM docket. If Zomato fails to credit the full amount within 48 hours, issue a formal advocate-drafted legal notice claiming refund, statutory interest, and compensation for mental agony.",
      },
    ],
    statutoryTimeline: "48-hour statutory acknowledgment; maximum 30 days dispute resolution under Rule 4(5).",
    templateAnchor: "#zomato-legal-notice-template",
  },
  {
    id: "spoiled-wrong",
    tabLabel: "Wrong or Spoiled Food",
    badge: "Food Safety & Quality Defect",
    title: "Delivered Contaminated Food, Missing Items, or Non-Veg Instead of Veg",
    cause:
      "High restaurant order volumes often lead to mislabeled food parcels, missing main courses, spilled packaging, or the delivery of non-vegetarian food to strictly vegetarian households. Zomato support bots typically dismiss these severe breaches with token promotional coupons (e.g. ₹20–₹50) rather than processing a full cash refund.",
    legalBasis: {
      statute: "Food Safety and Standards Act, 2006 & CPA 2019",
      section: "Section 2(47) CPA 2019 & FSS Act Section 59 (Unsafe Food Liability)",
      description:
        "Delivering contaminated, sub-standard, or religiously inappropriate food breaches the statutory warranty of merchantable quality. District Consumer Commissions hold both the food aggregator and the partner restaurant jointly liable for resulting distress and health hazards.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Photograph the Food, Restaurant Tax Invoice & Container Labels",
        detail:
          "Take clear, well-lit photos and continuous unboxing videos highlighting the discrepancy, contaminated food, missing items, and the restaurant's printed paper bill showing the original itemized order.",
      },
      {
        stepNumber: "Step 2",
        action: "Refuse In-App Wallet Coupons & Demand Bank Restitution",
        detail:
          "Explicitly message support that you reject Zomato credits or promotional tokens under CCPA Dark Pattern Guidelines. Demand 100% refund reversal to your original banking or UPI source.",
      },
      {
        stepNumber: "Step 3",
        action: "Serve Joint Advocate Legal Notice to Zomato & Restaurant",
        detail:
          "If the grievance officer refuses a cash refund, dispatch an advocate legal notice holding Zomato Limited (Respondent No. 1) and the restaurant merchant (Respondent No. 2) jointly liable under Section 35 of the Consumer Protection Act, 2019.",
      },
    ],
    statutoryTimeline: "Immediate source refund upon defect verification; 48 hours statutory grievance review.",
    templateAnchor: "#zomato-legal-notice-template",
  },
  {
    id: "cancellation-fee",
    tabLabel: "100% Cancellation Penalty",
    badge: "Unfair Contract & Dark Pattern",
    title: "Zomato Deducted 100% Cancellation Fee After Inordinate Delivery Delays",
    cause:
      "When food delivery is delayed 45 to 90 minutes past the promised delivery estimate, consumers who attempt to cancel the unfulfilled order face automated 100% cancellation charges. Zomato pockets the entire payment claiming the merchant has already prepared the food, penalizing the victim for platform delay.",
    legalBasis: {
      statute: "CCPA Guidelines for Prevention of Dark Patterns, 2023 & CPA 2019",
      section: "Section 2(46) (Unfair Contract) & Rule 6(5) E-Commerce Rules, 2020",
      description:
        "Imposing unilateral cancellation penalties when delivery timelines are breached by the platform or restaurant is an unfair contract term under Section 2(46) and a prohibited dark pattern. Rule 6(5) mandates that e-commerce entities cannot charge cancellation fees without mutual contractual symmetry.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Document the Inordinate Delivery Delay Timestamps",
        detail:
          "Capture screenshots demonstrating the initial promised delivery time (ETA), the subsequent delayed status updates, and the exact timestamp when cancellation was requested due to non-performance.",
      },
      {
        stepNumber: "Step 2",
        action: "Dispute the Debit as an Unfair Contractual Penalty",
        detail:
          "Submit a formal complaint to grievance@zomato.com citing Section 2(46) CPA 2019. Demand an immediate reversal of the cancellation charge, noting that delay on the part of the seller voids cancellation penalties.",
      },
      {
        stepNumber: "Step 3",
        action: "Issue Statutory Demand Notice with Compensation Claim",
        detail:
          "If Zomato retains the penalty, serve an advocate legal notice demanding the full deducted amount with 18% per annum interest, plus compensation for wrongful withholding under Section 39 of the Consumer Protection Act.",
      },
    ],
    statutoryTimeline: "Immediate refund for platform-side default; 30-day statutory resolution limit.",
    templateAnchor: "#zomato-legal-notice-template",
  },
  {
    id: "payment-failed",
    tabLabel: "Debited but Order Failed",
    badge: "Banking & Gateway Glitch",
    title: "Bank Account Debited via UPI or Card, but Zomato Displays 'Order Failed'",
    cause:
      "During peak meal hours, communication timeouts between Zomato's payment gateway (Razorpay, PayU, Juspay), the NPCI UPI switch, and the issuing bank cause order generation failures. The customer's account is debited, but the funds remain stuck in a gateway settlement or nodal suspense account without automated reversal.",
    legalBasis: {
      statute: "RBI Harmonisation of Turn Around Time (TAT) Framework",
      section: "Circular DPSS.CO.PD No.629/02.01.014/2019-20 & CPA 2019 Section 2(47)",
      description:
        "Under Reserve Bank of India directions, failed merchant e-commerce transactions must be auto-reversed to the customer's account within T+1 working days. Delays beyond T+1 mandate compensation of ₹100 per day payable to the customer.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Retrieve the 12-Digit UPI RRN or 23-Digit Card ARN",
        detail:
          "Check your bank SMS or banking application statement to extract the 12-digit Retrieval Reference Number (RRN) for UPI payments or the 23-digit Acquirer Reference Number (ARN) for debit/credit cards.",
      },
      {
        stepNumber: "Step 2",
        action: "Obtain Written Gateway Reconciliation Status from Bank",
        detail:
          "Contact your bank's chargeback department with the reference number to confirm whether Zomato's merchant acquiring bank claimed the settlement or if the transaction was abandoned.",
      },
      {
        stepNumber: "Step 3",
        action: "Escalate with Zomato Grievance Desk & Legal Notice",
        detail:
          "Forward the RRN/ARN and bank debit record to nodalofficer@zomato.com. If uncredited beyond 48 hours, serve a legal notice claiming the principal refund plus ₹100/day RBI delay compensation.",
      },
    ],
    statutoryTimeline: "T+1 working days auto-reversal; ₹100 per day statutory delay compensation thereafter.",
    templateAnchor: "#zomato-legal-notice-template",
  },
];

export default function ProblemPickerTabs() {
  const [activeTab, setActiveTab] = useState<string>("undelivered");

  const currentPanel = PANELS.find((p) => p.id === activeTab) || PANELS[0];

  return (
    <div className="w-full my-8">
      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Zomato Dispute Categories"
        className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200"
      >
        {PANELS.map((panel) => {
          const isSelected = panel.id === activeTab;
          return (
            <button
              key={panel.id}
              role="tab"
              id={`tab-${panel.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${panel.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTab(panel.id)}
              className={`flex-1 min-w-[140px] sm:min-w-[180px] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-center cursor-pointer ${
                isSelected
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              {panel.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Render active panel prominently; other panels exist in DOM for SEO crawlability */}
      <div className="mt-6">
        {PANELS.map((panel) => {
          const isSelected = panel.id === activeTab;
          return (
            <div
              key={panel.id}
              role="tabpanel"
              id={`panel-${panel.id}`}
              aria-labelledby={`tab-${panel.id}`}
              className={`bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm transition-opacity duration-200 ${
                isSelected ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                  {panel.badge}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Statutory Limit: <strong className="text-slate-700">{panel.statutoryTimeline}</strong>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {panel.title}
              </h3>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Root Cause of Dispute
                </h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {panel.cause}
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h4 className="text-sm font-bold text-slate-900">
                    Legal Basis: {panel.legalBasis.statute} ({panel.legalBasis.section})
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed pl-7">
                  {panel.legalBasis.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Actionable 3-Step Remedy
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {panel.steps.map((st, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50/70 rounded-xl p-4 border border-slate-100 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-black text-red-600 block mb-1">
                          {st.stepNumber}
                        </span>
                        <h5 className="font-bold text-slate-900 text-sm mb-2">
                          {st.action}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {st.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500">
                  Customer care unhelpful? Escalate with statutory notice.
                </span>
                <a
                  href={panel.templateAnchor}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 hover:underline"
                >
                  View Legal Notice Format for This Issue →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
