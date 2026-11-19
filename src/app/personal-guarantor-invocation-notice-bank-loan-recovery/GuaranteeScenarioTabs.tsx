"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  statutoryRule: string;
  bottleneck: string;
  creditorDefense: string;
  steps: {
    step: string;
    detail: string;
  }[];
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "cc-recall-trap",
    tabLabel: "Defective 'CC' Recall",
    title: "Branch Only Sent a Loan Recall Letter 'CC-ed' to the Promoter Guarantor",
    statutoryRule: "Contract Act s.128 & Channaveerappa Beleri (2006)",
    bottleneck:
      "A branch manager addresses the loan recall strictly to the corporate borrower and places the promoter guarantor under 'Copy to (CC): For information and necessary action.' When SAMB later files a Section 95 IBC petition or DRT OA against the guarantor, defense counsel moves for summary dismissal arguing that the 'on-demand' deed was never formally invoked and no cause of action or default date ever crystallized against the surety.",
    creditorDefense:
      "Under Syndicate Bank v. Channaveerappa Beleri (2006) 11 SCC 506, where a deed requires payment 'on demand', limitation and default against the guarantor commence only upon an unequivocal demand addressed directly to the guarantor. Because the defective CC letter did not trigger the limitation clock, the bank can immediately cure the gap by issuing a standalone, formal Guarantee Invocation Notice demanding payment within 7 to 15 days, followed by Rule 7(1) Form B.",
    steps: [
      {
        step: "Audit Deed Invocation Clause",
        detail:
          "Verify whether the Deed of Guarantee contains 'on demand' language, specifies designated service addresses, and authorizes electronic or RPAD delivery.",
      },
      {
        step: "Serve Formal Invocation Notice",
        detail:
          "Address the promoter guarantor directly as primary recipient, invoke the exact Deed date and clause number, quantify principal, interest, and penal charges separately, and fix a 7-day demand window.",
      },
      {
        step: "Serve Form B After Expiry",
        detail:
          "Only after the invocation demand expires unpaid does the guarantor's 'date of default' crystallize—enabling an airtight 14-day IBC Rule 7(1) Form B notice.",
      },
    ],
  },
  {
    id: "revocation-trap",
    tabLabel: "Continuing Revocation",
    title: "Guarantor Issues a Section 130 Revocation Letter After Account Turns SMA-2",
    statutoryRule: "Indian Contract Act s.129 & s.130",
    bottleneck:
      "Promoter-directors or exiting corporate guarantors abruptly mail a legal notice purporting to 'revoke' their continuing guarantee under Section 130 just before NPA classification or during CC/OD limit renewal, claiming zero liability for the existing ₹8 Crore working capital balance.",
    creditorDefense:
      "Section 130 of the Indian Contract Act strictly limits revocation of a continuing guarantee to FUTURE transactions only. It can never wipe out liability for disbursements, LC devolvements, or bank guarantees already crystallized prior to the bank's receipt of revocation notice. However, the bank must immediately rule off the Cash Credit account (Clayton's Rule protection) so subsequent repayments do not inadvertently extinguish old secured advances while new unguaranteed debits accrue.",
    steps: [
      {
        step: "Rule Off CC/OD Ledger Immediately",
        detail:
          "Freeze fresh drawings in the existing Cash Credit account on the exact date the s.130 notice is received, preventing post-revocation debits from eroding guarantor coverage.",
      },
      {
        step: "Issue Counter-Reply & Invoke",
        detail:
          "Serve an advocate reply recording that liability for all pre-revocation outstanding dues, accrued interest, and live non-fund limits remains intact under s.129–130, and invoke the deed immediately.",
      },
      {
        step: "Verify Deed Waiver Clause",
        detail:
          "Check whether the continuing guarantee requires 30–90 days prior written notice or full clearance before revocation takes effect—and plead the contractual embargo in DRT/NCLT.",
      },
    ],
  },
  {
    id: "cirp-haircut",
    tabLabel: "Post-CIRP Haircut",
    title: "Corporate Borrower CIRP Resolution Plan Approved with 70% Bank Haircut",
    statutoryRule: "IBC s.31, s.60(2), s.95 & Lalit Kumar Jain (2021)",
    bottleneck:
      "After an NCLT-approved CIRP Resolution Plan pays financial creditors only 30% of admitted claims, personal guarantors oppose Section 95 Form B notices claiming the debt stands extinguished under Section 134 of the Indian Contract Act because the principal borrower was discharged.",
    creditorDefense:
      "In Lalit Kumar Jain v. Union of India (2021) 9 SCC 321, the Supreme Court settled the law decisively: release or discharge of a corporate debtor through an involuntary insolvency resolution plan under Section 31 IBC does NOT absolve personal or corporate guarantors. Financial creditors remain legally entitled to recover the residual 70% unrecovered haircut directly from the personal guarantor's private real estate and equity estate under Part III IBC.",
    steps: [
      {
        step: "Draft Preservation Clause in Plan",
        detail:
          "Ensure the CoC-approved Resolution Plan explicitly excludes personal and third-party corporate guarantees from assignment or extinguishment.",
      },
      {
        step: "Recalculate Residual Debt Ledger",
        detail:
          "Deduct actual CIRP distribution received from admitted financial debt, annex the certified residual claim schedule, and serve a fresh Guarantee Invocation Notice if not previously invoked.",
      },
      {
        step: "File Form B & s.95 Form C at NCLT",
        detail:
          "Dispatch the 14-day Rule 7(1) Form B Demand Notice and file Form C before the jurisdictional NCLT bench under Section 60(2), triggering an instant Section 96 interim moratorium over personal assets.",
      },
    ],
  },
  {
    id: "corporate-guarantor",
    tabLabel: "Corporate Guarantor",
    title: "Simultaneous Action Against Group Holding Company Corporate Guarantor",
    statutoryRule: "Contract Act s.128, IBC s.7 & Laxmi Pat Surana (2021)",
    bottleneck:
      "A promoter borrows through a thinly capitalized SPV while routing land banks and operating cash flows into a parent holding company that executed a Corporate Guarantee. The holding company argues the bank must first auction SPV assets under SARFAESI before touching the guarantor.",
    creditorDefense:
      "Section 128 Contract Act renders the guarantor's liability co-extensive and immediate. Both SBI v. Indexport Registered (1992) and Laxmi Pat Surana v. Union Bank of India (2021) 8 SCC 481 affirm that a bank need not exhaust remedies against the principal borrower before initiating Section 7 IBC CIRP, DRT Section 19 OA, or SARFAESI enforcement against a Corporate Guarantor—even if the principal borrower is not a corporate person.",
    steps: [
      {
        step: "Audit MCA Section 185/186 Compliance",
        detail:
          "Retrieve Board Resolution, Special Resolution (MGT-14), and MCA CHG-1 filings confirming the corporate guarantor validly authorized the guarantee.",
      },
      {
        step: "Serve Explicit Corporate Invocation",
        detail:
          "Serve a formal Guarantee Invocation Notice on the Corporate Guarantor's registered office (per MCA master data) and official ROC email address.",
      },
      {
        step: "Trigger Parallel Section 7 / DRT OA",
        detail:
          "Upon default exceeding ₹1 Crore, file a Section 7 IBC application (Form 1) directly against the Corporate Guarantor—or implead both borrower and guarantor jointly in an e-DRT Section 19 OA.",
      },
    ],
  },
];

export default function GuaranteeScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const active = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          Interactive SAMB Defense-Preemption Matrix
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
          Select a Guarantor Default Failure Mode to View the Statutory Counter-Playbook
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Engineered for Stressed Assets Management Branches (SAMB), Zonal Legal Heads, and IBC Counsel handling corporate &amp; personal guarantee defaults.
        </p>
      </div>

      {/* Tab Strip */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3" role="tablist">
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Content */}
      <div className="space-y-5" role="tabpanel">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <h4 className="text-base sm:text-lg font-bold text-slate-900">{active.title}</h4>
          <span className="inline-block px-2.5 py-1 bg-red-50 text-[#DC2626] rounded-md text-[11px] font-bold border border-red-200 self-start sm:self-auto shrink-0">
            {active.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Guarantor Defense &amp; Litigation Trap
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{active.bottleneck}</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor-Side Statutory Counter-Strategy
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{active.creditorDefense}</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            3-Step SAMB Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {active.steps.map((st, idx) => (
              <div
                key={st.step}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
