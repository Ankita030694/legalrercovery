"use client";

import React, { useState } from "react";
import Link from "next/link";

interface RecoveryTab {
  id: string;
  tabLabel: string;
  title: string;
  category: string;
  mechanism: string;
  legalBasis: string;
  strategicSteps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
  timeline: string;
  financialYield: string;
}

const RECOVERY_TABS: RecoveryTab[] = [
  {
    id: "lok-adalat",
    tabLabel: "Lok Adalat (Pre-Litigation)",
    title: "National & Permanent Lok Adalat: High-Yield Pre-Litigation Amicable Settlement",
    category: "Pre-Litigation Alternative Dispute Resolution",
    mechanism:
      "When credit card balances default past 90 DPD (NPA) or 180 DPD charge-off thresholds without security collateral, pre-litigation referral to National Lok Adalat or Permanent Lok Adalat (Public Utility Services) is the bank's most cost-effective recovery vehicle. It creates judicial finality with zero court fees and no subsequent appeal rights.",
    legalBasis:
      "Under Sections 19, 20, and 21 of the Legal Services Authorities Act, 1987, an award passed by Lok Adalat is deemed a decree of a Civil Court. Section 21(2) explicitly provides that every award shall be final and binding on all parties, with no appeal lying to any court against the consent award.",
    strategicSteps: [
      {
        step: "Portfolio Bucketing & Pre-Conciliation Notice Dispatch",
        description:
          "Card issuers aggregate delinquent card accounts with outstanding balances between ₹25,000 and ₹20,00,000, issuing formal pre-litigation conciliation notices with one-time settlement (OTS) waiver slabs.",
      },
      {
        step: "Institutional Reference to District / State Legal Services Authority",
        description:
          "The bank's legal panel submits a batch petition to the Secretary of the DLSA/SLSA listing cardholder details, principal outstanding, and accrued interest.",
      },
      {
        step: "Conciliation Session & Consent Award Formulation",
        description:
          "During the Lok Adalat session, bank officers and empaneled advocates negotiate structured payment terms or upfront lump-sum settlements, executed into a formal written settlement terms memo.",
      },
      {
        step: "Judicial Execution Decree Conversion",
        description:
          "If the borrower breaches the consented OTS instalment schedule, the Lok Adalat award is directly executable under Order XXI of the Code of Civil Procedure, 1908 without filing a fresh civil suit.",
      },
    ],
    statutoryRule: "Sections 19, 20 & 21 Legal Services Authorities Act, 1987",
    timeline: "30 to 60 Days (Single Sitting Disposal)",
    financialYield: "65% to 85% Recovery on Principal Dues (Zero Court Fees)",
  },
  {
    id: "digital-arbitration",
    tabLabel: "Institutional Digital Arbitration",
    title: "Digital ODR & Institutional Arbitration: Fast-Track Section 29B Decrees",
    category: "Binding Contractual Dispute Resolution",
    mechanism:
      "Modern credit card agreements incorporate an institutional arbitration clause allowing banks to resolve outstanding card debts via institutional Online Dispute Resolution (ODR) platforms. This bypasses congested civil courtrooms, yielding binding awards within 3 to 6 months.",
    legalBasis:
      "Governed by the Arbitration and Conciliation Act, 1996 (as amended in 2015 and 2019). Section 29B provides for fast-track summary arbitration within 6 months based purely on documentary pleadings. Once rendered, the award is enforceable as a Civil Court decree under Section 36.",
    strategicSteps: [
      {
        step: "Section 21 Notice Invoking Arbitration & Statement of Claim",
        description:
          "The bank serves an electronic and physical invocation notice detailing the cardholder contract, defaulted monthly billing cycles, and Section 63 BSA certified statement of accounts.",
      },
      {
        step: "Institutional Sole Arbitrator Appointment",
        description:
          "An independent arbitrator is empaneled through a recognized arbitral institution (or designated institutional platform) complying strictly with Seventh Schedule disclosure norms.",
      },
      {
        step: "Summary Document-Only Fast-Track Proceedings",
        description:
          "Under Section 29B, hearings are conducted digitally without oral witness examination, relying on credit card transaction logs, OTP authentication records, and charge-off ledgers.",
      },
      {
        step: "Final Award & Section 36 Execution",
        description:
          "Upon expiry of the 90-day challenge window under Section 34, the bank initiates execution under Order XXI CPC before the Principal District Court for salary garnishment and bank account attachment.",
      },
    ],
    statutoryRule: "Sections 7, 21, 29B & 36 Arbitration and Conciliation Act, 1996",
    timeline: "90 to 180 Days",
    financialYield: "90% to 100% of Claim Value (Plus Contractual & Post-Award Interest)",
  },
  {
    id: "summary-suit-order37",
    tabLabel: "Summary Suit (Order 37 CPC)",
    title: "Order XXXVII Code of Civil Procedure: Summary Money Decrees on Written Contracts",
    category: "Civil Fast-Track Adjudication",
    mechanism:
      "When the card agreement and monthly card statements represent a liquidated demand, banks institute a Summary Suit under Order XXXVII of the CPC. The cardholder does not have an automatic right of defense and must obtain leave from the court.",
    legalBasis:
      "Order XXXVII Rules 1, 2, and 3 of the Code of Civil Procedure, 1908. Applicable to suits upon bills of exchange, hundies, promissory notes, and actions for recovery of debt or liquidated money demand arising on a written contract.",
    strategicSteps: [
      {
        step: "Advocate Statutory Demand Notice & Plaint Presentation",
        description:
          "Bank issues a 15-day pre-action demand notice. If unheeded, the bank files an Order XXXVII plaint verifying the credit card application, terms of issuance, cardholder PIN/OTP usage, and final dues statement.",
      },
      {
        step: "Service of Form 4 Summons on the Cardholder",
        description:
          "Court issues special summons in Form 4. The defaulting cardholder must enter an appearance within 10 days of service, failing which the bank's averments are deemed admitted.",
      },
      {
        step: "Summons for Judgment & Conditional Leave Test",
        description:
          "Bank serves summons for judgment in Form 4A. The defendant must demonstrate a substantial defense by affidavit; otherwise, the court enters judgment immediately or conditions leave on depositing 50% to 100% of the claim in court.",
      },
      {
        step: "Final Money Decree & Order XXI Execution",
        description:
          "Decree is issued with costs and interest, immediately enforceable by attachment of movable and immovable property or garnishment of third-party employment receivables.",
      },
    ],
    statutoryRule: "Order XXXVII Rules 1–7 Code of Civil Procedure, 1908",
    timeline: "6 to 12 Months",
    financialYield: "100% Principal + Accrued Legal Costs & Court-Ordered Interest",
  },
  {
    id: "nach-pss-bounce",
    tabLabel: "NACH / Auto-Debit Bounce (Criminal)",
    title: "Section 25 Payment and Settlement Systems Act: Criminal Remedy for Auto-Debit Failure",
    category: "Quasi-Criminal Statutory Prosecution",
    mechanism:
      "Most credit card customers set up NACH (National Automated Clearing House) or e-mandates for monthly minimum payments or total dues. When an auto-debit bounces due to insufficient funds, Section 25 of the PSS Act provides a potent quasi-criminal remedy parallel to Section 138 of the NI Act.",
    legalBasis:
      "Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act) mutatis mutandis applies the penal provisions and procedure of Chapter XVII of the Negotiable Instruments Act, 1881 to electronic funds transfer dishonour, carrying imprisonment up to 2 years or twice the payment amount.",
    strategicSteps: [
      {
        step: "Electronic Mandate Return Memo Generation",
        description:
          "Capture the NPCI NACH return memo with reason code '01 - Insufficient Funds' or '02 - Account Closed / Payment Stopped'.",
      },
      {
        step: "Mandatory 30-Day Statutory Advocate Demand Notice",
        description:
          "Serve a formal advocate demand notice under Section 25(1)(b) of the PSS Act within 30 days of receiving the dishonour memo, demanding payment within 15 days.",
      },
      {
        step: "Filing Criminal Complaint Under Section 142 NI Act / PSS Act",
        description:
          "Upon expiry of 15 days from notice delivery, institute a private criminal complaint before the Metropolitan Magistrate or Judicial Magistrate First Class within 30 days.",
      },
      {
        step: "Issuance of Bailable / Non-Bailable Warrants",
        description:
          "Upon preliminary verification under Section 200 CrPC / BNSS, the court summons the cardholder. Continued non-appearance triggers bailable warrants, compelling urgent out-of-court settlement.",
      },
    ],
    statutoryRule: "Section 25 PSS Act, 2007 & Sections 138/142 NI Act, 1881",
    timeline: "3 to 9 Months",
    financialYield: "Near-Total Recovery Driven by Judicial Bail & Criminal Settlement Compulsion",
  },
  {
    id: "limitation-execution",
    tabLabel: "Limitation Act & Execution",
    title: "Section 18 Limitation Act Refresh & Order XXI CPC Asset Attachment",
    category: "Enforcement & Portfolio Longevity",
    mechanism:
      "Credit card debts are subject to a 3-year limitation period from the date of default under Article 19 & 22 of the Limitation Act, 1963. Strategic banks utilize digital acknowledgments and token payments under Section 18 and 19 to refresh limitation, followed by aggressive Order XXI execution.",
    legalBasis:
      "Section 18 of the Limitation Act, 1963 (written acknowledgment of liability) and Section 19 (part payment). Order XXI of the Code of Civil Procedure, 1908 governing execution of civil decrees, including garnishee orders under Rule 46A and property attachment under Rule 54.",
    strategicSteps: [
      {
        step: "Digital Acknowledgment Harvesting via App / Email / SMS",
        description:
          "Securing cardholder acknowledgment of debt through NetBanking payment plan acceptance, email replies, or WhatsApp conciliation responses before the 3-year clock expires.",
      },
      {
        step: "Section 19 Part-Payment Token Capture",
        description:
          "Any partial payment credited to the credit card account before limitation expires restarts a fresh 3-year limitation window for the entire residual balance.",
      },
      {
        step: "Order XXI Rule 46A Garnishee Order Execution",
        description:
          "Following an arbitration award or civil decree, the bank petitions the executing court to garnish the defaulter's salary from employers or freeze balances in other commercial banks.",
      },
      {
        step: "CIBIL / Experian / CRIF Strategic Scrubbing",
        description:
          "Parallel statutory reporting under the Credit Information Companies (Regulation) Act, 2005 (CICRA), preventing the cardholder from accessing new credit lines or mortgages.",
      },
    ],
    statutoryRule: "Sections 18 & 19 Limitation Act, 1963; Order XXI CPC; CICRA 2005",
    timeline: "Ongoing Portfolio Governance",
    financialYield: "Prevents Complete Bad-Debt Write-Offs & Maximizes Residual Liquidation",
  },
];

export default function CreditCardRecoveryTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(RECOVERY_TABS[0].id);

  const activeTab = RECOVERY_TABS.find((t) => t.id === activeTabId) || RECOVERY_TABS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {RECOVERY_TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 bg-red-50 text-red-600 rounded-md">
              {activeTab.category}
            </span>
            <span className="text-xs text-slate-500 font-semibold">•</span>
            <span className="text-xs font-mono font-bold text-slate-700">
              {activeTab.statutoryRule}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {activeTab.title}
          </h3>
        </div>

        {/* Mechanism Overview */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Strategic Mechanism &amp; Operational Fit for Banks
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {activeTab.mechanism}
          </p>

          <div className="pt-2 border-t border-slate-200">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Statutory Legal Authority
            </h5>
            <p className="text-xs text-slate-800 font-medium leading-relaxed">
              {activeTab.legalBasis}
            </p>
          </div>
        </div>

        {/* Strategic Steps */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Institutional Execution Roadmap
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {activeTab.strategicSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-3.5 sm:p-4 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {s.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-900 text-white rounded-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
              Standard Resolution Window
            </span>
            <span className="text-sm sm:text-base font-extrabold text-amber-400">
              {activeTab.timeline}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
              Projected Portfolio Yield &amp; Cost Efficiency
            </span>
            <span className="text-sm sm:text-base font-extrabold text-emerald-400">
              {activeTab.financialYield}
            </span>
          </div>
        </div>

        {/* Internal Contextual Link */}
        <div className="text-xs text-slate-500 pt-2 flex items-center justify-between flex-wrap gap-2">
          <span>Explore institutional recovery solutions for bank dues across India:</span>
          <Link
            href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
            className="text-red-600 font-bold hover:underline"
          >
            Bank Legal Notice Escalation Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}
