"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DisputeScenario {
  id: string;
  tabLabel: string;
  title: string;
  verdict: "Civil Breach (Summary Suit)" | "Criminal Cheating (BNS 318)" | "Dual Route (NI 138 + Summary Suit)" | "Criminal Breach of Trust (BNS 316)";
  badgeColor: string;
  policeReaction: string;
  legalBasis: string;
  evidenceNeeded: string[];
  actionPlan: string;
  recommendedLink?: {
    text: string;
    href: string;
  };
}

const SCENARIOS: DisputeScenario[] = [
  {
    id: "friend-loan",
    tabLabel: "Friend / Relative Loan",
    title: "Money Lent to a Friend or Relative Who Stopped Answering Calls",
    verdict: "Civil Breach (Summary Suit)",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    policeReaction: "Police will refuse an FIR and mark the complaint 'Civil Nature' unless you prove fraudulent misrepresentation existed at the moment the money was borrowed.",
    legalBasis: "Supreme Court in Dalip Kaur (2009) & Sarabjit Singh (2023) established that mere failure to repay a loan is a breach of contract, not cheating under BNS 318 (old IPC 420).",
    evidenceNeeded: [
      "Bank/UPI account statements showing fund transfers",
      "WhatsApp or SMS chat history discussing loan terms and repayment promises",
      "Audio recordings or text admissions of debt under Section 63 BSA",
      "Written promissory note or informal acknowledgment slip (if available)"
    ],
    actionPlan: "Dispatch a formal 15-day statutory legal notice under Section 18 of the Limitation Act, followed by a Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC) for fast decree without trial.",
    recommendedLink: {
      text: "Read guide: Legal Notice to Recover Personal Loan from Friend",
      href: "/legal-notice-to-recovery-my-loan-from-friend"
    }
  },
  {
    id: "ex-partner",
    tabLabel: "Ex-Partner Dispute",
    title: "Money Transferred to Ex-Boyfriend or Ex-Girlfriend During Relationship",
    verdict: "Civil Breach (Summary Suit)",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    policeReaction: "Police will decline to intervene, treating relationship financial transfers as domestic disputes or gift transactions unless extortion or systemic fraud is documented.",
    legalBasis: "Under Section 10 of the Indian Contract Act, oral agreements to repay funds are legally binding. The defense of 'unconditional gift' collapses when chats demonstrate repayment promises.",
    evidenceNeeded: [
      "UPI transaction IDs and bank debit logs highlighting specific loan amounts",
      "Chat messages where the ex-partner promised to return the money",
      "Proof of expenses paid on their behalf (rent, credit card bills, flight tickets)",
      "Lack of reciprocal financial exchange or gifting intent"
    ],
    actionPlan: "Serve an advocate demand notice establishing debt liability and repudiating the 'gift' defense. If ignored, initiate recovery litigation before the civil court.",
    recommendedLink: {
      text: "Read guide: Recover Money from Ex-Boyfriend or Girlfriend Legally",
      href: "/recover-money-from-ex-boyfriend-girlfriend"
    }
  },
  {
    id: "cheque-bounce",
    tabLabel: "Cheque Bounced + Loan",
    title: "Borrower Issued a Cheque That Dishonoured on Presentation",
    verdict: "Dual Route (NI 138 + Summary Suit)",
    badgeColor: "bg-red-100 text-red-800 border-red-300",
    policeReaction: "Police will redirect you to Section 138 of the Negotiable Instruments Act. However, if the account was closed before issuance, BNS 318(4) cheating charges can be pressed.",
    legalBasis: "Section 138 NI Act carries up to 2 years imprisonment + 2x cheque penalty. Parallel civil suit under Order 37 CPC allows asset attachment before judgment.",
    evidenceNeeded: [
      "Original dishonoured cheque and bank return memo stating 'Insufficient Funds' or 'Account Closed'",
      "Written statutory notice dispatched within 30 days of receiving the return memo",
      "Speed Post postal tracking receipt confirming delivery of demand notice",
      "Underlying loan ledger, agreement, or promissory note"
    ],
    actionPlan: "Issue a strict 15-day statutory demand notice under Section 138 NI Act within 30 days of dishonour. If unpaid, file a criminal complaint before the Metropolitan/Judicial Magistrate within 30 days.",
    recommendedLink: {
      text: "Understand Summary Suit procedure: Order 37 CPC Money Recovery",
      href: "/law/order-37-summary-suit-money-recovery"
    }
  },
  {
    id: "fake-investment",
    tabLabel: "Fake Scheme / Fraud",
    title: "Money Taken Under False Pretext (Fictitious Business, Fake Emergency, Ponzi)",
    verdict: "Criminal Cheating (BNS 318)",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    policeReaction: "Police are legally mandated to register an FIR under BNS 318(4) because dishonest inducement and deceitful misrepresentation existed right from inception.",
    legalBasis: "Section 318(4) of Bharatiya Nyaya Sanhita (cognizable, non-bailable) penalises cheating and dishonestly inducing delivery of property with up to 7 years imprisonment and fine.",
    evidenceNeeded: [
      "Fabricated documents, fake investment brochures, forged partnership deeds",
      "False representations in text/email (e.g. non-existent medical emergency or ghost company)",
      "Bank statements showing immediate siphoning or diversion of funds",
      "Complaints from other victims establishing systemic fraudulent modus operandi"
    ],
    actionPlan: "Draft a comprehensive criminal complaint under Section 173 BNSS to the Station House Officer (SHO). If the police refuse to register an FIR, file an application under Section 175(3) BNSS before the Magistrate.",
    recommendedLink: {
      text: "See how UPI transactions prove loan debts: UPI Transfer as Proof",
      href: "/upi-transfer-as-proof-of-loan"
    }
  }
];

export default function BnsRouteTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3" role="tablist">
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#111827] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div
        id={`panel-${scenario.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${scenario.id}`}
        className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {scenario.title}
          </h3>
          <span
            className={`inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide border ${scenario.badgeColor} shrink-0 self-start sm:self-auto`}
          >
            {scenario.verdict}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Expected Police Response:
            </span>
            <p className="text-slate-800 font-medium leading-relaxed">
              {scenario.policeReaction}
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Applicable Legal Precedent:
            </span>
            <p className="text-slate-800 font-medium leading-relaxed">
              {scenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
            Mandatory Evidentiary Proof Required:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {scenario.evidenceNeeded.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 p-2.5 bg-white border border-slate-200/90 rounded-lg text-slate-700 font-medium"
              >
                <span className="text-red-600 font-bold shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl space-y-1 text-slate-800">
          <strong className="text-red-900 font-bold block text-xs sm:text-sm">
            Statutory Escalation Strategy:
          </strong>
          <p>{scenario.actionPlan}</p>
        </div>

        {scenario.recommendedLink && (
          <div className="pt-2">
            <Link
              href={scenario.recommendedLink.href}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800 underline"
            >
              {scenario.recommendedLink.text} →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
