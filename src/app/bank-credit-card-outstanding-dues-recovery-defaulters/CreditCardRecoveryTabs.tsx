"use client";

import React, { useState } from "react";
import Link from "next/link";

interface RemedyTab {
  id: string;
  tabLabel: string;
  title: string;
  portfolioSegment: string;
  problemStatement: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
  typicalTimeline: string;
  costEfficiency: string;
}

const CREDIT_CARD_REMEDY_CHANNELS: RemedyTab[] = [
  {
    id: "bucket-30-90-dpd",
    tabLabel: "Early Default (30–90 DPD)",
    title: "Statutory Pre-NPA Demand & Voluntary Restructuring under RBI 2022 Norms",
    portfolioSegment: "Revolving Cardholders Missing Minimum Amount Due (MAD) for 1–2 Billing Cycles",
    problemStatement:
      "When cardholders miss MAD payments, interest accrues at 36%–48% APR. Borrowers frequently ignore tele-calling reminders. Uncalibrated third-party calling risks severe regulatory penalties under RBI Master Directions on Credit Card Operations 2022. Banks need a formal, compliant pre-NPA notice establishing contractual liability before the 90-day NPA threshold.",
    legalBasis:
      "Under Chapter VI (Customer Protection & Conduct) of RBI Master Directions 2022 and Section 73 of the Indian Contract Act 1872, banks must serve written communication outlining outstanding charges, late payment fees, and impending credit bureau reporting. The notice gives 30 days clear notice before adverse reporting to CIBIL/Experian, establishing undisputed contractual debt.",
    steps: [
      {
        step: "Generate Electronic Billing Statement & Ledger Extract",
        description:
          "Extract itemized monthly card statements demonstrating credit limit utilization, transaction authorizations, and previous partial payments.",
      },
      {
        step: "Serve Formal Written Pre-NPA Warning Notice",
        description:
          "Issue a legally verified demand notice via registered email and Speed Post notifying the cardholder of overdue balances and a 30-day window before negative credit bureau reporting.",
      },
      {
        step: "Propose Structured Equated Monthly Installment (EMI) Settlement",
        description:
          "Offer voluntary conversion of outstanding revolving balances into amortized term EMIs at reduced commercial interest rates to cure the delinquency.",
      },
      {
        step: "Mandatory RBI Fair Practice Documentation",
        description:
          "Log all digital notifications and delivery slips to ensure total compliance with RBI guidelines on recovery agents and code of conduct.",
      },
    ],
    statutoryRule: "RBI Master Directions DOR.AUT.REC.No.27/24.01.041/2022-23 & Section 73 Indian Contract Act 1872",
    typicalTimeline: "15 to 30 Calendar Days",
    costEfficiency: "Very High (Preserves customer relationship; minimal administrative overhead)",
  },
  {
    id: "bucket-90-180-npa",
    tabLabel: "NPA & Charge-Off (90–180+ DPD)",
    title: "Advocate Legal Demand Notice & Institutional Pre-Litigation Lok Adalat",
    portfolioSegment: "Delinquent Credit Cards Classified as NPA (Balances ₹25,000 to ₹5,00,000)",
    problemStatement:
      "Once an account crosses 90 DPD, banks must make mandatory 100% unsecured provisioning under RBI prudential norms. Filing individual civil suits for thousands of cards is cost-prohibitive. Banks need high-volume, compliant legal notice dispatch followed by statutory Pre-Litigation Lok Adalat referrals to achieve binding, non-appealable recovery decrees.",
    legalBasis:
      "Under Section 19 & 20 of the Legal Services Authorities Act, 1987, banks can refer pre-litigation credit card default pools to the National Lok Adalat through District Legal Services Authorities (DLSA). An award passed by Lok Adalat is deemed a Civil Court Decree under Section 21 and is final and binding with zero court fees, enforceable via immediate execution attachment under Order XXI CPC.",
    steps: [
      {
        step: "Issue Advocate Statutory Legal Demand Notice (15-Day Cure Period)",
        description:
          "Our banking advocates serve a formal statutory demand notice via Speed Post and digital channels demanding total outstanding settlement with contractual interest.",
      },
      {
        step: "Compile Pre-Litigation Docket for DLSA / Lok Adalat",
        description:
          "Batch card accounts with certified statements under Section 63 BSA 2023 and file pre-litigation dispute applications before the competent District Legal Services Authority.",
      },
      {
        step: "Conduct Conciliation & Formal Consent Terms Drafting",
        description:
          "The Lok Adalat bench facilitates mediated settlement. Consent terms recording one-time settlement (OTS) or staggered payment schedules are executed.",
      },
      {
        step: "Obtain Final Binding Lok Adalat Decree",
        description:
          "Upon default of OTS terms, the bank instantly files for execution under Order XXI CPC to attach bank accounts or salaries without having to litigate an original trial.",
      },
    ],
    statutoryRule: "Sections 19, 20 & 21 Legal Services Authorities Act, 1987 & Order XXI CPC",
    typicalTimeline: "30 to 60 Days (Aligned with quarterly National Lok Adalat benches)",
    costEfficiency: "Maximum (100% court fee refund, zero trial expenses, instant decree status)",
  },
  {
    id: "bucket-order-37",
    tabLabel: "High-Balance Defaulters (>₹5L)",
    title: "Order XXXVII CPC Summary Suit & Commercial Fast-Track Decrees",
    portfolioSegment: "High-Net-Worth, Super-Premium, or Corporate Credit Cards Defaulting on ₹5 Lakh to ₹50+ Lakhs",
    problemStatement:
      "Affluent cardholders or corporate cards that accumulate multi-lakh dues often rely on civil court delays to evade repayment. Standard civil suits drag on for years. Banks require summary adjudication where the cardholder cannot delay proceedings without judicial permission.",
    legalBasis:
      "Order XXXVII of the Code of Civil Procedure, 1908 allows summary suits for debts arising on written contracts and electronic bank accounts. The cardholder agreement and periodic statements constitute a liquidated debt contract. Under Rule 3, the defendant has no inherent right to defend; they must apply for 'Leave to Defend' within 10 days of summons, demonstrating a substantial and bona fide defense.",
    steps: [
      {
        step: "Issuance of Comprehensive Advocate Final Call Notice",
        description:
          "Issue a 7-day peremptory legal notice asserting liquidated liability and informing the defaulter of impending commercial summary litigation.",
      },
      {
        step: "Filing Summary Suit with Section 63 BSA Digital Certificate",
        description:
          "Institute Order XXXVII plaint before the competent Commercial Court or Civil Judge along with Section 63 BSA digital evidence certificates for transaction server logs.",
      },
      {
        step: "Service of Judicial Form 4 Summons for Judgment",
        description:
          "Serve summons on defendant. If the cardholder fails to enter appearance within 10 days, the bank is entitled to an immediate decree for the entire claim amount plus interest.",
      },
      {
        step: "Execution & Attachment of Movable / Immovable Assets",
        description:
          "Execute the summary decree via warrant of attachment against the defaulter's commercial assets, vehicle, demat holdings, or salary garnishment under Order XXI CPC.",
      },
    ],
    statutoryRule: "Order XXXVII Rules 1, 2 & 3 Code of Civil Procedure, 1908 & Section 63 BSA 2023",
    typicalTimeline: "4 to 9 Months in Commercial Courts",
    costEfficiency: "High Return on Capital (Recovers principal, contractual interest, and legal costs)",
  },
  {
    id: "bucket-criminal-nach",
    tabLabel: "NACH Bounce & Willful Fraud",
    title: "Section 25 PSS Act Quasi-Criminal Prosecution & BNS Section 318 Cheating",
    portfolioSegment: "Defaulting Cards with Bounced Autopay / NACH Mandates or Fraudulent Limit Siphoning",
    problemStatement:
      "Many cardholders set up automated NACH / e-mandate debit instructions for minimum amount due and subsequently stop funding the account, or deliberately max out cards right before closing associated savings accounts, indicating initial fraudulent intent.",
    legalBasis:
      "Under Section 25 of the Payment and Settlement Systems Act, 2007, dishonor of an electronic funds transfer mandate due to insufficiency of funds carries criminal punishment identical to Section 138 NI Act (up to 2 years imprisonment and double monetary penalty). Where a cardholder intentionally acquires credit with pre-planned evasion, Section 318 of Bharatiya Nyaya Sanhita (BNS) 2023 (Cheating) applies.",
    steps: [
      {
        step: "Obtain NPCI Electronic Clearing Return Memo",
        description:
          "Retrieve certified system logs indicating 'Mandate Failed - Insufficient Funds' or 'Account Frozen/Closed' from the clearing house.",
      },
      {
        step: "Serve Statutory 15-Day Demand Notice within 30 Days of Return",
        description:
          "Dispatch advocate statutory demand notice under Section 25 PSS Act requiring the cardholder to pay the returned amount within 15 days of notice receipt.",
      },
      {
        step: "Lodge Criminal Complaint before Metropolitan Magistrate / JMFC",
        description:
          "Upon non-payment after 15 days, file a formal complaint within 30 days before the jurisdictional magistrate court for issuance of summons and bailable warrants.",
      },
      {
        step: "Fast-Track Settlement via Section 147 NI Act Compounding Principles",
        description:
          "Supreme Court precedent confirms that criminal mandate dishonor proceedings serve as coercive recovery mechanisms, leading to swift pre-trial full settlements.",
      },
    ],
    statutoryRule: "Section 25 Payment and Settlement Systems Act 2007 & Section 318 Bharatiya Nyaya Sanhita 2023",
    typicalTimeline: "3 to 6 Months for Summons & Court Appearance",
    costEfficiency: "Extremely High (Personal penal liability produces instant settlement momentum)",
  },
];

export default function CreditCardRecoveryTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(CREDIT_CARD_REMEDY_CHANNELS[0].id);

  const activeChannel =
    CREDIT_CARD_REMEDY_CHANNELS.find((c) => c.id === activeTabId) ||
    CREDIT_CARD_REMEDY_CHANNELS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Tab Navigation Header */}
      <div className="bg-slate-50 border-b border-slate-200 p-2 sm:p-3 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {CREDIT_CARD_REMEDY_CHANNELS.map((channel) => {
            const isActive = channel.id === activeTabId;
            return (
              <button
                key={channel.id}
                type="button"
                onClick={() => setActiveTabId(channel.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-200/70"
                }`}
              >
                {channel.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Body */}
      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            Target Segment: {activeChannel.portfolioSegment}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {activeChannel.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Operational Challenge &amp; Risk
            </h4>
            <p className="text-slate-700 leading-relaxed">{activeChannel.problemStatement}</p>
          </div>
          <div className="p-4 rounded-xl bg-red-50/50 border border-red-100">
            <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Statutory Basis &amp; Legal Authority
            </h4>
            <p className="text-slate-700 leading-relaxed">{activeChannel.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Institutional Execution Roadmap
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeChannel.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</span>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-[10px] font-bold uppercase text-slate-600 block">Governing Statute</span>
            <span className="font-bold text-slate-800">{activeChannel.statutoryRule}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-[10px] font-bold uppercase text-slate-600 block">Resolution Timeline</span>
            <span className="font-bold text-emerald-700">{activeChannel.typicalTimeline}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-[10px] font-bold uppercase text-slate-600 block">Recovery Efficiency</span>
            <span className="font-bold text-indigo-700">{activeChannel.costEfficiency}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
