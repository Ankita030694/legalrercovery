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
    id: "wrong-damaged",
    tabLabel: "Wrong or Damaged Delivery",
    badge: "Mismatched / Expired Consignment",
    title: "Delivered Wrong Grocery Items, Broken Appliances, or Spoiled Consumables",
    cause:
      "Reliance Retail's fulfillment network (Smart Point hubs, regional fulfillment centers, and marketplace sellers) frequently mismatches consignments during warehouse dispatch, swaps ordered brands without prior consent, or delivers perishable groceries past their expiry dates. Automated chatbots frequently mark complaints as 'closed' on the false assertion that packages were verified prior to dispatch.",
    legalBasis: {
      statute: "Consumer Protection Act, 2019 & E-Commerce Rules, 2020",
      section: "Section 2(11), Section 2(47) & Rule 6(5)",
      description:
        "Delivering goods that deviate from advertised product descriptions constitutes both deficiency in service and unfair trade practice. Rule 6(5) of the Consumer Protection (E-Commerce) Rules explicitly prohibits platforms from refusing returns or withholding refunds when delivered merchandise is defective, damaged, or non-conforming.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Capture Date-Stamped Photographic & Video Evidence",
        detail:
          "Photograph the package shipping label showing the AWB tracking barcode, invoice number, and the incorrect or damaged product alongside batch and expiry codes. Maintain original packaging and packaging seals intact.",
      },
      {
        stepNumber: "Step 2",
        action: "Lodge Dispute via Help Section & Secure Ticket ID",
        detail:
          "Raise a complaint under 'Wrong Item Delivered' or 'Quality Issue' in the JioMart application. If the automated interface closes the ticket without resolving the dispute, obtain the formal ticket number and escalate directly via email to cs@jiomart.com.",
      },
      {
        stepNumber: "Step 3",
        action: "Escalate to Grievance Officer & Serve Legal Notice",
        detail:
          "Send the evidence dossier to grievanceofficer@jiomart.com. If unrectified within 48 statutory business hours, serve an advocate legal demand notice to Reliance Retail Limited demanding an immediate 100% refund plus compensation.",
      },
    ],
    statutoryTimeline: "Mandatory 48-hour acknowledgment; immediate replacement or full refund under Rule 6(5).",
    templateAnchor: "#statutory-legal-notice-template",
  },
  {
    id: "stuck-refund",
    tabLabel: "Stuck Refund (App Shows Success)",
    badge: "Banking Reversal Failure",
    title: "JioMart Status Shows 'Refund Processed' but Zero Amount Credited to Bank Account",
    cause:
      "When JioMart approves a return or cancels an undelivered order, its ERP dashboard marks the transaction as 'Refund Processed' upon sending an API reversal instruction. However, if inter-bank settlement drops across the NPCI UPI switch, IMPS rails, or payment aggregators (e.g. JioPay, Razorpay, or PayU), the funds get stranded in an unmapped suspense clearing account rather than crediting your ledger balance.",
    legalBasis: {
      statute: "Consumer Protection (E-Commerce) Rules, 2020 & RBI TAT Harmonisation Directives",
      section: "Rule 4(5) & Circular DPSS.CO.PD No.629/02.01.014/2019-20",
      description:
        "Every e-commerce marketplace is legally obligated to maintain an active grievance mechanism resolving disputes within 30 days. Under Reserve Bank of India Turn Around Time directives, failed electronic merchant transactions must be credited back within T+1 day, carrying a statutory penalty of ₹100 per day for bank-attributable delays.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Procure the 12-Digit UPI RRN or 23-Digit Bank ARN",
        detail:
          "Contact JioMart customer care via email and insist on the official Acquirer Reference Number (ARN) for cards or Retrieval Reference Number (RRN) for UPI. Do not settle for internal order IDs; you require the banking network identifier.",
      },
      {
        stepNumber: "Step 2",
        action: "Obtain Written Non-Receipt Confirmation from Your Bank",
        detail:
          "Submit the ARN/RRN to your issuing bank's customer support or dispute desk. Obtain an email or written statement confirming that no incoming settlement batch corresponding to that reference number ever hit your account.",
      },
      {
        stepNumber: "Step 3",
        action: "Serve Joint Statutory Demand Notice to Platform and Gateway",
        detail:
          "Transmit the bank's non-credit confirmation to grievanceofficer@jiomart.com. Issue a formal advocate legal notice demanding immediate credit of the principal amount along with 18% annual interest for wrongful retention of funds.",
      },
    ],
    statutoryTimeline: "T+1 business day under RBI TAT; 48-hour response limit under E-Commerce Rules.",
    templateAnchor: "#statutory-legal-notice-template",
  },
  {
    id: "return-rejected",
    tabLabel: "Doorstep Return Refusal",
    badge: "Arbitrary Pickup Default",
    title: "Delivery Agent Refused Return Pickup or In-App Return Window Arbitrarily Closed",
    cause:
      "Logistics personnel from Reliance Retail or contracted third-party delivery partners frequently refuse to accept returned packages at the doorstep, falsely recording reasons such as 'customer refused return' or 'package seal broken'. Meanwhile, JioMart's automated algorithms close the dispute window after 48 to 72 hours, effectively locking consumers out of their contractual return rights.",
    legalBasis: {
      statute: "Sale of Goods Act, 1930 & Consumer Protection Act, 2019",
      section: "Section 39 & Section 2(47)",
      description:
        "Under Section 39 of the Sale of Goods Act, delivery of returned goods to a recognized carrier constitutes constructive return to the seller. A platform cannot rely on operational defaults or refusal by its own logistics agents to extinguish consumer rights, as doing so constitutes a prohibited unfair trade practice.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Document Pickup Refusal with Call Logs & Doorstep Video",
        detail:
          "Save all SMS notifications from the delivery partner, call recordings with the rider, and doorbell or handheld video documenting your readiness to hand over the product in intact condition.",
      },
      {
        stepNumber: "Step 2",
        action: "File Formal Escalation with JioMart Nodal Desk & NCH",
        detail:
          "Email nodalofficer@jiomart.com detailing the delivery rider's refusal. Simultaneously dial the National Consumer Helpline at 1915 or register an online grievance on the INGRAM portal to obtain an official docket number.",
      },
      {
        stepNumber: "Step 3",
        action: "Dispatch Advocate Notice Holding Platform Vicariously Liable",
        detail:
          "Issue a formal legal notice holding Reliance Retail Limited vicariously liable for the actions of its delivery executives, demanding immediate doorstep retrieval or waiver of return and release of full funds.",
      },
    ],
    statutoryTimeline: "Mandatory grievance acknowledgment within 48 hours; resolution within 30 days.",
    templateAnchor: "#statutory-legal-notice-template",
  },
  {
    id: "seller-dispute",
    tabLabel: "Third-Party Vendor Disclaimers",
    badge: "Intermediary Fallback Liability",
    title: "Third-Party Seller Denies Replacement or JioMart Claims 'Only an Intermediary'",
    cause:
      "When expensive consumer electronics, kitchen appliances, or specialty items purchased on JioMart prove defective or non-functional, Reliance Retail frequently attempts to deflect liability under Section 79 of the Information Technology Act, asserting that it functions solely as an intermediary and directing aggrieved buyers to uncontactable third-party sellers.",
    legalBasis: {
      statute: "Consumer Protection (E-Commerce) Rules, 2020 & Fallback Liability Doctrine",
      section: "Rule 5(1), Rule 6 & Section 2(16) CPA 2019",
      description:
        "Under the E-Commerce Rules, 2020, marketplace platforms bear statutory fallback liability if an onboarded merchant fails to deliver goods or refund payments. Platforms that process checkout, collect funds, and manage distribution cannot claim safe-harbor immunity when consumer statutory guarantees are breached.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Extract Seller Tax Invoice & Registered Entity Details",
        detail:
          "Download the official tax invoice from your JioMart order receipt. Extract the registered corporate name, GSTIN, and physical warehouse address of the seller alongside Reliance Retail Limited.",
      },
      {
        stepNumber: "Step 2",
        action: "Submit Joint Grievance to Platform and Registered Vendor",
        detail:
          "Send a consolidated written complaint to both the third-party seller and JioMart's Nodal Officer, citing statutory fallback liability and demanding an unconditional replacement or full refund.",
      },
      {
        stepNumber: "Step 3",
        action: "Serve Joint Advocate Legal Notice & Prepare e-Jagriti Petition",
        detail:
          "Serve a joint legal notice via Speed Post. In the event of non-compliance within 15 days, institute a formal consumer complaint before the District Consumer Disputes Redressal Commission via the e-Jagriti portal.",
      },
    ],
    statutoryTimeline: "Statutory 2-year limitation period under Section 69 to initiate formal consumer litigation.",
    templateAnchor: "#statutory-legal-notice-template",
  },
];

export default function ProblemPickerTabs() {
  const [activeTab, setActiveTab] = useState(PANELS[0].id);

  return (
    <div className="w-full my-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Tab Navigation (Role: tablist) */}
      <div
        role="tablist"
        aria-label="JioMart Dispute Categories"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-slate-50 border-b border-slate-200"
      >
        {PANELS.map((panel) => {
          const isActive = activeTab === panel.id;
          return (
            <button
              key={panel.id}
              id={`tab-${panel.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`panel-${panel.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(panel.id)}
              className={`p-4 text-left transition-all border-b-2 sm:border-b-0 sm:border-r last:border-r-0 border-slate-200 cursor-pointer ${
                isActive
                  ? "bg-white border-b-2 sm:border-b-2 border-b-[#DC2626] sm:border-b-[#DC2626] font-semibold text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                {panel.badge}
              </div>
              <div className="text-sm leading-snug font-medium line-clamp-2">
                {panel.tabLabel}
              </div>
            </button>
          );
        })}
      </div>

      {/* Progressive Enhancement Panels (All rendered in DOM for SSR & SEO) */}
      <div className="p-6 sm:p-8">
        {PANELS.map((panel) => {
          const isActive = activeTab === panel.id;
          return (
            <div
              key={panel.id}
              id={`panel-${panel.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${panel.id}`}
              hidden={!isActive}
              className={`${isActive ? "block" : "hidden"}`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-red-100 text-red-800">
                  {panel.badge}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {panel.statutoryTimeline}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                {panel.title}
              </h3>

              {/* Cause Block */}
              <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Underlying Root Cause
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {panel.cause}
                </p>
              </div>

              {/* Legal Basis Block */}
              <div className="mb-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Statutory Legal Basis:
                  </span>
                  <span className="text-xs font-semibold text-amber-800">
                    {panel.legalBasis.section} ({panel.legalBasis.statute})
                  </span>
                </div>
                <p className="text-sm text-amber-950 leading-relaxed">
                  {panel.legalBasis.description}
                </p>
              </div>

              {/* 3-Step Remedy Grid */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Prescribed 3-Step Dispute Remedy
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {panel.steps.map((st, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-shadow"
                    >
                      <div className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-slate-900 text-white mb-2">
                        {st.stepNumber}
                      </div>
                      <h5 className="text-sm font-semibold text-slate-900 mb-1.5">
                        {st.action}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {st.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action / Template Callout */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500">
                  Preparing your formal grievance? Review our lawyer-vetted legal notice draft format below.
                </div>
                <a
                  href={panel.templateAnchor}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#DC2626] hover:text-[#B91C1C] transition-colors"
                >
                  <span>View Notice Draft Template</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
