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

const PROBLEMS: ProblemTab[] = [
  {
    id: "organiser-absconded",
    tabLabel: "Organiser Absconded",
    title: "Kitty / Committee Organiser Absconded with Pool Money",
    cause:
      "The committee host or 'BC King' collected monthly cash or UPI contributions from 10 to 30 members under an informal Bachat Committee. When it came time to distribute the pot or return maturity amounts to non-bidder members, the organiser abruptly switched off their phone, locked their residence or shop, and stopped responding to communications.",
    legalBasis:
      "Entrusting money to a committee head creates a fiduciary relationship. Absconding with pooled funds constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS, formerly IPC 406) and Cheating under Section 318 BNS (formerly IPC 420). Furthermore, running an unregistered commercial deposit pool violates Section 3 of the Banning of Unregulated Deposit Schemes (BUDS) Act, 2019, punishable with 2 to 7 years imprisonment and property attachment.",
    steps: [
      {
        step: "Collate Group Chat & Transaction Audit Trail",
        description:
          "Export full WhatsApp / Telegram group chats showing monthly contribution charts, member lists, and the organiser's payment confirmations. Download stamped bank statements highlighting all UPI and IMPS transfers made to the organiser.",
      },
      {
        step: "Serve Joint Statutory Advocate Legal Demand Notice",
        description:
          "Have an advocate issue a formal 15-day legal demand notice to the organiser's residential and native address via Registered Speed Post with tracking, demanding immediate reimbursement with 18% penal interest.",
      },
      {
        step: "Lodge Collective Police Complaint & Section 175(3) BNSS Petition",
        description:
          "Submit a joint criminal complaint signed by all affected members to the Superintendent of Police / Economic Offences Wing (EOW). If police refuse to register an FIR under Section 173 BNSS, file an application before the Judicial Magistrate under Section 175(3) BNSS.",
      },
    ],
    statutoryRule: "BNS 2023 Sections 316, 318 & BUDS Act 2019 Sections 3, 21",
  },
  {
    id: "member-defaulted",
    tabLabel: "Member Defaulted",
    title: "Member Took Early Chit / Kitty Pot and Refused Future Payments",
    cause:
      "In a recurring chit or kitty group, a member bid aggressively or took the lucky draw during the early months (e.g., month 2 or 3). After pocketing the lump sum prize pool, the member stopped paying subsequent monthly installments, leaving the host or the remaining members in severe financial shortfall.",
    legalBasis:
      "A chit or kitty member who takes the pot enters into an enforceable contractual debt towards future installments. Defaulting intentionally triggers civil recovery under Order XXXVII CPC for a liquidated monetary demand. Where the member deposited blank or security cheques that were later dishonoured upon presentation, criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881 applies directly.",
    steps: [
      {
        step: "Present Security Cheque or Document Written Demand",
        description:
          "If the defaulting member provided a signed security cheque or promissory note, deposit the cheque in your bank. If returned dishonoured, obtain the official Cheque Return Memo with the bank's reason code.",
      },
      {
        step: "Serve Section 138 NI Act or 15-Day Advocate Notice",
        description:
          "Within strictly 30 days of receiving the bank memo, dispatch a Section 138 statutory demand notice through an advocate. If no cheque exists, issue an Order XXXVII pre-litigation legal notice demanding the arrears.",
      },
      {
        step: "Institute Summary Suit under Order XXXVII CPC",
        description:
          "File an expedited Summary Suit in the competent Civil Court. Under Order XXXVII, the defendant has no automatic right to defend unless they establish a substantial triable issue to the judge's satisfaction.",
      },
    ],
    statutoryRule: "Order XXXVII CPC, Section 138 NI Act & Section 126 Contract Act",
  },
  {
    id: "registered-foreman-default",
    tabLabel: "Registered Chit Foreman",
    title: "Registered Chit Fund Company Withholding Prize Money or Maturity",
    cause:
      "A government-registered chit fund company (operating under State Chit Fund Rules) accepted monthly chit payments. When you won the auction or your chit completed its term, the foreman refused or delayed releasing the prize money, citing unjustified surety requirements or internal liquidity crunch.",
    legalBasis:
      "Under Section 22 and Section 24 of The Chit Funds Act, 1982, the foreman is legally obligated to deposit the chit money into a designated bank account and release prized funds within 7 days of the subscriber furnishing reasonable security. Delaying or withholding funds constitutes deficiency in service under Section 2(11) of the Consumer Protection Act, 2019, and gives grounds for statutory dispute referral under Section 64 of the Chit Funds Act.",
    steps: [
      {
        step: "Submit Formal Security Acceptance Requisition",
        description:
          "Submit your surety documents under written acknowledgment. Demand written confirmation from the Chit Fund Foreman stating the exact statutory reason for any withholding or delay.",
      },
      {
        step: "File Dispute Petition Before Registrar of Chits",
        description:
          "File a statutory arbitration dispute under Section 64 of The Chit Funds Act, 1982, before the District Registrar of Chits. The Registrar has quasi-judicial powers to attach the foreman's 100% security deposit.",
      },
      {
        step: "Simultaneous Consumer Petition on e-Jagriti",
        description:
          "Serve a 15-day advocate notice, then file an online consumer complaint on e-Jagriti claiming 100% prize money, 18% annual interest for wrongful retention, and mental agony damages.",
      },
    ],
    statutoryRule: "Chit Funds Act 1982 Sections 22, 64 & Consumer Protection Act 2019 Section 35",
  },
  {
    id: "bounced-cheque-cash",
    tabLabel: "Bounced Cheques & Cash",
    title: "Organiser Issued Security Cheques That Bounced or Denies Cash Records",
    cause:
      "When confronted by disgruntled members, the committee organiser issued post-dated cheques to pacify the group. Upon deposit, the cheques bounced with reasons like 'Funds Insufficient', 'Exceeds Arrangement', or 'Account Blocked'. In other instances, organisers claim members paid nothing because cash was handed over without formal paper receipts.",
    legalBasis:
      "Issuing a cheque against a legally enforceable debt that subsequently bounces is a strict liability criminal offence under Section 138 of the Negotiable Instruments Act, 1881, punishable with up to 2 years imprisonment or twice the cheque amount. For cash payments, contemporaneous digital admissions (WhatsApp messages, call recordings, UPI token advances) are admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
    steps: [
      {
        step: "Secure Bank Return Memo Within Limitation",
        description:
          "Retain the original dishonoured cheque and the bank's stamped Return Memo. Note the exact date of receipt to calculate the non-negotiable 30-day statutory notice limitation window.",
      },
      {
        step: "Dispatch Statutory Notice under Section 138 NI Act",
        description:
          "Engage an advocate to issue a formal demand notice giving the drawer strictly 15 days to pay the cheque amount in full. Dispatched via Registered Speed Post with postal delivery certificate.",
      },
      {
        step: "File Criminal Complaint under Section 142 NI Act",
        description:
          "If the drawer fails to make payment within 15 days from notice delivery, file a criminal complaint before the Judicial Magistrate within 30 days. Courts routinely order interim compensation up to 20% under Section 143A NI Act.",
      },
    ],
    statutoryRule: "Sections 138, 142 & 143A Negotiable Instruments Act, 1881",
  },
];

export default function ChitFundProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Pill Bar */}
      <div className="bg-slate-100 p-2 border-b border-slate-200 overflow-x-auto scrollbar-none flex gap-1.5 sm:gap-2">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-red-600 shadow-xs border border-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md inline-block mb-2">
            Statutory Governing Framework: {currentProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
            {currentProblem.title}
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <strong className="text-slate-900 font-bold block mb-1">How This Dispute Arises:</strong>
            <p>{currentProblem.cause}</p>
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-amber-950">
            <strong className="text-amber-900 font-bold block mb-1">Applicable Legal Provisions &amp; Liability:</strong>
            <p>{currentProblem.legalBasis}</p>
          </div>
        </div>

        {/* 3 Step Action Grid */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
            Recommended Statutory Action Path:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#111827] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900">{st.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 text-xs">
          <span className="text-slate-500">
            Need advocate support for this exact dispute?
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-red-600 hover:text-red-700 font-bold underline inline-flex items-center gap-1"
          >
            Check Transparent Advocate Drafting Fees →
          </Link>
        </div>
      </div>
    </div>
  );
}
