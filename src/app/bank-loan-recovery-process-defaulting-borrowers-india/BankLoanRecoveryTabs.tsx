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
    id: "sarfaesi-mortgage",
    tabLabel: "SARFAESI Mortgages",
    title: "Enforcing Security Interest Without Court Intervention (SARFAESI Act, 2002)",
    cause:
      "When a secured commercial, industrial, or residential housing loan defaults and remains overdue past 90 days, the lending institution classifies the account as a Non-Performing Asset (NPA). Borrowers often ignore telephone reminders or dispute interest capitalizations. Where immovable or movable collateral is secured by mortgage or hypothecation, waiting for civil court decrees takes 5 to 10 years, eroding collateral market value.",
    legalBasis:
      "Under Section 13(2) of the SARFAESI Act, 2002, the bank's Authorized Officer issues a statutory 60-day demand notice. If the borrower fails to discharge the liability or submits untenable representations, the bank disposes of objections within 15 days under Section 13(3A) and invokes Section 13(4) to take symbolic possession, followed by Section 14 petition before the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) for physical repossession and public e-auction under Security Interest (Enforcement) Rules, 2002.",
    steps: [
      {
        step: "Draft & Serve Statutory 60-Day Notice under Section 13(2)",
        description:
          "Compute exact outstanding principal, capitalized interest, and penal charges. Itemize the mortgaged immovable properties and dispatch notice via Registered Post AD and speed post to borrowers and guarantors.",
      },
      {
        step: "Mandatory Disposal of Representations under Section 13(3A)",
        description:
          "Within 15 days of receiving borrower objections or OTS proposals, the bank must examine the objection and communicate a reasoned speaking order if rejected, preventing DRT interim stays.",
      },
      {
        step: "Physical Possession via Section 14 CMM/DM & Public E-Auction",
        description:
          "File an application with supporting 9-point affidavit before the Chief Metropolitan Magistrate or District Magistrate for police assistance to take physical control and auction the property.",
      },
    ],
    statutoryRule: "Sections 13(2), 13(4), 14 SARFAESI Act 2002 & Security Interest Rules 2002",
  },
  {
    id: "drt-consortium",
    tabLabel: "DRT High-Value Dues",
    title: "Debt Recovery Tribunal (DRT) Original Applications for Debts Above ₹20 Lakh",
    cause:
      "For consortium advances, multiple banking arrangements, or high-value corporate non-performing exposures exceeding ₹20,00,000 where collateral is inadequate or disputed, secured and unsecured lenders face willful corporate defaulters diverting revenue. Civil court recovery is barred under Section 18 of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, mandating specialized DRT litigation.",
    legalBasis:
      "Section 19 of the RDB Act, 1993 empowers banks to institute an Original Application (OA) before the jurisdictional Debt Recovery Tribunal. The bank can seek interim ex-parte injunctions restraining defaulters from alienating unpledged assets, order disclosure of personal balance sheets on oath, and secure conditional attachments before judgment. Upon adjudication, the Presiding Officer issues a Recovery Certificate under Section 19(22), executed by the Recovery Officer under Section 25 via asset attachment, arrest, or receiver appointment.",
    steps: [
      {
        step: "File Original Application (OA) with Form & Certified Statement",
        description:
          "Lodge the OA under Section 19 before the jurisdictional DRT with certified statements under the Bankers' Books Evidence Act and Section 63 Bharatiya Sakshya Adhiniyam, 2023.",
      },
      {
        step: "Obtain Interim Asset Injunctions & Passport Restraints",
        description:
          "Move interlocutory applications for interim injunction restraining alienation of uncharged assets, bank account freezes, and impounding promoter passports to avert flight risk.",
      },
      {
        step: "Execute Recovery Certificate via DRT Recovery Officer",
        description:
          "Enforce the Recovery Certificate under Section 25 & 28 of RDB Act 1993 through attachment and sale of movable/immovable assets, garnishing debtor accounts, and civil detention.",
      },
    ],
    statutoryRule: "Section 19 & Section 25 Recovery of Debts and Bankruptcy (RDB) Act, 1993",
  },
  {
    id: "cheque-nach-bounce",
    tabLabel: "Cheque & NACH Default",
    title: "Criminal Prosecution for Bounced Repayment Cheques and Failed NACH Mandates",
    cause:
      "Borrowers frequently issue post-dated repayment cheques (PDCs) or authorize National Automated Clearing House (NACH) electronic auto-debits for monthly EMIs. Upon presentation, instruments are routinely dishonored with bank remarks like 'Insufficient Funds', 'Account Closed', or 'Exceeds Arrangement'. Defaulters falsely assume bouncing an electronic debit carries no penal consequence.",
    legalBasis:
      "Section 138 of the Negotiable Instruments Act, 1881 makes cheque dishonor a criminal offense punishable with up to 2 years imprisonment, a fine up to twice the cheque amount, or both. For electronic NACH mandates and UPI auto-debits, Section 25 of the Payment and Settlement Systems (PSS) Act, 2007 provides identical criminal prosecution and penal sanctions. Serving a strict 30-day statutory demand notice is a mandatory condition precedent.",
    steps: [
      {
        step: "Preserve Bank Return Memo & Timestamped Mandate Logs",
        description:
          "Secure original return memo from clearing bank stating reason for dishonor. For NACH, extract certified electronic failure logs from NPCI clearing rail.",
      },
      {
        step: "Serve 30-Day Statutory Advocate Demand Notice",
        description:
          "Issue a formal advocate legal demand notice within 30 days of receiving the return memo, giving the drawer 15 days from notice receipt to clear the full dishonored amount.",
      },
      {
        step: "File Criminal Complaint under Section 138 NI Act / 25 PSSA",
        description:
          "If payment is not remitted within 15 days, file a criminal complaint before the Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate within 30 days of cause of action.",
      },
    ],
    statutoryRule: "Section 138 NI Act 1881 & Section 25 Payment and Settlement Systems Act 2007",
  },
  {
    id: "unsecured-business",
    tabLabel: "Unsecured MSME Loans",
    title: "Fast-Track Commercial Summary Suits and Arbitration for Unsecured Debt",
    cause:
      "In unsecured business loans, clean personal lines, working capital overdrafts, and credit card portfolios where no tangible real estate is mortgaged, SARFAESI cannot be invoked. Defaulting borrowers leverage the absence of physical collateral to stall settlements. Conventional civil suits drag on for years through endless written statement extensions and witness cross-examinations.",
    legalBasis:
      "Under Order XXXVII (Order 37) of the Code of Civil Procedure, 1908, banks can institute an expedited Summary Suit in the competent Commercial Court based on loan agreements, promissory notes, and admitted debt acknowledgments. The defendant has no automatic right to defend; they must apply for Leave to Defend within 10 days of summons, demonstrating a substantial and genuine defense. If denied, the court enters immediate judgment.",
    steps: [
      {
        step: "Issue Advocate Demand Notice & Invoke Arbitration Clause",
        description:
          "Dispatch formal demand notice terminating the credit facility and invoking the arbitration clause under Section 21 of the Arbitration and Conciliation Act, 1996 if provided.",
      },
      {
        step: "Institute Commercial Summary Suit under Order 37 CPC",
        description:
          "If arbitration is not stipulated, file a Summary Suit before the Commercial Court appending the sanction letter, DP Note, and ledger extract, barring frivolous defenses.",
      },
      {
        step: "Execute Commercial Decree via Attachment and Garnishee Order",
        description:
          "Once summary decree is passed, initiate execution proceedings under Order XXI CPC to attach debtor trade receivables, book debts, plant machinery, and bank balances.",
      },
    ],
    statutoryRule: "Order XXXVII CPC 1908 & Commercial Courts Act 2015",
  },
  {
    id: "personal-guarantor",
    tabLabel: "Personal Guarantors (IBC)",
    title: "Insolvency Proceedings Against Promoters & Corporate Personal Guarantors",
    cause:
      "Corporate loans are virtually always backed by personal guarantees executed by managing directors, promoters, and high-net-worth individuals. When corporate borrowers default or enter Corporate Insolvency Resolution Process (CIRP), promoters attempt to shield personal assets behind shell entities or claim that personal liabilities are stayed during corporate moratoriums.",
    legalBasis:
      "Under Section 60(2) and Section 95 of the Insolvency and Bankruptcy Code (IBC), 2016, as upheld by the Supreme Court in SBI v. V. Ramakrishnan, personal guarantors to corporate debtors are not protected by corporate moratorium under Section 14. Financial creditors can file an insolvency application against personal guarantors directly before the National Company Law Tribunal (NCLT), triggering an interim-moratorium on personal assets and appointment of a Resolution Professional.",
    steps: [
      {
        step: "Invoke Personal Guarantee via Form-B Statutory Demand Notice",
        description:
          "Issue a formal demand notice invoking the Deed of Guarantee under Rule 7(1) of the Insolvency and Bankruptcy (Application to Adjudicating Authority for Insolvency Resolution Process for Personal Guarantors to Corporate Debtors) Rules, 2019.",
      },
      {
        step: "Lodge Section 95 IBC Application Before Jurisdictional NCLT",
        description:
          "File the petition before the NCLT bench handling the corporate debtor's CIRP, triggering an immediate interim-moratorium under Section 96 against the personal guarantor.",
      },
      {
        step: "Enforce Personal Asset Bankruptcy & Realization",
        description:
          "If the repayment plan under Section 105 fails, the NCLT passes a Bankruptcy Order under Section 121, vesting the guarantor's worldwide assets in the Bankruptcy Trustee for recovery.",
      },
    ],
    statutoryRule: "Section 60(2), Section 95 & Section 121 Insolvency and Bankruptcy Code 2016",
  },
];

export default function BankLoanRecoveryTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Scrollable Tab Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 no-scrollbar">
        {PROBLEMS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
            }`}
          >
            {tab.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-5 animate-fadeIn">
        <div className="space-y-2">
          <div className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
            {current.statutoryRule}
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              The Default Bottleneck &amp; Borrower Defense:
            </h4>
            <p className="text-slate-700 leading-relaxed">{current.cause}</p>
          </div>

          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Statutory Basis &amp; Bank Powers:
            </h4>
            <p className="text-slate-700 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        {/* Step-by-Step Practical Actions */}
        <div className="space-y-3 pt-2">
          <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
            Institutional Litigation Playbook for this Default Category:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {current.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white font-black text-[11px] flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 line-clamp-1">{st.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
