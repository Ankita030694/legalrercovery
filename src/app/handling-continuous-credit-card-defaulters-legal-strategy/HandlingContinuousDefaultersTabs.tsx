"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DefaultTypology {
  id: string;
  tabLabel: string;
  title: string;
  riskProfile: string;
  legalBasis: string;
  statutoryRule: string;
  actionProtocol: {
    stage: string;
    description: string;
  }[];
}

const TYPOLOGIES: DefaultTypology[] = [
  {
    id: "chronic-npas",
    tabLabel: "90+ DPD / Chronic NPA",
    title: "Continuous Non-Payment & Default Beyond 90 Days Past Due",
    riskProfile:
      "The cardholder ignores consecutive monthly statements, minimum amount due (MAD) reminders, and tele-calling notices. The balance crosses 90 days past due (DPD), triggering mandatory Non-Performing Asset (NPA) classification under RBI prudential asset classification norms. The debtor treats unsecured credit card balances as low-priority debt due to lack of physical asset mortgage.",
    legalBasis:
      "A credit card agreement accompanied by monthly periodic billing statements constitutes a written contractual acknowledgment of debt. Under Order XXXVII (Order 37) of the Code of Civil Procedure, 1908, banks can institute summary commercial suits for liquidated sums without entering lengthy ordinary civil trials. Under Section 18 of the Limitation Act, 1963, limitation of 3 years is refreshed by any intervening partial payment or electronic statement delivery confirmation.",
    statutoryRule: "Order XXXVII CPC & RBI Prudential Norms on Income Recognition and Asset Classification",
    actionProtocol: [
      {
        stage: "Immediate Facility Revocation & Hotlisting",
        description:
          "Block all physical and digital transaction rails immediately under RBI Credit Card Conduct Directions. Stop further credit line access and issue formal 7-day card cancellation notice.",
      },
      {
        stage: "Mandatory CICRA 30-Day Warning Notice",
        description:
          "Serve statutory notice under Section 17 & 21 of the Credit Information Companies (Regulation) Act, 2005 informing the borrower that failure to regularize within 30 days will lead to permanent 'Defaulter' / 'Written Off' bureau reporting.",
      },
      {
        stage: "Pre-Litigation Advocate Legal Notice",
        description:
          "Issue a formal statutory advocate demand notice demanding full balance discharge within 15 days, referencing impending Order 37 summary recovery proceedings.",
      },
    ],
  },
  {
    id: "fraudulent-evasion",
    tabLabel: "Limit Maxing & Evasion",
    title: "Deliberate Limit Max-Out, False Address & Absconding Borrower",
    riskProfile:
      "Cardholder maxes out cash withdrawal and POS limits within a tight window (e.g. 15-30 days), alters contact phone numbers, vacates registered residential/office premises, or submits forged employment credentials during underwriting. Zero attempt is made to service the balance, evidencing dishonest intent from inception.",
    legalBasis:
      "Where credit facility is induced through deception, fabricated KYC credentials, or intentional flight immediately upon balance exhaustion, the act transcends mere civil breach of contract. It constitutes criminal cheating and fraudulent inducement of property under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS), punishable with imprisonment up to 7 years. Section 316 BNS (Criminal Breach of Trust) also applies to unauthorized diversion of institutional funds.",
    statutoryRule: "Sections 316 & 318 BNS (formerly IPC 406 & 420) & Section 175 BNSS Police Complaint",
    actionProtocol: [
      {
        stage: "Fraud Control Unit (FCU) Investigation Dossier",
        description:
          "Consolidate IP logs, OTP authentication timestamps, geolocation of POS terminals, and physical field verification reports confirming non-traceability at registered address.",
      },
      {
        stage: "Statutory Demand with Criminal Caveat",
        description:
          "Serve demand notice giving 7 days to account for funds and update authentic coordinates, failing which criminal prosecution for fraud and misrepresentation is initiated.",
      },
      {
        stage: "Police Complaint / Section 175(3) BNSS Application",
        description:
          "File an FIR under Section 318 BNS at the jurisdictional police station or approach the Judicial Magistrate under Section 175(3) of Bharatiya Nagarik Suraksha Sanhita, 2023 for directed investigation.",
      },
    ],
  },
  {
    id: "bounced-nach",
    tabLabel: "Bounced NACH / Auto-Debit",
    title: "Repeated Failure and Dishonor of NACH Auto-Debit Mandates",
    riskProfile:
      "Borrower has registered an automated electronic clearing mandate (NACH / ECS) for credit card monthly payments or EMI conversions. When presented on the scheduled debit date, the mandate consistently returns unpaid with return memo 'Insufficient Funds' or 'Account Frozen / Blocked'.",
    legalBasis:
      "Dishonor of an electronic funds transfer mandate due to insufficiency of funds is an express criminal offence under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). This statutory provision mirrors Section 138 of the Negotiable Instruments Act, 1881, imposing personal criminal liability, potential imprisonment up to two years, and fines up to twice the mandate amount on defaulting account holders.",
    statutoryRule: "Section 25 Payment and Settlement Systems Act, 2007 (PSSA) & Section 138 NI Act",
    actionProtocol: [
      {
        stage: "Bank Return Memo Generation",
        description:
          "Obtain certified electronic return memos from NPCI / clearing house establishing the specific return reason code ('Insufficient Funds').",
      },
      {
        stage: "Statutory 30-Day Demand Notice Under PSSA",
        description:
          "Issue a formal advocate statutory demand notice within 30 days of receiving the return memo, granting the cardholder 15 calendar days from receipt to pay the dishonored amount in full.",
      },
      {
        stage: "Filing Criminal Complaint in Metropolitan Magistrate Court",
        description:
          "If payment is not made within 15 days, institute a criminal complaint under Section 25 PSSA before the competent Magistrate within the mandatory 30-day filing window.",
      },
    ],
  },
  {
    id: "strategic-default",
    tabLabel: "Strategic Default / Arbitrage",
    title: "Strategic Non-Payment by Solvent Defaulters Seeking Deep Haircuts",
    riskProfile:
      "Borrower possesses adequate liquid assets, income, or commercial properties but intentionally halts card payments to force the lending institution into an aggressive one-time settlement (OTS) or deep principal waiver, exploiting the misconception that banks will not litigate unsecured retail debts.",
    legalBasis:
      "Reserve Bank of India (RBI) Master Circular on Wilful Defaulters empowers banks to categorize individuals who fail to meet repayment obligations despite possessing capacity as 'Wilful Defaulters'. Furthermore, under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993 (where aggregated balance exceeds ₹20 Lakhs) or Order 37 CPC in Commercial Courts, banks can seek interim asset disclosure and conditional attachment before judgment under Order 38 Rule 5 CPC.",
    statutoryRule: "RBI Master Direction on Wilful Defaulters & Order XXXVIII Rule 5 CPC (Attachment Before Judgment)",
    actionProtocol: [
      {
        stage: "Financial Intelligence & Asset Mapping",
        description:
          "Execute cross-institutional screening across credit bureaus, GSTIN filings, and bank account footprints to verify solvency and liquid cash flows.",
      },
      {
        stage: "Wilful Defaulter Identification Committee Notice",
        description:
          "Issue show-cause notice under RBI Wilful Defaulter guidelines, warning that classification will bar the individual and associated corporate entities from accessing institutional credit for 5 years.",
      },
      {
        stage: "Commercial Summary Suit with Order 38 Rule 5 Petition",
        description:
          "Institute Order 37 CPC summary recovery suit coupled with an urgent application for interim asset disclosure and freezing orders against identifiable assets.",
      },
    ],
  },
];

export default function HandlingContinuousDefaultersTabs() {
  const [activeTab, setActiveTab] = useState(TYPOLOGIES[0].id);
  const current = TYPOLOGIES.find((t) => t.id === activeTab) || TYPOLOGIES[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-6">
      {/* Tab Navigation Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {TYPOLOGIES.map((t) => {
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {t.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Selected Tab Content */}
      <div className="space-y-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
            {current.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mt-2">
            {current.title}
          </h3>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
            <strong className="text-slate-900 block font-bold mb-1">Defaulter Profile &amp; Modus Operandi:</strong>
            <p>{current.riskProfile}</p>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
            <strong className="text-slate-900 block font-bold mb-1">Statutory Legal Framework:</strong>
            <p>{current.legalBasis}</p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-2.5">
            Recommended Bank Action Rail
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionProtocol.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs relative"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 line-clamp-1">
                    {item.stage}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-500 flex flex-wrap items-center gap-2">
          <span>Need institutional notice drafting?</span>
          <Link
            href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
            className="text-red-600 underline font-semibold hover:text-red-700"
          >
            Explore Bank Recovery Notices
          </Link>
          <span>or view our guide on</span>
          <Link
            href="/civil-suit-for-recovery-of-money-india"
            className="text-red-600 underline font-semibold hover:text-red-700"
          >
            Civil Recovery Suits in India
          </Link>
        </div>
      </div>
    </div>
  );
}
