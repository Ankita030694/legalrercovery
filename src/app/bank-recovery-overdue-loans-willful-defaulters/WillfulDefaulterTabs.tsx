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
    id: "siphoning-diversion",
    tabLabel: "Fund Siphoning & Diversion",
    title: "Deliberate Fund Diversion & Siphoning to Sister Concerns and Shell Companies",
    cause:
      "Promoters divert term loan disbursements, working capital overdrafts, or project advances away from sanctioned end-use purposes into un-related subsidiary accounts, promoter-controlled shell entities, or circular billing arrangements. When the lending bank seeks utilization certificates or stock audits, the borrower presents fabricated invoices, unverified balance sheets, or bogus subcontractor debit notes.",
    legalBasis:
      "Under Paragraph 3.1 of the RBI Master Directions on Wilful Defaulters (2024), utilizing bank funds for purposes other than those for which credit facilities were granted, or siphoning funds such that neither the assets nor the money are available with the entity, triggers mandatory classification as a Wilful Defaulter. This deliberate act constitutes criminal breach of trust under Section 316 BNS and cheating under Section 318 BNS, alongside corporate fraud under Section 447 of the Companies Act, 2013.",
    steps: [
      {
        step: "Commission Independent Forensic Audit & Transaction Review",
        description:
          "Engage an empanelled forensic auditor to examine 3 to 5 years of bank statements, GST returns, debtor turnover, and related-party ledger flows to identify round-tripping, fictitious vendor debits, and fund diversions.",
      },
      {
        step: "Convene Identification Committee & Issue 21-Day Show Cause Notice",
        description:
          "The bank's Identification Committee (headed by an Executive Director) reviews the forensic audit findings and issues a formal 21-day show-cause notice detailing specific transactions and documentary proof of diversion.",
      },
      {
        step: "Pass Speaking Order & Institute Section 318 BNS Criminal FIR",
        description:
          "Following review by the Review Committee (chaired by MD/CEO), register the willful defaulter tag with CIBIL/Crif, and concurrently lodge a police/CBI FIR under Section 318 BNS (Cheating) and Section 316 BNS (Criminal Breach of Trust).",
      },
    ],
    statutoryRule: "RBI Master Directions 2024 (Para 3.1) • Section 318 & 316 BNS • Section 447 Companies Act",
  },
  {
    id: "absconding-promoters",
    tabLabel: "Promoters Fleeing Abroad",
    title: "Promoters & Directors Attempting to Flee India to Evade Debt Recovery",
    cause:
      "Fearing criminal prosecution, forensic audit revelations, or DRT attachment orders, key managerial personnel, managing directors, and personal guarantors attempt to quietly relocate assets offshore and flee India on personal passports to jurisdictions without bilateral extradition treaties.",
    legalBasis:
      "Under Ministry of Home Affairs (MHA) Office Memoranda and guidelines governing Look Out Circulars (LOC), the Chairman, Managing Director, or Chief Executive of Public Sector Banks and authorized officials of financial institutions are legally empowered to request the Bureau of Immigration (BOI) to open an LOC against defaulting promoters to prevent their departure from Indian airports and seaports. The Supreme Court and High Courts have consistently upheld that economic safety of the state and protection of public funds justify travel restrictions.",
    steps: [
      {
        step: "Verify Threshold & Board Approval for LOC Opening",
        description:
          "Ensure loan default meets the statutory financial threshold (₹50 Crore+ for public interest or systemic fraud exposure) and obtain formal sanction from the Bank's competent authority (Chairman/MD/CEO).",
      },
      {
        step: "Transmit Formatted LOC Request to Bureau of Immigration",
        description:
          "Submit the prescribed proforma containing full passport details, Aadhaar, PAN, father's name, corporate affiliations, and pending recovery/criminal case details to the Ministry of Home Affairs and BOI.",
      },
      {
        step: "Institute Section 95 IBC & DRT Ne Exeat Regno Restraints",
        description:
          "Simultaneously move the Debt Recovery Tribunal (DRT) or NCLT under Section 95 IBC for orders directing the surrender of passports and restraining disposal of domestic and foreign assets.",
      },
    ],
    statutoryRule: "MHA Office Memorandum on LOCs • Section 19(25) RDB Act 1993 • Section 95 IBC 2016",
  },
  {
    id: "refusing-guarantors",
    tabLabel: "Guarantor Repudiation",
    title: "Corporate & Personal Guarantors Refusing to Honor Payment Demands",
    cause:
      "When the principal corporate borrower defaults, high-net-worth promoters, directors, or parent entities who executed absolute, unconditional, and irrevocable personal or corporate deed of guarantees deliberately dispute their obligations, plead absence of consideration, or claim that guarantor liability only arises after exhausting remedies against the borrower.",
    legalBasis:
      "Under Section 128 of the Indian Contract Act, 1872, the liability of a guarantor is co-extensive with that of the principal debtor. Under the RBI Master Directions 2024 (Paragraph 4.2), if a guarantor fails or refuses to make payment despite receiving a formal demand notice from the bank while possessing the financial capability to pay, the guarantor itself must be classified as a Wilful Defaulter. In State Bank of India v. V. Ramakrishnan, the Supreme Court affirmed that Section 14 IBC moratorium does not apply to personal guarantors.",
    steps: [
      {
        step: "Issue Formal Guarantee Invocation Demand Notice",
        description:
          "Serve a peremptory legal demand notice invoking the deed of guarantee, demanding full settlement of outstanding principal, accrued interest, and penal charges within a strict 15-day timeline.",
      },
      {
        step: "Initiate Willful Defaulter Proceedings Against Guarantor",
        description:
          "If the guarantor fails to remit funds despite possessing disclosed liquid assets, initiate the Identification Committee process to tag the guarantor as a Wilful Defaulter, blocking access to all future credit.",
      },
      {
        step: "File Section 95 IBC Application & DRT Recovery Suit",
        description:
          "File an insolvency petition under Section 95 of the IBC against the personal guarantor before the NCLT and obtain an immediate interim moratorium over guarantor personal wealth.",
      },
    ],
    statutoryRule: "Section 128 Indian Contract Act • RBI Master Directions 2024 (Para 4.2) • Section 95 IBC",
  },
  {
    id: "disposal-hypothecated-assets",
    tabLabel: "Asset Removal & Falsification",
    title: "Concealment, Falsification or Unauthorized Disposal of Pledged & Hypothecated Stocks",
    cause:
      "Borrowers clandestinely sell off hypothecated raw materials, finished stock, plant machinery, or book debts without depositing the sale proceeds into the designated escrow/trapped current account with the lending bank, leaving the bank's security coverage entirely depleted.",
    legalBasis:
      "Paragraph 3.1(d) of the RBI Master Directions classifies the disposal or removal of secured assets without the bank's written consent as an explicit ground for willful default. Clandestinely removing hypothecated security constitutes criminal misappropriation under Section 316 BNS, cheating under Section 318 BNS, and contempt under Section 13(4) of the SARFAESI Act, 2002.",
    steps: [
      {
        step: "Execute Surprise Stock Audit & Physical Inspection",
        description:
          "Depute bank officers and empaneled chartered engineers to conduct an immediate on-site inspection of borrower factory godowns, warehouses, and offices to document the physical absence of hypothecated goods.",
      },
      {
        step: "File Police Complaint for Criminal Misappropriation",
        description:
          "File an immediate criminal complaint at the jurisdictional police station under Section 316 and 318 BNS for theft, criminal misappropriation, and fraudulent alienation of pledged assets.",
      },
      {
        step: "Move Section 14 SARFAESI for Physical Possession",
        description:
          "File an urgent application before the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) under Section 14 of SARFAESI to appoint an advocate commissioner to take physical control of remaining assets.",
      },
    ],
    statutoryRule: "RBI Master Directions 2024 (Para 3.1.d) • Section 13 & 14 SARFAESI Act • Section 316 BNS",
  },
];

export default function WillfulDefaulterTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Pill Header */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50 p-2 gap-2">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/60"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200/60 inline-block mb-2">
            Dispute Scenario Blueprint
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              The Fraudulent Modus Operandi
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.cause}</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Statutory Basis &amp; Criminal Penalties
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Recommended Bank Escalation Protocol
          </h4>
          <div className="space-y-3">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-xs"
              >
                <span className="w-6 h-6 rounded-lg bg-red-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                    {st.step}
                  </strong>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Rule Strip */}
        <div className="p-3.5 bg-slate-900 text-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">
              Applicable Legal Benchmarks
            </span>
            <span className="font-semibold text-slate-100">{current.statutoryRule}</span>
          </div>
          <Link
            href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
            className="text-red-400 hover:text-red-300 font-bold text-xs underline shrink-0"
          >
            Send Bank Legal Notice →
          </Link>
        </div>
      </div>
    </div>
  );
}
