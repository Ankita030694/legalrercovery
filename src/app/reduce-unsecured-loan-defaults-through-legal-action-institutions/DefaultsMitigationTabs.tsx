"use client";

import React, { useState } from "react";
import Link from "next/link";

interface StrategyTab {
  id: string;
  tabLabel: string;
  title: string;
  challenge: string;
  legalMechanism: string;
  playbookSteps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const STRATEGIES: StrategyTab[] = [
  {
    id: "dpd-31-60",
    tabLabel: "DPD 31-60 Early Delinquency",
    title: "Intercepting SMA-1 Borrowers Before Habitual Default Crystallizes",
    challenge:
      "Unsecured borrowers who cross 30 days past due (DPD) often deprioritize unsecured personal loans or digital credit lines in favor of secured mortgages or business loans. When lending institutions rely solely on automated SMS reminders and generic tele-calling, borrowers perceive low enforcement risk, pushing delinquency into SMA-2 (61-90 DPD) and irreversible NPA classification.",
    legalMechanism:
      "Serving a formal Bar Council registered advocate demand notice at the 31-day DPD mark drastically alters borrower psychology. Citing Section 73 & 74 of the Indian Contract Act, 1872 and explicit CICRA 2005 credit bureau tagging consequences, this pre-litigation step establishes verifiable priority over other obligations, recovering 25% to 35% of overdue amounts before 60 DPD.",
    playbookSteps: [
      {
        step: "Automated Delinquency Webhook Trigger",
        description:
          "Integrate loan management systems (LMS) to flag accounts reaching 31 DPD with consecutive mandate failures, instantly compiling loan ledger extracts and communication logs.",
      },
      {
        step: "Statutory Advocate Legal Demand Notice Dispatch",
        description:
          "Issue a high-impact advocate legal notice via speed post and Section 63 BSA electronic channels, giving a 15-day cure window while enumerating interest and legal escalation liabilities.",
      },
      {
        step: "Structured Restructuring or Accelerated Settlement",
        description:
          "Provide a dedicated legal recovery desk to capture borrower response, execute legally binding restructuring terms, or secure lump-sum dues settlement before NPA status.",
      },
    ],
    statutoryRule: "Sections 73 & 74 Indian Contract Act, 1872 • CICRA 2005 Bureau Reporting Mandate",
  },
  {
    id: "nach-mandate-bounce",
    tabLabel: "e-NACH Mandate Dishonour",
    title: "Criminal & Summary Remedies Under Section 25 PSS Act & 138 NI Act",
    challenge:
      "Digital lending NBFCs and fintech lenders rely heavily on e-NACH auto-debits. When borrowers cancel mandates, close bank accounts, or maintain zero balance, collection agencies struggle. Many institutions fail to initiate formal criminal proceedings within statutory limitation periods, losing substantial legal leverage.",
    legalMechanism:
      "Section 25 of the Payment and Settlement Systems Act, 2007 confers criminal liability for electronic mandate dishonour equivalent to Section 138 of the Negotiable Instruments Act, 1881. Lenders who dispatch a formal 30-day statutory demand notice following mandate bounce memos preserve their right to prosecute directors, co-borrowers, and individual debtors.",
    playbookSteps: [
      {
        step: "Capture NPCI Return Memo & Reason Codes",
        description:
          "Retain electronic return memos from the sponsor bank indicating reason codes like 'Insufficient Funds' or 'Mandate Stopped by Customer' under BSA Section 63 admissibility standards.",
      },
      {
        step: "Serve Section 25 Statutory Demand Notice Within 30 Days",
        description:
          "Dispatch an advocate demand notice strictly within 30 days of receiving the debit failure confirmation, demanding settlement of the dishonoured amount within 15 days.",
      },
      {
        step: "File Section 25 PSS Criminal Complaint or Lok Adalat Summons",
        description:
          "If the notice period lapses without payment, initiate Section 25 proceedings before the competent Judicial Magistrate or refer the dispute to pre-litigation Lok Adalat panels.",
      },
    ],
    statutoryRule: "Section 25 Payment and Settlement Systems Act, 2007 • Section 138 Negotiable Instruments Act, 1881",
  },
  {
    id: "willful-defaulters",
    tabLabel: "Willful Defaulters & Skip Borrowers",
    title: "Tracing Disappeared Borrowers & Civil Attachment Before Judgment",
    challenge:
      "In high-ticket unsecured personal loans (₹5 Lakh to ₹25 Lakh), habitual defaulters often change phone numbers, switch residential addresses, or shift banking relationships. Standard collection agencies declare these accounts as 'skip' or uncontactable, writing off entire balances.",
    legalMechanism:
      "Institutional legal recovery deploys skip-tracing through corporate registry (MCA), employment verification, alternate digital footprints, and Section 9/Order XXXVIII Rule 5 of CPC applications for attachment of assets before judgment. Institutional legal notices served to updated employer addresses and permanent addresses establish willfulness and bad faith.",
    playbookSteps: [
      {
        step: "Institutional Skip-Tracing & Asset Mapping",
        description:
          "Cross-reference provident fund records, GST registration, MCA directorships, and utility filings to establish active employment and unencumbered asset ownership.",
      },
      {
        step: "Comprehensive Advocate Notice Impleading Guarantors",
        description:
          "Serve a stern legal notice directly to the borrower's registered corporate employer and co-guarantor detailing imminent civil and criminal recovery.",
      },
      {
        step: "Order XXXVII Summary Suit or Digital Arbitration Award",
        description:
          "Obtain an expedited summary money decree in Commercial Court or an arbitral award, followed by execution petitions for salary garnishment and bank account attachment.",
      },
    ],
    statutoryRule: "Order XXXVII & Order XXXVIII Rule 5 Code of Civil Procedure, 1908 • RBI Willful Defaulter Directives",
  },
  {
    id: "digital-fintech-loans",
    tabLabel: "Digital & Micro-Ticket Loans",
    title: "Bulk Algorithmic Legal Recovery for High-Volume Small-Ticket Defaults",
    challenge:
      "Digital lending apps and fintech NBFCs issuing loans between ₹10,000 and ₹1,00,000 face operational cost hurdles. Manual litigation for individual ₹25,000 defaults is cost-prohibitive, leading to high loss provisioning when phone collection fails.",
    legalMechanism:
      "Institutional API-driven legal notice dispatch and Online Dispute Resolution (ODR) platforms enable automated, high-volume advocate notice issuance at marginal per-case cost. Complying strictly with RBI's September 2022 Digital Lending Directives, this structured digital intervention yields rapid cure rates without violating Fair Practices Codes.",
    playbookSteps: [
      {
        step: "API-Triggered Bulk Legal Notice Generation",
        description:
          "Connect risk infrastructure to LegalRecovery.in's institutional pipeline to generate advocate-vetted notices with individualized loan data and QR code payment rails.",
      },
      {
        step: "Multi-Channel Statutory Electronic Service",
        description:
          "Dispatch notices simultaneously via registered email, authenticated WhatsApp, and Speed Post with cryptographic delivery timestamps under the Information Technology Act, 2000.",
      },
      {
        step: "ODR & Virtual Conciliation Concierge",
        description:
          "Channel delinquent borrowers directly into structured digital settlement portals, achieving instant EMI restructuring or payment without court appearances.",
      },
    ],
    statutoryRule: "RBI Guidelines on Digital Lending (2022) • Information Technology Act, 2000 • Arbitration Act Section 61",
  },
];

export default function DefaultsMitigationTabs() {
  const [activeTab, setActiveTab] = useState<string>(STRATEGIES[0].id);

  const selectedStrategy = STRATEGIES.find((s) => s.id === activeTab) || STRATEGIES[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Bar */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50 scrollbar-thin">
        {STRATEGIES.map((strategy) => {
          const isActive = strategy.id === activeTab;
          return (
            <button
              key={strategy.id}
              type="button"
              onClick={() => setActiveTab(strategy.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap border-b-2 transition-colors cursor-pointer text-left ${
                isActive
                  ? "border-red-600 text-red-600 bg-white"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {strategy.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            {selectedStrategy.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 mt-3">
            {selectedStrategy.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
              Portfolio Vulnerability / Root Cause
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedStrategy.challenge}
            </p>
          </div>

          <div className="p-4 bg-red-50/50 border border-red-200/60 rounded-xl space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-red-900">
              Statutory Leverage & Legal Remedy
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedStrategy.legalMechanism}
            </p>
          </div>
        </div>

        {/* 3 Step Protocol */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Recommended Legal Execution Rail
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {selectedStrategy.playbookSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-extrabold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 truncate">{s.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Action Link */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium">
            Need institutional recovery deployment for this portfolio segment?
          </span>
          <Link
            href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
            className="text-red-600 hover:text-red-800 font-bold underline"
          >
            Explore NBFC &amp; Bank Unpaid Dues Notice Infrastructure →
          </Link>
        </div>
      </div>
    </div>
  );
}
