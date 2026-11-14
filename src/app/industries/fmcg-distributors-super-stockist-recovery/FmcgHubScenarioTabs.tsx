"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FmcgScenario {
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

const FMCG_SCENARIOS: FmcgScenario[] = [
  {
    id: "gt-security-cheques",
    tabLabel: "GT Ledgers & s.20 Cheques",
    badge: "Ticket ₹25K – ₹50L | Dealer & Kirana",
    title: "Wholesale Distributor Credit Arrears & Blank Signed Security Cheques",
    ticketBand: "₹25,000 – ₹50,00,000 GT wholesalers, regional sub-stockists & retailers",
    statutoryTrigger: "NI Act s.20, s.138, s.141 & s.143A (Bir Singh & Sripati Singh)",
    bottleneck:
      "Nearly every FMCG, beverage, and consumer durables brand collects 2–3 undated signed security cheques at dealer onboarding. Yet finance controllers lose Section 138 prosecutions when they fill an arbitrary round figure without first quantifying the running ledger, or when dealers issue 'Stop Payment' memos claiming 'misuse of old security cheque'.",
    legalMechanism:
      "Under Section 20 of the Negotiable Instruments Act, 1881 and the Supreme Court rulings in Bir Singh v. Mukesh Kumar (2019) and Sripati Singh v. State of Jharkhand (2021), a payee may lawfully fill a signed blank security cheque up to the crystallized debt payable on presentation. Serving a 7-Day Ledger Crystallization & Cheque-Presentation Intimation Notice before deposit neutralizes misuse defenses and unlocks 20% interim compensation under s.143A.",
    operationalSteps: [
      {
        step: "1. Multi-Invoice Schedule & Credit-Note Reconciliation",
        detail:
          "Compile unpaid GST tax invoices, e-Way bills, and signed delivery challans into a running-account statement netting out approved credit notes and scheme payouts.",
      },
      {
        step: "2. Serve 7-Day s.20 Presentation Intimation Notice",
        detail:
          "Dispatch an advocate-signed Balance Crystallization Notice via Email, WhatsApp, and Speed Post RPAD informing the dealer that the exact crystallized balance will be filled on security cheque #[No.] after 7 days.",
      },
      {
        step: "3. Post-Bounce s.138 + s.141 / Order 37 Enforcement",
        detail:
          "Upon dishonour (including 'Stop Payment' or 'Account Closed'), serve the mandatory 30-day statutory notice naming the firm and active directors under s.141 and seek 20% interim relief under s.143A.",
      },
    ],
    recommendedLinks: [
      {
        label: "NI Act s.20 & s.138 Security Cheque Guide",
        href: "/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery",
      },
      {
        label: "7-Day Pre-Deposit Notice Template",
        href: "/templates/security-cheque-presentation-intimation-cum-ledger-notice",
      },
      {
        label: "Cheque Bounce Deadline Calculator",
        href: "/tools/cheque-bounce-deadline-calculator",
      },
    ],
  },
  {
    id: "qcomm-marketplace",
    tabLabel: "Quick-Commerce & Marketplaces",
    badge: "D2C & Brand CFO | GRN & Reserve Holds",
    title: "Dark-Store GRN Shortages, Fill-Rate Penalties & Frozen Marketplace Reserves",
    ticketBand: "₹1 Lakh – ₹2 Cr+ D2C brand payouts, Modern-Trade chains & Aggregators",
    statutoryTrigger: "MSMED Act s.2(b) (15-Day Deemed Acceptance), s.43B(h) & Contract Act s.74",
    bottleneck:
      "D2C food, beauty, and FMCG brands routinely lose 18% to 35% of invoice value to opaque quick-commerce dark-store 'short-GRN' deductions raised 30–60 days after sealed POD delivery, arbitrary visibility/promo chargebacks, and RTV damaged-stock dumps—while marketplace platforms freeze ₹10L–₹2Cr seller payout reserves for 180 days post-suspension.",
    legalMechanism:
      "Section 2(b) of the MSMED Act, 2006 establishes a strict 15-day statutory objection cutoff from delivery: where a Modern-Trade or Quick-Commerce buyer raises no written objection within 15 days of POD, the consignment stands legally accepted and attracts 3x RBI Bank Rate compound interest plus Income-tax s.43B(h) disallowance. Against marketplace reserve freezes, Contract Act s.74 bars confiscatory forfeiture without proof of actual loss.",
    operationalSteps: [
      {
        step: "1. Lock Sealed POD, Barcode CCTV & Portal Audit Logs",
        detail:
          "Preserve transporter-stamped dark-store PODs, weight-slip records, and barcode packing-station videos certified under Section 63 BSA, 2023 to refute belated short-GRN or fake-return deductions.",
      },
      {
        step: "2. Invoke s.2(b) 15-Day Cutoff & s.43B(h) Disallowance",
        detail:
          "For Udyam Micro/Small brands, serve an advocate demand citing the buyer's failure to object within 15 days under s.2(b) and flagging Form 3CD tax disallowance ahead of March 31.",
      },
      {
        step: "3. Arbitration Invocation or MSEFC ODR Filing",
        detail:
          "For marketplace payout reserves, serve a Section 21 Arbitration Invocation challenging unlawful holds under Contract Act s.74; for MSME trade receivables, file on MSEFC Samadhaan.",
      },
    ],
    recommendedLinks: [
      {
        label: "Quick-Commerce & MT Deductions Playbook",
        href: "/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery",
      },
      {
        label: "Marketplace Seller Payout Reserve Recovery",
        href: "/ecommerce-marketplace-unfair-seller-payout-reserve-hold-recovery",
      },
      {
        label: "MSME 3x Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
    ],
  },
  {
    id: "cnf-private-label",
    tabLabel: "C&F Deposits & Private-Label OEMs",
    badge: "₹10L – ₹3Cr | Agency Exit & Custom Batches",
    title: "Withheld C&F / Super-Stockist Security Deposits & Orphaned Private-Label Stock",
    ticketBand: "₹10 Lakh – ₹3 Cr C&F termination settlements & custom D2C contract runs",
    statutoryTrigger: "Contract Act s.73/s.222, Commercial Courts s.2(1)(c)(ix) & Sale of Goods s.44/55",
    bottleneck:
      "Upon terminating a C&F agent or super-stockist, FMCG and beverage brands frequently withhold ₹25L–₹2Cr security deposits for years by disputing salesman-approved secondary scheme claims and excess primary stock dumped by exited ASMs. Separately, third-party cosmetic and food plants are left holding 25,000+ custom-printed bottles/pouches when D2C brands stall lifting MOQ batches.",
    legalMechanism:
      "Under Section 222 of the Indian Contract Act, 1872, a principal must indemnify its agent against lawful market-scheme expenditures incurred within authority, while Distribution Agreements fall squarely within Commercial Courts Act s.2(1)(c)(ix) for >= ₹3 Lakh suits. Private-label OEMs invoke Sale of Goods Act s.44 (refusal to take delivery) and s.55 (suit for price of bespoke non-resalable goods) alongside founder guarantees.",
    operationalSteps: [
      {
        step: "1. Preserve ASM Email/WhatsApp Scheme Approvals",
        detail:
          "Export all secondary trade-scheme circulars, retailer credit-note approvals, and warehouse rent reconciliations under BSA s.63 before brand portal access is revoked.",
      },
      {
        step: "2. Serve F&F Deposit Demand / Custom-Batch Lifting Notice",
        detail:
          "Issue a 15-day statutory demand for security deposit refund with contractual interest (or demand immediate stock lifting and demurrage under s.44/s.55 Sale of Goods Act for private-label OEMs).",
      },
      {
        step: "3. Commercial Courts s.12A Mediation or MSME Reference",
        detail:
          "Escalate >= ₹3 Lakh C&F deposit claims to Commercial Court Pre-Institution Mediation under s.12A (Patil Automation) or MSEFC arbitration where Udyam registration covers manufacturing.",
      },
    ],
    recommendedLinks: [
      {
        label: "C&F & Super-Stockist Security Deposit Recovery",
        href: "/cnf-agent-super-stockist-security-deposit-fnf-recovery-from-brand",
      },
      {
        label: "Private-Label Cosmetics & FMCG OEM Recovery",
        href: "/horeca-supermarket-private-label-manufacturer-payment-recovery",
      },
      {
        label: "Order 37 Summary Suit Money Recovery",
        href: "/law/order-37-summary-suit-money-recovery",
      },
    ],
  },
  {
    id: "electronics-gst-field",
    tabLabel: "Electronics, GST ITC & Field Cash",
    badge: "Thin-Margin Floor Credit, Tax & s.316(4)",
    title: "Appliance Dealer Stock Diversion, Blocked Vendor GST ITC & Field Cash Fraud",
    ticketBand: "₹1 Lakh – ₹1 Cr+ durables credit, DRC-01 tax reversals & employee fraud",
    statutoryTrigger: "CPC Order XXXVIII Rule 5, CGST s.16(2)(c)/s.76 & BNS s.316(4)",
    bottleneck:
      "Consumer electronics and mobile distributors operate on razor-thin 1.5–3% margins and face post-Diwali/summer defaults backed by oral 'price-drop support' excuses or sudden showroom stock liquidation. Across all sectors, CFOs also suffer 18% GST ITC reversals when vendors fail to file GSTR-3B, and field salesmen vanish after collecting retailer cash or personal UPI.",
    legalMechanism:
      "When an electronics showroom attempts to siphon unpaid IMEI/serial-tracked stock, CPC Order XXXVIII Rule 5 authorizes urgent Attachment Before Judgment (exempt from s.12A mediation wait). Against non-filing vendors, citing CGST s.76 (mandatory deposit of tax collected) triggers swift GSTR-3B filing or indemnity refund. For absconding field staff, framing complaints explicitly under BNS s.316(4) (up to 7 years) prevents police dismissal as a civil ledger dispute.",
    operationalSteps: [
      {
        step: "1. Compile IMEI Ledgers, GSTR-2B Mismatches or Retailer Confirmations",
        detail:
          "Attach serial-number/IMEI invoices for durables, GSTR-2B vs 3B mismatch schedules with DRC-01 notices for tax indemnity, or signed retailer cash/UPI receipts for staff defalcation.",
      },
      {
        step: "2. Dispatch Targeted Statutory & Criminal Notice",
        detail:
          "Issue written-credit-note-only rebuttals to appliance dealers, CGST s.76 tax-indemnity demands to defaulting suppliers, or BNS s.316(4) pre-FIR demands supporting Fidelity Insurance claims.",
      },
      {
        step: "3. Urgent Attachment (O.38 R.5), Police FIR or Civil Suit",
        detail:
          "Seek emergency Order XXXVIII Rule 5 inventory/bank attachment on liquidating dealers, register BNS s.316(4) FIRs for staff embezzlement, or pursue civil recovery for DRC-01 tax + s.50(3) interest.",
      },
    ],
    recommendedLinks: [
      {
        label: "Electronics & Mobile Dealer Credit Recovery",
        href: "/consumer-durables-electronics-mobile-dealer-floor-credit-recovery",
      },
      {
        label: "Blocked GST ITC (GSTR-3B Default) Recovery",
        href: "/gst-input-tax-credit-blocked-supplier-non-filing-gstr-3b-recovery",
      },
      {
        label: "Field Salesman Cash Fraud (BNS s.316(4))",
        href: "/field-salesman-collection-agent-cash-misappropriation-recovery-bns-316",
      },
    ],
  },
];

export default function FmcgHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(FMCG_SCENARIOS[0].id);
  const current = FMCG_SCENARIOS.find((s) => s.id === activeId) || FMCG_SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          Interactive Channel Scenario Explorer
        </span>
        <p className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
          Select Your FMCG, Durables, D2C or Stockist Bottleneck to Inspect the Statutory Rail
        </p>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Switch across GT Dealer Security Cheques, Quick-Commerce/Marketplace Holds, C&amp;F Exit Deposits, and Electronics/GST/Salesman Fraud.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3"
        role="tablist"
        aria-label="FMCG and channel credit recovery scenarios"
      >
        {FMCG_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Body */}
      <div role="tabpanel" aria-label={current.title} className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-900 text-white p-4 sm:p-5 rounded-xl">
          <div>
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-red-300 bg-red-950/70 border border-red-800/60 px-2.5 py-0.5 rounded-full mb-1.5">
              {current.badge}
            </span>
            <p className="text-base sm:text-lg font-extrabold text-white leading-snug">
              {current.title}
            </p>
            <p className="text-xs text-slate-300 mt-1">
              <strong className="text-slate-100">Ticket Profile:</strong> {current.ticketBand}
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              Primary Legal Lever
            </span>
            <span className="text-xs font-bold text-emerald-400">{current.statutoryTrigger}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
              Channel Recovery Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
              Creditor Statutory Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalMechanism}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Creditor Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {current.operationalSteps.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
              >
                <p className="text-xs font-extrabold text-[#DC2626]">{item.step}</p>
                <p className="text-xs text-slate-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-wrap gap-2.5">
          {current.recommendedLinks.map((lnk) => (
            <Link
              key={lnk.href}
              href={lnk.href}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-slate-100 hover:bg-[#DC2626] text-slate-800 hover:text-white border border-slate-200 hover:border-[#DC2626] transition-colors"
            >
              <span>{lnk.label}</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
