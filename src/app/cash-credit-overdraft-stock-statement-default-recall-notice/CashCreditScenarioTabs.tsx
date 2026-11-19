"use client";

import React, { useState } from "react";

interface CashCreditScenario {
  id: string;
  badge: string;
  shortLabel: string;
  title: string;
  triggerPattern: string;
  creditRisk: string;
  statutoryRemedy: string;
  actionChecklist: string[];
  legalSOP: string;
  targetOutcome: string;
}

const CC_OD_SCENARIOS: CashCreditScenario[] = [
  {
    id: "missing-stock-statement-dp",
    badge: "90–180 Day Stock Default",
    shortLabel: "Stock Statement Default",
    title: "Borrower Stops Filing Monthly Stock & Book-Debt Statements (Drawing Power Zeroed)",
    triggerPattern:
      "SME borrower stops submitting monthly Stock & Receivables Statements past the 10th of the succeeding month, or submits stale/unverified figures lacking CA certification for >90 days while keeping the CC account drawn near its sanctioned ceiling.",
    creditRisk:
      "Under RBI IRACP Master Circular norms, Drawing Power (DP) calculated from a stock statement older than 3 months (90 days) renders the account irregular; if the irregularity persists for another 90 days (total 180 days from the last valid stock statement date), the CC account automatically downgrades to NPA even if monthly interest is still being serviced.",
    statutoryRemedy:
      "Sanction Letter Covenant Breach + RBI IRACP Para 2.2.2 ('Out of Order' via DP shortfall) + Penal Charges for non-submission (non-capitalized per RBI Aug 2023 circular) + Pre-NPA DP Reduction & Mandatory Stock Audit Notice.",
    actionChecklist: [
      "Issue 7-day Cure-cum-DP Reduction Notice warning that unsubmitted stock statements force DP to ₹0 in CBS",
      "Depute bank-empanelled Chartered Accountant / Stock Auditor for unannounced physical godown verification",
      "Cross-verify GST GSTR-1 outward sales and E-Way Bill dispatch volume against the borrower's last declared inventory",
      "Place debit-freeze ('Credit-Only' / 'No-Further-Drawal' flag) in CBS once DP shortfall exceeds 15% of outstanding",
    ],
    legalSOP:
      "Do not wait for Day 180 to escalate. At Day 45 of missing stock statements, serve a formal Advocate-backed Notice of Covenant Breach demanding certified stock & aged-debtor schedules within 7 days, failing which DP is reduced to zero and the entire excess over DP becomes immediately payable.",
    targetOutcome: "Forces fresh CA-certified stock disclosure or triggers timely pre-stripping freeze.",
  },
  {
    id: "non-consortium-routing",
    badge: "Sales Diversion (EWS)",
    shortLabel: "Current Account Diversion",
    title: "Sales Proceeds Routed Through Unauthorised Non-Consortium Current Accounts",
    triggerPattern:
      "GSTR-1 returns show ₹4.2 Cr quarterly turnover, yet credit summations in the bank's Cash Credit account drop below ₹35 Lakh—confirming the borrower is collecting buyer RTGS/NEFT payments in a secret current account at a third-party bank.",
    creditRisk:
      "Cash diversion starves the CC account of revolving credits, triggers RBI's 'credits not enough to cover interest debited over 90 days' Out-of-Order NPA rule, and allows promoters to drain cash before SARFAESI s.13(2) is even drafted.",
    statutoryRemedy:
      "RBI Current Account Discipline Circular (exposure-linked bar on third-party current accounts) + Hypothecation Deed Exclusive Routing Covenant + Immediate Facility Recall cum Guarantee Invocation + DRT Section 19(12) Interim Injunction.",
    actionChecklist: [
      "Pull GSTR-1 / GSTR-3B turnover comparison against CBS 90-day credit summations to quantify routing leakage",
      "Serve cease-and-desist intimation on the third-party bank citing RBI Current Account Discipline guidelines",
      "Issue Immediate CC Recall Notice revoking drawing limits for wilful breach of sole-banking / consortium routing",
      "Move DRT (if dues >= ₹20 Lakh) under s.19(12)/(13A) for ex-parte attachment of the secret current account",
    ],
    legalSOP:
      "Combine CBS credit-summation shortfall logs with GST sales data in an immediate Recall-cum-Guarantee Invocation Notice, while simultaneously putting the non-consortium bank on written notice of your prior CERSAI-registered hypothecation charge over all receivables.",
    targetOutcome: "Blocks external cash leakage and locks third-party current account balances via DRT/Commercial Court.",
  },
  {
    id: "vanished-hypothecated-stock",
    badge: "BNS s.316/s.318 & RFA",
    shortLabel: "Vanished Hypothecated Stock",
    title: "Godown Found Empty or Stock Siphoned Prior to SARFAESI Possession",
    triggerPattern:
      "Unannounced physical stock audit reveals an empty or locked factory shed, obsolete scrap stacked to mimic finished goods, or inventory valued at ₹12 Lakh against ₹2.10 Crore declared in the borrower's previous month's stock statement.",
    creditRisk:
      "Primary working-capital security has been illegally liquidated without depositing sale proceeds into the CC account. Relying solely on civil recovery lets promoters strip collateral security and personal assets while litigation drags.",
    statutoryRemedy:
      "Bharatiya Nyaya Sanhita (BNS), 2023 Section 316 (Criminal Breach of Trust over hypothecated goods held in trust) & Section 318 (Cheating via fabricated stock/CA statements) + RBI Master Directions on Fraud Risk Management (Red-Flagging / Forensic Audit with Rajesh Agarwal natural justice compliance).",
    actionChecklist: [
      "Prepare GPS-tagged, timestamped Stock Audit Panchnama signed by empanelled auditor and two witnesses",
      "Preserve last 6 signed stock statements, DP calculation sheets, and BSA 2023 s.63 electronic email logs",
      "Issue Show-Cause Notice enclosing Forensic/Stock Audit Report (mandatory audi alteram partem per SBI v. Rajesh Agarwal)",
      "File EOW / Police Complaint under BNS s.316 & s.318 alongside SARFAESI s.13(2) on collateral immovables",
    ],
    legalSOP:
      "Document the exact hypothecation trust clause from the Deed of Hypothecation, attach the comparative stock-audit deficit schedule, and issue a composite Loan Recall + Show-Cause Notice before finalizing RFA/Fraud classification and filing criminal EOW proceedings.",
    targetOutcome: "Creates decisive criminal & regulatory deterrence, triggering immediate promoter settlement or collateral surrender.",
  },
  {
    id: "book-debt-garnishee",
    badge: "SARFAESI s.13(4)(d)",
    shortLabel: "Book-Debt Garnishee",
    title: "Issuing Statutory Book-Debt Garnishee Notices Directly to the Borrower's Trade Debtors",
    triggerPattern:
      "SME borrower's godown inventory has depleted, but the latest aged-receivables schedule and GST e-invoices confirm ₹85 Lakh in undisputed trade receivables payable within 30–60 days by blue-chip OEMs, PSUs, or Tier-1 corporate buyers.",
    creditRisk:
      "If the bank delays notifying the borrower's trade debtors, those corporate buyers will disburse payments directly into the borrower's diverted accounts—permanently extinguishing the bank's hypothecated book-debt security.",
    statutoryRemedy:
      "SARFAESI Act Section 13(4)(d) (statutory demand directing any person who owes money to the borrower to pay the secured creditor directly) + Deed of Hypothecation Irrevocable Power of Attorney over Book Debts + CERSAI Charge Registration.",
    actionChecklist: [
      "Extract top 10–25 trade debtors (with GSTIN, invoice numbers, and due dates) from borrower's book-debt statement",
      "Verify active CERSAI registration covering 'Hypothecation of Book Debts & Receivables' under SARFAESI s.26D",
      "Serve SARFAESI s.13(4)(d) Direct Payment Notice (post-s.13(2) expiry) or Deed-of-Assignment Intimation to each buyer",
      "Cite statutory discharge protection: payment made to the secured bank legally discharges the buyer's debt to the borrower",
    ],
    legalSOP:
      "At the recall stage, put major corporate buyers on immediate notice of the bank's CERSAI-registered hypothecation lien and irrevocable PoA; upon expiry of the 60-day s.13(2) window, serve statutory Section 13(4)(d) garnishee notices compelling direct RTGS remittance into the bank's NPA collection account.",
    targetOutcome: "Intercepts cash at the source from solvent Tier-1 buyers without waiting for borrower cooperation.",
  },
];

export default function CashCreditScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(CC_OD_SCENARIOS[0].id);
  const activeTab =
    CC_OD_SCENARIOS.find((tab) => tab.id === activeTabId) || CC_OD_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Bar */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mb-6">
        {CC_OD_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-700 hover:bg-white hover:text-slate-900"
              }`}
            >
              {tab.shortLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {activeTab.badge}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Outcome: {activeTab.targetOutcome}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
          {activeTab.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Operational Trigger Pattern
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeTab.triggerPattern}
            </p>
          </div>
          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Credit &amp; NPA Risk Exposure
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {activeTab.creditRisk}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 mb-1">
            Controlling Statutory Hook
          </p>
          <p className="text-xs sm:text-sm leading-relaxed">{activeTab.statutoryRemedy}</p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">
            Credit Monitoring &amp; Legal Action Checklist
          </p>
          <ul className="space-y-2">
            {activeTab.actionChecklist.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
            Bank Legal Counsel Execution SOP
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
            {activeTab.legalSOP}
          </p>
        </div>
      </div>
    </div>
  );
}
