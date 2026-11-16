"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  description: string;
  defaultProfile: string;
  statutoryTrap: string;
  promoterRemedy: string;
  statutoryCitations: string[];
  actionChecklist: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "speculative-investor",
    badge: "Scenario 01 &bull; Milestone Default",
    title: "Chronic Slab-Defaulting Speculative Investor",
    description:
      "Allottee booked an apartment during early casting, paid the initial 10%–20%, and abruptly ceased milestone installments once construction reached upper floors. The buyer is waiting to flip the allotment without infusing further capital, creating an acute working capital gap for project contractors.",
    defaultProfile: "3+ unpaid construction slabs (₹20,00,000 to ₹75,00,000 overdue). Allottee ignores automated CRM payment reminders.",
    statutoryTrap:
      "Sending informal CRM emails or WhatsApp payment reminders, followed by a sudden unilateral flat cancellation. State RERA Authorities (MahaRERA, UP-RERA, HRERA) routinely quash informal cancellations, penalizing developers under Section 61 and restoring allotments because the promoter failed to serve a formal registered 30-day cure notice accompanied by an Architect's Stage Certificate.",
    promoterRemedy:
      "Serve a formal statutory Cure-cum-Interest Notice under RERA Section 19(6) and Section 19(7). Mandatorily annex the licensed Architect's Stage Completion Certificate (Form 1) and Engineer Form 2. Calculate delayed interest at the statutory SBI MCLR + 2% rate. If the default is not remedied within 30 days, execute a formal termination under Section 11(5) and forfeit earnest money strictly capped at 10% per Supreme Court Kailash Nath doctrine.",
    statutoryCitations: [
      "RERA Act 2016 s.19(6) (Mandatory Payment Obligation)",
      "RERA Act 2016 s.19(7) (SBI MCLR + 2% Statutory Interest)",
      "RERA Act 2016 s.11(5) (Cancellation Strictly per Agreement)",
      "Supreme Court: Kailash Nath Associates v. DDA (10% Forfeiture Cap)",
    ],
    actionChecklist: [
      "Verify that the milestone demand corresponds strictly to the registered Agreement for Sale schedule.",
      "Attach Council of Architecture (CoA) certified Stage Completion Certificate with date-stamped site photographs.",
      "Compute simple interest strictly at SBI Highest MCLR + 2% (avoid compounding or arbitrary 18% penal rates).",
      "Serve 30-day cure notice via Registered Speed Post RPAD + registered email with BSA 2023 s.63 audit log.",
      "Upon expiry of 30 days without payment, serve formal cancellation letter and refund balance 90% consideration within 45 days.",
    ],
  },
  {
    id: "possession-stalling",
    badge: "Scenario 02 &bull; Handover Evasion",
    title: "Allottee Refusing Physical Possession under Section 19(10)",
    description:
      "The promoter has obtained a valid Occupancy Certificate (OC) or Completion Certificate (CC) from the local planning authority. The allottee refuses to execute the conveyance deed, take physical possession, or clear final possession dues, raising frivolous cosmetic snag lists to evade stamp duty, registration charges, and ongoing maintenance liabilities.",
    defaultProfile: "Unit ready with OC/CC. Final demand note (5%–10% possession balance + IFMS + clubhouse + legal charges) unpaid for > 60 days.",
    statutoryTrap:
      "Allowing the buyer to remain in limbo without serving a formal Section 19(10) notice. If the promoter does not establish a clear paper trail, the buyer later files a consumer complaint claiming the unit was incomplete, dragging the promoter into delayed possession compensation disputes under Section 18.",
    promoterRemedy:
      "Issue a statutory Final Demand and Possession Call Notice under Section 19(10) of RERA Act, 2016. Provide a firm 60-day window for execution of conveyance and physical handover. Clarify that under Section 14(3), structural or workmanship defects will be rectified by the promoter within 30 days under the 5-year defect liability covenant, but minor cosmetic snags cannot stall the statutory obligation to accept possession. Mandatorily start billing contractually stipulated holding charges and monthly society maintenance from Day 61.",
    statutoryCitations: [
      "RERA Act 2016 s.19(10) (Mandatory 2-Month Possession Acceptance Duty)",
      "RERA Act 2016 s.14(3) (Promoter 5-Year Structural Defect Rectification)",
      "RERA Act 2016 s.19(6) (Allottee Duty to Pay Common Maintenance & Taxes)",
      "Supreme Court: IREO Grace Realtech (Allottee bound by OC grant)",
    ],
    actionChecklist: [
      "Serve copy of sanctioned Occupancy Certificate / Partial OC along with architect certificate.",
      "Provide transparent itemized statement of account: possession balance, stamp duty, registration, IFMS, and advance maintenance.",
      "Offer a 15-day joint inspection schedule with customer care team for logging snag items.",
      "Place allottee on notice that pursuant to Section 19(10), physical possession shall be deemed accepted post 60 days.",
      "Levy holding charges (₹5 to ₹10 per sq. ft. per month) and pass through RWA/Society maintenance charges upon notice expiry.",
    ],
  },
  {
    id: "tripartite-loan-default",
    badge: "Scenario 03 &bull; Bank Tripartite Breach",
    title: "Bank Home Loan Disbursement Stalled by Buyer Default",
    description:
      "The allottee financed the apartment via a home loan from a scheduled commercial bank or Housing Finance Company (HFC) under a standard Tripartite Agreement. The buyer subsequently defaulted on personal loan obligations or stopped paying their margin equity, prompting the lending bank to freeze further construction-linked disbursements to the developer's RERA escrow account.",
    defaultProfile: "Bank withholds 3+ slab disbursements citing borrower CIBIL default or non-submission of KYC. ₹30,00,000+ stuck in bank pipeline.",
    statutoryTrap:
      "Cancelling the unit allotment unilaterally without serving statutory cure notice on the lending institution. Under the Tripartite Agreement, the lender holds a first equitable charge over the apartment. Unilateral cancellation without lender concurrence leads to Commercial Court stays or DRT proceedings against the promoter.",
    promoterRemedy:
      "Serve a dual-addressed 30-day statutory notice to both the defaulting allottee and the lending institution's retail recovery branch under Section 19(6) of RERA read with the Tripartite Agreement. Demand immediate disbursement of the certified slab milestone. If the lender confirms borrower default and refuses disbursement, execute Section 11(5) cancellation and remit the net refundable consideration (after forfeiting the 10% earnest money and accrued interest) directly to the lender's loan account to extinguish the bank's mortgage lien.",
    statutoryCitations: [
      "RERA Act 2016 s.19(6) & s.19(7) (Milestone Default & Interest)",
      "Transfer of Property Act 1882 s.58 (Equitable Mortgage Discharge)",
      "RERA Act 2016 s.11(5) (Agreement-Compliant Unit Cancellation)",
      "RERA Model Agreement for Sale (Tripartite Lender Refund Protocol)",
    ],
    actionChecklist: [
      "Examine Tripartite Agreement clauses governing loan cancellation and promoter refund obligations.",
      "Serve registered notice to the Bank's Branch Manager and Centralized Mortgage Hub demanding release of pending slab dues within 15 days.",
      "Give the allottee concurrent opportunity to cure the default directly through self-funding if the bank loan is cancelled.",
      "If uncured within 30 days, execute cancellation deed and transmit the net refund directly via RTGS to the borrower's loan account.",
      "Obtain formal No-Dues Certificate (NDC) and original allotment documents from the bank to free the unit for market resale.",
    ],
  },
  {
    id: "bulk-portfolio-recovery",
    badge: "Scenario 04 &bull; Enterprise Recovery Desk",
    title: "Bulk Portfolio Milestone Arrears across 50–500 Units",
    description:
      "A high-density residential township or commercial tower reaches superstructure completion. 15% to 30% of allottees (50 to 500+ purchasers) fail to pay the critical structural milestone demand, resulting in an accumulated working capital shortfall of ₹15 Cr to ₹100 Cr+ that jeopardizes RERA completion deadlines and vendor payments.",
    defaultProfile: "50 to 500+ defaulting units across multiple towers. Diverse stages of default: 30 days overdue to 180+ days overdue.",
    statutoryTrap:
      "Deploying standard CRM calling agents who offer ad-hoc verbal waivers, or engaging traditional law firms that take 3 to 6 months to draft individual notices. Disparate notice dates, inconsistent interest calculations, and lack of certified India Post delivery tracking destroy evidentiary weight before State RERA benches.",
    promoterRemedy:
      "Ingest the complete default ledger into LegalRecovery's B2B Institutional Real Estate Recovery Engine. Generate advocate-vetted, automated statutory Cure-cum-Interest Notices under Section 19(6) with individual SBI MCLR + 2% interest ledgers and tower-specific Architect Certificates. Dispatch simultaneously via Registered Speed Post RPAD, email, and WhatsApp with BSA Section 63 compliant digital delivery certificates.",
    statutoryCitations: [
      "RERA Act 2016 s.19(6), 19(7) & s.11(5) (Institutional Enforcement Rail)",
      "Bharatiya Sakshya Adhiniyam, 2023 s.63 (Electronic Service Admissibility)",
      "Commercial Courts Act 2015 s.2(1)(c)(vii) (Commercial Construction Dues)",
      "State RERA Regulations (Standardized Demand & Notice Protocol)",
    ],
    actionChecklist: [
      "Export ERP debtor aging report with slab milestone dates, principal overdue, and customer KYC details.",
      "Auto-calculate statutory interest per individual unit using State RERA verified interest algorithms.",
      "Batch-attach licensed Architect Form 1 certificates corresponding to each tower's verified construction stage.",
      "Dispatch multi-channel notices with real-time India Post tracking integration and digital read-receipt logging.",
      "Track cure rate: typically 65%–75% of allottees pay within the 30-day window; remainder escalated to Section 31 RERA complaints or Section 11(5) cancellation.",
    ],
  },
];

export default function ReraSection19ScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
          Promoter Decision Rail
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Select Allottee Default Failure Mode
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Explore tailored statutory strategies, RERA precedent traps, and advocate-vetted cure workflows across 4 critical developer collection challenges.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeTab;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                  isActive ? "text-red-400" : "text-[#DC2626]"
                }`}
              >
                {sc.badge.split("&bull;")[0].trim()}
              </span>
              <span className="text-xs font-bold leading-snug line-clamp-2">
                {sc.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-7 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#DC2626]">
              {current.badge}
            </span>
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
              {current.title}
            </h4>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            RERA Creditor Strategy
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          {current.description}
        </p>

        {/* Profile & Trap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-1">
              Typical Default Profile
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.defaultProfile}
            </p>
          </div>

          <div className="p-4 bg-red-50/80 rounded-xl border border-red-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Common CRM / Legal Trap
            </span>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed font-medium">
              {current.statutoryTrap}
            </p>
          </div>
        </div>

        {/* Promoter Remedy */}
        <div className="p-4 sm:p-5 bg-white rounded-xl border-l-4 border-[#DC2626] border-y border-r border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1.5">
            Vetted Promoter Remedy &amp; Statutory Playbook
          </span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {current.promoterRemedy}
          </p>
        </div>

        {/* Citations & Action Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-2">
              Statutory Hooks &amp; Case Citations
            </span>
            <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
              {current.statutoryCitations.map((cite, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#DC2626] font-bold">&bull;</span>
                  <span>{cite}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-2">
              Execution Checklist for In-House Legal
            </span>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {current.actionChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">&check;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
