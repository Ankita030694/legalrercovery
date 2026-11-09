"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const PROBLEMS: ProblemTab[] = [
  {
    id: "painting-deduction",
    tabLabel: "Painting Deductions",
    title: "Arbitrary Dilapidation & Complete Repainting Deductions",
    cause:
      "Upon vacating, landlords routinely deduct ₹2,00,000 to ₹10,00,000 claiming the tenant must repaint the entire office, replace all carpet tiles, or restore the property to brand-new condition. Landlords rely on vague 'reinstatement' clauses in standard commercial leases while ignoring natural deterioration over a 3 to 9-year lease term.",
    legalBasis:
      "Section 108(m) of the Transfer of Property Act, 1882 explicitly provides that the lessee is bound to restore the property in as good condition as it was at the commencement, 'reasonable wear and tear excepted'. The Delhi High Court in multiple rulings has held that normal weathering, fading, and minor operational scuffs cannot be shifted onto the tenant. Unless the lease deed specifically mandates premium end-of-term repainting with verified market estimates, unilateral arbitrary deductions are legally invalid.",
    steps: [
      {
        step: "Gather Move-In vs. Move-Out Photographic Proof",
        description:
          "Compile high-resolution photos and date-stamped video walkthroughs recorded on the handover date, highlighting that no structural alterations or malicious damage took place.",
      },
      {
        step: "Demand Itemized Contractor Invoices & GST Bills",
        description:
          "Formally challenge estimated lump-sum quotations. Under Indian contract law, a landlord cannot dock damages without demonstrating actual out-of-pocket expenditure with verified GST invoices.",
      },
      {
        step: "Issue Advocate Demand Notice Refuting Dilapidation",
        description:
          "Serve a 15-day statutory demand notice invoking Section 108(m) TPA, putting the landlord on notice for interest at 18% p.a. for wrongful withholding of liquidated funds.",
      },
    ],
    statutoryRule: "Section 108(m) Transfer of Property Act & Delhi High Court Precedents",
  },
  {
    id: "handover-refusal",
    tabLabel: "Inspection Refusal",
    title: "Landlord Stalling Inspection & Refusing to Sign Handover Sheet",
    cause:
      "When the lease expiry or notice period concludes, the landlord or property manager evades physical meetings, refuses to conduct a joint inspection, or declines to sign the key surrender memo, aiming to claim that the tenant is still in occupation and accumulating holdover rent charges.",
    legalBasis:
      "Under Indian tenancy law, a tenant who gives valid notice of termination and tenders vacant possession cannot be forced to remain in possession against their will. If the landlord deliberately delays taking keys, the tenant's liability for rent terminates on the effective vacating date. Continued retention of the deposit by the landlord constitutes unlawful detention of money.",
    steps: [
      {
        step: "Send Formal Notice of Vacant Possession via Email & Post",
        description:
          "Send a written notice specifying three alternative inspection dates and times, stating that the premises are completely cleared of all furniture, staff, and fixtures.",
      },
      {
        step: "Execute a Notarized Unilateral Handover Panchnama",
        description:
          "If the landlord fails to appear, engage an independent witness and notary or photographer to create a signed walkthrough inventory confirming peaceful vacant status.",
      },
      {
        step: "Deposit Physical Keys by Registered Speed Post or Court",
        description:
          "Tender the physical keys via insured Speed Post or consign them with the local court or mediator, thereby formally halting any bogus ongoing rent accruals.",
      },
    ],
    statutoryRule: "Contract Act Section 38 (Tender of Performance) & TPA Section 111",
  },
  {
    id: "arbitration-bluff",
    tabLabel: "Arbitration Trap",
    title: "Landlord Exploiting High Arbitration Fee Clauses to Block Small Claims",
    cause:
      "Commercial leases typically contain an arbitration clause appointing a sole arbitrator. Landlords frequently weaponize this clause, betting that a tenant will abandon a ₹5 Lakh to ₹20 Lakh deposit rather than spend ₹3 Lakh on arbitrator sitting fees, administrative charges, and legal retainers.",
    legalBasis:
      "Under Supreme Court jurisprudence (Vidya Drolia 2021; Perkins Eastman 2020), unilateral appointment of a sole arbitrator by the lessor is void ab initio under Section 12(5) read with the Seventh Schedule of the Arbitration Act. Furthermore, an admitted security deposit where possession is surrendered qualifies as a liquidated debt under Order 37 CPC. Tenants can also pursue pre-institution commercial mediation at virtually zero cost before committing to formal arbitration.",
    steps: [
      {
        step: "Scrutinize Unilateral Appointment Clauses",
        description:
          "Check if the lease gives the landlord sole discretion to name the arbitrator. If yes, that clause is legally unenforceable under Section 12(5) of the Arbitration Act.",
      },
      {
        step: "Initiate Pre-Institution Mediation under Commercial Courts Act",
        description:
          "File an application under Section 12A with the District Legal Services Authority (DLSA). DLSA mediation carries nominal statutory fees and forces the landlord to negotiate.",
      },
      {
        step: "Leverage Order 37 Summary Suit in Appropriate High Court / District Court",
        description:
          "Where the debt is admitted in writing and no genuine dispute exists on handover, filing an Order 37 suit puts pressure on the landlord to settle before facing a summary decree.",
      },
    ],
    statutoryRule: "Section 12(5) Arbitration Act 1996 & Section 12A Commercial Courts Act 2015",
  },
  {
    id: "property-sold",
    tabLabel: "Premises Sold/Mortgaged",
    title: "Landlord Sold the Building or Defaults to Bank (SARFAESI)",
    cause:
      "During the tenure of an office lease, the original landlord sells the commercial building to an institutional buyer or defaults on a mortgage loan, leading to SARFAESI recovery proceedings by banks. The original lessor claims the new buyer must refund the deposit, while the buyer claims they never received the deposit funds.",
    legalBasis:
      "Under Section 109 of the Transfer of Property Act, the transferee of lessor rights steps into the shoes of the lessor and is bound by all covenants that run with the land, including the liability to refund security deposits upon termination. Furthermore, the original lessor remains personally liable unless a tripartite novation agreement explicitly released them and transferred the physical escrow funds.",
    steps: [
      {
        step: "Review the Tripartite or Attornment Agreement",
        description:
          "Check whether you signed an attornment notice or tripartite assignment when the building changed hands, and identify which entity acknowledged receipt of the security deposit.",
      },
      {
        step: "Issue Dual Demand Notice to Both Old and New Lessors",
        description:
          "Address the statutory legal notice jointly and severally to both the original lessor entity and the purchasing asset manager, holding both accountable under Section 109 TPA.",
      },
      {
        step: "Intervene Before DRT or Company Court if Bank Attaches",
        description:
          "If bank notices are pasted under SARFAESI, file a formal third-party representation proving bona fide tenancy and deposit lien ahead of general unsecured corporate debts.",
      },
    ],
    statutoryRule: "Section 109 Transfer of Property Act, 1882 & SARFAESI Third-Party Protections",
  },
  {
    id: "lock-in-dispute",
    tabLabel: "Lock-in Period Claims",
    title: "Unlawful Forfeiture for Premature Exit or Fit-Out Adjustments",
    cause:
      "Tenants vacating before the expiration of a 36-month lock-in period (e.g., due to business downsizing or landlord's failure to maintain HVAC/elevators) often face complete forfeiture of their 6-month security deposit plus demands for the remaining lock-in rent.",
    legalBasis:
      "Under Section 73 and Section 74 of the Indian Contract Act, 1872 and the Supreme Court landmark ruling in Kailash Nath Associates v. DDA (2015) 4 SCC 136, a liquidated damages clause or lock-in forfeiture clause cannot be enforced as a penalty. The landlord must prove actual financial loss suffered. If the landlord re-lets the commercial unit within a month or two, they cannot unjustly enrich themselves by pocketing the entire lock-in rent and the security deposit.",
    steps: [
      {
        step: "Document Landlord's Fundamental Breach of Essential Covenants",
        description:
          "Demonstrate that premature exit was caused by lessor failures (persistent power outages, HVAC breakdown, water leakage, lack of statutory fire NOC).",
      },
      {
        step: "Track Re-Letting of the Commercial Unit",
        description:
          "Obtain evidence of new tenants occupying the premises, proving the landlord incurred zero vacancy loss under the mitigation of damages doctrine.",
      },
      {
        step: "Serve Demand for Proportionate Net Refund with Interest",
        description:
          "Draft a legal notice demanding refund of deposit minus only legitimate out-of-pocket downtime, challenging penalty clauses under Contract Act Section 74.",
      },
    ],
    statutoryRule: "Sections 73 & 74 Indian Contract Act & Kailash Nath Associates (2015)",
  },
];

export default function CommercialLeaseProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Tab Bar */}
      <div className="bg-slate-100/80 p-2 border-b border-slate-200 flex flex-wrap gap-1.5 sm:gap-2">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-red-700 shadow-xs border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="p-5 sm:p-7 space-y-5">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800 inline-block mb-2">
            Dispute Scenario Analysis
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50/70 border border-red-200/70 rounded-xl space-y-1.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-red-800 flex items-center gap-1.5">
              <span>⚠</span> How Commercial Landlords Withhold the Deposit
            </h4>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed font-medium">
              {currentProblem.cause}
            </p>
          </div>

          <div className="p-4 bg-emerald-50/80 border border-emerald-200/80 rounded-xl space-y-1.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <span>⚖</span> Tenant&apos;s Legal Shield &amp; Court Precedents
            </h4>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3 Step Practical Recovery Roadmap */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
            Immediate Tactical Steps to Neutralize This Tactic:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    {st.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-7">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
              Statutory Benchmark
            </span>
            <span className="font-semibold text-slate-100">{currentProblem.statutoryRule}</span>
          </div>
          <Link
            href="/legal-notice-charges"
            className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-bold shrink-0"
          >
            Draft Demand Notice under this Section →
          </Link>
        </div>
      </div>
    </div>
  );
}
