"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ConstructionScenario {
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

const CONSTRUCTION_SCENARIOS: ConstructionScenario[] = [
  {
    id: "ra-bill-mb-ndc",
    tabLabel: "RA Bills, MB Stall & NDC",
    title: "Uncertified Running Account (RA) Bills, PMC Stonewalling & Coerced No-Claim Certificates",
    statutoryTrigger: "Contract Act s.55/70, R.L. Kalathia & Commercial Courts s.2(1)(c)(vi)",
    bottleneck:
      "Private developers and Project Management Consultants (PMCs) deliberately delay signing Joint Measurement Books (MBs) for months, or coerce cash-starved contractors into signing a 'Full & Final No-Claim Certificate (NDC)' just to unlock 60% of undisputed bill value.",
    legalMechanism:
      "Under Supreme Court doctrine in Ambica Construction and R.L. Kalathia & Co. v. State of Gujarat, an NDC executed under economic duress or accompanied by contemporaneous written protest does NOT extinguish arbitration or extra-item claims. Pairing Site DPRs, material gate-entry logs, and a BSA s.63 notice establishes deemed certification.",
    operationalSteps: [
      {
        step: "1. Compile Site Proof & Deemed Certification Notice",
        detail:
          "Bundle signed Daily Progress Reports (DPRs), joint level sheets, GST tax invoices, and PMC email acknowledgments into a formal 15-day notice demanding MB certification.",
      },
      {
        step: "2. Execute Under-Duress Protest Protocol on NDCs",
        detail:
          "If forced to sign a clean NDC to avoid payroll collapse, issue a timestamped 'Without Prejudice — Signed Under Financial Duress' notice within 24–72 hours preserving disputed claims.",
      },
      {
        step: "3. Invoke Section 21 Arbitration or Order XIII-A",
        detail:
          "Serve an explicit Section 21 Arbitration Invocation Notice (or Commercial Court s.12A mediation for non-arbitration contracts >= ₹3 Lakh) to freeze the 3-year limitation clock.",
      },
    ],
    primaryRoute: {
      label: "Read Uncertified RA Bill & MB Recovery Guide",
      href: "/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery",
    },
  },
  {
    id: "govt-psu-tenders",
    tabLabel: "NHAI, CPWD, PWD & JJM",
    title: "Government, Municipal & Jal Jeevan Mission (JJM) Bills Stuck on 'Lack of Grant'",
    statutoryTrigger: "CPC s.80 (60-Day Notice), Art. 226 Writ (Surya Constructions) & GCC DRB",
    bottleneck:
      "State PWDs, Municipal Corporations, and Jal Jeevan Mission (JJM) authorities certify Measurement Books yet withhold payouts for 12–36 months citing 'budget/grant not received', while contractors miss mandatory 60-day Section 80 CPC notice rules or CPWD/NHAI Dispute Review Board windows.",
    legalMechanism:
      "Where work completion and Measurement Book quantities are undisputed and admitted on official records, the Supreme Court in M/s Surya Constructions v. State of U.P. confirms High Courts can issue Article 226 Writ Mandamus directing payment with interest—bypassing 5-year civil suits while Section 15(2) Limitation Act excludes the 60-day Section 80 CPC waiting period.",
    operationalSteps: [
      {
        step: "1. Extract Certified MB, Completion & Audit Notings",
        detail:
          "Secure Executive Engineer MB certification, running ledger abstract, and treasury token numbers (via RTI where withheld) to prove undisputed monetary liability.",
      },
      {
        step: "2. Serve Mandatory Section 80 CPC / GCC Claim Notice",
        detail:
          "Deliver compliant Section 80 CPC notice (excluding 60 days from limitation under s.15(2) Limitation Act) or trigger CPWD Clause 25 / NHAI DRB timelines before arbitration.",
      },
      {
        step: "3. Art. 226 Writ Mandamus or NITI Aayog 75% Payout",
        detail:
          "File Article 226 Writ for admitted MB dues (Surya Constructions), or invoke CCEA/NITI Aayog 75% release against Bank Guarantee once a PSU arbitral award is challenged under s.34.",
      },
    ],
    primaryRoute: {
      label: "Read Section 80 CPC Government Notice Rules",
      href: "/law/section-80-cpc-notice-to-government",
    },
  },
  {
    id: "works-msme-subcontractor",
    tabLabel: "Works-MSME & Subcontractors",
    title: "Avoiding MSEFC 'Works Contract' Rejection & Defeating 'Pay-When-Paid' Clauses",
    statutoryTrigger: "MSMED s.18 Divisibility Test, Contract Act s.23/46 & Ircon Precedent",
    bottleneck:
      "Udyam-registered EPC, HVAC, solar, and civil contractors waste 18–24 months before MSEFC Samadhaan only to have High Courts quash awards because indivisible 'Works Contracts' are excluded from MSMED s.18. Meanwhile, Tier-2 subcontractors face 'back-to-back / pay-when-paid' stonewalling by main contractors.",
    legalMechanism:
      "High Courts (Shree Gee Enterprises, Sterling & Wilson, Tata Power) distinguish indivisible Works Contracts from divisible Supply-plus-Erection agreements where equipment/material POs are billed separately. For Tier-2 subcontractors, Supreme Court precedent (Ircon International v. Vinay Heavy Equipments) and Contract Act s.46 prevent main contractors from using employer delay as an indefinite shield—especially if the prime settled behind the subcontractor's back.",
    operationalSteps: [
      {
        step: "1. Audit PO Structure: Indivisible vs Divisible Supply",
        detail:
          "Check if BOQ, GST HSN/SAC codes, and POs separate Equipment/Material Supply from Site Erection. Route pure/divisible supply to MSEFC + s.43B(h), and indivisible works straight to Commercial Court/Arbitration.",
      },
      {
        step: "2. Break Abusive 'Pay-When-Paid' Withholding",
        detail:
          "Put the main EPC contractor on notice under Contract Act s.46 demanding proof of employer non-payment and joint pursuit of claims—stopping silent prime-employer settlements.",
      },
      {
        step: "3. Escalate Parallel Commercial / IBC / Garnishee Rails",
        detail:
          "Deploy Order XXXVII summary suits on certified subcontractor RA bills, Section 138/25 bounce action on PDCs, or Section 8 IBC demand notices (>= ₹1 Crore).",
      },
    ],
    primaryRoute: {
      label: "Read Subcontractor & Back-to-Back Recovery Guide",
      href: "/subcontractor-payment-recovery-india",
    },
  },
  {
    id: "dlp-ld-bg-shield",
    tabLabel: "DLP, Wrong LD & BG Shield",
    title: "Post-DLP Retention Release, 10% Liquidated Damages Counter & Bank Guarantee Stays",
    statutoryTrigger: "Contract Act s.74 (Kailash Nath), Arbitration Act s.9 & Section 55 Notice",
    bottleneck:
      "Developers treat 5%–10% retention money as permanent margin by claiming 'OC not received so DLP never began', slap automatic 10% Liquidated Damages (LD) to wipe out final bills, and threaten retaliatory encashment of Performance Bank Guarantees (PBGs) the day a contractor serves a recovery demand.",
    legalMechanism:
      "Under Kailash Nath Associates v. DDA, 10% LD or retention forfeiture under Section 74 requires pleading and proving actual legal injury—and is barred where delay was employer-caused (late drawings, site handover, RoW). Beneficial Occupation triggers DLP expiry, while urgent Section 9 Commercial Court petitions restrain fraudulent or irretrievable-injustice BG encashments.",
    operationalSteps: [
      {
        step: "1. Establish Beneficial Occupation & DLP Expiry",
        detail:
          "Compile flat/unit handovers, MEP commissioning certificates, and zero-snag closure logs to prove Defect Liability Period completion regardless of pending developer OC.",
      },
      {
        step: "2. Serve Section 55 Prolongation & Kailash Nath LD Rebuttal",
        detail:
          "Cross-reference Hindrance Register delays against Section 55 Contract Act reservations to invalidate arbitrary 10% LD debit notes and Risk-and-Cost termination threats.",
      },
      {
        step: "3. Move Section 9 Petition Before BG Encashment",
        detail:
          "Before serving aggressive termination or Section 21 notices on high-value PBG exposure, prepare an urgent Section 9 Commercial Court injunction petition with bank-guarantee copy and fraud/special-equity evidence.",
      },
    ],
    primaryRoute: {
      label: "Read Post-DLP Retention Money Recovery Playbook",
      href: "/retention-money-recovery-after-defect-liability-period-dlp-expiry",
    },
  },
];

export default function ConstructionHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(CONSTRUCTION_SCENARIOS[0].id);
  const current =
    CONSTRUCTION_SCENARIOS.find((s) => s.id === activeId) || CONSTRUCTION_SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          Interactive Track Explorer
        </span>
        <p className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
          Select Your Construction Dispute Bottleneck to View the Statutory Rail
        </p>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Switch across RA Bill / MB Stalling, Govt/PSU Tenders, Works-Contract MSME / Subcontractors, and DLP Retention / LD / BG Protection.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3"
        role="tablist"
        aria-label="Construction and EPC recovery scenarios"
      >
        {CONSTRUCTION_SCENARIOS.map((tab) => {
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
              Site &amp; Contractual Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
              Contractor-Side Statutory Remedy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalMechanism}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            3-Step Contracts &amp; Legal Execution Sequence
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
            href="/tools/construction-retention-dlp-escalation-claim-calculator"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
          >
            Open Retention, DLP &amp; Limitation Calculator &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
