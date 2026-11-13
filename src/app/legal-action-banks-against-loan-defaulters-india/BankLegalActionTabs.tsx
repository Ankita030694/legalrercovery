"use client";

import React, { useState } from "react";
import Link from "next/link";

interface RemedyTab {
  id: string;
  tabLabel: string;
  title: string;
  assetClass: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
  typicalTimeline: string;
  costEfficiency: string;
}

const REMEDY_CHANNELS: RemedyTab[] = [
  {
    id: "sarfaesi-secured",
    tabLabel: "Secured / Mortgages (SARFAESI)",
    title: "SARFAESI Act, 2002: Direct Collateral Repossession Without Civil Court",
    assetClass: "Secured Housing, LAP, Commercial Real Estate, & Hypothecated Movables",
    cause:
      "When a borrower defaults on a secured credit facility and the account slips past 90 Days Past Due (DPD) into Non-Performing Asset (NPA) status, banks and notified NBFCs bypass lengthy civil trials. The primary bottleneck is ensuring lawful service of the statutory demand notice and addressing any borrower representations under Section 13(3A) within the mandatory 15-day window to avoid DRT stays.",
    legalBasis:
      "Under Section 13(2) of the SARFAESI Act, 2002, the bank issues a 60-day demand notice. If unpaid, Section 13(4) authorizes symbolic possession, takeover of management, or appointment of a receiver. Section 14 empowers the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) to provide administrative assistance and police protection for taking physical possession and conducting public e-auction.",
    steps: [
      {
        step: "NPA Classification & Section 13(2) Notice Dispatch",
        description:
          "Upon 90 DPD, the Authorized Officer serves a 60-day statutory demand notice detailing the outstanding balance, contractual interest rate, and precise description of secured properties via Registered Post and BSA-compliant digital delivery.",
      },
      {
        step: "Mandatory Reasoned Reply to Borrower Representation",
        description:
          "If the borrower submits an objection or representation under Section 13(3A), the bank must communicate a reasoned rejection or clarification within 15 days. Failure to do so invalidates subsequent possession.",
      },
      {
        step: "Section 13(4) Possession Notice & Section 14 DM Application",
        description:
          "Upon expiry of the 60-day notice, the bank affixes a possession notice on the property, publishes it in two leading newspapers (including one vernacular), and files an affidavit-backed application before the DM/CMM for physical handover.",
      },
      {
        step: "Reserve Price Valuation & Public E-Auction",
        description:
          "The bank obtains an independent valuation from an approved valuer, serves a 30-day individual sale notice to the borrower, issues public auction advertisement, and recovers dues through transparent bidding.",
      },
    ],
    statutoryRule: "Sections 13(2), 13(4), & 14 SARFAESI Act, 2002",
    typicalTimeline: "3 to 6 Months (Fastest for Secured Debt)",
    costEfficiency: "Extremely High (No court fees; minimal administrative cost)",
  },
  {
    id: "criminal-negotiable",
    tabLabel: "Cheque / NACH Bounce (Criminal)",
    title: "Section 138 NI Act & Section 25 PSS Act: Quasi-Criminal Pressure on Borrowers",
    assetClass: "Unsecured Personal Loans, Credit Lines, Business Loans & Vehicle EMI Default",
    cause:
      "For retail credit facilities without collateral or where borrowers deliberately halt EMI auto-debits, banks face high loss provisioning. Criminal remedies under the Negotiable Instruments Act and Payment and Settlement Systems Act create immediate personal exposure for borrowers and corporate signatories, driving fast out-of-court settlements.",
    legalBasis:
      "Section 25 of the Payment and Settlement Systems Act, 2007 makes dishonour of electronic NACH mandates a criminal offence with identical procedure to Section 138 of the Negotiable Instruments Act, 1881. Both provisions carry penalties of imprisonment up to two years, monetary fines up to twice the instrument amount, or both. Supreme Court in Meter and Instruments v. Kanchan Mehta affirmed that compoundable settlement can be ordered upon payment of dues.",
    steps: [
      {
        step: "Generate Official NPCI / Bank Return Memo",
        description:
          "Extract the formal bank return memo stating 'Insufficient Funds', 'Account Closed', or 'Mandate Cancelled by Customer' within banking clearing networks.",
      },
      {
        step: "Dispatch Advocate Statutory 15-Day Demand Notice Within 30 Days",
        description:
          "The bank's legal counsel must issue a statutory demand notice within 30 days of receiving the return memo, demanding full payment within 15 calendar days from notice delivery.",
      },
      {
        step: "File Criminal Complaint Before Judicial Magistrate (JMFC / MM)",
        description:
          "If the borrower fails to pay within 15 days, a formal criminal complaint must be instituted within 30 days before the jurisdictional Metropolitan Magistrate or Judicial Magistrate First Class.",
      },
      {
        step: "Secure Bailable / Non-Bailable Warrants for Compelled Appearance",
        description:
          "Upon verification under Section 200 CrPC / Section 223 BNSS, summons are issued. Non-appearance results in bailable and non-bailable warrants, compelling personal attendance and settlement deposit.",
      },
    ],
    statutoryRule: "Section 138 NI Act, 1881 & Section 25 PSS Act, 2007",
    typicalTimeline: "4 to 9 Months (Settlement usually reached at summons stage)",
    costEfficiency: "High (Nominal court fees; strong psychological & criminal leverage)",
  },
  {
    id: "drt-claims",
    tabLabel: "Dues > ₹20 Lakhs (DRT / RDB Act)",
    title: "Debt Recovery Tribunal (DRT): Fast-Track Adjudication for Large Debts",
    assetClass: "Commercial Term Loans, Working Capital, CC Limits & High-Value Mortgages (> ₹20L)",
    cause:
      "Civil courts take years to decide regular money recovery suits. To provide banks and financial institutions an expedited statutory recovery mechanism, Parliament created Debt Recovery Tribunals (DRT) and Debt Recovery Appellate Tribunals (DRAT) under the RDB Act, 1993 for debts exceeding ₹20 Lakhs.",
    legalBasis:
      "Under Section 19 of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, a bank files an Original Application (OA). The Presiding Officer can pass interim orders of injunction restraining the borrower from transferring assets, order disclosure of assets on oath, and issue a Recovery Certificate (RC) to the Recovery Officer under Section 25 for attachment and sale of movable/immovable assets or arrest and detention.",
    steps: [
      {
        step: "Collate Certified Statements & File Original Application (OA)",
        description:
          "Draft OA under Section 19 RDB Act with certified statement of accounts under the Bankers' Books Evidence Act / BSA Section 63, loan sanctions, and personal guarantees.",
      },
      {
        step: "Obtain Immediate Ex-Parte Interim Injunction Orders",
        description:
          "Seek interim restraint orders under Section 19(12) and 19(13) preventing the borrower and personal guarantors from alienating, selling, or encumbering their unpledged assets during trial.",
      },
      {
        step: "Expedited Evidence by Way of Affidavits",
        description:
          "DRT proceedings are governed by principles of natural justice rather than rigid CPC rules. Evidence is tendered on affidavits, expediting final hearings.",
      },
      {
        step: "Issuance of Recovery Certificate & Execution by Recovery Officer",
        description:
          "Upon final order, the Presiding Officer issues a Recovery Certificate (RC). The Recovery Officer executes it like a civil court decree, attaching accounts, properties, and receivables.",
      },
    ],
    statutoryRule: "Sections 19 & 25, Recovery of Debts and Bankruptcy Act, 1993",
    typicalTimeline: "12 to 24 Months",
    costEfficiency: "Moderate (Graduated DRT filing fees capped by statute)",
  },
  {
    id: "summary-arbitration",
    tabLabel: "Order 37 CPC & Arbitration",
    title: "Commercial Summary Suits & Fast-Track Institutional Arbitration",
    assetClass: "Unsecured MSME Loans, Corporate Working Capital Lines, Bills Discounting & Promissory Notes",
    cause:
      "Where claims are below ₹20 Lakhs (excluding DRT jurisdiction) or where loan agreements feature a bilateral institutional arbitration clause, banks need an enforceable money decree without undergoing a multi-year ordinary civil trial.",
    legalBasis:
      "Order XXXVII of the Code of Civil Procedure, 1908 applies to suits upon bills of exchange, hundis, promissory notes, and written contracts for debt recovery. The defendant has no automatic right to defend; they must apply for Leave to Defend within 10 days of summons, demonstrating a substantial defense. For arbitration, Section 29B of the Arbitration and Conciliation Act, 1996 mandates fast-track awards within 6 months, executable as a civil court decree under Section 36.",
    steps: [
      {
        step: "Serve Formal Loan Acceleration & Legal Demand Notice",
        description:
          "Issue formal notice terminating credit facilities, crystallizing liquidated debt, and demanding immediate clearance of unbilled principal and accrued interest.",
      },
      {
        step: "Institute Summary Suit in Commercial Court / Invoke Arbitration",
        description:
          "File under Order XXXVII CPC or issue Section 21 notice invoking arbitration under agreed institutional rules (e.g. DIAC, MCIA, or fast-track institutional panels).",
      },
      {
        step: "Summons for Judgment & Conditional Leave to Defend",
        description:
          "Under Order 37 Rule 3(5), the bank files Summons for Judgment. Unless the borrower deposits 50% to 100% of the admitted debt, courts deny leave to defend and enter immediate decree.",
      },
      {
        step: "Execution of Decree / Arbitral Award Under Order XXI CPC",
        description:
          "Execute the final decree or Section 36 award by attaching borrower bank accounts, salary/business cash flows, and unencumbered commercial assets.",
      },
    ],
    statutoryRule: "Order XXXVII CPC 1908 & Sections 11, 29B, 36 Arbitration Act 1996",
    typicalTimeline: "6 to 12 Months",
    costEfficiency: "High (Fast-track resolution avoids protracted trial expenses)",
  },
];

export default function BankLegalActionTabs() {
  const [activeTab, setActiveTab] = useState<string>(REMEDY_CHANNELS[0].id);

  const selectedChannel =
    REMEDY_CHANNELS.find((ch) => ch.id === activeTab) || REMEDY_CHANNELS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-200">
        {REMEDY_CHANNELS.map((ch) => {
          const isActive = ch.id === activeTab;
          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => setActiveTab(ch.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-left ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {ch.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Panel */}
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#DC2626] border border-red-200 rounded-full text-[11px] font-black uppercase tracking-wider mb-2">
            <span>Primary Asset Class: {selectedChannel.assetClass}</span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
            {selectedChannel.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Operational Challenge &amp; Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedChannel.cause}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Statutory Basis &amp; Enabling Laws
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedChannel.legalBasis}
            </p>
          </div>
        </div>

        {/* 4 Steps Container */}
        <div>
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3">
            Execution Steps for Banking Recovery Teams
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {selectedChannel.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-0.5">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Card with Key Metrics */}
        <div className="p-4 bg-red-950/5 border border-red-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
              Statutory Provisions
            </span>
            <span className="font-bold text-slate-900">
              {selectedChannel.statutoryRule}
            </span>
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
              Enforcement Timeline
            </span>
            <span className="font-bold text-emerald-700">
              {selectedChannel.typicalTimeline}
            </span>
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
              Portfolio Cost Efficiency
            </span>
            <span className="font-bold text-[#DC2626]">
              {selectedChannel.costEfficiency}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
