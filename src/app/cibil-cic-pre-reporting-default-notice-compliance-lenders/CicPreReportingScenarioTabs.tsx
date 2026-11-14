"use client";

import React, { useState } from "react";

interface CicScenario {
  id: string;
  tabLabel: string;
  segment: string;
  title: string;
  failureMechanism: string;
  primaryLeverage: string;
  statutoryHooks: string;
  executionSteps: {
    step: string;
    detail: string;
  }[];
  recoveryOutcome: string;
}

const CIC_SCENARIOS: CicScenario[] = [
  {
    id: "pre-reporting-alert-omission",
    tabLabel: "Skipped Pre-Alert",
    segment: "Retail & Digital Personal Loans (Bucket X to 30+ DPD)",
    title: "NBFC Submits DPD=30/60 to CIBIL Without Prior SMS/Email Intimation",
    failureMechanism:
      "Under RBI's consolidated Credit Information Reporting norms, lenders must send a prior SMS or email alert before submitting default/overdue status to CICs (CIBIL, Experian, CRIF High Mark, Equifax). Silent batch uploads trigger immediate RBI Ombudsman complaints, forced bureau rectification, and ₹100/day penalty exposure.",
    primaryLeverage: "Mandatory Pre-Reporting Alert Embedded Inside BSA s.63 Advocate Notice",
    statutoryHooks:
      "RBI Master Direction on Credit Information Reporting (2025–2026), CICRA 2005 s.15 & s.21, & Bharatiya Sakshya Adhiniyam 2023 s.63 (electronic dispatch proof).",
    executionSteps: [
      {
        step: "Day 15–25 DPD: Automated Pre-Reporting SMS & Email Intimation",
        detail:
          "Dispatch a factual, non-threatening SMS and verified email stating the exact overdue EMI, grace cut-off date, and statutory intimation that non-cure will be reported to all four RBI-licensed CICs in the upcoming reporting cycle.",
      },
      {
        step: "Day 30–35 DPD: Tri-Channel Advocate Notice with CIC Disclosure",
        detail:
          "Where the borrower ignores soft alerts, serve an Advocate Legal Notice via Email, WhatsApp, and Speed Post RPAD citing the exact prior alert timestamps, overdue ledger, and factual credit-file impact.",
      },
      {
        step: "Day 45+ DPD: Audit-Safe Bureau Submission with BSA s.63 Log",
        detail:
          "Submit the DPD status to CIBIL/Experian/CRIF/Equifax only after archiving the timestamped BSA s.63 pre-alert certificate—making any subsequent Ombudsman claim of 'no prior notice' factually untenable.",
      },
    ],
    recoveryOutcome: "Converts Regulatory Mandate into a High-Cure Payment Trigger with Zero Ombudsman Exposure.",
  },
  {
    id: "disputed-enach-wrong-reporting",
    tabLabel: "Disputed Bounce / Fee",
    segment: "Contested Foreclosure, Moratorium & e-NACH Tech Failures",
    title: "Borrower Raises Written Dispute While Bureau Feed Remains 'Overdue'",
    failureMechanism:
      "A borrower contests an EMI bounce caused by bank-end NACH gateway downtime or disputed penal charges, yet the Credit Institution's automated ERP continues reporting 60/90 DPD to CICs without pausing or resolving within the 21-day CI / 30-day total TAT.",
    primaryLeverage: "21-Day CI Resolution Gate + Nodal Officer Dispute Suppression",
    statutoryHooks:
      "RBI Compensation Framework for Delayed Updation/Rectification of Credit Information (₹100/day after 30 calendar days) & CICRA 2005 s.21(3).",
    executionSteps: [
      {
        step: "Day 0 of Dispute: Tag Account & Trigger 21-Day CI Audit",
        detail:
          "Upon receipt of a borrower dispute via CIC portal or nodal email, immediately flag the loan ID in the LMS so automated DPD feeds do not overwrite disputed fields while the Credit Institution verifies the bank-statement UTR/NACH log.",
      },
      {
        step: "Day 1–15: Issue Reasoned Reconciliation or Reject Baseless Claims",
        detail:
          "If the bounce was genuine (insufficient funds R01), issue an Advocate Reply attaching the NPCI return memo and BSA s.63 ledger. If an accounting error exists, rectify within 21 days and push the updated XML/TUDF file to all 4 CICs.",
      },
      {
        step: "Day 21: Lock Out ₹100/Day Penalty via Timely CIC Sync",
        detail:
          "Confirm CIC acknowledgment before Day 21 so the bureau completes its 9-day window inside the 30-day statutory ceiling—eliminating ₹100/day compensation liability.",
      },
    ],
    recoveryOutcome: "100% Insulation from ₹100/Day Compensation Orders & Preserves Litigation Credibility.",
  },
  {
    id: "sme-cmr-rank-leverage",
    tabLabel: "SME CMR Rank",
    segment: "Unsecured SME Loans, LAP & Working Capital (₹5L–₹1 Cr)",
    title: "MSME Promoter Ignores Retail Calls Until Commercial CMR Impact Is Explained",
    failureMechanism:
      "Proprietors, partnerships, and Pvt Ltd SMEs often prioritize vendor cashflows over NBFC EMIs because they underestimate how a single 60-DPD commercial bureau entry degrades their CIBIL MSME Rank (CMR-1 to CMR-10), freezing bank CC/OD renewals and TReDS limits.",
    primaryLeverage: "Factual Commercial Bureau (CMR) & Banking Line Freeze Disclosure",
    statutoryHooks:
      "CICRA 2005 s.15/s.17, RBI Master Direction on Credit Information Reporting (Commercial Segment), & Commercial Courts / s.25 PSS Act.",
    executionSteps: [
      {
        step: "Step 1: Quantify Commercial Credit Footprint in the Recall Notice",
        detail:
          "In the Day-30/45 Advocate Notice to the borrowing entity and personal guarantors, state factually that commercial overdue reporting updates the entity's Commercial Bureau Rank (CMR) and reflects across partner banks' credit-monitoring feeds.",
      },
      {
        step: "Step 2: Serve Co-Obligors & Personal Guarantors Separately",
        detail:
          "Notify directors and guarantors of their independent guarantor reporting exposure under the executed Deed of Guarantee, preventing promoters from shielding personal creditworthiness behind a Pvt Ltd shell.",
      },
      {
        step: "Step 3: Pair CMR Disclosure with s.25 PSS Act / Order 37 Window",
        detail:
          "Anchor the 15-day cure deadline to both statutory e-NACH criminal prosecution and imminent fortnightly commercial CIC reporting—compelling CFO/promoter settlement before bank renewal cycles.",
      },
    ],
    recoveryOutcome: "Unlocks Rapid SME & Promoter Settlements Before Bank CC/OD Review Dates.",
  },
  {
    id: "co-lending-fldg-duplicate-reporting",
    tabLabel: "Co-Lending / DLG Sync",
    segment: "80:20 Bank–NBFC Co-Lending & LSP/FLDG Portfolios",
    title: "Both Partner Bank and Servicing NBFC Report the Same Loan to CIBIL",
    failureMechanism:
      "In CLM-1/CLM-2 co-lending or 5% DLG structures, uncoordinated LMS feeds cause both the originating NBFC and the partner bank to report the same borrower account—doubling apparent exposure and triggering mass ₹100/day Ombudsman disputes.",
    primaryLeverage: "Single-Source Nodal Reporting Protocol + DLG Ledger Reconciliation",
    statutoryHooks:
      "RBI Co-Lending Guidelines, RBI Default Loss Guarantee (DLG) Directions, & CICRA 2005 Accuracy Mandate.",
    executionSteps: [
      {
        step: "Step 1: Designate Single Reporting Entity per Co-Lending Agreement",
        detail:
          "Audit the Master Co-Lending Agreement (CLM-1 vs CLM-2) so only the designated Servicing Entity (or proportionate share tag per RBI norms) pushes DPD updates to CIBIL, Experian, CRIF, and Equifax.",
      },
      {
        step: "Step 2: Reflect 5% DLG Invocation Accurately Without Extinguishing Borrower Debt",
        detail:
          "When DLG/FLDG covers a 90-DPD tranche internally between NBFC and Bank, ensure the borrower's bureau status accurately reflects the underlying unpaid loan obligation rather than marking it 'Settled' prematurely.",
      },
      {
        step: "Step 3: Issue Joint-Authority Advocate Notice Curing Locus Standi",
        detail:
          "Dispatch pre-reporting and recall notices under explicit Servicing Power of Attorney so the borrower cannot challenge either the bureau entry or the recovery demand for lack of privity.",
      },
    ],
    recoveryOutcome: "Eliminates Duplicate Trade-Line Disputes Across Co-Lending Books.",
  },
];

export default function CicPreReportingScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(CIC_SCENARIOS[0].id);
  const current = CIC_SCENARIOS.find((s) => s.id === activeTab) || CIC_SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Tab Selector */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="CIC Reporting Failure Modes">
        {CIC_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <span className="inline-block px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white mb-2">
              {current.segment}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 self-start sm:self-center">
            {current.recoveryOutcome}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1">
              Compliance &amp; Recovery Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.failureMechanism}
            </p>
          </div>

          <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-2">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-0.5">
                Primary Institutional Leverage
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                {current.primaryLeverage}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-0.5">
                Governing Statutory Hooks
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">{current.statutoryHooks}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            Nodal Officer &amp; Collections Execution Steps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.executionSteps.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 p-4 shadow-xs space-y-1.5"
              >
                <p className="text-xs font-extrabold text-[#DC2626]">{item.step}</p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
