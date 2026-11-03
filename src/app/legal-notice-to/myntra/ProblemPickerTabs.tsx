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
    id: "refund-missing",
    tabLabel: "Refund Missing (Processed but Not Credited)",
    badge: "Banking & Gateway Glitch",
    title: "Myntra States 'Refund Processed' but Zero Amount Credited to Bank Account",
    cause:
      "A technical disconnection occurs between Myntra's merchant acquiring gateway (e.g. Razorpay, PayU, Juspay), the NPCI UPI switch or card networks, and your issuing bank's Core Banking System (CBS). Myntra's ERP updates the dashboard to 'Refund Processed' the instant an API call is triggered, but failed reconciliation leaves the capital trapped in an unmapped suspense or clearing pool.",
    legalBasis: {
      statute: "Consumer Protection (E-Commerce) Rules, 2020 & RBI Failed Transaction Directions",
      section: "Rule 4(5) & Circular DPSS.CO.PD No.629/02.01.014/2019-20",
      description:
        "Every marketplace e-commerce entity is legally responsible for operating a grievance mechanism resolving issues within one month. Furthermore, under RBI guidelines, failed electronic merchant transactions must be reversed within T+1 day, with mandatory compensation of ₹100 per day for delay attributable to the banking/payment network.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Procure the 23-Digit ARN or 12-Digit UPI RRN",
        detail:
          "Open Myntra Help Centre or email support. Demand the official Acquirer Reference Number (ARN) for cards or Retrieval Reference Number (RRN) for UPI. Do not accept a generic internal Myntra ticket ID; you require the banking network identifier.",
      },
      {
        stepNumber: "Step 2",
        action: "Lodge a Formal Written Trace with Your Issuing Bank",
        detail:
          "Submit the ARN/RRN to your bank's nodal branch or chargeback desk. Request written confirmation whether the clearing batch was received. If the bank confirms the ARN was never routed into their CBS, the failure lies squarely with Myntra's payment aggregator.",
      },
      {
        stepNumber: "Step 3",
        action: "Escalate to Myntra Grievance Desk & Legal Notice",
        detail:
          "Email the bank's non-trace docket to grievance@myntra.com. If uncredited within 48 statutory hours, serve an advocate legal notice under Section 2(47) of the Consumer Protection Act, 2019 demanding immediate restitution with interest.",
      },
    ],
    statutoryTimeline: "48 hours acknowledgment; 30 days maximum dispute resolution under E-Commerce Rules.",
    templateAnchor: "#legal-notice-template",
  },
  {
    id: "wrong-damaged",
    tabLabel: "Wrong or Damaged Item Delivered",
    badge: "Deficiency of Service",
    title: "Received Defective Apparel, Mismatched Size, or Damaged Consignment",
    cause:
      "Marketplace fashion sellers frequently dispatch wrong SKUs, counterfeit variants, or garments damaged by improper transit handling. When consumers request replacement, automated bot support frequently closes tickets claiming the warehouse dispatched the genuine product according to barcode records.",
    legalBasis: {
      statute: "Consumer Protection Act, 2019 & E-Commerce Rules, 2020",
      section: "Section 2(11), Section 2(47) & Rule 6(5)",
      description:
        "Delivering goods that deviate from the advertised specification constitutes deficiency in service and unfair trade practice. Rule 6(5) explicitly bars e-commerce entities from refusing returns or refunds when defective, deficient, or spurious goods are delivered.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Preserve Unboxing Footage, Label Barcodes & Garment Tags",
        detail:
          "Photograph the outer courier polybag showing the AWB tracking sticker, seller details, size label, and fabric defect under good lighting. Keep all original plastic packaging and physical brand tags intact.",
      },
      {
        stepNumber: "Step 2",
        action: "Submit In-App Return with Photographic Evidence",
        detail:
          "Log the return request under 'Defective / Wrong Item Delivered' within the permitted return window. Upload clear photos. Note down the specific return request number generated in the Myntra dashboard.",
      },
      {
        stepNumber: "Step 3",
        action: "Report to National Consumer Helpline (NCH 1915) & Legal Escalation",
        detail:
          "If Myntra customer service rejects the return alleging 'product delivered in intact condition', dial 1915 or register an INGRAM portal grievance. Follow with a formal lawyer notice holding both Myntra and the registered third-party seller jointly liable.",
      },
    ],
    statutoryTimeline: "Replacement or full refund mandated immediately upon verification; 48 hours grievance response.",
    templateAnchor: "#legal-notice-template",
  },
  {
    id: "return-rejected",
    tabLabel: "Return Rejected at Doorstep or Warehouse",
    badge: "Doorstep QC Disputes",
    title: "Delivery Agent Refused Pickup or Warehouse QC Arbitrarily Disqualified Return",
    cause:
      "Myntra enforces a Doorstep Quality Check (QC) where courier delivery personnel examine garments before acceptance. Field agents routinely refuse returns citing arbitrary pretexts—such as 'fabric smell', 'missing internal wash tag', or 'minor lint'—even on completely unworn apparel. In other instances, couriers accept the parcel, but Myntra's regional warehouse rejects the item days later.",
    legalBasis: {
      statute: "Sale of Goods Act, 1930 & CPA 2019 Unfair Trade Practices",
      section: "Section 39 Sale of Goods Act & Section 2(47)(viii) CPA 2019",
      description:
        "Once an authorized courier agent inspects and accepts custody of a return, delivery of goods to the carrier constitutes prima facie proof of return under Section 39. Refusing refunds post-pickup without concrete CCTV/inspection proof amounts to an unfair trade practice.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Demand a Physical Rejection Slip or Courier Audit Code",
        detail:
          "If the delivery executive refuses doorstep pickup, do not allow them to mark 'Customer cancelled return' in their mobile app. Demand written reasons or capture video evidence showing the garment in clean, unused condition with brand tags attached.",
      },
      {
        stepNumber: "Step 2",
        action: "Secure Courier Reverse Pickup AWB Receipt",
        detail:
          "If the item was picked up but rejected at the warehouse, obtain the reverse tracking number and delivery acknowledgement timestamp. Challenge the warehouse claim by requiring Myntra to provide serial-matched inspection logs.",
      },
      {
        stepNumber: "Step 3",
        action: "Issue Statutory Demand Notice Against Arbitrary Rejection",
        detail:
          "Issue a formal advocate demand notice putting Myntra Designs Private Limited on strict notice under the E-Commerce Amendment Rules 2026 for dark patterns in return denials, seeking full refund plus shipping reimbursement.",
      },
    ],
    statutoryTimeline: "15-day pre-litigation demand cure period before instituting consumer forum complaint.",
    templateAnchor: "#legal-notice-template",
  },
  {
    id: "seller-dispute",
    tabLabel: "Seller Dispute & Platform Fee Retention",
    badge: "Marketplace Liability",
    title: "Marketplace Disclaims Responsibility or Retains Platform & Convenience Fees",
    cause:
      "When disputes arise over order cancellations or non-delivery, Myntra frequently disclaims responsibility by invoking Section 79 intermediary safe-harbour protections, blaming independent merchants. Additionally, when orders are cancelled due to seller default, Myntra often withholds non-refundable platform or convenience fees.",
    legalBasis: {
      statute: "CCPA Guidelines for Prevention of Dark Patterns 2023 & CPA 2019",
      section: "Rule 5 Consumer Protection (E-Commerce) Rules & Section 86 CPA 2019",
      description:
        "Consumer courts across India have repeatedly affirmed that e-commerce platforms collecting payment, setting return policies, and arranging logistics cannot plead passive intermediary immunity. Unilaterally deducting fees on failed or cancelled services violates CCPA dark pattern regulations.",
    },
    steps: [
      {
        stepNumber: "Step 1",
        action: "Extract Seller Registration & Tax Invoice Details",
        detail:
          "Download the official tax invoice from your Myntra order history. Identify the legal entity name, GSTIN, and registered warehouse address of the third-party seller alongside Myntra Designs Pvt Ltd.",
      },
      {
        stepNumber: "Step 2",
        action: "Submit Formal Objection Against Fee Withholding",
        detail:
          "Issue a written complaint to Myntra's Nodal Officer disputing any deductions of platform, convenience, or shipping charges on unfulfilled or defective orders under CCPA dark-pattern prohibitions.",
      },
      {
        stepNumber: "Step 3",
        action: "Serve Joint Legal Demand & Prepare e-Jagriti Petition",
        detail:
          "Serve an advocate legal notice holding both Myntra (marketplace operator) and the merchant jointly and severally liable. If ignored, file a formal complaint before the District Consumer Commission via e-Jagriti.",
      },
    ],
    statutoryTimeline: "30-day statutory redressal; 2-year limitation period to institute consumer complaint.",
    templateAnchor: "#legal-notice-template",
  },
];

export default function ProblemPickerTabs() {
  const [activeTab, setActiveTab] = useState(PANELS[0].id);

  return (
    <div className="w-full my-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Tab Navigation (Role: tablist) */}
      <div
        role="tablist"
        aria-label="Myntra Dispute Categories"
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
                  Ready to draft your grievance? Use our vetted legal notice draft format below.
                </div>
                <a
                  href={panel.templateAnchor}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#DC2626] hover:text-[#B91C1C] transition-colors"
                >
                  <span>View Notice Draft Template</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
