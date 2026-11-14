"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  label: string;
  badge: string;
  title: string;
  summary: string;
  noticeSender: string;
  statutoryBasis: string;
  borrowerDefense: string;
  remedyProtocol: string[];
  outcomeMetric: string;
}

const SCENARIO_TABS: ScenarioTab[] = [
  {
    id: "clm-80-20",
    label: "80:20 CLM-1 / CLM-2",
    badge: "Locus Standi & POA",
    title: "80:20 Bank–NBFC Co-Lending Default: Who Signs the Legal Notice?",
    summary:
      "Under RBI's Co-Lending Model (CLM-1 joint origination or CLM-2 assignment of 80% share to the Partner Bank), borrowers' counsel routinely move Order VII Rule 11 CPC or Section 25 dismissal pleas arguing the NBFC/LSP lacks privity for the Bank's 80% exposure.",
    noticeSender:
      "Originating NBFC/Servicer as 'Constituted Attorney & Authorized Servicing Agent' for the 80% Bank Share + Own 20% Share (or Joint Notice).",
    statutoryBasis:
      "RBI Master Circular on Co-Lending Model (CLM), Indian Contract Act 1872 ss. 182–202 (Agency & Power of Attorney), and Powers-of-Attorney Act 1882 s. 2.",
    borrowerDefense:
      "\"The loan recall notice was issued solely by the NBFC/LSP, whereas 80% of the principal stands assigned to the Partner Bank; therefore, the notice is void for want of locus standi.\"",
    remedyProtocol: [
      "Attach a specific Board-approved Servicing & Litigation Power of Attorney (POA) Schedule inside the Master Co-Lending Agreement (MCLA) authorizing the NBFC/Servicer to sue and issue recall notices for 100% of the joint exposure.",
      "Name both the Partner Bank (80% Co-Lender) and the Originating NBFC (20% Co-Lender & Authorized Servicer) explicitly in the statutory notice header and prayer.",
      "Disclose the exact 80:20 principal-and-interest split ledger certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) so the borrower cannot allege double-claiming.",
    ],
    outcomeMetric: "Eliminates Order VII Rule 11 / privity challenges at the threshold",
  },
  {
    id: "dlg-5-percent",
    label: "Post-5% DLG Payout",
    badge: "Subrogation Trap",
    title: "After 5% DLG (FLDG) Invocation: Does Borrower Debt Extinguish?",
    summary:
      "Under the RBI Guidelines on Default Loss Guarantee (DLG) in Digital Lending (2023), the DLG provider (LSP/NBFC) must honor the 5% capped guarantee within 120 days of overdue. Defaulters falsely argue that once the Bank receives DLG money, the loan is 'settled'.",
    noticeSender:
      "Regulated Entity (Bank/NBFC) for the entire unpaid borrower debt, OR DLG Provider only if a formal Deed of Assignment / Subrogation is executed post-payout.",
    statutoryBasis:
      "RBI DLG Guidelines (5% cap, 120-day invocation rule), Indian Contract Act 1872 s. 140 (Rights of Surety on Payment) & s. 141, and Transfer of Property Act s. 130 (Assignment of Actionable Claim).",
    borrowerDefense:
      "\"Since the Fintech/LSP already paid the 5% FLDG pool to the Bank, the Bank has suffered no loss and the borrower's obligation stands discharged.\"",
    remedyProtocol: [
      "Insert an explicit 'No Extinguishment of Borrower Liability' clause in the Sanction Letter and Key Fact Statement (KFS): DLG is an inter-se credit enhancement between RE and DLG Provider, never a third-party discharge under Contract Act s. 41.",
      "Treat DLG invocation as an internal risk-mitigation accounting entry until actual borrower recovery arrives; credit any subsequent borrower recovery back to the DLG waterfall.",
      "If the DLG Provider recovers directly post-invocation, execute a formal Subrogation/Assignment Addendum under s. 130 TPA + s. 140 Contract Act before filing civil/arbitral claims in its own name.",
    ],
    outcomeMetric: "Preserves 100% claim quantum + post-DLG waterfall recovery",
  },
  {
    id: "sec25-nach",
    label: "s.25 e-NACH Payee",
    badge: "Criminal Dishonour",
    title: "Section 25 PSS Act & Section 138 NI Act: Escrow vs. Lender Payee Mismatch",
    summary:
      "Criminal complaints under Section 25 of the Payment and Settlement Systems Act, 2007 (e-NACH/UPI AutoPay bounce) require strict statutory compliance: the complainant must be the 'Payee' named in the mandate, and the 30-day notice must match the return memo.",
    noticeSender:
      "The exact Sponsor Bank / Destination Account Holder named as Payee in the NPCI e-NACH Mandate (typically the Co-Lending Escrow Trustee or Servicing NBFC).",
    statutoryBasis:
      "Payment and Settlement Systems Act, 2007 s. 25(1)–(5) read with Negotiable Instruments Act, 1881 ss. 138 & 142 (30-day demand notice, 15-day cure window, 30-day filing).",
    borrowerDefense:
      "\"The e-NACH mandate was registered in favour of the NBFC/Escrow Account, but the criminal complaint was filed by the Partner Bank (or vice versa) without a valid POA.\"",
    remedyProtocol: [
      "Align the NPCI e-NACH Utility Code and Destination Escrow Account with the Servicing Agreement so the complainant entity matches the Payee on the NPCI Return Memo.",
      "Where an authorized officer signs the s.25 complaint on behalf of the Escrow/Co-Lender entity, file the notarized Board Resolution + POA at the pre-summoning stage per Supreme Court precedent (A.C. Narayanan v. State of Maharashtra).",
      "Dispatch the mandatory 30-day statutory demand notice across Email, WhatsApp, and Speed Post RPAD with BSA s.63 electronic delivery hashes.",
    ],
    outcomeMetric: "Protects s.25 criminal maintainability from technical quashing",
  },
  {
    id: "sarfaesi-odr",
    label: "SARFAESI & ODR",
    badge: "Secured vs Unsecured",
    title: "SARFAESI s.13(2) Thresholds vs. Fast-Track ODR Arbitration in Co-Lending",
    summary:
      "In secured 80:20 co-lending (LAP, MSME, CV loans), a mid-size NBFC below ₹100 Cr asset size cannot invoke SARFAESI independently—even though its Partner Bank qualifies. Conversely, unsecured digital loans require fast-track ODR.",
    noticeSender:
      "Partner Bank (for SARFAESI s.13(2) 60-day Demand Notice on 80% or 100% joint security) OR Independent ODR Institution (for s.21/s.29B Arbitration).",
    statutoryBasis:
      "SARFAESI Act 2002 ss. 2(1)(m), 13(2) & 13(9) (60% value consent rule for joint lenders); Arbitration & Conciliation Act 1996 ss. 12(5), 21 & 29B (6-month fast-track).",
    borrowerDefense:
      "\"The originating NBFC has assets under ₹100 Crore (or the loan is below ₹20 Lakh), so the SARFAESI s.13(2) notice issued by the NBFC is without jurisdiction.\"",
    remedyProtocol: [
      "Route SARFAESI s.13(2) notices through the Partner Bank (which holds 80% share and faces no NBFC ₹100 Cr / ₹20 Lakh notification bar) with formal 60%+ joint lender consent recorded under s. 13(9).",
      "Ensure CERSAI security interest registration reflects the joint 80:20 charge (or Pari-Passu charge) before issuing s.13(2) or s.13(4) possession notices.",
      "For unsecured co-lending tickets (₹25,000–₹15 Lakh), bypass DRT/Civil Suits entirely by invoking neutral institutional ODR arbitration under s. 29B compliant with Perkins Eastman.",
    ],
    outcomeMetric: "Unlocks 60-day SARFAESI enforcement & 90–180 day ODR awards",
  },
];

export default function CoLendingScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIO_TABS[0].id);
  const activeTab = SCENARIO_TABS.find((t) => t.id === activeTabId) || SCENARIO_TABS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Co-Lending and DLG Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIO_TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
              {activeTab.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              {activeTab.title}
            </h3>
          </div>
          <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            {activeTab.outcomeMetric}
          </span>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{activeTab.summary}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Legally Competent Notice Sender
            </p>
            <p className="text-sm font-semibold text-slate-900 leading-relaxed">
              {activeTab.noticeSender}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Governing Statutory &amp; RBI Authority
            </p>
            <p className="text-sm font-medium text-slate-700 leading-relaxed">
              {activeTab.statutoryBasis}
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1">
            Common Borrower Defense Plea
          </p>
          <p className="text-sm italic text-amber-950 leading-relaxed">{activeTab.borrowerDefense}</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            Creditor-Safe Execution Protocol
          </p>
          <ul className="space-y-2.5">
            {activeTab.remedyProtocol.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
