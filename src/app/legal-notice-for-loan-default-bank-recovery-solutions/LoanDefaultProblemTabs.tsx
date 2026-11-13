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
    id: "secured-home-commercial",
    tabLabel: "Secured Loans (SARFAESI)",
    title: "Default in Secured Home, LAP or Commercial Real Estate Loans",
    cause:
      "When a borrower defaults on equated monthly installments (EMIs) for 90 consecutive days, the account is classified as a Non-Performing Asset (NPA) under Reserve Bank of India prudential norms. Banks holding valid mortgage or equitable charge over immovable properties must initiate recovery without court intervention under the SARFAESI Act, 2002. However, procedural defects in the statutory demand notice frequently give defaulting borrowers grounds to obtain stay orders from the Debts Recovery Tribunal (DRT).",
    legalBasis:
      "Under Section 13(2) of the SARFAESI Act, 2002, the bank or financial institution must issue a 60-day statutory demand notice detailing the exact amount due, interest breakdown, and secured assets charged. Under Section 13(3A), if the borrower submits any representation or objection, the bank must consider it and communicate a reasoned response within 15 days before proceeding to physical possession under Section 13(4).",
    steps: [
      {
        step: "Crystallize Outstanding Dues & Classify NPA",
        description:
          "Generate certified NPA ledger statements under the Bankers' Books Evidence Act, 1891, and calculate contractual interest up to the date of notice without compounding penal levies contrary to RBI directives.",
      },
      {
        step: "Draft & Serve Advocate Statutory Section 13(2) Notice",
        description:
          "Issue a 60-day demand notice via Speed Post AD, email, and WhatsApp (with delivery logs compliant with BSA Section 63) describing each mortgaged property schedule with title deeds details.",
      },
      {
        step: "Dispose Objections & Enforce Section 13(4) Possession",
        description:
          "Review borrower representations within 15 days under Section 13(3A). If unpaid, proceed to take symbolic or physical possession under Section 13(4) and apply to CMM/DM under Section 14.",
      },
    ],
    statutoryRule: "Section 13(2) & 13(4) SARFAESI Act, 2002; Section 106 TPA 1882",
  },
  {
    id: "unsecured-personal-business",
    tabLabel: "Unsecured Personal / Term Loans",
    title: "Default in Unsecured Personal Loans, Business Loans & Credit Lines",
    cause:
      "Unsecured term loans, merchant overdrafts, and personal lines of credit lack underlying collateral or hypothecated security. When the borrower defaults, banks cannot exercise self-help repossession under SARFAESI. Failure to serve a formal advocate loan recall notice creates an evidentiary void regarding the exact date of acceleration, enabling borrowers to contest liability, challenge interest rates, or exploit statutory limitation under the Limitation Act, 1963.",
    legalBasis:
      "Under the Indian Contract Act, 1872 (Sections 73 & 74), default in EMI repayment entitles the lending institution to accelerate the entire outstanding balance and terminate the loan agreement. An advocate-drafted loan recall notice establishes the breach of the sanction letter, revokes the credit facility, and sets a strict 15-day pre-litigation deadline before filing an Order 37 summary suit in Civil Court or lodging Section 19 DRT claims.",
    steps: [
      {
        step: "Assemble Loan Agreement & Digital Sanction Trail",
        description:
          "Collate the digitally signed loan sanction letter, borrower e-KYC credentials, repayment schedule, and bank statement demonstrating loan disbursement and subsequent default.",
      },
      {
        step: "Dispatch Advocate Loan Recall & Acceleration Demand",
        description:
          "Serve a 15-day statutory recall notice demanding full outstanding principal, accrued interest, and statutory costs. Dispatched via Speed Post, registered email, and messaging rails.",
      },
      {
        step: "Institute Summary Suit (Order 37 CPC) or DRT Petition",
        description:
          "If the borrower ignores the notice, institute a summary suit under Order 37 of the Code of Civil Procedure or file an original application before DRT if dues exceed ₹20 lakh.",
      },
    ],
    statutoryRule: "Sections 73-74 Indian Contract Act, 1872; Order 37 CPC 1908",
  },
  {
    id: "msme-corporate-insolvency",
    tabLabel: "MSME & Corporate Defaults",
    title: "Corporate Debtor & MSME Working Capital / CC Facility Defaults",
    cause:
      "Corporate entities and MSME units with cash credit (CC) limits, overdrafts, or letter of credit (LC) devolvement often default on stock statement submissions or interest servicing. In multibank consortiums or sole lending setups, lenders require a standardized loan recall mechanism that serves as legally unchallengeable proof of default for insolvency proceedings or DRT recovery.",
    legalBasis:
      "Under Section 7 of the Insolvency and Bankruptcy Code, 2016 (IBC), a financial creditor can initiate Corporate Insolvency Resolution Process (CIRP) against a corporate debtor for defaults of ₹1 crore or more. For claims below ₹1 crore, banks pursue original applications under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993 (RDBA). In both forums, a formal legal notice establishes the date of default and fulfills statutory debt proof.",
    steps: [
      {
        step: "Reconcile Consortium / Working Capital Exposures",
        description:
          "Prepare inter-creditor statements, unserviced drawing limits, inventory audit defaults, and audited asset classification reports.",
      },
      {
        step: "Issue Advocate Demand Notice & Personal Guarantee Invocation",
        description:
          "Serve joint demand notices on the borrower company and personal/corporate guarantors, invoking guarantee deeds under Section 128 of the Indian Contract Act, 1872.",
      },
      {
        step: "File Section 7 IBC Petition or Section 19 DRT Claim",
        description:
          "Initiate CIRP before NCLT or lodge an Original Application (OA) with urgent interim injunctions restraining disposal of unencumbered corporate assets.",
      },
    ],
    statutoryRule: "Section 7 IBC 2016; Section 19 RDBA 1993; Section 128 Contract Act",
  },
  {
    id: "vehicle-asset-hypothecation",
    tabLabel: "Vehicle & Equipment Finance",
    title: "Default in Commercial Vehicle, Car & Construction Equipment Loans",
    cause:
      "Automobile, commercial fleet, and equipment loans are secured by hypothecation of movable assets. While banks have the contractual right to repossess hypothecated vehicles upon continuous default, Supreme Court rulings (such as ICICI Bank v. Shanti Devi Sharma) prohibit forceful or non-consensual recovery through recovery agents without prior statutory written notice and reasonable opportunity to cure.",
    legalBasis:
      "Under Section 106 of the Transfer of Property Act, 1882, the Indian Contract Act, and RBI Fair Practices Code for Lenders, banks must serve a clear pre-possession advocate legal notice. The notice must specify the overdue installments, give a 7 to 15-day cure period, and put the borrower on formal notice that failure to regularize will trigger vehicle repossession and sale via public auction.",
    steps: [
      {
        step: "Verify Hypothecation Endorsement on VAHAN Portal",
        description:
          "Confirm active hypothecation entry on the Ministry of Road Transport VAHAN portal and retrieve RC copy alongside the loan hypothecation deed.",
      },
      {
        step: "Serve Advocate Pre-Repossession Legal Notice",
        description:
          "Send a 14-day notice warning of repossession, detailing the total overdue EMIs, late payment penalties, and location of surrender.",
      },
      {
        step: "Execute Repossession with Police Intimation & Inventory",
        description:
          "If unpaid, repossess the vehicle in compliance with RBI guidelines, prepare on-site inventory, file local police diary entry, and issue pre-sale notice.",
      },
    ],
    statutoryRule: "RBI Fair Practices Code; Section 106 TPA; Motor Vehicles Act Sec 51",
  },
  {
    id: "cheque-nach-bounce",
    tabLabel: "Cheque & NACH EMI Bounce",
    title: "Dishonour of EMI Cheques & NACH / e-Mandate Instructions",
    cause:
      "Borrowers frequently stop loan repayments by issuing stop-payment instructions or maintaining insufficient account balances, resulting in the return of Post-Dated Cheques (PDCs) or dishonour of National Automated Clearing House (NACH) auto-debits. These financial defaults constitute cognizable criminal and quasi-criminal offenses in India.",
    legalBasis:
      "Under Section 138 of the Negotiable Instruments Act, 1881, and Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act), dishonour of an electronic funds debit or cheque for insufficient funds is punishable with up to 2 years imprisonment, a fine up to twice the dishonoured amount, or both. The law mandates serving a statutory demand notice within 30 days of receiving the bank memo.",
    steps: [
      {
        step: "Capture Bank Return Memo & Rejection Code",
        description:
          "Obtain official banker's return memo with reasons such as 'Insufficient Funds' or 'Account Closed' within 30 days of presentation.",
      },
      {
        step: "Issue Statutory 15-Day Advocate Demand Notice",
        description:
          "Serve Section 138 / Section 25 statutory legal notice demanding payment within 15 days of receipt via Speed Post AD and electronic mail.",
      },
      {
        step: "File Criminal Complaint in Judicial Magistrate Court",
        description:
          "If the borrower fails to pay within 15 days, file a criminal complaint under Section 138 NI Act within 30 days from the expiry of the notice period.",
      },
    ],
    statutoryRule: "Section 138 NI Act, 1881; Section 25 Payment & Settlement Systems Act",
  },
];

export default function LoanDefaultProblemTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);

  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Scrollable Tab Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-thin">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="space-y-5 animate-fadeIn">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h3 className="text-base sm:text-xl font-bold text-slate-900">
            {current.title}
          </h3>
          <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
            {current.statutoryRule}
          </span>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div>
            <strong className="text-slate-900 font-bold block mb-1">
              Operational &amp; Recovery Challenge:
            </strong>
            <p className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              {current.cause}
            </p>
          </div>

          <div>
            <strong className="text-slate-900 font-bold block mb-1">
              Statutory Basis &amp; Legal Enforceability:
            </strong>
            <p className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              {current.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Rail */}
        <div className="space-y-2.5 pt-2">
          <strong className="text-slate-900 font-bold text-xs sm:text-sm block">
            Standard Operating Procedure for Bank Legal Teams:
          </strong>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">
                    {st.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
