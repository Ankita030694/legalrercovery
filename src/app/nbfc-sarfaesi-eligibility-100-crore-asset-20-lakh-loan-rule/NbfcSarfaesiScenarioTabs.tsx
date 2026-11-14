"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  sarfaesiEligible: boolean;
  title: string;
  statutoryRule: string;
  recommendedTrack: string;
  steps: string[];
  warning: string;
}

const NBFC_SCENARIOS: ScenarioItem[] = [
  {
    id: "base-layer-nbfc",
    tabLabel: "AUM < ₹100 Cr NBFC",
    badge: "Statutorily Barred from SARFAESI",
    sarfaesiEligible: false,
    title: "Base-Layer NBFC (Assets Below ₹100 Cr) Enforcing a ₹35 Lakh LAP Mortgage",
    statutoryRule:
      "Even though the ticket size exceeds ₹20 Lakh, the lender fails Gate 1 of MoF Notification S.O. 856(E) / S.O. 652(E) under SARFAESI s.2(1)(m)(iv) because its total asset size in the last audited balance sheet is under ₹100 Crore.",
    recommendedTrack:
      "Issue Recall Notice -> Invoke Institutional Arbitration (s.21) on Personal Debt Covenant + File s.9 Interim Attachment against Alienation -> Execute Award under s.36 / Order 21 CPC (or file Order 34 Suit if foreclosure of mortgaged title is essential).",
    steps: [
      "Audit the loan agreement for a Perkins Eastman-compliant neutral institutional arbitration clause and separate personal repayment covenant.",
      "Dispatch a 15-day Loan Recall cum Arbitration Invocation Notice via Email + WhatsApp + Speed Post RPAD with BSA 2023 s.63 hash log.",
      "Move an urgent Section 9 petition before the District/Commercial Court restraining the borrower from creating third-party rights over the mortgaged property.",
      "Secure an ex-parte or contested sole-arbitrator money award within 90–180 days (s.29B fast-track) and attach/auction the asset under s.36 read with Order 21 Rule 54/64 CPC.",
    ],
    warning:
      "Never issue a sham SARFAESI s.13(2) notice from an un-notified NBFC: borrowers will quash it in Civil Court/High Court for want of jurisdiction, wasting 6–12 months and triggering RBI Fair Practices scrutiny.",
  },
  {
    id: "sub-20l-lap",
    tabLabel: "₹5L–₹19L LAP Ticket",
    badge: "Fails Gate 2 (Sub-₹20L Debt)",
    sarfaesiEligible: false,
    title: "Notified NBFC (AUM >= ₹500 Cr) with a ₹14.5 Lakh MSME Loan Against Property",
    statutoryRule:
      "The NBFC satisfies Gate 1 (>= ₹100 Cr AUM), but fails Gate 2 under S.O. 856(E) because total dues (principal + accrued interest on NPA date) are below ₹20 Lakh. SARFAESI s.13(2) cannot be invoked.",
    recommendedTrack:
      "Parallel Tri-Track: (1) Criminal s.25 PSS Act / s.138 NI Act on bounced e-NACH/PDCs + (2) Fast-Track Arbitration (s.29B) on personal debt + s.9 attachment, OR Order 37 Summary Suit if no arbitration clause exists.",
    steps: [
      "Verify whether accrued interest + contractual charges push the NPA balance legitimately across ₹20.00 Lakh without compounding penal charges (prohibited by RBI Penal Charges Circular).",
      "If legitimately below ₹20 Lakh, immediately trigger Section 25 PSS Act (e-NACH bounce) or Section 138 NI Act notice within the strict 30-day statutory window from bank return memo.",
      "Simultaneously invoke institutional arbitration on the loan agreement's money-recovery covenant—avoiding Booz Allen non-arbitrability by claiming a money decree rather than direct mortgage foreclosure.",
      "Bundle 10–500 similar sub-₹20L LAP accounts into a CSV batch for uniform advocate recall notices before selective litigation.",
    ],
    warning:
      "Artificially inflating a ₹17L account to ₹20.5L using compounded penal interest violates RBI's Fair Lending Practice directions and invites immediate s.17 DRT set-aside.",
  },
  {
    id: "hfc-housing-loan",
    tabLabel: "HFC >= ₹1L Housing",
    badge: "HFC Lower Floor Applies",
    sarfaesiEligible: true,
    title: "NHB/RBI-Registered Housing Finance Company (HFC) Enforcing a ₹12 Lakh Home Loan",
    statutoryRule:
      "Unlike general NBFCs governed by the ₹20 Lakh floor, notified Housing Finance Companies (HFCs) under SARFAESI s.2(1)(m)(iv) and MoF Notification S.O. 2405(E) / subsequent RBI-NHB schedules retain the statutory ₹1 Lakh (s.31(h)) threshold.",
    recommendedTrack:
      "Verify NHB/RBI HFC Certificate of Registration & Central Government Notification -> Verify CERSAI s.26D registration -> Dispatch SARFAESI s.13(2) 60-day Demand Notice.",
    steps: [
      "Confirm the security interest is registered on CERSAI under Section 26D of SARFAESI (mandatory condition precedent before s.13 enforcement).",
      "Classify the account as NPA strictly per RBI Scale-Based / Master Direction norms (90+ DPD) before issuing the s.13(2) notice.",
      "Serve s.13(2) 60-day statutory demand notice; log and dispose of any borrower s.13(3A) representation with reasoned written order within 15 days.",
      "Proceed to s.13(4) symbolic/physical possession and s.14 CMM/DM assistance without needing DRT prior permission.",
    ],
    warning:
      "Do not confuse an NBFC-ICC lending against residential property (LAP) with a registered HFC: only registered HFCs enjoy the lower ₹1 Lakh SARFAESI floor; NBFC-ICC LAP remains bound by the ₹20 Lakh gate.",
  },
  {
    id: "arc-assignment",
    tabLabel: "ARC Assignment",
    badge: "Pool Monetization Option",
    sarfaesiEligible: false,
    title: "Assigning Sub-₹20 Lakh Secured LAP Portfolios to an Asset Reconstruction Company",
    statutoryRule:
      "Under SARFAESI s.5, an NBFC may assign financial assets to a registered ARC. However, assigning a sub-₹20 Lakh loan of a non-notified NBFC does NOT magically cure the s.31(h) / MoF notification bar if the underlying lender was never notified or the debt is below the statutory threshold.",
    recommendedTrack:
      "Pre-Assignment Legal Audit: Cure limitation via s.18 acknowledgment, attach s.25 PSS / s.138 NI complaints, or monetize via 15:85 / cash ARC structure after discounting Order 34 / Arbitration timelines.",
    steps: [
      "Segregate the stressed LAP pool into SARFAESI-eligible (>= ₹20L from notified NBFC) vs. Non-SARFAESI (< ₹20L or < ₹100 Cr AUM) tranches before ARC price discovery.",
      "For non-SARFAESI tranches, strengthen recovery leverage pre-sale by serving advocate Loan Recall Notices and initiating s.25 PSS / s.138 NI criminal proceedings.",
      "Check whether the borrower executed a Section 18 Limitation Act written acknowledgment or part-payment within 3 years of NPA.",
      "Compare net present value (NPV) of an ARC hair-cut (typically 35%–55% recovery on sub-₹20L LAP) against 9-month fast-track Arbitration + s.36 execution.",
    ],
    warning:
      "ARCs heavily discount sub-₹20L NBFC LAP pools because they face the exact same Order 34 CPC civil court timeline unless Arbitration/NI-138 pressure is already active.",
  },
];

export default function NbfcSarfaesiScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(NBFC_SCENARIOS[0].id);
  const current = NBFC_SCENARIOS.find((s) => s.id === activeTab) || NBFC_SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="NBFC LAP Default Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {NBFC_SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
              current.sarfaesiEligible
                ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                : "bg-red-50 border-red-200 text-[#DC2626]"
            }`}
          >
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            SARFAESI s.2(1)(m)(iv) Diagnostic
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900">{current.title}</h3>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Statutory Position
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">{current.statutoryRule}</p>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
            Recommended Creditor Enforcement Track
          </p>
          <p className="text-sm text-slate-100 leading-relaxed">{current.recommendedTrack}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
            Step-by-Step Institutional Execution
          </p>
          <ol className="space-y-2.5">
            {current.steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-800 leading-relaxed">
          <strong className="font-bold">Compliance Guardrail: </strong>
          {current.warning}
        </div>
      </div>
    </div>
  );
}
