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

const SCENARIOS: ProblemTab[] = [
  {
    id: "willful-defaulter",
    tabLabel: "Willful Defaulter",
    title: "High-Balance Willful Defaulter with Solvency & Liquid Assets",
    cause:
      "A cardholder utilizes credit lines ranging from ₹3 Lakh to ₹25 Lakh+ for luxury purchases, business cash extraction, or travel, and subsequently halts repayments despite maintaining gainful employment, corporate directorships, or commercial revenue streams.",
    legalBasis:
      "Under Order XXXVII of the Code of Civil Procedure (CPC), 1908, credit card agreements constitute a written contract creating a liquidated monetary debt. Banks are entitled to institute an expedited Commercial Summary Suit where the debtor cannot defend as a matter of right without demonstrating a substantial defense. Concurrently, under Order XXXVIII Rule 5 CPC, the bank can apply for conditional attachment of the cardholder's bank accounts or movable assets prior to judgment if alienation of assets is anticipated.",
    steps: [
      {
        step: "Serve Formal Loan Recall & Statutory Notice",
        description:
          "Issue a 15-day statutory recall notice terminating card privileges, recalling the entire debit balance, and demanding payment of principal with contractual finance charges.",
      },
      {
        step: "File Order 37 Summary Suit in Commercial Court",
        description:
          "Institute a summary suit before the competent District Commercial Court. The defendant must enter an appearance within 10 days of summons service, failing which allegations are deemed admitted.",
      },
      {
        step: "Execute Summary Money Decree & Asset Attachment",
        description:
          "Upon obtaining a decree, file execution proceedings under Order XXI CPC to attach salary accounts, corporate shares, or luxury motor vehicles.",
      },
    ],
    statutoryRule: "Order XXXVII & Order XXXVIII Rule 5 CPC, 1908",
  },
  {
    id: "absconding-cardholder",
    tabLabel: "Absconded Defaulter",
    title: "Untraceable / Relocated Defaulter (Skip Tracing & Substituted Service)",
    cause:
      "The cardholder vacates their registered residential address, disconnects phone lines, changes employment, or relocates across states after exhausting card limits, rendering telephonic collection and standard postal notices unserviceable.",
    legalBasis:
      "When a debtor evades personal service, Order V Rule 20 of the CPC authorizes the court to order Substituted Service via publication in widely circulated newspapers or digital transmission under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). Furthermore, where the credit line was drawn down immediately prior to absconding with demonstrable premeditation, criminal proceedings under Section 316 (criminal breach of trust) and Section 318 (cheating) of the Bharatiya Nyaya Sanhita, 2023 (BNS) can be initiated.",
    steps: [
      {
        step: "Execute Institutional Skip-Tracing & Asset Search",
        description:
          "Cross-reference credit bureau updates (CIBIL, Experian), Ministry of Corporate Affairs (MCA) DIN records, and EPFO digital registries to identify active employment or commercial premises.",
      },
      {
        step: "Serve Dual Digital Notice under BSA Section 63",
        description:
          "Dispatch advocate notices simultaneously via registered email and verified messaging channels with delivery reports certified under Bharatiya Sakshya Adhiniyam standards.",
      },
      {
        step: "Obtain Court Order for Substituted Service",
        description:
          "Move an application under Order V Rule 20 CPC for newspaper publication in the debtor's last known jurisdiction to proceed ex-parte and obtain an enforceable money decree.",
      },
    ],
    statutoryRule: "Order V Rule 20 CPC & Section 63 Bharatiya Sakshya Adhiniyam, 2023",
  },
  {
    id: "dishonored-settlement",
    tabLabel: "Bounced Cheque / NACH",
    title: "Dishonored Settlement Cheque or Revoked NACH Auto-Debit Mandate",
    cause:
      "Following pre-litigation counseling or Lok Adalat referral, the cardholder executes a One-Time Settlement (OTS) or structured installment plan, issuing post-dated cheques or an electronic NACH mandate which subsequently returns dishonored for 'funds insufficient'.",
    legalBasis:
      "The dishonor of a cheque issued to discharge an admitted credit card liability constitutes a criminal offense under Section 138 of the Negotiable Instruments Act, 1881. Similarly, the failure of an electronic clearing mandate triggers statutory criminal liability under Section 25 of the Payment and Settlement Systems (PSS) Act, 2007. These statutes provide severe penal consequences including up to two years imprisonment and fines equal to double the instrument value.",
    steps: [
      {
        step: "Procure Bank Return Memo within 30 Days",
        description:
          "Obtain the formal bank dishonor memo with reason code ('Insufficient Funds' or 'Account Closed') from the clearing bank.",
      },
      {
        step: "Issue Section 138 / Section 25 Statutory Demand Notice",
        description:
          "Serve a mandatory statutory demand notice within 30 days of receiving the return memo, granting the cardholder exactly 15 calendar days to make full payment.",
      },
      {
        step: "File Criminal Complaint Before Judicial Magistrate",
        description:
          "Upon non-payment within 15 days, lodge a criminal complaint under Section 142 NI Act within 30 days before the Metropolitan Magistrate or Judicial Magistrate First Class.",
      },
    ],
    statutoryRule: "Section 138 Negotiable Instruments Act & Section 25 PSS Act, 2007",
  },
  {
    id: "counter-dispute",
    tabLabel: "Disputed Charge Defense",
    title: "Spurious Chargeback Defense or Retroactive Unauthorised Transaction Claim",
    cause:
      "When confronted with legal recovery, the cardholder belatedly alleges that major card transactions were unauthorized, fraudulent, or disputed with merchants, attempting to utilize consumer protection regulations to delay liability.",
    legalBasis:
      "Under Clause 14(a) of the RBI Master Direction on Credit Card Operations, cardholders bear a strict obligation to report disputed billing items within the specified billing cycle. Where multi-factor authentication (MFA / 3D Secure OTP) was successfully completed to the cardholder's registered mobile number, the evidentiary burden under Section 63 of the BSA 2023 firmly shifts to the borrower to establish compromise. Retroactive disputes raised after statutory notice are routinely dismissed by courts as an afterthought.",
    steps: [
      {
        step: "Extract Multi-Factor Authentication (MFA) Audit Logs",
        description:
          "Generate telecom SMS delivery logs, IP address traces, and payment gateway authentication tokens verifying 2-Factor OTP authorization.",
      },
      {
        step: "Compile Monthly Billing Dispatch Records",
        description:
          "Produce electronic delivery logs and email open confirmations demonstrating that billing statements were delivered monthly without contemporaneous objection.",
      },
      {
        step: "Rebut Borrower Counter-Notice with Estoppel Doctrine",
        description:
          "Serve a comprehensive legal rejoinder refuting frivolous fraud claims and invoking contractual estoppel under Section 115 of the Indian Evidence Act / BSA provisions.",
      },
    ],
    statutoryRule: "RBI Master Direction on Credit Cards & Section 63 BSA 2023",
  },
];

export default function CreditCardDefaultersProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Scrollable Tab Bar */}
      <div className="flex border-b border-slate-200 bg-slate-50/70 overflow-x-auto no-scrollbar">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Statutory Channel: {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2.5">
            {current.title}
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70">
            <strong className="text-slate-900 font-bold block mb-1">Delinquency Context &amp; Modus:</strong>
            <p>{current.cause}</p>
          </div>

          <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
            <strong className="text-[#DC2626] font-bold block mb-1">Statutory Basis &amp; Legal Remedy:</strong>
            <p>{current.legalBasis}</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 mb-3">
            Recommended Bank Action Plan:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {st.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Need institutional legal assistance for this specific portfolio?
          </p>
          <Link
            href="/civil-suit-for-recovery-of-money-india"
            className="text-xs font-bold text-[#DC2626] hover:underline"
          >
            Review Civil Suit for Recovery of Money →
          </Link>
        </div>
      </div>
    </div>
  );
}
