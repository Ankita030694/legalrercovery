"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DisputeTab {
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

const DISPUTES: DisputeTab[] = [
  {
    id: "vendor-invoices",
    tabLabel: "Vendor Invoices",
    title: "Unpaid B2B Commercial Invoices, Supplier Dues & Freelance Fees",
    cause:
      "A commercial buyer, retail merchant, or corporate client withholding legitimate payments for delivered goods or services past the 30-day or 45-day credit period. In regular civil litigation, filing a commercial money suit requires paying ad-valorem state court fees (up to 5%–10% of the claim amount upfront) and waiting 3 to 7 years for a contested trial.",
    legalBasis:
      "Section 19(5)(ii) of the Legal Services Authorities Act, 1987 empowers District Legal Services Authorities (DLSA) to take cognizance of pre-litigation commercial disputes. An application before DLSA costs ₹0 in court fees. When the debtor agrees to a negotiated settlement or structured payment schedule, the award passed under Section 21 operates as a binding Civil Court decree executable under Order 21 CPC.",
    steps: [
      {
        step: "Collate Commercial Contracts, Invoices & Delivery Proofs",
        description:
          "Gather signed purchase orders, delivery challans, GST invoices, and WhatsApp / email payment acknowledgments confirming undisputed debt liability.",
      },
      {
        step: "Issue Advocate Pre-Litigation Notice with DLSA Option",
        description:
          "Serve a formal statutory demand notice giving 15 days to clear the dues or submit to pre-litigation conciliation before the DLSA Lok Adalat panel.",
      },
      {
        step: "Lodge DLSA Pre-Litigation Application & Sign Section 21 Award",
        description:
          "Submit Form-1 Pre-Litigation Dispute before DLSA. If settled during conciliation, sign the terms of compromise to receive a final, non-appealable civil decree.",
      },
    ],
    statutoryRule: "Section 19(5)(ii) & Section 21 LSA Act 1987; Order 21 CPC",
  },
  {
    id: "cheque-bounce",
    tabLabel: "Cheque Bounce (s.138)",
    title: "Pre-Litigation Settlement of Dishonoured Cheques Before Criminal Filing",
    cause:
      "A cheque issued towards a legally enforceable debt is returned dishonoured by the bank with reasons such as 'Funds Insufficient' or 'Exceeds Arrangement'. While a formal Section 138 NI Act criminal prosecution requires filing within 30 days of notice expiry, parties often prefer settling without the expense, magisterial appearances, and criminal warrants.",
    legalBasis:
      "Section 147 of the Negotiable Instruments Act, 1881 makes every offence under Section 138 expressly compoundable. The Supreme Court in K.N. Govindan Kutty Menon v. C.D. Shaji (2012) 2 SCC 31 established that an award passed by a Lok Adalat in a Section 138 dispute—whether at the pre-litigation stage or pending court trial—is deemed to be a civil decree executable through a Civil Court under Order 21 CPC.",
    steps: [
      {
        step: "Issue Mandatory 30-Day Section 138 Statutory Demand Notice",
        description:
          "Dispatch statutory legal notice within 30 days of receiving the bank memo via Registered Speed Post, demanding clearance within 15 calendar days.",
      },
      {
        step: "Refer Matter to National Lok Adalat or DLSA Pre-Litigation Cell",
        description:
          "If the drawer expresses willingness to pay in installments or through a lump-sum haircut, approach the local DLSA for immediate compoundable conciliation.",
      },
      {
        step: "Execute Consent Decree under Order 21 CPC if Post-Dated Cheques Default",
        description:
          "If the drawer defaults on the Lok Adalat settlement installments, the payee bypasses a fresh trial and files an immediate execution petition to attach bank accounts or property.",
      },
    ],
    statutoryRule: "Section 147 NI Act 1881; K.N. Govindan Kutty Menon (2012) 2 SCC 31",
  },
  {
    id: "bank-loan-ots",
    tabLabel: "Bank Loan & OTS",
    title: "Bank, NBFC & Credit Card NPA Dues: One-Time Settlement (OTS)",
    cause:
      "Borrowers facing financial distress or loan defaults receive persistent recovery agent demands, Section 13(2) SARFAESI notices, or DRT pre-action alerts. Borrowers want an official, legally insulated waiver of penal interest and principal haircut without harassment.",
    legalBasis:
      "National Lok Adalats organized by NALSA are the premier statutory forum for institutional One-Time Settlements (OTS). Under RBI Guidelines on Compromise Settlements and Lok Adalat protocols, public sector banks and NBFCs possess delegated board authority to write off penal interest, waive legal charges, and approve structured installment plans.",
    steps: [
      {
        step: "Receive DLSA Pre-Litigation Summons or Request Bank Referral",
        description:
          "Banks regularly refer pre-litigation NPA loan portfolios to DLSA. Alternatively, the borrower can request the branch manager to place their account in the upcoming National Lok Adalat.",
      },
      {
        step: "Negotiate Waiver of Penal Interest & Broken Charges",
        description:
          "Present verified proof of income disruption, medical emergencies, or business distress before the neutral Lok Adalat conciliator panel (sitting/retired judge and advocate).",
      },
      {
        step: "Secure Final No Dues Certificate (NDC) Post-Settlement",
        description:
          "Ensure the Lok Adalat award mandates release of mortgaged title deeds and issuance of an unencumbered NDC within 30 days of final payment.",
      },
    ],
    statutoryRule: "RBI Circular on Compromise Settlements; Section 19(5) LSA Act 1987",
  },
  {
    id: "builder-landlord",
    tabLabel: "Rent & Deposit Dues",
    title: "Security Deposit Withheld by Landlords & Stuck Builder Advance Refunds",
    cause:
      "Landlords unlawfully forfeiting 2 to 6 months of security deposits upon tenant move-out on bogus painting deductions, or real estate developers withholding earnest money advances after project delays or cancelled bookings without delivering possession.",
    legalBasis:
      "Security deposit withholding and advance token disputes are actionable civil recovery matters under Section 73 & Section 74 of the Indian Contract Act, 1872. Pre-litigation Lok Adalats provide rapid redressal without the 2–3 year waiting queue of Rent Tribunals or RERA, producing an immediate enforceable award.",
    steps: [
      {
        step: "Compile Rental Agreement, Inspection Notes & Move-Out Handover",
        description:
          "Gather signed lease deed, bank transfer receipts for security deposit, move-out handover message, and photographic evidence disproving property damage.",
      },
      {
        step: "Serve Formal Legal Notice Demanding Deposit Refund",
        description:
          "Give the landlord or builder 15 days to release funds via RTGS or accept DLSA pre-litigation conciliation before filing a civil recovery suit.",
      },
      {
        step: "Draw Up Binding Settlement Award with Fixed Repayment Date",
        description:
          "The DLSA panel establishes payment timelines. Once signed, the landlord cannot retract or file an appeal, ensuring instant execution if breached.",
      },
    ],
    statutoryRule: "Sections 73-74 Indian Contract Act 1872; Section 21 LSA Act 1987",
  },
  {
    id: "personal-loans",
    tabLabel: "Personal & Friendly Loans",
    title: "Recovery of Friendly Loans, Promissory Notes & Unsecured Debts",
    cause:
      "Money lent to relatives, acquaintances, or business colleagues based on promissory notes, handwritten receipts, bank UPI / NEFT transfers, or WhatsApp agreements that remain unpaid despite repeated oral reminders.",
    legalBasis:
      "Friendly loan recovery in civil court requires substantial court fees and complex summons procedures. Before DLSA pre-litigation benches, a simple petition with bank passbook entries and acknowledgment messages allows judicial conciliators to impress the legal reality of an impending civil decree upon the debtor.",
    steps: [
      {
        step: "Collect Proof of Debt Transfer & Written Acknowledgments",
        description:
          "Collate bank statements displaying the debit, promissory note (on requisite stamp paper), and WhatsApp or email messages acknowledging repayment obligation.",
      },
      {
        step: "File Free Application with DLSA Pre-Litigation Cell",
        description:
          "Submit the dispute to the Secretary, DLSA at the District Court complex. DLSA issues an official court notice to the opposite party for conciliation appearance.",
      },
      {
        step: "Obtain Compromise Award or Proceed to Summary Suit",
        description:
          "If the debtor settles, obtain an enforceable civil decree. If the debtor evades notice, utilize the non-settlement DLSA certificate to file an Order 37 summary suit in civil court.",
      },
    ],
    statutoryRule: "Negotiable Instruments Act s.4; Section 20(2) LSA Act 1987",
  },
];

export default function LokAdalatProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(DISPUTES[0].id);

  const activeDispute =
    DISPUTES.find((item) => item.id === activeTabId) || DISPUTES[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Category Selection Tabs Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {DISPUTES.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
            {activeDispute.title}
          </h3>
          <span className="text-[11px] font-extrabold px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded-full self-start sm:self-auto uppercase tracking-wider">
            {activeDispute.statutoryRule}
          </span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
            <strong className="text-slate-900 block font-bold mb-1">
              The Dispute Bottleneck:
            </strong>
            <p>{activeDispute.cause}</p>
          </div>

          <div className="p-3.5 bg-blue-50/60 border border-blue-200/70 rounded-xl text-blue-950">
            <strong className="text-blue-900 block font-bold mb-1">
              Statutory Basis &amp; Pre-Litigation Authority:
            </strong>
            <p>{activeDispute.legalBasis}</p>
          </div>
        </div>

        {/* 3 Step Action Hierarchy for this Specific Dispute */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500">
            Recommended Statutory Action Sequence
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeDispute.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <strong className="text-xs font-bold text-slate-900">
                    {s.step}
                  </strong>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
          <span>
            Need help serving notice before approaching DLSA? Explore our{" "}
            <Link href="/send-legal-notice-online-india" className="text-blue-700 underline font-semibold">
              online legal notice service
            </Link>{" "}
            and check{" "}
            <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">
              legal notice charges
            </Link>.
          </span>
        </div>
      </div>
    </div>
  );
}
