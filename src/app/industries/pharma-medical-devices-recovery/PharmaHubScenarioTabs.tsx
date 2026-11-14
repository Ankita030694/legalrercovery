"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PharmaScenario {
  id: string;
  tabLabel: string;
  title: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  primaryRoute: {
    label: string;
    href: string;
  };
}

const PHARMA_SCENARIOS: PharmaScenario[] = [
  {
    id: "consignment-implants",
    tabLabel: "Cath-Lab & Ortho Consignments",
    title: "Hospital Implanted Stents, Joints or IOLs in OT Without Issuing a PO",
    statutoryTrigger: "Sale of Goods Act s.24 & BNS s.316/s.318",
    bottleneck:
      "Cardiac, orthopedic, spine, and ophthalmic implant distributors park high-value consignment kits inside hospital OTs and cath labs on Delivery Challans. Surgeons implant the device into cash-paying or TPA patients over weekends, yet hospital purchase desks stall generating a formal Purchase Order or GRN for 4 to 9 months.",
    legalMechanism:
      "Under Section 24 of the Sale of Goods Act, 1930 ('goods delivered on approval or sale-or-return'), property passes to the hospital the moment an act adopting the transaction—surgical implantation—occurs, making the invoice price immediately payable even without a back-dated PO. Unreturned shelf stock attracts criminal breach of trust liability under Section 316 BNS, 2023.",
    operationalSteps: [
      {
        step: "1. Lock OT Consumption & Barcode Evidence",
        detail:
          "Compile Delivery Challans, patient-file peel-off UDI/barcode consumption stickers, OT register acknowledgments, and WhatsApp implant requests certified under Section 63 BSA, 2023.",
      },
      {
        step: "2. Serve Dual Demand & Stock Audit Notice",
        detail:
          "Dispatch an advocate notice invoking Sale of Goods Act s.24 for consumed kits (demanding payment within 15 days) and mandatory physical verification or return of unconsumed shelf inventory.",
      },
      {
        step: "3. Escalate via Order 37 CPC, 43B(h) or BNS s.316",
        detail:
          "Where the distributor holds Udyam Micro/Small status, trigger Section 43B(h) tax-audit disallowance alerts; for missing shelf stock, escalate via Commercial Court Order 37 or pre-FIR BNS s.316 complaints.",
      },
    ],
    primaryRoute: {
      label: "Read Consignment Implant Recovery Playbook",
      href: "/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery",
    },
  },
  {
    id: "stockists-expiry-pcd",
    tabLabel: "Stockists, Expiry & PCD Franchises",
    title: "Chemist/Stockist Arrears, Arbitrary Expiry Deductions & PCD Territory Defaults",
    statutoryTrigger: "CBIC GST Circular 72/46/2018, CGST s.34 & NI Act s.20/s.138/s.142(2)",
    bottleneck:
      "When C&F agents or super-stockists demand overdue ledger balances, defaulting wholesalers dump cartons of non-moving or 3-year-old expired formulations and deduct 10–15% arbitrary breakage credit notes. Meanwhile, Chandigarh, Panchkula, Ambala, and Ahmedabad PCD pharma companies hesitate to sue upcountry district franchisees across Bihar, UP, or Odisha.",
    legalMechanism:
      "Distributorship expiry caps (typically 1.5–2%) combined with CGST Act Section 34 September/November credit-note cutoffs and CBIC Circular No. 72/46/2018-GST defeat retroactive expired-stock dumping. For PCD pharma defaults, Section 142(2) of the NI Act anchors Section 138 criminal prosecution at the creditor's home collection bank after serving Section 20 crystallization notice on security PDCs.",
    operationalSteps: [
      {
        step: "1. Reconcile Multi-Invoice Ledger & Bar Excess Credit Notes",
        detail:
          "Upload all unpaid GST tax invoices, e-Way bills, and Drug License (Form 20B/21B) challans into the multi-invoice schedule while formally rejecting time-barred expiry deductions under CGST s.34.",
      },
      {
        step: "2. Serve Monopoly Revocation & s.20 Security Cheque Notice",
        detail:
          "Revoke exclusive district PCD territory rights in writing and issue prior NI Act s.20 ledger crystallization notice before filling and presenting the stockist's blank signed security cheque.",
      },
      {
        step: "3. File Home-Jurisdiction s.138 & Order 37 Recovery",
        detail:
          "Prosecute bounced cheques in the company's home bank Magistrate court under s.142(2) (joining active directors under s.141 per Aneeta Hada) or enforce Order XXXVII summary suits.",
      },
    ],
    primaryRoute: {
      label: "Read Expiry & Breakage Credit-Note Dispute Guide",
      href: "/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery",
    },
  },
  {
    id: "equipment-reagent-pcpndt",
    tabLabel: "Medical Equipment & Reagent-Rental",
    title: "Diagnostic Analyzer Reagent-Rental Breaches, AMC Arrears & PCPNDT Machine Recovery",
    statutoryTrigger: "Sale of Goods Act s.25, PCPNDT Act Rules & Commercial Courts s.12A",
    bottleneck:
      "Diagnostic labs take ₹20L–₹50L IVD analyzers at zero upfront capex under 5-year Reagent-Rental agreements, then switch to unauthorized third-party reagents while skipping minimum monthly commitments. Worse, seizing an unpaid Ultrasound or Color Doppler machine without prior District Appropriate Authority compliance violates the PCPNDT Act.",
    legalMechanism:
      "Express Retention-of-Title clauses under Section 25 of the Sale of Goods Act preserve OEM ownership until final milestone payment, enabling Section 9 Arbitration or Commercial Court repossession injunctions. For PCPNDT-registered ultrasound equipment, lawful recovery requires formal prior notice to both the defaulting diagnostic centre and the District Appropriate Authority for de-registration/sealing transfer.",
    operationalSteps: [
      {
        step: "1. Audit Reagent Offtake Shortfalls & CMC Logs",
        detail:
          "Document minimum monthly reagent commitment shortfalls, service-engineer preventive maintenance logs, and installation/commissioning sign-offs to preempt spurious defect excuses.",
      },
      {
        step: "2. Serve Retention-of-Title & PCPNDT Compliance Notice",
        detail:
          "Issue a 15-day cure notice demanding overdue EMIs or minimum-commitment liquidated sums, notifying PCPNDT registration transfer protocols where ultrasound equipment is involved.",
      },
      {
        step: "3. Seek Urgent s.9 / Order 38 Asset Protection",
        detail:
          "Bypass Section 12A mediation delay via urgent interim relief under Arbitration Act s.9 or Commercial Court Order XXXIX to restrain third-party sale or unauthorized clinical operation.",
      },
    ],
    primaryRoute: {
      label: "Read Medical Equipment & Reagent-Rental Playbook",
      href: "/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery",
    },
  },
  {
    id: "cdmo-api-tenders",
    tabLabel: "CDMO Batches, API & Govt Tenders",
    title: "Unlifted Custom CDMO Batches, Late API Assay Claims & State Medical Corp Tenders",
    statutoryTrigger: "MSMED Act s.15–18, Sale of Goods Act s.42/44, IBC s.8 & GeM Terms",
    bottleneck:
      "Third-party manufacturers in Baddi, Haridwar, Sikkim, and Gujarat get stranded with custom brand-printed blister/carton batches when PCD buyers refuse to pay the 70% dispatch balance, while drugs tick toward expiry. API suppliers face belated pharmacopoeia rejection claims, and State Medical Corporation (TNMSC/UPMSCL/BMSICL) vendors fear blacklisting if they demand statutory interest.",
    legalMechanism:
      "Under Sale of Goods Act s.44 and s.42, once Certificate of Analysis (COA) release windows close without timely objection, buyer refusal to lift custom stock triggers full price, storage, and statutory destruction indemnity. Under MSMED Act s.16 (upheld in Silpi Industries), 3x RBI Bank Rate compound interest overrides tender 'no-interest' clauses; for ≥₹1 Cr API dues, COA retention-sample proof defeats Mobilox pretexts under IBC s.8.",
    operationalSteps: [
      {
        step: "1. Freeze Expiry & QC Objection Clock",
        detail:
          "Serve an urgent notice attaching COA batch release records, retention-sample protocols, and custom-artwork PO approvals under Sale of Goods Act s.42/s.44 before shelf-life loss.",
      },
      {
        step: "2. Trigger MSME ODR / Section 43B(h) Tax Notice",
        detail:
          "Udyam-registered Micro/Small CDMO and surgical units invoke 15/45-day Section 15 caps, Q4 Section 43B(h) buyer expense disallowance, and MSME ODR / MSEFC arbitration.",
      },
      {
        step: "3. Protect Tender Standing While Claiming Interest",
        detail:
          "For State Medical Corporations and GeM 10-day CRAC delays, file structured representations alongside MSEFC references or Article 226 writ protection against arbitrary debarment.",
      },
    ],
    primaryRoute: {
      label: "Read CDMO Unlifted Batch & Payment Playbook",
      href: "/pharma-third-party-contract-manufacturing-cdmo-batch-payment-recovery",
    },
  },
];

export default function PharmaHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(PHARMA_SCENARIOS[0].id);
  const current = PHARMA_SCENARIOS.find((s) => s.id === activeId) || PHARMA_SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          Interactive Sector Explorer
        </span>
        <p className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
          Select Your Life-Sciences Creditor Segment to View Statutory Remedies
        </p>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Switch across Consignment Implants, Chemist/Stockist &amp; PCD Networks, Medical Capital Equipment, and CDMO/API/Tender tracks.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3"
        role="tablist"
        aria-label="Pharma and medical devices creditor segments"
      >
        {PHARMA_SCENARIOS.map((tab) => {
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

      {/* Panel */}
      <div className="space-y-5" role="tabpanel">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">{current.title}</h3>
          <span className="inline-block px-2.5 py-1 bg-red-50 text-[#DC2626] rounded-md text-[11px] font-bold border border-red-200 self-start sm:self-auto">
            {current.statutoryTrigger}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Trade Bottleneck &amp; Buyer Pretext
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor-Grade Statutory Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalMechanism}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            3-Step Commercial Recovery Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.operationalSteps.map((item) => (
              <div
                key={item.step}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
              >
                <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
          <Link
            href={current.primaryRoute.href}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#DC2626] hover:text-[#B91C1C] hover:underline"
          >
            <span>{current.primaryRoute.label}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/tools/msme-delayed-payment-interest-calculator"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
          >
            Calculate 3&times; RBI MSME Compound Interest &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
