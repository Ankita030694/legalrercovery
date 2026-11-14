"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ManufacturingScenario {
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
  secondaryRoute: {
    label: string;
    href: string;
  };
}

const MANUFACTURING_SCENARIOS: ManufacturingScenario[] = [
  {
    id: "capital-goods-spm",
    tabLabel: "Capital Goods & SPM",
    title: "Buyer Running Delivered Machinery While Withholding Final 10–20% Balance",
    statutoryTrigger: "Sale of Goods Act 1930 s.42, s.55 & s.59 + Arbitration s.9",
    bottleneck:
      "Special Purpose Machine (SPM), packaging-line, boiler, and CNC builders across Pune, Rajkot, Coimbatore, and Faridabad routinely collect 80% before dispatch, only for the buyer to place the equipment into 3-shift commercial output while withholding the commissioning certificate and raising belated 'efficiency shortfall' excuses 4–6 months later—or invoking Performance Bank Guarantees (PBGs) when pressed for payment.",
    legalMechanism:
      "Under Section 42 of the Sale of Goods Act, 1930, retaining goods beyond a reasonable time without intimating rejection—or performing any act inconsistent with the seller's ownership such as running the machine commercially—constitutes deemed acceptance. Once accepted, Section 59 bars unilateral rejection, confining the buyer to proving quantifiable warranty damages while price recovery proceeds under Section 55 alongside Section 9 PBG protection where applicable.",
    operationalSteps: [
      {
        step: "1. Establish Commercial Usage & GST ITC Admission",
        detail:
          "Compile E-Way Bill Part-B movement, installation service logs, buyer GSTR-2B/3B ITC availment (CGST s.16(2)(b)), and PLC/production run evidence proving continuous commercial operation.",
      },
      {
        step: "2. Serve Section 42 Deemed-Acceptance Demand Notice",
        detail:
          "Issue an advocate notice locking in deemed acceptance, refuting post-production defects, and segregating conditional vs unconditional PBG text before any retaliatory encashment.",
      },
      {
        step: "3. Escalate via MSEFC, Order XXXVII or Section 9/12A",
        detail:
          "Route Micro/Small suppliers to MSME ODR/MSEFC for 3x RBI interest, and Medium/larger OEMs to Commercial Courts Section 12A or Order XXXVII summary suits.",
      },
    ],
    primaryRoute: {
      label: "Read Commissioning Balance Recovery Guide",
      href: "/custom-industrial-machinery-balance-withheld-after-installation-recovery",
    },
    secondaryRoute: {
      label: "Review Wrongful PBG Stay Standards",
      href: "/wrongful-performance-bank-guarantee-pbg-invocation-stay-recovery",
    },
  },
  {
    id: "auto-ancillary-oem",
    tabLabel: "Auto-Ancillary & Tooling",
    title: "Tier-1 OEM Retrospective Debit Notes & Unamortized Die / Tooling Capital",
    statutoryTrigger: "Contract Act s.73 & s.170 + MSMED s.15–18 + s.43B(h)",
    bottleneck:
      "Tier-2 and Tier-3 forging, casting, stamping, and injection-moulding suppliers in Chakan, Manesar, Sriperumbudur, Hosur, and Sanand absorb arbitrary retrospective debit notes for 'line stoppage' or 'raw-material index clawbacks' after PPAP approval, or invest ₹25–80 Lakh in dedicated dies against OEM Letters of Intent (LOIs) only for forecast volumes to collapse.",
    legalMechanism:
      "Where an OEM cancels off-take or imposes post-facto debit notes without contractual defect proof or joint inspection, Section 73 Contract Act + promissory estoppel preserves recovery of unamortized tooling investment. Additionally, Section 170 creates a bailee's particular lien over dies on which the supplier expended skill and modification work, while Micro/Small suppliers deploy March 31 Section 43B(h) CFO notices for immediate ledger priority.",
    operationalSteps: [
      {
        step: "1. Disallow Unilateral Debit Notes in Writing",
        detail:
          "Serve formal objection under BSA s.63 attaching PPAP sign-offs, ASN receipts, and zero-rejection dispatch records so retrospective ledger entries never ripen into acquiescence.",
      },
      {
        step: "2. Quantify Unamortized Tooling & Section 170 Lien Scope",
        detail:
          "Reconcile amortized per-piece recovery collected vs pending capital balance, and assess whether unpaid skill/modification charges justify a lawful s.170 particular lien on specific dies.",
      },
      {
        step: "3. Deploy Stage-1 CFO s.43B(h) + Stage-2 Advocate Notice",
        detail:
          "Send a polite CFO & Statutory Auditor Form 3CD Clause 22 tax-disallowance alert first to protect vendor-code continuity, escalating to formal s.16/s.23 demand if unpaid.",
      },
    ],
    primaryRoute: {
      label: "Read OEM Debit Note & Tooling Recovery Guide",
      href: "/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery",
    },
    secondaryRoute: {
      label: "Open 2-Stage Section 43B(h) Template Pack",
      href: "/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice",
    },
  },
  {
    id: "medium-enterprises-dealers",
    tabLabel: "Medium Units & Dealers",
    title: "Medium Udyam Exclusions & Multi-Lakh Industrial Dealer Credit Defaults",
    statutoryTrigger: "MSMED s.2(n) Exclusion, Commercial Courts s.12A, O.37 & NI s.138",
    bottleneck:
      "Factories with ₹50 Cr–₹250 Cr turnover holding 'Udyam (Medium)' certificates routinely file Samadhaan references only to face threshold dismissal because MSMED Section 2(n) restricts 'Supplier' exclusively to Micro and Small units (per Silpi Industries date-of-contract tests). Meanwhile, pumps, motors, cables, switchgear, and bearings OEMs manage 100–800 authorized dealers stretching 45-day credit to 180+ days.",
    legalMechanism:
      "Medium Enterprises and industrial OEM channel teams avoid wasted months at MSEFC by routing directly into Commercial Courts (for Specified Value ≥ ₹3 Lakh) via Section 12A mediation or Order XXXVII summary suits backed by GSTR-2B/3B ITC estoppel (CGST s.16(2)(b)), alongside clean Dealership Termination + Security Deposit/BG Set-Off + Section 138/141 NI Act director prosecution on security cheques (Sripati Singh).",
    operationalSteps: [
      {
        step: "1. Audit Udyam Tier & Contract Date (Silpi Compliance)",
        detail:
          "Confirm whether each overdue PO was signed while classified Micro/Small or Medium; re-route Medium and dealer ledgers immediately to Commercial Court / Order 37 / s.138 tracks.",
      },
      {
        step: "2. Lock Delivery via E-Way Bill Part-B & GSTR-2B/3B",
        detail:
          "Certify ERP ledgers, E-Way Bill movement, FASTag logs, and buyer ITC availment under Section 63 BSA 2023 so missing physical GRNs cannot defeat summary judgment.",
      },
      {
        step: "3. Execute Multi-Dealer Batch & Deposit Set-Off Notices",
        detail:
          "Use LegalRecovery's multi-invoice ledger engine to forfeit dealer security deposits lawfully, crystallize security cheques, and trigger 15-day s.138 + s.141 notices.",
      },
    ],
    primaryRoute: {
      label: "Read Medium Enterprise Udyam Exclusion Guide",
      href: "/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options",
    },
    secondaryRoute: {
      label: "Explore Industrial Dealer Credit Recovery",
      href: "/industrial-dealer-oem-authorized-distributor-credit-default-recovery",
    },
  },
  {
    id: "job-work-bespoke-wip",
    tabLabel: "Job-Work & Cancelled POs",
    title: "CNC Job-Work Liens (s.170) & Mid-Fabrication PO Cancellations (s.39/s.73)",
    statutoryTrigger: "Contract Act s.170, s.39 & s.73 + CGST s.143 + Brij Paul Singh",
    bottleneck:
      "CNC machining, heat-treatment, electroplating, and foundry job-workers fear criminal breach-of-trust threats if they retain machined components against unpaid bills, while heavy vessel/transformer/conveyor fabricators suffer severe WIP and special-alloy losses when EPC buyers abruptly email 'Put PO on indefinite hold' after GAD drawing approval.",
    legalMechanism:
      "Section 170 of the Indian Contract Act grants a bailee who renders skill and labour an explicit Particular Lien over the specific batch worked upon (though not unrelated prior batches unless contractually stipulated), insulated from BNS s.316 claims when documented with CGST s.143 challans. For mid-production PO cancellations, Section 39 anticipatory breach + Section 73 entitles fabricators to WIP cost minus scrap salvage plus reasonable loss of profit (A.T. Brij Paul Singh).",
    operationalSteps: [
      {
        step: "1. Segregate Batch Inventory Under Section 170",
        detail:
          "Document exact machining/coating labour expended on the retained batch and verify CGST s.143 ITC-04 job-work challan timelines (1-year/3-year statutory return windows).",
      },
      {
        step: "2. Freeze WIP & Photograph Bespoke Fabrication Stage",
        detail:
          "Upon 'PO Hold/Cancel' emails, timestamp GAD approvals, special-alloy mill test certificates (MTCs), and shop-floor progress before scrap liquidation.",
      },
      {
        step: "3. Serve Statutory Lien or Anticipatory Breach Demand",
        detail:
          "Dispatch advocate notice asserting lawful Section 170 particular lien or quantifying WIP + 10–15% loss of profit under Section 73 with 15-day cure window.",
      },
    ],
    primaryRoute: {
      label: "Read CNC Job-Work & Section 170 Lien Guide",
      href: "/cnc-machining-fabrication-job-work-challan-payment-recovery",
    },
    secondaryRoute: {
      label: "Read Mid-Production PO Cancellation Recovery",
      href: "/purchase-order-cancelled-mid-production-bespoke-goods-recovery",
    },
  },
];

export default function ManufacturingHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(MANUFACTURING_SCENARIOS[0].id);
  const current =
    MANUFACTURING_SCENARIOS.find((s) => s.id === activeId) || MANUFACTURING_SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          Interactive Manufacturing Vertical Explorer
        </span>
        <p className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
          Select Your Factory Dispute Pattern to Inspect the Statutory Escalation Path
        </p>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Compare remedies across Capital Machinery Commissioning Retentions, Auto-Ancillary Tooling &amp; Debit Notes, Medium Enterprise / Dealer Ledgers, and Job-Work / Cancelled POs.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3"
        role="tablist"
        aria-label="Manufacturing recovery verticals"
      >
        {MANUFACTURING_SCENARIOS.map((tab) => {
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

      {/* Active Panel */}
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
              Industrial Margin Leak &amp; Buyer Stalling Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor-Side Statutory Counter-Weapon
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalMechanism}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            3-Step Plant &amp; Finance Controller Execution Sequence
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
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={current.primaryRoute.href}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#DC2626] hover:text-[#B91C1C] hover:underline"
            >
              <span>{current.primaryRoute.label}</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href={current.secondaryRoute.href}
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline"
            >
              {current.secondaryRoute.label} &rarr;
            </Link>
          </div>
          <Link
            href="/tools/msme-delayed-payment-interest-calculator"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
          >
            Calculate 3x RBI Compound Interest &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
