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
    id: "collector-sitting-on-rc",
    tabLabel: "Collector Not Acting on RC",
    title: "Recovery Certificate (RC) Issued by RERA, But District Collector / Tehsildar Takes No Action",
    cause:
      "The single biggest bottleneck in RERA enforcement occurs after the Authority issues a Recovery Certificate (RC) under Section 40(1) and forwards it to the District Collector (or District Magistrate). Due to administrative overload or developer lobbying at the Tehsil level, the RC often gathers dust in the revenue recovery cell without bank attachment or property auction.",
    legalBasis:
      "High Courts across India—including the Allahabad High Court, Bombay High Court, and Delhi High Court—have repeatedly ruled that once a RERA Recovery Certificate is transmitted to the District Collector, the revenue administration has a non-discretionary statutory obligation to execute it as arrears of land revenue. Under Article 226 of the Constitution, the High Court can issue a Writ of Mandamus directing the District Magistrate to complete recovery within a strict 60-to-90-day window.",
    steps: [
      {
        step: "File Certified Asset Schedule & RTI With the Collectorate",
        description:
          "Serve a written representation to the District Magistrate and Tehsildar enclosing the RC number, known bank account details of the promoter (including the 70% RERA escrow account), and list of unsold inventory. Simultaneously file an RTI asking for the daily action-taken report on your RC.",
      },
      {
        step: "Serve Pre-Mandamus Statutory Notice on Revenue Authorities & Builder",
        description:
          "Put the builder's directors on formal legal notice of imminent attachment of personal/corporate assets and notify the Collectorate of your intent to move the High Court if recovery citation is not executed.",
      },
      {
        step: "File Article 226 Writ of Mandamus in the High Court",
        description:
          "If the Collector fails to recover the dues within 60–90 days of RC issuance, file a Civil Misc. Writ Petition before the jurisdictional High Court seeking a time-bound judicial direction to the District Collector to attach and auction the promoter's properties.",
      },
    ],
    statutoryRule: "Section 40(1) RERA Act 2016 + Article 226 Writ of Mandamus",
  },
  {
    id: "empty-escrow-accounts",
    tabLabel: "Empty Builder Bank Accounts",
    title: "Builder Siphoned Funds Out of the RERA Project Account or Claims Zero Bank Balance",
    cause:
      "When the Tehsildar or executing officer issues a bank attachment order, the builder's primary project bank account often shows a negligible balance because the promoter illegally diverted receivables into sister concerns, new SPVs, or personal accounts of directors.",
    legalBasis:
      "Under Section 4(2)(l)(D) of the RERA Act, promoters are statutorily mandated to maintain 70% of all amounts realized from allottees in a separate scheduled bank account. Diverting these funds is a serious statutory violation punishable under Section 60 (penalty up to 5% of project cost) and constitutes criminal breach of trust and cheating under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS). Furthermore, under Order XXI Rule 41 of the Code of Civil Procedure (applicable via Section 40(2)), the Authority can compel directors to disclose all movable and immovable assets on affidavit.",
    steps: [
      {
        step: "Move an Application Under Order XXI Rule 41 CPC Read With Section 40(2)",
        description:
          "Request the RERA Authority to direct all promoter directors to file a sworn affidavit of assets, income tax returns, bank statements across all scheduled banks, and details of unencumbered plots or flats.",
      },
      {
        step: "Demand Attachment of Unsold Flats, Commercial Units & Corporate Offices",
        description:
          "Land revenue recovery is not limited to bank balances. Provide the Tehsildar with the exact unit numbers of unsold apartments, commercial shops, or the builder's corporate office for physical sealing and public auction.",
      },
      {
        step: "Invoke Section 63 RERA Daily Penalty & BNS 316/318 Criminal Action",
        description:
          "File for daily non-compliance penalties under Section 63 and serve a notice threatening criminal prosecution for siphoning statutory 70% escrow funds.",
      },
    ],
    statutoryRule: "Section 4(2)(l)(D), Section 40(2) RERA & Order XXI Rule 41 CPC",
  },
  {
    id: "sham-appeal-delay",
    tabLabel: "Builder Threatening Appeal",
    title: "Builder Refuses to Pay Claiming They Have Filed (or Will File) an Appeal Before REAT",
    cause:
      "After losing before the RERA Authority, builders routinely refuse to comply by claiming they are filing an appeal before the Real Estate Appellate Tribunal (REAT) or High Court, hoping to stall the homebuyer for years without paying a single rupee.",
    legalBasis:
      "Under the proviso to Section 43(5) of the RERA Act, 2016—upheld emphatically by the Supreme Court in M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP (2021) 18 SCC 1—where a promoter files an appeal against a RERA order, the appeal CANNOT be entertained unless the promoter first deposits with the Appellate Tribunal at least 30% of the penalty, or the TOTAL amount to be paid to the allottee including interest and compensation, whichever is higher. Mere filing of a defective appeal without the mandatory 100% pre-deposit creates zero stay on execution.",
    steps: [
      {
        step: "Demand Certified Proof of Section 43(5) 100% Pre-Deposit",
        description:
          "Ask the builder in writing to produce the REAT diary number, formal stay order, and receipt of 100% pre-deposit of principal plus interest under Section 43(5).",
      },
      {
        step: "File Section 40 Execution Immediately After 45 Days",
        description:
          "Do not wait for the builder's threatened appeal. Once the 45-day compliance window in the RERA order expires without an active stay order, file the online execution application immediately.",
      },
      {
        step: "Apply for Release of Deposited Funds if Appeal Is Filed",
        description:
          "If the builder actually deposits 100% of the refund and interest before REAT, your money is now secured in a court-controlled account and can be released upon dismissal of the appeal.",
      },
    ],
    statutoryRule: "Proviso to Section 43(5) RERA Act & Newtech Promoters (2021) 18 SCC 1",
  },
  {
    id: "builder-nclt-insolvency",
    tabLabel: "Builder in NCLT / IBC",
    title: "Corporate Builder Enters Insolvency (CIRP) at NCLT After Your RERA Order",
    cause:
      "When a heavily indebted real estate company is admitted into Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code, 2016 (IBC), a statutory moratorium under Section 14 IBC takes effect, halting individual recovery certificate attachments against the corporate debtor's assets.",
    legalBasis:
      "Under Section 5(8)(f) of the IBC (as upheld by the Supreme Court in Pioneer Urban Land and Infrastructure Ltd. v. Union of India, 2019), homebuyers—including those holding RERA refund decrees—are classified as 'Financial Creditors in a Class'. While Section 14 IBC pauses individual execution by the District Collector against the company during CIRP, your RERA order crystallizes your exact principal and statutory interest claim before the Interim Resolution Professional (IRP). Moreover, the Section 14 moratorium applies only to the corporate debtor, not to personal assets of promoter-directors who gave personal guarantees or committed fraud.",
    steps: [
      {
        step: "Submit Form CA to the Interim Resolution Professional (IRP)",
        description:
          "Within the public announcement deadline (and even belatedly before resolution plan approval), file Form CA as a Financial Creditor in a Class, attaching your certified RERA refund order and interest calculation sheet.",
      },
      {
        step: "Vote in the Committee of Creditors (CoC) Through the Authorized Representative",
        description:
          "Ensure the Authorised Representative (AR) of homebuyers records your crystallized RERA decree value (principal + SBI MCLR + 2% interest) in the Information Memorandum.",
      },
      {
        step: "Pursue Non-Corporate Promoters or Personal Guarantors Separately",
        description:
          "If the builder is a proprietorship, partnership, or if directors signed personal indemnity/buyback guarantees, Section 14 IBC corporate moratorium does not shield their personal assets.",
      },
    ],
    statutoryRule: "Section 5(8)(f) & Section 14 IBC 2016; Pioneer Urban Land (2019) 8 SCC 416",
  },
];

export default function ReraRecoveryProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100" role="tablist" aria-label="RERA Order Enforcement Scenarios">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            role="tab"
            aria-selected={activeTab === problem.id}
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === problem.id
                ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="pt-5 space-y-4" role="tabpanel">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            Statutory Rule: {activeProblem.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {activeProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider">
              Why Execution Stalls (The Bottleneck)
            </strong>
            <p className="leading-relaxed">{activeProblem.cause}</p>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1.5 text-amber-950">
            <strong className="text-amber-900 font-bold block text-xs uppercase tracking-wider">
              Statutory Law &amp; Judicial Mandate
            </strong>
            <p className="leading-relaxed">{activeProblem.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-2.5 pt-2">
          <strong className="text-xs uppercase tracking-wider font-extrabold text-slate-900 block">
            Tactical Enforcement Plan to Recover Your Refund:
          </strong>
          <div className="grid grid-cols-1 gap-2.5">
            {activeProblem.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-500">
          Need to initiate pre-cancellation recovery or serve a formal compliance demand first? Read our{" "}
          <Link href="/builder-booking-cancellation-refund-legal-notice" className="text-blue-700 underline font-semibold">
            builder booking cancellation refund legal notice guide
          </Link>{" "}
          or explore{" "}
          <Link href="/legal-notice-to-builder-for-delayed-possession-refund" className="text-blue-700 underline font-semibold">
            delayed possession refund actions under Section 18 RERA
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
