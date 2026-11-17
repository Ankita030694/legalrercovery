"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  recommendedLinks: {
    label: string;
    href: string;
  }[];
}

const DISPUTE_SCENARIOS: Scenario[] = [
  {
    id: "short-grn",
    tabLabel: "Dark-Store Short-GRN",
    badge: "Ticket ₹1L – ₹75L | Quick-Commerce Hubs",
    title: "Opaque Dark-Store GRN Shortages Raised 30–60 Days Post-POD Delivery",
    ticketBand: "₹1,00,000 – ₹75,00,000 per vendor across multi-city mother hubs & dark stores",
    statutoryTrigger: "MSMED Act, 2006 Section 2(b) & Section 15 (15-Day Deemed Acceptance Rule)",
    bottleneck:
      "A D2C brand ships 2,000 units of beverages or personal care goods to a quick-commerce central fulfillment center (FC). The transporter secures a physical, stamped gate-pass and Proof of Delivery (POD) confirming 100% outer carton intake. Yet, 35 to 60 days later, the buyer's automated ERP generates a 'Short GRN' debit note deducting 18% to 25% of the total invoice value, claiming missing inner units during secondary dark-store transfers.",
    legalMechanism:
      "Under Section 2(b) of the MSMED Act, 2006, the 'appointed day' is strictly governed by the 'day of deemed acceptance'—which is the date of actual delivery where no objection is made in writing within 15 days. Belated shortages raised after 15 days from delivery are statutorily invalid in the eyes of law. A formal advocate demand invoking Section 2(b) along with transporter physical e-Way bills and BSA Section 63 electronic gate logs crystallizes the debt and triggers 3x RBI compound interest under Section 16.",
    operationalSteps: [
      {
        step: "1. Match Stamped PODs & E-Way Bill Movement Records",
        detail:
          "Cross-reference the transporter's signed physical delivery challan, security inward gate register entry, and RFID/toll e-Way bill records proving 100% outer packaging was delivered without intact seal tampering.",
      },
      {
        step: "2. Issue Section 2(b) 15-Day Statutory Deemed Acceptance Notice",
        detail:
          "Serve an advocate legal notice establishing that because no written discrepancy was lodged within 15 days of physical delivery, the consignment is deemed accepted by operation of statute, rendering subsequent unilateral debit notes void.",
      },
      {
        step: "3. MSEFC Samadhaan Filing & Commercial Summary Suit",
        detail:
          "If the buyer refuses to reverse the debit note within 15 days of notice, lodge an online claim on MSME Samadhaan for principal plus 3x Bank Rate compound interest, or initiate an Order 37 summary suit in Commercial Court.",
      },
    ],
    recommendedLinks: [
      {
        label: "MSME 3x Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
      {
        label: "Parent Hub: FMCG & D2C Debt Recovery",
        href: "/industries/fmcg-distributors-super-stockist-recovery",
      },
      {
        label: "Section 43B(h) Demand Notice Template",
        href: "/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice",
      },
    ],
  },
  {
    id: "sla-penalties",
    tabLabel: "Fill-Rate & SLA Penalties",
    badge: "Ticket ₹50K – ₹35L | Unilateral Offsets",
    title: "Arbitrary Fill-Rate Deductions & Dock-Congestion Delivery Penalties",
    ticketBand: "₹50,000 – ₹35,00,000 in algorithmic margin deductions across modern trade chains",
    statutoryTrigger: "Indian Contract Act, 1872 Section 73 & Section 74 (Bar on Penal Liquidated Damages)",
    bottleneck:
      "Modern-trade retail supermarket chains and quick-commerce aggregators auto-deduct 3% to 12% of gross supplier invoices citing 'fill-rate shortfall' or 'PO delivery window breach'. In reality, vendors dispatch full quantities on time, but platform warehouse gates enforce multi-hour truck holding, arbitrarily turn away vehicles due to bay congestion, or issue purchase orders on 6-hour lead times that violate agreed supplier SLA covenants.",
    legalMechanism:
      "Under Section 74 of the Indian Contract Act, 1872 (as affirmed by the Supreme Court in Kailash Nath Associates v. DDA), liquidated damages cannot be recovered unilaterally without proving actual, quantifiable loss. Opaque algorithmic deduction slabs that operate as penal forfeitures are unenforceable in law. Moreover, where delivery delays are caused by buyer-side dock holds, Contract Act Section 53 and Section 54 absolve the vendor from reciprocal performance obligations.",
    operationalSteps: [
      {
        step: "1. Audit Warehouse Truck Waiting Logs & Appointment Receipts",
        detail:
          "Compile GPS telematics, driver arrival timestamps, and security rejection memos establishing that the vendor attempted timely delivery within the designated ASN (Advanced Shipping Notice) window.",
      },
      {
        step: "2. Challenge Liquidated Damages Clause Under Contract Act Section 74",
        detail:
          "Issue a statutory legal demand putting the enterprise buyer to strict proof of actual financial damage suffered and declaring unilateral fill-rate debit notes as void penalties under Indian contract jurisprudence.",
      },
      {
        step: "3. Enforce Pre-Litigation Mediation via Commercial Courts Act",
        detail:
          "Initiate Section 12A Pre-Institution Mediation before the Commercial Court Legal Services Authority, demanding immediate ledger credit or freezing the buyer's credit notes.",
      },
    ],
    recommendedLinks: [
      {
        label: "Distributor & Dealer Dues Legal Recovery",
        href: "/distributor-dealer-dues-recovery",
      },
      {
        label: "Bulk Commercial Recovery Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
      },
    ],
  },
  {
    id: "rtv-dumps",
    tabLabel: "Aged RTV Dumps",
    badge: "Ticket ₹2L – ₹1.2Cr | Modern-Trade Chains",
    title: "Aged Return-To-Vendor (RTV) Dumps & Unilateral Damaged Stock Write-Offs",
    ticketBand: "₹2,00,000 – ₹1,20,00,000 in physical stock returns and offset deductions",
    statutoryTrigger: "Sale of Goods Act, 1930 Sections 41, 42 & 43; Contract Act Section 73",
    bottleneck:
      "National supermarket chains warehouse seasonal, food, or cosmetic inventory for 9 to 18 months in improper temperature conditions. When stock approaches expiry or packaging suffers warehouse vermin/handling damage, the buyer unilaterally creates an RTV debit note at full invoice value and dumps damaged inventory back at the vendor's regional factory without prior joint inspection.",
    legalMechanism:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted the goods when they retain them beyond a reasonable time without intimating rejection. Once goods are accepted and mixed into retail inventory, property passes to the buyer (Section 20). The buyer cannot subsequently re-characterize unsold or mishandled inventory as defective and debit the vendor's active ledger.",
    operationalSteps: [
      {
        step: "1. Refuse Unilateral Damaged RTV Consignments at Factory Gate",
        detail:
          "Issue a formal gate-rejection memo refusing unverified RTV shipments and mandating joint photographic survey and batch quality assessment under BSA Section 63.",
      },
      {
        step: "2. Issue Section 42 Sale of Goods Rejection Bar Notice",
        detail:
          "Serve an advocate notice documenting the lapse of reasonable inspection time, showing that title and risk of loss passed to the buyer under Section 26 of the Sale of Goods Act upon initial clean delivery.",
      },
      {
        step: "3. File Order 37 Summary Suit for Recovery of Contract Price",
        detail:
          "Institute a summary suit for the full price of goods sold and delivered under Order XXXVII CPC in the competent District Commercial Court.",
      },
    ],
    recommendedLinks: [
      {
        label: "Super-Stockist F&F Settlement Recovery",
        href: "/cnf-agent-super-stockist-security-deposit-fnf-recovery-from-brand",
      },
      {
        label: "Cheque Bounce Case Against Directors",
        href: "/cheque-bounce-case-against-company-directors",
      },
    ],
  },
  {
    id: "payout-holds",
    tabLabel: "Payout Holds & Promo Clawbacks",
    badge: "Ticket ₹3L – ₹2Cr+ | Digital Vendor Portals",
    title: "Vendor Portal Payout Holds, Reconciliation Freezes & Promo Margins",
    ticketBand: "₹3,00,000 – ₹2,00,00,000+ frozen receivables across platform supplier portals",
    statutoryTrigger: "Income Tax Act Section 43B(h), MSMED Act Section 15 & Commercial Courts Act Section 2(1)(c)",
    bottleneck:
      "Quick-commerce platforms and modern-trade portals freeze 30% to 50% of vendor disbursement balances for months under the pretext of 'year-end reconciliation', 'unmatched e-Way bills', or 'unilateral visibility margin chargebacks' (banners, listing fees, festival deals) that were never authorized in executed vendor addendums.",
    legalMechanism:
      "Statutory payments cannot be subjected to perpetual administrative holds. Under Section 43B(h) of the Income-tax Act, 1961, any invoice from an MSME vendor outstanding beyond 45 days (or 15 days in the absence of a written contract) is disallowed as a tax deduction from the buyer's taxable income. Serving a Section 43B(h) tax disallowance intimation notice alongside a Section 15 MSMED demand creates immediate audit liability for the platform's CFO and statutory auditors.",
    operationalSteps: [
      {
        step: "1. Reconcile Portal Credit Balance & Export Dispute Ticket Logs",
        detail:
          "Extract all ledger CSVs, ERP payment advisory vouchers, unadjusted debit notes, and unresolved support ticket threads proving the platform acknowledged receipt of stock.",
      },
      {
        step: "2. Serve Section 43B(h) Audit & Legal Demand Notice",
        detail:
          "Dispatch an advocate notice to the buyer's Board of Directors and Statutory Auditors putting them on notice of taxable profit disallowance and MSME compound interest exposure.",
      },
      {
        step: "3. Direct Bank Account Attachment via Order 38 Rule 5",
        detail:
          "Move the Commercial Court for urgent pre-judgment security and garnishee attachment against the buyer's escrow or operational bank accounts to secure outstanding dues.",
      },
    ],
    recommendedLinks: [
      {
        label: "Blocked GST ITC Recovery Guide",
        href: "/gst-input-tax-credit-blocked-supplier-non-filing-gstr-3b-recovery",
      },
      {
        label: "Stop Payment Cheque Bounce Defense",
        href: "/stop-payment-cheque-bounce-case",
      },
    ],
  },
];

export default function QCommerceScenarioTabs() {
  const [activeTab, setActiveTab] = useState(DISPUTE_SCENARIOS[0].id);
  const activeScenario = DISPUTE_SCENARIOS.find((s) => s.id === activeTab) || DISPUTE_SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Tab Navigation Header */}
      <div className="bg-slate-900 p-2 sm:p-3 overflow-x-auto scrollbar-none flex gap-1.5 sm:gap-2 border-b border-slate-800">
        {DISPUTE_SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all shrink-0 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/40"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        {/* Scenario Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-100 pb-4">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-1.5">
              {activeScenario.badge}
            </span>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
              {activeScenario.title}
            </h3>
          </div>
          <div className="text-xs font-semibold text-slate-500 sm:text-right shrink-0">
            <span className="block text-[10px] uppercase text-slate-400 font-bold">Ticket Exposure</span>
            {activeScenario.ticketBand}
          </div>
        </div>

        {/* Bottleneck vs Statutory Remedy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/60 border border-red-200/80 rounded-xl p-4 sm:p-5">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Commercial Bottleneck &amp; Platform Action
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.bottleneck}
            </p>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4 sm:p-5">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              Statutory Shield &amp; Legal Enforcement
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalMechanism}
            </p>
            <div className="mt-2 text-[11px] font-bold text-emerald-900">
              Trigger: {activeScenario.statutoryTrigger}
            </div>
          </div>
        </div>

        {/* Step-by-Step Action Plan */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Operational Recovery Steps
          </span>
          <div className="space-y-3">
            {activeScenario.operationalSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 sm:p-4"
              >
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{step.step}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Links */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
            Related Legal Tools:
          </span>
          {activeScenario.recommendedLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="inline-flex items-center gap-1 font-bold text-[#DC2626] hover:underline"
            >
              <span>{link.label}</span>
              <span>&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
